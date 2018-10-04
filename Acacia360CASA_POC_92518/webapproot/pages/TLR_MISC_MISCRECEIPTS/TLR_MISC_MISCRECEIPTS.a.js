dojo.declare("TLR_MISC_MISCRECEIPTS", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

TLR_MISC_MISCRECEIPTS.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"align":undefined,"caption":"Miscellaneous Receipts","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
}],
panel3: ["wm.Panel", {"height":"392px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"340px"}, {}],
fPayeeName: ["wm.Text", {"border":"0","caption":"Payee Name:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"450px"}, {}],
fAmt: ["wm.Text", {"border":"0","caption":"Amount:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"340px"}, {}],
fCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"260px"}, {}],
fReasonReceiptPaym: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Reason for Receipt of Payment:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"340px"}, {}],
fRemarks: ["wm.Text", {"border":"0","caption":"Remarks:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"450px"}, {}],
fModepaym: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Payment Receipt Mode:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"340px"}, {}],
spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
button1Panel: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"401px"}, {}, {
button1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","width":"80px"}, {}],
panel5: ["wm.Panel", {"disabled":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"319px"}, {}, {
button3: ["wm.Button", {"border":"1","caption":"Validate Slip/Doc","desktopHeight":"25px","height":"25px","width":"138px"}, {}],
button4: ["wm.Button", {"border":"1","caption":"Post to Passbook","desktopHeight":"25px","height":"25px","width":"138px"}, {}]
}]
}]
}]
}]
}]
};

TLR_MISC_MISCRECEIPTS.prototype._cssText = '';
TLR_MISC_MISCRECEIPTS.prototype._htmlText = '';