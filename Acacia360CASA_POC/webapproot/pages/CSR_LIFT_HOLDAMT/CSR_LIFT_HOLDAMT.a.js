dojo.declare("CSR_LIFT_HOLDAMT", wm.Page, {
start: function() {
this.svLiftList.update();
this.svLiftReason.update();
},
"preferredDevice": "desktop",
acctlistGridGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
this.acctlistGrid.select(rowIndex);
this.dlgAcctDet.show();
},
btnCloseClick: function(inSender) {
this.dlgAcctDet.hide();
},
btnLiftClick: function(inSender) {
app.confirm("Proceed to lift hold amount?", false,
dojo.hitch(this, function() {
this.svLiftHoldAmt.update();
}),
dojo.hitch(this, function() {}));
},
svLiftHoldAmtResult: function(inSender, inDeprecated) {
if(inSender.getData().result==1){
app.alert("Lift Hold Amount Successful!");
this.dlgAcctDet.hide();
this.fAccountno.clear();
this.svLiftList.update();
}else if(inSender.getData().result==0){
app.alert("Error in Routine!");
}
},
_end: 0
});

CSR_LIFT_HOLDAMT.widgets = {
svLiftList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getHoldAmtList","service":"AccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getHoldAmtListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAccountno.dataValue","targetProperty":"accountno"}, {}],
wire1: ["wm.Wire", {"expression":"1","targetProperty":"type"}, {}]
}]
}]
}],
svLiftHoldAmt: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"liftHoldAmt","service":"AccountFacade"}, {"onResult":"svLiftHoldAmtResult"}, {
input: ["wm.ServiceInput", {"type":"liftHoldAmtInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.id","targetProperty":"id"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"flLiftReason.dataValue","targetProperty":"liftreason"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"businessdt"}, {}],
wire3: ["wm.Wire", {"expression":"1","targetProperty":"type"}, {}]
}]
}]
}],
svLiftReason: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"LIFTREASON\"","targetProperty":"codename"}, {}]
}]
}]
}],
dlgAcctDet: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"240px","height":"240px","title":"Account Details"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
pnlAcctDet: ["wm.Panel", {"height":"159px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
flAcctno: ["wm.Text", {"border":"0","caption":"Account No:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountno","targetProperty":"dataValue"}, {}]
}]
}],
flAcctname: ["wm.Text", {"border":"0","caption":"Account Name:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountname","targetProperty":"dataValue"}, {}]
}]
}],
flHoldreason: ["wm.Text", {"border":"0","caption":"Hold Reason:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.holdreason","targetProperty":"dataValue"}, {}]
}]
}],
flDatehold: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Date Hold:","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.datehold","targetProperty":"dataValue"}, {}]
}]
}],
flValiditydt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Validity Date:","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.validitydate","targetProperty":"dataValue"}, {}]
}]
}],
flExpirydt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Expiry Date:","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.expirydate","targetProperty":"dataValue"}, {}]
}]
}]
}],
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,5","styles":{},"verticalAlign":"top","width":"50%"}, {}, {
flAcctbal: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Account Balance:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.acctbal","targetProperty":"dataValue"}, {}]
}]
}],
flHoldamt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Hold Amount:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.amount","targetProperty":"dataValue"}, {}]
}]
}],
flAvailableBal: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Available Balance:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.availbal","targetProperty":"dataValue"}, {}]
}]
}],
flLiftReason: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Lift Reason","captionSize":"90px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svLiftReason","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnLift: ["wm.Button", {"border":"1","caption":"Lift Hold Amount","desktopHeight":"28px","height":"28px","styles":{},"width":"120px"}, {"onclick":"btnLiftClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"flLiftReason.invalid","targetProperty":"disabled"}, {}]
}]
}],
btnClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"28px","height":"28px","margin":"0,0,0,0","styles":{}}, {"onclick":"btnCloseClick"}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
pnlCont: ["wm.Panel", {"height":"80%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"800px"}, {}, {
panel10: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label2: ["wm.Label", {"caption":"Lift Hold Amount","height":"31px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel2: ["wm.Panel", {"height":"38px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
fAccountno: ["wm.Text", {"border":"0","caption":"Account No:","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,5","styles":{},"width":"350px"}, {}],
btnSearch: ["wm.Button", {"border":"1","caption":"Search","desktopHeight":"28px","height":"28px","margin":"0,0,0,10","styles":{},"width":"90px"}, {"onclick":"svLiftList"}]
}],
acctlistGrid: ["wm.DojoGrid", {"caseSensitiveSort":false,"columnReordering":false,"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Accountno: \" + ${accountno} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Account Name: \" + ${accountname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Date Hold: \" + ${wm.runtimeId}.formatCell(\"datehold\", ${datehold}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Amount: \" + ${wm.runtimeId}.formatCell(\"amount\", ${amount}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Hold Reason: \" + ${holdreason}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"accountno","title":"Accountno","width":"60%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"accountname","title":"Account Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"datehold","title":"Date Hold","width":"70%","align":"center","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"amount","title":"Amount","width":"50%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"editorProps":null,"mobileColumn":false},
{"show":true,"field":"holdreason","title":"Hold Reason","width":"80%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"btn","title":"Action","width":"60%","align":"center","formatFunc":"wm_button_formatter","editorProps":null,"expression":"\"View\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"id","title":"Id","width":"100%","displayType":"Int","align":"left","formatFunc":""},
{"show":false,"field":"acctbal","title":"Acctbal","width":"100%","displayType":"Java.math.BigDecimal","align":"left","formatFunc":""},
{"show":false,"field":"validitydate","title":"Validitydate","width":"100%","displayType":"Java.util.Date","align":"left","formatFunc":""},
{"show":false,"field":"expirydate","title":"Expirydate","width":"100%","displayType":"Java.util.Date","align":"left","formatFunc":""},
{"show":false,"field":"availbal","title":"Availbal","width":"100%","displayType":"Java.math.BigDecimal","align":"left","formatFunc":""}
],"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"sortingEnabled":false}, {"onGridButtonClick":"acctlistGridGridButtonClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svLiftList","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

CSR_LIFT_HOLDAMT.prototype._cssText = '';
CSR_LIFT_HOLDAMT.prototype._htmlText = '';