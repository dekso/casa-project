dojo.declare("Boo_Synchronize_Files", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

Boo_Synchronize_Files.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"fontWeight":"bold","fontSize":"18px"},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"90%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"90%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1Panel: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"60%"}, {}, {
label1: ["wm.Label", {"caption":"Sync Local Tables to Host","height":"30px","padding":"4","styles":{"fontWeight":"bold","fontSize":"18px"},"width":"100%"}, {}]
}],
label2: ["wm.Panel", {"height":"90%","horizontalAlign":"left","verticalAlign":"top","width":"60%"}, {}, {
txtStatusPanel: ["wm.Panel", {"height":"30px","horizontalAlign":"left","styles":{},"verticalAlign":"middle","width":"400px"}, {}, {
label3: ["wm.Label", {"caption":"Items to be Synchronize :","height":"20px","padding":"4","styles":{"fontWeight":"bold","fontSize":"14px"},"width":"100%"}, {}]
}],
panel3: ["wm.Panel", {"height":"105px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"402px"}, {}, {
checkboxSet1: ["wm.CheckboxSet", {"border":"0","caption":undefined,"captionAlign":"center","captionPosition":"right","dataValue":undefined,"displayValue":"","width":"400px"}, {}]
}],
txtBusinessDatePanel: ["wm.Panel", {"height":"75px","horizontalAlign":"left","verticalAlign":"middle","width":"400px"}, {}, {
textRemarks: ["wm.Text", {"border":"0","caption":"Remarks:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}]
}],
button1Panel: ["wm.Panel", {"height":"50px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
button1: ["wm.Button", {"border":"1","caption":"Update Local Table","desktopHeight":"25px","height":"25px","styles":{},"width":"180px"}, {}]
}]
}]
}]
}]
}]
};

Boo_Synchronize_Files.prototype._cssText = '';
Boo_Synchronize_Files.prototype._htmlText = '';