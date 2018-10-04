dojo.declare("CSR_LIFTSPO", wm.Page, {
start: function() {
this.svSPOList.update();
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
app.confirm("Proceed to lift SPO?", false,
dojo.hitch(this, function() {
this.svLiftSPO.update();
}),
dojo.hitch(this, function() {}));
},
svLiftSPOResult: function(inSender, inDeprecated) {
if(inSender.getData().result==1){
app.alert("Lift SPO Successful!");
this.dlgAcctDet.hide();
this.svSPOList.update();
}else if(inSender.getData().result==0){
app.alert("Error in Routine!");
}
},
_end: 0
});

CSR_LIFTSPO.widgets = {
svLiftReason: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"SPOLIFTREASON\"","targetProperty":"codename"}, {}]
}]
}]
}],
svSPOList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"spoList","service":"AccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"spoListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAccountno.dataValue","targetProperty":"accountno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fAccountno.dataValue","targetProperty":"acctno"}, {}]
}]
}]
}],
svLiftSPO: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"liftSPO","service":"AccountFacade"}, {"onResult":"svLiftSPOResult"}, {
input: ["wm.ServiceInput", {"type":"liftSPOInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.id","targetProperty":"id"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"businessdt"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"flLiftReason.selectedItem.id","targetProperty":"liftreason"}, {}]
}]
}]
}],
dlgAcctDet: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"190px","height":"190px","title":"Account Details"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
pnlAcctDet: ["wm.Panel", {"height":"108px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
flAcctno: ["wm.Text", {"border":"0","caption":"Account No:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.acctno","targetProperty":"dataValue"}, {}]
}]
}],
flAcctname: ["wm.Text", {"border":"0","caption":"Account Name:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.name","targetProperty":"dataValue"}, {}]
}]
}],
flChkno: ["wm.Text", {"border":"0","caption":"Check No:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.chkno","targetProperty":"dataValue"}, {}]
}]
}],
flDatehold: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Date Hold:","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.datehold","targetProperty":"dataValue"}, {}]
}]
}]
}],
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,5","styles":{},"verticalAlign":"top","width":"50%"}, {}, {
flValiditydt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Validity Date:","captionSize":"90px","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.validitydate","targetProperty":"dataValue"}, {}]
}]
}],
flHoldreason: ["wm.Text", {"border":"0","caption":"Hold Reason:","captionSize":"90px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.reason","targetProperty":"dataValue"}, {}]
}]
}],
flLiftReason: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Lift Reason","captionSize":"90px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":"1","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svLiftReason","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnLift: ["wm.Button", {"border":"1","caption":"Lift SPO","desktopHeight":"28px","height":"28px","styles":{},"width":"120px"}, {"onclick":"btnLiftClick"}, {
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
pnlCont: ["wm.Panel", {"height":"80%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"900px"}, {}, {
panel10: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label2: ["wm.Label", {"caption":"Lift Stop Payment Order","height":"31px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel2: ["wm.Panel", {"height":"38px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
fAccountno: ["wm.Text", {"border":"0","caption":"Account No:","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,5","styles":{},"width":"350px"}, {}],
btnSearch: ["wm.Button", {"border":"1","caption":"Search","desktopHeight":"28px","height":"28px","margin":"0,0,0,10","styles":{},"width":"90px"}, {"onclick":"svSPOList"}]
}],
acctlistGrid: ["wm.DojoGrid", {"caseSensitiveSort":false,"columnReordering":false,"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Accoount No: \" + ${acctno} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Check No: \" + ${chkno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${name}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Validitydate: \" + ${wm.runtimeId}.formatCell(\"validitydate\", ${validitydate}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Reason: \" + ${reason}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Hold By: \" + ${holdby}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"acctno","title":"Accoount No","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"chkno","title":"Check No","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"validitydate","title":"Validitydate","width":"100%","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"reason","title":"Reason","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"holdby","title":"Hold By","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"btn","title":"Action","width":"60%","align":"center","formatFunc":"wm_button_formatter","editorProps":null,"expression":"\"View\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"datehold","title":"Datehold","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"sortingEnabled":false}, {"onGridButtonClick":"acctlistGridGridButtonClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSPOList","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

CSR_LIFTSPO.prototype._cssText = '';
CSR_LIFTSPO.prototype._htmlText = '';