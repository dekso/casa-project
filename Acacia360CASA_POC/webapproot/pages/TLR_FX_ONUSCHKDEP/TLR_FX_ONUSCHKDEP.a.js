dojo.declare("TLR_FX_ONUSCHKDEP", wm.Page, {
start: function() {
this.fwoPass.setDataValue(true);
this.svCurrency.update();
this.svTransInfo.update();
},
"preferredDevice": "desktop",
fAmtFocus: function(inSender) {
this.fAmt.setDisplayValue("");
},
svCheckDepResult: function(inSender, inDeprecated) {
if(inSender.getData().result=="0"){
app.alert("Account No. doesn't exist!");
}else if(inSender.getData().result=="1"){
//            this.fAcctNo.clear();
//            this.fAmt.clear();
//            this.fChkAcctNo.clear();
//            this.fChkNo.clear();
//            this.fChkTxdt.clear();
//            this.fCurr.clear();
//            this.fAcctName.clear();
//            this.fChkAcctName.clear();
//            this.lblResult.setCaption("");
//            this.lblChkResult.setCaption("");
this.btnVerifiedSigcard.setDisabled(true);
this.btnInvalidSigcard.setDisabled(true);
this.btnSubmit.setDisabled(true);
app.alert("Transaction Successful!");
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
this.panel3.setValue("disabled",false);
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
this.panel3.setValue("disabled",false);
}else if(inSender.getData().result=="8"){
app.alert("Transaction Failed : Check No. Not Yet Issued!");
this.panel3.setValue("disabled",false);
}else if(inSender.getData().result=="9"){
app.alert("Transaction Failed : Check No. Already Used!");
this.panel3.setValue("disabled",false);
}else if(inSender.getData().result=="999"){
app.alert("Transaction Failed : Error in Routine!");
this.panel3.setValue("disabled",false);
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
this.fAcctNo.clear();
this.fAmt.clear();
this.fChkAcctNo.clear();
this.fChkNo.clear();
this.fChkTxdt.clear();
this.fCurr.clear();
this.fAcctName.clear();
this.fChkAcctName.clear();
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
this.fChkAcctNo.clear();
this.fChkNo.clear();
this.fChkTxdt.clear();
this.fCurr.clear();
this.fAcctName.clear();
this.fChkAcctName.clear();
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
this.lblResult.setCaption("<b><font color='red'>Account doesn't exist!");
this.fCurr.setDataValue("");
this.fAcctName.setDataValue("");
}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
this.lblResult.setCaption("<b><font color='blue'>Account number found!");
this.fCurr.setDataValue(inSender.getData().currency);
this.fAcctName.setDataValue(inSender.getData().name);
//            if(inSender.getData().passbookind==true){
//                this.panel4.setShowing(true);
//                this.fwPassbook.setDataValue(true);
//                }
//            if(inSender.getData().checkbookind==true){
//                this.panel5.setShowing(true);
//                this.fwCheckbook.setDataValue(true);
//                }
//            if(inSender.getData().soaind==true){
//                this.panel10.setShowing(true);
//                this.fwStatementOfAcct.setDataValue(true);
//                }
//            if(inSender.getData().certtimedepind==true){
//                this.panel11.setShowing(true);
//                this.fwCertTimeDep.setDataValue(true);
//                }
if(inSender.getData().posttx == "12"){
app.alert("This account is with Posting Restriction - 'No Check Deposits'!");
this.btnSubmit.setDisabled(true);
this.btnSigcard.setDisabled(true);
}
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
btnChkSearchClick: function(inSender) {
this.svCheckChkAccount.update();
},
svCheckChkAccountResult: function(inSender, inDeprecated) {
if(inSender.getData().result=="0"){
//app.alert("Account no does not exist!");
this.lblChkResult.setCaption("<b><font color='red'>Check Account does not exist!");
this.fChkCurr.setDataValue("");
this.fChkAcctName.setDataValue("");
}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
this.lblChkResult.setCaption("<b><font color='blue'>Check Account found!");
this.fChkCurr.setDataValue(inSender.getData().currency);
this.fChkAcctName.setDataValue(inSender.getData().name);
}
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
btnSubmitClick: function(inSender) {
console.log(app.varUnit.getData().dataValue);
console.log(this.svCheckAccount.getData().unit);
console.log(this.svTransInfo.getData());
if(this.svCheckAccount.getData().unit==app.varUnit.getData().dataValue){
this.svCheckDep.update();
}else{
if(this.svTransInfo.getData().servicecharge > 0){
this.dlgCharge.show();
}else{
this.svCheckDep.update();
}
}
},
btnVerifiedSigcardClick: function(inSender) {
this.dlgSigcard.hide();
this.panel3.setValue("disabled",true);
this.btnSubmit.setDisabled(false);
},
btnInvalidSigcardClick: function(inSender) {
this.dlgSigcard.hide();
this.btnSubmit.setDisabled(true);
this.panel3.clearData();
this.lblResult.setCaption("");
this.lblChkResult.setCaption("");
this.btnValidateSlip.setDisabled(true);
this.svViewSigcard.input.setValue("acctno", "");
this.fwoPass.setDataValue(true);
},
btnValidateSlipClick: function(inSender) {
this.btnSigcardClick(inSender);
},
btnClearClick: function(inSender) {
this.panel3.clearData();
this.lblResult.setCaption("");
this.lblChkResult.setCaption("");
this.fwoPass.setDataValue(true);
this.btnSubmit.setDisabled(true);
this.btnValidateSlip.setDisabled(true);
this.svViewSigcard.input.setValue("acctno", "");
this.btnVerifiedSigcard.setDisabled(false);
this.btnInvalidSigcard.setDisabled(false);
this.panel3.setValue("disabled",false);
//        this.panel4.setShowing(false);
//        this.panel5.setShowing(false);
//        this.panel10.setShowing(false);
//        this.panel11.setShowing(false);
},
_end: 0
});

TLR_FX_ONUSCHKDEP.widgets = {
svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CURR\"","targetProperty":"codename"}, {}]
}]
}]
}],
svCheckDep: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cashDepWithDrCrMemo","service":"FinTxFacade"}, {"onResult":"svCheckDepResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"cashDepWithDrCrMemoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAmt.dataValue","targetProperty":"jrnl.txamount"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fCurr.dataValue","targetProperty":"jrnl.currency"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fChkTxdt.dataValue","targetProperty":"jrnl.checkdate"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"fChkNo.dataValue","targetProperty":"jrnl.checkno"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fTxdt.dataValue","targetProperty":"jrnl.txvaldt"}, {}],
wire5: ["wm.Wire", {"expression":"111211","targetProperty":"jrnl.txcode"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"fChkAcctNo.dataValue","targetProperty":"jrnl.checkacctno"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"jrnl.accountno"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"jrnl.txdate"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"fLedgerline.dataValue","targetProperty":"jrnl.ledgerlineno"}, {}],
wire13: ["wm.Wire", {"expression":"1","targetProperty":"jrnl.txstatus"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"jrnl.txby"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"jrnl.unit"}, {}],
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
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckDep.txrefno","targetProperty":"txrefno"}, {}]
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
svCancelReject: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cancelOverrideTX","service":"FinTxFacade"}, {"onResult":"svCancelRejectResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"cancelOverrideTXInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckDep.txrefno","targetProperty":"txrefno"}, {}]
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
svCheckChkAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkAcct","service":"FinTxFacade"}, {"onResult":"svCheckChkAccountResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"checkAcctInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fChkAcctNo.dataValue","targetProperty":"acctno"}, {}]
}]
}]
}],
svRequestOverride: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestRemoteOverride","service":"FinTxFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"requestRemoteOverrideInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckDep.txrefno","targetProperty":"txrefno"}, {}]
}]
}]
}],
svRequestOverrideResult: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestRemoteOverrideResult","service":"FinTxFacade"}, {"onResult":"svRequestOverrideResultResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"requestRemoteOverrideResultInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckDep.txrefno","targetProperty":"txrefno"}, {}]
}]
}]
}],
svRequestOverrideWait: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","loadingDialog":"","operation":"requestRemoteOverrideWait","service":"FinTxFacade"}, {"onResult":"svRequestOverrideWaitResult"}, {
input: ["wm.ServiceInput", {"type":"requestRemoteOverrideWaitInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckDep.txrefno","targetProperty":"txrefno"}, {}]
}]
}]
}],
svViewSigcard: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"viewSigcard","service":"SigcardFacade"}, {"onResult":"svViewSigcardResult"}, {
input: ["wm.ServiceInput", {"type":"viewSigcardInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fChkAcctNo.dataValue","targetProperty":"cifno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"acctno"}, {}]
}]
}]
}],
waitTimer: ["wm.Timer", {"delay":5000}, {"onTimerFire":"waitTimerTimerFire"}],
svTransInfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getTxinfo","service":"FinTxFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getTxinfoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"On Us Check Deposit\"","targetProperty":"txname"}, {}]
}]
}]
}],
svPrint: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"printDocSlip","service":"FinTxFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel3","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"printDocSlipInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckDep.txrefno","targetProperty":"txrefno"}, {}]
}]
}]
}],
varCheck: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"\",\"dataValue\":\"1\"}]","type":"EntryData"}, {}],
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
btnCancel: ["wm.Button", {"border":"1","caption":"Reject","desktopHeight":"25px","height":"25px","margin":"0,10,0,10","styles":{},"width":"100px"}, {"onclick":"svCancelReject"}]
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
dlgSigcard: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"500px","height":"500px","noEscape":true,"title":"Sigcard","width":"900px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
sigcardPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
sigImg: ["wm.Picture", {"aspect":"v","height":"1200px","width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"41px","height":"41px"}, {}, {
panel7: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"0,0,0,0","padding":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
btnVerifiedSigcard: ["wm.Button", {"border":"1","caption":"Signature Verified","desktopHeight":"25px","height":"25px","margin":"0,0,0,0","styles":{},"width":"120px"}, {"onclick":"btnVerifiedSigcardClick"}],
btnInvalidSigcard: ["wm.Button", {"border":"1","caption":"Signature Invalid","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"120px"}, {"onclick":"btnInvalidSigcardClick"}],
btnCloseSigcard: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseSigcardClick"}]
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
label1: ["wm.Label", {"caption":"On Us Check Deposit","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
}],
fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"135px","displayValue":"","height":"25px","readonly":true,"width":"320px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
panel3: ["wm.Panel", {"height":"314px","horizontalAlign":"left","margin":"5,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {"onfocus":"onFocusField"}],
btnSearch: ["wm.Button", {"border":"1","caption":"Search","height":"100%","width":"80px"}, {"onclick":"btnSearchClick"}],
lblResult: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
}],
fAcctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {"onfocus":"onFocusField"}],
fAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Amount:","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"required":true,"styles":{},"width":"320px"}, {"onfocus":"onFocusField"}],
fCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"id","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"210px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}]
}]
}],
label2: ["wm.Label", {"caption":"Check Details","padding":"4","styles":{"color":"#0b0a0a","fontWeight":"bolder"}}, {}],
fChkAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fChkAcctNo: ["wm.Text", {"border":"0","caption":"Check Account No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {}],
btnChkSearch: ["wm.Button", {"border":"1","caption":"Search","height":"100%","width":"80px"}, {"onclick":"btnChkSearchClick"}],
lblChkResult: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
}],
fChkAcctName: ["wm.Text", {"border":"0","caption":"Check Account Name:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {}],
fChkNo: ["wm.Text", {"border":"0","caption":"Check No:","captionSize":"135px","dataValue":"","displayValue":"","emptyValue":"emptyString","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {}],
fChkTxdt: ["wm.Date", {"border":"0","caption":"Check Date:","captionSize":"135px","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"320px"}, {}],
panel4: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svCheckAccount.passbookind}==true","targetProperty":"showing"}, {}]
}],
fwPass: ["wm.RadioButton", {"border":"0","caption":"with Passbook","displayValue":"","groupValue":"WAR","height":"25px","width":"180px"}, {}],
fwoPass: ["wm.RadioButton", {"border":"0","caption":"w/o Passbook","displayValue":"","groupValue":"WAR","height":"25px","width":"180px"}, {}],
fwPassbook: ["wm.RadioSet", {"border":"0","caption":"with Passbook","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwPassbookChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel5: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
fwCheck: ["wm.RadioButton", {"border":"0","caption":"with Checkbook","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwoCheck: ["wm.RadioButton", {"border":"0","caption":"w/o Checkbook","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwCheckbook: ["wm.RadioSet", {"border":"0","caption":"with Checkbook","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","styles":{},"width":"300px"}, {"onchange":"fwCheckbookChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel10: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
fwSoa: ["wm.RadioButton", {"border":"0","caption":"with SOA","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwoSoa: ["wm.RadioButton", {"border":"0","caption":"w/o SOA","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwStatementOfAcct: ["wm.RadioSet", {"border":"0","caption":"with SOA","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","styles":{},"width":"300px"}, {"onchange":"fwStatementOfAcctChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel11: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
fwCTD: ["wm.RadioButton", {"border":"0","caption":"with CTD","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwoCTD: ["wm.RadioButton", {"border":"0","caption":"w/o CTD","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwCertTimeDep: ["wm.RadioSet", {"border":"0","caption":"with CTD","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","styles":{},"width":"300px"}, {"onchange":"fwCertTimeDepChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
}]
}]
}],
spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
fLedgerline: ["wm.Text", {"border":"0","caption":"Ledger Line No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","width":"210px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fwoPass.checked","targetProperty":"disabled"}, {}],
wire1: ["wm.Wire", {"expression":"${svCheckAccount.passbookind}==true","targetProperty":"showing"}, {}]
}]
}],
fChkCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":"PHP","displayField":"id","displayValue":"","height":"25px","showing":false,"width":"210px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}]
}]
}]
}],
btnSubmitPanel: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"500px"}, {}, {
btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"25px","disabled":true,"height":"25px","width":"80px"}, {"onclick":"btnSubmitClick"}],
btnSigcard: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"View Sigcard","desktopHeight":"25px","height":"25px","width":"100px"}, {"onclick":"btnSigcardClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svCheckAccount.isEmpty} || ${svCheckChkAccount.isEmpty} || ${fAmt.dataValue} <=0\n|| ${fChkNo.dataValue} == \"\" || ${fChkTxdt.dataValue} == null","targetProperty":"disabled"}, {}]
}]
}],
btnValidateSlip: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Validate Slip/Doc","desktopHeight":"25px","height":"25px","width":"120px"}, {"onclick":"svPrint"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svCheckDep.result}!=\"1\" && ${svOverride.dataValue}!=\"1\"","targetProperty":"disabled"}, {}]
}]
}],
btnClear: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Clear","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"btnClearClick"}]
}]
}]
}]
};

TLR_FX_ONUSCHKDEP.prototype._cssText = '';
TLR_FX_ONUSCHKDEP.prototype._htmlText = '';