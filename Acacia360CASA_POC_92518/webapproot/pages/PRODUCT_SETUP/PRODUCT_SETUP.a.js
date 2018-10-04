dojo.declare("PRODUCT_SETUP", wm.Page, {
start: function() {
this.svProdGroup.update();
this.svCurrency.update();
this.svBalCompBas.update();
this.svBalType.update();
this.svFreqCycle.update();
this.svPeriod.update();
this.svPostTx.update();
this.svIntType.update();
},
"preferredDevice": "desktop",
svSaveResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="0"){
app.alert("Error in Routine!");
}else if(inSender.getData().dataValue=="1"){
app.alert("Already Existing!");
}else if(inSender.getData().dataValue=="2"){
app.alert("Creating New Product Successful!");
this.panelData.clearData();
}
},
_end: 0
});

PRODUCT_SETUP.widgets = {
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
svSave: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"createNewProduct","service":"AccountFacade"}, {"onResult":"svSaveResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"createNewProductInputs"}, {}, {
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
wire19: ["wm.Wire", {"expression":undefined,"source":"fIntRate.dataValue","targetProperty":"input.intrate"}, {}],
wire22: ["wm.Wire", {"expression":undefined,"source":"fPretermPlan.dataValue","targetProperty":"input.pretermplan"}, {}],
wire23: ["wm.Wire", {"expression":undefined,"source":"fWTaxRate.dataValue","targetProperty":"input.wtaxrate"}, {}],
wire24: ["wm.Wire", {"expression":undefined,"source":"fIntPlan.dataValue","targetProperty":"input.intplan"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"fMaxPeriod.selectedItem.id","targetProperty":"input.maxperiod"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"fMinPeriod.selectedItem.id","targetProperty":"input.minperiod"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"selFreqSOAPrint.selectedItem.id","targetProperty":"input.freqsoaprint"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"selBalType.selectedItem.id","targetProperty":"input.baltype"}, {}],
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
wire31: ["wm.Wire", {"expression":"${wPbookYes.groupValue}","targetProperty":"input.passbookind"}, {}],
wire32: ["wm.Wire", {"expression":undefined,"source":"wSOA.dataValue","targetProperty":"input.soaind"}, {}],
wire33: ["wm.Wire", {"expression":undefined,"source":"wCertTD.dataValue","targetProperty":"input.certtimedepind"}, {}],
wire34: ["wm.Wire", {"expression":undefined,"source":"wCheckbook.dataValue","targetProperty":"input.checkbookind"}, {}],
wire35: ["wm.Wire", {"expression":undefined,"source":"wAtm.dataValue","targetProperty":"input.atmind"}, {}],
wire36: ["wm.Wire", {"expression":undefined,"source":"fBaseyear.dataValue","targetProperty":"input.baseyear"}, {}],
wire37: ["wm.Wire", {"expression":undefined,"source":"wDocStamp.dataValue","targetProperty":"input.docstampind"}, {}],
wire38: ["wm.Wire", {"expression":undefined,"source":"wATA.dataValue","targetProperty":"input.ataind"}, {}]
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
varBoolean: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Yes\",\"dataValue\":\"true\"},{\"name\":\"No\",\"dataValue\":\"false\"}]","type":"EntryData"}, {}],
varBaseyear: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"360\",\"dataValue\":\"360\"},{\"name\":\"365\",\"dataValue\":\"365\"}]","type":"EntryData"}, {}],
svIntType: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"INTTYPE\"","targetProperty":"codename"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"autoScroll":false,"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"15,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Setup New Product","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
}],
panel3Panel: ["wm.Panel", {"height":"570Spx","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panelData: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,3","styles":{},"verticalAlign":"top","width":"50%"}, {}, {
label2: ["wm.Label", {"caption":"Basic Information","padding":"4","styles":{"color":"#535050","fontWeight":"bolder"},"width":"100%"}, {}],
selProdtGroup: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Product Group:","captionSize":"165px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","required":true,"width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdGroup","targetProperty":"dataSet"}, {}]
}]
}],
fProdCode: ["wm.Text", {"border":"0","caption":"Product Code:","captionSize":"165px","dataValue":undefined,"displayValue":"","height":"25px","maxChars":"2","required":true,"width":"250px"}, {}],
fProdName: ["wm.Text", {"border":"0","caption":"Product Name:","captionSize":"165px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"330px"}, {}],
fShortName: ["wm.Text", {"border":"0","caption":"Short Name:","captionSize":"165px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"250px"}, {}],
selCurrency: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"165px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}]
}]
}],
label3: ["wm.Label", {"caption":"Product Attributes","padding":"4","styles":{"color":"#535050","fontWeight":"bolder"},"width":"100%"}, {}],
fMinTermReqPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"352px"}, {}, {
fMinTermReq: ["wm.Number", {"border":"0","caption":"Minimum Term Req / Period:","captionSize":"165px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"250px"}, {}],
fMinPeriod: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":" ","captionSize":"15px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"100px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svPeriod","targetProperty":"dataSet"}, {}]
}]
}]
}],
fMAxTermReqPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"352px"}, {}, {
fMaxTermReq: ["wm.Number", {"border":"0","caption":"Maximum Term Req / Period:","captionSize":"165px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"250px"}, {}],
fMaxPeriod: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":" ","captionSize":"15px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"100px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svPeriod","targetProperty":"dataSet"}, {}]
}]
}]
}],
fReqInitDepAmt: ["wm.Number", {"border":"0","caption":"Req Initial Deposit Amount:","captionSize":"165px","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","required":true,"width":"280px"}, {}],
selReqDepFreq: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Req Deposit Frequency:","captionSize":"165px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFreqCycle","targetProperty":"dataSet"}, {}]
}]
}],
fReqMoDepAmt: ["wm.Number", {"border":"0","caption":"Req Monthly Deposit Amount:","captionSize":"165px","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","required":true,"width":"280px"}, {}],
RadiotSetPanel1: ["wm.Panel", {"height":"55px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
wPassbook: ["wm.RadioSet", {"border":"0","caption":"w/Passbook","captionSize":"60undefined","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","emptyValue":"null","height":"55px","padding":"2,0,0,3","required":true,"styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}]
}]
}],
wCheckbook: ["wm.RadioSet", {"border":"0","caption":"w/Checkbook","captionSize":"90px","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","emptyValue":"null","height":"55px","padding":"2,0,0,3","required":true,"styles":{},"width":"180px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}]
}]
}],
wAtm: ["wm.RadioSet", {"border":"0","caption":"w/Atm","captionSize":"50px","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","emptyValue":"null","height":"55px","padding":"2,0,0,3","required":true,"styles":{},"width":"180px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}]
}]
}]
}],
RadiotSetPanel2: ["wm.Panel", {"height":"55px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
wCertTD: ["wm.RadioSet", {"border":"0","caption":"w/Certificate of Time Deposit","captionSize":"60undefined","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","emptyValue":"null","height":"55px","padding":"2,0,0,3","required":true,"styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}]
}]
}],
wSOA: ["wm.RadioSet", {"border":"0","caption":"w/Statement of Account","captionSize":"47undefined","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","emptyValue":"null","height":"55px","padding":"2,0,0,3","required":true,"styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}]
}]
}]
}],
spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
selFreqSOAPrint: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Frequency of SOA Printing","captionSize":"165px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFreqCycle","targetProperty":"dataSet"}, {}]
}]
}],
selPostTx: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Initial Posting Restriction","captionSize":"165px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svPostTx","targetProperty":"dataSet"}, {}]
}]
}],
btnSubmitPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"bottom","width":"306px"}, {}, {
wATA: ["wm.RadioSet", {"border":"0","caption":"ATA Indicator","captionSize":"60undefined","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","emptyValue":"null","height":"55px","padding":"2,0,0,3","styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}]
}]
}]
}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,3","styles":{},"verticalAlign":"top","width":"50%"}, {}, {
label8: ["wm.Label", {"caption":"Interest Attributes","padding":"4","styles":{"color":"#535050","fontWeight":"bolder"},"width":"100%"}, {}],
fMinBalEarnInt: ["wm.Number", {"border":"0","caption":"Min Balance to Earn Interest","captionSize":"170px","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","required":true,"width":"280px"}, {}],
selTypeOfBalToUse: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Type of Balance to use","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBalType","targetProperty":"dataSet"}, {}]
}]
}],
selBalComp: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Balance Computation Basis","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBalCompBas","targetProperty":"dataSet"}, {}]
}]
}],
spacer2: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
RadPanelRight: ["wm.Panel", {"height":"55px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fBaseyear: ["wm.RadioSet", {"border":"0","caption":"Base Year (360 or 365)","captionSize":"65undefined","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","emptyValue":"null","height":"55px","padding":"2,0,0,3","required":true,"styles":{},"width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBaseyear","targetProperty":"dataSet"}, {}]
}]
}],
wDocStamp: ["wm.RadioSet", {"border":"0","caption":"w/Doc Stamp","captionSize":"45undefined","dataField":"dataValue","dataType":"EntryData","desktopHeight":"55px","displayField":"name","displayValue":"","emptyValue":"null","height":"55px","padding":"2,0,0,3","required":true,"styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}]
}]
}]
}],
selIntType: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Interest Type","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svIntType","targetProperty":"dataSet"}, {}]
}]
}],
fIntRate: ["wm.Number", {"border":"0","caption":"Interest Rate (%)","captionSize":"170px","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","required":true,"width":"250px"}, {}],
fIntPlan: ["wm.Text", {"border":"0","caption":"Interest Plan","captionSize":"170px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"250px"}, {}],
selFreqIntComp: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Frequency of Int Computation","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFreqCycle","targetProperty":"dataSet"}, {}]
}]
}],
selFreqIntPosting: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Frequency of Int Posting","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFreqCycle","targetProperty":"dataSet"}, {}]
}]
}],
selFreqIntPayout: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Frequency of Int Payout","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFreqCycle","targetProperty":"dataSet"}, {}]
}]
}],
fWTaxRate: ["wm.Number", {"border":"0","caption":"WTax Rate","captionSize":"170px","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","minimum":0,"required":true,"width":"250px"}, {}],
fPretermPlan: ["wm.Text", {"border":"0","caption":"Pre-termination Plan","captionSize":"170px","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"250px"}, {}],
label9: ["wm.Label", {"caption":"Required Minimum Balance Attributes","padding":"4","styles":{"color":"#535050","fontWeight":"bolder"},"width":"100%"}, {}],
fMinMaintnngBal: ["wm.Number", {"border":"0","caption":"Min Maintaning Balance","captionSize":"170px","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","minimum":0,"required":true,"styles":{},"width":"280px"}, {}],
selBalType: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Balance Type","captionSize":"170px","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBalType","targetProperty":"dataSet"}, {}]
}]
}],
selBalCompBasis: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Balance Computation Basis","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBalCompBas","targetProperty":"dataSet"}, {}]
}]
}],
seFreqComp: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Frequency of Computation","captionSize":"170px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svFreqCycle","targetProperty":"dataSet"}, {}]
}]
}],
fServiceChargeBelMinBal: ["wm.Number", {"border":"0","caption":"Service Charge Bel Min Bal","captionSize":"170px","displayValue":"","emptyValue":"null","height":"25px","required":true,"styles":{},"width":"280px"}, {}]
}]
}],
btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","width":"100px"}, {"onclick":"svSave"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panelData.invalid","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
};

PRODUCT_SETUP.prototype._cssText = '';
PRODUCT_SETUP.prototype._htmlText = '';