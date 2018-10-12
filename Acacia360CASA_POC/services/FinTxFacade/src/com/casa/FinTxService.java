package com.casa;

import java.math.BigDecimal;
import java.util.List;

import com.casa.fintx.forms.AccountCheckForm;
import com.casa.fintx.forms.AccountInquiryMainForm;
import com.casa.fintx.forms.CashInCashOutForm;
import com.casa.fintx.forms.CashPositionConfirmForm;
import com.casa.fintx.forms.CashPositionForm;
import com.casa.fintx.forms.FinGenericForm;
import com.casa.fintx.forms.InquiryNameList;
import com.casa.fintx.forms.OverrideActionForm;
import com.casa.fintx.forms.OverrideResultForm;
import com.smslai_eoddb.data.Tbbrfintxjrnl;
import com.smslai_eoddb.data.Tbfintxchecklist;
import com.smslai_eoddb.data.Tbfintxjrnl;
import com.smslai_eoddb.data.Tbmanagerscheck;
import com.smslai_eoddb.data.Tbmctxjrnl;
import com.smslai_eoddb.data.Tbnetamt;
import com.smslai_eoddb.data.Tboverride;
import com.smslai_eoddb.data.Tbtransactioncode;

public interface FinTxService {

	String cashPos(CashPositionForm form);
	CashPositionConfirmForm cashPosDenom(String txref);
	String confirmCashPos(String txref, String act, String remarks);
	AccountInquiryMainForm accountInquiry(String acctno);
	List<InquiryNameList> accountInquiryName(String name);
	CashInCashOutForm getCashInCashOut(String userid, String currency);
	AccountCheckForm checkAcct(String acctno);
	AccountCheckForm checkAcctFundTrans(String acctnoto, String acctnofrom);
	
	FinGenericForm cashDepWithDrCrMemo(Tbfintxjrnl form, List<Tbfintxchecklist> checklist);
	String overrideTransaction(String txrefno, String username);
	String cancelOverrideTX(String txrefno);
	String requestRemoteOverride(String txrefno);
	Integer requestRemoteOverrideCount();
	List<OverrideActionForm> requestRemoteOverrideList();
	Integer requestRemoteOverrideWait(String txrefno);
	OverrideResultForm requestRemoteOverrideResult(String txrefno);
	String requestRemoteOverrideAction(String txrefno, Integer val);
	List<Tbnetamt> userCashPos(String userid);
	
	String errorCorrect(String txrefno);
	Tbtransactioncode getTxinfo(String txname);
	String initOverride(Tboverride data);
	String requestMc(Tbmanagerscheck data);
	String depositMc(Tbmctxjrnl data);
	String saveBuySellFx(Tbbrfintxjrnl brjrnl);
	String mcgcDeposit(Tbfintxjrnl fin);
	String encashMc(Tbmctxjrnl data);

}
