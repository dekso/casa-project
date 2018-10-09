dojo.declare("SYSAD_PRODUCT_LIST", wm.Page, {
start: function() {
this.svList.update();
},
"preferredDevice": "desktop",
btnAddClick: function(inSender) {
this.dlgTerminal.show();
this.dlgTerminal.setValue("title", "Add Terminal");
},
btnSubmitClick: function(inSender) {
this.svAE.update();
},
svAEResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="0"){
app.alert("IP Address/Terminal No is already in use!");
}else if(inSender.getData().dataValue=="1"){
app.alert("Successful : New terminal added!");
this.containerWidget.clearData();
this.dlgTerminal.hide();
this.svAE.clearData();
this.svList.update();
}else if(inSender.getData().dataValue=="999"){
app.alert("Error in routine!");
}
},
btnCloseClick: function(inSender) {
this.dlgTerminal.hide();
this.containerWidget.clearData();
},
dgTerminalGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
console.log(rowData);
app.confirm("Delete terminal?", false,
dojo.hitch(this, function() {
this.svDelete.input.setValue("id", rowData.id);
this.svDelete.update();
}),
dojo.hitch(this, function(){
this.svList.update();
}), "Yes", "No");
},
svDeleteResult: function(inSender, inDeprecated) {
console.log(inSender);
if(inSender.getData().dataValue=="0"){
app.alert("Error in routine!");
}else if(inSender.getData().dataValue=="1"){
app.alert("Terminal deleted!");
this.svList.update();
}
},
_end: 0
});

SYSAD_PRODUCT_LIST.widgets = {
svAE: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"aeTerminal","service":"UtilFacade"}, {"onResult":"svAEResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"aeTerminalInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"data.unitid"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"data.createdby"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fIPadd.dataValue","targetProperty":"data.ipadd"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"fTerminal.dataValue","targetProperty":"data.terminalno"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fTerminal.dataValue","targetProperty":"data.terminal"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"fIPadd.dataValue","targetProperty":"data.ipaddress"}, {}]
}]
}]
}],
svList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"terminalList","service":"UtilFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"terminalListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"unitid"}, {}]
}]
}]
}],
svDelete: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"deleteTerminal","service":"UtilFacade"}, {"onResult":"svDeleteResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"deleteTerminalInputs"}, {}]
}],
dlgTerminal: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"135px","height":"135px","title":undefined,"width":"300px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
fIPadd: ["wm.Text", {"border":"0","caption":"IP Address:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px","styles":{}}, {}],
fTerminal: ["wm.Text", {"border":"0","caption":"Terminal Name:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px"}, {}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"36px","height":"36px"}, {}, {
btnSubmit: ["wm.Button", {"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","styles":{},"width":"90px"}, {"onclick":"btnSubmitClick"}],
btnClose: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"25px","height":"25px","margin":"0,0,0,0","styles":{},"width":"80px"}, {"onclick":"btnCloseClick"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Product List","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
}],
panel3: ["wm.Panel", {"height":"320px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"650px"}, {}, {
spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
dgTerminal: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"ipaddress","title":"Ipaddress","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"terminal","title":"Terminal","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"unitid","title":"Unitid","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"createdby","title":"Createdby","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Ipaddress: \" + ${ipaddress} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Terminal: \" + ${terminal}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Createdby: \" + ${createdby}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"btn","title":"Action","width":"100px","align":"center","formatFunc":"wm_button_formatter","expression":"\"Delete\"","isCustomField":true}
],"dsType":"com.smslai_eoddb.data.Tbterminal","height":"100%","minDesktopHeight":60,"singleClickEdit":true}, {"onGridButtonClick":"dgTerminalGridButtonClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svList","targetProperty":"dataSet"}, {}]
}]
}]
}],
btnAdd: ["wm.Button", {"border":"1","caption":"Add Product","desktopHeight":"30px","height":"30px","margin":"5,0,0,4","styles":{},"width":"100px"}, {"onclick":"btnAddClick"}]
}]
}]
};

SYSAD_PRODUCT_LIST.prototype._cssText = '';
SYSAD_PRODUCT_LIST.prototype._htmlText = '';