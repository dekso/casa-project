dojo.declare("SYS_FEES_AND_CHARGES_MAINTENANCE", wm.Page, {
start: function() {
this.svFeesandChargesList.update();
},
"preferredDevice": "desktop",
btnAddClick: function(inSender) {
},
btnCancelClick: function(inSender) {
this.desMerchantSetup.hide();
this.formPanel1.clearData();
this.MerchantGrid.deselectAll();
},
btnSaveClick: function(inSender) {
this.btnCancelClick(inSender);
},
btnUpdateClick: function(inSender) {
this.btnSaveClick(inSender);
},
svAddFeesResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue == "created"){
app.toastSuccess("added successfully.", 3000);
this.desFeesSetup.hide();
this.formPanel1.clearData();
this.svFeesandChargesList.update();
}else if(inSender.getData().dataValue == "updated"){
app.toastSuccess("record updated.", 3000);
this.desFeesSetup.hide();
this.formPanel1.clearData();
this.svFeesandChargesList.update();
this.FeesandChargesGrid.deselectAll();
}else{
app.toastError("Error", 3000);
}
},
FeesandChargesGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
this.desFeesSetup.show();
},
_end: 0
});

SYS_FEES_AND_CHARGES_MAINTENANCE.widgets = {
notiAdd: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svAddFees"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"add new record?\"","targetProperty":"text"}, {}]
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
notiUpdate: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svAddFees"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"save record?\"","targetProperty":"text"}, {}]
}]
}]
}],
svFeesandChargesList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListFeesandCharges","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getListFeesandChargesInputs"}, {}]
}],
svAddFees: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addOrupdateFees","service":"UtilFacade"}, {"onResult":"svAddFeesResult"}, {
input: ["wm.ServiceInput", {"type":"addOrupdateFeesInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtSubprodCode.dataValue","targetProperty":"unit.brname"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtCurrency.dataValue","targetProperty":"unit.currency"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"dtOpenDate.dataValue","targetProperty":"unit.currbusinessdate"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"txtName.dataValue","targetProperty":"unit.braddress"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"txtProdCode.dataValue","targetProperty":"unit.brid"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"dtNextBusinessDate.dataValue","targetProperty":"unit.nextbusinessdate"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"slcBrstat.dataValue","targetProperty":"unit.brstatus"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"FeesandChargesGrid.selectedItem.id","targetProperty":"unit.id"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"FeesandChargesGrid.selectedItem.id","targetProperty":"merchant.id"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"merchant.unit"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"dtOpenDate.dataValue","targetProperty":"merchant.opendt"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"txtSubprodCode.dataValue","targetProperty":"merchant.merchantname"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"txtProdCode.dataValue","targetProperty":"merchant.merchantcode"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"merchant.instcode"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"txtName.dataValue","targetProperty":"merchant.accountno"}, {}],
wire15: ["wm.Wire", {"expression":undefined,"source":"txtAmt.dataValue","targetProperty":"fees.amount"}, {}],
wire16: ["wm.Wire", {"expression":undefined,"source":"FeesandChargesGrid.selectedItem.id","targetProperty":"fees.id"}, {}],
wire17: ["wm.Wire", {"expression":undefined,"source":"txtProdCode.dataValue","targetProperty":"fees.productcode"}, {}],
wire18: ["wm.Wire", {"expression":undefined,"source":"txtName.dataValue","targetProperty":"fees.name"}, {}],
wire19: ["wm.Wire", {"expression":undefined,"source":"txtSubprodCode.dataValue","targetProperty":"fees.subprodcode"}, {}]
}]
}]
}],
desFeesSetup: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"180px","height":"180px","styles":{},"title":undefined,"width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
formPanel1: ["wm.FormPanel", {"height":"100%"}, {}, {
txtProdCode: ["wm.Text", {"border":"0","caption":"Product Code:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"FeesandChargesGrid.selectedItem.productcode","targetProperty":"dataValue"}, {}]
}]
}],
txtSubprodCode: ["wm.Text", {"border":"0","caption":"Sub-product Code:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"FeesandChargesGrid.selectedItem.subprodcode","targetProperty":"dataValue"}, {}]
}]
}],
txtName: ["wm.Text", {"border":"0","caption":"Name:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"FeesandChargesGrid.selectedItem.name","targetProperty":"dataValue"}, {}]
}]
}],
txtAmt: ["wm.Number", {"border":"0","caption":"Amount:","captionSize":"150px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"FeesandChargesGrid.selectedItem.amount","targetProperty":"dataValue"}, {}]
}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"31px"}, {}, {
btnSave: ["wm.Button", {"border":"1","caption":"Save","height":"20px","width":"80px"}, {"onclick":"notiAdd"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${FeesandChargesGrid.emptySelection}","targetProperty":"showing"}, {}]
}]
}],
btnUpdate: ["wm.Button", {"border":"1","caption":"Update","height":"20px","width":"80px"}, {"onclick":"notiUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${FeesandChargesGrid.isRowSelected}","targetProperty":"showing"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"formPanel1.invalid","targetProperty":"disabled"}, {}]
}]
}],
btnCancel: ["wm.Button", {"border":"1","caption":"Cancel","height":"20px"}, {"onclick":"btnCancelClick"}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","margin":"10,10,0,15","styles":{},"verticalAlign":"top"}, {}, {
pnlMain: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"border":"0,0,0,0","borderColor":"","caption":"Fees and Charges Maintenance","padding":"4","styles":{"fontWeight":"bolder","fontSize":"13px","color":"#6a696f","textDecoration":"underline"},"width":"300px"}, {}],
spacer1: ["wm.Spacer", {"height":"10px","width":"96px"}, {}],
btnAdd: ["wm.Button", {"border":"1","caption":"Add","desktopHeight":"24px","height":"24px","margin":"0,0,0,5","styles":{},"width":"90px"}, {"onclick":"desFeesSetup.show"}],
pnlGrid: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,5,0,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
FeesandChargesGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Product Code: \" + ${productcode} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Sub-product Code: \" + ${subprodcode}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${name}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Amount: \" + ${wm.runtimeId}.formatCell(\"amount\", ${amount}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"id","title":"Id","width":"50%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"productcode","title":"Product Code","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"subprodcode","title":"Sub-product Code","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"amount","title":"Amount","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":false,"field":"chargetype","title":"Chargetype","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","localizationStructure":{},"margin":"5,0,0,0","minDesktopHeight":60,"singleClickEdit":true,"styles":{},"width":"90%"}, {"onClick":"FeesandChargesGridClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFeesandChargesList","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

SYS_FEES_AND_CHARGES_MAINTENANCE.prototype._cssText = '';
SYS_FEES_AND_CHARGES_MAINTENANCE.prototype._htmlText = '';