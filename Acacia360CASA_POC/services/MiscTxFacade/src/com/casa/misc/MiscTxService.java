package com.casa.misc;

import java.util.List;

import com.casa.misc.forms.MerchantForm;
import com.smslai_eoddb.data.Tbbillspayment;
import com.smslai_eoddb.data.Tbcheckbook;
import com.smslai_eoddb.data.Tbmerchant;
import com.smslai_eoddb.data.Tbmiscellaneous;

public interface MiscTxService {
	
	List<MerchantForm> getMerchantList();
	String createPayment(Tbbillspayment payment);
	String createMiscTx(Tbmiscellaneous misc);
	String addMerchant(Tbmerchant merch);
	
	String checkbookIssuance(Tbcheckbook data);

}
