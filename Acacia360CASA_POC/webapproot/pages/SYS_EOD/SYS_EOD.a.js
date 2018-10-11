dojo.declare("SYS_EOD", wm.Page, {
start: function() {
this.svGetBusinessDate.update();
this.svGetListofBranches.update();
},
"preferredDevice": "desktop",
svFindAllLogsResult: function(inSender, inDeprecated) {
//        console.log(inSender.getData());
if(inSender.getData()!=null){
this.btnRollDown.setDisabled(inSender.getData().eodForm.rolldown>0?true:false);
this.btnPCHC.setDisabled(inSender.getData().eodForm.pchcClearing>0?true:false);
this.btnBatch.setDisabled(inSender.getData().eodForm.batchProcessing>0?true:false);
this.btnEOD.setDisabled(inSender.getData().eodForm.eod>0?true:false);
}
},
btnClick: function(inSender) {
if(inSender.name=="btnRollDown"){
this.svRunEOD.input.setValue("module",0);
this.dlgListOfBranches.show();
}else{
if(inSender.name=="btnPCHC"){
this.svRunEOD.input.setValue("module",1);
}else if(inSender.name=="btnBatch"){
this.svRunEOD.input.setValue("module",2);
}else if(inSender.name=="btnEOD"){
this.svRunEOD.input.setValue("module",3);
}
app.confirm("Are you sure you want to run " + inSender.caption + "?"
, false, function(){wm.Page.getPage("SYS_EOD").svRunEOD.update();});
}
},
btnDoneClick: function(inSender) {
var branchcodes = "";
if(!this.gridBranches.emptySelection){
this.gridBranches.selectedItem.getData().forEach((el, index) =>
{
branchcodes = branchcodes + "'" + el.brid + String(index+1==this.gridBranches.selectedItem.getCount()?"'":"',");
});
}
this.svRunEOD.input.setValue("branchcodes",branchcodes);
app.confirm("Are you sure you want to run Roll Down?"
, false, function(){wm.Page.getPage("SYS_EOD").dlgListOfBranches.hide();wm.Page.getPage("SYS_EOD").svRunEOD.update();});
},
gridBranchesSelect: function(inSender) {
var branchnames = "";
if(!this.gridBranches.emptySelection){
this.gridBranches.selectedItem.getData().forEach((el, index) =>
{
branchnames = branchnames + el.brname + String(index+1==this.gridBranches.selectedItem.getCount()?"":",");
});
}
this.lblSelectedItems.setCaption("<b>Selected Items : </b><i>" + branchnames);
},
svRunEODResult: function(inSender, inDeprecated) {
if(inSender.getData()!=null || inSender.getData!=0){
app.toastSuccess("Process Completed.");
}else{
app.toastError("Process Failed.");
}
this.svFindAllLogs.update();
},
_end: 0
});

SYS_EOD.widgets = {
varCheckType: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"MC\",\"dataValue\":\"1\"},{\"name\":\"GC\",\"dataValue\":\"0\"}]","type":"EntryData"}, {}],
svFindAllLogs: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"findAllLogsFortheDay","service":"EODFacade"}, {"onResult":"svFindAllLogsResult"}, {
input: ["wm.ServiceInput", {"type":"findAllLogsFortheDayInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtPayableTo.dataValue","targetProperty":"accountno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtPayableTo.dataValue","targetProperty":"acctno"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"svGetBusinessDate.currbusinessdate","targetProperty":"currentbusinessdate"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}]
}],
svRunEOD: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"runEOD","service":"EODFacade"}, {"onResult":"svRunEODResult"}, {
input: ["wm.ServiceInput", {"type":"runEODInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtAccountNo.dataValue","targetProperty":"accountno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtAccountNo.dataValue","targetProperty":"acctno"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}]
}],
svGetBusinessDate: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getMainBranch","service":"EODFacade"}, {"onResult":"svFindAllLogs"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getMainBranchInputs"}, {}]
}],
svGetListofBranches: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getBranchList","service":"UtilFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getBranchListInputs"}, {}]
}],
dlgListOfBranches: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"350px","height":"350px","styles":{},"title":"Branches","width":"400px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
lblSelectedItems1: ["wm.Label", {"caption":"<b>Select branches to exclude from clearing.","padding":"4","singleLine":false,"styles":{"fontSize":"11px"},"width":"100%"}, {}],
gridBranches: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"brid","title":"Brid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"brname","title":"brname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"braddress","title":"Braddress","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"brstatus","title":"Brstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"currency","title":"Currency","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"currbusinessdate","title":"Currbusinessdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"nextbusinessdate","title":"Nextbusinessdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"seqno","title":"Seqno","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"sequser","title":"Sequser","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"seqmerch","title":"Seqmerch","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"seqtdc","title":"Seqtdc","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"seqoverride","title":"Seqoverride","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"seqyy","title":"Seqyy","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"updatedby","title":"Updatedby","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"instcode","title":"Instcode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Brname: \" + ${brname} +\n\"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.gldb.data.Tbunit","localizationStructure":{},"minDesktopHeight":60,"noHeader":true,"selectionMode":"checkbox","singleClickEdit":true}, {"onDeselect":"gridBranchesSelect","onSelect":"gridBranchesSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetListofBranches","targetProperty":"dataSet"}, {}]
}]
}],
lblSelectedItems: ["wm.Label", {"caption":"<b>Selected Items : ","height":"100%","padding":"4","singleLine":false,"styles":{"fontSize":"11px"},"width":"100%"}, {}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"31px"}, {}, {
btnCancel: ["wm.Button", {"border":"1","caption":"Cancel","height":"20px"}, {"onclick":"dlgListOfBranches.hide"}],
btnDone: ["wm.Button", {"border":"1","caption":"Done","height":"20px"}, {"onclick":"btnDoneClick"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
pnlContainer: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
onlTitle: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"caption":"End of Day Process","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"350px"}, {}]
}],
spacer5: ["wm.Spacer", {"height":"10px","styles":{},"width":"100%"}, {}],
pnlBusinessDate: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dtCurrentBusinessDate: ["wm.Date", {"border":"0","caption":"Current Business Date : ","captionSize":"150px","displayValue":"","height":"25px","readonly":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetBusinessDate.currbusinessdate","targetProperty":"dataValue"}, {}]
}]
}],
spacer4: ["wm.Spacer", {"height":"10px","styles":{},"width":"50px"}, {}],
dtNextBusinessDate: ["wm.Date", {"border":"0","caption":"Next Business Date : ","captionSize":"150px","displayValue":"","height":"25px","readonly":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetBusinessDate.nextbusinessdate","targetProperty":"dataValue"}, {}]
}]
}]
}],
spacer1: ["wm.Spacer", {"height":"10px","styles":{},"width":"100%"}, {}],
lblTitle1: ["wm.Label", {"caption":"List of Modules","padding":"4","styles":{"fontSize":"13px","fontWeight":"bolder","color":"#535050"},"width":"350px"}, {}],
spacer2: ["wm.Spacer", {"height":"10px","styles":{},"width":"100%"}, {}],
pnlBtnBar: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
btnRollDown: ["wm.Button", {"border":"1","caption":"Roll Down","desktopHeight":"25px","disabled":true,"height":"25px","styles":{"fontWeight":"bolder","fontSize":"12px"},"width":"120px"}, {"onclick":"btnClick"}],
btnPCHC: ["wm.Button", {"border":"1","caption":"PCHC Clearing","desktopHeight":"25px","disabled":true,"height":"25px","styles":{"fontWeight":"bolder","fontSize":"12px"},"width":"120px"}, {"onclick":"btnClick"}],
btnBatch: ["wm.Button", {"border":"1","caption":"Batch Processing","desktopHeight":"25px","disabled":true,"height":"25px","styles":{"fontWeight":"bolder","fontSize":"12px"},"width":"120px"}, {"onclick":"btnClick"}],
btnEOD: ["wm.Button", {"border":"1","caption":"End of Day","desktopHeight":"25px","disabled":true,"height":"25px","styles":{"fontWeight":"bolder","fontSize":"12px"},"width":"120px"}, {"onclick":"btnClick"}]
}],
spacer3: ["wm.Spacer", {"height":"10px","styles":{},"width":"100%"}, {}],
gridLogs: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"<center>Module: \" + ${modulename} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Timestamp: \" + ${wm.runtimeId}.formatCell(\"eventdate\", ${eventdate}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"<center>Description: \" + ${description}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"modulename","title":"<center>Module","width":"200px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"eventname","title":"Eventname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"eventdate","title":"Timestamp","width":"100px","align":"center","formatFunc":"wm_date_formatter","formatProps":{"useLocalTime":true,"dateType":"date and time"},"mobileColumn":false},
{"show":false,"field":"currentdate","title":"Currentdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"nextdate","title":"Nextdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"description","title":"<center>Description","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"errordescription","title":"Errordescription","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"uniquekey","title":"Uniquekey","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFindAllLogs.logList","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
};

SYS_EOD.prototype._cssText = '';
SYS_EOD.prototype._htmlText = '';