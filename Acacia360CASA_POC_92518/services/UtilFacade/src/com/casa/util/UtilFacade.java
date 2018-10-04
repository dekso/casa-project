package com.casa.util;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.casa.acct.AccountService;
import com.casa.acct.AccountServiceImpl;
import com.casa.util.forms.BranchInfoForm;
import com.casa.util.forms.DescIdForm;
import com.casa.util.forms.ProductMatrixForm;
import com.casa.util.UtilService;
import com.casa.util.UtilServiceImpl;
import com.smslai_eoddb.data.Tbtransactioncode;
import com.smslai_eoddb.data.Tbdocsperproduct;
import com.smslai_eoddb.data.Tbdocuments;
import com.smslai_eoddb.data.Tbholiday;
import com.smslai_eoddb.data.Tbprodmatrix;
import com.smslai_eoddb.data.Tbrates;
import com.smslai_eoddb.data.Tbterminal;
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
public class UtilFacade extends JavaServiceSuperClass {
	/*
	 * Pass in one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log level;
	 * recommend changing this to FATAL or ERROR before deploying. For info on these
	 * levels, look for tomcat/log4j documentation
	 */
	public UtilFacade() {
		super(INFO);
	}

	public List<DescIdForm> getCurrency() {
		UtilService service = new UtilServiceImpl();
		List<DescIdForm> list = service.getCurrency();
		return list;
	}

	public List<DescIdForm> getUserListCico() {
		UtilService service = new UtilServiceImpl();
		List<DescIdForm> list = service.getUserListCico();
		return list;
	}

	public List<DescIdForm> genCodetable(String codename) {
		UtilService service = new UtilServiceImpl();
		List<DescIdForm> list = service.genCodetable(codename);
		return list;
	}

	public List<DescIdForm> getProdtype(String prodgroup) {
		UtilService service = new UtilServiceImpl();
		List<DescIdForm> list = service.getProdtype(prodgroup);
		return list;
	}

	public Date getBusinessdt() {
		UtilService service = new UtilServiceImpl();
		Date dt = service.getBusinessdt();
		return dt;
	}

	public String validateUser(String username, String password) {
		UtilService service = new UtilServiceImpl();
		String result = service.validateUser(username, password);
		return result;
	}

	public BranchInfoForm getBrInfo() {
		UtilService service = new UtilServiceImpl();
		return service.getBrInfo();
	}

	public String updateBr(String brstat) {
		UtilService service = new UtilServiceImpl();
		return service.updateBr(brstat);
	}

	public String aeTerminal(Tbterminal data) {
		UtilService service = new UtilServiceImpl();
		return service.aeTerminal(data);
	}
	
	public List<Tbterminal> terminalList(String unitid) {
		UtilService service = new UtilServiceImpl();
		return service.terminalList(unitid);
	}
	
	public String deleteTerminal(int id) {
		UtilService service = new UtilServiceImpl();
		return service.deleteTerminal(id);
	}
	
	public List<ProductMatrixForm> productList() {
		UtilService service = new UtilServiceImpl();
		return service.productList();
	}
	
	public String aeProduct(Tbprodmatrix input) {
		UtilService service = new UtilServiceImpl();
		return service.aeProduct(input);
	}
	
	public Tbprodmatrix getProductDetail(int id) {
		UtilService service = new UtilServiceImpl();
		return service.getProductDetail(id);
	}
	
	public List<String> terminalNo() {
		UtilService service = new UtilServiceImpl();
		return service.terminalNo();
	}
	public Tbrates getRates(String curr,String buysell){
		UtilService service = new UtilServiceImpl();
		return service.getRates(curr,buysell);
	}
	public List<Tbholiday> listHolidays(Date minDate){
		UtilService service = new UtilServiceImpl();
		return service.listHolidays(minDate);
	}
	public Integer printCTD(String accountno) {
		UtilService service = new UtilServiceImpl();
		return service.printCTD(accountno);
	}
	public ProductMatrixForm checkProduct(String prodcode, String prodgroup){
		UtilService service = new UtilServiceImpl();
		return service.checkProduct(prodcode,prodgroup);
	}
	public List<Tbdocuments> getListDocument(){
		UtilService service = new UtilServiceImpl();
		return service.getListDocument();
	}
	public List<Tbdocsperproduct> getDocsperProd(){
		UtilService service = new UtilServiceImpl();
		return service.getDocsperProd();
	}
	public String addOrupdateDoc(Tbdocuments doc){
		UtilService service = new UtilServiceImpl();
		return service.addOrupdateDoc(doc);
	}
	public String addOrupdateDocsperProd(Tbdocsperproduct docs){
		UtilService service = new UtilServiceImpl();
		return service.addOrupdateDocsperProd(docs);
	}
	public List<Tbtransactioncode> getListTxcode(String search){
    	UtilService service = new UtilServiceImpl();
    	return service.getListTxcode(search);
    }
    public String addOrUpdateTxcode(Tbtransactioncode code){
    	UtilService service = new UtilServiceImpl();
    	return service.addOrUpdateTxcode(code);
    }
}
