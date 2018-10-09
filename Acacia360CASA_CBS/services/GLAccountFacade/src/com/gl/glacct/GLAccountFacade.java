package com.gl.glacct;

import java.util.Date;
import java.util.List;
import com.gldb.data.Tbmainglcode;
import com.gldb.data.Tbproofsheet;
import com.gldb.data.Tbproofsheetdetail;
import com.gldb.data.Tbproofsheettrno;
import com.gldb.data.Tbsegment;
import com.etel.util.forms.DescIdForm;
import com.etel.util.forms.PSStatusChangeForm;
import com.gl.glacct.form.BranchSetupForm;
import com.gl.glacct.form.EODDetailForm;
import com.gl.glacct.form.ProofsheetDetailForm;
import com.gl.glacct.form.ProofsheetForm;
import com.gl.glacct.form.ProofsheetTrForm;
import com.gl.glacct.form.SegmentParamForm;
import com.gl.glacct.form.SegmentSelectForm;
import com.gldb.data.Tbglaccount;
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
public class GLAccountFacade extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public GLAccountFacade() {
       super(INFO);
    }
    
    /*******************MAIN GL CLASS**********************/
    public List<Tbmainglcode> getMainGlList() {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.getMainGlList();
    }

    public String aeMainGl(Tbmainglcode input) {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.aeMainGl(input);
    }
    
    public String deleteRecord(int id) {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.deleteRecord(id);
    }
    
    /*******************GL ACCOUNT CLASS**********************/
    public List<Tbglaccount> getGlList(){
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.getGlList();
    }

    public String aeGlAccount(Tbglaccount input) {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.aeGlAccount(input);
    }
    
	public String deleteGlAccount(int id) {
		GLAccountService service = new GLAccountServiceImpl();
		return service.deleteGlAccount(id);
	}
	
	public List<Tbmainglcode> getMainGLList() {
		GLAccountService service = new GLAccountServiceImpl();
		return null;
	}
    
    /*******************SEGMENT CLASS**********************/
    public List<DescIdForm> mainglList(String bstype) {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.mainglList(bstype);
    }
    
//    public List<DescIdForm> segSelectList(String mgl, int segno, String seg, String bstype) {
    public List<DescIdForm> segSelectList(SegmentSelectForm form ) {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.segSelectList(form);
    }
    public List<Tbsegment> listSeg(SegmentParamForm form) {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.listSeg(form);
    }
    
    public String addSeg(Tbsegment record) {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.addSeg(record);
    }
    
    public String deleteSeg(String acctcode, int acctlvl, int id) {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.deleteSeg(acctcode, acctlvl, id);
    }
    
    /*******************PROOFSHEET CLASS**********************/
    public List<Tbproofsheet> psList(String currency, Date psdate, String status) {
    	GLAccountService service = new GLAccountServiceImpl();
    	List<Tbproofsheet> list =service.psList(currency, psdate, status);
    	System.out.println(list.size());
    	return list;
    }
    
    public List<Tbproofsheet> proofsheetList(String currency, Date psdate, String status) {
    	GLAccountService service = new GLAccountServiceImpl();
    	List<Tbproofsheet> list =service.psList(currency, psdate, status);
    	System.out.println(list.size());
    	return list;
    }
    
    public List<DescIdForm> acctList() {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.acctList();
    }
    
    public String addPS(Tbproofsheet input) {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.addPS(input);
    }
    
    public String updtPS(PSStatusChangeForm input) {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.updtPS(input);
    }
    
    public ProofsheetDetailForm psDetail(String psid) {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.psDetail(psid);
    }
    
    public List<Tbproofsheetdetail> psDetailList(String psid, Date psdt) {
    	GLAccountService service = new GLAccountServiceImpl();
    	return service.psDetailList(psid, psdt);
    }
    
	public String aePSDetail(Tbproofsheetdetail input) {
		GLAccountService service = new GLAccountServiceImpl();
		return service.aePSDetail(input);
	}
    
	public String getTxrefno(String psid, Date psdt) {
		GLAccountService service = new GLAccountServiceImpl();
		return service.getTxrefno(psid, psdt);
	}
	
	public String psToVerify(String psid) {
		GLAccountService service = new GLAccountServiceImpl();
		return service.psToVerify(psid);
	}
	
	public String verifyToAuth(String psid) {
		GLAccountService service = new GLAccountServiceImpl();
		return service.verifyToAuth(psid);
	}

	public String returnPS(String psid) {
		GLAccountService service = new GLAccountServiceImpl();
		return service.returnPS(psid);
	}
	
	public String authPS(String psid) {
		GLAccountService service = new GLAccountServiceImpl();
		return service.authPS(psid);
	}
	
	public BranchSetupForm branchDetail() {
		BranchSetupForm form = new BranchSetupForm();
		GLAccountService service = new GLAccountServiceImpl();
		form = service.branchDetail();
		return form;
	}
	
	public String openCloseBranch(String value) {
		GLAccountService service = new GLAccountServiceImpl();
		return service.openCloseBranch(value);
	}
	
	public EODDetailForm eodDetail() {
		GLAccountService service = new GLAccountServiceImpl();
		return service.eodDetail();
	}
	
	public String runEod() {
		GLAccountService service = new GLAccountServiceImpl();
		return service.runEod();
	}
	
	public String updatePSList(List<Tbproofsheetdetail> data, String trnostatus) {
		GLAccountService service = new GLAccountServiceImpl();
		return service.updatePSList(data, trnostatus);
	}
	
	public List<Tbproofsheetdetail> getTrnoList(String trno, Date psdt) {
		GLAccountService service = new GLAccountServiceImpl();
		return service.getTrnoList(trno, psdt);
	}
	
	public List<ProofsheetTrForm> getTrList(String psid, Date psdt) {
		GLAccountService service = new GLAccountServiceImpl();
		return service.getTrList(psid, psdt);
	}
	
}
