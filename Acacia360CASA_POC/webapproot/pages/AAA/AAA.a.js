dojo.declare("AAA", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

AAA.widgets = {
serviceVariable1: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"print","service":"SigcardFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"printInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"DEP101231\\nAccount No: 00012300102123\\nAmount: 100\"","targetProperty":"data"}, {}],
wire1: ["wm.Wire", {"expression":"1","targetProperty":"type"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
button1: ["wm.Button", {"border":"1","caption":"Print","height":"20px","width":"113px"}, {"onclick":"serviceVariable1"}]
}]
};

AAA.prototype._cssText = '';
AAA.prototype._htmlText = '';