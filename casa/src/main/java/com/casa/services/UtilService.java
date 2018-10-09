package com.casa.services;

import com.casa.form.util.*;
import com.casa.model.Tbdeposit;
import com.casa.model.Tblogs;

import java.util.Date;
import java.util.List;


/**
 * Created by saoDG on 5/10/2018.
 */
public interface UtilService {

    AccountInquiryForm inquiryForm(String acctno);
    AccountCheckForm checkAcct(String acctno);
    AccountCheckForm checkAcctFundTrans(String acctnoto, String acctnofrom);
    Integer acctAlertOff(String accountno);

    Tbdeposit test(String accountno);
    String getCheckDigit(String accountno, int divisor);
    Integer uploadBulk(BulkForm data);
    Integer readBulk(Integer id);
    BatchFileListHandler getBatchList(Integer batchstatus);
    List<Tblogs> findAllByCurrentdate(Date currentdate);
    List<Tblogs> findAll();
    Tblogs findTopById(Integer id);

}
