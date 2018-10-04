dojo.declare("CSR_TIMEDEPACCT", wm.Page, {
start: function() {
this.svListAccount.update();
},
"preferredDevice": "desktop",
acctlistGridGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
this.acctlistGrid.select(rowIndex);
this.dlgAcctDet.show();
this.svAcctDet.update();
},
btnCloseClick: function(inSender) {
this.dlgAcctDet.hide();
},
btnCloseTDCClick: function(inSender) {
this.dlgCertificate.hide();
},
btnPrintClick: function(inSender) {
this.svPrint.update();
this.dlgCertificate.show();
},
svListAccountResult: function(inSender, inDeprecated) {
console.log(inSender.getData());
},
_end: 0
});

CSR_TIMEDEPACCT.widgets = {
svListAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getTDCList","service":"AccountFacade"}, {"onResult":"svListAccountResult"}, {
input: ["wm.ServiceInput", {"type":"getTDCListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctno.dataValue","targetProperty":"accountno"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}]
}],
svAcctDet: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getTimeDepAcctDet","service":"AccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getTimeDepAcctDetInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountno","targetProperty":"accountno"}, {}]
}]
}]
}],
svPrint: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"CertTimeDep","service":"Report"}, {}, {
input: ["wm.ServiceInput", {"type":"CertTimeDepInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"flAcctno.dataValue","targetProperty":"acctno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"issuedt"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"flMatdt.dataValue","targetProperty":"matdt"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"flAcctname.dataValue","targetProperty":"name"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"flTerm.dataValue","targetProperty":"term"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"flIntrate.dataValue","targetProperty":"interest"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"flAcctbal.dataValue","targetProperty":"sum"}, {}]
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
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.name","targetProperty":"dataValue"}, {}]
}]
}],
flAcctsts: ["wm.Text", {"border":"0","caption":"Account Status:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountstatus","targetProperty":"dataValue"}, {}]
}]
}],
flDateopen: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Date Open:","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svAcctDet.opendt","targetProperty":"dataValue"}, {}]
}]
}],
flMatdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Maturity Date:","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.matdt","targetProperty":"dataValue"}, {}]
}]
}]
}],
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,5","styles":{},"verticalAlign":"top","width":"50%"}, {}, {
flAcctbal: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Account Balance:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountbal","targetProperty":"dataValue"}, {}]
}]
}],
flTerm: ["wm.Number", {"border":"0","caption":"Term:","displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.term","targetProperty":"dataValue"}, {}]
}]
}],
flIntrate: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Interest Rate:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svAcctDet.intrate","targetProperty":"dataValue"}, {}]
}]
}],
flTaxrate: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Tax Rate:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svAcctDet.taxrate","targetProperty":"dataValue"}, {}]
}]
}],
flLesswTaxAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Less W Tax Amount:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svAcctDet.lesswtax","targetProperty":"dataValue"}, {}]
}]
}],
flMatamt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Maturity Amount:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svAcctDet.matamt","targetProperty":"dataValue"}, {}]
}]
}]
}]
}],
panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnPrint: ["wm.Button", {"border":"1","caption":"Print Certificate","desktopHeight":"28px","height":"28px","styles":{},"width":"120px"}, {"onclick":"btnPrintClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svAcctDet.placementamt}==0.00","targetProperty":"showing"}, {}]
}]
}],
btnClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"28px","height":"28px","margin":"0,0,0,0","styles":{}}, {"onclick":"btnCloseClick"}]
}]
}]
}],
dlgCertificate: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget1","desktopHeight":"350px","height":"350px","title":"TIME DEPOSIT CERTIFICATE","width":"700px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
iFrame1: ["wm.IFrame", {"height":"100%","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svPrint.dataValue","targetProperty":"source"}, {}]
}]
}]
}],
panel8: ["wm.Panel", {"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnCloseTDC: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"28px","height":"28px","width":"90px"}, {"onclick":"btnCloseTDCClick"}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"90%"}, {}, {
pnlCont: ["wm.Panel", {"height":"80%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"900px"}, {}, {
panel5: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label2: ["wm.Label", {"caption":"Time Deposit Account List","height":"31px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel2: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
fAcctno: ["wm.Text", {"border":"0","caption":"Account no:","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,5","required":true,"styles":{},"width":"350px"}, {}],
btnSearch: ["wm.Button", {"border":"1","caption":"Search","desktopHeight":"28px","height":"28px","margin":"0,0,0,10","styles":{},"width":"80px"}, {"onclick":"svListAccount"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctno.invalid","targetProperty":"disabled"}, {}]
}]
}]
}],
acctlistGrid: ["wm.DojoGrid", {"caseSensitiveSort":false,"columnReordering":false,"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Account No: \" + ${accountno} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${name}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Term: \" + ${term}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Placementamt: \" + ${wm.runtimeId}.formatCell(\"placementamt\", ${placementamt}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Balance: \" + ${wm.runtimeId}.formatCell(\"accountbal\", ${accountbal}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Book Date: \" + ${wm.runtimeId}.formatCell(\"datebook\", ${datebook}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Maturity Date: \" + ${wm.runtimeId}.formatCell(\"matdt\", ${matdt}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"View<br/>Details: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"accountno","title":"Account No","width":"75%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"term","title":"Term","width":"40%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"placementamt","title":"Placementamt","width":"50%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"editorProps":null,"mobileColumn":false},
{"show":true,"field":"accountbal","title":"Balance","width":"50%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":true,"field":"datebook","title":"Book Date","width":"80px","align":"center","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"short"},"editorProps":null,"mobileColumn":false},
{"show":true,"field":"matdt","title":"Maturity Date","width":"80px","align":"center","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"btn","title":"View<br/>Details","width":"55%","align":"center","formatFunc":"wm_button_formatter","formatProps":null,"editorProps":null,"expression":"\"View\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"matamt","title":"Matamt","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"accountstatus","title":"Accountstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"controlno","title":"Controlno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"taxrate","title":"Taxrate","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"branch","title":"Branch","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"intrate","title":"Intrate","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"lesswtax","title":"Lesswtax","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"deviceSizes":null,"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"sortingEnabled":false}, {"onGridButtonClick":"acctlistGridGridButtonClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svListAccount","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

CSR_TIMEDEPACCT.prototype._cssText = '';
CSR_TIMEDEPACCT.prototype._htmlText = '';