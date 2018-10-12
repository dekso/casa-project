dojo.declare("CSR_PSSBKISSNCE", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
svSearchAccountResult: function(inSender, inDeprecated) {
if(inSender.getData().result=="1"){
app.toastSuccess("Account Found!", 3000);
}
else if(inSender.getData().result=="0"){
app.toastError("Account Does Not Found/Exist!", 3000);
}
},
svCheckAccountResult: function(inSender, inDeprecated) {
console.log(inSender.getData());
if(inSender.getData().result=="0"){
this.lblResult.setCaption("<b><font color='red'>Account No. doesn't exist!");
}else if(inSender.getData().result=="1"){
if(inSender.getData().prodtype == "20"){
this.lblResult.setCaption("<b><font color='blue'>Account Number found!");
}else{
this.lblResult.setCaption("<b><font color='red'>Invalid Account No.");
}
}else if(inSender.getData().result=="503"){
this.lblResult.setCaption("<b><font color='red'>Host not available!");
}
},
svSaveResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue == "success"){
app.toastSuccess("Passbook Issuance successful.", 3000);
this.formPanel1.clearData();
this.lblResult.setCaption("");
}else if(inSender.getData().dataValue == "exist"){
app.toastError("Existing passbook serial number.", 3000);
}else{
app.toastError("Error while saving.", 3000);
}
},
_end: 0
});

CSR_PSSBKISSNCE.widgets = {
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
svSave: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"passbookIssuance","service":"MiscTxFacade"}, {"onResult":"svSaveResult"}, {
input: ["wm.ServiceInput", {"type":"passbookIssuanceInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"pbissuance.accountno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"acctOldPssbkSN.dataValue","targetProperty":"pbissuance.oldpassbksn"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"pbissuance.brid"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"acctRemarks.dataValue","targetProperty":"pbissuance.remarks"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"acctRsnPssbkIssnce.selectedItem","targetProperty":"pbissuance.issuancetype"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"acctTxDate.dataValue","targetProperty":"pbissuance.txdate"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"pbissuance.txby"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"acctNewPssbkSN.dataValue","targetProperty":"pbissuance.newpssbksn"}, {}]
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
label1: ["wm.Label", {"caption":"PASSBOOK ISSUANCE REQUEST","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
acctTxDate: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"230px","displayValue":"10/12/2018","height":"25px","width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date();","targetProperty":"dataValue"}, {}]
}]
}],
formPanel1: ["wm.FormPanel", {"desktopHeight":"185px","height":"185px"}, {}, {
panel5: ["wm.Panel", {"height":"177px","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"760px"}, {}, {
spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctNoPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
acctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"228px","displayValue":"","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"450px"}, {"onchange":"svCheckAccount"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
}]
}],
lblResult: ["wm.Label", {"padding":"4","width":"300px"}, {}]
}],
spacer4: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctOldPssbkSN: ["wm.Text", {"border":"0","caption":"Old Passbook Serial Number:","captionSize":"230px","dataValue":"","displayValue":"","emptyValue":"emptyString","height":"25px","margin":"0,0,0,0","styles":{},"width":"450px"}, {}],
spacer2: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctNewPssbkSN: ["wm.Text", {"border":"0","caption":"New Passbook Serial Number:","captionSize":"230px","dataValue":"","displayValue":"","emptyValue":"emptyString","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"450px"}, {}],
spacer3: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctRemarks: ["wm.Text", {"border":"0","caption":"Remarks:","captionSize":"230px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"450px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
}]
}],
spacer5: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctRsnPssbkIssnce: ["wm.SelectMenu", {"border":"0","caption":"Reason for Passbook Issuance Request:","captionSize":"230px","dataValue":undefined,"displayValue":"","height":"25px","width":"450px"}, {}]
}]
}],
panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
button3: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSave"}],
button4: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}]
}]
}]
}]
}]
};

CSR_PSSBKISSNCE.prototype._cssText = '';
CSR_PSSBKISSNCE.prototype._htmlText = '';