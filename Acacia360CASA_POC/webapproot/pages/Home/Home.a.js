dojo.declare("Home", wm.Page, {
start: function() {
//this.dlgAmtEntry.activate();
//this.svCashInCashOut.update();
this.svCurrList.update();
this.svUserList.update();
this.svUserTotalNet.update();
},
"preferredDevice": "desktop",
btnCancelClick: function(inSender) {
this.countPanel.clearData();
this.dlgAmtEntry.deactivate();
},
btnACOClick: function(inSender) {
this.dlgCashPos.setValue("title", "Cash Out");
this.cpOrigin.setCaption("Source");
this.cpDestination.setCaption("Destination");
this.lblTx.setCaption(this.dlgCashPos.title);
},
btnACIClick: function(inSender) {
this.dlgCashPos.setValue("title", "Cash In");
this.cpOrigin.setCaption("Destination");
this.cpDestination.setCaption("Source");
this.lblTx.setCaption(this.dlgCashPos.title);
},
btnCicoCancelClick: function(inSender) {
this.cpDestination.clear();
//        this.cpCurrency.clear();
this.cpTxamount.clear();
this.dlgCashPos.deactivate();
},
svCashPositionResult: function(inSender, inDeprecated) {
if (inSender.getData().dataValue === "1") {
app.alert("Transaction Successful!");
this.cpDestination.clear();
//            this.cpCurrency.clear();
this.cpTxamount.clear();
this.dlgCashPos.deactivate();
this.svCashInCashOut.update();
this.svUnitBalance.update();
this.svUserTotalNet.update();
} else {
app.alert("Transaction Failed!");
}
},
cashinGridGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
this.cashinGrid.select(rowIndex);
this.svConfimCpos.input.setValue("txref", this.cashinGrid.selectedItem.getData().txref);
this.svConfimCpos.update();
this.dlgAmtDetail.activate();
this.varCposInOut.setValue("dataValue", "IN");
},
notiCposAcceptOk: function(inSender, inResult) {
if(this.varCposInOut.getData().dataValue == "OUT" && this.cashOutGrid.selectedItem.getData().txstatus == "Declined"){
this.svActionCpos.input.setValue("txref", this.cashOutGrid.selectedItem.getData().txref);
this.svActionCpos.input.setValue("act", "R");
this.varCposAction.setValue("dataValue", "R");
}else{
this.svActionCpos.input.setValue("txref", this.cashinGrid.selectedItem.getData().txref);
this.svActionCpos.input.setValue("act", "A");
this.varCposAction.setValue("dataValue", "A");
}
this.svActionCpos.input.setValue("remarks", "");
this.svActionCpos.update();
},
notiCposDeclineOk: function(inSender, inResult) {
this.svActionCpos.input.setValue("txref", this.cashinGrid.selectedItem.getData().txref);
this.svActionCpos.input.setValue("act", "D");
this.varCposAction.setValue("dataValue", "D");
this.svActionCpos.input.setValue("remarks", this.lgTxtRemarks.getDataValue());
this.dlgDecline.hide();
this.svActionCpos.update();
},
svActionCposResult: function(inSender, inDeprecated) {
//        console.log(inSender.getData().dataValue);
if (inSender.getData().dataValue == "1") {
if (this.varCposAction.getData().dataValue == "A" || this.varCposAction.getData().dataValue == "R") {
app.alert("Transaction Accepted!");
this.dlgAmtDetail.deactivate();
this.svUnitBalance.update();
this.svCashInCashOut.update();
} else if (this.varCposAction.getData().dataValue == "D") {
app.alert("Transaction Declined!");
this.dlgAmtDetail.deactivate();
//                this.svUnitBalance.update();
this.svCashInCashOut.update();
//                this.svUserTotalNet.update();
}
this.svUserTotalNet.update();
} else {
app.alert("Error in Routine");
}
},
svUnitBalanceResult: function(inSender, inDeprecated) {
app.varNetCash.setValue("dataValue", inSender.getData().dataValue);
},
cashOutGridGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
this.cashOutGrid.select(rowIndex);
this.svConfimCpos.input.setValue("txref", this.cashOutGrid.selectedItem.getData().txref);
this.svConfimCpos.update();
this.varCposInOut.setValue("dataValue", "OUT");
this.dlgAmtDetail.activate();
},
//	svCashInCashOutResult: function(inSender, inDeprecated) {
////        app.alert(this.variable1.getData().dataValue);
//	    this.variable1.setValue("dataValue", this.svCashInCashOut.getData().cashout.count);
//        app.alert(this.variable1.getData().dataValue);
//        if(this.variable1.getData().dataValue>0){
//            for(var i = 1; i < this.variable1.getData().dataValue; i++){
////                console.log("ers : "+this.svCashInCashOut.getData().cashout.select(i).getData().txref);
//            }
//        }
//	},
//	serviceVariable1Result: function(inSender, inDeprecated) {
//	       for(var i = 0; i < inSender.getData().length; i++){
//               console.log(this.serviceVariable1.getItem(i).getData().name);
//	       }
//	},
btnACI1Click: function(inSender) {
this.btnACIClick(inSender);
},
notifConfirmOk: function(inSender, inResult) {
console.log(this.svCashPosition.input.getData().form.cashpos);
this.svCashPosition.update();
},
dlgCashPosClose: function(inSender, inWhy) {
this.countPanel.clearData();
},
btnViewRemarksClick: function(inSender) {
this.lgTxtRemarks.setDataValue(this.cashOutGrid.selectedItem.getData().remarks);
this.lgTxtRemarks.setReadonly(true);
this.btnOK.setShowing(false);
this.dlgDecline.show();
},
btnCposDeclineClick: function(inSender) {
this.lgTxtRemarks.setReadonly(false);
this.btnOK.setShowing(true);
this.lgTxtRemarks.clear();
this.dlgDecline.show();
},
svUnitBalance1Result: function(inSender, inDeprecated) {
console.log(inSender.getData());
},
cpDestinationChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if(this.dlgCashPos.title == "Cash In"){
this.svUnitBalance1.update();
}
},
_end: 0
});

Home.widgets = {
navCashDep: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"TLR_FX_CASHDEP\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
navCashWith: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"TLR_FX_CASHWDRW\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
navAccountInq: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"TLR_ACCTBALINQ\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
svCashPosition: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cashPos","service":"FinTxFacade"}, {"onResult":"svCashPositionResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"cashPosInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire2: ["wm.Wire", {"expression":undefined,"source":"cpTxamount.dataValue","targetProperty":"form.cashpos.txamount"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"cpTxdate.dataValue","targetProperty":"form.cashpos.txdate"}, {}],
wire20: ["wm.Wire", {"expression":undefined,"source":"txTotalAmt.dataValue","targetProperty":"form.cashdnm.txamount"}, {}],
wire7: ["wm.Wire", {"expression":undefined,"source":"tx5qn.dataValue","targetProperty":"form.cashdnm.dnm5"}, {}],
wire9: ["wm.Wire", {"expression":undefined,"source":"tx10qn.dataValue","targetProperty":"form.cashdnm.dnm10"}, {}],
wire10: ["wm.Wire", {"expression":undefined,"source":"tx25cntqn.dataValue","targetProperty":"form.cashdnm.dnm25cnt"}, {}],
wire8: ["wm.Wire", {"expression":undefined,"source":"tx20qn.dataValue","targetProperty":"form.cashdnm.dnm20"}, {}],
wire11: ["wm.Wire", {"expression":undefined,"source":"tx10cntqn.dataValue","targetProperty":"form.cashdnm.dnm10cnt"}, {}],
wire12: ["wm.Wire", {"expression":undefined,"source":"tx100qn.dataValue","targetProperty":"form.cashdnm.dnm100"}, {}],
wire13: ["wm.Wire", {"expression":undefined,"source":"tx1cntqn.dataValue","targetProperty":"form.cashdnm.dnm1cnt"}, {}],
wire14: ["wm.Wire", {"expression":undefined,"source":"tx1000qn.dataValue","targetProperty":"form.cashdnm.dnm1000"}, {}],
wire15: ["wm.Wire", {"expression":undefined,"source":"tx500qn.dataValue","targetProperty":"form.cashdnm.dnm500"}, {}],
wire16: ["wm.Wire", {"expression":undefined,"source":"tx50qn.dataValue","targetProperty":"form.cashdnm.dnm50"}, {}],
wire17: ["wm.Wire", {"expression":undefined,"source":"tx5cntqn.dataValue","targetProperty":"form.cashdnm.dnm5cnt"}, {}],
wire18: ["wm.Wire", {"expression":undefined,"source":"tx200qn.dataValue","targetProperty":"form.cashdnm.dnm200"}, {}],
wire19: ["wm.Wire", {"expression":undefined,"source":"tx1qn.dataValue","targetProperty":"form.cashdnm.dnm1"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"cpCurrency.dataValue","targetProperty":"form.cashpos.currency"}, {}],
wire: ["wm.Wire", {"expression":"\"P\"","targetProperty":"form.cashpos.txstatus"}, {}],
wire21: ["wm.Wire", {"expression":undefined,"source":"cpTxvaldt.dataValue","targetProperty":"form.cashpos.txvaldt"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"form.cashpos.unit"}, {}],
wire22: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"form.cashpos.instcode"}, {}],
wire5: ["wm.Wire", {"expression":"if(${lblTx.caption}==\"Cash Out\"){\r\n    ${cpDestination.selectedItem.id}\r\n}else{\r\n    ${[main].svUserInfo.userid}\r\n}","targetProperty":"form.cashpos.destination"}, {}],
wire1: ["wm.Wire", {"expression":"if(${lblTx.caption}==\"Cash Out\"){\n    ${[main].svUserInfo.userid}\n}else{\n    ${cpDestination.selectedItem.id}\n}","targetProperty":"form.cashpos.origin"}, {}]
}]
}]
}],
svCurrList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCurrency","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getCurrencyInputs"}, {}]
}],
svUserList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUserListCico","service":"UtilFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getUserListCicoInputs"}, {}]
}],
svCashInCashOut: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCashInCashOut","service":"FinTxFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panel3","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"getCashInCashOutInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"userid"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.varCurrency.dataValue","targetProperty":"currency"}, {}]
}]
}]
}],
notiCposAccept: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"notiCposAcceptOk"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"\"Proceed\"","targetProperty":"OKButtonText"}, {}],
wire: ["wm.Wire", {"expression":"\"Are you sure you want to accept?\"","targetProperty":"text"}, {}]
}]
}]
}],
svConfimCpos: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cashPosDenom","service":"FinTxFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"cashPosDenomInputs"}, {}]
}],
varCposAction: ["wm.Variable", {"type":"StringData"}, {}],
svActionCpos: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"confirmCashPos","service":"FinTxFacade"}, {"onResult":"svActionCposResult"}, {
input: ["wm.ServiceInput", {"type":"confirmCashPosInputs"}, {}]
}],
notiCposDecline: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"notiCposDeclineOk"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Are you sure you want to decline?\"","targetProperty":"text"}, {}],
wire1: ["wm.Wire", {"expression":"\"Process\"","targetProperty":"OKButtonText"}, {}]
}]
}]
}],
svUnitBalance: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","loadingDialog":"","operation":"getUnitBalance","service":"UserInfoFacade"}, {"onResult":"svUnitBalanceResult"}, {
input: ["wm.ServiceInput", {"type":"getUnitBalanceInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"app.varCurrency.dataValue","targetProperty":"currency"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"userid"}, {}]
}]
}]
}],
timer1: ["wm.Timer", {"autoStart":true,"delay":1500,"repeating":false}, {"onTimerFire":"svCashInCashOut"}],
varCposInOut: ["wm.Variable", {"type":"StringData"}, {}],
svUserTotalNet: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"userCashPos","service":"FinTxFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"userCashPosInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"userid"}, {}]
}]
}]
}],
notifConfirm: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"notifConfirmOk"}, {
input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Do you wish to proceed?\"","targetProperty":"text"}, {}]
}]
}]
}],
svUnitBalance1: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","loadingDialog":"","operation":"getUnitBalance","service":"UserInfoFacade"}, {"onResult":"svUnitBalance1Result"}, {
input: ["wm.ServiceInput", {"type":"getUnitBalanceInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"cpDestination.dataValue","targetProperty":"userid"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"cpCurrency.dataValue","targetProperty":"currency"}, {}]
}]
}]
}],
dlgAmtEntry: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"470px","height":"470px","styles":{},"title":"Amount Entry","width":"420px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
panel11: ["wm.Panel", {"height":"358px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel12: ["wm.Panel", {"height":"355px","horizontalAlign":"center","verticalAlign":"top","width":"130px"}, {}, {
label2: ["wm.Label", {"align":"center","caption":"Denomination","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
denomPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
tx1000dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":1000,"displayValue":"1,000.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx500dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":500,"displayValue":"500.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx200dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":200,"displayValue":"200.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx100dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":100,"displayValue":"100.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx50dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":50,"displayValue":"50.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx20dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":20,"displayValue":"20.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx10dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":10,"displayValue":"10.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx5dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":5,"displayValue":"5.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx1dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":1,"displayValue":"1.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx25cntdnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.25,"displayValue":"0.25","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx10cntdnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.1,"displayValue":"0.10","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx5cntdnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.05,"displayValue":"0.05","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx1cntdnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.01,"displayValue":"0.01","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}]
}]
}],
panel1: ["wm.Panel", {"height":"355px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"120px"}, {}, {
label4: ["wm.Label", {"align":"center","caption":"Count","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
countPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
tx1000qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined,"styles":{}}, {}],
tx500qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined,"styles":{}}, {}],
tx200qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
tx100qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
tx50qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
tx20qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
tx10qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
tx5qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
tx1qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
tx25cntqn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
tx10cntqn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
tx5cntqn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
tx1cntqn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}]
}]
}],
panel4: ["wm.Panel", {"height":"355px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"140px"}, {}, {
label5: ["wm.Label", {"align":"center","caption":"Amount","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
amountPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
tx1000: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx1000dnm.dataValue}*${tx1000qn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx500: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx500dnm.dataValue}*${tx500qn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx200: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx200dnm.dataValue}*${tx200qn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx100: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx100dnm.dataValue}*${tx100qn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx50: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx50dnm.dataValue}*${tx50qn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx20: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx20dnm.dataValue}*${tx20qn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx10: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx10dnm.dataValue}*${tx10qn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx5: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx5dnm.dataValue}*${tx5qn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx1: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx1dnm.dataValue}*${tx1qn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx25cnt: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx25cntdnm.dataValue}*${tx25cntqn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx10cnt: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx10cntdnm.dataValue}*${tx10cntqn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx5cnt: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx5cntdnm.dataValue}*${tx5cntqn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx1cnt: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx1cntdnm.dataValue}*${tx1cntqn.dataValue}","targetProperty":"dataValue"}, {}]
}]
}]
}]
}]
}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel6: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txTotalAmt: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":"Total Amount:","captionSize":"120px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx1000.dataValue}+${tx500.dataValue}+${tx200.dataValue}+\n${tx100.dataValue}+${tx50.dataValue}+${tx20.dataValue}+\n${tx10.dataValue}+${tx5.dataValue}+${tx1.dataValue}+\n${tx25cnt.dataValue}+${tx10cnt.dataValue}+${tx5cnt.dataValue}+${tx1cnt.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
spacer1: ["wm.Spacer", {"height":"20px","width":"15px"}, {}]
}],
panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label9: ["wm.Label", {"caption":"Insufficient Balance! ","padding":"4","styles":{"color":"#ae0d0d","fontWeight":"bolder"}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${dlgCashPos.title}==\"Cash In\"){\n    ${txTotalAmt.dataValue} > ${svUnitBalance1.dataValue}\n}else{\n    ${txTotalAmt.dataValue} > ${app.varNetCash.dataValue}\n}","targetProperty":"showing"}, {}]
}]
}],
btnSubmit: ["wm.Button", {"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","width":"95px"}, {"onclick":"dlgAmtEntry.hide"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${dlgCashPos.title}==\"Cash In\"){\r\n    ${txTotalAmt.dataValue} > ${svUnitBalance1.dataValue} || ${txTotalAmt.dataValue} <= 0\r\n}else{\r\n    ${txTotalAmt.dataValue} > ${app.varNetCash.dataValue} || ${txTotalAmt.dataValue} <= 0\r\n}","targetProperty":"disabled"}, {}]
}]
}],
btnCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"28px","height":"28px","margin":"0,0,0,0","styles":{},"width":"80px"}, {"onclick":"btnCancelClick"}],
spacer2: ["wm.Spacer", {"height":"20px","width":"15px"}, {}]
}]
}]
}]
}],
dlgCashPos: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget1","desktopHeight":"235px","height":"235px","styles":{},"title":"Cash Out","width":"350px"}, {"onClose":"dlgCashPosClose"}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
cicoPanel: ["wm.Panel", {"height":"160px","horizontalAlign":"left","margin":"3,3,5,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
cpTxdate: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Transaction Date:","displayValue":"10/10/2018","height":"25px","readonly":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
}]
}],
cpTxvaldt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Business Date:","displayValue":"","height":"25px","readonly":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
cpOrigin: ["wm.Text", {"border":"0","caption":"Origin:","displayValue":"cashier","height":"25px","readonly":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"[main].svUserInfo.firstname","targetProperty":"dataValue"}, {}]
}]
}],
cpDestination: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Destination:","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","required":true,"width":"300px"}, {"onchange":"cpDestinationChange"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svUserList","targetProperty":"dataSet"}, {}]
}]
}],
cpCurrency: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"id","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"required":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCurrList","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.varCurrency.dataValue","targetProperty":"dataValue"}, {}]
}]
}],
cpTxamount: ["wm.Number", {"border":"0","caption":"Amount:","displayValue":"0","emptyValue":"zero","height":"25px","required":true,"width":"300px"}, {"onfocus":"dlgAmtEntry.show"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txTotalAmt.dataValue","targetProperty":"dataValue"}, {}]
}]
}]
}],
panel8: ["wm.Panel", {"height":"35px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"0,5,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
btnCicoSubmit: ["wm.Button", {"border":"1","caption":"Submit","desktopHeight":"31px","height":"31px","margin":"0,0,0,10","styles":{},"width":"93px"}, {"onclick":"notifConfirm"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${cicoPanel.invalid} || ${cpTxamount.dataValue} <= 0.00","targetProperty":"disabled"}, {}]
}]
}],
btnCicoCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"31px","height":"31px","margin":"0,0,0,10","styles":{},"width":"93px"}, {"onclick":"btnCicoCancelClick"}]
}]
}]
}],
dlgAmtDetail: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"470px","height":"470px","title":"Amount Denomination Detail","width":"420px"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
panel13: ["wm.Panel", {"height":"358px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel14: ["wm.Panel", {"height":"355px","horizontalAlign":"center","verticalAlign":"top","width":"130px"}, {}, {
label6: ["wm.Label", {"align":"center","caption":"Denomination","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
denomPanelDet: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
tx1000dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":1000,"displayValue":"1,000.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx500dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":500,"displayValue":"500.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx200dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":200,"displayValue":"200.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx100dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":100,"displayValue":"100.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx50dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":50,"displayValue":"50.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx20dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":20,"displayValue":"20.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx10dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":10,"displayValue":"10.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx5dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":5,"displayValue":"5.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx1dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":1,"displayValue":"1.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx25cntdnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.25,"displayValue":"0.25","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx10cntdnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.1,"displayValue":"0.10","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx5cntdnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.05,"displayValue":"0.05","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
tx1cntdnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.01,"displayValue":"0.01","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}]
}]
}],
panel9: ["wm.Panel", {"height":"355px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"120px"}, {}, {
label7: ["wm.Label", {"align":"center","caption":"Count","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
countPanelDet: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
tx1000countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm1000","targetProperty":"dataValue"}, {}]
}]
}],
tx500countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm500","targetProperty":"dataValue"}, {}]
}]
}],
tx200countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm200","targetProperty":"dataValue"}, {}]
}]
}],
tx100countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm100","targetProperty":"dataValue"}, {}]
}]
}],
tx50countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm50","targetProperty":"dataValue"}, {}]
}]
}],
tx20countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm20","targetProperty":"dataValue"}, {}]
}]
}],
tx10countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm10","targetProperty":"dataValue"}, {}]
}]
}],
tx5countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm5","targetProperty":"dataValue"}, {}]
}]
}],
tx1countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm1","targetProperty":"dataValue"}, {}]
}]
}],
tx25cntcountdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm25cnt","targetProperty":"dataValue"}, {}]
}]
}],
tx10cntcountdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm10cnt","targetProperty":"dataValue"}, {}]
}]
}],
tx5cntcountdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm5cnt","targetProperty":"dataValue"}, {}]
}]
}],
tx1cntcountdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm1cnt","targetProperty":"dataValue"}, {}]
}]
}]
}]
}],
panel15: ["wm.Panel", {"height":"355px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"140px"}, {}, {
label8: ["wm.Label", {"align":"center","caption":"Amount","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
amountPanelDet: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
tx1000amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx1000dnmdet.dataValue}*${tx1000countdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx500amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx500dnmdet.dataValue}*${tx500countdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx200amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx200dnmdet.dataValue}*${tx200countdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx100amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx100dnmdet.dataValue}*${tx100countdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx50amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx50dnmdet.dataValue}*${tx50countdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx20amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx20dnmdet.dataValue}*${tx20countdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx10amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx10dnmdet.dataValue}*${tx10countdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx5amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx5dnmdet.dataValue}*${tx5countdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx1amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx1dnmdet.dataValue}*${tx1countdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx25cntamtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx25cntdnmdet.dataValue}*${tx25cntcountdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx10cntamtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx10cntdnmdet.dataValue}*${tx10cntcountdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx5cntamtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx5cntdnmdet.dataValue}*${tx5cntcountdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}],
tx1cntamtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tx1cntdnmdet.dataValue}*${tx1cntcountdet.dataValue}","targetProperty":"dataValue"}, {}]
}]
}]
}]
}]
}],
panel16: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
panel17: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
txStatus: ["wm.Text", {"_classes":{"domNode":["txamount"]},"border":"0","caption":"Status:","captionSize":"45px","displayValue":"","emptyValue":"emptyString","height":"25px","margin":"0,0,0,5","padding":"0","readonly":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.status","targetProperty":"dataValue"}, {}]
}]
}],
spacer5: ["wm.Spacer", {"height":"20px","width":"60px"}, {}],
txTotalAmtDet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":"Total Amount:","captionSize":"90px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.txamount","targetProperty":"dataValue"}, {}]
}]
}],
spacer3: ["wm.Spacer", {"height":"20px","width":"15px"}, {}]
}],
panel18: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnCposActionPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"380px"}, {}, {
btnViewRemarks: ["wm.Button", {"border":"1","caption":"View Remarks","desktopHeight":"28px","height":"28px","styles":{},"width":"95px"}, {"onclick":"btnViewRemarksClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"(${txStatus.dataValue} == \"Declined\" && ${varCposInOut.dataValue}==\"OUT\")","targetProperty":"showing"}, {}]
}]
}],
btnCposAccept: ["wm.Button", {"border":"1","caption":"Accept","desktopHeight":"28px","height":"28px","styles":{},"width":"95px"}, {"onclick":"notiCposAccept"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"(${txStatus.dataValue}==\"Pending\" && ${varCposInOut.dataValue}==\"IN\")\n|| (${txStatus.dataValue} == \"Declined\" && ${varCposInOut.dataValue}==\"OUT\")","targetProperty":"showing"}, {}]
}]
}],
btnCposDecline: ["wm.Button", {"border":"1","caption":"Decline","desktopHeight":"28px","height":"28px","margin":"0,0,0,0","styles":{},"width":"95px"}, {"onclick":"btnCposDeclineClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${txStatus.dataValue}==\"Pending\" && ${varCposInOut.dataValue}==\"IN\"","targetProperty":"showing"}, {}]
}]
}]
}],
btnCposClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"28px","height":"28px","margin":"0,0,0,10","styles":{},"width":"95px"}, {"onclick":"dlgAmtDetail.hide"}],
spacer4: ["wm.Spacer", {"height":"20px","width":"15px"}, {}]
}]
}]
}]
}],
dlgDecline: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget3","desktopHeight":"200px","height":"200px","title":"Remarks","width":"450px"}, {}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
lgTxtRemarks: ["wm.LargeTextArea", {"border":"0","caption":"largeTextArea1","captionSize":"0px","dataValue":"","displayValue":"","emptyValue":"emptyString","height":"100%","required":true,"styles":{}}, {}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"31px"}, {}, {
btnOK: ["wm.Button", {"border":"1","caption":"OK","height":"20px"}, {"onclick":"notiCposDecline"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lgTxtRemarks.invalid","targetProperty":"disabled"}, {}]
}]
}],
btnClose: ["wm.Button", {"border":"1","caption":"Close","height":"20px"}, {"onclick":"dlgDecline.hide"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","styles":{},"verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"20,150,20,150","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel19: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
label10: ["wm.Label", {"caption":"CASH POSITION","padding":"4","styles":{"fontWeight":"bold"},"width":"128px"}, {}],
lblTx: ["wm.Label", {"caption":"","padding":"4","showing":false}, {}]
}],
cashposGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"userid","title":"Userid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"currency","title":"Currency","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"userbalance","title":"Balance","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":false,"field":"businessdate","title":"Businessdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Currency: \" + ${currency} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Balance: \" + ${wm.runtimeId}.formatCell(\"userbalance\", ${userbalance}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.smslai_eoddb.data.Tbnetamt","height":"111px","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svUserTotalNet","targetProperty":"dataSet"}, {}]
}]
}],
panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"CASH IN","padding":"4","styles":{"fontWeight":"bold"},"width":"80px"}, {}],
btnACI: ["wm.Button", {"border":"1","caption":"Add Cash-In","desktopHeight":"25px","height":"25px","margin":"0,0,0,0","styles":{},"width":"110px"}, {"onclick":"btnACIClick","onclick1":"dlgCashPos.show"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${app.varRole.dataValue}==\"cashier\"","targetProperty":"showing"}, {}]
}]
}]
}],
cashinGrid: ["wm.DojoGrid", {"caseSensitiveSort":false,"columnReordering":false,"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txdate","title":"Txdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"unit","title":"Unit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"origin","title":"Origin","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"destination","title":"Destination","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"currency","title":"Currency","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txamount","title":"Txamount","width":"80px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":false,"field":"remarks","title":"Remarks","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txref","title":"Txref","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txstatus","title":"Txstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"instcode","title":"Instcode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Txdate: \" + ${wm.runtimeId}.formatCell(\"txdate\", ${txdate}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Unit: \" + ${unit}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Origin: \" + ${origin}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Destination: \" + ${destination}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Currency: \" + ${currency}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txamount: \" + ${wm.runtimeId}.formatCell(\"txamount\", ${txamount}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txref: \" + ${txref}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txstatus: \" + ${txstatus}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"btn","title":"Action","width":"100%","align":"left","formatFunc":"wm_button_formatter","expression":"\"View\"","isCustomField":true},
{"show":false,"field":"txvaldt","title":"Txvaldt","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"}
],"height":"150px","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"sortingEnabled":false}, {"onGridButtonClick":"cashinGridGridButtonClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCashInCashOut.cashin","targetProperty":"dataSet"}, {}]
}]
}],
panel10: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${app.varRole.dataValue}==\"cashier\" || ${app.varRole.dataValue}==\"teller\"","targetProperty":"showing"}, {}]
}],
label3: ["wm.Label", {"caption":"CASH OUT","padding":"4","styles":{"fontWeight":"bold"},"width":"80px"}, {}],
btnACO: ["wm.Button", {"border":"1","caption":"Add Cash-Out","desktopHeight":"25px","height":"25px","margin":"0,0,0,0","styles":{},"width":"110px"}, {"onclick":"btnACOClick","onclick1":"dlgCashPos.show"}]
}],
cashOutGrid: ["wm.DojoGrid", {"caseSensitiveSort":false,"columnReordering":false,"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txdate","title":"Txdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"unit","title":"Unit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"origin","title":"Origin","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"destination","title":"Destination","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"currency","title":"Currency","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txamount","title":"Txamount","width":"80px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":false,"field":"remarks","title":"Remarks","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txref","title":"Txref","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txstatus","title":"Txstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"instcode","title":"Instcode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Txdate: \" + ${wm.runtimeId}.formatCell(\"txdate\", ${txdate}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Unit: \" + ${unit}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Origin: \" + ${origin}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Destination: \" + ${destination}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Currency: \" + ${currency}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txamount: \" + ${wm.runtimeId}.formatCell(\"txamount\", ${txamount}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txref: \" + ${txref}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txstatus: \" + ${txstatus}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"btn","title":"Action","width":"100%","align":"left","formatFunc":"wm_button_formatter","expression":"\"View\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"txvaldt","title":"Txvaldt","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"}
],"height":"150px","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"sortingEnabled":false}, {"onGridButtonClick":"cashOutGridGridButtonClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svCashInCashOut.cashout","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":"${app.varRole.dataValue}==\"cashier\" || ${app.varRole.dataValue}==\"teller\"","targetProperty":"showing"}, {}]
}]
}]
}]
}]
};

Home.prototype._cssText = '.no {\
display: inline-block;\
text-align: right;\
}\
';
Home.prototype._htmlText = '';