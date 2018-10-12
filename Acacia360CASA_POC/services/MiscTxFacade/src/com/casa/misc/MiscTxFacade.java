package com.casa.misc;

import java.util.List;

import com.casa.misc.forms.MerchantForm;
import com.smslai_eoddb.data.Tbbillspayment;
import com.smslai_eoddb.data.Tbcheckbook;
//import com.smslai_eoddb.data.Tbcheckbooklist;
import com.smslai_eoddb.data.Tbmerchant;
import com.smslai_eoddb.data.Tbmiscellaneous;
import com.smslai_eoddb.data.Tbpassbookissuance;
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
public class MiscTxFacade extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public MiscTxFacade() {
       super(INFO);
    }
    
	MiscTxService miscService = new MiscTxServiceImpl();
	
	public List<MerchantForm> getMerchantList() {
		List<MerchantForm> list = miscService.getMerchantList();
		return list;
	}

	public String createPayment(Tbbillspayment payment) {
		return miscService.createPayment(payment);
	}
	
	public String createMiscTx(Tbmiscellaneous misc) {
		return miscService.createMiscTx(misc);
	}
	
	public String addMerchant(Tbmerchant merch) {
		return miscService.addMerchant(merch);
	}
	
	public String checkbookIssuance(Tbcheckbook data) {
		MiscTxService miscService = new MiscTxServiceImpl();
		return miscService.checkbookIssuance(data);
	}
	public String passbookIssuance(Tbpassbookissuance pbissuance){
		return miscService.passbookIssuance(pbissuance);
		
	}
	
}
