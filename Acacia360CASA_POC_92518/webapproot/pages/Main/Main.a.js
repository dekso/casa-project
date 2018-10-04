var logoutNow = function() {
window.onbeforeunload = null;
this.svRemoveToken.update();
wm.logout();
};
var id;
var logoutTimeout;
var monitor = new Monitor(360000,[]); //180 000 =3 minutes.
var homeload = 0;
var orc1 = 0;
var orc2 = 0;
dojo.declare("Main", wm.Page, {
start: function() {
this.svUserInfo.update();
this.svMen2.update();
this.svMen.update();
this.app.svBusinessDt.update();
this.svUserSessionCheck.update();
this.svCurrency.update();
this.dojoMenuTLR.setItemShowing("Teller's Total", false);
//idle function
dojo.ready(function() {
function onActive(args) {
monitor.clearTimers();
}
function onIdle() {
// console.debug("idle...logging out");
logoutTimeout = setTimeout(logoutNow, 60000);
main.idleDialog.show();
}
dojo.subscribe("state:active", null, onActive);
dojo.subscribe("state:idle", null, onIdle);
});
},
"preferredDevice": "desktop",
svUserInfoResult: function(inSender, inDeprecated) {
//        this.svUnitinfo.update();
//        console.log(inSender);
this.app.username.setValue("dataValue",inSender.getData().userid);
this.app.varNetCash.setValue("dataValue",inSender.getData().unitbalance);
this.app.varRole.setValue("dataValue", inSender.getData().role);
this.app.varUnit.setValue("dataValue", inSender.getData().brid);
this.app.varInstcode.setValue("dataValue", inSender.getData().instcode);
if(inSender.getData().role=="boo"){
this.overrideTimer.startTimer();
}else{
this.overrideTimer.stopTimer();
}
//        app.alert(inSender.getData().instcode);
//        if(inSender.getData().role=="boo"){
//            wm.Page.getPage("BOO_HOME").svGetUnitInfo.update();
//        }
},
//idle dialog
YesIdleBtnClick: function(inSender) {
clearTimeout(logoutTimeout);
monitor.clearTimers();
this.idleDialog.hide();
////execute here some query for refresh server for not go to session expiration
},
NoIdleDialogClick: function(inSender) {
window.onbeforeunload = null;
this.svRemoveToken.update();
wm.logout();
},
idleDialogShow: function(inSender) {
try {
var counter = 60;
id = setInterval(function() {
counter--;
if (counter < 0) {
clearInterval(id);
} else {
//                    this.countdownlabel.setCaption("Your session will close in " + counter + " seconds");
}
}, 1000);
} catch (e) {
console.log(e.name, e.message);
}
},
idleDialogClose: function(inSender, inWhy) {
clearInterval(id);
this.countdownlabel.setCaption("Your session will close in 60 seconds");
},
logoutbuttonClick: function(inSender) {
window.onbeforeunload = null;
wm.logout();
this.svRemoveToken.update();
},
svUserSessionCheckResult: function(inSender, inDeprecated) {
var flag = inSender.getData().dataValue;
if(flag == false|| flag == undefined || flag == null){
window.onbeforeunload = null;
wm.logout();
}
},
svUnitinfoResult: function(inSender, inDeprecated) {
this.app.varInstcode.setValue("dataValue", inSender.getData().instcode);
},
svMenResult: function(inSender, inDeprecated) {
//        console.log(inSender.getData());
var pMenuBar = new dijit.MenuBar({});
var page = [];
var counter = 1;
for(var i = 0; i < this.svMen.getData().length; i++ ){
if(this.svMen.getItem(i).getData().module=="0"){
this.pageContainer1.setPageName(this.svMen.getItem(i).getData().page);
}
page.push(this.svMen.getItem(i).getData().page);
var pSubMenu = new dijit.Menu({});
var name = this.svMen.getItem(i).getData().modulename;
var mod = this.svMen.getItem(i).getData().module;
var count = this.svMen.getItem(i).getData().subcount;
if(count==1){
pMenuBar.addChild(new dijit.MenuBarItem({
label: name,
id : counter,
onClick: function() {
var dnid = this.domNode.id;
wm.Page.getPage("Main").pageContainer1.setPageName(page[dnid-1]);
}
}));
} else {
pMenuBar.addChild(new dijit.MenuBarItem({
label: name,
id : counter,
popup:pSubMenu
}));
var subpage = [];
var subcounter = 50;
for(var ii = 0; ii < this.svMen2.getData().length; ii++){
subpage.push(this.svMen2.getItem(ii).getData().page);
if(this.svMen2.getItem(ii).getData().module==mod){
pSubMenu.addChild(new dijit.MenuItem({
label: this.svMen2.getItem(ii).getData().modulename,
id : subcounter,
onClick: function() {
var subdnid = this.domNode.id;
wm.Page.getPage("Main").pageContainer1.setPageName(subpage[subdnid-50]);
}
}));
}
subcounter++;
}
}
counter++;
}
pMenuBar.placeAt(this.dj.domNode.id);
pMenuBar.startup();
},
selCurrencyChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.svUnitBalance.update();
if(homeload=="0"){
homeload = "1"
}else{
if(this.pageContainer1.pageName=="Home" && homeload=="1"){
wm.Page.getPage("Home").svCashInCashOut.update();
}
}
},
svUnitBalanceResult: function(inSender, inDeprecated) {
//app.varNetCash.setValue("dataValue",inSender.getData().dataValue);
},
svCurrencyResult: function(inSender, inDeprecated) {
//this.svUnitBalance.update();
},
selCurrency1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.selCurrencyChange(inSender, inDisplayValue, inDataValue, inSetByCode);
},
overrideTimerTimerFire: function(inSender) {
this.svOverrideCount.update();
},
lblOverrideClick: function(inSender, inEvent) {
this.dlgOverride.show();
this.svRequestOverrideList.update();
},
svOverrideCountResult: function(inSender, inDeprecated) {
orc1 = inSender.getData().dataValue;
orc2 = orc2+1;
if(orc2 == 1 ){
this.varORC.setValue("dataValue", inSender.getData().dataValue);
if(orc1 > 0){
app.alert("Override Request Received!");
}
}else if(orc2 > 1){
if(this.varORC.getData().dataValue!=orc1){
//app.toastInfo("Ovverride Request Received", 5000);
if( orc1 >  this.varORC.getData().dataValue ){
app.confirm("Override Request Received! ", false,
dojo.hitch(this, function() {
this.varORC.setValue("dataValue",orc1);
}),
dojo.hitch(this, function() {
this.varORC.setValue("dataValue",orc1);
}));
}
}
}
},
gridOverrideListGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
console.log(rowData.txrefno);
if(fieldName=="accept"){
this.svRequestOverrideAction.input.setValue("val", 4);
}else if(fieldName=="reject"){
this.svRequestOverrideAction.input.setValue("val", 5);
}
this.svRequestOverrideAction.input.setValue("txrefno", rowData.txrefno);
this.svRequestOverrideAction.update();
},
svRequestOverrideActionResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="0"){
app.alert("Error in Routine");
}else if(inSender.getData().dataValue=="1"){
app.alert("Override result has been sent to teller!");
this.dlgOverride.hide();
}
this.svRequestOverrideList.update();
},
btnCloseClick: function(inSender) {
this.dlgOverride.hide();
},
svMen2Result: function(inSender, inDeprecated) {
//		console.log(inSender.getData());
},
_end: 0
});

Main.widgets = {
logoutVariable: ["wm.LogoutVariable", {"inFlightBehavior":"executeLast"}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
svUserInfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUserinfo","service":"UserInfoFacade"}, {"onResult":"svUserInfoResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getUserinfoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSecurityUser.dataValue","targetProperty":"userid"}, {}]
}]
}]
}],
svSecurityUser: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getUserId","service":"securityService","startUpdate":true}, {"onResult":"svUserInfo","onResult1":"svUnitBalance"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getUserIdInputs"}, {}]
}],
svUnitinfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUnitinfo","service":"UserInfoFacade"}, {"onResult":"svUnitinfoResult"}, {
input: ["wm.ServiceInput", {"type":"getUnitinfoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svUserInfo.brid","targetProperty":"brid"}, {}]
}]
}]
}],
svRemoveToken: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"removeADLoginToken","service":"AuthenticationFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"removeADLoginTokenInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"\"loggedin\"","targetProperty":"tag"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"svUserInfo.username","targetProperty":"username"}, {}]
}]
}]
}],
svUserSessionCheck: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"userSessionCheck","service":"SecurityFacade"}, {"onResult":"svUserSessionCheckResult"}, {
input: ["wm.ServiceInput", {"type":"userSessionCheckInputs"}, {}]
}],
svMen: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"accessRightsMain","service":"UserAccountFacade"}, {"onResult":"svMenResult"}, {
input: ["wm.ServiceInput", {"type":"accessRightsMainInputs"}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}]
}],
svMen2: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"accessRightsSub","service":"UserAccountFacade"}, {"onResult":"svMen2Result"}, {
input: ["wm.ServiceInput", {"type":"accessRightsSubInputs"}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}]
}],
svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {"onResult":"svCurrencyResult"}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CURR\"","targetProperty":"codename"}, {}]
}]
}]
}],
svUnitBalance: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUnitBalance","service":"UserInfoFacade"}, {"onResult":"svUnitBalanceResult"}, {
input: ["wm.ServiceInput", {"type":"getUnitBalanceInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSecurityUser.dataValue","targetProperty":"userid"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selCurrency.selectedItem.id","targetProperty":"currency"}, {}]
}]
}]
}],
svOverrideCount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestRemoteOverrideCount","service":"FinTxFacade"}, {"onResult":"svOverrideCountResult"}, {
input: ["wm.ServiceInput", {"type":"requestRemoteOverrideCountInputs"}, {}]
}],
overrideTimer: ["wm.Timer", {"delay":3000}, {"onTimerFire":"overrideTimerTimerFire"}],
varORC: ["wm.Variable", {"type":"AnyData"}, {}],
svRequestOverrideList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestRemoteOverrideList","service":"FinTxFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"requestRemoteOverrideListInputs"}, {}]
}],
svRequestOverrideAction: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestRemoteOverrideAction","service":"FinTxFacade"}, {"onResult":"svRequestOverrideActionResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"requestRemoteOverrideActionInputs"}, {}]
}],
svPrintTest: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"printCTD","service":"UtilFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"printCTDInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"001010000055\"","targetProperty":"accountno"}, {}]
}]
}]
}],
idleDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"","desktopHeight":"120px","height":"120px","styles":{"borderRadius":"0px"},"title":undefined,"width":"300px"}, {"onClose":"idleDialogClose","onShow":"idleDialogShow"}, {
containerWidget16: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
countdownlabel: ["wm.Label", {"_classes":{"domNode":["dialogfooter"]},"padding":"4","styles":{},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Your session will close in 60 seconds\"","targetProperty":"caption"}, {}]
}]
}],
label4: ["wm.Label", {"caption":"Do you want to keep working?","height":"100%","padding":"4","styles":{"fontSize":"15px","fontWeight":"bold"},"width":"100%"}, {}],
YesIdleBtnPanel: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
YesIdleBtn: ["wm.Button", {"border":"1","caption":"Yes","desktopHeight":"30px","height":"30px","margin":"4","styles":{"borderRadius":"0px"}}, {"onclick":"YesIdleBtnClick"}],
NoIdleDialog: ["wm.Button", {"border":"1","caption":"No","desktopHeight":"30px","height":"30px","margin":"4","styles":{"borderRadius":"0px"}}, {"onclick":"NoIdleDialogClick"}]
}]
}]
}],
dlgOverride: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","title":"Override Requests","width":"660px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
gridOverrideList: ["wm.DojoGrid", {"_classes":{"domNode":["cDojoGrid"]},"border":"0","columns":[
{"show":true,"field":"acctno","title":"Acctno","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"txcode","title":"Txcode","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"amount","title":"Amount","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"editorProps":null,"mobileColumn":false},
{"show":true,"field":"txby","title":"Txby","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"txrefno","title":"Txrefno","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Acctno: \" + ${acctno} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txcode: \" + ${txcode}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Amount: \" + ${wm.runtimeId}.formatCell(\"amount\", ${amount}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txby: \" + ${txby}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txrefno: \" + ${txrefno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"<center>Reason: \" + ${wm.runtimeId}.formatCell(\"Reason\", ${Reason}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Accept: \" + ${wm.runtimeId}.formatCell(\"accept\", ${accept}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Reject: \" + ${wm.runtimeId}.formatCell(\"reject\", ${reject}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"Reason","title":"<center>Reason","width":"100%","align":"left","formatProps":null,"editorProps":null,"expression":"\"Exceeded Teller's Limit\"","isCustomField":true},
{"show":true,"field":"accept","title":"Accept","width":"100%","align":"center","formatFunc":"wm_button_formatter","editorProps":null,"expression":"\"Accept\"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"reject","title":"Reject","width":"100%","align":"center","formatFunc":"wm_button_formatter","expression":"\"Reject\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"source","title":"Source","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","localizationStructure":{},"margin":"0,0,5,0","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {"onGridButtonClick":"gridOverrideListGridButtonClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svRequestOverrideList","targetProperty":"dataSet"}, {}]
}]
}],
panel14: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label5: ["wm.Label", {"padding":"4","styles":{"color":"#030303"},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"No of Request : \"+${svRequestOverrideList.count}","targetProperty":"caption"}, {}]
}]
}],
btnClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"30px","height":"30px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseClick"}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"958px"}, {}, {
panelHeader: ["wm.HeaderContentPanel", {"height":"58px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,5","styles":{"backgroundColor":"#535c69"},"verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"aspect":"h","height":"50%","source":"resources/images/AcaciaBanc.png","styles":{},"width":"140px"}, {}],
label2: ["wm.Label", {"caption":"CASA <font size=\"1\" color = \"#b1b1b1\">Version 3.1.9</font>","height":"45px","padding":"4","styles":{"fontSize":"15px","fontWeight":"bold","color":"#ffffff"},"width":"100%"}, {}],
pnlOverride: ["wm.Panel", {"height":"102px","horizontalAlign":"right","styles":{},"verticalAlign":"top","width":"170px"}, {}, {
panel12: ["wm.Panel", {"height":"100px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"3,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
button2: ["wm.Button", {"border":"1","height":"20px","showing":false}, {"onclick":"svPrintTest"}],
lblOverride: ["wm.Label", {"align":"right","height":"23px","margin":"0,20,0,0","padding":"4","styles":{"fontWeight":"bold","color":"#ffffff"},"width":"100%"}, {"onclick":"lblOverrideClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svUserInfo.role}==\"boo\"","targetProperty":"showing"}, {}],
wire1: ["wm.Wire", {"expression":"\"Override Count (\"+${svOverrideCount.dataValue}+\")\" ","targetProperty":"caption"}, {}]
}]
}]
}]
}],
panel7: ["wm.Panel", {"height":"52px","horizontalAlign":"right","styles":{},"verticalAlign":"top","width":"170px"}, {}, {
panel8: ["wm.Panel", {"height":"25px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label6: ["wm.Label", {"caption":"Currency : ","padding":"4","styles":{"color":"#ffffff","fontWeight":"bolder"},"width":"60%"}, {}],
selCurrency: ["wm.SelectMenu", {"_classes":{"domNode":["selMenuWhite"]},"border":"0","caption":undefined,"captionSize":"80px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"id","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","styles":{"fontWeight":"bolder","color":"#ffffff"},"width":"70px"}, {"onchange":"selCurrencyChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":"\"PHP\"","targetProperty":"dataValue"}, {}]
}]
}]
}],
mainNetCashPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
headerNetCash: ["wm.Number", {"_classes":{"domNode":["NumberN"]},"applyPlacesWhileTyping":true,"border":"0","caption":"Net Cash : ","captionSize":"65px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varNetCash.dataValue","targetProperty":"dataValue"}, {}]
}]
}]
}]
}],
panel3: ["wm.Panel", {"height":"52px","horizontalAlign":"right","verticalAlign":"top","width":"200px"}, {}, {
panel4: ["wm.Panel", {"height":"25px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
lblWelcom: ["wm.Label", {"align":"left","padding":"0","styles":{"fontWeight":"bold","fontSize":"11.5px","color":"#ffffff"},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Branch: \"+${svUserInfo.brid}.toUpperCase()+\" - \"+${svUserInfo.brname}","targetProperty":"caption"}, {}]
}]
}]
}],
mainDatePanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
lblSysDate: ["wm.Label", {"align":"left","padding":"0","showing":false,"styles":{"fontWeight":"bold","fontSize":"11.5px","color":"#e1e1e1"},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Business Date : \"+${app.svBusinessDt.dataValue}","targetProperty":"caption"}, {}]
}]
}],
mainDate: ["wm.DateTime", {"border":"0","caption":"Business Date : ","captionSize":"60px","dateMode":"Date","displayValue":"10/4/2018","height":"25px","readonly":true,"showing":false,"styles":{},"width":"201px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
}]
}],
BusinessDt: ["wm.Date", {"_classes":{"domNode":["DtCommon"]},"border":"0","caption":"Business Date:","captionSize":"90px","displayValue":"","height":"25px","padding":"0","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}]
}]
}],
panel5: ["wm.Panel", {"height":"75px","horizontalAlign":"right","verticalAlign":"top","width":"290px"}, {}, {
panel6: ["wm.Panel", {"height":"25px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
lblWelcom1: ["wm.Label", {"align":"left","padding":"0","styles":{"fontWeight":"bold","fontSize":"11.5px","color":"#ffffff"},"width":"216px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Welcome: \" +${svUserInfo.firstname} ","targetProperty":"caption"}, {}]
}]
}],
logoutbutton: ["wm.Button", {"_classes":{"domNode":["Warning","logoutbutton"]},"border":"0","borderColor":"#f89406","caption":"<c>Logout","desktopHeight":"25px","height":"25px","imageList":undefined,"margin":"0","styles":{}}, {"onclick":"logoutbuttonClick"}]
}],
mainDatePanel1: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
mainDate1: ["wm.DateTime", {"border":"0","caption":"Today is: ","captionSize":"60px","displayValue":"10/4/2018 02:26 PM","height":"25px","readonly":true,"showing":false,"styles":{},"width":"201px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
}]
}],
TransactionDt: ["wm.Date", {"_classes":{"domNode":["DtCommon"]},"border":"0","caption":"Transaction Date:","captionSize":"100px","displayValue":"10/4/2018","height":"25px","margin":"0,0,0,5","padding":"0","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
}]
}]
}]
}]
}],
pnlMenu2: ["wm.Panel", {"border":"0,0,2,0","borderColor":"#219c35","height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#788a81"},"verticalAlign":"top","width":"100%"}, {}, {
dj: ["wm.DojoMenu", {"border":"0","height":"100%","localizationStructure":{}}, {}]
}],
pnlMenu1: ["wm.Panel", {"border":"0,0,2,0","borderColor":"#219c35","height":"47px","horizontalAlign":"left","showing":false,"styles":{"backgroundColor":"#788a81"},"verticalAlign":"top","width":"100%"}, {}, {
dojoMenuTLR: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Home","separator":undefined,"defaultLabel":"Home","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navHome","children":[]},
{"label":"Transactions","separator":undefined,"defaultLabel":"Transactions","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Account Inquiry","separator":undefined,"defaultLabel":"Account Inquiry","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAccountInq","children":[]},
{"label":"Cash Deposit","separator":undefined,"defaultLabel":"Cash Deposit","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navCashDep","children":[]},
{"label":"Cash Withdrawal","separator":undefined,"defaultLabel":"Cash Withdrawal","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navCashWith","children":[]},
{"label":"On Us Check Deposit","separator":undefined,"defaultLabel":"On Us Check Deposit","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navOnUsChkDep","children":[]},
{"label":"Other Bank's Check Deposit","separator":undefined,"defaultLabel":"Other Bank's Check Deposit","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navOtherBankChkDep","children":[]},
{"label":"Credit Memo","separator":undefined,"defaultLabel":"Credit Memo","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navCreditMemo","children":[]},
{"label":"Check Encashment","separator":undefined,"defaultLabel":"Check Encashment","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navChkEncashment","children":[]},
{"label":"Debit Memo","separator":undefined,"defaultLabel":"Debit Memo","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navDebitMemo","children":[]},
{"label":"Fund Transfer","separator":undefined,"defaultLabel":"Fund Transfer","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navFundTrnsfr","children":[]},
{"label":"Other Bank's Return Check","separator":undefined,"defaultLabel":"Other Bank's Return Check","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navOtherBankRetChk","children":[]}
]},
{"label":"Miscellaneous","separator":undefined,"defaultLabel":"Miscellaneous","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Bills / Loan Payment","separator":undefined,"defaultLabel":"Bills / Loan Payment","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navMiscBilPymnt","children":[]},
{"label":"Miscellaneous Receipts","separator":undefined,"defaultLabel":"Miscellaneous Receipts","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navMiscReceipt","children":[]},
{"label":"Miscellaneous Disbursement","separator":undefined,"defaultLabel":"Miscellaneous Disbursement","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navMiscDisbrstmnt","children":[]}
]},
{"label":"Other Transactions","separator":undefined,"defaultLabel":"Other Transactions","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Update Passbook","separator":undefined,"defaultLabel":"Update Passbook","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navUpdtePssbk","children":[]},
{"label":"Teller's Total","separator":undefined,"defaultLabel":"Teller's Total","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navTlrTotal","children":[]},
{"label":"Cash Reconciliation","separator":undefined,"defaultLabel":"Cash Reconciliation","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navCashRecon","children":[]}
]},
{"label":"Reports","separator":undefined,"defaultLabel":"Reports","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"On Demand Reports","separator":undefined,"defaultLabel":"On Demand Reports","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Cash In / Out Reports","separator":undefined,"defaultLabel":"Cash In / Out Reports","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navCashInCashOut","children":[]},
{"label":"Teller's Total Inquiry","separator":undefined,"defaultLabel":"Teller's Total Inquiry","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navTellerTotal","children":[]},
{"label":"Electronic Journal","separator":undefined,"defaultLabel":"Electronic Journal","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navEJournalReport","children":[]},
{"label":"All Accepted Transactions","separator":undefined,"defaultLabel":"All Accepted Transactions","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAllAcceptedTrans","children":[]},
{"label":"All Error Correction Transaction","separator":undefined,"defaultLabel":"All Error Correction Transaction","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navErrorCorrectionTrans","children":[]},
{"label":"All Supervisor Override Transaction","separator":undefined,"defaultLabel":"All Supervisor Override Transaction","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAllSupOverrideTrans","children":[]},
{"label":"All Timeout and Accepted Transaction","separator":undefined,"defaultLabel":"All Timeout and Accepted Transaction","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"All Rejected Transaction","separator":undefined,"defaultLabel":"All Rejected Transaction","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAllRejectedTrans","children":[]}
]}
]}
],"height":"100%","localizationStructure":{},"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svUserInfo.role}==\"teller\"","targetProperty":"showing"}, {}]
}]
}],
dojoMenuCSHR: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Home","separator":undefined,"defaultLabel":"Home","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navHome","children":[]},
{"label":"Miscellaneous","separator":undefined,"defaultLabel":"Miscellaneous","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Bills / Loan Payment","separator":undefined,"defaultLabel":"Bills / Loan Payment","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navMiscBilPymnt","children":[]},
{"label":"Miscellaneous Receipts","separator":undefined,"defaultLabel":"Miscellaneous Receipts","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navMiscReceipt","children":[]},
{"label":"Miscellaneous Disbursement","separator":undefined,"defaultLabel":"Miscellaneous Disbursement","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navMiscDisbrstmnt","children":[]},
{"label":"Manager's Check Issuance","separator":undefined,"defaultLabel":"Manager's Check Issuance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Forex Buy / Sell","separator":undefined,"defaultLabel":"Forex Buy / Sell","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
]},
{"label":"Account Maintenance","separator":undefined,"defaultLabel":"Account Maintenance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Account Profile Maintenance","separator":undefined,"defaultLabel":"Account Profile Maintenance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAcctMtnceAcctProfMntc","children":[]},
{"label":"Close Account","separator":undefined,"defaultLabel":"Close Account","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAcctMtnceCloseAcct","children":[]},
{"label":"Place Hold Amount","separator":undefined,"defaultLabel":"Place Hold Amount","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAcctMtncePlaceHoldAmt","children":[]},
{"label":"Lift Hold Amount","separator":undefined,"defaultLabel":"Lift Hold Amount","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAcctMtnceLiftHoldAmt","children":[]},
{"label":"Place Stop Payment Order","separator":undefined,"defaultLabel":"Place Stop Payment Order","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAcctMtncePlaceStopPaym","children":[]},
{"label":"Lift Stop Payment Order","separator":undefined,"defaultLabel":"Lift Stop Payment Order","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAcctMtnceLiftStopPaym","children":[]}
]},
{"label":"Reports","separator":undefined,"defaultLabel":"Reports","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"On Demand Reports","separator":undefined,"defaultLabel":"On Demand Reports","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Cash In / Out Reports","separator":undefined,"defaultLabel":"Cash In / Out Reports","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navCashInCashOut","children":[]},
{"label":"Teller's Total Inquiry","separator":undefined,"defaultLabel":"Teller's Total Inquiry","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Electronic Journal","separator":undefined,"defaultLabel":"Electronic Journal","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navEJournalReport","children":[]},
{"label":"All Accepted Transactions","separator":undefined,"defaultLabel":"All Accepted Transactions","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAllAcceptedTrans","children":[]},
{"label":"All Error Correction Transaction","separator":undefined,"defaultLabel":"All Error Correction Transaction","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navErrorCorrectionTrans","children":[]},
{"label":"All Supervisor Override Transaction","separator":undefined,"defaultLabel":"All Supervisor Override Transaction","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"All Timeout and Accepted Transaction","separator":undefined,"defaultLabel":"All Timeout and Accepted Transaction","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
]}
]},
{"label":"System Administration","separator":undefined,"defaultLabel":"System Administration","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
],"height":"100%","localizationStructure":{},"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svUserInfo.role}==\"cashier\"","targetProperty":"showing"}, {}]
}]
}],
dojoMenuCSR: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Home","separator":undefined,"defaultLabel":"Home","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"dojoMenuCSRHomeClick","children":[]},
{"label":"Account Inquiry","separator":undefined,"defaultLabel":"Account Inquiry","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAccountInq","children":[]},
{"label":"Account Maintenance","separator":undefined,"defaultLabel":"Account Maintenance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Account Profile Maintenance","separator":undefined,"defaultLabel":"Account Profile Maintenance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAcctMtnceAcctProfMntc","children":[]},
{"label":"Close Account","separator":undefined,"defaultLabel":"Close Account","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAcctMtnceCloseAcct","children":[]},
{"label":"Place Hold Amount","separator":undefined,"defaultLabel":"Place Hold Amount","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAcctMtncePlaceHoldAmt","children":[]},
{"label":"Lift Hold Amount","separator":undefined,"defaultLabel":"Lift Hold Amount","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAcctMtnceLiftHoldAmt","children":[]},
{"label":"Place Stop Payment Order","separator":undefined,"defaultLabel":"Place Stop Payment Order","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAcctMtncePlaceStopPaym","children":[]},
{"label":"Lift Stop Payment Order","separator":undefined,"defaultLabel":"Lift Stop Payment Order","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navAcctMtnceLiftStopPaym","children":[]}
]},
{"label":"Other Transactions","separator":undefined,"defaultLabel":"Other Transactions","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Passbook Issuance","separator":undefined,"defaultLabel":"Passbook Issuance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navOthTxPassbookIss","children":[]},
{"label":"Checkbook Issuance","separator":undefined,"defaultLabel":"Checkbook Issuance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navOthTxCheckbkIss","children":[]},
{"label":"Checkbook Request","separator":undefined,"defaultLabel":"Checkbook Request","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navOthTxCheckbkReq","children":[]},
{"label":"Update Passbook","separator":undefined,"defaultLabel":"Update Passbook","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navOthTxUpdPassbk","children":[]}
]},
{"label":"Reports","separator":undefined,"defaultLabel":"Reports","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Open Account","separator":undefined,"defaultLabel":"Open Account","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navOpenAcct","children":[
{"label":"CA - Current Account","separator":undefined,"defaultLabel":"CA - Current Account","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navOpenAcctCA","children":[]},
{"label":"SA - Savings Account","separator":undefined,"defaultLabel":"SA - Savings Account","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navOpenAcctSA","children":[]},
{"label":"SSA - Special Savings Account","separator":undefined,"defaultLabel":"SSA - Special Savings Account","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navOpenAcctSSA","children":[]},
{"label":"TD - Time Deposit","separator":undefined,"defaultLabel":"TD - Time Deposit","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navOpenAcctTD","children":[]}
]},
{"label":"Time Deposit","separator":undefined,"defaultLabel":"Time Deposit","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"View List","separator":undefined,"defaultLabel":"View List","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navTimeDepositList","children":[]},
{"label":"Pre-Terminate Account","separator":undefined,"defaultLabel":"Pre-Terminate Account","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Matured Accounts","separator":undefined,"defaultLabel":"Matured Accounts","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navTDMatAcct","children":[]}
]}
],"height":"100%","localizationStructure":{},"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svUserInfo.role}==\"csr\"","targetProperty":"showing"}, {}]
}]
}]
}],
panel1: ["wm.Panel", {"height":"50%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"26px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"CASH IN","padding":"4","styles":{"fontWeight":"bold"}}, {}]
}],
dojoGrid1: ["wm.DojoGrid", {"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true}, {}]
}],
button1: ["wm.Button", {"border":"1","desktopHeight":"34px","height":"34px","showing":false,"width":"93px"}, {"onclick":"serviceVariable2"}],
panel9: ["wm.Panel", {"height":"50%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
panel10: ["wm.Panel", {"height":"26px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
label3: ["wm.Label", {"caption":"CASH OUT","padding":"4","styles":{"fontWeight":"bold"}}, {}]
}],
dojoGrid2: ["wm.DojoGrid", {"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true}, {}]
}],
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';