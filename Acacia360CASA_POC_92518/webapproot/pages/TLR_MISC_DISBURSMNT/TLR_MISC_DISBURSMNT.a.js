dojo.declare("TLR_MISC_DISBURSMNT", wm.Page, {
start: function() {
this.svCurrency.update();
this.svReason.update();
this.svPaymentMode.update();
},
"preferredDevice": "desktop",
fAmtFocus: function(inSender) {
this.fAmt.setDisplayValue("");
},
svSaveResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="1"){
this.fPayeeName.clear();
this.fAmt.clear();
this.fReasonPaymRel.clear();
this.fCheckno.clear();
this.fCheckdate.clear();
this.fRemarks.clear();
app.alert("Transaction Successful!");
}else{
app.alert("Transaction Failed: Error in Routine");
}
},
_end: 0
});

TLR_MISC_DISBURSMNT.widgets = {
svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CURR\"","targetProperty":"codename"}, {}]
}]
}]
}],
svReason: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"DISBMTREASON\"","targetProperty":"codename"}, {}]
}]
}]
}],
svPaymentMode: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"MISCMOP\"","targetProperty":"codename"}, {}]
}]
}]
}],
svSave: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"createMiscTx","service":"MiscTxFacade"}, {"onResult":"svSaveResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"createMiscTxInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fPayeeName.dataValue","targetProperty":"misc.payeename"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fReasonPaymRel.dataValue","targetProperty":"misc.reason"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fRemarks.dataValue","targetProperty":"misc.remarks"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"fDebitaccount.dataValue","targetProperty":"misc.debitacctno"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"misc.txby"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"fModepaym.dataValue","targetProperty":"misc.releasemode"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"fCurr.selectedItem.id","targetProperty":"misc.currency"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"fAmt.dataValue","targetProperty":"misc.amount"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"fCheckdate.dataValue","targetProperty":"misc.checkdate"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"fCheckno.dataValue","targetProperty":"misc.checkno"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"misc.txdate"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"fReasonPaymRel.dataValue","targetProperty":"misc.relrecmode"}, {}],
wire14: ["wm.Wire", {"expression":"195152","targetProperty":"misc.txcode"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"misc.unitid"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"misc.instcode"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"align":undefined,"caption":"Miscellaneous Disbursment","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"263px"}, {}]
}],
panel3: ["wm.Panel", {"height":"329px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"178px","displayValue":"","height":"25px","readonly":true,"width":"340px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
fPayeeName: ["wm.Text", {"border":"0","caption":"Paid To:","captionSize":"178px","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"450px"}, {}],
fAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Amount:","captionSize":"178px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"required":true,"width":"340px"}, {"onfocus":"fAmtFocus"}],
fCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"178px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":"PHP","displayField":"id","displayValue":"","height":"25px","width":"260px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}]
}]
}],
fReasonPaymRel: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Reason for Payment Release:","captionSize":"178px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":"1","displayField":"description","displayValue":"","height":"25px","width":"340px"}, {"onfocus":"fReasonPaymRelFocus"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svReason","targetProperty":"dataSet"}, {}]
}]
}],
fRemarks: ["wm.Text", {"border":"0","caption":"Remarks:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"450px"}, {}],
fModepaym: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Payment Release Mode:","captionSize":"178px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":"1","displayField":"description","displayValue":"","height":"25px","width":"340px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svPaymentMode","targetProperty":"dataSet"}, {}]
}]
}],
pnlCheck: ["wm.Panel", {"height":"79px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${fModepaym.dataValue}==\"2\"","targetProperty":"showing"}, {}]
}],
fChecktype: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Check Type:","captionSize":"178px","dataSet":"","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayValue":"","height":"25px","width":"370px"}, {}],
fCheckno: ["wm.Text", {"border":"0","caption":"Check No:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"450px"}, {}],
fCheckdate: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Check Date:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"340px"}, {}]
}],
pnlDebitacct: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${fModepaym.dataValue}==\"3\"","targetProperty":"showing"}, {}]
}],
fDebitaccount: ["wm.Text", {"border":"0","caption":"Debit to Account:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}]
}],
btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","width":"80px"}, {"onclick":"svSave"}],
spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}]
}]
}]
}]
};

TLR_MISC_DISBURSMNT.prototype._cssText = '';
TLR_MISC_DISBURSMNT.prototype._htmlText = '';