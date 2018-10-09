dojo.declare("CSR_OPENACCT_TD_BACKUP", wm.Page, {
start: function() {
this.svCurrency.update();
this.svOwnershipType.update();
this.svProdGroup.update();
//this.svProdList.update();
//this.svProductListFull.update();
this.pnlNewTimeDepAcct.setValue("showing", false);
this.pnlNewSavDepAcct.setValue("showing", false);
this.pnlFileup.setValue("showing", false);
this.pnlButton.setValue("showing", false);
},
"preferredDevice": "desktop",
btnContinueClick: function(inSender) {
app.confirm("Proceed to open new account?", false,
dojo.hitch(this, function() {
this.pnlCustDet.setValue("showing", false);
this.pnlButton.setValue("showing", true);
if(this.acctProdGroup.getDataValue()=="10"){
this.pnlNewSavDepAcct.setValue("showing", true);
this.label4.setCaption("SETUP NEW CURRENT DEPOSIT ACCOUNT");
this.submitSA();
this.pnlFileup.setValue("showing", true);
}else if(this.acctProdGroup.getDataValue()=="20"){
this.pnlNewSavDepAcct.setValue("showing", true);
this.label4.setCaption("SETUP NEW SAVINGS DEPOSIT ACCOUNT");
this.submitSA();
this.pnlFileup.setValue("showing", true);
}else if(this.acctProdGroup.getDataValue()=="30"){
}else if(this.acctProdGroup.getDataValue()=="40"){
this.pnlNewTimeDepAcct.setValue("showing", true);
this.label4.setCaption("SETUP NEW TIME DEPOSIT ACCOUNT");
this.pnlFileup.setValue("showing", true);
}
}),
dojo.hitch(this, function() {}));
//app.alert("HERE");
},
notifCreateSuccessOk: function(inSender, inResult) {
this.pnlNewTimeDepAcct.clearData();
this.pnlNewSavDepAcct.clearData();
this.pnlCustDet.clearData();
wm.Page.getPage("Main").pageContainer1.setPageName("");
},
btnCancelClick: function(inSender) {
this.pnlCustDet.clearData();
this.pnlNewTimeDepAcct.clearData();
this.pnlNewSavDepAcct.clearData();
this.label4.setCaption("SETUP NEW ACCOUNT");
this.pnlCustDet.setValue("showing", true);
this.pnlNewTimeDepAcct.setValue("showing", false);
this.pnlNewSavDepAcct.setValue("showing", false);
this.pnlButton.setValue("showing", false);
this.pnlFileup.setValue("showing", false);
this.varSigcard.setValue("dataValue", 0);
},
btnHomeClick: function(inSender) {
this.pnlCustDet.clearData();
this.pnlNewTimeDepAcct.clearData();
this.pnlNewSavDepAcct.clearData();
wm.Page.getPage("Main").pageContainer1.setPageName("");
},
computeDtTerm: function() {
//		var dt = new Date(this.fBkdt.getDataValue());
//        this.fMatdt.setDataValue(dt.setDay(dt.getDay()+this.fTerm.getDataValue()));
var date = new Date(this.fBkdt.getDataValue());
var newdate = new Date(date);
newdate.setDate(newdate.getDate() + this.fTerm.getDataValue());
this.fMatdt.setDataValue(newdate);
},
acctCIFIDFocus: function(inSender) {
this.acctCIFID.setValue("required", true);
this.acctCustFullname.setValue("required", false);
this.acctCustFullname.setDataValue("");
},
acctCustFullnameFocus: function(inSender) {
this.acctCustFullname.setValue("required", true);
this.acctCIFID.setValue("required", false);
this.acctCIFID.setDataValue("");
},
acctCIFID2Focus: function(inSender) {
//        this.acctCIFID2.setValue("required", true);
//    	this.acctCustFullname2.setValue("required", false);
this.acctCustFullname2.setDataValue("");
},
acctCustFullname2Focus: function(inSender) {
//		this.acctCustFullname2.setValue("required", true);
//        this.acctCIFID2.setValue("required", false);
this.acctCIFID2.setDataValue("");
},
acctCIFID3Focus: function(inSender) {
//        this.acctCIFID3.setValue("required", true);
//        this.acctCustFullname3.setValue("required", false);
this.acctCustFullname3.setDataValue("");
},
acctCustFullname3Focus: function(inSender) {
//		this.acctCustFullname3.setValue("required", true);
//        this.acctCIFID3.setValue("required", false);
this.acctCIFID3.setDataValue("");
},
acctProdGroupChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if(inDataValue!=null){
this.svProductListFull.update();
}
},
btnSubmitClick: function(inSender) {
if(this.acctProdGroup.getDataValue()=="10"){
this.svCreateSAcct.update();
}else if(this.acctProdGroup.getDataValue()=="20"){
this.svCreateSAcct.update();
}else if(this.acctProdGroup.getDataValue()=="30"){
}else if(this.acctProdGroup.getDataValue()=="40"){
this.svCreateTDAcct.update();
}
},
svCreateTDAcctResult: function(inSender, inDeprecated) {
if(inSender.getData().result==0){
app.alert("Error in creating account!");
}else{
this.notifCreateSuccess.input.setValue("text",
"Account creation successful!<br/> Account no : <b><font color='blue'> "+inSender.getData().value);
this.notifCreateSuccess.update();
this.svSaveSigcard.input.setValue("cifno", inSender.getData().value);
this.svSaveSigcard.update();
}
},
svCreateSAcctResult: function(inSender, inDeprecated) {
if(inSender.getData().result==0){
app.alert("Error in creating account!");
}else{
this.notifCreateSuccess.input.setValue("text",
"Account creation successful!<br/> Account no : <b><font color='blue'> "+inSender.getData().value);
this.notifCreateSuccess.update();
this.svSaveSigcard.input.setValue("cifno", inSender.getData().value);
this.svSaveSigcard.update();
}
},
submitTD: function() {
if(this.fPlacementAmt.getDataValue() > 0.00 && this.fBkdt!=null && this.fTerm.getDataValue() > 0
&& this.varSigcard.getData().dataValue==1){
this.btnSubmit.setDisabled(false);
} else {
this.btnSubmit.setDisabled(true);
}
},
submitSA: function() {
if(this.fSACustName.getDataValue()!= null && this.fAcctName.getDataValue()!= null
&& this.varSigcard.getData().dataValue==1){
this.btnSubmit.setDisabled(false);
} else {
this.btnSubmit.setDisabled(true);
}
},
fSACustNameFocus: function(inSender) {
this.fSACustName.clear();
},
fAcctNameFocus: function(inSender) {
this.fAcctName.clear();
},
svCheckMemberListResult: function(inSender, inDeprecated) {
this.searchResultDialog.show();
this.varSearchResult.setValue("dataSet", inSender.getData());
},
btnSearchClick: function(inSender) {
this.varSearchNo.setValue("dataValue",1);
if(this.acctCIFID.getDataValue()!=null){
this.svCheckMember.update();
} else if(this.acctCustFullname.getDataValue()!=null){
this.svCheckMemberList.update();
}
},
btnCloseClick: function(inSender) {
this.searchResultDialog.hide();
},
gridResultNameGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
if(this.varSearchNo.getData().dataValue==1){
this.acctCIFID.setDataValue(rowData.cifno);
this.svCheckMember.update();
}else if(this.varSearchNo.getData().dataValue==2){
this.acctCIFID2.setDataValue(rowData.cifno);
this.svCheckMember2.update();
}else if(this.varSearchNo.getData().dataValue==3){
this.acctCIFID3.setDataValue(rowData.cifno);
this.svCheckMember3.update();
}
this.searchResultDialog.hide();
},
btnSearch2Click: function(inSender) {
this.varSearchNo.setValue("dataValue",2);
if(this.acctCIFID2.getDataValue()!=null){
this.svCheckMember2.update();
} else if(this.acctCustFullname2.getDataValue()!=null){
this.svCheckMemberList2.update();
}
},
svCheckMemberList2Result: function(inSender, inDeprecated) {
this.searchResultDialog.show();
this.varSearchResult.setValue("dataSet", inSender.getData());
},
svCheckMemberResult: function(inSender, inDeprecated) {
if(inSender.getData().result==0){
app.toastError("Member not found/exist!", 5000);
}else{
app.toastSuccess("Member found/exist!", 5000);
}
this.acctfull();
},
svCheckMember2Result: function(inSender, inDeprecated) {
if(inSender.getData().result==0){
app.toastError("Member not found/exist!", 5000);
}else{
//this.acctCustFullname2.setDataValue(inSender.getData().)
app.toastSuccess("Member found/exist!", 5000);
}
this.acctfull(inSender);
},
btnSearch3Click: function(inSender) {
this.varSearchNo.setValue("dataValue",3);
if(this.acctCIFID3.getDataValue()!=null){
this.svCheckMember3.update();
} else if(this.acctCustFullname3.getDataValue()!=null){
this.svCheckMemberList3.update();
}
},
svCheckMemberList3Result: function(inSender, inDeprecated) {
this.searchResultDialog.show();
this.varSearchResult.setValue("dataSet", inSender.getData());
},
svCheckMember3Result: function(inSender, inDeprecated) {
if(inSender.getData().result==0){
app.toastError("Member not found/exist!", 5000);
}else{
//this.acctCustFullname2.setDataValue(inSender.getData().)
app.toastSuccess("Member found/exist!", 5000);
}
this.acctfull();
},
acctfull: function(){
var acctname;
if(this.svCheckMember.getValue("result")==1){
acctname = this.svCheckMember.getData().name;
}
if(this.svCheckMember2.getValue("result")==1 && this.acctAcctType.getDataValue() > 0){
acctname = acctname+" "+this.acctAcctType.getDisplayValue()+" "
+this.svCheckMember2.getData().name;
}
if(this.svCheckMember3.getValue("result")==1 && this.acctAcctType.getDataValue() > 0){
acctname = acctname+" "+this.acctAcctType.getDisplayValue()+" "
+this.svCheckMember3.getData().name;
}
this.fAcctFullname.setDataValue(acctname);
},
acctAcctTypeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.acctfull();
},
dojoFileUploadSuccess: function(inSender, fileList) {
this.lblUpload.setCaption("<font color='green'>Sigcard Uploaded!");
this.varSigcard.setValue("dataValue", 1);
this.submitValidation();
},
dojoFileUploadError: function(inSender, inErrorMsg) {
this.lblUpload.setCaption("<font color='red'>Invalid file format!");
this.varSigcard.setValue("dataValue", 0);
this.submitValidation();
},
submitValidation: function(){
if(this.acctProdGroup.getDataValue()=="10"){
this.submitSA();
}else if(this.acctProdGroup.getDataValue()=="20"){
this.submitSA();
}else if(this.acctProdGroup.getDataValue()=="30"){
}else if(this.acctProdGroup.getDataValue()=="40"){
this.submitTD();
}
},
btnAddCIFClick: function(inSender) {
this.varCIFList.addItem(this.varCIF.getData(), this.varCIFList.getCount()+1);
},
btnCloseCIFClick: function(inSender) {
this.cifListDialog.hide();
},
_end: 0
});

CSR_OPENACCT_TD_BACKUP.widgets = {
svCheckMember: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNo","service":"AccountFacade"}, {"onResult":"svCheckMemberResult"}, {
input: ["wm.ServiceInput", {"type":"checkMemberNoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"memberno"}, {}]
}]
}]
}],
svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCurrency","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getCurrencyInputs"}, {}]
}],
svOwnershipType: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"OWNERSHIPTYPE\"","targetProperty":"codename"}, {}]
}]
}]
}],
svProdList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getProdtype","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getProdtypeInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctProdGroup.dataValue","targetProperty":"prodgroup"}, {}]
}]
}]
}],
notifCreateSuccess: ["wm.NotificationCall", {}, {"onOk":"notifCreateSuccessOk"}, {
input: ["wm.ServiceInput", {"type":"alertInputs"}, {}]
}],
svProductListFull: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getProdList","service":"AccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getProdListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctProdGroup.dataValue","targetProperty":"prodgroup"}, {}]
}]
}]
}],
svProdGroup: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"30","targetProperty":"prodgroup"}, {}],
wire1: ["wm.Wire", {"expression":"\"PRODUCTGROUP\"","targetProperty":"codename"}, {}]
}]
}]
}],
svCreateTDAcct: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"createAccount","service":"AccountFacade"}, {"onResult":"svCreateTDAcctResult"}, {
input: ["wm.ServiceInput", {"type":"createAccountInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctAcctType.selectedItem.id","targetProperty":"dep.ownershipType"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"dep.employeeNo"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fTerm.dataValue","targetProperty":"dep.term"}, {}],
wire6: ["wm.Wire", {"expression":"${fIntRate.dataValue}","targetProperty":"dep.intRate"}, {}],
wire7: ["wm.Wire", {"expression":"${fMatValue.dataValue}","targetProperty":"dep.matAmt"}, {}],
wire8: ["wm.Wire", {"expression":"${fWTaxRate.dataValue}","targetProperty":"dep.wtaxrate"}, {}],
wire9: ["wm.Wire", {"expression":"${fMatdt.dataValue}","targetProperty":"dep.maturityDate"}, {}],
wire10: ["wm.Wire", {"expression":"${fBkdt.dataValue}","targetProperty":"dep.bookDate"}, {}],
wire11: ["wm.Wire", {"expression":"${fLessWithTaxAmt.dataValue}","targetProperty":"dep.lessWtaxAmt"}, {}],
wire1: ["wm.Wire", {"expression":"1","targetProperty":"dep.accountStatus"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"fCustName.dataValue","targetProperty":"dep.accountName"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"dep.instcode"}, {}],
wire15: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"dep.unit"}, {}],
wire16: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.posttx","targetProperty":"dep.posttx"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.prodcode","targetProperty":"dep.subProductCode"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"acctProdGroup.selectedItem.id","targetProperty":"dep.productCode"}, {}],
wire17: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"dep.cifno1"}, {}],
wire18: ["wm.Wire", {"expression":undefined,"source":"acctCIFID2.dataValue","targetProperty":"dep.cifno2"}, {}],
wire19: ["wm.Wire", {"expression":undefined,"source":"acctCIFID3.dataValue","targetProperty":"dep.cifno3"}, {}],
wire20: ["wm.Wire", {"expression":"0","targetProperty":"dep.placeholdAmt"}, {}],
wire22: ["wm.Wire", {"expression":"0","targetProperty":"dep.floatAmount"}, {}],
wire21: ["wm.Wire", {"expression":undefined,"source":"fPlacementAmt.dataValue","targetProperty":"dep.placementAmt"}, {}],
wire12: ["wm.Wire", {"expression":"0","targetProperty":"dep.accountBalance"}, {}]
}]
}]
}],
svCreateSAcct: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"createAccount","service":"AccountFacade"}, {"onResult":"svCreateSAcctResult"}, {
input: ["wm.ServiceInput", {"type":"createAccountInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"1","targetProperty":"dep.accountStatus"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"acctAcctType.selectedItem.id","targetProperty":"dep.jointAcctType"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"dep.unit"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"dep.instcode"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"acctAcctType.selectedItem.id","targetProperty":"dep.ownershipType"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"fAcctName.dataValue","targetProperty":"dep.accountName"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.prodcode","targetProperty":"dep.subProductCode"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"acctProdGroup.selectedItem.id","targetProperty":"dep.productCode"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dep.bookDate"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.posttx","targetProperty":"dep.posttx"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"dep.cifno1"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"acctCIFID2.dataValue","targetProperty":"dep.cifno2"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"acctCIFID3.dataValue","targetProperty":"dep.cifno3"}, {}],
wire5: ["wm.Wire", {"expression":"0","targetProperty":"dep.placeholdAmt"}, {}],
wire9: ["wm.Wire", {"expression":"0","targetProperty":"dep.accountBalance"}, {}],
wire15: ["wm.Wire", {"expression":"0","targetProperty":"dep.placementAmt"}, {}],
wire16: ["wm.Wire", {"expression":"0","targetProperty":"dep.floatAmount"}, {}]
}]
}]
}],
svCheckMemberList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNoName","service":"AccountFacade"}, {"onResult":"svCheckMemberListResult"}, {
input: ["wm.ServiceInput", {"type":"checkMemberNoNameInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"memberno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"acctCustFullname.dataValue","targetProperty":"name"}, {}]
}]
}]
}],
svCheckMember2: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNo","service":"AccountFacade"}, {"onResult":"svCheckMember2Result"}, {
input: ["wm.ServiceInput", {"type":"checkMemberNoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID2.dataValue","targetProperty":"memberno"}, {}]
}]
}]
}],
svCheckMemberList2: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNoName","service":"AccountFacade"}, {"onResult":"svCheckMemberList2Result"}, {
input: ["wm.ServiceInput", {"type":"checkMemberNoNameInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"memberno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"acctCustFullname2.dataValue","targetProperty":"name"}, {}]
}]
}]
}],
svCheckMember3: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNo","service":"AccountFacade"}, {"onResult":"svCheckMember3Result"}, {
input: ["wm.ServiceInput", {"type":"checkMemberNoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID3.dataValue","targetProperty":"memberno"}, {}]
}]
}]
}],
svCheckMemberList3: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNoName","service":"AccountFacade"}, {"onResult":"svCheckMemberList3Result"}, {
input: ["wm.ServiceInput", {"type":"checkMemberNoNameInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"memberno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"acctCustFullname3.dataValue","targetProperty":"name"}, {}]
}]
}]
}],
varSearchResult: ["wm.Variable", {"isList":true,"type":"com.casa.acct.forms.InquiryCIFNameList"}, {}],
varSearchNo: ["wm.Variable", {"type":"NumberData"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"0","targetProperty":"dataSet.dataValue"}, {}]
}]
}],
varSigcard: ["wm.Variable", {"type":"NumberData"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"0","targetProperty":"dataSet.dataValue"}, {}]
}]
}],
svSaveSigcard: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveSigcard","service":"SigcardFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"saveSigcardInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dojoFileUpload.variable.name","targetProperty":"filename"}, {}]
}]
}]
}],
varCIF: ["wm.Variable", {"type":"com.smslai_eoddb.data.Tbdepositcif"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"dataSet.cifno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"acctCustFullname.dataValue","targetProperty":"dataSet.cifname"}, {}]
}]
}],
varCIFList: ["wm.Variable", {"isList":true,"type":"com.smslai_eoddb.data.Tbdepositcif"}, {}],
searchResultDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","title":"Search Result By Name"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
gridResultName: ["wm.DojoGrid", {"_classes":{"domNode":["cDojoGrid"]},"border":"0","columns":[
{"show":true,"field":"cifno","title":"Cifno","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"btn","title":"Action","width":"100px","align":"center","formatFunc":"wm_button_formatter","editorProps":null,"expression":"\"Select\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Cifno: \" + ${cifno} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${name}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","localizationStructure":{},"margin":"0,0,5,0","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {"onGridButtonClick":"gridResultNameGridButtonClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varSearchResult","targetProperty":"dataSet"}, {}]
}]
}],
panel9: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label3: ["wm.Label", {"padding":"4","styles":{"color":"#030303"},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Result : \"+${varSearchResult.count}","targetProperty":"caption"}, {}]
}]
}],
btnClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"30px","height":"30px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseClick"}]
}]
}]
}],
cifListDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget1","title":"CIF List","width":"480px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
ciflistGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"accountno","title":"Accountno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"cifno","title":"Cifno","width":"60%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"cifname","title":"Cifname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Cifno: \" + ${cifno} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Cifname: \" + ${cifname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"btn","title":"Action","width":"100px","align":"center","formatFunc":"wm_button_formatter","expression":"\"Delete\"","isCustomField":true,"mobileColumn":false}
],"dsType":"com.smslai_eoddb.data.Tbdepositcif","height":"100%","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varCIFList","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"41px","height":"41px"}, {}, {
btnCloseCIF: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"30px","height":"30px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseCIFClick"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"1008px"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label4: ["wm.Label", {"caption":"Setup New Account","height":"31px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"527px"}, {}]
}],
panel4Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
pnlCustDet: ["wm.Panel", {"height":"274px","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label2Panel: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder"},"verticalAlign":"top","width":"100%"}, {}, {
label2: ["wm.Label", {"caption":"Customer Details","margin":"0,0,0,0","padding":"4","styles":{"fontSize":"13px","fontWeight":"bolder","color":"#4c4848"},"width":"100%"}, {}]
}],
spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctProdGroup: ["wm.SelectMenu", {"border":"0","caption":"Product Group:","captionSize":"140px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"320px"}, {"onchange":"acctProdGroupChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdGroup","targetProperty":"dataSet"}, {}]
}]
}],
acctProdType: ["wm.SelectMenu", {"border":"0","caption":"Product Type:","captionSize":"140px","dataField":"prodcode","dataType":"com.smslai_eoddb.data.Tbprodmatrix","displayField":"prodname","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"320px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProductListFull","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":"${acctProdGroup.dataValue}==null","targetProperty":"disabled"}, {}]
}]
}],
acctAcctType: ["wm.SelectMenu", {"border":"0","caption":"Account Type:","captionSize":"140px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"320px"}, {"onchange":"acctAcctTypeChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svOwnershipType","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"acctProdType.invalid","targetProperty":"disabled"}, {}]
}]
}],
acctCIFIDPanel: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"372%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctAcctType.invalid","targetProperty":"disabled"}, {}]
}],
acctCIFID: ["wm.Text", {"border":"0","caption":"Customer CIF ID:","captionSize":"140px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"320px"}, {"onMouseOut":"acctCIFIDMouseOut","onfocus":"acctCIFIDFocus"}],
acctCustFullname: ["wm.Text", {"border":"0","caption":"Customer Name:","captionSize":"110px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"300px"}, {"onfocus":"acctCustFullnameFocus"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckMember.name","targetProperty":"dataValue"}, {}]
}]
}],
btnSearch: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Search","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnSearchClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFIDPanel.invalid","targetProperty":"disabled"}, {}]
}]
}],
btnAddCIF: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Add CIF","desktopHeight":"28px","height":"28px","styles":{},"width":"85px"}, {"onclick":"btnAddCIFClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${acctCIFID.dataValue}==null&&${acctCustFullname.dataValue}==null","targetProperty":"disabled"}, {}]
}]
}]
}],
acctCIFIDMulti: ["wm.Panel", {"height":"86px","horizontalAlign":"left","styles":{},"verticalAlign":"middle","width":"372%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${acctAcctType.selectedItem.id} > 0","targetProperty":"showing"}, {}]
}],
fAcctFullname: ["wm.Text", {"border":"0","caption":"Account Fullname","captionSize":"140px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {}],
btnCIFList: ["wm.Button", {"border":"1","caption":"View CIF List","desktopHeight":"28px","height":"28px","width":"111px"}, {}]
}],
spacer5: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
btnContinue: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnContinueClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${pnlCustDet.invalid} && (${acctCIFID.dataValue}==null||${acctCustFullname.dataValue}==null)","targetProperty":"disabled"}, {}]
}]
}],
btnHome: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnHomeClick"}]
}]
}],
pnlNewTimeDepAcct: ["wm.Panel", {"height":"305px","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
fTxdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Transaction Date:","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"315px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
fDepProdName: ["wm.Text", {"border":"0","caption":"Product Type:","displayValue":"","height":"25px","readonly":true,"width":"317px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${acctProdType.selectedItem.prodname}","targetProperty":"dataValue"}, {}]
}]
}],
fCustName: ["wm.Text", {"border":"0","caption":"Customer Name:","displayValue":"","height":"25px","readonly":true,"width":"550px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctFullname.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
fPlacementAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Placement Amount:","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"required":true,"width":"300px"}, {"onchange":"submitTD"}],
fTerm: ["wm.Number", {"border":"0","caption":"Term (days):","displayValue":"","emptyValue":"zero","height":"25px","required":true,"width":"300px"}, {"onchange":"computeDtTerm","onchange1":"submitTD"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${acctProdType.selectedItem.minterm}","targetProperty":"dataValue"}, {}]
}]
}],
fIntRate: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Interest Rate:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.intrate","targetProperty":"dataValue"}, {}]
}]
}],
fWTaxRate: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"With Tax Rate:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${acctProdType.selectedItem.wtaxrate}","targetProperty":"dataValue"}, {}]
}]
}],
fBkdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Booking Date:","displayValue":"5/28/2018","emptyValue":"null","height":"25px","required":true,"width":"300px"}, {"onchange":"computeDtTerm","onchange1":"submitTD"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
}]
}],
fMatdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Maturity Date:","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"300px"}, {}],
fTotalInt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Total Interest:","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${fPlacementAmt.dataValue}*${fIntRate.dataValue}*${fTerm.dataValue}/360","targetProperty":"dataValue"}, {}]
}]
}],
fLessWithTaxAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Less With Tax Amount:","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${fTotalInt.dataValue}*0.20","targetProperty":"dataValue"}, {}]
}]
}],
fMatValue: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Maturity Value:","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"(${fPlacementAmt.dataValue}+${fTotalInt.dataValue})-${fLessWithTaxAmt.dataValue}","targetProperty":"dataValue"}, {}]
}]
}]
}],
pnlNewSavDepAcct: ["wm.Panel", {"height":"200px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
fSATxdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Transaction Date:","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"315px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
ffSACIFNo: ["wm.Text", {"border":"0","caption":"CIF No:","displayValue":"","height":"25px","readonly":true,"showing":false,"width":"317px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
fSACustName: ["wm.Text", {"border":"0","caption":"Customer Name:","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"500px"}, {"onchange":"submitSA","onfocus":"fSACustNameFocus"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctFullname.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
fAcctName: ["wm.Text", {"border":"0","caption":"Account Name:","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"500px"}, {"onchange":"submitSA","onfocus":"fAcctNameFocus"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctFullname.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
fSAAcctType: ["wm.Text", {"border":"0","caption":"Account Type:","displayValue":"","height":"25px","readonly":true,"width":"317px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctAcctType.displayValue","targetProperty":"dataValue"}, {}]
}]
}],
fSADepProdName: ["wm.Text", {"border":"0","caption":"Product Name:","displayValue":"","height":"25px","readonly":true,"width":"317px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.prodname","targetProperty":"dataValue"}, {}]
}]
}],
fSAAmount: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Amount:","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"showing":false,"width":"300px"}, {"onchange":"submitSA"}],
fSACurrency: ["wm.Text", {"border":"0","caption":"Currency:","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"221px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.currency","targetProperty":"dataValue"}, {}]
}]
}],
pnlCheckRange: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${acctProdType.selectedItem.checkbookind}==true","targetProperty":"showing"}, {}]
}],
fSAcheckFrom: ["wm.Text", {"border":"0","caption":"Check Series From:","dataValue":undefined,"displayValue":"","height":"25px","width":"240px"}, {}],
fSAcheckTo: ["wm.Text", {"border":"0","caption":"To:","captionSize":"30px","dataValue":undefined,"displayValue":"","height":"25px","width":"140px"}, {}]
}]
}],
pnlFileup: ["wm.Panel", {"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"302px"}, {}, {
dojoFileUpload: ["wm.DojoFileUpload", {"buttonCaption":"Upload Image","height":"28px","operation":"uploadImageFile","useList":false,"width":"100px"}, {"onChange":"dojoFileUploadChange","onError":"dojoFileUploadError","onSuccess":"dojoFileUploadSuccess"}, {
input: ["wm.ServiceInput", {"type":"uploadImageFileInputs"}, {}]
}],
lblUpload: ["wm.Label", {"align":"left","caption":"Select file for upload","height":"28px","margin":"0,0,0,5","padding":"4","styles":{"color":"#000000"}}, {}]
}],
pnlButton: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnSubmitClick"}],
btnCancel: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Cancel","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnCancelClick"}]
}]
}]
}]
}]
}]
};

CSR_OPENACCT_TD_BACKUP.prototype._cssText = '';
CSR_OPENACCT_TD_BACKUP.prototype._htmlText = '';