dojo.declare("CSHR_MISC_FOREX", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

CSHR_MISC_FOREX.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"align":undefined,"caption":"FOREX BUY / SELL","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
}],
panel3: ["wm.Panel", {"height":"392px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"178px","displayValue":"10/14/2017","height":"25px","width":"340px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date();","targetProperty":"dataValue"}, {}]
}]
}],
panel4: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label2: ["wm.Label", {"align":undefined,"caption":"Buy / Sell:","padding":"4","styles":{"fontSize":"12px","fontWeight":"bolder","color":"#535050"},"width":"182px"}, {}],
sell: ["wm.RadioButton", {"border":"0","caption":"Sell","captionAlign":"right","captionSize":"40px","displayValue":"","height":"25px","width":"60px"}, {}],
buy: ["wm.RadioButton", {"border":"0","caption":"Buy","captionAlign":"right","captionSize":"40px","displayValue":"","height":"25px","width":"60px"}, {}]
}],
fCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"340px"}, {}],
fAmt: ["wm.Text", {"border":"0","caption":"Amount:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"340px"}, {}],
fConvsnType: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Conversion Type:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"340px"}, {}],
fFoeExchngRate: ["wm.Text", {"border":"0","caption":"Foreign Exchange Rate:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"340px"}, {}],
fPesoVal: ["wm.Text", {"border":"0","caption":"Peso Value:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"340px"}, {}],
fModepaym: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Mode of Payment:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"340px"}, {}],
fRemarks: ["wm.Text", {"border":"0","caption":"Debit Account No:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"340px"}, {}],
spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
button1Panel: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"340px"}, {}, {
button1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","width":"80px"}, {}],
button2: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Clear","desktopHeight":"28px","height":"28px","width":"80px"}, {}]
}]
}]
}]
}]
};

CSHR_MISC_FOREX.prototype._cssText = '';
CSHR_MISC_FOREX.prototype._htmlText = '';