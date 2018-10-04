dojo.declare("ErrorCorrectionTransReport", wm.Page, {
start: function() {
this.svErrorCorrectionTrans.update();
},
"preferredDevice": "desktop",
_end: 0
});

ErrorCorrectionTransReport.widgets = {
svErrorCorrectionTrans: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"ErrorCorrectionTrans","service":"Report"}, {}, {
input: ["wm.ServiceInput", {"type":"ErrorCorrectionTransInputs"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
label1Panel: ["wm.Panel", {"height":"75px","horizontalAlign":"left","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"All Error Correction Transactions","height":"28px","padding":"4","styles":{"color":"#ffffff","fontWeight":"bold","fontSize":"18px","backgroundColor":"#315476"},"width":"100%"}, {}]
}],
iFrame1Panel: ["wm.Panel", {"height":"90%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
iFrame1: ["wm.IFrame", {"height":"100%","styles":{},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svErrorCorrectionTrans.dataValue}","targetProperty":"source"}, {}]
}]
}]
}]
}]
};

ErrorCorrectionTransReport.prototype._cssText = '';
ErrorCorrectionTransReport.prototype._htmlText = '';