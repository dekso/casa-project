package com.casa.Report;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

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
public class ReportFacade extends JavaServiceSuperClass {
	/*
	 * Pass in one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log level;
	 * recommend changing this to FATAL or ERROR before deploying. For info on these
	 * levels, look for tomcat/log4j documentation
	 */
	public ReportFacade() {
		super(INFO);
	}

	public String EJournalPDF(String username, Date date) {
		String filepath = null;
		ReportService service = new ReportServiceImpl();
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("username", username);
		params.put("date", date);
		filepath = service.executeJasperPDF("ElectronicJournal", params);
		return filepath;
	}

	public String AllAcceptedTrans(String username, Date date) {
		String filepath = null;
		ReportService service = new ReportServiceImpl();
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("username", username);
		params.put("date", date);
		filepath = service.executeJasperPDF("AllAcceptedTrans", params);
		return filepath;
	}

	public String ErrorCorrectionTrans() {
		String filepath = null;
		ReportService service = new ReportServiceImpl();
		Map<String, Object> params = new HashMap<String, Object>();
		filepath = service.executeJasperPDF("ErrorCorrectionTrans", params);
		return filepath;
	}

	public String CashInCashOut(String username, Date date) {
		String filepath = null;
		ReportService service = new ReportServiceImpl();
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("username", username);
		params.put("date", date);
		if (username.equals("0001011")) {
			filepath = service.executeJasperPDF("CashInCashOutBoo", params);
		} else {

			filepath = service.executeJasperPDF("CashInCashOut", params);

		}
		return filepath;
	}

	public String TellersTotal(String username, Date date) {
		String filepath = null;
		ReportService service = new ReportServiceImpl();
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("username", username);
		params.put("date", date);
		filepath = service.executeJasperPDF("TellersTotal", params);
		return filepath;

	}

	public String AllRejectedTrans(String username, Date date) {
		String filepath = null;
		ReportService service = new ReportServiceImpl();
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("username", username);
		params.put("date", date);
		filepath = service.executeJasperPDF("AllRejectedTrans", params);
		return filepath;
	}

	public String CertTimeDep(String acctno, String address, Date issuedt, Date matdt, String name, Integer term,
			BigDecimal interest, BigDecimal sum) {
		String filepath = null;
		ReportService service = new ReportServiceImpl();
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("AcctNo", acctno);
		params.put("address", address);
		params.put("issuedt", issuedt);
		params.put("matdt", matdt);
		params.put("name", name);
		params.put("term", term);
		params.put("interest", interest);
		params.put("sum", sum);
		filepath = service.executeJasperPDF("CertificateOfTimeDeposit", params);
		return filepath;

	}

	public String AllSupOverridetx(String username, Date date) {
		String filepath = null;
		ReportService service = new ReportServiceImpl();
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("username", username);
		params.put("date", date);
		filepath = service.executeJasperPDF("AllSupervisorOverrideTx", params);
		return filepath;
	}

	public String SupOverridetx(String username, Date date) {
		String filepath = null;
		ReportService service = new ReportServiceImpl();
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("username", username);
		params.put("date", date);
		filepath = service.executeJasperPDF("AllSupervisorOverrideTx", params);
		return filepath;
	}

	public String AllTimeOutAcceptedtx(String username, Date date) {
		String filepath = null;
		ReportService service = new ReportServiceImpl();
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("username", username);
		params.put("date", date);
		filepath = service.executeJasperPDF("AllTimeOutAndAcceptedTrans", params);
		return filepath;
	}
}
