dojo.declare("TLR_FX_BUYSELL", wm.Page, {
start: function() {
this.svCurrency.update();
this.svRate.update();
this.svCust.update();
this.fAcctPanel.setValue("showing", false);
},
"preferredDevice": "desktop",
fCustTypeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if(inDataValue=="1"){
this.fAcctPanel.setValue("showing", true);
this.fAcctNo.setValue("required",true);
this.fCustName.setValue("readonly", true);
this.fCustName.clear();
this.fAcctNo.clear();
}else{
this.fAcctNo.setValue("required",false);
this.fAcctPanel.setValue("showing", false);
this.fCustName.setValue("readonly", false);
this.fCustName.clear();
this.fAcctNo.clear();
}
},
fCurrencyChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.svGetRate.update();
},
fTransTypeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
this.fCurrency.clear();
},
svAddBuySellResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue =="saved"){
app.toastSuccess("Transaction completed.", 3000);
this.panel3.clearData();
}else{
app.toastError("Error while saving transaction", 3000);
}
},
btnSearchClick: function(inSender) {
this.svCheckAccount.update();
},
svCheckAccountResult: function(inSender, inDeprecated) {
//		 console.log(inSender.getData());
//    	if(inSender.getData().result=="0"){
//            //app.alert("Account no does not exist!");
//            this.lblResult.setCaption("<b><font color='red'>Account number does not exist!");
////            this.fCurr.setDataValue("");
//            this.fCustName.setDataValue("");
//		}else if(inSender.getData().result=="1"){
////            app.alert("Account found!");
//            this.lblResult.setCaption("<b><font color='blue'>Account number found!");
////            this.fCurr.setDataValue(inSender.getData().currency);
//            this.fCustName.setDataValue(inSender.getData().name);
//    	}else if(inSender.getData().result=="503"){
//            this.lblResult.setCaption("<b><font color='red'>Host not available!");
//
//    	}
if(inSender.getData().result==0){
app.toastError("Member not found/exist!", 5000);
}else{
app.toastSuccess("Member found/exist!", 5000);
//            this.btnAddCIF.click();
//            this.svCheckDeceased.update();
}
},
svCashDepResult: function(inSender, inDeprecated) {
console.log(inSender.getData().result);
//		this.svUnitBalance.update();
//app.alert(inSender.getData().dataValue);
if(inSender.getData().result=="0"){
app.alert("Account no does not exist!");
}else if(inSender.getData().result=="1"){
//            this.fAcctNo.clear();
//            this.fAcctName.clear();
//			this.fAmt.clear();
//            this.fCurr.clear();
//            this.lblResult.setCaption("");
this.panel3.clearData();
app.alert("Transaction Successful!");
}else if(inSender.getData().result=="3"){
app.confirm("Posting Restriction : " +inSender.getData().posttxdesc
+"<br/>Override Transaction?", false,
dojo.hitch(this, function() {
this.dlgOverride.show();
}),
dojo.hitch(this, function() {
this.svCancelReject.update();
}));
}else if(inSender.getData().result=="4"){
app.alert("Transaction Failed : Account is Closed!");
}else if(inSender.getData().result=="999"){
app.alert("Transaction Failed : Error in Routine!");
}
},
_end: 0
});

TLR_FX_BUYSELL.widgets = {
varLocalNet: ["wm.Variable", {"type":"NumberData"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varNetCash.dataValue","targetProperty":"dataSet.dataValue"}, {}]
}]
}],
svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CURRENCY\"","targetProperty":"codename"}, {}]
}]
}]
}],
svRate: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"RATETYPE\"","targetProperty":"codename"}, {}]
}]
}]
}],
svCust: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"CUSTTYPE\"","targetProperty":"codename"}, {}]
}]
}]
}],
svGetRate: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getRates","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getRatesInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fTransType.selectedItem.dataValue","targetProperty":"buysell"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"fCurrency.selectedItem.id","targetProperty":"curr"}, {}]
}]
}]
}],
svAddBuySell: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveBuySellFx","service":"FinTxFacade"}, {"onResult":"svAddBuySellResult"}, {
input: ["wm.ServiceInput", {"type":"saveBuySellFxInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fTxdt.dataValue","targetProperty":"brjrnl.txdate"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fCurrency.dataValue","targetProperty":"brjrnl.currency"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fTransType.dataValue","targetProperty":"brjrnl.remarks"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"fAmountToPay.dataValue","targetProperty":"brjrnl.txamount"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fAmount.dataValue","targetProperty":"brjrnl.amount"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"fCustName.dataValue","targetProperty":"brjrnl.acctname"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"brjrnl.accountno"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"fTxdt.dataValue","targetProperty":"brjrnl.txvaldt"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"brjrnl.txby"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"brjrnl.instcode"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"brjrnl.unit"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel3","targetProperty":"loadingDialog"}, {}]
}]
}],
svCheckAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNo","service":"AccountFacade"}, {"onResult":"svCheckAccountResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"checkMemberNoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"acctno"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"memberno"}, {}]
}]
}]
}],
svCashDep: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cashDepWithDrCrMemo","service":"FinTxFacade"}, {"onResult":"svCashDepResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"cashDepWithDrCrMemoInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire5: ["wm.Wire", {"expression":undefined,"source":"fCurr.dataValue","targetProperty":"jrnl.currency"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"jrnl.txby"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"jrnl.unit"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"jrnl.instcode"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"jrnl.txdate"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fCustName.dataValue","targetProperty":"jrnl.acctname"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fAmountToPay.dataValue","targetProperty":"jrnl.txamount"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fTransType.dataValue","targetProperty":"jrnl.remarks"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"fAmount.dataValue","targetProperty":"jrnl.amount"}, {}],
wire3: ["wm.Wire", {"expression":"if(${fTransType.dataValue} ==\"Buy\"){\n    \"111123\"\n}else{\n    \"111133\"\n}","targetProperty":"jrnl.txcode"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"jrnl.accountno"}, {}]
}]
}]
}],
dlgOverride: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"135px","height":"135px","noEscape":true,"title":"Override Transaction","width":"440px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
pnlOverride: ["wm.Panel", {"height":"61px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
overrideUsername: ["wm.Text", {"border":"0","caption":"Username:","dataValue":undefined,"displayValue":"","height":"25px","required":true}, {}],
overridePassword: ["wm.Text", {"border":"0","caption":"Password:","dataValue":undefined,"displayValue":"","height":"25px","password":true,"required":true}, {}]
}],
panel6: ["wm.Panel", {"height":"28px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"0,0,0,0","padding":"0,0,0,0","styles":{},"verticalAlign":"top","width":"414px"}, {}, {
btnViewSig: ["wm.Button", {"border":"1","caption":"View Sigcard","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnViewSigClick"}],
btnReqOR: ["wm.Button", {"border":"1","caption":"Remote Override","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"120px"}, {"onclick":"btnReqORClick"}],
btnOverride: ["wm.Button", {"border":"1","caption":"Override","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnOverrideClick"}],
btnCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"svCancelReject"}]
}]
}]
}],
dlgOverrideDet: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"140px","height":"140px","noEscape":true,"title":"Waiting for Override Result","width":"350px"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
pnlOverrideDet1: ["wm.Panel", {"height":"55px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
fOverrideBy: ["wm.Text", {"border":"0","caption":"Override By:","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {}],
fOverrideResult: ["wm.Text", {"border":"0","caption":"Override Result :","displayValue":"","emptyValue":"null","height":"25px","readonly":true}, {}]
}],
panel8: ["wm.Panel", {"height":"37px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
btnContinue: ["wm.Button", {"border":"1","caption":"Continue","desktopHeight":"30px","height":"30px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnContinueClick"}]
}]
}]
}],
dlgSigcard: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"500px","height":"500px","noEscape":true,"title":"Sigcard","width":"900px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
sigcardPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
sigImg: ["wm.Picture", {"aspect":"v","height":"1200px","width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"41px","height":"41px"}, {}, {
panel7: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"0,0,0,0","padding":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
btnCloseSigcard: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseSigcardClick"}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Buy/Sell Foreign Exchange","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"100%"}, {}]
}],
fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"135px","displayValue":"","height":"25px","readonly":true,"styles":{},"width":"320px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"10,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fTransType: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Transaction Type:","captionSize":"135px","dataField":"dataValue","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"Buy, Sell","width":"250px"}, {"onchange":"fTransTypeChange"}],
fCurrency: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","width":"230px"}, {"onchange":"fCurrencyChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}]
}]
}],
fRateTypePanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fRateType: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Type of Rate:","captionSize":"135px","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","showing":false,"width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svRate","targetProperty":"dataSet"}, {}]
}]
}],
fRate: ["wm.Number", {"border":"0","caption":"Board Rate:","captionSize":"135px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svGetRate.boardrate","targetProperty":"dataValue"}, {}]
}]
}]
}],
fActualRate: ["wm.Number", {"border":"0","caption":"Actual Rate :","captionSize":"135px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"styles":{},"width":"320px"}, {"onfocus":"onFocusField"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fRate.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
fAmountPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fAmount: ["wm.Number", {"border":"0","caption":"Amount:","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"width":"250px"}, {}],
fAmountToPay: ["wm.Number", {"border":"0","caption":"Amount to pay:","captionSize":"110px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"width":"250px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${fAmount.dataValue}*${fActualRate.dataValue}","targetProperty":"dataValue"}, {}]
}]
}]
}],
fGainLoss: ["wm.Text", {"border":"0","caption":"Gain/Loss:","captionSize":"135px","displayValue":"-","height":"25px","readonly":true,"regExp":"^[0-9]+([,.][0-9]+)?$","width":"320px"}, {"onfocus":"onFocusField"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${fTransType.selectedItem.dataValue}==\"Buy\"){\n    if(${fActualRate.dataValue}>${svGetRate.pds}){\n        \"+\"\n    }else{\n        \"-\"\n    }\n}else{\n    if(${svGetRate.pds}>${fActualRate.dataValue}){\n        \"+\"\n    }else{\n        \"-\"\n    }\n}","targetProperty":"dataValue"}, {}]
}]
}],
fCustType: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Customer Type:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","width":"320px"}, {"onchange":"fCustTypeChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCust","targetProperty":"dataSet"}, {}]
}]
}],
fAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
fAcctNo: ["wm.Text", {"border":"0","caption":"CIFNo:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","width":"320px"}, {"onfocus":"onFocusField"}],
btnSearch: ["wm.Button", {"border":"1","caption":"Search","height":"100%","width":"80px"}, {"onclick":"btnSearchClick"}],
lblResult: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
}],
fpCustDetail: ["wm.FormPanel", {"desktopHeight":"79px","height":"79px","padding":"0","styles":{}}, {}, {
fCustName: ["wm.Text", {"border":"0","caption":"Customer Name:","captionSize":"135px","displayValue":"","height":"25px","styles":{},"width":"500px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.name","targetProperty":"dataValue"}, {}]
}]
}],
fCustAddress: ["wm.Text", {"border":"0","caption":"Customer Address:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","showing":false,"styles":{},"width":"500px"}, {}],
fCustContactNo: ["wm.Text", {"border":"0","caption":"Customer Contact No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","showing":false,"styles":{},"width":"500px"}, {}]
}],
panel4: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnSubmit: ["wm.Button", {"border":"1","caption":"Submit","height":"100%"}, {"onclick":"svAddBuySell"}],
btnSubmit1: ["wm.Button", {"border":"1","caption":"Cancel","height":"100%"}, {}]
}]
}]
}]
}]
};

TLR_FX_BUYSELL.prototype._cssText = '';
TLR_FX_BUYSELL.prototype._htmlText = '';