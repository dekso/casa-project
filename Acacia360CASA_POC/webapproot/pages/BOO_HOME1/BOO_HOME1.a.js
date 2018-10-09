dojo.declare("BOO_HOME1", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

BOO_HOME1.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"fontWeight":"bold","fontSize":"18px"},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"90%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"90%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1Panel: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"60%"}, {}, {
label1: ["wm.Label", {"caption":"Branch Details","padding":"4","styles":{"fontWeight":"bold","fontSize":"18px"},"width":"100%"}, {}]
}],
label2: ["wm.Panel", {"height":"90%","horizontalAlign":"left","verticalAlign":"top","width":"60%"}, {}, {
txtStatusPanel: ["wm.Panel", {"height":"40px","horizontalAlign":"left","verticalAlign":"middle","width":"400px"}, {}, {
txtStatus: ["wm.Text", {"border":"0","caption":"Status","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {}]
}],
txtBusinessDatePanel: ["wm.Panel", {"height":"67px","horizontalAlign":"left","verticalAlign":"middle","width":"400px"}, {}, {
CurBusinessDt: ["wm.Date", {"border":"0","caption":"Current Business Date","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"width":"400px"}, {}]
}],
txtNextBusinessDatePanel1: ["wm.Panel", {"height":"40px","horizontalAlign":"left","verticalAlign":"middle","width":"400px"}, {}, {
NextBusinessDt: ["wm.Date", {"border":"0","caption":"Next Business Date","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"width":"400px"}, {}]
}],
time1Panel: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
cutofftime: ["wm.Time", {"border":"0","caption":"Clearing Cut-off Time","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"width":"400px"}, {}]
}],
button1Panel: ["wm.Panel", {"height":"50px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
button1: ["wm.Button", {"border":"1","caption":"Change Business Date","desktopHeight":"25px","height":"25px","styles":{},"width":"180px"}, {}]
}]
}]
}]
}]
}]
};

BOO_HOME1.prototype._cssText = '';
BOO_HOME1.prototype._htmlText = '';