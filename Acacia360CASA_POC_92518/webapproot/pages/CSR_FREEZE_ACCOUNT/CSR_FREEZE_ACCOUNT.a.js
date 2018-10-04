dojo.declare("CSR_FREEZE_ACCOUNT", wm.Page, {
start: function() {
this.svCurrency.update();
this.svHoldReason.update();
},
"preferredDevice": "desktop",
svPlaceHoldResult: function(inSender, inDeprecated) {
if(inSender.getData().result=="0"){
app.alert("Account not found/exist!");
}else if(inSender.getData().result=="1"){
app.alert("Place Hold Amount Successful!");
this.panel1.clearData();
}else if(inSender.getData().result=="2"){
app.alert("Insufficient Balance!");
}else if(inSender.getData().result=="3"){
app.alert("Error in Routine!");
}
},
btnSearchClick: function(inSender) {
this.svCheckAccount.update();
},
svCheckAccountResult: function(inSender, inDeprecated) {
if(inSender.getData().result=="0"){
//app.alert("Account no does not exist!");
this.lblResult.setCaption("<b><font color='red'>Record does not exist!");
this.acctName.setDataValue("");
}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
this.lblResult.setCaption("<b><font color='blue'>Record found!");
this.acctName.setDataValue(inSender.getData().name);
}
},
onFocusField: function(inSender) {
//console.log(inSender.name);
var clearobj = this[inSender.name];
clearobj.clear();
},
svFreezeAcctResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="1"){
app.alert("Account Freeze Successful!");
this.panel5.clearData();
}else if(inSender.getData().dataValue=="0"){
app.alert("Error in routine!");
}else if(inSender.getData().dataValue=="503"){
app.alert("Host unavailable!");
}
},
button3Click: function(inSender) {
app.confirm("Proceed to freeze account?", false,
dojo.hitch(this, function() {
this.svFreezeAcct.update();
this.lblResult.setCaption("");
}),
dojo.hitch(this, function() {
}));
},
_end: 0
});

CSR_FREEZE_ACCOUNT.widgets = {
svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CURR\"","targetProperty":"codename"}, {}]
}]
}]
}],
svHoldReason: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {"onResult":"svHoldReasonResult"}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"HOLDREASON\"","targetProperty":"codename"}, {}]
}]
}]
}],
svPlaceHold: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"placeHoldAmt","service":"AccountFacade"}, {"onResult":"svPlaceHoldResult"}, {
input: ["wm.ServiceInput", {"type":"placeHoldAmtInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"1","targetProperty":"record.status"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"acctRemarks.dataValue","targetProperty":"record.remarks"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"acctExpDate.dataValue","targetProperty":"record.expirydate"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"acctReason.dataValue","targetProperty":"record.holdreason"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"acctAmt.dataValue","targetProperty":"record.amount"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"acctValDate.dataValue","targetProperty":"record.validitydate"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"record.accountno"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"record.holdby"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"record.datehold"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"record.instcode"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"record.unit"}, {}],
wire11: ["wm.Wire", {"expression":"1","targetProperty":"record.txcode"}, {}]
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
svFreezeAcct: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"freezeAccount","service":"AccountFacade"}, {"onResult":"svFreezeAcctResult"}, {
input: ["wm.ServiceInput", {"type":"freezeAccountInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"data.freezedate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"data.accountno"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"acctRemarks.dataValue","targetProperty":"data.remarks"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"data.freezeby"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"acctExpDate.dataValue","targetProperty":"data.validitydate"}, {}]
}]
}]
}],
searchResultDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Search Result"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"15px"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label2: ["wm.Label", {"caption":"Freeze Account","height":"30px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel5: ["wm.Panel", {"height":"109px","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"652.02105px"}, {}, {
fAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
acctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {"onfocus":"onFocusField"}],
btnSearch: ["wm.Button", {"border":"1","caption":"Search","height":"100%","width":"80px"}, {"onclick":"btnSearchClick"}],
lblResult: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
}],
acctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"width":"600px"}, {"onfocus":"onFocusField"}],
acctExpDate: ["wm.Date", {"border":"0","caption":"Expiry Date:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","width":"280px"}, {}],
acctRemarks: ["wm.Text", {"border":"0","caption":"Remarks:","captionSize":"135px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
}]
}]
}],
panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
button3: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"button3Click"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${acctName.dataValue}==null || ${acctName.dataValue}==\"\"","targetProperty":"disabled"}, {}]
}]
}],
button4: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}]
}]
}]
}]
}]
};

CSR_FREEZE_ACCOUNT.prototype._cssText = '';
CSR_FREEZE_ACCOUNT.prototype._htmlText = '';