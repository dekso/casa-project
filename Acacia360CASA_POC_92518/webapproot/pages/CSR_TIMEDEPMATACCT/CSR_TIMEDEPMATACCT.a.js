dojo.declare("CSR_TIMEDEPMATACCT", wm.Page, {
start: function() {
this.svListAccount.update();
this.svAction.update();
this.svModeRelease.update();
},
"preferredDevice": "desktop",
acctlistGridGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
this.acctlistGrid.select(rowIndex);
this.dlgAcctDet.show();
this.svAcctDet.update();
},
btnCloseClick: function(inSender) {
this.dlgAcctDet.hide();
},
btnClose1Click: function(inSender) {
this.btnCloseClick(inSender);
},
btnProceedClick: function(inSender) {
this.dlgAcctDet.hide();
this.svProdDetail.update();
this.dlgMatAcctDispo.show();
},
dispoPrinPayoutChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.dispoPrinRollover.setDataValue(this.dispoPrinamt.getDataValue()-inDataValue);
},
dispoPrinRolloverChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.dispoPrinPayout.setDataValue(this.dispoPrinamt.getDataValue()-inDataValue);
},
dispoIntPayoutChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.dispoIntRollover.setDataValue(this.dispoIntamt.getDataValue()-inDataValue);
},
dispoIntRolloverChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.dispoIntPayout.setDataValue(this.dispoIntamt.getDataValue()-inDataValue);
},
computeDtTerm: function() {
//		var dt = new Date(this.fBkdt.getDataValue());
//        this.fMatdt.setDataValue(dt.setDay(dt.getDay()+this.fTerm.getDataValue()));
var date = new Date(this.dispoBookdt.getDataValue());
var newdate = new Date(date);
newdate.setDate(newdate.getDate() + this.dispoTerm.getDataValue());
this.dispoMatdt.setDataValue(newdate);
},
btnCancelClick: function(inSender) {
this.pnlPayout.clearData();
this.pnlRollover.clearData();
this.dispoTerm.clear();
this.dlgMatAcctDispo.hide();
},
svRolloverAccountResult: function(inSender, inDeprecated) {
if(inSender.getData().result==0){
app.alert("Error in creating account!");
}else{
this.notifCreateSuccess.input.setValue("text",
"Account creation successful!<br/> Account no : <b><font color='blue'> "+inSender.getData().value);
this.notifCreateSuccess.update();
this.dlgMatAcctDispo.hide();
this.svListAccount.update();
}
},
btnSubmitClick: function(inSender) {
app.confirm("Proceed Rollover of Account?", false,
dojo.hitch(this, function() {
this.svRolloverAccount.update();
}),
dojo.hitch(this, function() {}));
},
svProdDetailResult: function(inSender, inDeprecated) {
console.log("Prod detail");
},
_end: 0
});

CSR_TIMEDEPMATACCT.widgets = {
svListAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getTimeDepMatAcctList","service":"AccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getTimeDepMatAcctListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctno.dataValue","targetProperty":"accountno"}, {}]
}]
}]
}],
svAcctDet: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getTimeDepAcctDet","service":"AccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getTimeDepAcctDetInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountno","targetProperty":"accountno"}, {}]
}]
}]
}],
svAction: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"TDMATACCT\"","targetProperty":"codename"}, {}]
}]
}]
}],
svModeRelease: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"MODEOFRELEASE\"","targetProperty":"codename"}, {}]
}]
}]
}],
svSubmit: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"submitMatAcctAction","service":"AccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"submitMatAcctActionInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dispoBookdt.dataValue","targetProperty":"form.deposit.bookDate"}, {}],
wire1: ["wm.Wire", {"expression":"\"1\"","targetProperty":"form.deposit.accountStatus"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"dispoMatAmt.dataValue","targetProperty":"form.deposit.matAmt"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"dispoWTaxRate.dataValue","targetProperty":"form.deposit.wtaxrate"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"flAcctname.dataValue","targetProperty":"form.deposit.accountName"}, {}],
wire5: ["wm.Wire", {"expression":"\"00\"","targetProperty":"form.deposit.posttx"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"flAcctname.dataValue","targetProperty":"form.deposit.createdBy"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"dispoTerm.dataValue","targetProperty":"form.deposit.term"}, {}],
wire8: ["wm.Wire", {"expression":"\"31\"","targetProperty":"form.deposit.subProductCode"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"dispoMatdt.dataValue","targetProperty":"form.deposit.maturityDate"}, {}],
wire10: ["wm.Wire", {"expression":"\"30\"","targetProperty":"form.deposit.productCode"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"dispolessWTaxAmt.dataValue","targetProperty":"form.deposit.lessWtaxAmt"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"dispoIntrate.dataValue","targetProperty":"form.deposit.intRate"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"dispoTotalRollover.dataValue","targetProperty":"form.deposit.placementAmt"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"dispoTotalPayout.dataValue","targetProperty":"form.payoutamt"}, {}],
wire15: ["wm.Wire", {"expression":undefined,"source":"dispoModeRel.dataValue","targetProperty":"form.modeofrelease"}, {}],
wire16: ["wm.Wire", {"expression":undefined,"source":"dispoCrAcctNo.dataValue","targetProperty":"form.cracctno"}, {}]
}]
}]
}],
svProdDetail: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getProductDetail","service":"AccountFacade"}, {"onResult":"svProdDetailResult"}, {
input: ["wm.ServiceInput", {"type":"getProductDetailInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.productCode","targetProperty":"prodcode"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.subProductCode","targetProperty":"subprodcode"}, {}]
}]
}]
}],
svRolloverAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"rolloverTimeDepositAccount","service":"AccountFacade"}, {"onResult":"svRolloverAccountResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"containerWidget2","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"rolloverTimeDepositAccountInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountName","targetProperty":"dep.accountName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"dispoWTaxRate.dataValue","targetProperty":"dep.wtaxrate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"dispoTerm.dataValue","targetProperty":"dep.term"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"dispoMatdt.dataValue","targetProperty":"dep.maturityDate"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"dispoMatAmt.dataValue","targetProperty":"dep.matAmt"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"dep.instcode"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"dep.unit"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.productCode","targetProperty":"dep.productCode"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.subProductCode","targetProperty":"dep.subProductCode"}, {}],
wire9: ["wm.Wire", {"expression":"\"00\"","targetProperty":"dep.posttx"}, {}],
wire10: ["wm.Wire", {"expression":"1","targetProperty":"dep.accountStatus"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.ownershipType","targetProperty":"dep.ownershipType"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"dispoIntrate.dataValue","targetProperty":"dep.intRate"}, {}],
wire13: ["wm.Wire", {"expression":"0","targetProperty":"dep.floatAmount"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"dispoTotalRollover.dataValue","targetProperty":"dep.accountBalance"}, {}],
wire15: ["wm.Wire", {"expression":undefined,"source":"dispolessWTaxAmt.dataValue","targetProperty":"dep.lessWtaxAmt"}, {}],
wire16: ["wm.Wire", {"expression":"0","targetProperty":"dep.placeholdAmt"}, {}],
wire17: ["wm.Wire", {"expression":"0","targetProperty":"dep.placementAmt"}, {}],
wire18: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountNo","targetProperty":"dep.accountNo"}, {}],
wire19: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"dep.createdBy"}, {}],
wire21: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.jointAcctType","targetProperty":"dep.jointAcctType"}, {}],
wire20: ["wm.Wire", {"expression":undefined,"source":"dispoBookdt.dataValue","targetProperty":"dep.bookDate"}, {}]
}]
}]
}],
notifCreateSuccess: ["wm.NotificationCall", {}, {"onOk":"notifCreateSuccessOk"}, {
input: ["wm.ServiceInput", {"type":"alertInputs"}, {}]
}],
dlgAcctDet: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"240px","height":"240px","title":"Account Details"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
pnlAcctDet: ["wm.Panel", {"height":"159px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
flAcctno: ["wm.Text", {"border":"0","caption":"Account No:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountNo","targetProperty":"dataValue"}, {}]
}]
}],
flAcctname: ["wm.Text", {"border":"0","caption":"Account Name:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountName","targetProperty":"dataValue"}, {}]
}]
}],
flAcctsts: ["wm.Text", {"border":"0","caption":"Account Status:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountStatus","targetProperty":"dataValue"}, {}]
}]
}],
flDateopen: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Date Open:","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.bookDate","targetProperty":"dataValue"}, {}]
}]
}],
flMatdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Maturity Date:","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.maturityDate","targetProperty":"dataValue"}, {}]
}]
}],
flMatamt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Maturity Amount:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.matAmt","targetProperty":"dataValue"}, {}]
}]
}]
}],
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,5","styles":{},"verticalAlign":"top","width":"50%"}, {}, {
flTerm: ["wm.Number", {"border":"0","caption":"Term:","displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.term","targetProperty":"dataValue"}, {}]
}]
}],
flIntrate: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Interest Rate:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.intRate","targetProperty":"dataValue"}, {}]
}]
}],
flTaxrate: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Tax Rate:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.wtaxrate","targetProperty":"dataValue"}, {}]
}]
}],
flLesswTaxAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Less W Tax Amount:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.lessWtaxAmt","targetProperty":"dataValue"}, {}]
}]
}],
flPrinbal: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Principal Amount:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountBalance","targetProperty":"dataValue"}, {}]
}]
}],
flIntbal: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Interest Amount:","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${acctlistGrid.selectedItem.matAmt}-${acctlistGrid.selectedItem.accountBalance}","targetProperty":"dataValue"}, {}]
}]
}]
}]
}],
panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnProceed: ["wm.Button", {"border":"1","caption":"Proceed","desktopHeight":"28px","height":"28px","margin":"0,10,0,10","styles":{},"width":"100px"}, {"onclick":"btnProceedClick"}],
btnClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"28px","height":"28px","margin":"0,0,0,0","styles":{},"width":"80px"}, {"onclick":"btnCloseClick"}]
}]
}]
}],
dlgAcctDet1: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"240px","height":"240px","title":"Account Details"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
pnlAcctDet1: ["wm.Panel", {"height":"159px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
flAcctno1: ["wm.Text", {"border":"0","caption":"Account No:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountno","targetProperty":"dataValue"}, {}]
}]
}],
flAcctname1: ["wm.Text", {"border":"0","caption":"Account Name:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountname","targetProperty":"dataValue"}, {}]
}]
}],
flAcctsts1: ["wm.Text", {"border":"0","caption":"Account Status:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svAcctDet.status","targetProperty":"dataValue"}, {}]
}]
}],
flDateopen1: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Date Open:","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svAcctDet.opendt","targetProperty":"dataValue"}, {}]
}]
}],
flMatdt1: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Maturity Date:","displayValue":"","height":"25px","readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.matdt","targetProperty":"dataValue"}, {}]
}]
}]
}],
panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,5","styles":{},"verticalAlign":"top","width":"50%"}, {}, {
flAcctbal1: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Account Balance:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.accountbal","targetProperty":"dataValue"}, {}]
}]
}],
flTerm1: ["wm.Number", {"border":"0","caption":"Term:","displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.term","targetProperty":"dataValue"}, {}]
}]
}],
flIntrate1: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Interest Rate:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svAcctDet.intrate","targetProperty":"dataValue"}, {}]
}]
}],
flTaxrate1: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Tax Rate:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svAcctDet.taxrate","targetProperty":"dataValue"}, {}]
}]
}],
flLesswTaxAmt1: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Less W Tax Amount:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svAcctDet.lesswtax","targetProperty":"dataValue"}, {}]
}]
}],
flMatamt1: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Maturity Amount:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svAcctDet.matamt","targetProperty":"dataValue"}, {}]
}]
}]
}]
}],
panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnPrint1: ["wm.Button", {"border":"1","caption":"Print Certificate","desktopHeight":"28px","height":"28px","styles":{},"width":"120px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${svAcctDet.placementamt}==0.00","targetProperty":"showing"}, {}]
}]
}],
btnClose1: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"28px","height":"28px","margin":"0,0,0,0","styles":{}}, {"onclick":"btnClose1Click"}]
}]
}]
}],
dlgMatAcctDispo: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget2","desktopHeight":"385px","height":"385px","styles":{},"width":"670px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Matured Account Disposition - Product : \"+${svProdDetail.prodname}","targetProperty":"title"}, {}]
}],
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
dispoAcctnoPanel: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
dispoAcctno: ["wm.Text", {"border":"0","caption":"Account No:","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"flAcctno.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
flMatamt2: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Maturity Amount:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctlistGrid.selectedItem.matAmt","targetProperty":"dataValue"}, {}]
}]
}]
}],
panel11: ["wm.Panel", {"height":"105px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"50%"}, {}, {
label2: ["wm.Label", {"caption":"","padding":"4","styles":{},"width":"100%"}, {}],
dispoPrinamt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Principal Amount:","captionSize":"120px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"flPrinbal.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
dispoIntamt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Interest Amount:","captionSize":"120px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"flIntbal.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
label5: ["wm.Label", {"caption":"Additional Principal","padding":"4","styles":{"fontSize":"11px","fontWeight":"bolder"},"width":"100%"}, {}]
}],
pnlPayout: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,5,0,5","styles":{},"verticalAlign":"top","width":"25%"}, {}, {
label3: ["wm.Label", {"align":"center","caption":"Payout Amount","padding":"4","styles":{"fontWeight":"bolder","fontSize":"11px"},"width":"100%"}, {}],
dispoPrinPayout: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"text1","captionSize":"0px","dataValue":undefined,"displayValue":"","height":"25px","places":2,"styles":{}}, {"onchange":"dispoPrinPayoutChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dispoPrinamt.dataValue","targetProperty":"maximum"}, {}]
}]
}],
dispoIntPayout: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"text1","captionSize":"0px","dataValue":undefined,"displayValue":"","height":"25px","places":2,"styles":{}}, {"onchange":"dispoIntPayoutChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dispoIntamt.dataValue","targetProperty":"maximum"}, {}]
}]
}],
label7: ["wm.Label", {"caption":"","padding":"4","styles":{},"width":"100%"}, {}]
}],
pnlRollover: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,5,0,5","styles":{},"verticalAlign":"top","width":"25%"}, {}, {
label4: ["wm.Label", {"align":"center","caption":"Rollover Amount","padding":"4","styles":{"fontWeight":"bolder","fontSize":"11px"},"width":"100%"}, {}],
dispoPrinRollover: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"text1","captionSize":"0px","dataValue":undefined,"displayValue":"","height":"25px","places":2,"styles":{}}, {"onchange":"dispoPrinRolloverChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dispoPrinamt.dataValue","targetProperty":"maximum"}, {}]
}]
}],
dispoIntRollover: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"text1","captionSize":"0px","dataValue":undefined,"displayValue":"","height":"25px","places":2,"styles":{}}, {"onchange":"dispoIntRolloverChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dispoIntamt.dataValue","targetProperty":"maximum"}, {}]
}]
}],
dispoAddedPrin: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"text1","captionSize":"0px","dataValue":undefined,"displayValue":"","height":"25px","places":2,"styles":{}}, {}]
}]
}],
pnlTotalAmt: ["wm.Panel", {"border":"1,0,0,0","borderColor":"#757171","height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label6: ["wm.Label", {"caption":"Total Amount","padding":"4","styles":{"fontSize":"11px","fontWeight":"bolder"},"width":"50%"}, {}],
dispoTotalPayoutPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,5,0,5","styles":{},"verticalAlign":"top","width":"25%"}, {}, {
dispoTotalPayout: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"text1","captionSize":"0px","displayValue":"","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${dispoPrinPayout.dataValue}+${dispoIntPayout.dataValue}","targetProperty":"dataValue"}, {}]
}]
}]
}],
dispoTotalRolloverPanel: ["wm.Panel", {"height":"27px","horizontalAlign":"left","padding":"0,5,0,5","styles":{},"verticalAlign":"top","width":"25%"}, {}, {
dispoTotalRollover: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"text1","captionSize":"0px","displayValue":"","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${dispoPrinRollover.dataValue}+${dispoIntRollover.dataValue}+${dispoAddedPrin.dataValue}","targetProperty":"dataValue"}, {}]
}]
}]
}]
}],
pnlDispoDet: ["wm.Panel", {"height":"171px","horizontalAlign":"left","padding":"0,0,0,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel15: ["wm.Panel", {"height":"132px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panel16: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
dispoTerm: ["wm.Number", {"border":"0","caption":"Term (days):","captionSize":"100px","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","padding":"0,0,0,0","required":true,"styles":{},"width":"160px"}, {"onchange":"computeDtTerm"}],
dispoIntrate: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Interest Rate:","captionSize":"100px","displayValue":"","height":"25px","padding":"0,0,0,0","places":2,"readonly":true,"styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.intrate","targetProperty":"dataValue"}, {}]
}]
}],
dispoWTaxRate: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"With Tax Rate:","captionSize":"100px","displayValue":"","height":"25px","padding":"0,0,0,0","places":2,"readonly":true,"styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svProdDetail.wtaxrate","targetProperty":"dataValue"}, {}]
}]
}],
dispoBookdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Booking Date:","captionSize":"100px","displayValue":"","height":"25px","styles":{},"width":"220px"}, {"onchange":"computeDtTerm"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
dispoMatdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Maturiy Date:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"styles":{},"width":"220px"}, {}]
}],
panel17: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,0,0,5","styles":{},"verticalAlign":"top","width":"50%"}, {}, {
dispoTotalInt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Total Interest:","captionSize":"120px","displayValue":"0.00","emptyValue":"zero","height":"25px","padding":"0,0,0,0","places":2,"readonly":true,"styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${dispoTotalRollover.dataValue}*${dispoIntrate.dataValue}*${dispoTerm.dataValue}/360","targetProperty":"dataValue"}, {}]
}]
}],
dispolessWTaxAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Less WTax Amount:","captionSize":"120px","displayValue":"0.00","emptyValue":"zero","height":"25px","padding":"0,0,0,0","places":2,"readonly":true,"styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${dispoTotalInt.dataValue}*(${dispoWTaxRate.dataValue}*0.01)\n","targetProperty":"dataValue"}, {}]
}]
}],
dispoMatAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Maturity Amount:","captionSize":"120px","displayValue":"0.00","height":"25px","padding":"0,0,0,0","places":2,"readonly":true,"styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${dispoTotalRollover.dataValue}+${dispoTotalInt.dataValue}-${dispolessWTaxAmt.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
dispoModeRel: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Mode of Release:","captionSize":"120px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svModeRelease","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":"${dispoTotalPayout.dataValue}==0","targetProperty":"disabled"}, {}]
}]
}],
dispoCrAcctNo: ["wm.Text", {"border":"0","caption":"Credit Account No:","captionSize":"120px","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${dispoModeRel.dataValue}==\"3\"","targetProperty":"showing"}, {}]
}]
}]
}]
}],
panel18: ["wm.Panel", {"height":"35px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSubmit: ["wm.Button", {"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"100px"}, {"onclick":"btnSubmitClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${panel16.invalid} || ${dispoTotalRollover.dataValue} <= 0","targetProperty":"disabled"}, {}]
}]
}],
btnCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"30px","height":"30px","margin":"0,0,0,0","styles":{},"width":"90px"}, {"onclick":"btnCancelClick"}]
}]
}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"90%"}, {}, {
pnlCont: ["wm.Panel", {"height":"80%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"800px"}, {}, {
panel5: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label8: ["wm.Label", {"caption":"Matured Account List","height":"31px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
}],
panel2: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
fAcctno: ["wm.Text", {"border":"0","caption":"Account no:","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,5","styles":{},"width":"350px"}, {}],
btnSearch: ["wm.Button", {"border":"1","caption":"Search","desktopHeight":"28px","height":"28px","margin":"0,0,0,10","styles":{},"width":"80px"}, {"onclick":"svListAccount"}]
}],
acctlistGrid: ["wm.DojoGrid", {"caseSensitiveSort":false,"columnReordering":false,"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"AccountNo: \" + ${accountNo} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"AccountName: \" + ${accountName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Term: \" + ${term}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Balance: \" + ${wm.runtimeId}.formatCell(\"accountBalance\", ${accountBalance}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"BookDate: \" + ${wm.runtimeId}.formatCell(\"bookDate\", ${bookDate}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"MaturityDate: \" + ${wm.runtimeId}.formatCell(\"maturityDate\", ${maturityDate}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"View<br/>Details: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"accountNo","title":"AccountNo","width":"120px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"accountName","title":"AccountName","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"term","title":"Term","width":"40%","align":"center","formatFunc":"","mobileColumn":false},
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"productCode","title":"ProductCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"subProductCode","title":"SubProductCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"slaidNo","title":"SlaidNo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"employeeNo","title":"EmployeeNo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"accountBalance","title":"Balance","width":"80px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":false,"field":"floatAmount","title":"FloatAmount","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"accountStatus","title":"AccountStatus","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"statusDate","title":"StatusDate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"pledgeAmount","title":"PledgeAmount","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"pledgeSchedule","title":"PledgeSchedule","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"accumulatedBalance","title":"AccumulatedBalance","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"daysElapsed","title":"DaysElapsed","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"averageDailyBalance","title":"AverageDailyBalance","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"mtdint","title":"Mtdint","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"btdint","title":"Btdint","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"mtdcredits","title":"Mtdcredits","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ytdcredits","title":"Ytdcredits","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"btdcredits","title":"Btdcredits","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"mtddebits","title":"Mtddebits","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ytddebits","title":"Ytddebits","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"btddebits","title":"Btddebits","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"totalNoCredits","title":"TotalNoCredits","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"totalNoDebits","title":"TotalNoDebits","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"bookDate","title":"BookDate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"intRate","title":"IntRate","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"wtaxrate","title":"Wtaxrate","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"maturityDate","title":"MaturityDate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"btn","title":"View<br/>Details","width":"55%","align":"center","formatFunc":"wm_button_formatter","formatProps":null,"editorProps":null,"expression":"\"View\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"compoundingFreq","title":"CompoundingFreq","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"maintainingBalance","title":"MaintainingBalance","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"toEarnInterestBalance","title":"ToEarnInterestBalance","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"posttx","title":"Posttx","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"oldstatus","title":"Oldstatus","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"oldStatusDate","title":"OldStatusDate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"jointAcctType","title":"JointAcctType","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ownershipType","title":"OwnershipType","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"placementAmt","title":"PlacementAmt","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"lessWtaxAmt","title":"LessWtaxAmt","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"matAmt","title":"MatAmt","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"placeholdAmt","title":"PlaceholdAmt","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"createdBy","title":"CreatedBy","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"watchlistCode","title":"WatchlistCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"unit","title":"Unit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"instcode","title":"Instcode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"toEarnIntererstBalance","title":"ToEarnIntererstBalance","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"accountnoata","title":"Accountnoata","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"alertflag","title":"Alertflag","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":false,"field":"alertmessage","title":"Alertmessage","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"alertlevel","title":"Alertlevel","width":"80px","displayType":"Number","align":"right","formatFunc":""}
],"deviceSizes":null,"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"sortingEnabled":false}, {"onGridButtonClick":"acctlistGridGridButtonClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svListAccount","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

CSR_TIMEDEPMATACCT.prototype._cssText = '';
CSR_TIMEDEPMATACCT.prototype._htmlText = '';