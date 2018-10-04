package com.casa.services.impl;

import com.casa.form.fin.FinancialGenericForm;
import com.casa.form.fin.TransactForm;
import com.casa.model.*;
import com.casa.repository.*;
import com.casa.services.FinancialTransactionService;
import com.casa.util.UtilityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Entity;
import java.math.BigDecimal;

/**
 * Created by saoDG on 5/8/2018.
 */
@Service
public class FinancialTransactionServiceImpl implements FinancialTransactionService {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private CASATransactionRepository transactionRepository;
    @Autowired
    private CASAUtilRepository utilRepository;
    @Autowired
    private TbmanagerscheckJPARepository tbmanagerscheckJPARepository;
    @Autowired
    private TbfintxjrnlJPARepository tbfintxjrnlJPARepository;
    @Autowired
    private TbdepositJPARepository tbdepositJPARepository;
    @Autowired
    private TbfintxchecklistJPARepository tbfintxchecklistJPARepository;
    @Autowired
    private TbprodmatrixJPARepository tbprodmatrixJPARepository;
    @Autowired
    private TbmctxjrnlJPARepository tbmctxjrnlJPARepository;

    private UtilityService utilService;

    @Override
    public FinancialGenericForm financialTransaction(TransactForm transactForm) {
        try {
            FinancialGenericForm form = new FinancialGenericForm();
            boolean cntcheck, proceed = false;
            /* Checking if Fund Transfer or On Us Check Deposit */
            if (transactForm.getJrnl().getTxcode().equals("111211") || transactForm.getJrnl().getTxcode().equals("111322")) {
                String acct2 = transactForm.getJrnl().getTxcode().equals("111211") ? transactForm.getJrnl().getCheckacctno() : transactForm.getJrnl().getAccountnoto();
                cntcheck = tbdepositJPARepository.countByAccountNoOrAccountNo(transactForm.getJrnl().getAccountno(), acct2) == 2;
            } else {
                cntcheck = tbdepositJPARepository.countByAccountNo(transactForm.getJrnl().getAccountno()) > 0;
            }
            if (cntcheck) {
//                transactForm.getJrnl().setTxvaldt(utilService.fixDate(utilRepository.getBusinessDate()));
                transactForm.getJrnl().setOverride(0);
                transactForm.getJrnl().setTxstatus("1");
                transactForm.getJrnl().setHostacceptind("1");
                Tbdeposit tbdep = tbdepositJPARepository.getByAccountNo(transactForm.getJrnl().getTxcode().equals("111211") ?
                        transactForm.getJrnl().getCheckacctno() : transactForm.getJrnl().getAccountno());
                boolean atacheck = tbprodmatrixJPARepository.getATAInd(tbdep.getProductCode(), tbdep.getSubProductCode());
                //ATA transaction should be applied only to debit transaction
                if (atacheck && transactForm.getJrnl().getTxcode().substring(4,5).equals("2")) {
                    Tbdeposit atadep = tbdepositJPARepository.getByAccountNo(tbdep.getAccountnoata());
                    BigDecimal acctbal = tbdepositJPARepository.getBalance(tbdep.getAccountNo());
                    BigDecimal ataacctbal = atadep.getAccountBalance().subtract(atadep.getFloatAmount().add(atadep.getPlaceholdAmt()));
                    if (acctbal.doubleValue() >= transactForm.getJrnl().getTxamount().doubleValue()) {
                        proceed = true;
                    } else if (acctbal.doubleValue() + ataacctbal.doubleValue() < transactForm.getJrnl().getTxamount().doubleValue()) {
                        form.setResult("2");
                        form.setTxrefno(transactForm.getJrnl().getTxref());
                        return form;
//                    } else if (!atadep.getPosttx().equals("00") || !atadep.getPosttx().equals("11") || !atadep.getPosttx().equals("12")) {
                    } else if (!atadep.getPosttx().equals("00")) {
                        form.setResult("10");
                        form.setTxrefno(transactForm.getJrnl().getTxref());
                        System.out.println("PUMASOK ");
                        return form;
                    } else {
                        //*** Create fund transfer transaction
                        Tbfintxjrnl atajrnl = new Tbfintxjrnl();
                        atajrnl.setAccountno(tbdep.getAccountnoata());
                        atajrnl.setAccountnoto(tbdep.getAccountNo());
                        atajrnl.setTxcode("111323");
                        atajrnl.setTxrefmain(utilRepository.generateSequence());
                        atajrnl.setTxref(transactForm.getJrnl().getTxref());
                        atajrnl.setTxvaldt(transactForm.getJrnl().getTxvaldt());
                        atajrnl.setTxdate(transactForm.getJrnl().getTxdate());
                        atajrnl.setTxamount(transactForm.getJrnl().getTxamount().subtract(acctbal));
                        atajrnl.setTxby(transactForm.getJrnl().getTxby());
                        atajrnl.setTxstatus(transactForm.getJrnl().getTxstatus());
                        atajrnl.setOverride(transactForm.getJrnl().getOverride());
                        atajrnl.setHostacceptind("1");
                        atajrnl.setUnit(transactForm.getJrnl().getUnit());
                        tbfintxjrnlJPARepository.save(atajrnl);
                        FinancialGenericForm tempform = transactionRepository.processTransaction(atajrnl.getTxrefmain(), transactForm.getTellerslimit());
                        if (!tempform.getResult().equals("1")) {
                            transactionRepository.cancelTransaction(atajrnl.getTxrefmain());
                            tempform.setResult("10");
                            tempform.setTxrefno(atajrnl.getTxref());
                            return tempform;
                        }
                        proceed = true;
                    }
                } else {
                    proceed = true;
                }
                if (proceed) {
                    transactForm.getJrnl().setTxrefmain(utilRepository.generateSequence());
                    transactForm.getJrnl().setStatus(tbdep.getAccountStatus());
                    tbfintxjrnlJPARepository.save(transactForm.getJrnl());
                    if (transactForm.getJrnl().getTxcode().equals("111212")) {
                        for (Tbfintxchecklist chkdata : transactForm.getChecklist()) {
                            chkdata.setTxrefmain(transactForm.getJrnl().getTxrefmain());
                            tbfintxchecklistJPARepository.save(chkdata);
                        }
                    }
                    form = transactionRepository.processTransaction(transactForm.getJrnl().getTxrefmain(), transactForm.getTellerslimit());
                    System.out.println("FORM : " + form.getResult() + " " + form.getPosttx() + " " + form.getTxrefno());
                    System.out.println("RESULT : " + form.toString().length());
                    System.out.println("DDD "+transactForm.getJrnl().getTxrefmain());

                    return form;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("Financial Transaction Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public Integer overrideTransaction(String txref, String userid) {
        try {

            System.out.println(">>>>>> "+txref);
            System.out.println(" >>>. LOG "+transactionRepository.overrideTransaction(txref, userid));

            if (transactionRepository.overrideTransaction(txref, userid) > 0) {
                System.out.println("SUCCESS OVERRIDE!");
                FinancialGenericForm form = transactionRepository.processTransaction(txref, BigDecimal.ZERO);
                System.out.println("RESULT : " + form.getResult());
                return Integer.parseInt(form.getResult());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Integer cancelOverrideTransaction(String txref) {
        try {
            if (transactionRepository.cancelOverrideTransaction(txref) > 0) {
                System.out.println("CANCELLATION OVERRIDE SUCCESSFUL!");
                FinancialGenericForm form = transactionRepository.processTransaction(txref, BigDecimal.ZERO);
                System.out.println("RESULT : " + form.getResult());
                return Integer.parseInt(form.getResult());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    @Override
    public Integer errorCorrect(String txref) {
        try {
            return transactionRepository.errorCollect(txref);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Integer remoteOverride(String txref) {
        try {
            return transactionRepository.remoteOverride(txref);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Integer requestManagersCheck(Tbmanagerscheck tbmanagerscheck) {
        try {
            tbmanagerscheckJPARepository.save(tbmanagerscheck);
            return 1;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Integer depositMc(Tbmctxjrnl tbmctxjrnl) {
        try {
            /*
            * 1 = success
            * 2 = negotiated
            * 3 = not yet released
            * null = error in routine
            * */
            if(tbmanagerscheckJPARepository.countByMcchecknoAndIssuingbrAndStatus(tbmctxjrnl.getMccheckno(), tbmctxjrnl.getIssuingbr(),
                    2) > 0 ) {
                if(tbmctxjrnlJPARepository.countByMcchecknoAndIssuingbrAndTxstatus(tbmctxjrnl.getMccheckno(), tbmctxjrnl.getIssuingbr(),
                        2) == 0 ) {
                    tbmctxjrnl.setTxstatus(2);
                    tbmctxjrnlJPARepository.save(tbmctxjrnl);
                    transactionRepository.depositMc(tbmctxjrnl.getAccountno(), tbmctxjrnl.getAmount());
                } else {
                    return 2;
                }
            } else {
                return 3;
            }
            return 1;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
