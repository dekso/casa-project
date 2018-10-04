dojo.declare("ElectronicJournalReport", wm.Page, {
start: function() {
this.svEJournalReport.update();
},
"preferredDevice": "desktop",
_end: 0
});

ElectronicJournalReport.widgets = {
svEJournalReport: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"EJournalPDF","service":"Report"}, {}, {
input: ["wm.ServiceInput", {"type":"EJournalPDFInputs"}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"iFrame1","targetProperty":"loadingDialog"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
label1Panel: ["wm.Panel", {"height":"75px","horizontalAlign":"left","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Electronic Journal","height":"28px","padding":"4","styles":{"color":"#ffffff","fontWeight":"bold","fontSize":"18px","backgroundColor":"#315476"},"width":"100%"}, {}]
}],
iFrame1Panel: ["wm.Panel", {"height":"90%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
iFrame1: ["wm.IFrame", {"height":"100%","styles":{},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svEJournalReport.dataValue}","targetProperty":"source"}, {}]
}]
}]
}]
}]
};

ElectronicJournalReport.prototype._cssText = '';
ElectronicJournalReport.prototype._htmlText = '';