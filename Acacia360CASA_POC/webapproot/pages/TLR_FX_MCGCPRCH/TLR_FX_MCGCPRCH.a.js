dojo.declare("TLR_FX_MCGCPRCH", wm.Page, {
start: function() {
this.svGetTxcode.update();
},
"preferredDevice": "desktop",
svCheckAccountPayableToResult: function(inSender, inDeprecated) {
if (inSender.getData().result == "0") {
this.lblResultPayableTo.setCaption("<b><font color='red'>Account No. doesn't exist!");
//            this.txtAccountName.setDataValue("");
} else if (inSender.getData().result == "1") {
//            app.alert("Account found!");
this.lblResultPayableTo.setCaption("<b><font color='blue'>Account number found!");
//            this.txtAccountName.setDataValue(inSender.getData().name);
} else if (inSender.getData().result == "503") {
this.lblResult.setCaption("<b><font color='red'>Host not available!");
}
},
svCheckAccountPurchasorResult: function(inSender, inDeprecated) {
this.txtAccountNo.setInvalid(true);
if (inSender.getData().result == "0") {
this.lblResultPurchasor.setCaption("<b><font color='red'>Account No. doesn't exist!");
this.txtAccountName.setDataValue("");
} else if (inSender.getData().result == "1") {
this.lblResultPurchasor.setCaption("<b><font color='blue'>Account number found!");
this.txtAccountName.setDataValue(inSender.getData().name);
this.txtAccountNo.setInvalid(false);
} else if (inSender.getData().result == "503") {
this.lblResult.setCaption("<b><font color='red'>Host not available!");
}
},
svGetTxcodeResult: function(inSender, inDeprecated) {
if(inSender.getData()!=null){
this.txtServiceCharge.setDataValue(inSender.getData().servicecharge);
}else{
this.panel3.setValue("disabled",true);
app.alert("System unable to load. Please refresh the page.");
}
},
svSaveResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue == "1"){
this.svDepositMc.update();
}else if(inSender.getData().dataValue == "2"){
app.toastWarning("Check Number already issued.");
}else{
console.log(inSender.getData().dataValue);
app.toastError("Transaction Failed");
}
},
slcPayModeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.pnlPurchasor.clearData();
this.pnlCheckDetails.clearData();
this.svCheckAccountPurchasor.clearData();
if(inDataValue=="1"){
this.pnlAccountNo.setShowing(false);
this.txtORNumber.setShowing(true);
this.txtAccountName.setReadonly(false);
this.txtAccountNo.setValue("required",false);
}else if(inDataValue=="2"){
this.pnlAccountNo.setShowing(true);
this.txtORNumber.setShowing(false);
this.txtAccountName.setReadonly(true);
this.txtAccountNo.setValue("required",true);
}
},
svDepositMcResult: function(inSender, inDeprecated) {
var res = inSender.getData().dataValue;
if(res == "1"){
app.toastError("Check Number does not exist!");
}else if(res == "2"){
app.toastError("Check amount on record is not the same with value entered! \n Please verify!");
}else if(res == "3"){
app.toastError("Check date on record is not the same with value entered! \n Please verify!");
}else if(res == "4"){
app.toastError("Check is already stale! Please refer to transaction officer!");
}else if(res == "5"){
app.toastError("Check is already negotiated!");
}else if(res == "6"){
app.toastError("Check No. " + this.txtMCGCNumber.getDataValue() + " has been reported lost! \n Report matter to Officer!");
}else if(res == "7"){
app.toastError("Check No. " + this.txtMCGCNumber.getDataValue() + " is currently under SPO! \n Report matter to Officer!");
}else if(res == "8"){
app.toastError("Transaction Failed.");
}else if(res == "0"){
app.toastSuccess("Transaction Completed.");
}
},
_end: 0
});

TLR_FX_MCGCPRCH.widgets = {
varCheckType: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"MC\",\"dataValue\":\"1\"},{\"name\":\"GC\",\"dataValue\":\"0\"}]","type":"EntryData"}, {}],
svCheckAccountPurchasor: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkAcct","service":"FinTxFacade"}, {"onResult":"svCheckAccountPurchasorResult"}, {
input: ["wm.ServiceInput", {"type":"checkAcctInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtAccountNo.dataValue","targetProperty":"accountno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtAccountNo.dataValue","targetProperty":"acctno"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtAccountNo","targetProperty":"loadingDialog"}, {}]
}]
}],
svCheckAccountPayableTo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkAcct","service":"FinTxFacade"}, {"onResult":"svCheckAccountPayableToResult"}, {
input: ["wm.ServiceInput", {"type":"checkAcctInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtPayee.dataValue","targetProperty":"accountno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtPayee.dataValue","targetProperty":"acctno"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtPayee","targetProperty":"loadingDialog"}, {}]
}]
}],
svGetTxcode: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getTxinfo","service":"FinTxFacade"}, {"onResult":"svGetTxcodeResult"}, {
input: ["wm.ServiceInput", {"type":"getTxinfoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"MC / GC Purchase\"","targetProperty":"txname"}, {}]
}]
}]
}],
svSave: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestMc","service":"FinTxFacade"}, {"onResult":"svSaveResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"requestMcInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtPayee.dataValue","targetProperty":"data.payee"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtPurpose.dataValue","targetProperty":"data.remarks"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"txtAmount.dataValue","targetProperty":"data.amount"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"data.issuingbr"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"txtMCGCNumber.dataValue","targetProperty":"data.mccheckno"}, {}],
wire5: ["wm.Wire", {"expression":"if(${rBtnMC.dataValue}==true){\n   \"MC\"\n}else{\n   \"GC\"\n}","targetProperty":"data.checktype"}, {}]
}]
}]
}],
notifConfirm: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svSave"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Are you sure you want to submit?\"","targetProperty":"text"}, {}]
}]
}]
}],
varPayMode: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Cash\",\"dataValue\":\"1\"},{\"name\":\"Debit to Account\",\"dataValue\":\"2\"}]","type":"EntryData"}, {}],
svDepositMc: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"depositMc","service":"FinTxFacade"}, {"onResult":"svDepositMcResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"depositMcInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtPayee.dataValue","targetProperty":"data.payee"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtPurpose.dataValue","targetProperty":"data.remarks"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"txtAmount.dataValue","targetProperty":"data.amount"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"data.txbr"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"slcPayMode.dataValue","targetProperty":"data.paymode"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"txtAccountNo.dataValue","targetProperty":"data.accountno"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"txtAccountName.dataValue","targetProperty":"data.name"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"txtMCGCNumber.dataValue","targetProperty":"data.mccheckno"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"data.issuingbr"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"txtORNumber.dataValue","targetProperty":"data.txor"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"data.txby"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"caption":"MC / GC Purchase","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"350px"}, {}]
}],
panel3: ["wm.Panel", {"height":"358px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
radioButton1Panel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
rBtnMC: ["wm.RadioButton", {"border":"0","caption":"MC","captionSize":"30px","dataType":"boolean","displayValue":true,"emptyValue":"false","groupValue":true,"height":"25px","startChecked":true,"width":"80px"}, {}],
rBtnGC: ["wm.RadioButton", {"border":"0","caption":"GC","captionSize":"30px","checkedValue":false,"dataType":"boolean","displayValue":false,"emptyValue":"false","groupValue":true,"height":"25px","width":"80px"}, {}]
}],
dtTxDate: ["wm.Date", {"border":"0","caption":"Transaction Date : ","captionSize":"140px","displayValue":"10/8/2018","emptyValue":"null","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date();","targetProperty":"dataValue"}, {}]
}]
}],
slcPayMode: ["wm.SelectMenu", {"border":"0","caption":"Payment Mode  : ","captionSize":"140px","dataField":"dataValue","dataType":"EntryData","dataValue":"2","displayField":"name","displayValue":"Debit to Account","emptyValue":"null","height":"25px","required":true,"width":"320px"}, {"onchange":"slcPayModeChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varPayMode","targetProperty":"dataSet"}, {}]
}]
}],
lblPurchasor: ["wm.Label", {"caption":"Purchasor : ","padding":"3","styles":{"color":"#353535","fontSize":"11px","fontWeight":"bolder"}}, {}],
pnlPurchasor: ["wm.Panel", {"height":"50px","horizontalAlign":"left","padding":"0,0,0,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
txtAccountName: ["wm.Text", {"border":"0","caption":"Name : ","dataValue":"","displayValue":"","emptyValue":"emptyString","height":"25px","readonly":true,"required":true,"styles":{},"width":"600px"}, {"onfocus":"onFocusField"}],
pnlAccountNo: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"590px"}, {}, {
txtAccountNo: ["wm.Text", {"border":"0","caption":"Account Number : ","dataValue":undefined,"displayValue":"","height":"100%","required":true,"styles":{},"width":"310px"}, {"onchange":"svCheckAccountPurchasor","onfocus":"onFocusField"}],
btnSearchPurchasor: ["wm.Button", {"border":"1","caption":"Search","height":"100%","margin":"0,0,0,10","showing":false,"styles":{},"width":"80px"}, {"onclick":"svCheckAccountPurchasor"}],
lblResultPurchasor: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
}],
txtORNumber: ["wm.Text", {"border":"0","caption":"OR Number : ","dataValue":undefined,"displayValue":"","height":"25px","showing":false,"width":"310px"}, {}]
}],
lblCheckDetails: ["wm.Label", {"caption":"Check Details : ","padding":"3","styles":{"color":"#353535","fontSize":"11px","fontWeight":"bolder"}}, {}],
pnlCheckDetails: ["wm.Panel", {"height":"125px","horizontalAlign":"left","margin":"0,0,0,0","padding":"0,0,0,10","styles":{},"verticalAlign":"top","width":"840px"}, {}, {
txtPayee: ["wm.Text", {"border":"0","caption":"Payee : ","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"styles":{},"width":"500px"}, {"onfocus":"onFocusField"}],
txtPurpose: ["wm.Text", {"border":"0","caption":"Purpose : ","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"styles":{},"width":"500px"}, {"onfocus":"onFocusField"}],
txtMCGCNumber: ["wm.Text", {"border":"0","caption":"MC / GC Number : ","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","mobileHeight":"25%","required":true,"styles":{},"width":"320px"}, {"onfocus":"onFocusField"}],
txtServiceCharge: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Service Charge : ","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"readonly":true,"required":true,"showing":false,"styles":{"textAlign":"right"},"width":"320px"}, {"onfocus":"onFocusField"}],
txtAmount: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Amount:","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"required":true,"styles":{},"width":"320px"}, {"onfocus":"onFocusField"}],
slcPurpose: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Purpose : ","captionSize":"135px","dataSet":"","dataType":"com.casa.util.forms.DescIdForm","displayValue":"","emptyValue":"null","height":"25px","showing":false,"styles":{},"width":"320px"}, {}],
fAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"840px"}, {}, {
lblResultPayableTo: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
}]
}]
}],
btnSubmitPanel: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"620px"}, {}, {
btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","width":"80px"}, {"onclick":"notifConfirm"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${panel3.invalid} || ${txtAmount.dataValue}<=0 || ${txtAccountName.dataValue} == \"\"\n|| (${slcPayMode.dataValue}==\"1\" && ${txtORNumber.dataValue}==\"\")","targetProperty":"disabled"}, {}]
}]
}],
btnCancel: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Cancel","height":"100%","styles":{},"width":"90px"}, {"onclick":"btnCancelClick"}],
btnHome: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"25px","height":"25px","width":"100px"}, {"onclick":"btnHomeClick"}]
}]
}]
}]
};

TLR_FX_MCGCPRCH.prototype._cssText = '';
TLR_FX_MCGCPRCH.prototype._htmlText = '';