dojo.declare("Boo_SetBusinessDate", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

Boo_SetBusinessDate.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"fontWeight":"bold","fontSize":"18px"},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"90%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"90%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1Panel: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"60%"}, {}, {
label1: ["wm.Label", {"caption":"Change Business Date","height":"28px","padding":"4","styles":{"fontWeight":"bold","fontSize":"18px"},"width":"100%"}, {}]
}],
label2: ["wm.Panel", {"height":"90%","horizontalAlign":"left","verticalAlign":"top","width":"60%"}, {}, {
txtBusinessDatePanel: ["wm.Panel", {"height":"67px","horizontalAlign":"left","verticalAlign":"middle","width":"400px"}, {}, {
CurBusinessDt: ["wm.Date", {"border":"0","caption":"Current Business Date","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"width":"400px"}, {}]
}],
txtNextBusinessDatePanel1: ["wm.Panel", {"height":"40px","horizontalAlign":"left","verticalAlign":"middle","width":"400px"}, {}, {
NextBusinessDt: ["wm.Date", {"border":"0","caption":"Next Business Date","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}]
}],
button1Panel: ["wm.Panel", {"height":"50px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
Confirm: ["wm.Button", {"border":"1","caption":"Confirm","desktopHeight":"25px","height":"25px","styles":{},"width":"120px"}, {}],
Cancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"25px","height":"25px","styles":{},"width":"120px"}, {}]
}]
}]
}]
}]
}]
};

Boo_SetBusinessDate.prototype._cssText = '';
Boo_SetBusinessDate.prototype._htmlText = '';