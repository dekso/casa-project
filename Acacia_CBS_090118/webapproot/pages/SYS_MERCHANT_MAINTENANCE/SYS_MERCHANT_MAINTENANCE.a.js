dojo.declare("SYS_MERCHANT_MAINTENANCE", wm.Page, {
start: function() {
this.svMerchantList.update();
this.codeBrStat.update();
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
svAddBranchResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue == "created"){
app.toastSuccess("New Merchant added.", 3000);
this.desMerchantSetup.hide();
this.formPanel1.clearData();
this.svMerchantList.update();
}else if(inSender.getData().dataValue == "updated"){
app.toastSuccess("Merchant record updated", 3000);
this.desMerchantSetup.hide();
this.formPanel1.clearData();
this.svMerchantList.update();
this.MerchantGrid.deselectAll();
}else{
app.toastError("Error", 3000);
}
},
MerchantGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
this.desMerchantSetup.show();
},
_end: 0
});

SYS_MERCHANT_MAINTENANCE.widgets = {
notiAdd: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svAddMerchant"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"add new merchant?\"","targetProperty":"text"}, {}]
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
notiUpdate: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svAddMerchant"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"edit merchant record?\"","targetProperty":"text"}, {}]
}]
}]
}],
svMerchantList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListMerchant","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getListMerchantInputs"}, {}]
}],
svAddMerchant: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addOrupdateMerchant","service":"UtilFacade"}, {"onResult":"svAddBranchResult"}, {
input: ["wm.ServiceInput", {"type":"addOrupdateMerchantInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtMname.dataValue","targetProperty":"unit.brname"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtCurrency.dataValue","targetProperty":"unit.currency"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"dtOpenDate.dataValue","targetProperty":"unit.currbusinessdate"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"txtAcctno.dataValue","targetProperty":"unit.braddress"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"txtMerchCode.dataValue","targetProperty":"unit.brid"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"dtNextBusinessDate.dataValue","targetProperty":"unit.nextbusinessdate"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"slcBrstat.dataValue","targetProperty":"unit.brstatus"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"MerchantGrid.selectedItem.id","targetProperty":"unit.id"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"MerchantGrid.selectedItem.id","targetProperty":"merchant.id"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"merchant.unit"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"dtOpenDate.dataValue","targetProperty":"merchant.opendt"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"txtMname.dataValue","targetProperty":"merchant.merchantname"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"txtMerchCode.dataValue","targetProperty":"merchant.merchantcode"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"merchant.instcode"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"txtAcctno.dataValue","targetProperty":"merchant.accountno"}, {}]
}]
}]
}],
desMerchantSetup: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"180px","height":"180px","styles":{},"title":undefined,"width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
formPanel1: ["wm.FormPanel", {"height":"100%"}, {}, {
txtMerchCode: ["wm.Text", {"border":"0","caption":"Merchant Code:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"MerchantGrid.selectedItem.merchantcode","targetProperty":"dataValue"}, {}]
}]
}],
txtMname: ["wm.Text", {"border":"0","caption":"Merchant Name:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"MerchantGrid.selectedItem.merchantname","targetProperty":"dataValue"}, {}]
}]
}],
txtAcctno: ["wm.Text", {"border":"0","caption":"Account Number:","captionSize":"150px","displayValue":"","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"MerchantGrid.selectedItem.accountno","targetProperty":"dataValue"}, {}]
}]
}],
dtOpenDate: ["wm.Date", {"border":"0","caption":"Open Date:","captionSize":"150px","displayValue":"","height":"25px","minimum":null,"width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"MerchantGrid.selectedItem.opendt","targetProperty":"dataValue"}, {}]
}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"31px"}, {}, {
btnSave: ["wm.Button", {"border":"1","caption":"Save","height":"20px","width":"80px"}, {"onclick":"notiAdd"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${MerchantGrid.emptySelection}","targetProperty":"showing"}, {}]
}]
}],
btnUpdate: ["wm.Button", {"border":"1","caption":"Update","height":"20px","width":"80px"}, {"onclick":"notiUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${MerchantGrid.isRowSelected}","targetProperty":"showing"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"formPanel1.invalid","targetProperty":"disabled"}, {}]
}]
}],
btnCancel: ["wm.Button", {"border":"1","caption":"Cancel","height":"20px"}, {"onclick":"btnCancelClick"}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","margin":"10,10,0,15","styles":{},"verticalAlign":"top"}, {}, {
pnlMain: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"border":"0,0,0,0","borderColor":"","caption":"Merchant Maintenance","padding":"4","styles":{"fontWeight":"bolder","fontSize":"13px","color":"#6a696f","textDecoration":"underline"}}, {}],
spacer1: ["wm.Spacer", {"height":"10px","width":"96px"}, {}],
btnAdd: ["wm.Button", {"border":"1","caption":"Add","desktopHeight":"24px","height":"24px","margin":"0,0,0,5","styles":{},"width":"90px"}, {"onclick":"desMerchantSetup.show"}],
pnlGrid: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,5,0,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
MerchantGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Merchant Code: \" + ${merchantcode} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Merchant Name: \" + ${merchantname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Account No.: \" + ${accountno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Open Date: \" + ${wm.runtimeId}.formatCell(\"opendt\", ${opendt}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"id","title":"Id","width":"50%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"merchantcode","title":"Merchant Code","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"merchantname","title":"Merchant Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"accountno","title":"Account No.","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"opendt","title":"Open Date","width":"80px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"short","dateType":"date"},"mobileColumn":false},
{"show":false,"field":"status","title":"Status","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"unit","title":"Unit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"instcode","title":"Instcode","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false}
],"height":"100%","localizationStructure":{},"margin":"5,0,0,0","minDesktopHeight":60,"singleClickEdit":true,"styles":{},"width":"90%"}, {"onClick":"MerchantGridClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMerchantList","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

SYS_MERCHANT_MAINTENANCE.prototype._cssText = '';
SYS_MERCHANT_MAINTENANCE.prototype._htmlText = '';