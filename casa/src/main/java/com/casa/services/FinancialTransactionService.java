package com.casa.services;

import com.casa.form.fin.FinancialGenericForm;
import com.casa.form.fin.TransactForm;
import com.casa.model.Tbmanagerscheck;
import com.casa.model.Tbmctxjrnl;

/**
 * Created by saoDG on 5/8/2018.
 */
public interface FinancialTransactionService {

    FinancialGenericForm financialTransaction(TransactForm transactForm);
    Integer overrideTransaction(String txref, String userid);
    Integer cancelOverrideTransaction(String txref);
    Integer errorCorrect(String txref);
    Integer remoteOverride(String txref);
    Integer requestManagersCheck(Tbmanagerscheck tbmanagerscheck);
    Integer depositMc(Tbmctxjrnl tbmctxjrnl);
//    Integer set
//    Integer financialTransaction(Tbfintxjrnl journal);
}
