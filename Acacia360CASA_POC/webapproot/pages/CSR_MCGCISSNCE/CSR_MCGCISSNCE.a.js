dojo.declare("CSR_MCGCISSNCE", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
svCheckAccountResult: function(inSender, inDeprecated) {
if(inSender.getData().result=="0"){
//app.alert("Account no does not exist!");
this.lblSearchResult.setCaption("<b><font color='red'>Account No. doesn't exist!");
this.acctNo.setDataValue("");
}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
this.lblSearchResult.setCaption("<b><font color='blue'>Account number found!");
//            this.acctNo.setDataValue(inSender.getData().name);
}else if(inSender.getData().result=="503"){
this.lblSearchResult.setCaption("<b><font color='red'>Host not available!");
}
},
svSaveResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="1"){
app.toastSuccess("Process Completed.");
}else if(inSender.getData().dataValue=="2"){
this.txtAcctNo.setInvalid(true);
app.toastWarning("Check Number has already been issued.");
}else{
console.log(inSender.getData());
app.toastError("Process Failed.");
}
},
_end: 0
});

CSR_MCGCISSNCE.widgets = {
varCheckType: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"MC\",\"dataValue\":\"1\"},{\"name\":\"GC\",\"dataValue\":\"0\"}]","type":"EntryData"}, {}],
svSave: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestMc","service":"FinTxFacade"}, {"onResult":"svSaveResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"requestMcInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dtCheck.dataValue","targetProperty":"data.daterequest"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"txtAmount.dataValue","targetProperty":"data.amount"}, {}],
wire2: ["wm.Wire", {"expression":"\"1\"","targetProperty":"data.status"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"txtAcctNo.dataValue","targetProperty":"data.mccheckno"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"data.issuingbr"}, {}]
}]
}]
}],
svCheckAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkAcct","service":"FinTxFacade"}, {"onResult":"svCheckAccountResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"checkAcctInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"acctno"}, {}]
}]
}]
}],
notifConfirm: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svSave"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Are you sure you want to submit?\"","targetProperty":"text"}, {}]
}]
}]
}],
navHome: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Main\"","targetProperty":"pageName"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
lblTitle: ["wm.Label", {"caption":"MC / GC Registration","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"350px"}, {}]
}],
panel3: ["wm.Panel", {"height":"269px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
radioButton1Panel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
rBtnMC: ["wm.RadioButton", {"border":"0","caption":"MC","captionSize":"30px","checkedValue":1,"dataType":"number","displayValue":1,"groupValue":1,"height":"25px","startChecked":true,"width":"80px"}, {}],
rBtnGC: ["wm.RadioButton", {"border":"0","caption":"GC","captionSize":"30px","checkedValue":2,"dataType":"number","displayValue":0,"groupValue":1,"height":"25px","width":"80px"}, {}]
}],
panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel7: ["wm.Panel", {"height":"80px","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
txtAcctNo: ["wm.Text", {"border":"0","caption":"Account Number : ","captionSize":"150px","dataValue":"","displayValue":"","emptyValue":"emptyString","formatter":undefined,"height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"350px"}, {}],
txtAmount: ["wm.Number", {"border":"0","caption":"Amount : ","captionSize":"150px","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","margin":"0,0,0,0","minimum":0,"places":2,"required":true,"styles":{},"width":"350px"}, {}],
dtCheck: ["wm.Date", {"border":"0","caption":"Check Date :","captionSize":"150px","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"350px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date();","targetProperty":"minimum"}, {}]
}]
}]
}],
panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {"onEnterKeyPress":"panel11EnterKeyPress"}, {
btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"notifConfirm"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${panel7.invalid} || (!${rBtnMC.checked} && !${rBtnGC.checked})","targetProperty":"disabled"}, {}]
}]
}],
button4: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"navHome"}]
}]
}]
}]
}]
}]
};

CSR_MCGCISSNCE.prototype._cssText = '';
CSR_MCGCISSNCE.prototype._htmlText = '';