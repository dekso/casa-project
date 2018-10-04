dojo.declare("TLR_FX_CASHWDRW", wm.Page, {
start: function() {
this.svTransInfo.update();
this.svCurrency.update();
this.fwoPass.setDataValue(true);
this.codeProd.update();
},
"preferredDevice": "desktop",
svCashWithdrawResult: function(inSender, inDeprecated) {
this.svUnitBalance.update();
console.log("Withdraw "+inSender.getData());
if(inSender.getData().result=="0"){
app.alert("Account No. doesn't exist!");
}else if(inSender.getData().result=="1"){
this.svAcctInq.update();
//            this.fAcctNo.clear();
//            this.fAmt.clear();
//			this.fCurr.clear();
//			this.fAcctName.clear();
//			this.lblResult.setCaption("");
app.alert("Transaction Successful!");
this.btnSubmit.setDisabled(true);
this.btnSigcard.setDisabled(true);
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
}else if(inSender.getData().result=="999"){
app.alert("Transaction Failed : Error in Routine!");
}
},
svUnitBalanceResult: function(inSender, inDeprecated) {
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
this.lblResult.setCaption("<b><font color='red'>Account No. doesn't exist!");
this.fCurr.setDataValue("");
this.fAcctName.setDataValue("");
}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
this.svFreezeInfo.update();
//            if(inSender.getData().passbookind==true){
//                this.panel4.setShowing(true);
//                this.fwPassbook.setDataValue(true);
//                }else{
//                this.panel4.setShowing(false);
//                }
//            if(inSender.getData().checkbookind==true){
//                this.panel10.setShowing(true);
//                this.fwCheckbook.setDataValue(true);
//                }
//            if(inSender.getData().soaind==true){
//                this.panel11.setShowing(true);
//                this.fwStatementOfAcct.setDataValue(true);
//                }
//            if(inSender.getData().certtimedepind==true){
//                this.panel12.setShowing(true);
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
this.svViewSigcard.input.setValue("acctno", this.fAcctNo.getDataValue());
//        this.svViewSigcard.update();
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
if(this.svCheckAccount.getData().availbal < this.fAmt.getDataValue()){
app.alert("Insufficient Balance");
}else{
this.svViewSigcard.update();
}
},
svViewSigcardResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="0"){
app.alert("Sigcard not found!");
}else{
this.sigImg.setSource(inSender.getData().dataValue);
this.dlgSigcard.show();
}
},
clearF: function(){
this.fAcctNo.clear();
this.fAmt.clear();
this.fCurr.clear();
this.fAcctName.clear();
this.lblResult.setCaption("");
//        this.panel4.setShowing(false);
//        this.panel10.setShowing(false);
//        this.panel11.setShowing(false);
//        this.panel12.setShowing(false);
this.fSubProdType.clear();
this.slcProdtype.clear();
},
btnValidateDocSlipClick: function(inSender) {
this.svPrint.update();
},
btnOverrideClick: function(inSender) {
this.svValidateUser.update();
},
btnSubmitClick: function(inSender) {
console.log(app.varUnit.getData().dataValue);
console.log(this.svCheckAccount.getData().unit);
console.log(this.svTransInfo.getData());
if(this.svCheckAccount.getData().unit==app.varUnit.getData().dataValue){
this.svCashWithdraw.update();
}else{
if(this.svTransInfo.getData().servicecharge > 0){
this.dlgCharge.show();
}else{
this.svCashDep.update();
}
}
},
btnProceedWaiveClick: function(inSender) {
console.log(this.app.varUserId.getData().dataValue);
console.log(this.svTransInfo.getData().servicecharge);
this.svCashWithdraw.input.setValue("chargeoverrideby", this.app.varUserId.getData().dataValue);
this.svCashWithdraw.input.setValue("chargeamount", this.svTransInfo.getData().servicecharge);
//this.dlgCharge.hide();
app.confirm("Are you sure you want to waive charges?", false,
dojo.hitch(this, function() {
this.dlgCharge.hide();
console.log(this.svCashWithdraw.input.getData().chargeoverrideby);
this.svCashWithdraw.update();
}),
dojo.hitch(this, function() {
//                     this.dlgCharge.hide();
}));
},
btnProceedCollectClick: function(inSender) {
//		this.app.
},
btnVerifiedSigcardClick: function(inSender) {
this.dlgSigcard.hide();
this.btnSubmit.setDisabled(false);
},
btnInvalidSigcardClick: function(inSender) {
this.btnClear.click();
this.dlgSigcard.hide();
this.btnSubmit.setDisabled(true);
},
btnClearClick: function(inSender) {
this.fAcctNo.clear();
this.fAmt.clear();
this.fCurr.clear();
this.fAcctName.clear();
this.lblResult.setCaption("");
//            this.panel4.setShowing(false);
//            this.panel10.setShowing(false);
//            this.panel11.setShowing(false);
//            this.panel12.setShowing(false);
this.btnValidateDocSlip.setDisabled(true);
this.btnSubmit.setDisabled(true);
this.fSubProdType.clear();
this.slcProdtype.clear();
this.svViewSigcard.input.setValue("acctno", this.fAcctNo.getDataValue());
},
svAcctInqResult: function(inSender, inDeprecated) {
console.log(inSender.getData());
var d= 0.00;
d = (inSender.getData().inquiry.accountbal-(inSender.getData().inquiry.holdamount+inSender.getData().inquiry.floatamount+inSender.getData().inquiry.earmarkbal+inSender.getData().inquiry.garnishedbal));
//
if(d < inSender.getData().inquiry.maintainingBalance ){
app.toastWarning("Account falls below the required maintaining balance.", 4000);
}
},
fwPassbookChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
console.log(inSender);
},
fwCheckbookChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.fwPassbookChange(inSender, inDisplayValue, inDataValue, inSetByCode);
},
fwStateOfAcctChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.fwCheckbookChange(inSender, inDisplayValue, inDataValue, inSetByCode);
},
fwStatementOfAcctChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.fwCheckbookChange(inSender, inDisplayValue, inDataValue, inSetByCode);
},
fwCertTimeDepChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.fwCheckbookChange(inSender, inDisplayValue, inDataValue, inSetByCode);
},
svFreezeInfoResult: function(inSender, inDeprecated) {
this.fAcctName.setDataValue(this.svCheckAccount.getData().name);
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

TLR_FX_CASHWDRW.widgets = {
svCashWithdraw: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cashDepWithDrCrMemo","service":"FinTxFacade"}, {"onResult":"svCashWithdrawResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"cashDepWithDrCrMemoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fAcctledger.dataValue","targetProperty":"jrnl.ledgerlineno"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fAmt.dataValue","targetProperty":"jrnl.txamount"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"jrnl.accountno"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"fTxdt.dataValue","targetProperty":"jrnl.txdate"}, {}],
wire3: ["wm.Wire", {"expression":"120121","targetProperty":"jrnl.txcode"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"jrnl.txby"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"jrnl.unit"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"jrnl.instcode"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"fAcctName.dataValue","targetProperty":"jrnl.acctname"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"fCurr.dataValue","targetProperty":"jrnl.currency"}, {}]
}]
}]
}],
svUnitBalance: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUnitBalance","service":"UserInfoFacade"}, {"onResult":"svUnitBalanceResult"}, {
input: ["wm.ServiceInput", {"type":"getUnitBalanceInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"userid"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fCurr.dataValue","targetProperty":"currency"}, {}]
}]
}]
}],
varLocalNet: ["wm.Variable", {"type":"NumberData"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varNetCash.dataValue","targetProperty":"dataSet.dataValue"}, {}]
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
svOverride: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"overrideTransaction","service":"FinTxFacade"}, {"onResult":"svOverrideResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"overrideTransactionInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCashWithdraw.txrefno","targetProperty":"txrefno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"overrideUsername.dataValue","targetProperty":"username"}, {}]
}]
}]
}],
svCancelReject: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cancelOverrideTX","service":"FinTxFacade"}, {"onResult":"svCancelRejectResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"cancelOverrideTXInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCashWithdraw.txrefno","targetProperty":"txrefno"}, {}]
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
svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CURR\"","targetProperty":"codename"}, {}]
}]
}]
}],
svRequestOverride: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestRemoteOverride","service":"FinTxFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"requestRemoteOverrideInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCashWithdraw.txrefno","targetProperty":"txrefno"}, {}]
}]
}]
}],
waitTimer: ["wm.Timer", {"delay":5000}, {"onTimerFire":"waitTimerTimerFire"}],
svRequestOverrideWait: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","loadingDialog":"","operation":"requestRemoteOverrideWait","service":"FinTxFacade"}, {"onResult":"svRequestOverrideWaitResult"}, {
input: ["wm.ServiceInput", {"type":"requestRemoteOverrideWaitInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCashWithdraw.txrefno","targetProperty":"txrefno"}, {}]
}]
}]
}],
svRequestOverrideResult: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestRemoteOverrideResult","service":"FinTxFacade"}, {"onResult":"svRequestOverrideResultResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"requestRemoteOverrideResultInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCashWithdraw.txrefno","targetProperty":"txrefno"}, {}]
}]
}]
}],
svViewSigcard: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"viewSigcard","service":"SigcardFacade"}, {"onResult":"svViewSigcardResult"}, {
input: ["wm.ServiceInput", {"type":"viewSigcardInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"cifno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.accountno","targetProperty":"acctno"}, {}]
}]
}]
}],
svPrint: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"printDocSlip","service":"FinTxFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"printDocSlipInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCashWithdraw.txrefbr","targetProperty":"txrefno"}, {}]
}]
}]
}],
svTransInfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getTxinfo","service":"FinTxFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getTxinfoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Cash Withdrawal\"","targetProperty":"txname"}, {}]
}]
}]
}],
svAcctInq: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"accountInquiry","service":"FinTxFacade"}, {"onResult":"svAcctInqResult"}, {
input: ["wm.ServiceInput", {"type":"accountInquiryInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"acctno"}, {}]
}]
}]
}],
varCheck: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"\",\"dataValue\":\"1\"}]","type":"EntryData"}, {}],
codeProd: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PRODUCTGROUP\"","targetProperty":"codename"}, {}]
}]
}]
}],
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
dlgOverride: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"135px","height":"135px","noEscape":true,"title":"Override Transaction","width":"440px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
pnlOverride: ["wm.Panel", {"height":"61px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
overrideUsername: ["wm.Text", {"border":"0","caption":"Username:","dataValue":undefined,"displayValue":"","height":"25px","required":true}, {}],
overridePassword: ["wm.Text", {"border":"0","caption":"Password:","dataValue":undefined,"displayValue":"","height":"25px","password":true,"required":true}, {}]
}],
panel6: ["wm.Panel", {"height":"28px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"0,0,0,0","padding":"0,0,0,0","styles":{},"verticalAlign":"top","width":"414px"}, {}, {
btnViewSig: ["wm.Button", {"border":"1","caption":"View Sigcard","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnViewSigClick"}],
btnReqOR: ["wm.Button", {"border":"1","caption":"Remote Override","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"120px"}, {"onclick":"btnReqORClick"}],
btnOverride: ["wm.Button", {"border":"1","caption":"Override","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnOverrideClick"}],
btnCancel: ["wm.Button", {"border":"1","caption":"Reject","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"svCancelReject"}]
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
label1: ["wm.Label", {"caption":"Cash Withdraw","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
}],
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"135px","displayValue":"","height":"25px","readonly":true,"styles":{},"width":"320px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
fAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {"onchange":"fAcctNoChange","onfocus":"clearF"}],
btnSearch: ["wm.Button", {"border":"1","caption":"Search","height":"100%","width":"80px"}, {"onclick":"btnSearchClick"}],
lblResult: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
}],
fAcctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {"onfocus":"onFocusField"}],
slcProdtype: ["wm.SelectMenu", {"border":"0","caption":"Product Type:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","height":"25px","readonly":true,"width":"320px"}, {"onchange":"svProductListFull"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"codeProd","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.prodtype","targetProperty":"dataValue"}, {}]
}]
}],
fSubProdType: ["wm.Text", {"border":"0","caption":"Sub-product Type:","captionSize":"135px","displayValue":"","height":"25px","readonly":true,"width":"600px"}, {"onfocus":"onFocusField"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.subprod","targetProperty":"dataValue"}, {}]
}]
}],
fAmt: ["wm.Number", {"border":"0","caption":"Amount:","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"required":true,"width":"320px"}, {"onfocus":"onFocusField"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varNetCash.dataValue","targetProperty":"maximum"}, {}],
wire1: ["wm.Wire", {"expression":"${app.varNetCash.dataValue}-${app.varNetCash.dataValue}","targetProperty":"minimum"}, {}]
}]
}],
fCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"id","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"210px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}]
}]
}],
panel4: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svCheckAccount.prodtype}==\"20\" || ${svCheckAccount.prodtype}==\"50\" ","targetProperty":"showing"}, {}]
}],
fwPassbook: ["wm.RadioSet", {"border":"0","caption":"with Passbook","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwPassbookChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
}]
}],
fwPass: ["wm.RadioButton", {"border":"0","caption":"with Passbook","checkedValue":"1","displayValue":"","groupValue":"WAR","height":"25px","width":"180px"}, {}],
fwoPass: ["wm.RadioButton", {"border":"0","caption":"w/o Passbook","checkedValue":"1","displayValue":"","groupValue":"WAR","height":"25px","styles":{},"width":"180px"}, {}]
}],
panel10: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
fwCheck: ["wm.RadioButton", {"border":"0","caption":"with Checkbook","checkedValue":"1","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"startChecked":true,"width":"180px"}, {}],
fwoCheck: ["wm.RadioButton", {"border":"0","caption":"w/o Checkbook","checkedValue":"1","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"styles":{},"width":"180px"}, {}],
fwCheckbook: ["wm.RadioSet", {"border":"0","caption":"with Checkbook","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"160px"}, {"onchange":"fwCheckbookChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel11: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
fwSoa: ["wm.RadioButton", {"border":"0","caption":"with SOA","checkedValue":"1","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwoSoa: ["wm.RadioButton", {"border":"0","caption":"w/o SOA","checkedValue":"1","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"styles":{},"width":"180px"}, {}],
fwStatementOfAcct: ["wm.RadioSet", {"border":"0","caption":"with SOA","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","styles":{},"width":"160px"}, {"onchange":"fwStatementOfAcctChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel12: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
fwCTD: ["wm.RadioButton", {"border":"0","caption":"with CTD","checkedValue":"1","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
fwoCTD: ["wm.RadioButton", {"border":"0","caption":"w/o CTD","checkedValue":"1","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"styles":{},"width":"180px"}, {}],
fwCertTimeDep: ["wm.RadioSet", {"border":"0","caption":"with CTD","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","styles":{},"width":"160px"}, {"onchange":"fwCertTimeDepChange"}, {
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
button1Panel: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"651px"}, {}, {
btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"25px","disabled":true,"height":"25px","width":"80px"}, {"onclick":"btnSubmitClick"}],
btnSigcard: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"View Sigcard","desktopHeight":"25px","height":"25px","width":"100px"}, {"onclick":"btnSigcardClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${fAcctNo.invalid} || ${fAmt.invalid} || ${fAmt.dataValue}<= 0 || ${fAmt.dataValue}<= 0.00","targetProperty":"disabled"}, {}]
}]
}],
button1: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"275px"}, {}, {
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"275px"}, {}, {
btnValidateDocSlip: ["wm.Button", {"border":"1","caption":"Validate Slip/Doc","desktopHeight":"25px","height":"25px","width":"138px"}, {"onclick":"btnValidateDocSlipClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svCashWithdraw.result}!=\"1\" && ${svOverride.dataValue}!=\"1\"","targetProperty":"disabled"}, {}]
}]
}],
button4: ["wm.Button", {"border":"1","caption":"Post to Passbook","desktopHeight":"25px","disabled":true,"height":"25px","width":"138px"}, {}]
}]
}],
btnClear: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Clear","desktopHeight":"25px","height":"25px","width":"80px"}, {"onclick":"btnClearClick"}]
}]
}]
}]
}]
};

TLR_FX_CASHWDRW.prototype._cssText = '';
TLR_FX_CASHWDRW.prototype._htmlText = '';