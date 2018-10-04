dojo.declare("SYS_TXCODE_MAINTENANCE", wm.Page, {
start: function() {
this.svGetListTxcode.update();
},
"preferredDevice": "desktop",
btnSearchClick: function(inSender) {
this.svGetListTxcode.update();
},
btnAddClick: function(inSender) {
this.btnSetupSubmit.setCaption("Save");
this.dlgSetupNewEdit.show();
//        this.dlgSetupNewEdit.setValue("title", "SETUP NEW "+this.fCodename.getDisplayValue());
//        this.fCdname.setValue("required",true);
//        this.fCdname.setValue("readonly",false);
//        if(this.fCodename.getDataValue()!=null){
//            this.fCdname.setDataValue(this.fCodename.getDataValue());
//        }
},
btnSetupCloseClick: function(inSender) {
this.pnlSetup.clearData();
this.dlgSetupNewEdit.hide();
},
txCodeGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
this.btnSetupSubmit.setCaption("Update");
this.dlgSetupNewEdit.show();
//        this.dlgSetupNewEdit.setValue("title", "EDIT "+selectedItem.getData().codename);
},
btnSetupSubmitClick: function(inSender) {
console.log(inSender.caption);
if(inSender.caption == "Save"){
this.notiAdd.update();
}else{
this.notiUpdate.update();
}
},
svNewUpdateResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue == "updated"){
app.toastSuccess("transaction code updated", 3000);
this.dlgSetupNewEdit.hide();
this.svGetListTxcode.update();
this.pnlSetup.clearData();
}else if(inSender.getData().dataValue == "created"){
app.toastSuccess("new transaction code added", 3000);
this.dlgSetupNewEdit.hide();
this.svGetListTxcode.update();
this.pnlSetup.clearData();
}else{
app.toastError("Error", 3000);
}
},
_end: 0
});

SYS_TXCODE_MAINTENANCE.widgets = {
svCodenameList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCodename","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getCodenameInputs"}, {}]
}],
svGetListTxcode: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListTxcode","service":"UtilFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getListTxcodeInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fCodename.dataValue","targetProperty":"codename"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtSearch.dataValue","targetProperty":"search"}, {}]
}]
}]
}],
notiAdd: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svNewUpdate"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"add new transaction code?\"","targetProperty":"text"}, {}]
}]
}]
}],
svNewUpdate: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addOrUpdateTxcode","service":"UtilFacade"}, {"onResult":"svNewUpdateResult"}, {
input: ["wm.ServiceInput", {"type":"addOrUpdateTxcodeInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fServiceCharge.dataValue","targetProperty":"record.desc1"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fDesc2.dataValue","targetProperty":"record.desc2"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"fTxName.dataValue","targetProperty":"record.codevalue"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"fTxcode.dataValue","targetProperty":"record.codename"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fTxcode.dataValue","targetProperty":"code.txcode"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"fTxName.dataValue","targetProperty":"code.txname"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"fServiceCharge.dataValue","targetProperty":"code.servicecharge"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"txCodeGrid.selectedItem.id","targetProperty":"code.id"}, {}]
}]
}]
}],
notiUpdate: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svNewUpdate"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"update transaction code?\"","targetProperty":"text"}, {}]
}]
}]
}],
dlgSetupNewEdit: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"180px","height":"180px","title":"","width":"400px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
pnlSetup: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"130px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
fId: ["wm.Text", {"border":"0","caption":"Id:","captionSize":"80px","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"showing":false,"width":"300px"}, {}],
fTxcode: ["wm.Text", {"border":"0","caption":"Transaction Code:","captionSize":"120px","displayValue":"","height":"25px","width":"95%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txCodeGrid.selectedItem.txcode","targetProperty":"dataValue"}, {}]
}]
}],
fTxName: ["wm.Text", {"border":"0","caption":"Transaction Name:","captionSize":"120px","displayValue":"","height":"25px","width":"95%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txCodeGrid.selectedItem.txname","targetProperty":"dataValue"}, {}]
}]
}],
fServiceCharge: ["wm.Number", {"border":"0","caption":"Service Charge:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"width":"95%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txCodeGrid.selectedItem.servicecharge","targetProperty":"dataValue"}, {}]
}]
}]
}],
panel3: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnSetupSubmit: ["wm.Button", {"border":"1","caption":undefined,"desktopHeight":"24px","height":"24px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnSetupSubmitClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"pnlSetup.invalid","targetProperty":"disabled"}, {}]
}]
}],
btnSetupClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"24px","height":"24px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnSetupCloseClick"}]
}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlMain: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"border":"0,0,0,0","borderColor":"","caption":"Transaction Code Maintenance","padding":"4","styles":{"fontWeight":"bolder","fontSize":"13px","color":"#6a696f","textDecoration":"underline"},"width":"300px"}, {}],
spacer1: ["wm.Spacer", {"height":"10px","width":"96px"}, {}],
panel1: ["wm.Panel", {"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,5","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
txtSearch: ["wm.Text", {"border":"0","caption":"Search:","captionSize":"80px","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}],
btnSearch: ["wm.Button", {"border":"1","caption":"Search","desktopHeight":"24px","height":"24px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnSearchClick"}],
btnAdd: ["wm.Button", {"border":"1","caption":"Add","desktopHeight":"24px","height":"24px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnAddClick"}]
}],
pnlGrid: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,5,0,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
txCodeGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Codevalue","width":"50%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Transaction Code: \" + ${txcode} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Transaction Name: \" + ${txname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Service Charge: \" + ${wm.runtimeId}.formatCell(\"servicecharge\", ${servicecharge}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"txcode","title":"Transaction Code","width":"20%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txname","title":"Transaction Name","width":"50%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"servicecharge","title":"Service Charge","width":"30%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false}
],"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"width":"90%"}, {"onClick":"txCodeGridClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetListTxcode","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

SYS_TXCODE_MAINTENANCE.prototype._cssText = '';
SYS_TXCODE_MAINTENANCE.prototype._htmlText = '';