package com.casa.acct;

import java.util.Date;
import java.util.List;

import com.casa.acct.forms.AccountClosureForm;
import com.casa.acct.forms.AccountGenericForm;
import com.casa.acct.forms.AccountMaintenanceForm;
import com.casa.acct.forms.InquiryCIFNameList;
import com.casa.acct.forms.MaturedAccountActionForm;
import com.casa.acct.forms.PlaceHoldForm;
import com.casa.acct.forms.StopPaymentOrderForm;
import com.casa.acct.forms.TimeDepositAccountDetailForm;
import com.casa.acct.forms.TimeDepositCertForm;
import com.casa.acct.forms.TimeDepositListForm;
//import com.casa.user.forms.UserInfoForm;
import com.gldb.data.Tbdeposit;
import com.gldb.data.Tbdepositcif;
import com.gldb.data.Tbholdamtcheck;
import com.gldb.data.Tbprodmatrix;

public interface AccountService {

//	AccountGenericForm createAccount(Tbdeposit dep, List<Tbdepositcif> ciflist);
	AccountGenericForm checkAccount(String accountno);
//	AccountMaintenanceForm acctInfo(String accountno);
//	AccountGenericForm acctSave(AccountMaintenanceForm form);
	List<Tbprodmatrix> getProdList(String prodgroup);
//	AccountClosureForm getAcctClosure(String accountno);
//	AccountGenericForm acctClose(String accountno);
//	AccountGenericForm placeHoldAmt(Tbholdamtcheck record);
//	List<PlaceHoldForm> getHoldAmtList(String accountno);
//	AccountGenericForm liftHoldAmt(int id, String liftreason, Date businessdt);
	List<TimeDepositListForm> getTimeDepAcctList(String accountno);
	TimeDepositAccountDetailForm getTimeDepAcctDet(String accountno);
//	List<Tbdeposit> getTimeDepMatAcctList(String accountno);
	AccountGenericForm submitMatAcctAction(MaturedAccountActionForm form);
	
//	AccountGenericForm placeHoldCheck(Tbholdamtcheck record);
//	List<StopPaymentOrderForm> spoList(String acctno);
//	AccountGenericForm liftSPO(int id, String liftreason, Date businessdt);
	String createNewProduct(Tbprodmatrix input);
	Tbprodmatrix getProductDetail(String prodcode, String subprodcode);
//	AccountGenericForm rolloverTimeDepositAccount(Tbdeposit dep);
	
//	UserInfoForm checkMemberNo(String memberno);
	List<InquiryCIFNameList> checkMemberNoName(String name);
	
//	Integer acctAlertOff(String accountno);
//	String getControlno(String accountno);
//	List<TimeDepositCertForm> getTCDList(String accountno);
}
