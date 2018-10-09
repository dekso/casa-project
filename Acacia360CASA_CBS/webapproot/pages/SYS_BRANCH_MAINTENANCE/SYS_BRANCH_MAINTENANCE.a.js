dojo.declare("SYS_BRANCH_MAINTENANCE", wm.Page, {
start: function() {
this.svBranchList.update();
this.codeBrStat.update();
this.codeRegion.update();
},
"preferredDevice": "desktop",
btnAddClick: function(inSender) {
},
btnCancelClick: function(inSender) {
this.desBranchSetup.hide();
this.formPanel1.clearData();
this.BranchGrid.deselectAll();
},
btnSaveClick: function(inSender) {
this.btnCancelClick(inSender);
},
btnUpdateClick: function(inSender) {
this.btnSaveClick(inSender);
},
svAddBranchResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue == "created"){
app.toastSuccess("Branch added successfully", 3000);
this.desBranchSetup.hide();
this.formPanel1.clearData();
this.svBranchList.update();
}else if(inSender.getData().dataValue == "updated"){
app.toastSuccess("Branch updated successfully", 3000);
this.desBranchSetup.hide();
this.formPanel1.clearData();
this.svBranchList.update();
}else{
app.toastError("Error", 3000);
}
},
BranchGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
this.desBranchSetup.show();
this.slcBrstat.setValue("required", true)
},
_end: 0
});

SYS_BRANCH_MAINTENANCE.widgets = {
svBranchList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getAllBranch","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getAllBranchInputs"}, {}]
}],
svAddBranch: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addBranch","service":"UtilFacade"}, {"onResult":"svAddBranchResult"}, {
input: ["wm.ServiceInput", {"type":"addBranchInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtBrname.dataValue","targetProperty":"unit.brname"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"dtCurrBusinessDate.dataValue","targetProperty":"unit.currbusinessdate"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"txtBradd.dataValue","targetProperty":"unit.braddress"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"txtBrid.dataValue","targetProperty":"unit.brid"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"dtNextBusinessDate.dataValue","targetProperty":"unit.nextbusinessdate"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"slcBrstat.dataValue","targetProperty":"unit.brstatus"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"BranchGrid.selectedItem.id","targetProperty":"unit.id"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtMCacctno.dataValue","targetProperty":"unit.mcacctno"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"txtGCacctno.dataValue","targetProperty":"unit.gcacctno"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"slcRegion.selectedItem.areacode","targetProperty":"unit.region"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"slcAreacode.selectedItem.areadesc","targetProperty":"unit.areacode"}, {}]
}]
}]
}],
notiAdd: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svAddBranch"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"add new branch?\"","targetProperty":"text"}, {}]
}]
}]
}],
codeBrStat: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListofCodesPerCodename","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getListofCodesPerCodenameInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"BRSTATUS\"","targetProperty":"codename"}, {}]
}]
}]
}],
notiUpdate: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svAddBranch"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"edit branch record?\"","targetProperty":"text"}, {}]
}]
}]
}],
codeRegion: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListOfStateByCountry","service":"CountryFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getListOfStateByCountryInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PH\"","targetProperty":"code"}, {}]
}]
}]
}],
codeArea: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListOfAreaByRegion","service":"CountryFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getListOfAreaByRegionInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"slcRegion.selectedItem.areacode","targetProperty":"region"}, {}]
}]
}]
}],
desBranchSetup: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"320px","height":"320px","styles":{},"title":undefined,"width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
formPanel1: ["wm.FormPanel", {"height":"100%"}, {}, {
txtBrid: ["wm.Text", {"border":"0","caption":"Branch ID:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"BranchGrid.selectedItem.brid","targetProperty":"dataValue"}, {}]
}]
}],
txtBrname: ["wm.Text", {"border":"0","caption":"Branch Name:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"BranchGrid.selectedItem.brname","targetProperty":"dataValue"}, {}]
}]
}],
slcRegion: ["wm.SelectMenu", {"border":"0","caption":"Region:","captionSize":"150px","dataField":"areacode","dataType":"com.gldb.data.Tbcountry","displayField":"areacode","displayValue":"","height":"25px","width":"450px"}, {"onchange":"codeArea"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"BranchGrid.selectedItem.region","targetProperty":"dataValue"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"codeRegion","targetProperty":"dataSet"}, {}]
}]
}],
slcAreacode: ["wm.SelectMenu", {"border":"0","caption":"Area Code:","captionSize":"150px","dataField":"areadesc","dataType":"com.gldb.data.Tbcountry","displayField":"areadesc","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"codeArea","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"BranchGrid.selectedItem.areacode","targetProperty":"dataValue"}, {}]
}]
}],
txtBradd: ["wm.Text", {"border":"0","caption":"Branch Address:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"BranchGrid.selectedItem.braddress","targetProperty":"dataValue"}, {}]
}]
}],
slcBrstat: ["wm.SelectMenu", {"border":"0","caption":"Branch Status:","captionSize":"150px","dataField":"codevalue","dataType":"com.gl.util.forms.CodetableForm","displayField":"desc1","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"codeBrStat","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"BranchGrid.selectedItem.brstatus","targetProperty":"dataValue"}, {}]
}]
}],
txtCurrency: ["wm.Text", {"border":"0","caption":"Currency:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","showing":false,"width":"450px"}, {}],
dtCurrBusinessDate: ["wm.Date", {"border":"0","caption":"Current Business Date:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()-1","targetProperty":"minimum"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"BranchGrid.selectedItem.currbusinessdate","targetProperty":"dataValue"}, {}]
}]
}],
dtNextBusinessDate: ["wm.Date", {"border":"0","caption":"Next Business Date:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date() + 1","targetProperty":"minimum"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"BranchGrid.selectedItem.nextbusinessdate","targetProperty":"dataValue"}, {}]
}]
}],
txtMCacctno: ["wm.Text", {"border":"0","caption":"MC Account No.:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"BranchGrid.selectedItem.mcacctno","targetProperty":"dataValue"}, {}]
}]
}],
txtGCacctno: ["wm.Text", {"border":"0","caption":"GC Account No.:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"BranchGrid.selectedItem.gcacctno","targetProperty":"dataValue"}, {}]
}]
}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"31px"}, {}, {
btnSave: ["wm.Button", {"border":"1","caption":"Save","height":"20px","width":"80px"}, {"onclick":"notiAdd"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${BranchGrid.emptySelection}","targetProperty":"showing"}, {}]
}]
}],
btnUpdate: ["wm.Button", {"border":"1","caption":"Update","height":"20px","width":"80px"}, {"onclick":"notiUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${BranchGrid.isRowSelected}","targetProperty":"showing"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"formPanel1.invalid","targetProperty":"disabled"}, {}]
}]
}],
btnCancel: ["wm.Button", {"border":"1","caption":"Cancel","height":"20px"}, {"onclick":"btnCancelClick"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlMain: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"border":"0,0,0,0","borderColor":"","caption":"Branch Maintenance","padding":"4","styles":{"fontWeight":"bolder","fontSize":"13px","color":"#6a696f","textDecoration":"underline"}}, {}],
spacer1: ["wm.Spacer", {"height":"10px","width":"96px"}, {}],
btnAdd: ["wm.Button", {"border":"1","caption":"Add","desktopHeight":"24px","height":"24px","margin":"0,0,0,5","styles":{},"width":"90px"}, {"onclick":"desBranchSetup.show"}],
pnlGrid: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,5,0,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
BranchGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Branch ID: \" + ${brid} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Branch Name: \" + ${brname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Branch Address: \" + ${braddress}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Branch Status: \" + ${wm.runtimeId}.formatCell(\"brstatus\", ${brstatus}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"id","title":"Id","width":"50%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"brid","title":"Branch ID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"brname","title":"Branch Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"braddress","title":"Branch Address","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"brstatus","title":"Branch Status","width":"100%","align":"left","formatFunc":"","expression":"if(${brstatus} ==\"1\"){\n\t\"Open\"\n}else{\n\t\"Closed\"\n}","mobileColumn":false},
{"show":false,"field":"currency","title":"Currency","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"currbusinessdate","title":"Currbusinessdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"nextbusinessdate","title":"Nextbusinessdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"sequser","title":"Sequser","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"seqyy","title":"Seqyy","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"updatedby","title":"Updatedby","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"instcode","title":"Instcode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"seqno","title":"Seqno","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"seqmerch","title":"Seqmerch","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"seqtdc","title":"Seqtdc","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"seqoverride","title":"Seqoverride","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"region","title":"Region","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"areacode","title":"Areacode","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"mcacctno","title":"Mcacctno","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"gcacctno","title":"Gcacctno","width":"100%","displayType":"Text","align":"left","formatFunc":""}
],"height":"100%","localizationStructure":{},"margin":"5,0,0,0","minDesktopHeight":60,"singleClickEdit":true,"styles":{},"width":"90%"}, {"onClick":"BranchGridClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchList","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

SYS_BRANCH_MAINTENANCE.prototype._cssText = '';
SYS_BRANCH_MAINTENANCE.prototype._htmlText = '';