package com.gl.glacct;

import java.util.Date;
import java.util.List;

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
import com.gldb.data.Tbmainglcode;
import com.gldb.data.Tbproofsheet;
import com.gldb.data.Tbproofsheetdetail;
import com.gldb.data.Tbproofsheettrno;
import com.gldb.data.Tbsegment;

public interface GLAccountService {
	
	List<Tbmainglcode> getMainGlList();
	String aeMainGl(Tbmainglcode input);
	String deleteRecord(int id);
	
	List<Tbglaccount> getGlList();
	String aeGlAccount(Tbglaccount input);
	String deleteGlAccount(int id);
	
	List<DescIdForm> mainglList(String bstype);
	List<DescIdForm> segSelectList(SegmentSelectForm form);
	List<Tbsegment> listSeg(SegmentParamForm form);
	String addSeg(Tbsegment record);
	String deleteSeg(String acctcode, int acctlvl, int id);
	
	List<Tbproofsheet> psList(String currency, Date psdate, String status);
	List<DescIdForm> acctList();
	String addPS(Tbproofsheet input);
	String updtPS(PSStatusChangeForm input);
	
	ProofsheetDetailForm psDetail(String psid);
	List<Tbproofsheetdetail> psDetailList(String psid, Date psdt);
	String aePSDetail(Tbproofsheetdetail input);
	String getTxrefno(String psid, Date psdt);
	
	String psToVerify(String psid);
	String verifyToAuth(String psid);
	String returnPS(String psid);
	String authPS(String psid);
	
	BranchSetupForm branchDetail();
	String openCloseBranch(String value);
	EODDetailForm eodDetail();
	String runEod(); 
	String updatePSList(List<Tbproofsheetdetail> data, String trnostatus);
	List<Tbproofsheetdetail> getTrnoList(String trno, Date psdt);
	List<ProofsheetTrForm> getTrList(String psid, Date psdt);
}
