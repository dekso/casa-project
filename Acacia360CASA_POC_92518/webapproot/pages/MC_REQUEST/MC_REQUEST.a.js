dojo.declare("MC_REQUEST", wm.Page, {
start: function() {
this.fwoPass.setDataValue(true);
this.svCurrency.update();
},
"preferredDevice": "desktop",
svCheckEncashResult: function(inSender, inDeprecated) {
if(inSender.getData().result=="0"){
app.alert("Account no does not found/exist!");
}else if(inSender.getData().result=="1"){
this.fAcctNo.clear();
this.fAmt.clear();
this.fChkNo.clear();
this.fChkTxdt.clear();
this.fCurr.clear();
this.fAcctName.clear();
this.lblResult.setCaption("");
app.alert("Transaction Successful!");
this.svUnitBalance.update();
}else if(inSender.getData().result=="2"){
app.alert("Insufficient Balance!");
}else if(inSender.getData().result=="3"){
app.confirm("Posting Restriction : "
+inSender.getData().posttxdesc+"<br/>Override Transaction?", false,
dojo.hitch(this, function() {
this.dlgOverride.show();
}),
dojo.hitch(this, function() {
this.svCancelReject.update();
}));
}else if(inSender.getData().result=="4"){
app.alert("Transaction Failed : Account is Closed!");
}else if(inSender.getData().result=="5"){
app.confirm("Invalid Transaction : Reached Tellers Limit!<br/>Override Transaction?", false,
dojo.hitch(this, function() {
this.dlgOverride.show();
}),
dojo.hitch(this, function() {
this.svCancelReject.update();
}));
}else if(inSender.getData().result=="6"){
app.confirm("Invalid Transaction : Reached Tellers Limit! <br/> Posting Restriction : "
+inSender.getData().posttxdesc+"<br/>Override Transaction?", false,
dojo.hitch(this, function() {
this.dlgOverride.show();
}),
dojo.hitch(this, function() {
this.svCancelReject.update();
}));
}else if(inSender.getData().result=="7"){
app.alert("Transaction Failed : Check On Hold!");
}else if(inSender.getData().result=="8"){
app.alert("Transaction Failed : Check No. Not Yet Issued!");
}else if(inSender.getData().result=="9"){
app.alert("Transaction Failed : Check No. Already Used!");
}else if(inSender.getData().result=="999"){
app.alert("Transaction Failed : Error in Routine!");
}
},
svUnitBalanceResult: function(inSender, inDeprecated) {
console.log("Unit bal" +inSender.getData());
app.varNetCash.setValue("dataValue",inSender.getData().dataValue);
},
fAmtFocus: function(inSender) {
this.fAmt.setDisplayValue("");
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
this.svUnitBalance.update();
app.alert("Override Successful!");
this.fAcctNo.clear();
this.fAmt.clear();
this.fChkNo.clear();
this.fChkTxdt.clear();
this.fCurr.clear();
this.fAcctName.clear();
this.lblResult.setCaption("");
this.fOverrideBy.clear();
this.fOverrideResult.clear();
}else{
app.alert("Override Failed!");
}
},
svCancelRejectResult: function(inSender, inDeprecated) {
this.dlgOverride.hide();
this.pnlOverride.clearData();
if(inSender.getData().dataValue=="1"){
app.alert("Transaction Rejected/Cancelled!");
this.fAcctNo.clear();
this.fAmt.clear();
this.fChkNo.clear();
this.fChkTxdt.clear();
this.fCurr.clear();
this.fAcctName.clear();
this.lblResult.setCaption("");
this.fOverrideBy.clear();
this.fOverrideResult.clear();
}else{
app.alert("Error in Routine!");
}
},
svCheckAccountResult: function(inSender, inDeprecated) {
console.log(inSender.getData());
if(inSender.getData().result=="0"){
//app.alert("Account no does not exist!");
this.lblResult.setCaption("<b><font color='red'>Account number does not exist!");
this.fCurr.setDataValue("");
this.fAcctName.setDataValue("");
}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
this.lblResult.setCaption("<b><font color='blue'>Account number found!");
this.fCurr.setDataValue(inSender.getData().currency);
this.fAcctName.setDataValue(inSender.getData().name);
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
btnReqORClick: function(inSender) {
this.svRequestOverride.update();
this.dlgOverrideDet.show();
this.waitTimer.startTimer();
this.dlgOverride.hide();
},
waitTimerTimerFire: function(inSender) {
this.svRequestOverrideWait.update();
},
svRequestOverrideWaitResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue==1){
this.waitTimer.stopTimer();
this.svRequestOverrideResult.update();
}
},
svRequestOverrideResultResult: function(inSender, inDeprecated) {
this.fOverrideBy.setDataValue(inSender.getData().overrideby);
this.fOverrideResult.setDataValue(inSender.getData().resultstr);
},
btnContinueClick: function(inSender) {
this.dlgOverrideDet.hide();
if(this.svRequestOverrideResult.getData().result==4){
this.svOverride.input.setValue("username", this.svRequestOverrideResult.getData().overrideby);
this.svOverride.update();
}else if(this.svRequestOverrideResult.getData().result==5){
this.svCancelReject.update();
}
},
btnCloseSigcardClick: function(inSender) {
this.dlgSigcard.hide();
},
btnViewSigClick: function(inSender) {
this.svViewSigcard.update();
},
btnSigcardClick: function(inSender) {
this.svViewSigcard.update();
},
svViewSigcardResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="0"){
app.alert("Sigcard not found!");
}else{
this.sigImg.setSource(inSender.getData().dataValue);
this.dlgSigcard.show();
}
},
_end: 0
});

MC_REQUEST.widgets = {
svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CURR\"","targetProperty":"codename"}, {}]
}]
}]
}],
svCheckEncash: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cashDepWithDrCrMemo","service":"FinTxFacade"}, {"onResult":"svCheckEncashResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"cashDepWithDrCrMemoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAmt.dataValue","targetProperty":"jrnl.txamount"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fLedgerline.dataValue","targetProperty":"jrnl.ledgerlineno"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"jrnl.txvaldt"}, {}],
wire4: ["wm.Wire", {"expression":"1","targetProperty":"jrnl.txstatus"}, {}],
wire5: ["wm.Wire", {"expression":"120222","targetProperty":"jrnl.txcode"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"jrnl.txdate"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"fChkNo.dataValue","targetProperty":"jrnl.checkno"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"fChkTxdt.dataValue","targetProperty":"jrnl.checkdate"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"jrnl.txby"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"jrnl.unit"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"jrnl.instcode"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"fPayeeName.dataValue","targetProperty":"jrnl.acctname"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fCurr.dataValue","targetProperty":"jrnl.currency"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"jrnl.accountno"}, {}]
}]
}]
}],
svCancelReject: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cancelOverrideTX","service":"FinTxFacade"}, {"onResult":"svCancelRejectResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"cancelOverrideTXInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckEncash.txrefno","targetProperty":"txrefno"}, {}]
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
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckEncash.txrefno","targetProperty":"txrefno"}, {}]
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
svUnitBalance: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUnitBalance","service":"UserInfoFacade"}, {"onResult":"svUnitBalanceResult"}, {
input: ["wm.ServiceInput", {"type":"getUnitBalanceInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"userid"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.currency","targetProperty":"currency"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
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
svRequestOverride: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestRemoteOverride","service":"FinTxFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"requestRemoteOverrideInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckEncash.txrefno","targetProperty":"txrefno"}, {}]
}]
}]
}],
svRequestOverrideResult: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestRemoteOverrideResult","service":"FinTxFacade"}, {"onResult":"svRequestOverrideResultResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"requestRemoteOverrideResultInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckEncash.txrefno","targetProperty":"txrefno"}, {}]
}]
}]
}],
svRequestOverrideWait: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","loadingDialog":"","operation":"requestRemoteOverrideWait","service":"FinTxFacade"}, {"onResult":"svRequestOverrideWaitResult"}, {
input: ["wm.ServiceInput", {"type":"requestRemoteOverrideWaitInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckEncash.txrefno","targetProperty":"txrefno"}, {}]
}]
}]
}],
waitTimer: ["wm.Timer", {"delay":5000}, {"onTimerFire":"waitTimerTimerFire"}],
svViewSigcard: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"viewSigcard","service":"SigcardFacade"}, {"onResult":"svViewSigcardResult"}, {
input: ["wm.ServiceInput", {"type":"viewSigcardInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"cifno"}, {}]
}]
}]
}],
svRequestMc: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestMc","service":"FinTxFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"requestMcInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fTxdt.dataValue","targetProperty":"data.daterequest"}, {}],
wire2: ["wm.Wire", {"expression":"1","targetProperty":"data.status"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"fPayeeName.dataValue","targetProperty":"data.payee"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fAmt.dataValue","targetProperty":"data.amount"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fRemarks.dataValue","targetProperty":"data.remarks"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"data.issuingbr"}, {}]
}]
}]
}],
dlgSigcard: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"","desktopHeight":"500px","height":"500px","noEscape":true,"title":"Sigcard","width":"900px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
sigcardPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
sigImg: ["wm.Picture", {"aspect":"v","height":"1200px","width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"41px","height":"41px"}, {}, {
panel7: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"0,0,0,0","padding":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
btnCloseSigcard: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseSigcardClick"}]
}]
}]
}],
dlgOverride: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"135px","height":"135px","noEscape":true,"title":"Override Transaction","width":"440px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
pnlOverride: ["wm.Panel", {"height":"61px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
overrideUsername: ["wm.Text", {"border":"0","caption":"Username:","dataValue":undefined,"displayValue":"","height":"25px","required":true}, {}],
overridePassword: ["wm.Text", {"border":"0","caption":"Password:","dataValue":undefined,"displayValue":"","height":"25px","password":true,"required":true}, {}]
}],
panel6: ["wm.Panel", {"height":"28px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"0,0,0,0","padding":"0,0,0,0","styles":{},"verticalAlign":"top","width":"422px"}, {}, {
btnViewSig: ["wm.Button", {"border":"1","caption":"View Sigcard","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnViewSigClick"}],
btnReqOR: ["wm.Button", {"border":"1","caption":"Remote Override","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"120px"}, {"onclick":"btnReqORClick"}],
btnOverride: ["wm.Button", {"border":"1","caption":"Override","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"svValidateUser"}],
btnCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"svCancelReject"}]
}]
}]
}],
dlgOverrideDet: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"140px","height":"140px","noEscape":true,"title":"Waiting for Override Result","width":"350px"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
pnlOverrideDet1: ["wm.Panel", {"height":"55px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
fOverrideBy: ["wm.Text", {"border":"0","caption":"Override By:","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {}],
fOverrideResult: ["wm.Text", {"border":"0","caption":"Override Result :","displayValue":"","emptyValue":"null","height":"25px","readonly":true}, {}]
}],
panel8: ["wm.Panel", {"height":"37px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
btnContinue: ["wm.Button", {"border":"1","caption":"Continue","desktopHeight":"30px","height":"30px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnContinueClick"}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Manager Check Request","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
}],
panel3: ["wm.Panel", {"height":"146px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fTxdt: ["wm.Date", {"border":"0","caption":"Request Date:","captionSize":"135px","displayValue":"","height":"25px","readonly":true,"width":"320px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
fPayeeName: ["wm.Text", {"border":"0","caption":"Payee Name:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {"onfocus":"onFocusField"}],
fAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Amount:","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"required":true,"width":"320px"}, {"onfocus":"onFocusField"}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"0","targetProperty":"minimum"}, {}],
wire: ["wm.Wire", {"expression":"${app.varNetCash.dataValue}","targetProperty":"maximum"}, {}]
}]
}],
spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
fRemarks: ["wm.LargeTextArea", {"border":"0","caption":"Remarks:","captionPosition":"left","captionSize":"135px","dataValue":undefined,"desktopHeight":"50px","displayValue":"","height":"50px","width":"400px"}, {}]
}],
btnSubmitPanel: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"501px"}, {}, {
btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svCheckEncash"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${panel3.invalid} ||\n${fAmt.dataValue}==0.00 || ${svCheckAccount.result}==\"0\"","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
};

MC_REQUEST.prototype._cssText = '';
MC_REQUEST.prototype._htmlText = '';