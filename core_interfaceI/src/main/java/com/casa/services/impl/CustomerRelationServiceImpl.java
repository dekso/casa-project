package com.casa.services.impl;

import com.casa.form.csr.*;
import com.casa.model.*;
import com.casa.repository.*;
import com.casa.services.CustomerRelationService;
import org.apache.tomcat.util.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.regex.Pattern;
import java.util.zip.GZIPInputStream;

/**
 * Created by saoDG on 5/27/2018.
 */
@Service
public class CustomerRelationServiceImpl implements CustomerRelationService {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private CASACustomerRelRepository casaCustomerRelRepository;
    @Autowired
    private TbdepositJPARepository tbdepositJPARepository;
    @Autowired
    private TbdepositcifJPARepository tbdepositcifJPARepository;
    @Autowired
    private TbholdamtcheckJPARepository tbholdamtcheckJPARepository;
    @Autowired
    private TbcheckbookJPARepository tbcheckbookJPARepository;
    @Autowired
    private TbfreezeaccountJPARepository tbfreezeaccountJPARepository;
    @Autowired
    private CustomerRelationService customerRelationService;

    @Override
    public AccountGenericForm createAccount(AccountCreationForm accountCreationForm) {
        try {
            AccountGenericForm form = new AccountGenericForm();
            accountCreationForm.getTbdeposit().setAccountNo(casaCustomerRelRepository.generateAccountNumberSequence(
                    accountCreationForm.getTbdeposit().getUnit(), accountCreationForm.getTbdeposit().getSubProductCode(),
                    accountCreationForm.getTbdeposit().getProductCode()));
            accountCreationForm.setTbdeposit(tbdepositJPARepository.save(accountCreationForm.getTbdeposit()));
            for (Tbdepositcif cif : accountCreationForm.getCiflist()) {
                cif.setAccountno(accountCreationForm.getTbdeposit().getAccountNo());
                tbdepositcifJPARepository.save(cif);
            }
            if(accountCreationForm.getTbdeposit().getSlaidNo().length()>1){
                String[] chkSeries = accountCreationForm.getTbdeposit().getSlaidNo().split(Pattern.quote("|"));
                for(int i = 0;i<chkSeries.length;i++){
                    System.out.println(chkSeries[i]);
                }
                Tbcheckbook tbcheckbook = new Tbcheckbook();
                tbcheckbook.setCheckbkaccountno(accountCreationForm.getTbdeposit().getAccountNo());
                tbcheckbook.setCheckbookno(chkSeries.length>1?"":chkSeries[2]);
                tbcheckbook.setEndchkno(Integer.valueOf(chkSeries[1]));
                tbcheckbook.setStatus(1);
                tbcheckbook.setStartchkno(Integer.valueOf(chkSeries[0]));
                tbcheckbook.setUnit(accountCreationForm.getTbdeposit().getUnit());
                customerRelationService.checkbookIssuance(tbcheckbook);
            }
            System.out.println(">>>>>>>>>>>>>>>>>>>>>>>.");
            form.setResult(casaCustomerRelRepository.accountCreationInit(accountCreationForm.getTbdeposit().getAccountNo()));
            form.setValue(accountCreationForm.getTbdeposit().getAccountNo());
            logger.info("Account Created - Account No : " + accountCreationForm.getTbdeposit().getAccountNo());
            return form;
        } catch (Exception e) {
            logger.error("Account Creation Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public MaturedAccountHandler maturedAccountList(String accountno) {
        try {
            MaturedAccountHandler handler = new MaturedAccountHandler();
            List<Tbdeposit> list;
            if (accountno.equals("all")) {
                list = tbdepositJPARepository.getAllByProductCodeAndAccountStatus("40", 4);
            } else {
                list = tbdepositJPARepository.getAllByAccountNoAndProductCodeAndAccountStatus(accountno, "40", 4);
            }
            handler.setMaturedlist(list);
            return handler;
        } catch (Exception e) {
            logger.info("Matured Account List - Error ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public AccountGenericForm rolloverAccount(Tbdeposit tbdeposit) {
        try {
            AccountGenericForm form = new AccountGenericForm();
            String prevAcctNo = tbdeposit.getAccountNo();
            tbdeposit.setAccountNo(casaCustomerRelRepository.generateAccountNumberSequence(tbdeposit.getUnit(),
                    tbdeposit.getSubProductCode(), tbdeposit.getProductCode()));
            tbdepositJPARepository.save(tbdeposit);
            List<Tbdepositcif> ciflist = tbdepositcifJPARepository.getAllByAccountno(prevAcctNo);
            for (Tbdepositcif cif : ciflist) {
                cif.setAccountno(tbdeposit.getAccountNo());
                tbdepositcifJPARepository.save(cif);
            }
            casaCustomerRelRepository.updateAcctstat(prevAcctNo);
            form.setValue(tbdeposit.getAccountNo());
            form.setResult(casaCustomerRelRepository.accountCreationInit(tbdeposit.getAccountNo()));
            return form;
        } catch (Exception e) {
            logger.error("Rollover Account Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public String uploadSigcard(SigcardUploadForm form) {
        try {
            String dir = "C:/SpringbootImageUpload/";
//            InputStream in = new ByteArrayInputStream(form.getSigcard());
            byte[] sigcard = Base64.decodeBase64(form.getSigcard());
            ByteArrayInputStream bais = new ByteArrayInputStream(form.getSigcard());
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            GZIPInputStream gzipIS = new GZIPInputStream(bais);
            byte[] buffer = new byte[1024 * 2];
            int len;
            while ((len = gzipIS.read(buffer))!= -1 ) {
                baos.write(buffer, 0, len);
            }
            InputStream in = new ByteArrayInputStream(baos.toByteArray());
//            InputStream in = new ByteArrayInputStream(form.getSigcard());
            BufferedImage image = ImageIO.read(in);
//            System.out.println("name " +form.getAccoutno());
//            String svdir = dir+form.getAccoutno()+".png";
//            System.out.println("DIR SV " +svdir);
            File output = new File(dir + form.getAccoutno() + ".png");
            ImageIO.write(image, "png", output);
            return "1";
        } catch (Exception e) {
            logger.error("Upload Sigcard Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public SigcardUploadForm viewSigcard(String accountno) {
        try {
            SigcardUploadForm form = new SigcardUploadForm();
            String dir = "C:/SpringbootImageUpload/" + accountno + ".png";
            System.out.println(dir);
            File file = new File(dir);
            BufferedImage bufferedImage = ImageIO.read(file);
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(bufferedImage, "png", baos);
            baos.flush();
            System.out.println("SIGCARD BYTE : "+baos);
            form.setSigcard(baos.toByteArray());
            form.setAccoutno(accountno);
            return form;
        } catch (Exception e) {
            logger.error("View Sigcard Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public AccountGenericForm placeholdAmount(Tbholdamtcheck tbholdamtcheck) {
        try {
            AccountGenericForm form = new AccountGenericForm();
            BigDecimal balance = casaCustomerRelRepository.getHoldAmountBalance(tbholdamtcheck.getAccountno());
            if (tbholdamtcheck.getAmount().doubleValue() > balance.doubleValue()) {
                form.setResult(2);
            } else {
                tbholdamtcheckJPARepository.save(tbholdamtcheck);
                if (casaCustomerRelRepository.updateHoldAmount(tbholdamtcheck.getAccountno(),
                        tbholdamtcheck.getAmount(), Integer.parseInt(tbholdamtcheck.getTxcode())) > 0) {
                    form.setResult(1);
                }
            }
            return form;
        } catch (Exception e) {
            logger.error("Place Hold Amount Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public PlaceHoldFormHandler holdAmountList(String accountno, Integer type) {
        try {
            PlaceHoldFormHandler handler = new PlaceHoldFormHandler();
            List<PlaceHoldForm> list = casaCustomerRelRepository.holdAmountList(accountno, type);
            handler.setList(list);
            return handler;
        } catch (Exception e) {
            logger.error("Hold Amount List Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public AccountGenericForm listHoldAmount(HashMap<String, Object> data) {
        try {
            AccountGenericForm form = new AccountGenericForm();
            form.setResult(0);
            if (casaCustomerRelRepository.updateLiftHoldRecord(data) > 0) {
                form.setResult(casaCustomerRelRepository.updateLiftHoldAmount(data) == 1 ? 1 : 0);
            }
            return form;
        } catch (Exception e) {
            logger.error("Lift Hold Amount Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public AccountGenericForm placeSPO(Tbholdamtcheck tbholdamtcheck) {
        try {
            AccountGenericForm form = new AccountGenericForm();
            tbholdamtcheckJPARepository.save(tbholdamtcheck);
            form.setResult(1);
            return form;
        } catch (Exception e) {
            logger.error("Place SPO Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public StopPaymentOrderHandler spoList(String accountno) {
        try {
            StopPaymentOrderHandler handler = new StopPaymentOrderHandler();
            List<StopPaymentOrderForm> list = casaCustomerRelRepository.spoList(accountno);
            handler.setList(list);
            return handler;
        } catch (Exception e) {
            logger.error("SPO List Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public AccountGenericForm liftSPO(HashMap<String, Object> data) {
        try {
            AccountGenericForm form = new AccountGenericForm();
            form.setResult(casaCustomerRelRepository.lifSPO(data) > 0 ? 1 : 0);
            return form;
        } catch (Exception e) {
            logger.error("Lift SPO Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public AccountMaintenanceForm getAccountMaintenanceDetail(String accountno) {
        try {
            logger.info("Account Maintenance Detail Fetch Data...");
            return casaCustomerRelRepository.getAccountMaintenanceDetail(accountno);
        } catch (Exception e) {
            logger.error("Account Maintenance Detail Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public AccountGenericForm accountMaintenanceUpdate(HashMap<String, Object> data) {
        try {
            AccountGenericForm form = new AccountGenericForm();
            form.setResult(casaCustomerRelRepository.accountMaintenanceUpdate(data) > 0 ? 1 : 0);
            return form;
        } catch (Exception e) {
            logger.error("Account Maintenance Update Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public AccountClosureForm closeAccountDetail(String accountno) {
        try {
            AccountClosureForm form = casaCustomerRelRepository.closeAccountDetail(accountno);
            return form;
        } catch (Exception e) {
            logger.error("View Close Account Detail Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public AccountGenericForm closeAccount(String accountno) {
        try {
            AccountGenericForm form = new AccountGenericForm();
            form.setResult(casaCustomerRelRepository.closeAccount(accountno));
            return form;
        }catch (Exception e) {
            logger.error("Close Account Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public Integer checkbookIssuance(Tbcheckbook tbcheckbook) {
        /* 0 = account no not found, 1 = already issued, 2 = success, 3 = check series incorrect*/
        try {
            System.out.println("CHECK BOOK ACCOUNT NO : "+tbcheckbook.getCheckbkaccountno());
            if(tbdepositJPARepository.countByAccountNo(tbcheckbook.getCheckbkaccountno()) > 0) {
                if (tbcheckbookJPARepository.countByCheckbkaccountnoAndCheckbookno(tbcheckbook.getCheckbkaccountno(),
                        tbcheckbook.getCheckbookno()) > 0) {
                    return 1;

                } else if(tbcheckbookJPARepository.findTopByCheckbkaccountnoAndEndchknoGreaterThanEqual(tbcheckbook.getCheckbkaccountno()
                ,tbcheckbook.getStartchkno())!=null){
                    return 3;
                } else {
                    tbcheckbookJPARepository.save(tbcheckbook);
                    return 2;
                }
            }
            return 0;
        } catch (Exception e) {
            logger.error("Checkbook Issuance Error : ", e.getMessage(), e);
        }
        return null;
    }

    @Override
    public String tdcDetail(String accountno) {
        try {
            return casaCustomerRelRepository.getControlTDC(accountno);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public TimeDepositCertFormHandler getTDCList(String accountno) {
        try {
            TimeDepositCertFormHandler handler = new TimeDepositCertFormHandler();
            handler.setList(casaCustomerRelRepository.getTDAccountListTDC(accountno));
            return handler;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Integer freezeAccount(Tbfreezeaccount data) {
        try {
            Integer id = tbfreezeaccountJPARepository.save(data).getId();
            return casaCustomerRelRepository.freezeAccount(data.getAccountno(), data.getValiditydate(), id);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Tbfreezeaccount liftFreezeInfo(String accountno) {
        try {
            Tbdeposit tbdeposit = tbdepositJPARepository.findByAccountNo(accountno);
            System.out.println(">>>>>>>>.. " +tbdeposit.getFreezeid());
            return tbfreezeaccountJPARepository.findTbfreezeaccountById(tbdeposit.getFreezeid());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Integer liftFreeze(String accountno) {
        try {
            return casaCustomerRelRepository.liftFreeze(accountno);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}