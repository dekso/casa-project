dojo.declare("CSHR_PLCECHKSTPPYMNTORDR", wm.Page, {
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

CSHR_PLCECHKSTPPYMNTORDR.widgets = {
searchResultDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Search Result"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"15px"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"PLACE CHECK STOP PAYMENT ORDER","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel5: ["wm.Panel", {"height":"198px","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"410px"}, {}, {
acctTxDate: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"200px","displayValue":"10/14/2017","height":"25px","width":"400px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date();","targetProperty":"dataValue"}, {}]
}]
}],
acctNo: ["wm.Text", {"border":"0","caption":"Account Number:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
}]
}],
spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctChkNo: ["wm.Text", {"border":"0","caption":"Check Number:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
}]
}],
spacer2: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctValDate: ["wm.Date", {"border":"0","caption":"Validity Date:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}],
spacer3: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctRsnfrStpPymnt: ["wm.SelectMenu", {"border":"0","caption":"Reason for Stop Payment:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}],
spacer4: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
acctRemarks: ["wm.Text", {"border":"0","caption":"Remarks:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
}]
}],
radioButton1Panel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
acctCharge: ["wm.RadioButton", {"border":"0","caption":"Charge","captionPosition":"right","displayValue":"","height":"25px","width":"85px"}, {}],
acctWave: ["wm.RadioButton", {"border":"0","caption":"Wave","captionPosition":"right","displayValue":"","height":"25px","width":"120px"}, {}]
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

CSHR_PLCECHKSTPPYMNTORDR.prototype._cssText = '';
CSHR_PLCECHKSTPPYMNTORDR.prototype._htmlText = '';