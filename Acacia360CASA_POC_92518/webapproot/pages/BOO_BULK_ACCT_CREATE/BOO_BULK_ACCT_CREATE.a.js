dojo.declare("BOO_BULK_ACCT_CREATE", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
dojoFileUpload1Success: function(inSender, fileList) {
this.label4.setCaption("File Uploaded");
},
svBulkAcctCreateSuccess: function(inSender, inDeprecated) {
app.alert("Account Generated Successful!");
},
_end: 0
});

BOO_BULK_ACCT_CREATE.widgets = {
svGetBatchList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getBatchList","service":"SigcardFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getBatchListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fBatchStatusFilter.selectedItem.dataValue","targetProperty":"batchstatus"}, {}]
}]
}]
}],
svBulkAcctCreate: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"bulkAccountCreate","service":"SigcardFacade"}, {"onSuccess":"svBulkAcctCreateSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"bulkAccountCreateInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dojoFileUpload1.variable.name","targetProperty":"filename"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","margin":"10,40,0,40","styles":{},"verticalAlign":"top"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Bulk Account Creation","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
spacer1: ["wm.Spacer", {"height":"18px","width":"96px"}, {}],
panel1: ["wm.Panel", {"height":"73px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
label2Panel: ["wm.Panel", {"height":"29px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"450px"}, {}, {
label2: ["wm.Label", {"caption":"Select File :","padding":"4","width":"98px"}, {}],
dojoFileUpload1: ["wm.DojoFileUpload", {"buttonCaption":"Upload File","height":"25px","operation":"uploadCsvFile","styles":{},"useList":false,"width":"150px"}, {"onSuccess":"dojoFileUpload1Success"}, {
input: ["wm.ServiceInput", {"type":"uploadCsvFileInputs"}, {}]
}],
label4: ["wm.Label", {"caption":"","padding":"4"}, {}]
}],
spacer2: ["wm.Spacer", {"height":"9px","width":"96px"}, {}],
btnProcess: ["wm.Button", {"border":"1","caption":"Process File","desktopHeight":"24px","height":"24px","width":"102px"}, {"onclick":"svBulkAcctCreate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dojoFileUpload1.invalid","targetProperty":"disabled"}, {}]
}]
}]
}],
label3: ["wm.Label", {"caption":"Generated Account","padding":"4","styles":{"fontWeight":"bold"}}, {}],
dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"accountno","title":"Accountno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"cifno","title":"Cifno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"cifname","title":"Cifname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Accountno: \" + ${accountno} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Cifno: \" + ${cifno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Cifname: \" + ${cifname}\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"254px","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBulkAcctCreate","targetProperty":"dataSet"}, {}]
}]
}]
}]
};

BOO_BULK_ACCT_CREATE.prototype._cssText = '';
BOO_BULK_ACCT_CREATE.prototype._htmlText = '';