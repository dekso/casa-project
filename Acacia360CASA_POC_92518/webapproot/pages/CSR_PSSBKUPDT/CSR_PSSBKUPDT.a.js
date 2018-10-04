dojo.declare("CSR_PSSBKUPDT", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

CSR_PSSBKUPDT.widgets = {
searchResultDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Search Result"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"15px"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"PASSBOOK UPDATE","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel5: ["wm.Panel", {"height":"118px","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"380px"}, {}, {
spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctNo: ["wm.Text", {"border":"0","caption":"Account Number:","captionSize":"170px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"370px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
}]
}],
spacer4: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctPssbkSN: ["wm.Text", {"border":"0","caption":"Passbook Serial Number:","captionSize":"170px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"370px"}, {}],
spacer2: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctPssbkBal: ["wm.Text", {"border":"0","caption":"Passbook Serial Number:","captionSize":"170px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"370px"}, {}],
spacer5: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctPssbkLN: ["wm.Text", {"border":"0","caption":"Passbook Line Number:","captionSize":"170px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"370px"}, {}]
}],
panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
button3: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}],
button4: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}]
}]
}]
}]
}]
};

CSR_PSSBKUPDT.prototype._cssText = '';
CSR_PSSBKUPDT.prototype._htmlText = '';