dojo.declare("SYSAD_DOC_SETUP", wm.Page, {
start: function() {
this.svList.update();
},
"preferredDevice": "desktop",
btnAddClick: function(inSender) {
this.dlgDocument.show();
this.dlgDocument.setValue("title", "Add Document");
this.fDocCode.setValue("readonly",false);
},
btnSubmitClick: function(inSender) {
this.svAddUpdate.update();
},
svAEResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="updated"){
this.dlgDocument.hide();
this.svList.update();
this.containerWidget.clearData();
app.toastSuccess("Document updated", 3000);
}else{
this.dlgDocument.hide();
this.svList.update();
this.containerWidget.clearData();
app.toastSuccess("New Document created", 3000);
}
},
btnCloseClick: function(inSender) {
this.dlgDocument.hide();
this.containerWidget.clearData();
this.dgDocument.deselectAll();
},
//	dgDocumentGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
//		  console.log(rowData);
//          app.confirm("Delete terminal?", false,
//            dojo.hitch(this, function() {
//                this.svDelete.input.setValue("id", rowData.id);
//                this.svDelete.update();
//            }),
//            dojo.hitch(this, function(){
//                this.svList.update();
//            }), "Yes", "No");
//	},
svDeleteResult: function(inSender, inDeprecated) {
console.log(inSender);
if(inSender.getData().dataValue=="0"){
app.alert("Error in routine!");
}else if(inSender.getData().dataValue=="1"){
app.alert("Terminal deleted!");
this.svList.update();
}
},
dgDocumentClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
this.fDocCode.setValue("readonly",true);
this.dlgDocument.show();
},
_end: 0
});

SYSAD_DOC_SETUP.widgets = {
svList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListDocument","service":"UtilFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getListDocumentInputs"}, {}]
}],
svDelete: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"deleteTerminal","service":"UtilFacade"}, {"onResult":"svDeleteResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"deleteTerminalInputs"}, {}]
}],
svAddUpdate: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addOrupdateDoc","service":"UtilFacade"}, {"onResult":"svAEResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"addOrupdateDocInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"data.unitid"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"data.createdby"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fDocCode.dataValue","targetProperty":"data.ipadd"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"fDocName.dataValue","targetProperty":"data.terminalno"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fDocName.dataValue","targetProperty":"data.terminal"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"fDocCode.dataValue","targetProperty":"data.ipaddress"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"fDocCode.dataValue","targetProperty":"doc.documentcode"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"fDocName.dataValue","targetProperty":"doc.documentname"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"fRemarks.dataValue","targetProperty":"doc.remarks"}, {}]
}]
}]
}],
dlgDocument: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"175px","height":"175px","styles":{},"title":undefined,"width":"400px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
fDocCode: ["wm.Text", {"border":"0","caption":"Document Code:","captionSize":"120px","displayValue":"","height":"25px","required":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dgDocument.selectedItem.documentcode","targetProperty":"dataValue"}, {}]
}]
}],
fDocName: ["wm.Text", {"border":"0","caption":"Document Name:","captionSize":"120px","displayValue":"","height":"25px","required":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dgDocument.selectedItem.documentname","targetProperty":"dataValue"}, {}]
}]
}],
fRemarks: ["wm.Text", {"border":"0","caption":"Remarks:","captionSize":"120px","displayValue":"","height":"25px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dgDocument.selectedItem.remarks","targetProperty":"dataValue"}, {}]
}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"36px","height":"36px"}, {}, {
btnSubmit: ["wm.Button", {"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","styles":{},"width":"90px"}, {"onclick":"btnSubmitClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${fDocCode.invalid} || ${fDocName.invalid}","targetProperty":"disabled"}, {}]
}]
}],
btnClose: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"25px","height":"25px","margin":"0,0,0,0","styles":{},"width":"80px"}, {"onclick":"btnCloseClick"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Document Maintenance","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"257px"}, {}]
}],
panel3: ["wm.Panel", {"height":"320px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"650px"}, {}, {
spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
dgDocument: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"createdby","title":"Createdby","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Document Code: \" + ${documentcode} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Document Name: \" + ${documentname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Remarks: \" + ${remarks}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"btn","title":"Action","width":"100px","align":"center","formatFunc":"wm_button_formatter","expression":"\"Delete\"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"documentcode","title":"Document Code","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"documentname","title":"Document Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"remarks","title":"Remarks","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datecreated","title":"Datecreated","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"updatedby","title":"Updatedby","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"lastupdated","title":"Lastupdated","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false}
],"dsType":"com.smslai_eoddb.data.Tbterminal","height":"100%","minDesktopHeight":60,"singleClickEdit":true}, {"onClick":"dgDocumentClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svList","targetProperty":"dataSet"}, {}]
}]
}]
}],
btnAdd: ["wm.Button", {"border":"1","caption":"Add Document","desktopHeight":"30px","height":"30px","margin":"5,0,0,0","styles":{},"width":"110px"}, {"onclick":"btnAddClick"}]
}]
}]
};

SYSAD_DOC_SETUP.prototype._cssText = '';
SYSAD_DOC_SETUP.prototype._htmlText = '';