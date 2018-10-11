dojo.declare("TLR_ACCTBALINQ", wm.Page, {
start: function() {
this.btnJournal.setCaption("View Ledger");
},
"preferredDevice": "desktop",
svSearchAccountResult: function(inSender, inDeprecated) {
console.log(inSender.getData());
if(inSender.getData().result=="1"){
if(this.svSearchAccount.getData().inquiry.prodcode == "10"){
this.dojoGrid1.setColumnShowing("checkacctno", true);
}else{
this.dojoGrid1.setColumnShowing("checkacctno", false);
}
this.svFreezeInfo.update();
}
else if(inSender.getData().result=="0"){
app.toastError("Account Does Not Found/Exist!", 3000);
this.layer1.activate();
}
},
btnJournalClick: function(inSender) {
if(this.layer2.isActive()){
this.btnJournal.setCaption("View Ledger");
this.layer1.activate();
}else{
this.layer2.activate();
this.btnJournal.setCaption("Close Ledger");
}
},
btnHomeClick: function(inSender) {
if(this.app.varRole.getValue("dataValue")=="csr"){
wm.Page.getPage("Main").pageContainer1.setPageName("");
} else {
wm.Page.getPage("Main").pageContainer1.setPageName("Home");
}
},
fAcctNoFocus: function(inSender) {
this.fAcctName.setDataValue("");
this.fAcctName.setValue("required", false);
this.fAcctNo.setValue("required", true);
},
fAcctNameFocus: function(inSender) {
this.fAcctNo.setDataValue("");
this.fAcctNo.setValue("required", false);
this.fAcctName.setValue("required", true);
},
btnSearchClick: function(inSender) {
if(this.fAcctNo.getDataValue()!=null){
this.svSearchAccount.update();
}else if(this.fAcctName.getDataValue()!=null){
this.svSearchByName.update();
}
},
svSearchByNameResult: function(inSender, inDeprecated) {
this.searchResultDialog.show();
console.log(inSender);
},
btnCloseClick: function(inSender) {
this.searchResultDialog.hide();
},
gridResultNameGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
console.log(rowData.acctno);
this.svSearchAccount.input.setValue("acctno", rowData.acctno);
this.svSearchAccount.update();
this.searchResultDialog.hide();
this.fAcctNo.setDataValue(rowData.acctno);
this.fAcctName.setDataValue(rowData.name);
},
dojoGrid1DebitFormat: function( inValue, rowId, cellId, cellField, cellObj, rowObj) {
var val = inValue;
if(inValue==0.00){
val = "";
}else{
val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
return val
},
dojoGrid1TxvaldtFormat: function( inValue, rowId, cellId, cellField, cellObj, rowObj) {
console.log(inValue);
return newDate(Date.parse(inValue))
},
svOffAlertResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue==1){
app.alert("Alert turned off");
this.pnlAlert.setValue("showing", false);
}else if(inSender.getData().dataValue==503){
app.alert("Host is not available");
}else{
app.alert("Error in routine");
}
},
btnAlertClick: function(inSender) {
this.svOffAlert.update();
},
acctNoATAHelpClick: function(inSender) {
if(this.acctNoATA.getDataValue()!=""){
this.dlgATAInfo.show();
}
},
btnCloseATAClick: function(inSender) {
this.dlgATAInfo.hide();
},
dojoGrid1GridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
this.svErrorCorrect.input.setValue("txrefno", rowData.txrefno);
app.confirm("Apply Error Correct?", false,
dojo.hitch(this, function() {
this.svErrorCorrect.update();
}),
dojo.hitch(this, function() {
app.toastInfo("Error Correct Cancelled", 5);
}), "Proceed", "Cancel");
},
svErrorCorrectResult: function(inSender, inDeprecated) {
console.log(inSender.getData());
if(inSender.getData().dataValue=="0"){
app.alert("Error in routine!");
}else if(inSender.getData().dataValue=="1") {
app.alert("Error Correct Successful!");
this.svSearchAccount.update();
}
},
dojoGrid1Show: function(inSender) {
console.log(this.svSearchAccount.getData().inquiry.prodcode + " prodcode");
if(this.svSearchAccount.getData().inquiry.prodcode == "10"){
this.dojoGrid1.setColumnShowing("checkacctno", true);
}else{
this.dojoGrid1.setColumnShowing("checkacctno", false);
}
},
svFreezeInfoResult: function(inSender, inDeprecated) {
console.log(inSender.getData());
if(inSender.getData()==null){
this.lblFreezeResult.setShowing(false);
}else{
this.lblFreezeResult.setShowing(true);
}
},
btnCloseFloatitemsClick: function(inSender) {
this.desFloatItems.hide();
},
btnViewFloatClick: function(inSender) {
this.svGetFloatItems.update();
this.desFloatItems.show();
},
_end: 0
});

TLR_ACCTBALINQ.widgets = {
svSearchAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"accountInquiry","service":"FinTxFacade"}, {"onResult":"svSearchAccountResult"}, {
input: ["wm.ServiceInput", {"type":"accountInquiryInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"acctno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fAcctName.dataValue","targetProperty":"name"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}]
}],
svSearchByName: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"accountInquiryName","service":"FinTxFacade"}, {"onResult":"svSearchByNameResult"}, {
input: ["wm.ServiceInput", {"type":"accountInquiryNameInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctName.dataValue","targetProperty":"name"}, {}]
}]
}]
}],
svOffAlert: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"acctAlertOff","service":"AccountFacade"}, {"onResult":"svOffAlertResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"acctAlertOffInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"accountno"}, {}]
}]
}]
}],
svErrorCorrect: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"errorCorrect","service":"FinTxFacade"}, {"onResult":"svErrorCorrectResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"errorCorrectInputs"}, {}]
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
svGetFloatItems: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getFloatItems","service":"AccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getFloatItemsInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.accountno","targetProperty":"acctno"}, {}]
}]
}]
}],
searchResultDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","title":"Search Result By Name"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
gridResultName: ["wm.DojoGrid", {"_classes":{"domNode":["cDojoGrid"]},"border":"0","columns":[
{"show":true,"field":"productCode","title":"Product Name","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"acctno","title":"Acctno","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"btn","title":"Action","width":"100px","align":"center","formatFunc":"wm_button_formatter","editorProps":null,"expression":"\"Select\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Product Name: \" + ${productCode} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Acctno: \" + ${acctno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${name}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.casa.fintx.forms.InquiryNameList","height":"100%","localizationStructure":{},"margin":"0,0,5,0","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {"onGridButtonClick":"gridResultNameGridButtonClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchByName","targetProperty":"dataSet"}, {}]
}]
}],
panel9: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label3: ["wm.Label", {"padding":"4","styles":{"color":"#030303"},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Result : \"+${svSearchByName.count}","targetProperty":"caption"}, {}]
}]
}],
btnClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"30px","height":"30px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseClick"}]
}]
}]
}],
dlgATAInfo: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget1","desktopHeight":"238px","height":"238px","title":"ATA Account Details","width":"650px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
panel10: ["wm.Panel", {"height":"160px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.result}==1","targetProperty":"showing"}, {}]
}],
panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"350px"}, {}, {
acctNo1: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.atainq.accountno","targetProperty":"dataValue"}, {}]
}]
}],
acctName1: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.atainq.name","targetProperty":"dataValue"}, {}]
}]
}],
acctDtbk1: ["wm.Date", {"border":"0","caption":"Date Opened:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.atainq.dateopened","targetProperty":"dataValue"}, {}]
}]
}],
acctProd1: ["wm.Text", {"border":"0","caption":"Product","captionSize":"120px","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.atainq.product","targetProperty":"dataValue"}, {}]
}]
}],
acctDtlast1: ["wm.Date", {"border":"0","caption":"Last Date Update:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.atainq.datelast","targetProperty":"dataValue"}, {}]
}]
}],
acctPostRestric1: ["wm.Text", {"border":"0","caption":"Posting Restriction:","captionSize":"120px","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.atainq.posttx","targetProperty":"dataValue"}, {}]
}]
}]
}],
spacer11: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}],
panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"270px"}, {}, {
acctStatus1: ["wm.Text", {"border":"0","caption":"Account Status:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.atainq.accountstatus","targetProperty":"dataValue"}, {}]
}]
}],
acctAvailablebal1: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Book Balance:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.atainq.accountbal","targetProperty":"dataValue"}, {}]
}]
}],
acctFloatamt1: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Float Amount:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.atainq.floatamount","targetProperty":"dataValue"}, {}]
}]
}],
acctHoldamt1: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Hold Amount:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.atainq.holdamount","targetProperty":"dataValue"}, {}]
}]
}],
acctTotalamt1: ["wm.Number", {"border":"0","caption":"Available Balance:","captionSize":"120px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${acctAvailablebal1.dataValue}-(${acctHoldamt1.dataValue}+${acctFloatamt1.dataValue})","targetProperty":"dataValue"}, {}]
}]
}],
acctNoATA1: ["wm.Text", {"border":"0","caption":"ATA Account No:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"showing":false,"styles":{}}, {"onHelpClick":"acctNoATA1HelpClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.accountnoata","targetProperty":"dataValue"}, {}]
}]
}]
}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"35px","height":"35px"}, {}, {
btnCloseATA: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"24px","height":"24px","margin":"0,0,0,0","styles":{}}, {"onclick":"btnCloseATAClick"}]
}]
}],
desFloatItems: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar1","containerWidgetId":"containerWidget2","title":"Float Items","width":"740px"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
GridFloatItems: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"brstn","title":"BRSTN","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"checkamount","title":"Check Amount","width":"80px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":true,"field":"checkdate","title":"Check Date","width":"100%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"short","dateType":"date"},"mobileColumn":false},
{"show":true,"field":"checknumber","title":"Check No.","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"checktype","title":"Check Type","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"clearingdate","title":"Clearing Date","width":"100%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"short","dateType":"date"},"mobileColumn":false},
{"show":false,"field":"clearingdays","title":"Clearingdays","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"islateclearing","title":"Islateclearing","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"status","title":"Status","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"accountno","title":"Accountno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"txrefno","title":"Txrefno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"BRSTN: \" + ${brstn} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Check Amount: \" + ${wm.runtimeId}.formatCell(\"checkamount\", ${checkamount}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Check Date: \" + ${wm.runtimeId}.formatCell(\"checkdate\", ${checkdate}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Check No.: \" + ${checknumber}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Check Type: \" + ${checktype}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Clearing Date: \" + ${wm.runtimeId}.formatCell(\"clearingdate\", ${clearingdate}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.smslai_eoddb.data.Tbchecksforclearing","height":"100%","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetFloatItems","targetProperty":"dataSet"}, {}]
}]
}]
}],
buttonBar1: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"34px","height":"34px"}, {}, {
btnCloseFloatitems: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"23px","height":"23px","width":"80px"}, {"onclick":"btnCloseFloatitemsClick"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","margin":"10,40,0,40","styles":{},"verticalAlign":"top"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Deposit Account Balance Inquiry","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel3: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,3","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"100px","displayValue":"","emptyValue":"null","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"300px"}, {"onfocus":"fAcctNoFocus"}],
label2: ["wm.Label", {"align":"center","caption":"or","padding":"4","styles":{"color":"#0d0c0c"},"width":"29px"}, {}],
fAcctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"100px","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"300px"}, {"onfocus":"fAcctNameFocus"}],
spacer1: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}],
btnSearch: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Search","desktopHeight":"23px","height":"23px","styles":{},"width":"80px"}, {"onclick":"btnSearchClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel3.invalid","targetProperty":"disabled"}, {}]
}]
}],
lblFreezeResult: ["wm.Label", {"caption":"<b><font color='red'>This account is under freeze order!","padding":"4","showing":false}, {}]
}],
panel4: ["wm.Panel", {"height":"217px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"1199px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.result}==1","targetProperty":"showing"}, {}]
}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"377px"}, {}, {
acctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.inquiry.accountno}","targetProperty":"dataValue"}, {}]
}]
}],
acctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.name","targetProperty":"dataValue"}, {}]
}]
}],
acctDtbk: ["wm.Date", {"border":"0","caption":"Date Opened:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.dateopened","targetProperty":"dataValue"}, {}]
}]
}],
acctProd: ["wm.Text", {"border":"0","caption":"Product","captionSize":"120px","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.product","targetProperty":"dataValue"}, {}]
}]
}],
acctDtlast: ["wm.Date", {"border":"0","caption":"Last Date Update:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.datelast","targetProperty":"dataValue"}, {}]
}]
}],
acctPostRestric: ["wm.Text", {"border":"0","caption":"Posting Restriction:","captionSize":"120px","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.posttx","targetProperty":"dataValue"}, {}]
}]
}],
spacer3: ["wm.Spacer", {"height":"28px","width":"96px"}, {}],
btnViewFloatPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnViewFloat: ["wm.Button", {"border":"1","caption":"View Float Items","desktopHeight":"23px","height":"23px","margin":"0,0,0,0","styles":{},"width":"120px"}, {"onclick":"btnViewFloatClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${acctNo.dataValue} == null || ${acctNo.dataValue} == \"\"","targetProperty":"disabled"}, {}]
}]
}]
}]
}],
spacer10: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}],
panel6: ["wm.Panel", {"height":"207px","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"270px"}, {}, {
acctAvailablebal: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Book Balance:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.accountbal","targetProperty":"dataValue"}, {}]
}]
}],
acctBpapproved: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Approved BP Line:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.approvedbpline","targetProperty":"dataValue"}, {}]
}]
}],
acctBpavailed: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Availed BP Line:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.availedbpline","targetProperty":"dataValue"}, {}]
}]
}],
acctStatus: ["wm.Text", {"border":"0","caption":"Account Status:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.accountstatus","targetProperty":"dataValue"}, {}]
}]
}],
acctNoATA: ["wm.Text", {"border":"0","caption":"ATA Account No:","captionSize":"120px","displayValue":"","emptyValue":"emptyString","height":"25px","helpText":"View Details","margin":"0,0,0,0","placeHolder":undefined,"readonly":true,"styles":{},"width":"90%"}, {"onHelpClick":"acctNoATAHelpClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.accountnoata","targetProperty":"dataValue"}, {}]
}]
}],
spacer2: ["wm.Spacer", {"height":"45px","width":"96px"}, {}],
panel7: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
btnJournal: ["wm.Button", {"border":"1","caption":"","desktopHeight":"23px","height":"23px","margin":"0,0,0,0","styles":{},"width":"150px"}, {"onclick":"btnJournalClick"}],
btnHome: ["wm.Button", {"border":"1","caption":"Home","desktopHeight":"23px","height":"23px","margin":"0,0,0,10","styles":{},"width":"81px"}, {"onclick":"btnHomeClick"}]
}]
}],
pnlRight: ["wm.Panel", {"height":"100%","horizontalAlign":"center","styles":{},"verticalAlign":"top","width":"270px"}, {}, {
acctFloatamt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Float Amount:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.floatamount","targetProperty":"dataValue"}, {}]
}]
}],
acctHoldamt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Hold Amount:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.holdamount","targetProperty":"dataValue"}, {}]
}]
}],
acctEarmarkamt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Earmark Amount:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.earmarkbal","targetProperty":"dataValue"}, {}]
}]
}],
acctGarnishedamt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Garnished Amount:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.garnishedbal","targetProperty":"dataValue"}, {}]
}]
}],
acctTotalamt: ["wm.Number", {"border":"0","caption":"Available Balance:","captionSize":"120px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${acctAvailablebal.dataValue}-(${acctHoldamt.dataValue}+${acctFloatamt.dataValue}+${acctEarmarkamt.dataValue}+${acctGarnishedamt.dataValue})","targetProperty":"dataValue"}, {}]
}]
}],
acctMTD: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"MTD-ADB:","captionSize":"120px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
acctYTD: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"YTD-ADB:","captionSize":"120px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
acctAccruedInt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Accrued Interest:","captionSize":"120px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}]
}],
pnlAlert: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"270px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.inquiry.alertflag}==1||${svSearchAccount.inquiry.alertflag}==\"1\"","targetProperty":"showing"}, {}]
}],
fAlertMessage: ["wm.LargeTextArea", {"_classes":{"domNode":["CustomArea"]},"border":"0","caption":"Alert Message:","captionSize":"20px","desktopHeight":"63.05263px","displayValue":"","height":"63.05263px","margin":"5,0,0,0","padding":"3","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.alertmessage","targetProperty":"dataValue"}, {}]
}]
}],
fAlertLevel: ["wm.Number", {"border":"0","caption":"Alert Level:","captionSize":"70px","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.alertlevel","targetProperty":"dataValue"}, {}]
}]
}],
btnAlert: ["wm.Button", {"border":"1","caption":"Off Alert","desktopHeight":"24px","height":"24px","width":"81px"}, {"onclick":"btnAlertClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"(${app.varRole.dataValue}==\"teller\"&&${svSearchAccount.inquiry.alertlevel}==1) ||\n(${app.varRole.dataValue}==\"csr\"&&(${svSearchAccount.inquiry.alertlevel}==2||${svSearchAccount.inquiry.alertlevel}==1))\n","targetProperty":"showing"}, {}]
}]
}]
}]
}],
panel8: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0,0,10,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.Layers", {"defaultLayer":0,"styles":{}}, {}, {
layer1: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
layer2: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"layer2","horizontalAlign":"left","styles":{},"themeStyleType":"","verticalAlign":"top"}, {}, {
dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"txvaldt","title":"Transaction Date","width":"140px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"useLocalTime":true,"datePattern":"MM/dd/yyyy","timePattern":"HH:mm:ss","formatLength":"short","dateType":"date and time"},"mobileColumn":false},
{"show":true,"field":"txcode","title":"Transaction","width":"170px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"errorcorrect","title":"EC","width":"50px","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"txbrrefno","title":"Branch Ref No","width":"130px","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"txrefno","title":"Reference No","width":"130px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"unit","title":"Branch Id","width":"80px","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":false,"field":"txamt","title":"Amount","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":true,"field":"debit","title":"Debit","width":"80px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"editorProps":null,"expression":"if (${debit}==null){\n\t\"-\"\n} else {\n\t${debit}\n}","mobileColumn":false},
{"show":true,"field":"credit","title":"Credit","width":"80px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"editorProps":null,"expression":"if (${credit}==null){\n\t\"-\"\n} else {\n\t${credit}\n}","mobileColumn":false},
{"show":true,"field":"outbal","title":"Outbal","width":"120px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Transaction Date: \" + ${wm.runtimeId}.formatCell(\"txvaldt\", ${txvaldt}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Transaction: \" + ${txcode}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"EC: \" + ${errorcorrect}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Branch Ref No: \" + ${txbrrefno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Reference No: \" + ${txrefno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Branch Id: \" + ${unit}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Debit: \" + ${wm.runtimeId}.formatCell(\"debit\", ${debit}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Credit: \" + ${wm.runtimeId}.formatCell(\"credit\", ${credit}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Outbal: \" + ${wm.runtimeId}.formatCell(\"outbal\", ${outbal}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Check No.: \" + ${checkacctno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btnEC\", ${btnEC}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"checkacctno","title":"Check No.","width":"55px","align":"center","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"btnEC","title":"Action","width":"100px","align":"center","formatFunc":"wm_button_formatter","expression":"if(new Date(app.svBusinessDt.getData().dataValue).toDateString()\n=== new Date(${txvaldt}).toDateString()){\n\t\"Error Correct\"\n}else{\n\t\"\"\n}\n","isCustomField":true,"mobileColumn":false}
],"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"sortingEnabled":false,"styles":{}}, {"onGridButtonClick":"dojoGrid1GridButtonClick","onShow":"dojoGrid1Show"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.histlist","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
}]
};

TLR_ACCTBALINQ.prototype._cssText = '';
TLR_ACCTBALINQ.prototype._htmlText = '';