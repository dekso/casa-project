package com.gl.util;

import java.util.Date;
import java.util.List;

import com.gldb.data.Tbholiday;
import com.gldb.data.Tbmerchant;
import com.gldb.data.Tbtransactioncode;
import com.etel.util.forms.DescIdForm;
import com.gl.util.forms.CodetableForm;
import com.gldb.data.Tbcodetable;
import com.gldb.data.Tbfeesandcharges;
import com.gldb.data.Tbunit;
import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

/**
 * This is a client-facing service class.  All
 * public methods will be exposed to the client.  Their return
 * values and parameters will be passed to the client or taken
 * from the client, respectively.  This will be a singleton
 * instance, shared between all requests. 
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL, String, Exception).
 * LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log level.
 * For info on these levels, look for tomcat/log4j documentation
 */
@ExposeToClient
public class UtilFacade extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public UtilFacade() {
       super(INFO);
    }
    
	public List<DescIdForm> genCodetable(String codename) {
		UtilService service = new UtilServiceImpl();
		List<DescIdForm> list = service.genCodetable(codename);
		return list;
	}
	
	public List<Tbcodetable> listCodetable(String codename) {
		UtilService service = new UtilServiceImpl();
		List<Tbcodetable> list = service.listCodetable(codename);
		return list;
	}
	
	public String addCodetable(Tbcodetable record) {
		UtilService service = new UtilServiceImpl();
		return service.addCodetable(record);
	}
	
	public List<String> getCodename() {
		UtilService service = new UtilServiceImpl();
		return service.getCodename();
	}

	public List<Tbunit> getBranchList() {
		UtilService service = new UtilServiceImpl();
		return service.getBranchList();
	}

	public List<DescIdForm> getPsStatSelect() {
		UtilService service = new UtilServiceImpl();
		List<DescIdForm> list = service.getPsStatSelect();
		return list;
	}
	public List<Tbholiday> getListHoliday(String search){
    	UtilService service = new UtilServiceImpl();
		return service.getListHoliday(search);
    }
    public String addOrupdateHoliday(Tbholiday hol,String type){
    	UtilService service = new UtilServiceImpl();
    	return service.addOrupdateHoliday(hol,type);
    }
    public String addBranch(Tbunit unit){
    	UtilService service = new UtilServiceImpl();
    	return service.addBranch(unit);
    }
    /**Get List of Codes or Values per Codename*/
    public List<CodetableForm> getListofCodesPerCodename(String codename) {
    	UtilService service = new UtilServiceImpl();
    	return service.getListofCodesPerCodename(codename);
    }
    public List<Tbtransactioncode> getListTxcode(String search){
    	UtilService service = new UtilServiceImpl();
    	return service.getListTxcode(search);
    }
    public String addOrUpdateTxcode(Tbtransactioncode code){
    	UtilService service = new UtilServiceImpl();
    	return service.addOrUpdateTxcode(code);
    }
    public List<Tbunit> getAllBranch(){
    	UtilService service = new UtilServiceImpl();
    	return service.getAllBranch();
    }
    public List<Tbmerchant> getListMerchant(){
    	UtilService service = new UtilServiceImpl();
    	return service.getListMerchant();
    }
    public String addOrupdateMerchant(Tbmerchant merchant){
    	UtilService service = new UtilServiceImpl();
    	return service.addOrupdateMerchant(merchant);
    }
    public List<Tbfeesandcharges> getListFeesandCharges(){
    	UtilService service = new UtilServiceImpl();
    	return service.getListFeesandCharges();
    }
    public String addOrupdateFees(Tbfeesandcharges fees){
    	UtilService service = new UtilServiceImpl();
    	return service.addOrupdateFees(fees);
    }
    public String checkBrid(String brid){
    	UtilService service = new UtilServiceImpl();
    	return service.checkBrid(brid);
    }

}
