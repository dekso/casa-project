dojo.declare("CSHR_GL_JNLENTRY", wm.Page, {
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

CSHR_GL_JNLENTRY.widgets = {
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
label1: ["wm.Label", {"caption":"JOURNAL ENTRY","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.result}==1","targetProperty":"showing"}, {}]
}],
panel5: ["wm.Panel", {"height":"30%","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"410px"}, {}, {
acctTxDate: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"200px","displayValue":"9/21/2017","height":"25px","width":"400px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date();","targetProperty":"dataValue"}, {}]
}]
}],
spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctRefNo: ["wm.Text", {"border":"0","caption":"Reference Number:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}],
spacer3: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctDesc: ["wm.Text", {"border":"0","caption":"Description:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
}]
}],
spacer4: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctCur: ["wm.SelectMenu", {"border":"0","caption":"Currency:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}],
spacer2: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}]
}],
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"center","styles":{},"verticalAlign":"top","width":"25%"}, {}, {
label2: ["wm.Label", {"align":"center","caption":"GL Account","padding":"4","styles":{"color":"#020202","fontWeight":"bold"}}, {}],
selectMenu1: ["wm.SelectMenu", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"25px","width":"90%"}, {}],
selectMenu2: ["wm.SelectMenu", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"25px","width":"90%"}, {}],
selectMenu3: ["wm.SelectMenu", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"25px","width":"90%"}, {}],
selectMenu4: ["wm.SelectMenu", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"25px","width":"90%"}, {}],
selectMenu5: ["wm.SelectMenu", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"25px","width":"90%"}, {}],
selectMenu6: ["wm.SelectMenu", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"25px","width":"90%"}, {}],
selectMenu7: ["wm.SelectMenu", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"25px","width":"90%"}, {}],
selectMenu8: ["wm.SelectMenu", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"25px","width":"90%"}, {}],
selectMenu9: ["wm.SelectMenu", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"25px","width":"90%"}, {}],
selectMenu10: ["wm.SelectMenu", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"25px","width":"90%"}, {}],
spacer12: ["wm.Spacer", {"height":"15px","styles":{},"width":"10px"}, {}],
label6: ["wm.Label", {"align":"center","caption":"Running Bal","padding":"4","styles":{"color":"#020202","fontWeight":"bold"}}, {}]
}],
panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"25%"}, {}, {
label3: ["wm.Label", {"align":"center","caption":"Debit","padding":"4","styles":{"color":"#020202","fontWeight":"bold"}}, {}],
acctDebit1: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctDebit2: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctDebit3: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctDebit4: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctDebit5: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctDebit6: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctDebit7: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctDebit8: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctDebit9: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctDebit10: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
spacer13: ["wm.Spacer", {"height":"15px","styles":{},"width":"10px"}, {}],
acctDebit11: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}]
}],
panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"25%"}, {}, {
label4: ["wm.Label", {"align":"center","caption":"Credit","padding":"4","styles":{"color":"#020202","fontWeight":"bold"}}, {}],
acctCredit1: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctCredit2: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctCredit3: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctCredit4: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctCredit5: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctCredit6: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctCredit7: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctCredit8: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctCredit9: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctCredit10: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
spacer14: ["wm.Spacer", {"height":"15px","styles":{},"width":"10px"}, {}],
acctCredit11: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}]
}],
panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"25%"}, {}, {
label5: ["wm.Label", {"align":"center","caption":"Remarks","padding":"4","styles":{"color":"#020202","fontWeight":"bold"}}, {}],
acctRemarks1: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctRemarks2: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctRemarks3: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctRemarks4: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctRemarks5: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctRemarks6: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctRemarks7: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctRemarks8: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctRemarks9: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}],
acctRemarks10: ["wm.Text", {"border":"0","caption":undefined,"captionSize":"10px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"90%"}, {}]
}]
}],
panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
button3: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}],
button4: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}]
}]
}]
}]
}]
};

CSHR_GL_JNLENTRY.prototype._cssText = '';
CSHR_GL_JNLENTRY.prototype._htmlText = '';