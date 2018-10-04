var logoutNow = function() {
window.onbeforeunload = null;
main.svRemoveToken.update();
wm.logout();
};
var id;
var logoutTimeout;
var monitor = new Monitor(840000, []); //180 000 =3 minutes.
dojo.declare("Main", wm.Page, {
start: function() {
this.svMenu.update();
this.menuPanel.setShowing(false);
this.svUserSessionCheck.update();
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
//idle dialog
YesIdleBtnClick: function(inSender) {
clearTimeout(logoutTimeout);
monitor.clearTimers();
this.idleDialog.hide();
////execute here some query for refresh server for not go to session expiration
},
NoIdleDialogClick: function(inSender) {
window.onbeforeunload = null;
main.svRemoveToken.update();
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
main.countdownlabel.setCaption("Your session will close in " + counter + " seconds");
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
timerTimerFire: function(inSender) {
this.mainDate.setDataValue(new Date());
},
svUserSessionCheckResult: function(inSender, inDeprecated) {
var flag = inSender.getData().dataValue;
if(flag == false|| flag == undefined || flag == null){
window.onbeforeunload = null;
wm.logout();
}
},
//Menu Access Rights
svMenuResult: function(inSender, inDeprecated) {
//Home
var home = inSender.getData().home;
//Customer Inquiry
var customerInquiry = inSender.getData().customerInquiry;
this.menuCustInquiry.setShowing(customerInquiry);
//Customer Setup
var customerSetup = inSender.getData().customerSetup;
//        this.menuCustSetup.setShowing(customerSetup);
//Customer Setup Individual
var custSetupIndiv = inSender.getData().custSetupIndiv;
this.menuCustSetup.setItemShowing("Individual", custSetupIndiv);
//Customer Setup Corporate
var custSetupCorp = inSender.getData().custSetupCorp;
this.menuCustSetup.setItemShowing("Corporate", custSetupCorp);
//Assignments
var assignments = inSender.getData().assignments;
//        this.menuAssgn.setShowing(assignments);
//Assignments My Assingments
var myAssignments = inSender.getData().myAssignments;
this.menuAssgn.setItemShowing("My Assignments", myAssignments);
//Assignments Manual Assingments
var manualAssignments = inSender.getData().manualAssignments;
this.menuAssgn.setItemShowing("Manual Assignments", manualAssignments);
//Other CIF Transactions
var otherCIFTx = inSender.getData().otherCIFTx;
//        this.menuOtherCIFTxn.setShowing(otherCIFTx);
//Other CIF Transactions Change CIF
var changeCIF = inSender.getData().changeCIF;
this.menuOtherCIFTxn.setItemShowing("Change of Customer Information", changeCIF);
//Other CIF Transactions Cancel CIF
var cancelCIF = inSender.getData().cancelCIF;
this.menuOtherCIFTxn.setItemShowing("Cancellation of CIF", cancelCIF);
//Other CIF Transactions Merge Duplicate CIF
var mergeDuplicateCIF = inSender.getData().mergeDuplicateCIF;
this.menuOtherCIFTxn.setItemShowing("Merging of Duplicate CIF", mergeDuplicateCIF);
//AMLA
var amla = inSender.getData().amla;
//        this.menuAMLA.setShowing(amla);
//AMLA Inquiry
var amlaInquiry = inSender.getData().amlaInquiry;
this.menuAMLA.setItemShowing("Inquiry", amlaInquiry);
//AMLA For Approval
var amlaForApproval = inSender.getData().amlaForApproval;
this.menuAMLA.setItemShowing("For Approval", amlaForApproval);
//AMLA File Upload
var amlaFileUpload = inSender.getData().amlaFileUpload;
this.menuAMLA.setItemShowing("File Upload", amlaFileUpload);
//Blacklist
var blacklist = inSender.getData().blacklist;
//        this.menuBlklist.setShowing(blacklist);
//Blacklist Inquiry
var blacklistInquiry = inSender.getData().blacklistInquiry;
this.menuBlklist.setItemShowing("Inquiry", blacklistInquiry);
//Blacklist For Approval
var blacklistForApproval = inSender.getData().blacklistForApproval;
this.menuBlklist.setItemShowing("For Approval", blacklistForApproval);
//Blacklist File Upload
var blacklistFileUpload = inSender.getData().blacklistFileUpload;
this.menuBlklist.setItemShowing("File Upload", blacklistFileUpload);
//Other Utilities
var otherUtilities = inSender.getData().otherUtilities;
//        this.menuOtherUtil.setShowing(otherUtilities);
//Other Utilities Document Maintenace
var documentMaintenace = inSender.getData().documentMaintenace;
this.menuOtherUtil.setItemShowing("Document Maintenance", documentMaintenace);
//Other Utilities Accredited Trade Partners
var accreditedTrade = inSender.getData().accreditedTrade;
this.menuOtherUtil.setItemShowing("Accredited Trade Partners", accreditedTrade);
//Reports
var reports = inSender.getData().reports;
//        this.menuRpts.setShowing(reports);
//System Administrator
var sysAdmin = inSender.getData().sysAdmin;
//        this.menuSysAdmin.setShowing(sysAdmin);
//System Administrator System Parameters
var sysParams = inSender.getData().sysParams;
this.menuSysAdmin.setItemShowing("System Parameters", sysParams);
//System Administrator Document Checklist
var docChecklist = inSender.getData().docChecklist;
this.menuSysAdmin.setItemShowing("Document Checklist", docChecklist);
//System Administrator Company
var company = inSender.getData().company;
this.menuSysAdmin.setItemShowing("Company", company);
//System Administrator Branch
var branch = inSender.getData().branch;
this.menuSysAdmin.setItemShowing("Branch", branch);
//System Administrator Group
var group = inSender.getData().group;
this.menuSysAdmin.setItemShowing("Group", group);
//System Administrator Team
var team = inSender.getData().team;
this.menuSysAdmin.setItemShowing("Team", team);
//Security
var security = inSender.getData().security;
//        this.menuSecAdmin.setShowing(security);
//Security User Account
var userAccount = inSender.getData().userAccount;
this.menuSecAdmin.setItemShowing("User Account", userAccount);
//Security Role & Access Rights
var roleAndAccessRights = inSender.getData().roleAndAccessRights;
this.menuSecAdmin.setItemShowing("Role & Access Rights", roleAndAccessRights);
//Security Parameter
var securityParams = inSender.getData().securityParams;
this.menuSecAdmin.setItemShowing("Security Parameter", securityParams);
//Security Email Utility
var emailUtility = inSender.getData().emailUtility;
this.menuSecAdmin.setItemShowing("Email Utility", emailUtility);
//Security Audit Trail
var auditTrail = inSender.getData().auditTrail;
this.menuSecAdmin.setItemShowing("Audit Trail", auditTrail);
//Security Reports
var securityReports = inSender.getData().securityRepots;
this.menuSecAdmin.setItemShowing("Reports", securityReports);
this.menuPanel.setShowing(true);
},
_end: 0
});

MainPage.widgets = {
templateUsernameVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
}],
svRemoveToken: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"removeADLoginToken","service":"AuthenticationFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"removeADLoginTokenInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"templateUsernameVar.dataValue","targetProperty":"username"}, {}],
wire1: ["wm.Wire", {"expression":"\"loggedin\"","targetProperty":"tag"}, {}]
}]
}]
}],
navSystemParam: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"mainPageContainer","targetProperty":"pageContainer"}, {}],
wire1: ["wm.Wire", {"expression":"\"SecurityParameter\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navUserIquiry: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"mainPageContainer","targetProperty":"pageContainer"}, {}],
wire: ["wm.Wire", {"expression":"\"UserAccounts\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navGotoHome: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"mainPageContainer","targetProperty":"pageContainer"}, {}]
}]
}]
}],
navToReport: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"mainPageContainer","targetProperty":"pageContainer"}, {}],
wire: ["wm.Wire", {"expression":"\"SecurityReports\"","targetProperty":"pageName"}, {}]
}]
}]
}],
dateTime: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"datetimerecord","service":"SecurityFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"datetimerecordInputs"}, {}]
}],
timer: ["wm.Timer", {"autoStart":true,"delay":30000}, {"onTimerFire":"timerTimerFire"}],
svUserSessionCheck: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"userSessionCheck","service":"SecurityFacade"}, {"onResult":"svUserSessionCheckResult"}, {
input: ["wm.ServiceInput", {"type":"userSessionCheckInputs"}, {}]
}],
navGotoEmailParams: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"mainPageContainer","targetProperty":"pageContainer"}, {}],
wire: ["wm.Wire", {"expression":"\"EmailUtility\"","targetProperty":"pageName"}, {}]
}]
}]
}],
svGetUserFirstname: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUserFirstname","service":"SecurityFacade","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getUserFirstnameInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"templateUsernameVar.dataValue","targetProperty":"username"}, {}]
}]
}]
}],
svMenu: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getMenuAccessRights","service":"RoleFacade"}, {"onResult":"svMenuResult"}, {
input: ["wm.ServiceInput", {"type":"getMenuAccessRightsInputs"}, {}]
}],
navUserRoleSetup: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"mainPageContainer","targetProperty":"pageContainer"}, {}],
wire1: ["wm.Wire", {"expression":"\"RoleAccessRights\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navSystemParams: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"mainPageContainer","targetProperty":"pageContainer"}, {}],
wire1: ["wm.Wire", {"expression":"\"SystemAdmin_Main\"","targetProperty":"pageName"}, {}]
}]
}]
}],
idleDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar5","containerWidgetId":"","desktopHeight":"120px","height":"120px","styles":{"borderRadius":"0px"},"title":undefined,"width":"300px"}, {"onClose":"idleDialogClose","onShow":"idleDialogShow"}, {
containerWidget16: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
countdownlabel: ["wm.Label", {"_classes":{"domNode":["dialogfooter"]},"padding":"4","styles":{},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Your session will close in 60 seconds\"","targetProperty":"caption"}, {}]
}]
}],
label4: ["wm.Label", {"caption":"Do you want to keep working?","height":"100%","padding":"4","styles":{"fontSize":"15px","fontWeight":"bold"},"width":"100%"}, {}]
}],
buttonBar5: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"41px","height":"36px","styles":{}}, {}, {
YesIdleBtn: ["wm.Button", {"border":"1","caption":"Yes","desktopHeight":"25px","height":"25px","margin":"4","styles":{"borderRadius":"0px"}}, {"onclick":"YesIdleBtnClick"}],
NoIdleDialog: ["wm.Button", {"border":"1","caption":"No","desktopHeight":"25px","height":"25px","margin":"4","styles":{"borderRadius":"0px"}}, {"onclick":"NoIdleDialogClick"}]
}]
}],
layoutBox1: ["wm.Layout", {"borderColor":"#d1d1d1","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"872px"}, {}, {
panelCenter: ["wm.Panel", {"autoScroll":true,"borderColor":"#d1d1d1","height":"100%","horizontalAlign":"center","minDesktopHeight":600,"minHeight":600,"styles":{"backgroundColor":"#eef2f4"},"verticalAlign":"top","width":"100%"}, {}, {
panelHeader: ["wm.HeaderContentPanel", {"height":"52px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,5","styles":{"backgroundColor":"#535c69"},"verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"aspect":"h","height":"90%","source":"resources/images/yourlogo.png","styles":{},"width":"195px"}, {}],
label2: ["wm.Label", {"caption":"CASA <font size=\"1\" color = \"#b1b1b1\">Version 1.0</font>","height":"35px","padding":"4","styles":{"fontSize":"15px","fontWeight":"bold","color":"#ffffff"},"width":"100%"}, {}],
panel3: ["wm.Panel", {"height":"52px","horizontalAlign":"right","verticalAlign":"top","width":"290px"}, {}, {
panel4: ["wm.Panel", {"height":"25px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
lblWelcom: ["wm.Label", {"align":"left","padding":"0","styles":{"fontWeight":"bold","fontSize":"11.5px","color":"#ffffff"},"width":"216px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Welcome, \"+${svGetUserFirstname.dataValue}.toUpperCase()","targetProperty":"caption"}, {}]
}]
}],
logoutbutton: ["wm.Button", {"_classes":{"domNode":["Warning","logoutbutton"]},"border":"0","borderColor":"#f89406","caption":"<c>Logout","desktopHeight":"25px","height":"25px","imageList":undefined,"margin":"0","styles":{}}, {"onclick":"logoutbuttonClick"}]
}],
mainDatePanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
lblSysDate: ["wm.Label", {"align":"left","padding":"0","styles":{"fontWeight":"bold","fontSize":"11.5px","color":"#e1e1e1"},"width":"218px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"&nbsp;Today is : \"+ ${mainDate.displayValue}","targetProperty":"caption"}, {}]
}]
}],
mainDate: ["wm.DateTime", {"border":"0","caption":"Today is: ","captionAlign":"right","captionSize":"60px","displayValue":"9/8/2017 04:14 PM","height":"25px","readonly":true,"showing":false,"styles":{},"width":"201px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
}]
}]
}]
}]
}],
menuPanel: ["wm.Panel", {"border":"0,0,2,0","borderColor":"#219c35","height":"23px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#788a81"},"verticalAlign":"top","width":"100%"}, {}, {
menuHome: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Home","separator":undefined,"defaultLabel":"Home","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
],"height":"32px","localizationStructure":{},"styles":{},"width":"54px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMenu.home","targetProperty":"showing"}, {}]
}]
}],
menuCustInquiry: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Customer Inquiry","separator":undefined,"defaultLabel":"Customer Inquiry","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
],"height":"32px","localizationStructure":{},"styles":{},"width":"119px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMenu.customerInquiry","targetProperty":"showing"}, {}]
}]
}],
menuCustSetup: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Customer Setup","separator":undefined,"defaultLabel":"Customer Setup","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Individual","separator":undefined,"defaultLabel":"Individual","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Corporate","separator":undefined,"defaultLabel":"Corporate","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
]}
],"height":"32px","localizationStructure":{},"styles":{},"width":"110px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMenu.customerSetup","targetProperty":"showing"}, {}]
}]
}],
menuAssgn: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Assignments","separator":undefined,"defaultLabel":"Assignments","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"My Assignments","separator":undefined,"defaultLabel":"My Assignments","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[],"onClick1":undefined},
{"label":"Manual Assignments","separator":undefined,"defaultLabel":"Manual Assignments","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
]}
],"height":"32px","localizationStructure":{},"styles":{},"width":"95px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMenu.assignments","targetProperty":"showing"}, {}]
}]
}],
menuOtherCIFTxn: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Other CIF Transactions","separator":undefined,"defaultLabel":"Other CIF Transactions","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Change of Customer Information","separator":undefined,"defaultLabel":"Change of Customer Information","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Cancellation of CIF","separator":undefined,"defaultLabel":"Cancellation of CIF","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Merging of Duplicate CIF","separator":undefined,"defaultLabel":"Merging of Duplicate CIF","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
]}
],"height":"32px","localizationStructure":{},"styles":{},"width":"149px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMenu.otherCIFTx","targetProperty":"showing"}, {}]
}]
}],
menuAMLA: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"AMLA","separator":undefined,"defaultLabel":"AMLA","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Inquiry","separator":undefined,"defaultLabel":"Inquiry","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"For Approval","separator":undefined,"defaultLabel":"For Approval","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"File Upload","separator":undefined,"defaultLabel":"File Upload","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
]}
],"height":"32px","localizationStructure":{},"styles":{},"width":"52px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMenu.amla","targetProperty":"showing"}, {}]
}]
}],
menuBlklist: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Blacklist","separator":undefined,"defaultLabel":"Blacklist","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Inquiry","separator":undefined,"defaultLabel":"Inquiry","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"For Approval","separator":undefined,"defaultLabel":"For Approval","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"File Upload","separator":undefined,"defaultLabel":"File Upload","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
]}
],"height":"32px","localizationStructure":{},"styles":{},"width":"70px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMenu.blacklist","targetProperty":"showing"}, {}]
}]
}],
menuOtherUtil: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Other Utilities","separator":undefined,"defaultLabel":"Other Utilities","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Document Maintenance","separator":undefined,"defaultLabel":"Document Maintenance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Accredited Trade Partners","separator":undefined,"defaultLabel":"Accredited Trade Partners","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
]}
],"height":"32px","localizationStructure":{},"styles":{},"width":"97px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMenu.otherUtilities","targetProperty":"showing"}, {}]
}]
}],
menuRpts: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Reports","separator":undefined,"defaultLabel":"Reports","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navToReport","children":[]}
],"height":"32px","localizationStructure":{},"styles":{},"width":"65px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMenu.reports","targetProperty":"showing"}, {}]
}]
}],
menuSysAdmin: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"System Admin","separator":undefined,"defaultLabel":"System Admin","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"System Parameters","separator":undefined,"defaultLabel":"System Parameters","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navSystemParams","children":[]},
{"label":"Document Checklist","separator":undefined,"defaultLabel":"Document Checklist","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Company","separator":undefined,"defaultLabel":"Company","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Branch","separator":undefined,"defaultLabel":"Branch","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Group","separator":undefined,"defaultLabel":"Group","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Team","separator":undefined,"defaultLabel":"Team","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
]}
],"height":"32px","localizationStructure":{},"styles":{},"width":"104px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMenu.sysAdmin","targetProperty":"showing"}, {}]
}]
}],
menuSecAdmin: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Security","separator":undefined,"defaultLabel":"Security","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"User Account","separator":undefined,"defaultLabel":"User Account","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navUserIquiry","children":[]},
{"label":"Role & Access Rights","separator":undefined,"defaultLabel":"Role & Access Rights","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navUserRoleSetup","children":[]},
{"label":"Security Parameter","separator":undefined,"defaultLabel":"Security Parameter","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navSystemParam","children":[]},
{"label":"Email Utility","separator":undefined,"defaultLabel":"Email Utility","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navGotoEmailParams","children":[]},
{"label":"Audit Trail","separator":undefined,"defaultLabel":"Audit Trail","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Reports","separator":undefined,"defaultLabel":"Reports","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
]}
],"height":"32px","localizationStructure":{},"styles":{},"width":"66px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMenu.security","targetProperty":"showing"}, {}]
}]
}]
}],
panelContent: ["wm.MainContentPanel", {"autoScroll":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","padding":"5","styles":{"backgroundColor":"#ffffff","borderRadius":"5px 0px 0px"},"verticalAlign":"top","width":"90%"}, {}, {
panel1: ["wm.EmphasizedContentPanel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel8: ["wm.Panel", {"_classes":{"domNode":["cPanel"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
mainPageContainer: ["wm.PageContainer", {"deferLoad":true,"styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}]
}],
panelFooter: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"center","layoutKind":"left-to-right","padding":"0,10,0,10","styles":{"backgroundColor":"#333333"},"verticalAlign":"middle","width":"100%"}, {}, {
picture2: ["wm.Picture", {"aspect":"h","height":"15px","source":"resources/images/Acacia360whitefooter.png","styles":{},"width":"93px"}, {}],
lblFooter2: ["wm.Label", {"align":"left","caption":"Banking Solutions","link":undefined,"padding":"4","styles":{"fontWeight":"bold","color":"#a1a1a1","fontSize":"11px"},"width":"100%"}, {}],
lblFooter: ["wm.Label", {"align":"right","caption":"<html><font color = #a1a1a1>© Copyright 2017&nbsp&nbsp&nbsp<a href=\"http://www.eteligent.com.ph/\" target=\"_blank\"><font color = #f1f1f1>Eteligent Software Solutions Inc.</a></html>","link":undefined,"padding":"4","styles":{"fontWeight":"normal"},"width":"100%"}, {}]
}]
}]
}]
};

MainPage.prototype._cssText = '';
MainPage.prototype._htmlText = '';