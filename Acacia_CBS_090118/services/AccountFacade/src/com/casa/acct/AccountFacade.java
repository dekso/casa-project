package com.casa.acct;

import java.util.Date;
import java.util.List;

import com.casa.acct.forms.AccountClosureForm;
import com.casa.acct.forms.AccountClosureFormDetail;
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
import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

/**
 * This is a client-facing service class. All public methods will be exposed to
 * the client. Their return values and parameters will be passed to the client
 * or taken from the client, respectively. This will be a singleton instance,
 * shared between all requests.
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL,
 * String, Exception). LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to
 * modify your log level. For info on these levels, look for tomcat/log4j
 * documentation
 */
@ExposeToClient
public class AccountFacade extends JavaServiceSuperClass {
	/*
	 * Pass in one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log
	 * level; recommend changing this to FATAL or ERROR before deploying. For
	 * info on these levels, look for tomcat/log4j documentation
	 */
	public AccountFacade() {
		super(INFO);
	}

//	public AccountGenericForm createAccount(Tbdeposit dep, List<Tbdepositcif> ciflist) {
//		AccountService service = new AccountServiceImpl();
//		AccountGenericForm result = service.createAccount(dep, ciflist);
//		return result;
//	}

	public AccountGenericForm checkAccount(String accountno) {
		AccountService service = new AccountServiceImpl();
		AccountGenericForm result = service.checkAccount(accountno);
		return result;
	}

//	public AccountMaintenanceForm acctInfo(String accountno) {
//		AccountService service = new AccountServiceImpl();
//		AccountMaintenanceForm form = service.acctInfo(accountno);
//		return form;
//	}

//	public AccountGenericForm acctSave(AccountMaintenanceForm form) {
//		AccountService service = new AccountServiceImpl();
//		AccountGenericForm result = service.acctSave(form);
//		return result;
//	}

	public List<Tbprodmatrix> getProdList(String prodgroup) {
		AccountService service = new AccountServiceImpl();
		List<Tbprodmatrix> list = service.getProdList(prodgroup);
		return list;
	}

//	public AccountClosureForm getAcctClosure(String accountno) {
//		AccountService service = new AccountServiceImpl();
//		AccountClosureForm form = service.getAcctClosure(accountno);
//		return form;
//	}

//	public AccountGenericForm acctClose(String accountno) {
//		AccountService service = new AccountServiceImpl();
//		AccountGenericForm result = service.acctClose(accountno);
//		return result;
//	}

//	public AccountGenericForm placeHoldAmt(Tbholdamtcheck record) {
//		AccountService service = new AccountServiceImpl();
//		AccountGenericForm result = service.placeHoldAmt(record);
//		return result;
//	}
	
//	public List<PlaceHoldForm> getHoldAmtList(String accountno) {
//		AccountService service = new AccountServiceImpl();
//		List<PlaceHoldForm> list = service.getHoldAmtList(accountno);
//		return list;
//	}
	
//	public AccountGenericForm liftHoldAmt(int id, String liftreason, Date businessdt) {
//		AccountService service = new AccountServiceImpl();
//		AccountGenericForm result = service.liftHoldAmt(id, liftreason, businessdt);
//		return result;
//	}

	public List<TimeDepositListForm> getTimeDepAcctList(String accountno) {
		AccountService service = new AccountServiceImpl();
		List<TimeDepositListForm> list = service.getTimeDepAcctList(accountno);
		return list;
	}
	public TimeDepositAccountDetailForm getTimeDepAcctDet(String accountno) { 
		AccountService service = new AccountServiceImpl();
		TimeDepositAccountDetailForm form = service.getTimeDepAcctDet(accountno);
		return form;
	}
	
//	public List<Tbdeposit> getTimeDepMatAcctList(String accountno) {
//		AccountService service = new AccountServiceImpl();
//		List<Tbdeposit> list = service.getTimeDepMatAcctList(accountno);
//		return list;
//	}
	
	public AccountGenericForm submitMatAcctAction(MaturedAccountActionForm form) {
		AccountService service = new AccountServiceImpl();
		AccountGenericForm result = service.submitMatAcctAction(form);
		return result;
	}
	
//	public AccountGenericForm placeHoldCheck(Tbholdamtcheck record) {
//		AccountService service = new AccountServiceImpl();
//		AccountGenericForm result = service.placeHoldCheck(record);
//		return result;
//	}

//	public List<StopPaymentOrderForm> spoList(String acctno) {
//		AccountService service = new AccountServiceImpl();
//		return service.spoList(acctno); 
//	}
	
//	public AccountGenericForm liftSPO(int id, String liftreason, Date businessdt) {
//		AccountService service = new AccountServiceImpl();
//		AccountGenericForm result = service.liftSPO(id, liftreason, businessdt);
//		return result;
//	}
	
//	public Integer acctAlertOff(String accountno) {
//		AccountService service = new AccountServiceImpl();
//		return service.acctAlertOff(accountno);
//	}
	
	/************************
	 *  Create new product
	 ***********************/
	public String createNewProduct(Tbprodmatrix input) {
		AccountService service = new AccountServiceImpl();
		return service.createNewProduct(input);
	}
	
//	public UserInfoForm checkMemberNo(String memberno) {
//		AccountService service = new AccountServiceImpl();
//		return service.checkMemberNo(memberno);
//	}
	
	public List<InquiryCIFNameList> checkMemberNoName(String name) {
		AccountService service = new AccountServiceImpl();
		return service.checkMemberNoName(name);
	}
	
	public Tbprodmatrix getProductDetail(String prodcode, String subprodcode) {
		AccountService service = new AccountServiceImpl();
		return service.getProductDetail(prodcode, subprodcode);
	}
	
//	public AccountGenericForm rolloverTimeDepositAccount(Tbdeposit dep) {
//		AccountService service = new AccountServiceImpl();
//		return service.rolloverTimeDepositAccount(dep);
//	}
	
//	public String getControlno(String accountno) {
//		AccountService service = new AccountServiceImpl();
//		return service.getControlno(accountno);
//	}
	
//	public List<TimeDepositCertForm> getTDCList(String accountno) {
//		AccountService service = new AccountServiceImpl();
//		return service.getTCDList(accountno);
//	}
	
	/*-----------------------FORMS ACTIVATOR METHODS-----------------------*/
	public AccountClosureFormDetail initForm() {
		AccountClosureFormDetail form = new AccountClosureFormDetail();
		return form;
	}
	
}
