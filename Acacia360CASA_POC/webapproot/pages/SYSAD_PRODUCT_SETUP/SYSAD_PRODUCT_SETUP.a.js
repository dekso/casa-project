dojo.declare("SYSAD_PRODUCT_SETUP", wm.Page, {
start: function() {
this.svProductList.update();
this.svProdGroup.update();
this.svCurrency.update();
this.svBalCompBas.update();
this.svBalType.update();
this.svFreqCycle.update();
this.svPeriod.update();
this.svPostTx.update();
this.svIntType.update();
this.codeIntPlan.update();
},
"preferredDevice": "desktop",
svSaveResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="0"){
app.alert("Error in Routine!");
}else if(inSender.getData().dataValue=="1"){
app.alert("Already Existing!");
}else if(inSender.getData().dataValue=="2" && this.svSave.input.getValue("input.id")==null){
app.alert("Creating New Product Successful!");
this.panelData.clearData();
this.dlgProduct.hide();
this.svProductList.update();
}else if(inSender.getData().dataValue=="2" && this.svSave.input.getValue("input.id")!=null){
app.alert("Updating Product Successful!");
this.panelData.clearData();
this.svSave.input.clearData();
this.dlgProduct.hide();
this.svProductList.update();
}
},
gridProductGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
if(fieldName=="btnedit"){
this.svProdDetail.input.setValue("id", rowData.id);
this.svProdDetail.update();
this.dlgProduct.setValue("title", "Edit Product Detail");
this.svSave.input.setValue("input.id", rowData.id);
}
},
svProdDetailResult: function(inSender, inDeprecated) {
this.dlgProduct.show();
//console.log(inSender.getData());
},
btnCloseClick: function(inSender) {
this.svSave.input.setValue("id", null);
this.dlgProduct.hide();
},
btnAddClick: function(inSender) {
this.dlgProduct.show();
},
dlgProductClose: function(inSender, inWhy) {
this.gridProduct.deselectAll();
this.panelData.clearData();
},
gridProduct1GridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
this.gridProductGridButtonClick(inSender, fieldName, rowData, rowIndex);
},
btnAdd1Click: function(inSender) {
this.btnAddClick(inSender);
},
gridProduct2GridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
this.gridProduct1GridButtonClick(inSender, fieldName, rowData, rowIndex);
},
btnAdd2Click: function(inSender) {
this.btnAdd1Click(inSender);
},
gridProduct3GridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
this.gridProduct2GridButtonClick(inSender, fieldName, rowData, rowIndex);
},
btnAdd3Click: function(inSender) {
this.btnAdd2Click(inSender);
},
_end: 0
});

SYSAD_PRODUCT_SETUP.widgets = {
svProdGroup: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PRODUCTGROUP\"","targetProperty":"codename"}, {}]
}]
}]
}],
svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CURR\"","targetProperty":"codename"}, {}]
}]
}]
}],
svSave: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"aeProduct","service":"UtilFacade"}, {"onResult":"svSaveResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"aeProductInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fProdCode.dataValue","targetProperty":"input.prodcode"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"selProdtGroup.dataValue","targetProperty":"input.prodgroup"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fProdName.dataValue","targetProperty":"input.prodname"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"selCurrency.dataValue","targetProperty":"input.currency"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fShortName.dataValue","targetProperty":"input.prodsname"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"fMinTermReq.dataValue","targetProperty":"input.minterm"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"fMaxTermReq.dataValue","targetProperty":"input.maxterm"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"fReqMoDepAmt.dataValue","targetProperty":"input.reqmonthlydepamt"}, {}],
wire15: ["wm.Wire", {"expression":undefined,"source":"fReqInitDepAmt.dataValue","targetProperty":"input.reqinitialdepamt"}, {}],
wire17: ["wm.Wire", {"expression":undefined,"source":"fMinBalEarnInt.dataValue","targetProperty":"input.minbalei"}, {}],
wire22: ["wm.Wire", {"expression":undefined,"source":"fPretermPlan.dataValue","targetProperty":"input.pretermplan"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"fMaxPeriod.selectedItem.id","targetProperty":"input.maxperiod"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"fMinPeriod.selectedItem.id","targetProperty":"input.minperiod"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selFreqSOAPrint.selectedItem.id","targetProperty":"input.freqsoaprint"}, {}],
wire16: ["wm.Wire", {"expression":undefined,"source":"selReqDepFreq.selectedItem.id","targetProperty":"input.reqdepfreq"}, {}],
wire21: ["wm.Wire", {"expression":undefined,"source":"selFreqIntPosting.selectedItem.id","targetProperty":"input.freqintpost"}, {}],
wire20: ["wm.Wire", {"expression":undefined,"source":"selFreqIntComp.selectedItem.id","targetProperty":"input.freqintcomp"}, {}],
wire18: ["wm.Wire", {"expression":undefined,"source":"selFreqIntPayout.selectedItem.id","targetProperty":"input.freqintpayout"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"selBalComp.selectedItem.id","targetProperty":"input.balcomp"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"selIntType.selectedItem.id","targetProperty":"input.inttype"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"selPostTx.selectedItem.id","targetProperty":"input.posttx"}, {}],
wire25: ["wm.Wire", {"expression":undefined,"source":"selBalCompBasis.selectedItem.id","targetProperty":"input.rbmbalcomp"}, {}],
wire26: ["wm.Wire", {"expression":undefined,"source":"seFreqComp.selectedItem.id","targetProperty":"input.rbmfreqcomp"}, {}],
wire27: ["wm.Wire", {"expression":undefined,"source":"fServiceChargeBelMinBal.dataValue","targetProperty":"input.rbmchrgbelminbal"}, {}],
wire28: ["wm.Wire", {"expression":undefined,"source":"selBalType.selectedItem.id","targetProperty":"input.rbmbaltype"}, {}],
wire29: ["wm.Wire", {"expression":undefined,"source":"fMinMaintnngBal.dataValue","targetProperty":"input.rbmminmainbal"}, {}],
wire30: ["wm.Wire", {"expression":"0","targetProperty":"input.sequence"}, {}],
wire36: ["wm.Wire", {"expression":undefined,"source":"fBaseyear.dataValue","targetProperty":"input.baseyear"}, {}],
wire39: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"input.createdby"}, {}],
wire40: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"input.instcode"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selTypeOfBalToUse.dataValue","targetProperty":"input.baltype"}, {}],
wire32: ["wm.Wire", {"expression":"if(${wSOA.dataValue}==\"0\"||${wSOA.dataValue}==0){\n    false\n}else{\n    true\n}","targetProperty":"input.soaind"}, {}],
wire34: ["wm.Wire", {"expression":"if(${wCheckbook.dataValue}==\"0\"||${wCheckbook.dataValue}==0){\r\n    false\r\n}else{\r\n    true\r\n}","targetProperty":"input.checkbookind"}, {}],
wire33: ["wm.Wire", {"expression":"if(${wCertTD.dataValue}==\"0\"||${wCertTD.dataValue}==0){\r\n    false\r\n}else{\r\n    true\r\n}","targetProperty":"input.certtimedepind"}, {}],
wire35: ["wm.Wire", {"expression":"if(${wAtm.dataValue}==\"0\"||${wAtm.dataValue}==0){\r\n    false\r\n}else{\r\n    true\r\n}","targetProperty":"input.atmind"}, {}],
wire31: ["wm.Wire", {"expression":"if(${wPassbook.dataValue}==\"0\"||${wPassbook.dataValue}==0){\r\n    false\r\n}else{\r\n    true\r\n}","targetProperty":"input.passbookind"}, {}],
wire37: ["wm.Wire", {"expression":"if(${wDocStamp.dataValue}==\"0\"||${wDocStamp.dataValue}==0){\r\n    false\r\n}else{\r\n    true\r\n}","targetProperty":"input.docstampind"}, {}],
wire38: ["wm.Wire", {"expression":"if(${wATA.dataValue}==\"0\"||${wATA.dataValue}==0){\r\n    false\r\n}else{\r\n    true\r\n}","targetProperty":"input.ataind"}, {}],
wire19: ["wm.Wire", {"expression":"${fIntRate.dataValue}/100","targetProperty":"input.intrate"}, {}],
wire23: ["wm.Wire", {"expression":"${fWTaxRate.dataValue}/100","targetProperty":"input.wtaxrate"}, {}],
wire41: ["wm.Wire", {"expression":undefined,"source":"fDormancyNo.dataValue","targetProperty":"input.dormancytermno"}, {}],
wire42: ["wm.Wire", {"expression":undefined,"source":"fESCheatPeriod.dataValue","targetProperty":"input.escheattermperiod"}, {}],
wire43: ["wm.Wire", {"expression":undefined,"source":"fDormancyPeriod.dataValue","targetProperty":"input.dormancytermperiod"}, {}],
wire44: ["wm.Wire", {"expression":undefined,"source":"fAge.dataValue","targetProperty":"input.age"}, {}],
wire45: ["wm.Wire", {"expression":undefined,"source":"fInactiveNo.dataValue","targetProperty":"input.inactivetermno"}, {}],
wire46: ["wm.Wire", {"expression":undefined,"source":"fESCheatNo.dataValue","targetProperty":"input.escheattermno"}, {}],
wire47: ["wm.Wire", {"expression":undefined,"source":"fInactivePeriod.dataValue","targetProperty":"input.inactivetermperiod"}, {}],
wire48: ["wm.Wire", {"expression":undefined,"source":"fMaxBalance.dataValue","targetProperty":"input.maxbalance"}, {}],
wire24: ["wm.Wire", {"expression":undefined,"source":"fIntPlan.selectedItem.id","targetProperty":"input.intplan"}, {}]
}]
}]
}],
svBalCompBas: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"BALCOMPBAS\"","targetProperty":"codename"}, {}]
}]
}]
}],
svPeriod: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"PERIOD\"","targetProperty":"codename"}, {}]
}]
}]
}],
svBalType: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"BALTYPE\"","targetProperty":"codename"}, {}]
}]
}]
}],
svFreqCycle: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"FREQCYCLE\"","targetProperty":"codename"}, {}]
}]
}]
}],
svPostTx: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"POSTTX\"","targetProperty":"codename"}, {}]
}]
}]
}],
varBoolean: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Yes\",\"dataValue\":\"1\"},{\"name\":\"No\",\"dataValue\":\"0\"}]","type":"EntryData"}, {}],
varBaseyear: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"360\",\"dataValue\":\"360\"},{\"name\":\"365\",\"dataValue\":\"365\"}]","type":"EntryData"}, {}],
svIntType: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"INTTYPE\"","targetProperty":"codename"}, {}]
}]
}]
}],
svProductList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"productList","service":"UtilFacade"}, {"onResult":"svProductListResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"productListInputs"}, {}]
}],
svProdDetail: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getProductDetail","service":"UtilFacade"}, {"onResult":"svProdDetailResult"}, {
input: ["wm.ServiceInput", {"type":"getProductDetailInputs"}, {}]
}],
codeIntPlan: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"INTPLAN\"","targetProperty":"codename"}, {}]
}]
}]
}],
dlgProduct: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"600px","height":"600px","styles":{},"width":"950px"}, {"onClose":"dlgProductClose"}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
panel3Panel: ["wm.Panel", {"height":"670px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panelData: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,3","styles":{},"verticalAlign":"top","width":"60%"}, {}, {
label2: ["wm.Label", {"caption":"Basic Information","padding":"4","styles":{"color":"#535050","fontWeight":"bolder"},"width":"100%"}, {}],
selProdtGroup: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Product Group:","captionSize":"165px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","height":"25px","required":true,"width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdGroup","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.prodgroup","targetProperty":"dataValue"}, {}]
}]
}],
fProdCode: ["wm.Text", {"border":"0","caption":"Product Code:","captionSize":"165px","displayValue":"","height":"25px","maxChars":"2","required":true,"width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.prodcode","targetProperty":"dataValue"}, {}]
}]
}],
fProdName: ["wm.Text", {"border":"0","caption":"Product Name:","captionSize":"165px","displayValue":"","height":"25px","required":true,"width":"330px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.prodname","targetProperty":"dataValue"}, {}]
}]
}],
fShortName: ["wm.Text", {"border":"0","caption":"Short Name:","captionSize":"165px","displayValue":"","height":"25px","required":true,"width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.prodsname","targetProperty":"dataValue"}, {}]
}]
}],
selCurrency: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"165px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.currency","targetProperty":"dataValue"}, {}]
}]
}],
fReqInitDepAmt: ["wm.Number", {"border":"0","caption":"Req Initial Deposit Amount:","captionSize":"165px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"styles":{},"width":"280px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${svProdDetail.isEmpty}){\r\n    0.00\r\n}else{\r\n    ${svProdDetail.reqinitialdepamt}\r\n}","targetProperty":"dataValue"}, {}]
}]
}],
fMaxBalance: ["wm.Number", {"border":"0","caption":"Maximum Balance","captionSize":"165px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"styles":{},"width":"280px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.maxbalance","targetProperty":"dataValue"}, {}]
}]
}],
fAge: ["wm.Text", {"border":"0","caption":"Age:","captionSize":"165px","displayValue":"","height":"25px","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.age","targetProperty":"dataValue"}, {}]
}]
}],
label3: ["wm.Label", {"caption":"Product Attributes","padding":"4","styles":{"color":"#535050","fontWeight":"bolder"},"width":"100%"}, {}],
fDormancyPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"352px"}, {}, {
fDormancyNo: ["wm.Number", {"border":"0","caption":"Dormancy Term Req / Period:","captionSize":"165px","displayValue":"","height":"25px","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.dormancytermno","targetProperty":"dataValue"}, {}]
}]
}],
fDormancyPeriod: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":" ","captionSize":"15px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","width":"100px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svPeriod","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.dormancytermperiod","targetProperty":"dataValue"}, {}]
}]
}]
}],
fESCheatPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"352px"}, {}, {
fESCheatNo: ["wm.Number", {"border":"0","caption":"ESCheat Term Req / Period:","captionSize":"165px","displayValue":"","height":"25px","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.escheattermno","targetProperty":"dataValue"}, {}]
}]
}],
fESCheatPeriod: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":" ","captionSize":"15px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","width":"100px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svPeriod","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.escheattermperiod","targetProperty":"dataValue"}, {}]
}]
}]
}],
fInactivePanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"352px"}, {}, {
fInactiveNo: ["wm.Number", {"border":"0","caption":"Inactive Term Req / Period:","captionSize":"165px","displayValue":"","height":"25px","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.inactivetermno","targetProperty":"dataValue"}, {}]
}]
}],
fInactivePeriod: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":" ","captionSize":"15px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","width":"100px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svPeriod","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.inactivetermperiod","targetProperty":"dataValue"}, {}]
}]
}]
}],
fMinTermReqPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"352px"}, {}, {
fMinTermReq: ["wm.Number", {"border":"0","caption":"Minimum Term Req / Period:","captionSize":"165px","displayValue":"","height":"25px","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.minterm","targetProperty":"dataValue"}, {}]
}]
}],
fMinPeriod: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":" ","captionSize":"15px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","width":"100px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svPeriod","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.minperiod","targetProperty":"dataValue"}, {}]
}]
}]
}],
fMAxTermReqPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"352px"}, {}, {
fMaxTermReq: ["wm.Number", {"border":"0","caption":"Maximum Term Req / Period:","captionSize":"165px","displayValue":"","height":"25px","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.maxterm","targetProperty":"dataValue"}, {}]
}]
}],
fMaxPeriod: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":" ","captionSize":"15px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","width":"100px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svPeriod","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.maxperiod","targetProperty":"dataValue"}, {}]
}]
}]
}],
selReqDepFreq: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Req Deposit Frequency:","captionSize":"165px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","height":"25px","width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFreqCycle","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.reqdepfreq","targetProperty":"dataValue"}, {}]
}]
}],
fReqMoDepAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Req Monthly Deposit Amount:","captionSize":"165px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"width":"280px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${svProdDetail.isEmpty}){\r\n    0.00\r\n}else{\r\n    ${svProdDetail.reqmonthlydepamt}\r\n}","targetProperty":"dataValue"}, {}]
}]
}],
RadiotSetPanel1: ["wm.Panel", {"height":"55px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
wPassbook: ["wm.RadioSet", {"border":"0","caption":"w/Passbook","captionSize":"60undefined","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","editorBorder":false,"emptyValue":"null","height":"55px","padding":"2,0,0,3","styles":{},"width":"160px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.passbookind","targetProperty":"dataValue"}, {}]
}]
}],
wCheckbook: ["wm.RadioSet", {"border":"0","caption":"w/Checkbook","captionSize":"90px","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","editorBorder":false,"emptyValue":"null","height":"55px","padding":"2,0,0,3","styles":{},"width":"180px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.checkbookind","targetProperty":"dataValue"}, {}]
}]
}],
wAtm: ["wm.RadioSet", {"border":"0","borderColor":"","caption":"w/Atm","captionSize":"50px","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","editorBorder":false,"emptyValue":"null","height":"55px","padding":"2,0,0,3","styles":{},"width":"140px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.atmind","targetProperty":"dataValue"}, {}]
}]
}]
}],
RadiotSetPanel2: ["wm.Panel", {"height":"55px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
wCertTD: ["wm.RadioSet", {"border":"0","caption":"w/Certificate of Time Deposit","captionSize":"60undefined","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","editorBorder":false,"emptyValue":"null","height":"55px","padding":"2,0,0,3","styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.certtimedepind","targetProperty":"dataValue"}, {}]
}]
}],
wSOA: ["wm.RadioSet", {"border":"0","caption":"w/Statement of Account","captionSize":"47undefined","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","editorBorder":false,"emptyValue":"null","height":"55px","padding":"2,0,0,3","styles":{},"width":"200px"}, {"onchange":"wSOAChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.soaind","targetProperty":"dataValue"}, {}]
}]
}]
}],
spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
selFreqSOAPrint: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Frequency of SOA Printing","captionSize":"165px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFreqCycle","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.freqsoaprint","targetProperty":"dataValue"}, {}]
}]
}],
selPostTx: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Initial Posting Restriction","captionSize":"165px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","height":"25px","width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svPostTx","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.posttx","targetProperty":"dataValue"}, {}]
}]
}],
btnSubmitPanel: ["wm.Panel", {"height":"61px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"bottom","width":"306px"}, {}, {
wATA: ["wm.RadioSet", {"border":"0","caption":"ATA Indicator","captionSize":"50undefined","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","editorBorder":false,"emptyValue":"null","height":"55px","padding":"2,0,0,3","styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.ataind","targetProperty":"dataValue"}, {}]
}]
}]
}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,3","styles":{},"verticalAlign":"top","width":"50%"}, {}, {
label8: ["wm.Label", {"caption":"Interest Attributes","padding":"4","styles":{"color":"#535050","fontWeight":"bolder"},"width":"100%"}, {}],
fMinBalEarnInt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Min Balance to Earn Interest","captionSize":"170px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"styles":{"textAlign":"right"},"width":"280px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${svProdDetail.isEmpty}){\r\n    0\r\n}else{\r\n    ${svProdDetail.minbalei}\r\n}","targetProperty":"dataValue"}, {}]
}]
}],
selTypeOfBalToUse: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Type of Balance to use","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBalType","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.baltype","targetProperty":"dataValue"}, {}],
wire2: ["wm.Wire", {"expression":"if(${svProdDetail.baltype}==null){\"N//A\"}","targetProperty":"displayExpression"}, {}]
}]
}],
selBalComp: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Balance Computation Basis","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBalCompBas","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.balcomp","targetProperty":"dataValue"}, {}]
}]
}],
spacer2: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
RadPanelRight: ["wm.Panel", {"height":"55px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fBaseyear: ["wm.RadioSet", {"border":"0","caption":"Base Year (360 or 365)","captionSize":"65undefined","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","editorBorder":false,"emptyValue":"null","height":"55px","padding":"2,0,0,3","styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBaseyear","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.baseyear","targetProperty":"dataValue"}, {}]
}]
}],
wDocStamp: ["wm.RadioSet", {"border":"0","caption":"w/Doc Stamp","captionSize":"45undefined","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","editorBorder":false,"emptyValue":"null","height":"55px","padding":"2,0,0,3","styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.docstampind","targetProperty":"dataValue"}, {}]
}]
}]
}],
selIntType: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Interest Type","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svIntType","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.inttype","targetProperty":"dataValue"}, {}]
}]
}],
fIntRate: ["wm.Number", {"border":"0","caption":"Interest Rate (%)","captionSize":"170px","displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${svProdDetail.isEmpty}){\r\n    0.00\r\n}else{\r\n    ${svProdDetail.intrate}*100\r\n}","targetProperty":"dataValue"}, {}]
}]
}],
fIntPlan: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Interest Plan","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"codeIntPlan","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.intplan","targetProperty":"dataValue"}, {}]
}]
}],
selFreqIntComp: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Frequency of Int Computation","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFreqCycle","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.freqintcomp","targetProperty":"dataValue"}, {}]
}]
}],
selFreqIntPosting: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Frequency of Int Posting","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFreqCycle","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.freqintpost","targetProperty":"dataValue"}, {}]
}]
}],
selFreqIntPayout: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Frequency of Int Payout","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFreqCycle","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.freqintpayout","targetProperty":"dataValue"}, {}]
}]
}],
fWTaxRate: ["wm.Number", {"border":"0","caption":"WTax Rate (%)","captionSize":"170px","displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${svProdDetail.isEmpty}){\r\n    0.00\r\n}else{\r\n    ${svProdDetail.wtaxrate}*100\r\n}","targetProperty":"dataValue"}, {}]
}]
}],
fPretermPlan: ["wm.Text", {"border":"0","caption":"Pre-termination Plan","captionSize":"170px","displayValue":"","emptyValue":"null","height":"25px","width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.pretermplan","targetProperty":"dataValue"}, {}]
}]
}],
label9: ["wm.Label", {"caption":"Required Minimum Balance Attributes","padding":"4","styles":{"color":"#535050","fontWeight":"bolder"},"width":"100%"}, {}],
fMinMaintnngBal: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Min Maintaning Balance","captionSize":"170px","displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"styles":{},"width":"280px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${svProdDetail.isEmpty}){\r\n    0\r\n}else{\r\n    ${svProdDetail.rbmminmainbal}\r\n}","targetProperty":"dataValue"}, {}]
}]
}],
selBalType: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Balance Type","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","height":"25px","width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBalType","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.rbmbaltype","targetProperty":"dataValue"}, {}]
}]
}],
selBalCompBasis: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Balance Computation Basis","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBalCompBas","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.rbmbalcomp","targetProperty":"dataValue"}, {}]
}]
}],
seFreqComp: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Frequency of Computation","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFreqCycle","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.rbmfreqcomp","targetProperty":"dataValue"}, {}]
}]
}],
fServiceChargeBelMinBal: ["wm.Number", {"border":"0","caption":"Service Charge Bel Min Bal","captionSize":"170px","displayValue":"0.00","emptyValue":"null","height":"25px","places":2,"styles":{},"width":"280px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${svProdDetail.isEmpty}){\r\n    0\r\n}else{\r\n   ${svProdDetail.rbmchrgbelminbal}\r\n}","targetProperty":"dataValue"}, {}]
}]
}]
}]
}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"37px","height":"37px"}, {}, {
btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"26px","height":"26px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"svSave"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${panel3Panel.invalid}","targetProperty":"disabled"}, {}]
}]
}],
btnClose: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Close","desktopHeight":"26px","height":"26px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseClick"}]
}]
}],
layoutBox1: ["wm.Layout", {"autoScroll":false,"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
tabLayers1: ["wm.TabLayers", {"border":"0"}, {}, {
layer1: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Product List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"15,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Product List","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"90%"}, {}, {
gridProduct: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"productgroup","title":"Product group","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"prodcode","title":"Product code","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"prodname","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"prodsname","title":"Shortname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"currency","title":"Currency","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"username","title":"Createdby","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Product group: \" + ${productgroup} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Product code: \" + ${prodcode}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${prodname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Shortname: \" + ${prodsname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Currency: \" + ${currency}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Createdby: \" + ${username}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Edit: \" + ${wm.runtimeId}.formatCell(\"btnedit\", ${btnedit}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Delete: \" + ${wm.runtimeId}.formatCell(\"btndelete\", ${btndelete}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"btnedit","title":"Edit","width":"100px","align":"center","formatFunc":"wm_button_formatter","expression":"\"Edit\"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"btndelete","title":"Delete","width":"100px","align":"center","formatFunc":"wm_button_formatter","expression":"\"Delete\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"reqinitialdepamt","title":"Reqinitialdepamt","width":"100%","displayType":"Java.math.BigDecimal","align":"left","formatFunc":""},
{"show":false,"field":"rbmminmainbal","title":"Rbmminmainbal","width":"100%","displayType":"Java.math.BigDecimal","align":"left","formatFunc":""}
],"dsType":"com.smslai_eoddb.data.Tbprodmatrix","height":"550px","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true}, {"onGridButtonClick":"gridProductGridButtonClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProductList","targetProperty":"dataSet"}, {}]
}]
}],
panel6: ["wm.Panel", {"height":"26px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
btnAdd: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Add Product","desktopHeight":"26px","height":"26px","styles":{},"width":"100px"}, {"onclick":"btnAddClick"}]
}]
}]
}]
}],
layer2: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Service Charges","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel7: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"15,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel8: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label4: ["wm.Label", {"caption":"Service Charges","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
}],
panel16: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"15,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"SYS_TXCODE_MAINTENANCE","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}]
}],
layer3: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"GLSL Mapping","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel11: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"15,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel12: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label5: ["wm.Label", {"caption":"GLSL Mapping","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
}],
panel13: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"90%"}, {}, {
gridProduct2: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"productgroup","title":"Product group","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"prodcode","title":"Product code","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"prodname","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"prodsname","title":"Shortname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"currency","title":"Currency","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"username","title":"Createdby","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Product group: \" + ${productgroup} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Product code: \" + ${prodcode}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${prodname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Shortname: \" + ${prodsname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Currency: \" + ${currency}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Createdby: \" + ${username}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Edit: \" + ${wm.runtimeId}.formatCell(\"btnedit\", ${btnedit}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Delete: \" + ${wm.runtimeId}.formatCell(\"btndelete\", ${btndelete}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"btnedit","title":"Edit","width":"100px","align":"center","formatFunc":"wm_button_formatter","expression":"\"Edit\"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"btndelete","title":"Delete","width":"100px","align":"center","formatFunc":"wm_button_formatter","expression":"\"Delete\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"reqinitialdepamt","title":"Reqinitialdepamt","width":"100%","displayType":"Java.math.BigDecimal","align":"left","formatFunc":""},
{"show":false,"field":"rbmminmainbal","title":"Rbmminmainbal","width":"100%","displayType":"Java.math.BigDecimal","align":"left","formatFunc":""}
],"dataSet":"","height":"550px","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true}, {"onGridButtonClick":"gridProduct2GridButtonClick"}],
panel14: ["wm.Panel", {"height":"28px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
btnAdd2: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Add Product","desktopHeight":"26px","height":"26px","styles":{},"width":"100px"}, {"onclick":"btnAdd2Click"}]
}]
}]
}]
}],
layer4: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Doc Requirements","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel15: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"15,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"SYSAD_DOCSPERPROD_SETUP","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}]
}]
}]
};

SYSAD_PRODUCT_SETUP.prototype._cssText = '';
SYSAD_PRODUCT_SETUP.prototype._htmlText = '';