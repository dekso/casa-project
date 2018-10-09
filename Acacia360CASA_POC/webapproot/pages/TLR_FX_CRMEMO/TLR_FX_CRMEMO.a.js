dojo.declare("TLR_FX_CRMEMO", wm.Page, {
start: function() {
this.svCurrency.update();
this.fwoPass.setDataValue(true);
this.svTransInfo.update();
},
"preferredDevice": "desktop",
fAmtFocus: function(inSender) {
this.fAmt.setDisplayValue("");
},
svCreditMemoResult: function(inSender, inDeprecated) {
if(inSender.getData().result=="0"){
app.alert("Account No. doesn't exist!");
}else if(inSender.getData().result=="1"){
this.pnlTransDet.clearData();
this.lblResult.setCaption("");
app.alert("Transaction Successful!");
}else if(inSender.getData().result=="3"){
app.confirm("Posting Restriction : " +inSender.getData().posttxdesc
+"<br/>Override Transaction?", false,
dojo.hitch(this, function() {
this.dlgOverride.show();
}),
dojo.hitch(this, function() {}));
}else if(inSender.getData().result=="4"){
app.alert("Transaction Failed : Account is Closed!");
}else if(inSender.getData().result=="999"){
app.alert("Transaction Failed : Error in Routine!");
}
},
svValidateUserResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="0"){
app.alert("Invalid username or password!");
}else if(inSender.getData().dataValue=="1"){
app.toastSuccess("Override Account Validated!", 5000);
this.dlgOverride.hide();
this.svOverride.update();
}
},
svOverrideResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="1"){
app.alert("Override Successful!");
this.pnlTransDet.clearData();
this.lblResult.setCaption("");
}else{
app.alert("Override Failed!");
}
},
svCheckAccountResult: function(inSender, inDeprecated) {
console.log(inSender.getData());
console.log(app.varUnit.getData().dataValue);
if(inSender.getData().result=="0"){
//app.alert("Account no does not exist!");
this.lblResult.setCaption("<b><font color='red'>Account No. doesn't exist!");
this.fCurr.setDataValue("");
this.fAcctName.setDataValue("");
}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
this.svFreezeInfo.update();
//            if(inSender.getData().passbookind==true){
//                this.panel4.setShowing(true);
//                this.fwPassbook.setDataValue(true);
//                }
//            if(inSender.getData().checkbookind==true){
//                this.panel7.setShowing(true);
//                this.fwCheckbook.setDataValue(true);
//                }
//            if(inSender.getData().soaind==true){
//                this.panel8.setShowing(true);
//                this.fwStatementOfAcct.setDataValue(true);
//                }
//            if(inSender.getData().certtimedepind==true){
//                this.panel9.setShowing(true);
//                this.fwCertTimeDep.setDataValue(true);
//                }
}else if(inSender.getData().result=="503"){
this.lblResult.setCaption("<b><font color='red'>Host not available!");
}
},
btnSearchClick: function(inSender) {
this.svCheckAccount.update();
},
onFocusField: function(inSender) {
//console.log(inSender.name);
var clearobj = this[inSender.name];
clearobj.clear();
},
button1Click: function(inSender) {
console.log(app.varUnit.getData().dataValue);
console.log(this.svCheckAccount.getData().unit);
console.log(this.svTransInfo.getData());
if(this.svCheckAccount.getData().unit==app.varUnit.getData().dataValue){
this.svCreditMemo.update();
}else{
if(this.svTransInfo.getData().servicecharge > 0){
this.dlgCharge.show();
}else{
this.svCreditMemo.update();
}
}
},
svCancelRejectResult: function(inSender, inDeprecated) {
this.dlgOverride.hide();
this.panel5.clearData();
if(inSender.getData().dataValue=='1'){
app.alert("Transaction Rejected/Cancelled!");
this.fAcctNo.clear();
this.fAcctName.clear();
this.fAmt.clear();
this.fCurr.clear();
this.lblResult.setCaption("");
}
},
btnValidateSlipClick: function(inSender) {
this.svPrint.update();
},
btnClearClick: function(inSender) {
this.pnlTransDet.clearData();
this.lblResult.setCaption("");
this.btnValidateSlip.setDisabled(true);
this.fAcctledger.setShowing(false);
this.panel4.setShowing(false);
//        this.panel7.setShowing(false);
//        this.panel8.setShowing(false);
//        this.panel9.setShowing(false);
},
svFreezeInfoResult: function(inSender, inDeprecated) {
this.fAcctName.setDataValue(this.svCheckAccount.getData().name);
this.fCurr.setDataValue(this.svCheckAccount.getData().currency);
if(inSender.getData()!= null){
this.lblResult.setCaption("<b><font color='red'>This account is under freeze order!");
//            this.fCurr.setDataValue("");
this.fAmt.setDisabled(true);
}else{
this.lblResult.setCaption("<b><font color='blue'>Account number found!");
//            this.fCurr.setDataValue(inSender.getData().currency);
this.fAmt.setDisabled(false);
}
},
fAcctNoChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.svCheckAccount.clearData();
this.svFreezeInfo.clearData();
},
_end: 0
});

TLR_FX_CRMEMO.widgets = {
svCreditMemo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cashDepWithDrCrMemo","service":"FinTxFacade"}, {"onResult":"svCreditMemoResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"cashDepWithDrCrMemoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fAcctledger.dataValue","targetProperty":"jrnl.ledgerlineno"}, {}],
wire: ["wm.Wire", {"expression":"123","targetProperty":"jrnl.txref"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"jrnl.accountno"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"fCurr.dataValue","targetProperty":"jrnl.currency"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"fTxdt.dataValue","targetProperty":"jrnl.txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fAmt.dataValue","targetProperty":"jrnl.txamount"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"fReasonCd.dataValue","targetProperty":"jrnl.reasoncode"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"fRemarks.dataValue","targetProperty":"jrnl.remarks"}, {}],
wire3: ["wm.Wire", {"expression":"112013","targetProperty":"jrnl.txcode"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"jrnl.txby"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"jrnl.unit"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"jrnl.instcode"}, {}]
}]
}]
}],
svOverride: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"overrideTransaction","service":"FinTxFacade"}, {"onResult":"svOverrideResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"overrideTransactionInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"overrideUsername.dataValue","targetProperty":"username"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"svCreditMemo.txrefno","targetProperty":"txrefno"}, {}]
}]
}]
}],
svValidateUser: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"validateUser","service":"UtilFacade"}, {"onResult":"svValidateUserResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"containerWidget","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"validateUserInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"overrideUsername.dataValue","targetProperty":"username"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"overridePassword.dataValue","targetProperty":"password"}, {}]
}]
}]
}],
svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CURR\"","targetProperty":"codename"}, {}]
}]
}]
}],
svCheckAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkAcct","service":"FinTxFacade"}, {"onResult":"svCheckAccountResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"checkAcctInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"acctno"}, {}]
}]
}]
}],
svTransInfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getTxinfo","service":"FinTxFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getTxinfoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Credit Memo\"","targetProperty":"txname"}, {}]
}]
}]
}],
svCancelReject: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cancelOverrideTX","service":"FinTxFacade"}, {"onResult":"svCancelRejectResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"cancelOverrideTXInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCreditMemo.txrefno","targetProperty":"txrefno"}, {}]
}]
}]
}],
svPrint: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"printDocSlip","service":"FinTxFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"printDocSlipInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCreditMemo.txrefno","targetProperty":"txrefno"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel3","targetProperty":"loadingDialog"}, {}]
}]
}],
varCheck: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"\",\"dataValue\":\"1\"}]","type":"EntryData"}, {}],
svFreezeInfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getFreezeInfo","service":"AccountFacade"}, {"onResult":"svFreezeInfoResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getFreezeInfoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"accountno"}, {}]
}]
}]
}],
dlgOverride: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"150px","height":"150px","title":"Override Transaction","width":"350px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
panel5: ["wm.Panel", {"height":"61px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
overrideUsername: ["wm.Text", {"border":"0","caption":"Username:","dataValue":undefined,"displayValue":"","height":"25px","required":true}, {}],
overridePassword: ["wm.Text", {"border":"0","caption":"Password:","dataValue":undefined,"displayValue":"","height":"25px","password":true,"required":true}, {}]
}],
panel6: ["wm.Panel", {"height":"37px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSubmit: ["wm.Button", {"border":"1","caption":"Override","desktopHeight":"30px","height":"30px","styles":{},"width":"114px"}, {"onclick":"svValidateUser"}],
btnCancel: ["wm.Button", {"border":"1","caption":"Reject","desktopHeight":"30px","height":"30px","styles":{},"width":"120px"}, {"onclick":"svCancelReject"}]
}]
}]
}],
dlgCharge: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"110px","height":"110px","title":"Interbranch Service Charge","width":"350px"}, {}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fServiceAmt: ["wm.Number", {"border":"0","caption":"Service Charge:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svTransInfo.servicecharge","targetProperty":"dataValue"}, {}]
}]
}],
panel9: ["wm.Panel", {"height":"37px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
btnProceedWaive: ["wm.Button", {"border":"1","caption":"Proceed Waive","desktopHeight":"25px","height":"25px","width":"110px"}, {"onclick":"btnProceedWaiveClick"}],
btnProceedCollect: ["wm.Button", {"border":"1","caption":"Proceed Collect","desktopHeight":"25px","height":"25px","width":"110px"}, {"onclick":"btnProceedCollectClick"}],
btnChargeCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"25px","height":"25px","margin":"0,0,0,0","styles":{},"width":"100px"}, {"onclick":"dlgCharge.hide"}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Credit Memo","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
}],
panel3: ["wm.Panel", {"height":"454px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"135px","displayValue":"","height":"25px","readonly":true,"width":"320px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
pnlTransDet: ["wm.Panel", {"height":"176px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
fAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {"onchange":"fAcctNoChange","onfocus":"onFocusField"}],
btnSearch: ["wm.Button", {"border":"1","caption":"Search","height":"100%","width":"80px"}, {"onclick":"btnSearchClick"}],
lblResult: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
}],
fAcctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {"onfocus":"onFocusField"}],
fAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Amount:","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"required":true,"width":"320px"}, {"onfocus":"onFocusField"}],
fCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"id","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"210px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}]
}]
}],
fReasonCd: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Reason Code:","captionSize":"135px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"100, 101, 102","required":true,"width":"210px"}, {}],
label2: ["wm.Label", {"caption":"Additional Details","padding":"4","styles":{"color":"#0b0a0a","fontWeight":"bolder"}}, {}],
fRemarks: ["wm.Text", {"border":"0","caption":"Remarks:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"320px"}, {"onfocus":"onFocusField"}]
}],
panel4: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svCheckAccount.prodtype}==\"20\" || ${svCheckAccount.prodtype}==\"50\" ","targetProperty":"showing"}, {}]
}],
fwPass: ["wm.RadioButton", {"border":"0","caption":"with Passbook","displayValue":"","groupValue":"WAR","height":"25px","width":"180px"}, {}],
fwoPass: ["wm.RadioButton", {"border":"0","caption":"w/o Passbook","displayValue":"","groupValue":"WAR","height":"25px","width":"180px"}, {}],
fwPassbook: ["wm.RadioSet", {"border":"0","caption":"with Passbook","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwPassbookChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel7: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
fwCheck: ["wm.RadioButton", {"border":"0","caption":"with Passbook","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwoCheck: ["wm.RadioButton", {"border":"0","caption":"w/o Passbook","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwCheckbook: ["wm.RadioSet", {"border":"0","caption":"with Checkbook","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwCheckbookChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel8: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
fwSoa: ["wm.RadioButton", {"border":"0","caption":"with Passbook","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwoSoa: ["wm.RadioButton", {"border":"0","caption":"w/o Passbook","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwStatementOfAcct: ["wm.RadioSet", {"border":"0","caption":"with SOA","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwStatementOfAcctChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel10: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
fwCTD: ["wm.RadioButton", {"border":"0","caption":"with Passbook","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwoCTD: ["wm.RadioButton", {"border":"0","caption":"w/o Passbook","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwCertTimeDep: ["wm.RadioSet", {"border":"0","caption":"with CTD","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwCertTimeDepChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
}]
}]
}],
spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
fAcctledger: ["wm.Text", {"border":"0","caption":"Ledger Line No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","width":"210px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${fwoPass.checked}","targetProperty":"disabled"}, {}],
wire1: ["wm.Wire", {"expression":"${svCheckAccount.prodtype}==\"20\" || ${svCheckAccount.prodtype}==\"50\" ","targetProperty":"showing"}, {}]
}]
}],
button1Panel: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
button1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"button1Click"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${panel1.invalid} || ${fAmt.dataValue}===0.00 || ${svCheckAccount.result}==\"0\"\n|| ${svCheckAccount.isEmpty} || !${svFreezeInfo.isEmpty}","targetProperty":"disabled"}, {}]
}]
}],
btnValidateSlip: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Validate Slip/Doc","desktopHeight":"25px","height":"25px","margin":"0,0,0,0","styles":{},"width":"120px"}, {"onclick":"btnValidateSlipClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svCreditMemo.result}!=\"1\" && ${svOverride.dataValue}!=\"1\"","targetProperty":"disabled"}, {}]
}]
}],
btnClear: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Clear","desktopHeight":"25px","height":"25px","margin":"0,10,0,10","styles":{},"width":"80px"}, {"onclick":"btnClearClick"}]
}]
}]
}]
}]
};

TLR_FX_CRMEMO.prototype._cssText = '';
TLR_FX_CRMEMO.prototype._htmlText = '';