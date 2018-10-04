package com.casa.services;

import com.casa.form.csr.*;
import com.casa.model.Tbcheckbook;
import com.casa.model.Tbdeposit;
import com.casa.model.Tbfreezeaccount;
import com.casa.model.Tbholdamtcheck;

import java.util.HashMap;
import java.util.List;

/**
 * Created by saoDG on 5/27/2018.
 */
public interface CustomerRelationService {

    AccountGenericForm createAccount(AccountCreationForm accountCreationForm);
    MaturedAccountHandler maturedAccountList(String accountno);
    AccountGenericForm rolloverAccount(Tbdeposit tbdeposit);
    String uploadSigcard(SigcardUploadForm form);
    SigcardUploadForm viewSigcard(String accountno);
    AccountGenericForm placeholdAmount(Tbholdamtcheck tbholdamtcheck);
    PlaceHoldFormHandler holdAmountList(String accountno, Integer type);
    AccountGenericForm listHoldAmount(HashMap<String, Object> data);
    AccountGenericForm placeSPO(Tbholdamtcheck tbholdamtcheck);
    StopPaymentOrderHandler spoList(String accountno);
    AccountGenericForm liftSPO(HashMap<String, Object> data);
    AccountMaintenanceForm getAccountMaintenanceDetail(String accountno);
    AccountGenericForm accountMaintenanceUpdate(HashMap<String, Object> data);
    AccountClosureForm closeAccountDetail(String accountno);
    AccountGenericForm closeAccount(String accountno);
    Integer checkbookIssuance(Tbcheckbook tbcheckbook);
    String tdcDetail(String accountno);
    TimeDepositCertFormHandler getTDCList(String accountno);
    Integer freezeAccount(Tbfreezeaccount data);
    Tbfreezeaccount liftFreezeInfo(String accountno);
    Integer liftFreeze(String accountno);
}
