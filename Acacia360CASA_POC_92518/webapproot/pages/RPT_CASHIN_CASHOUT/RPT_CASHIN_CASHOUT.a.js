dojo.declare("RPT_CASHIN_CASHOUT", wm.Page, {
start: function() {
//  this.svCashInCashOut.update();
},
"preferredDevice": "desktop",
_end: 0
});

RPT_CASHIN_CASHOUT.widgets = {
svCashInCashOut: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"CashInCashOut","service":"Report"}, {}, {
input: ["wm.ServiceInput", {"type":"CashInCashOutInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.username.dataValue","targetProperty":"username"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate.dataValue","targetProperty":"date"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"iFrame1","targetProperty":"loadingDialog"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
label1Panel: ["wm.Panel", {"height":"121px","horizontalAlign":"left","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Cash In/Cash Out Report","height":"28px","padding":"4","styles":{"color":"#ffffff","fontWeight":"bold","fontSize":"18px","backgroundColor":"#315476"},"width":"100%"}, {}],
fDatePanel: ["wm.Panel", {"height":"43px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fDate: ["wm.Date", {"border":"0","caption":"Date :","displayValue":"","height":"25px","width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
spacer2: ["wm.Spacer", {"height":"48px","width":"20px"}, {}],
button1: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","width":"80px"}, {"onclick":"svCashInCashOut"}]
}]
}],
iFrame1Panel: ["wm.Panel", {"height":"90%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
iFrame1: ["wm.IFrame", {"height":"100%","styles":{},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svCashInCashOut.dataValue}","targetProperty":"source"}, {}]
}]
}]
}]
}]
};

RPT_CASHIN_CASHOUT.prototype._cssText = '';
RPT_CASHIN_CASHOUT.prototype._htmlText = '';