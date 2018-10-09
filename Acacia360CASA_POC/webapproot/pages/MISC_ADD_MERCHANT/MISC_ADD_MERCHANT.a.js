dojo.declare("MISC_ADD_MERCHANT", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
svAddMerchantResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="0"){
app.toastError("Account not found/exist!", 5000);
}else if(inSender.getData().dataValue=="1"){
app.alert("Merchant Added Successfully");
this.fAcctNo.clear();
this.fMerchname.clear();
}else{
app.toastError("Error in Routine!", 5000);
}
},
_end: 0
});

MISC_ADD_MERCHANT.widgets = {
svAddMerchant: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addMerchant","service":"MiscTxFacade"}, {"onResult":"svAddMerchantResult"}, {
input: ["wm.ServiceInput", {"type":"addMerchantInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"merch.accountno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"[main].svUserInfo.brid","targetProperty":"merch.unit"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"[main].svUnitinfo.instcode","targetProperty":"merch.instcode"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"fTxdt.dataValue","targetProperty":"merch.opendt"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fMerchname.dataValue","targetProperty":"merch.merchantname"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Enroll Merchant","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
}],
panel3: ["wm.Panel", {"height":"292px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"135px","displayValue":"","height":"25px","readonly":true,"width":"320px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"320px"}, {}],
fMerchname: ["wm.Text", {"border":"0","caption":"Merchant Name:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}],
spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","width":"80px"}, {"onclick":"svAddMerchant"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel3.invalid","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
};

MISC_ADD_MERCHANT.prototype._cssText = '';
MISC_ADD_MERCHANT.prototype._htmlText = '';