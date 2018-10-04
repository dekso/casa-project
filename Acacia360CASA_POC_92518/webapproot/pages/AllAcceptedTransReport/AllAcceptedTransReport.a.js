dojo.declare("AllAcceptedTransReport", wm.Page, {
start: function() {
this.svAllAcceptedTrans.update();
},
"preferredDevice": "desktop",
_end: 0
});

AllAcceptedTransReport.widgets = {
svAllAcceptedTrans: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"AllAcceptedTrans","service":"Report"}, {}, {
input: ["wm.ServiceInput", {"type":"AllAcceptedTransInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.username.dataValue","targetProperty":"username"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
label1Panel: ["wm.Panel", {"height":"75px","horizontalAlign":"left","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"All Accepted Transaction","height":"28px","padding":"4","styles":{"color":"#ffffff","fontWeight":"bold","fontSize":"18px","backgroundColor":"#315476"},"width":"100%"}, {}]
}],
iFrame1Panel: ["wm.Panel", {"height":"90%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
iFrame1: ["wm.IFrame", {"height":"100%","styles":{},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svAllAcceptedTrans.dataValue}","targetProperty":"source"}, {}]
}]
}]
}]
}]
};

AllAcceptedTransReport.prototype._cssText = '';
AllAcceptedTransReport.prototype._htmlText = '';