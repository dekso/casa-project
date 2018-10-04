dojo.declare("CSR_OPENACCT_SSA", wm.Page, {
start: function() {
this.btnJournal.setCaption("View Journal");
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
btnJournalClick: function(inSender) {
if(this.layer2.isActive()){
this.btnJournal.setCaption("View Journal");
this.layer1.activate();
}else{
this.layer2.activate();
this.btnJournal.setCaption("Close Journal");
}
},
AcctSaveClick: function(inSender) {
this.btnJournalClick(inSender);
},
AcctBackClick: function(inSender) {
this.AcctSaveClick(inSender);
},
_end: 0
});

CSR_OPENACCT_SSA.widgets = {
svSearchAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"accountInquiry","service":"FinTxFacade"}, {"onResult":"svSearchAccountResult"}, {
input: ["wm.ServiceInput", {"type":"accountInquiryInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"acctno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fAcctName.dataValue","targetProperty":"name"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}]
}],
searchResultDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Search Result"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"15px"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"SETUP NEW ACCOUNT","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel3: ["wm.Panel", {"height":"30px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label2: ["wm.Label", {"align":"center","caption":"CUSTOMER DETAILS","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel4Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.result}==1","targetProperty":"showing"}, {}]
}],
panel5: ["wm.Panel", {"height":"35%","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctProdType: ["wm.SelectMenu", {"border":"0","caption":"Product Type:","captionSize":"170px","dataValue":undefined,"displayValue":"","height":"25px","width":"370px"}, {}],
spacer4: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctOwnrshpType: ["wm.SelectMenu", {"border":"0","caption":"Ownership Type:","captionSize":"170px","dataValue":undefined,"displayValue":"","height":"25px","width":"370px"}, {}],
spacer2: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctCIFIDPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"372%"}, {}, {
acctCIFID: ["wm.Text", {"border":"0","caption":"Customer CIF ID#1:","captionSize":"170px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"370px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
}]
}],
button5: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Search","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}],
acctFullname: ["wm.Text", {"border":"0","caption":"Full Name:","captionSize":"110px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"350px"}, {}]
}],
spacer5: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctCustFullname: ["wm.Text", {"border":"0","caption":"Customer Whole Name:","captionSize":"170px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"550px"}, {}]
}],
panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
button3: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Continue","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}],
button4: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}]
}]
}]
}]
}]
}]
};

CSR_OPENACCT_SSA.prototype._cssText = '';
CSR_OPENACCT_SSA.prototype._htmlText = '';