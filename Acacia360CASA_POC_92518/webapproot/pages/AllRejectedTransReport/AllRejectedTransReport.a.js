dojo.declare("AllRejectedTransReport", wm.Page, {
start: function() {
this.svRejectedTranslReport.update();
},
"preferredDevice": "desktop",
_end: 0
});

AllRejectedTransReport.widgets = {
svRejectedTranslReport: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"AllAcceptedTrans","service":"Report"}, {}, {
input: ["wm.ServiceInput", {"type":"AllAcceptedTransInputs"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
label1Panel: ["wm.Panel", {"height":"75px","horizontalAlign":"left","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"All Rejected Transactions","height":"28px","padding":"4","styles":{"color":"#ffffff","fontWeight":"bold","fontSize":"18px","backgroundColor":"#315476"},"width":"100%"}, {}]
}],
iFrame1Panel: ["wm.Panel", {"height":"90%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
iFrame1: ["wm.IFrame", {"height":"100%","styles":{},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svRejectedTranslReport.dataValue}","targetProperty":"source"}, {}]
}]
}]
}]
}]
};

AllRejectedTransReport.prototype._cssText = '';
AllRejectedTransReport.prototype._htmlText = '';