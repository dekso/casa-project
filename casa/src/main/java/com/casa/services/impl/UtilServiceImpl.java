package com.casa.services.impl;

import com.casa.form.fin.FinancialGenericForm;
import com.casa.form.util.*;
import com.casa.model.Tbbatchfile;
import com.casa.model.Tbdeposit;
import com.casa.model.Tbfintxjrnl;
import com.casa.model.Tblogs;
import com.casa.repository.*;
import com.casa.services.FinancialTransactionService;
import com.casa.services.UtilService;
import org.apache.tomcat.util.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;

import java.io.*;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;

/**
 * Created by saoDG on 5/10/2018.
 */
@Service
public class UtilServiceImpl implements UtilService {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private CASAUtilRepository utilRepository;
    @Autowired
    private CASATransactionRepository casaTransactionRepository;
    @Autowired
    private TbdepositJPARepository tbdepositJPARepository;
    @Autowired
    private TbbatchfileJPARepository tbbatchfileJPARepository;
    @Autowired
    private TbbulkfinJPARepository tbbulkfinJPARepository;
    @Autowired
    private TbfintxjrnlJPARepository tbfintxjrnlJPARepository;
    @Autowired
    private TblogsJPARepository tblogsJPARepository;

    @Value("${bulk.file.url}")
    private String bulkFileUrl;

    private FinancialTransactionService financialTransactionService;

    @SuppressWarnings("unchecked")
    public AccountInquiryForm inquiryForm(String acctno){
        AccountInquiryForm form = new AccountInquiryForm();
        try {
            AccountInquiry inqform = utilRepository.getInquiry(acctno);
            if ( inqform == null) {
                form.setResult("0");
            } else {
                form.setInquiry(inqform);
                form.setAtainq(inqform.getAccountnoata()!=null ?
                        utilRepository.getInquiry(inqform.getAccountnoata()) : null);
                System.out.println(utilRepository.getInquiryJournal(acctno));
                form.setHistlist(utilRepository.getInquiryJournal(acctno));
                form.setResult("1");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return form;
    }

    public AccountCheckForm checkAcct(String acctno) {
        AccountCheckForm form = new AccountCheckForm();
        try {
            form = utilRepository.checkAccount(acctno);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return form;
    }

    @Override
    public AccountCheckForm checkAcctFundTrans(String acctnoto, String acctnofrom) {
        AccountCheckForm form = new AccountCheckForm();
        form.setResult("0");
        try {
            String currencynf = utilRepository.getCurrency(acctnofrom);
            String currencynt = utilRepository.getCurrency(acctnoto);
            form.setResult(currencynt == null && currencynf == null ? "0" : currencynf == null ? "0.1"
                    : currencynt == null ? "0.2" : !currencynf.equals(currencynt) ? "0.3" : "1");
            form.setCurrency(currencynf);
        } catch (Exception e){
            e.printStackTrace();
        }
        return form;
    }

    @Override
    public Integer acctAlertOff(String accountno) {
        try {
            return utilRepository.offAlert(accountno);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Tbdeposit test(String accountno) {
        return tbdepositJPARepository.getByAccountNo1(accountno);
//        return tbcheckbookJPARepository.getAllByCheckbkaccountno(accountno);
//        return null;
    }

    @Override
    public String getCheckDigit(String accountno, int divisor) {

        //MODULUS 11
        String checkdigit = "";
        String strDivisor = String.valueOf(divisor);
        String[] div = strDivisor.split("");
        String[] acctno = accountno.split("");

        //System.out.println(acctno.length);

        int chkdgt = 0;
        int sum = 0;
        int n = 1;
        for (int i = 1; i < acctno.length ; i++) {

            //System.out.println(div.length-1);

            if(n == (div.length))
                n = 1;

            //System.out.println("ACCOUNT[" + i + "]:" + acctno[i]);
            //System.out.println("DIV[" + n + "]:" + div[n]);
            sum = sum + (Integer.valueOf(acctno[i]) * Integer.valueOf(div[n]));

            n++;

        }

        //System.out.println("SUM:" + sum);
        chkdgt = sum % 11;
        chkdgt = 11-chkdgt;

        //rules agreed with Sir Lys 09152016
        if(chkdgt == 11 || chkdgt == 10)
            chkdgt = 0;



        checkdigit = String.valueOf(chkdgt) ;

        return checkdigit;

    }

    @Override
    public Integer uploadBulk(BulkForm data) {
        try {
            byte[] byteData = Base64.decodeBase64(data.getFileData());
            ByteArrayInputStream bais = new ByteArrayInputStream(byteData);
            ByteArrayOutputStream baos = new ByteArrayOutputStream();

            Path strDir = Paths.get(bulkFileUrl + data.getData().getBatchfilename());
            Files.write(strDir, data.getFileData());
            data.getData().setBatchstatus(0);
            tbbatchfileJPARepository.save(data.getData());
            System.out.println(">>>>>>>>>>>. ");
            return 1;
        } catch (Exception e) {
            logger.error("Upload BulkFile Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public Integer readBulk(Integer id) {
        Tbbatchfile batchFile = tbbatchfileJPARepository.findById(id);
        File file = new FileSystemResource(bulkFileUrl+batchFile.getBatchfilename()).getFile();
        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String sCurrentLine;
            while ((sCurrentLine = br.readLine()) != null) {
                /*
                * Data to format or input depends on the file to be uploaded
                * Mapping is only for testing, you nay change it
                * */
                String[] data = sCurrentLine.split(",");
                System.out.println(sCurrentLine);

                //
                if(tbdepositJPARepository.countByAccountNo(data[0]) > 0 ) {
                    //Credit memo
                    Tbfintxjrnl bulkFin = new Tbfintxjrnl();
                    bulkFin.setTxbatch(batchFile.getCompanycode());
                    bulkFin.setTxrefmain(utilRepository.generateSequence());
                    bulkFin.setAccountno(data[0]);
                    bulkFin.setTxamount(new BigDecimal(data[1]));
                    bulkFin.setTxcode("112013");
                    bulkFin.setTxdate(new Date()); //Temporary use DateUtils
                    bulkFin.setIssuingbr(batchFile.getOriginatingbr());
                    bulkFin.setBatchid(batchFile.getId());
                    bulkFin.setTxstatus("0");
                    bulkFin.setOverride(0);
                    bulkFin.setTxvaldt(new Date());
                    bulkFin.setCurrency("PHP");
                    tbfintxjrnlJPARepository.save(bulkFin);

                    FinancialGenericForm tempform = casaTransactionRepository.processTransaction(bulkFin.getTxrefmain(),
                            new BigDecimal(1000000));
                    System.out.println(">>>>>>>>>>  1 "+tempform.getResult());
                    if (Integer.parseInt(tempform.getResult()) > 1) {
                        financialTransactionService.cancelOverrideTransaction(bulkFin.getTxrefmain());
                    }
                    //Debit memo
                    bulkFin = new Tbfintxjrnl();
                    bulkFin.setTxbatch(batchFile.getCompanycode());
                    bulkFin.setTxrefmain(utilRepository.generateSequence());
                    bulkFin.setAccountno(data[2]);
                    bulkFin.setTxamount(new BigDecimal(data[1]));
                    bulkFin.setTxcode("122023");
                    bulkFin.setTxdate(new Date()); //Temporary use DateUtils
                    bulkFin.setIssuingbr(batchFile.getOriginatingbr());
                    bulkFin.setBatchid(batchFile.getId());
                    bulkFin.setTxstatus("0");
                    bulkFin.setOverride(0);
                    bulkFin.setTxvaldt(new Date());
                    bulkFin.setCurrency("PHP");
                    tbfintxjrnlJPARepository.save(bulkFin);

                    tempform = casaTransactionRepository.processTransaction(bulkFin.getTxrefmain(),
                            new BigDecimal(1000000));
                    System.out.println(">>>>>>>>>>  2 "+tempform.getResult());
                    if (Integer.parseInt(tempform.getResult()) > 1) {
                        financialTransactionService.cancelOverrideTransaction(bulkFin.getTxrefmain());
                    }
                }
            }
            utilRepository.updateBatchStatus(batchFile.getId());
            return 1;
        } catch ( Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public BatchFileListHandler getBatchList(Integer batchstatus) {
        try {
            // 9 = All
            System.out.println("GET BATCH >>> " +batchstatus);
            BatchFileListHandler handler = new BatchFileListHandler();
            if (batchstatus==9) {
                handler.setBatchlist(tbbatchfileJPARepository.findAll());
            } else {
                handler.setBatchlist(tbbatchfileJPARepository.findAllByBatchstatus(batchstatus));
            }
            return handler;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Tblogs> findAllByCurrentdate(Date currentdate){
        return tblogsJPARepository.findAllByCurrentdate(currentdate);
    }
    @Override
    public List<Tblogs> findAll(){
        return tblogsJPARepository.findAll();
    }
    @Override
    public Tblogs findTopById(Integer id){
        return tblogsJPARepository.findTopById(id);
    }

}
