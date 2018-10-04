package com.etel.reports;

import java.io.File;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.relation.Role;

import com.smslai_eoddb.data.Tbunit;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.security.SecurityService;
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
public class ReportsFacade extends JavaServiceSuperClass {
	SecurityService serviceS = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");
	public ReportsFacade() {
		// super(FATAL);
	    String dir = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/resources/images/logos");
	   	File file = new File(dir);
	   	if(!file.exists()){
	   		file.mkdirs();
	   	}
	   	
	   	File logo = new File(file, "companylogo.png");
	   	if(logo.exists()){
	   		//System.out.println(logo.getAbsolutePath());
	   		String aa = "\\\\";
	   		String a = "\\";
	   		this.logo = logo.getAbsolutePath().replace(a, aa);
	   	}
	}
	final String mainlogo  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF\\jasper\\AcaciaBanc.png");
	final String lineappsub  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/LineApplication_OtherTermConditions.jasper");
	//EXECUTIVE SUMMARY SUBREPORTS
	final String loandetails  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/rptLAMExecutiveSummary_LoanDetails.jasper");
	final String sublimits  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/rptLAMExecutiveSummary_LoanDetails_SubLimits.jasper");
	final String covenants  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/rptLAMExecutiveSummary_Covenants.jasper");
	final String riskprofile  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/rptLAMExecutiveSummary_RiskProfile.jasper");
	final String rationale  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/rptLAMExecutiveSummary_RationaleofRecommendation.jasper");
	final String other  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/rptLAMExecutiveSummary_OtherTermsCondition.jasper");
	final String documentation  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/rptLAMExecutiveSummary_Documentation.jasper");
	//CORPORATE PROFILE SUBREPORTS
	final String shareholder  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/rptLAMCorporateProfile_ShareholdersInformation.jasper");
	final String mgmtteam  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/rptLAMCorporateProfile_ManagementTeam.jasper");
	final String creditdealings  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/rptLAMCorporateProfile_CreditDealings.jasper");
	final String findata  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/rptLAMCorporateProfile_FinancialDetails.jasper");
	final String finanalysis  = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("WEB-INF/jasper/rptLAMCorporateProfile_FinancialAnalysis.jasper");
	
	private String logo;
	
	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public String customerMasterlistStatus(String cifstatus, String rpttype) {
		String filepath = null;
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("cifstatus", cifstatus);
		params.put("rpttype", rpttype);
		params.put("logo", this.logo);
		ReportsFacadeService service = new ReportsFacadeImpl();

		try {
			if(rpttype.equals("PDF")){
				filepath = service.executeJasperPDF("rpt_CustomerMasterListPerStatus", params);
			}
			else{
				filepath = service.executeJasperXLSX("rpt_CustomerMasterListPerStatus", params);
			}

		} catch (Exception e) {
			// TODO: handle exception
		}

		return filepath;
	}
	
/**************** MONITORING REPORTS ****************/
	
	public String DailyTrialBalanceSA(String branchcode,Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DailyTrialBalance", params);
			}else{
				filepath = service.executeJasperXLSX("DailyTrialBalance", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListNewAccountSA(String branchcode,Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DailyListofNewAccounts", params);
			}else {
				filepath = service.executeJasperXLSX("DailyListofNewAccounts", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListClosedAccountSA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DailyListofClosedAccounts", params);
			}else {
				filepath = service.executeJasperXLSX("DailyListofClosedAccounts", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListPostedTransSA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DailyListofPostedTransactions", params);
			}else {
				filepath = service.executeJasperXLSX("DailyListofPostedTransactions", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListTransferAccSA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DailyListofTransferofAccount", params);
			}else {
				filepath = service.executeJasperXLSX("DailyListofTransferofAccount", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListDormantAccSA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DailyListofDormantAccounts", params);
			}else {
				filepath = service.executeJasperXLSX("DailyListofDormantAccounts", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListActivatedDormantSA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DailyListofActivatedDormantAccounts", params);
			}else {
				filepath = service.executeJasperXLSX("DailyListofActivatedDormantAccounts", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListAutoTransferAccSA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DailyListofAutomaticTransferofAccount", params);
			}else {
				filepath = service.executeJasperXLSX("DailyListofAutomaticTransferofAccount", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String CASAFullBalancingSA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CASAFullBalance", params);
			}else {
				filepath = service.executeJasperXLSX("CASAFullBalance", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyTransSA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DailyTransactionReport", params);
			}else {
				filepath = service.executeJasperXLSX("DailyTransactionReport", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String SummaryDailyTransSA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("SummaryofDailyTransactionReport", params);
			}else {
				filepath = service.executeJasperXLSX("SummaryofDailyTransactionReport", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String AverageDailyBalSA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("AverageDailyBalanceReport", params);
			}else {
				filepath = service.executeJasperXLSX("AverageDailyBalanceReport", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	
	/************************ CURRENT ACCOUNT REPORTS ************************/
	public String DailyTrialBalCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CADailyTrialBalance", params);
			}else {
				filepath = service.executeJasperXLSX("CADailyTrialBalance", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListNewAccCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CADailyListofNewAccounts", params);
			}else {
				filepath = service.executeJasperXLSX("CADailyListofNewAccounts", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListClosedAccCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CADailyListofClosedAccounts", params);
			}else {
				filepath = service.executeJasperXLSX("CADailyListofClosedAccounts", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListPostedTransCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CADailyListofPostedTransactions", params);
			}else {
				filepath = service.executeJasperXLSX("CADailyListofPostedTransactions", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListDormantAccCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CADailyListofDormantAccounts", params);
			}else {
				filepath = service.executeJasperXLSX("CADailyListofDormantAccounts", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListTransferAccCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CADailyListofTransferofAccount", params);
			}else {
				filepath = service.executeJasperXLSX("CADailyListofTransferofAccount", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListActivatedDormantAccCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CADailyListofActivatedDormantAccounts", params);
			}else {
				filepath = service.executeJasperXLSX("CADailyListofActivatedDormantAccounts", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListAutoTransferAccCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CADailyListofAutomaticTransferofAccount", params);
			}else {
				filepath = service.executeJasperXLSX("CADailyListofAutomaticTransferofAccount", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListCheckbookReqCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CADailyListofCheckbookRequest", params);
			}else {
				filepath = service.executeJasperXLSX("CADailyListofCheckbookRequest", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String StatChecksIssuedCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CAStatusofChecksIssued ", params);
			}else {
				filepath = service.executeJasperXLSX("CAStatusofChecksIssued ", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String CASAFullBalCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CASAFullBalanceListing ", params);
			}else {
				filepath = service.executeJasperXLSX("CASAFullBalanceListing ", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyTransCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CADailyTransactionReport", params);
			}else {
				filepath = service.executeJasperXLSX("CADailyTransactionReport", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String SummaryDailyTransCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CASummaryofDailyTransactionReport", params);
			}else {
				filepath = service.executeJasperXLSX("CASummaryofDailyTransactionReport", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String AverageDailyBalCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CAAverageDailyBalanceReport", params);
			}else {
				filepath = service.executeJasperXLSX("CAAverageDailyBalanceReport", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListAccInsufFundCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DailyListofAccountswithInsufficientFund", params);
			}else {
				filepath = service.executeJasperXLSX("DailyListofAccountswithInsufficientFund", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListWaivedChargesCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CADailyListofWaivedCharges", params);
			}else {
				filepath = service.executeJasperXLSX("CADailyListofWaivedCharges", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String DailyListReturnedItemsCA(String branchcode,Date txdate, String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("CADailyListofReturnedItems", params);
			}else {
				filepath = service.executeJasperXLSX("CADailyListofReturnedItems", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	
	/************************ TIME DEPOSIT REPORTS ************************/
	
	public String TDListMaturedAcc(String branchcode, Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DLofMaturedAccountsTD", params);
			}else {
				filepath = service.executeJasperXLSX("DLofMaturedAccountsTD", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String TDListWithdrawnTimeDep(String branchcode, Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DLofWithdrawnTimeDepositTD", params);
			}else {
				filepath = service.executeJasperXLSX("DLofWithdrawnTimeDepositTD", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String TDListPreTermTimeDep(String branchcode, Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DLof PreTerminatedTimeDepositTD", params);
			}else {
				filepath = service.executeJasperXLSX("DLof PreTerminatedTimeDepositTD", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String TDListUnclaimedMaturedTimeDep(String branchcode, Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DLofMaturedAccountsTD", params);
			}else {
				filepath = service.executeJasperXLSX("DLofMaturedAccountsTD", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String TDTrialBal(String branchcode, Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DailyTrialBalanceTD", params);
			}else {
				filepath = service.executeJasperXLSX("DailyTrialBalanceTD", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String TDListTimeDepBal(String branchcode, Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DLofTimeDepositBalancesTD", params);
			}else {
				filepath = service.executeJasperXLSX("DLofTimeDepositBalancesTD", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String TDListLargeTimeDepTrans(String branchcode, Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DLofLargeTimeDepositTransactionsTD", params);
			}else {
				filepath = service.executeJasperXLSX("DLofLargeTimeDepositTransactionsTD", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String TDListIntPaidPerClientForMonth(String branchcode, Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DLofInterestPaidPerClientfortheMonthTD", params);
			}else {
				filepath = service.executeJasperXLSX("DLofInterestPaidPerClientfortheMonthTD", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String TDListIntPaidPerClientForDay(String branchcode, Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DLofInterestPaidPerClienttoDateTD", params);
			}else {
				filepath = service.executeJasperXLSX("DLofInterestPaidPerClienttoDateTD", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String TDListRenewedTimeDeposits(String branchcode, Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DLofRenewedTimeDepositTD", params);
			}else {
				filepath = service.executeJasperXLSX("DLofRenewedTimeDepositTD", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public String TDListNewTimeDep(String branchcode, Date txdate,String rpttype) {
		String filepath = null;
		Map<String, Object>params = new HashMap<String, Object>();
		params.put("branchcode", branchcode);
		params.put("txdate", txdate);
		params.put("logo", mainlogo);
		ReportsFacadeService service = new ReportsFacadeImpl();
		try {
			if (rpttype.equals("PDF")) {
				filepath = service.executeJasperPDF("DLofNewTimeDepositsTD", params);
			}else {
				filepath = service.executeJasperXLSX("DLofNewTimeDepositsTD", params);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return filepath;
	}
	public List<Tbunit>getBranchName(){
		ReportsFacadeService srvc = new ReportsFacadeImpl();
		return srvc.getBranchName();
	}
}