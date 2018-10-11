dojo.declare("CSR_CHKBKISSNCE", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
btnSubmitClick: function(inSender) {
this.svSave.update();
},
svSaveResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="0"){
app.alert("Account not found!");
}else if(inSender.getData().dataValue=="1"){
app.alert("Checkbook already issued!");
}else if(inSender.getData().dataValue=="2"){
app.alert("Success!");
this.panel4.clearData();
}else if(inSender.getData().dataValue=="999"){
app.alert("Error in routine!");
}
},
_end: 0
});

CSR_CHKBKISSNCE.widgets = {
svSave: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkbookIssuance","service":"MiscTxFacade"}, {"onResult":"svSaveResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"checkbookIssuanceInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"data.unit"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"data.releasedby"}, {}],
wire2: ["wm.Wire", {"expression":"1","targetProperty":"data.status"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"data.accountno"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"acctEndChkNo.dataValue","targetProperty":"data.endchkno"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"chkBkNo.dataValue","targetProperty":"data.checkbookno"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"acctStrtChkNo.dataValue","targetProperty":"data.startchkno"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"acctRecvdBy.dataValue","targetProperty":"data.receivedby"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"data.checkbkaccountno"}, {}]
}]
}]
}],
serviceVariable1: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast"}, {}, {
input: ["wm.ServiceInput", {"type":"Inputs"}, {}]
}],
searchResultDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Search Result"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"15px"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"CHECKBOOK ISSUANCE","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel5: ["wm.Panel", {"height":"160px","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"360px"}, {}, {
spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"150px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"350px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
}]
}],
chkBkNo: ["wm.Text", {"border":"0","caption":"Checkbook No:","captionSize":"150px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"350px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
}]
}],
acctStrtChkNo: ["wm.Number", {"border":"0","caption":"Start Check Number:","captionSize":"150px","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"350px"}, {}],
acctEndChkNo: ["wm.Number", {"border":"0","caption":"End Check Number:","captionSize":"150px","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"350px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"(${acctStrtChkNo.dataValue}+1)","targetProperty":"minimum"}, {}]
}]
}],
acctRecvdBy: ["wm.Text", {"border":"0","caption":"Received By:","captionSize":"150px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","styles":{},"width":"350px"}, {}],
date1: ["wm.Date", {"border":"0","caption":"Date Received:","captionSize":"150px","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"350px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}]
}],
panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {"onEnterKeyPress":"panel11EnterKeyPress"}, {
btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnSubmitClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel4.invalid","targetProperty":"disabled"}, {}]
}]
}],
button4: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}]
}]
}]
}]
}]
};

CSR_CHKBKISSNCE.prototype._cssText = '';
CSR_CHKBKISSNCE.prototype._htmlText = '';