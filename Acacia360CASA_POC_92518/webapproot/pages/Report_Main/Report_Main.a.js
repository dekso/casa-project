dojo.declare("Report_Main", wm.Page, {
start: function() {
this.ReportTree.forEachNode(function( n ) {n.setOpen(true); });
this.ReportTree1.forEachNode(function( n ) {n.setOpen(true); });
this.ReportTree2.forEachNode(function( n ) {n.setOpen(true); });
this.svBranchCode.update();
this.lblReport.setCaption("Choose an Account Type");
},
"preferredDevice": "desktop",
ReportTreeClick: function(inSender, inNode) {
try {
if (typeof(inData) == "object") {
inNode.setOpen(true);
this.rptNavigation(inNode.content);
this.varRptName.setValue("dataValue",inNode.content);
} else {
this.rptNavigation(inNode.content);
this.varRptName.setValue("dataValue",inNode.content);
}
} catch (e) {
console.error('ERROR IN menuObjectTreeSelect: ' + e);
}
},
ReportTreeClick1: function(inSender, inNode) {
this.reportFrame.setSource("");
},
rptNavigation: function(rptName) {
switch (rptName) {
case 'Savings Account Reports':
this.lblReport.setCaption("");
break;
case 'Current Account Reports':
this.lblReport.setCaption("");
break;
case 'Time Deposit Reports':
this.lblReport.setCaption("");
break;
//        case 'Blacklisted Accounts':
//            this.lblReport.setCaption("");
//            break;
//        case 'AMLA Watchlist':
//            this.lblReport.setCaption("");
//            break;
case 'Daily Trial Balance':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of New Accounts':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Closed Accounts':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Posted Transaction':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Dormant Accounts':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Transfer of Accounts':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Activated Dormant Accounts':
this.lblReport.setCaption("<u>"+rptName);
//             this.svGetListTeam.update();
break;
case 'Daily List of Automatic Transfer of Account':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'CASA Full Balance Listing':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily Transaction Report':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Summary of Daily Transaction Report':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Average Daily Balance Report':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Check Book Request':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Status of Checks Issued':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Accounts with Insufficient Fund':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Waived Charges':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Returned Items':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Matured Accounts':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of  Withdrawn Time Deposit':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Pre-Terminated Time Deposit':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of  Unclaimed Matured Time Deposit':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Time Deposit Balances':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Large Time Deposit Transactions':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Interest Paid Per Client for the Month':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Interest Paid Per Client to Date':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of Renewed Time Deposit':
this.lblReport.setCaption("<u>"+rptName);
break;
case 'Daily List of New Time Deposits':
this.lblReport.setCaption("<u>"+rptName);
break;
default:
app.toastError("No report found = " + rptName);
}
},
svErrCorrTxResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svCashInOutResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svTLRTotalInqResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svEJournalResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svAllAccptdTxResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svAllRejTxResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svAllSupOverrideTxResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svAllTimeOutAccptTxResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
ReportTree1Click: function(inSender, inNode) {
this.ReportTreeClick(inSender, inNode);
},
ReportTree1Click1: function(inSender, inNode) {
this.ReportTreeClick1(inSender, inNode);
},
ReportTree2Click: function(inSender, inNode) {
this.ReportTreeClick(inSender, inNode);
},
ReportTree2Click1: function(inSender, inNode) {
this.ReportTreeClick1(inSender, inNode);
},
svDailyTrialBalSAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListNewAccSAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListClosedAccSAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListPostedTransSAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListTransAccSAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListDormantAccSAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListActivatedDormantAccSAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListAutoTransAccSAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svCASAFullBalanceSAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyTransSAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svSummaryDailyTransResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svAverageDailyBalSAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyTrialBalCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListNewAccCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListClosedAccCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListPostedTransCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListDormantAccCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListTransferAccCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListActivatedDormantAccCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListAutoTransferAccCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListCheckbookReqCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svStatChecksIssuedCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svCASAFullBalCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyTransCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svSummaryDailyTransCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svAverageDailyBalCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListAccInsufFundCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListWaivedChargesCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svDailyListReturnedItemsCAResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svTDListMaturedAccResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svTDListWithdrawnTimeDepResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svTDListPreTermTimeDepResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svTDListUnclaimedMaturedTimeDepResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svTDTrialBalResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svTDListTimeDepBalResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svTDListLargeTimeDepTransResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svTDListIntPaidPerClientForMonthResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svTDListIntPaidPerClientForDayResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svTDListRenewedTimeDepositsResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
svTDListNewTimeDepResult: function(inSender, inDeprecated) {
this.reportFrame.setSource(inSender.getData().dataValue);
},
_end: 0
});

Report_Main.widgets = {
varRptName: ["wm.Variable", {"type":"StringData"}, {}],
svDailyTrialBalSA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyTrialBalanceSA","service":"ReportsFacade"}, {"onResult":"svDailyTrialBalSAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyTrialBalanceSAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate7.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu12.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListNewAccSA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListNewAccountSA","service":"ReportsFacade"}, {"onResult":"svDailyListNewAccSAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListNewAccountSAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate8.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview1.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu11.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListClosedAccSA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListClosedAccountSA","service":"ReportsFacade"}, {"onResult":"svDailyListClosedAccSAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListClosedAccountSAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate9.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview2.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu10.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListPostedTransSA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListPostedTransSA","service":"ReportsFacade"}, {"onResult":"svDailyListPostedTransSAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListPostedTransSAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate10.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview3.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu9.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListTransAccSA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListTransferAccSA","service":"ReportsFacade"}, {"onResult":"svDailyListTransAccSAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListTransferAccSAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate12.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview5.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu7.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListDormantAccSA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListDormantAccSA","service":"ReportsFacade"}, {"onResult":"svDailyListDormantAccSAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListDormantAccSAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate11.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview4.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu8.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListActivatedDormantAccSA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListActivatedDormantSA","service":"ReportsFacade"}, {"onResult":"svDailyListActivatedDormantAccSAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListActivatedDormantSAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate13.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview6.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu6.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListAutoTransAccSA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListAutoTransferAccSA","service":"ReportsFacade"}, {"onResult":"svDailyListAutoTransAccSAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListAutoTransferAccSAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectPreview7.dataValue","targetProperty":"rpttype"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate14.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectMenu5.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svCASAFullBalanceSA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"CASAFullBalancingSA","service":"ReportsFacade"}, {"onResult":"svCASAFullBalanceSAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"CASAFullBalancingSAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate15.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview8.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu4.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyTransSA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyTransSA","service":"ReportsFacade"}, {"onResult":"svDailyTransSAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyTransSAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate16.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview9.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu20.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svSummaryDailyTrans: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"SummaryDailyTransSA","service":"ReportsFacade"}, {"onResult":"svSummaryDailyTransResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"SummaryDailyTransSAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectPreview10.dataValue","targetProperty":"rpttype"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate17.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectMenu2.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svAverageDailyBalSA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"AverageDailyBalSA","service":"ReportsFacade"}, {"onResult":"svAverageDailyBalSAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"AverageDailyBalSAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate18.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview11.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyTrialBalCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyTrialBalCA","service":"ReportsFacade"}, {"onResult":"svDailyTrialBalCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyTrialBalCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate19.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview12.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu13.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListNewAccCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListNewAccCA","service":"ReportsFacade"}, {"onResult":"svDailyListNewAccCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListNewAccCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate20.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview13.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu14.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListClosedAccCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListClosedAccCA","service":"ReportsFacade"}, {"onResult":"svDailyListClosedAccCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListClosedAccCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate21.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview14.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu15.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListPostedTransCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListPostedTransCA","service":"ReportsFacade"}, {"onResult":"svDailyListPostedTransCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListPostedTransCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate22.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview15.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu16.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListDormantAccCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListDormantAccCA","service":"ReportsFacade"}, {"onResult":"svDailyListDormantAccCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListDormantAccCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate23.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview16.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu17.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListTransferAccCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListTransferAccCA","service":"ReportsFacade"}, {"onResult":"svDailyListTransferAccCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListTransferAccCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate24.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview17.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu18.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListActivatedDormantAccCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListActivatedDormantAccCA","service":"ReportsFacade"}, {"onResult":"svDailyListActivatedDormantAccCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListActivatedDormantAccCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate25.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview18.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu19.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListAutoTransferAccCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListAutoTransferAccCA","service":"ReportsFacade"}, {"onResult":"svDailyListAutoTransferAccCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListAutoTransferAccCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"txtBrCodeTrialBalSA19.dataValue","targetProperty":"branchcode"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate26.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview19.dataValue","targetProperty":"rpttype"}, {}]
}]
}]
}],
svDailyListCheckbookReqCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListCheckbookReqCA","service":"ReportsFacade"}, {"onResult":"svDailyListCheckbookReqCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListCheckbookReqCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate27.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview20.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu21.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svStatChecksIssuedCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"StatChecksIssuedCA","service":"ReportsFacade"}, {"onResult":"svStatChecksIssuedCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"StatChecksIssuedCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate28.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview21.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu22.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svCASAFullBalCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"CASAFullBalCA","service":"ReportsFacade"}, {"onResult":"svCASAFullBalCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"CASAFullBalCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate29.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview22.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu23.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyTransCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyTransCA","service":"ReportsFacade"}, {"onResult":"svDailyTransCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyTransCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate30.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview23.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu24.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svSummaryDailyTransCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"SummaryDailyTransCA","service":"ReportsFacade"}, {"onResult":"svSummaryDailyTransCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"SummaryDailyTransCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate31.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview24.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu25.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svAverageDailyBalCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"AverageDailyBalCA","service":"ReportsFacade"}, {"onResult":"svAverageDailyBalCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"AverageDailyBalCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate32.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview25.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu26.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListAccInsufFundCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListAccInsufFundCA","service":"ReportsFacade"}, {"onResult":"svDailyListAccInsufFundCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListAccInsufFundCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate33.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview26.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu27.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListWaivedChargesCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListWaivedChargesCA","service":"ReportsFacade"}, {"onResult":"svDailyListWaivedChargesCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListWaivedChargesCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"selectPreview27.dataValue","targetProperty":"rpttype"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate34.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectMenu28.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svDailyListReturnedItemsCA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"DailyListReturnedItemsCA","service":"ReportsFacade"}, {"onResult":"svDailyListReturnedItemsCAResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"DailyListReturnedItemsCAInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate35.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview28.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu29.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svTDListMaturedAcc: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"TDListMaturedAcc","service":"ReportsFacade"}, {"onResult":"svTDListMaturedAccResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"TDListMaturedAccInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate36.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview29.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu30.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svTDListWithdrawnTimeDep: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"TDListWithdrawnTimeDep","service":"ReportsFacade"}, {"onResult":"svTDListWithdrawnTimeDepResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"TDListWithdrawnTimeDepInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate37.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview30.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu31.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svTDListPreTermTimeDep: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"TDListPreTermTimeDep","service":"ReportsFacade"}, {"onResult":"svTDListPreTermTimeDepResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"TDListPreTermTimeDepInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate38.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview31.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu32.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svTDListUnclaimedMaturedTimeDep: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"TDListUnclaimedMaturedTimeDep","service":"ReportsFacade"}, {"onResult":"svTDListUnclaimedMaturedTimeDepResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"TDListUnclaimedMaturedTimeDepInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate39.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview32.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu33.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svTDTrialBal: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"TDTrialBal","service":"ReportsFacade"}, {"onResult":"svTDTrialBalResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"TDTrialBalInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate40.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview33.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu34.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svTDListTimeDepBal: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"TDListTimeDepBal","service":"ReportsFacade"}, {"onResult":"svTDListTimeDepBalResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"TDListTimeDepBalInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate41.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview34.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu35.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svTDListLargeTimeDepTrans: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"TDListLargeTimeDepTrans","service":"ReportsFacade"}, {"onResult":"svTDListLargeTimeDepTransResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"TDListLargeTimeDepTransInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate42.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview35.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu36.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svTDListIntPaidPerClientForMonth: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"TDListIntPaidPerClientForMonth","service":"ReportsFacade"}, {"onResult":"svTDListIntPaidPerClientForMonthResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"TDListIntPaidPerClientForMonthInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate43.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview36.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu37.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svTDListIntPaidPerClientForDay: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"TDListIntPaidPerClientForDay","service":"ReportsFacade"}, {"onResult":"svTDListIntPaidPerClientForDayResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"TDListIntPaidPerClientForDayInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate44.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview37.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu38.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svTDListRenewedTimeDeposits: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"TDListRenewedTimeDeposits","service":"ReportsFacade"}, {"onResult":"svTDListRenewedTimeDepositsResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"TDListRenewedTimeDepositsInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate45.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview38.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu39.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svTDListNewTimeDep: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"TDListNewTimeDep","service":"ReportsFacade"}, {"onResult":"svTDListNewTimeDepResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"TDListNewTimeDepInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fDate46.dataValue","targetProperty":"txdate"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"selectPreview39.dataValue","targetProperty":"rpttype"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu40.dataValue","targetProperty":"branchcode"}, {}]
}]
}]
}],
svBranchCode: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getBranchName","service":"ReportsFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"getBranchNameInputs"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
ReportTreePanel: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"center","margin":"0,0,0,0","styles":{"backgroundColor":"#f1f1f1"},"verticalAlign":"top","width":"310px"}, {}, {
spacer122: ["wm.Spacer", {"height":"20px","styles":{},"width":"96px"}, {}],
selectReports: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Type of Account: ","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"Savings Account Reports,Current Account Reports,Time Deposit Reports","width":"292px"}, {}],
ReportTree: ["wm.ObjectTree", {"data":{"Savings Account Reports":{"Daily Trial Balance":undefined,"Daily List of New Accounts":undefined,"Daily List of Closed Accounts":undefined,"Daily List of Posted Transaction":undefined,"Daily List of Dormant Accounts":undefined,"Daily List of Transfer of Accounts":undefined,"Daily List of Activated Dormant Accounts":undefined,"Daily List of Automatic Transfer of Account":undefined,"CASA Full Balance Listing":undefined,"Daily Transaction Report":undefined,"Summary of Daily Transaction Report":undefined,"Average Daily Balance Report":undefined}},"height":"100%","margin":"20,0,0,10","styles":{"backgroundColor":"#f1f1f1"}}, {"onclick":"ReportTreeClick","onclick1":"ReportTreeClick1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}]
}],
ReportTree1: ["wm.ObjectTree", {"data":{"Current Account Reports":{"Daily Trial Balance":undefined,"Daily List of New Accounts":undefined,"Daily List of Closed Accounts":undefined,"Daily List of Posted Transaction":undefined,"Daily List of Dormant Accounts":undefined,"Daily List of Transfer of Accounts":undefined,"Daily List of Activated Dormant Accounts":undefined,"Daily List of Automatic Transfer of Account":undefined,"Daily List of Check Book Request":undefined,"Status of Checks Issued":undefined,"CASA Full Balance Listing":undefined,"Daily Transaction Report":undefined,"Summary of Daily Transaction Report":undefined,"Average Daily Balance Report":undefined,"Daily List of Accounts with Insufficient Fund":undefined,"Daily List of Waived Charges":undefined,"Daily List of Returned Items":undefined}},"height":"100%","margin":"20,0,0,10","styles":{"backgroundColor":"#f1f1f1"}}, {"onclick":"ReportTree1Click","onclick1":"ReportTree1Click1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}]
}],
ReportTree2: ["wm.ObjectTree", {"data":{"Time Deposit Reports":{"Daily List of Matured Accounts":undefined,"Daily List of  Withdrawn Time Deposit":undefined,"Daily List of Pre-Terminated Time Deposit":undefined,"Daily List of  Unclaimed Matured Time Deposit":undefined,"Daily Trial Balance":undefined,"Daily List of Time Deposit Balances":undefined,"Daily List of Large Time Deposit Transactions":undefined,"Daily List of Interest Paid Per Client for the Month":undefined,"Daily List of Interest Paid Per Client to Date":undefined,"Daily List of Renewed Time Deposit":undefined,"Daily List of New Time Deposits":undefined}},"height":"100%","margin":"20,0,0,10","styles":{"backgroundColor":"#f1f1f1"}}, {"onclick":"ReportTree2Click","onclick1":"ReportTree2Click1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectReports.dataValue}==\"Time Deposit Reports\"","targetProperty":"showing"}, {}]
}]
}]
}],
panel1: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
lblReport: ["wm.Label", {"caption":"","height":"30px","padding":"4","width":"100%"}, {}],
AverageDailyBalSA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Average Daily Balance Report\" && ${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview11: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer1: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu1: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer3: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate18: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","styles":{},"width":"20%"}, {}],
spacer2: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button20: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svAverageDailyBalSA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview11.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
SummaryOfDailyTransactionReport: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Summary of Daily Transaction Report\" && ${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview10: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer5: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu2: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer6: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate17: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer7: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button19: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svSummaryDailyTrans"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview10.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyTransactionRepSA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Daily Transaction Report\" && ${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview9: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer8: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu3: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer9: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate16: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer10: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button18: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyTransSA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview9.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
CASAFullBalSA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"CASA Full Balance Listing\" && ${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview8: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer11: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu4: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer12: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate15: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer13: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button17: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svCASAFullBalanceSA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview8.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListAutomaticTransAccSA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Daily List of Automatic Transfer of Account\" && ${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview7: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer14: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu5: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer15: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate14: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer16: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button16: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListAutoTransAccSA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview7.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListActivatedDormAccSA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Daily List of Activated Dormant Accounts\" && ${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview6: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer17: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu6: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer18: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate13: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer19: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button15: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListActivatedDormantAccSA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview6.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListTransferAccSA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Daily List of Transfer of Accounts\" && ${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview5: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer20: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu7: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer21: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate12: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer22: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button14: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListTransAccSA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview5.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListDormantAccSA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Daily List of Dormant Accounts\" && ${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview4: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer23: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu8: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer24: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate11: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer25: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button13: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListDormantAccSA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview4.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListPostedTransSA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Daily List of Posted Transaction\" && ${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview3: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer26: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu9: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer27: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate10: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer28: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button12: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListPostedTransSA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview3.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListClosedAccSA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Daily List of Closed Accounts\" && ${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview2: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer29: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu10: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer30: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate9: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer31: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button11: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListClosedAccSA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview2.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListNewAccSA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Daily List of New Accounts\" && ${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview1: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer32: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu11: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer33: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate8: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer34: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button10: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListNewAccSA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview1.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
selectPrevAs: ["wm.SelectMenu", {"border":"0","caption":"Preview as:","dataField":"dataValue","dataValue":"PDF","displayField":"dataValue","displayValue":"PDF","height":"25px","options":"PDF","showing":false,"width":"240px"}, {}],
DailyTrialBalanceSA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Daily Trial Balance\" && ${selectReports.dataValue}==\"Savings Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer35: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu12: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer36: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate7: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer37: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button9: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyTrialBalSA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyTrialBalanceCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily Trial Balance\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview12: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer38: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu13: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer39: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate19: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer40: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button21: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyTrialBalCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview12.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListNewAccCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of New Accounts\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview13: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer41: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu14: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer42: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate20: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer43: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button22: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListNewAccCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview13.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListClosedAccCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Closed Accounts\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview14: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer44: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu15: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer45: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate21: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer46: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button23: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListClosedAccCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview14.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListPostedTransCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Posted Transaction\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview15: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer47: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu16: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer48: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate22: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer49: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button24: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListPostedTransCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview15.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListDormantAccCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Dormant Accounts\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview16: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer50: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu17: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer51: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate23: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer52: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button25: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListDormantAccCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview16.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListTransferAccCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Transfer of Accounts\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview17: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer53: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu18: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer54: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate24: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer55: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button26: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListTransferAccCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview17.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListActivatedDormantAccCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Activated Dormant Accounts\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview18: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer56: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu19: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer57: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate25: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer58: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button27: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListActivatedDormantAccCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview18.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListAutoTransferAccCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Automatic Transfer of Account\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview19: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer59: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu20: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer60: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate26: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer61: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button28: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyTrialBalSA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview19.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListCheckbookReqCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Check Book Request\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview20: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer62: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu21: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer63: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate27: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer64: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button29: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListCheckbookReqCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview20.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
StatChecksIssuedCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Status of Checks Issued\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview21: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer65: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu22: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer66: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate28: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer67: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button30: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svStatChecksIssuedCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview21.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
CASAFullBalCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"CASA Full Balance Listing\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview22: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer68: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu23: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer69: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate29: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer70: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button31: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svCASAFullBalCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview22.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyTransCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily Transaction Report\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview23: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer71: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu24: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer72: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate30: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer73: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button32: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyTransCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview23.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
SummaryDailyTransCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Summary of Daily Transaction Report\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview24: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer74: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu25: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer75: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate31: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer76: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button33: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svSummaryDailyTransCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview24.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
AverageDailyBalCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Average Daily Balance Report\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview25: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer77: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu26: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer78: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate32: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer79: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button34: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svAverageDailyBalCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview25.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListAccInsufFundCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Accounts with Insufficient Fund\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview26: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer82: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu27: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer81: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate33: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer80: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button35: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListAccInsufFundCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview26.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListWaivedChargesCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Waived Charges\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview27: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer83: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu28: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer84: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate34: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer85: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button36: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListWaivedChargesCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview27.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
DailyListReturnedItemsCA: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Returned Items\" && ${selectReports.dataValue}==\"Current Account Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview28: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer86: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu29: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer87: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate35: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer88: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button37: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListReturnedItemsCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview28.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
TDListMaturedAcc: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Matured Accounts\" && ${selectReports.dataValue}==\"Time Deposit Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview29: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer89: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu30: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer90: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate36: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer91: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button38: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svTDListMaturedAcc"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview29.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
TDListWithdrawnTimeDep: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of  Withdrawn Time Deposit\" && ${selectReports.dataValue}==\"Time Deposit Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview30: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer92: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu31: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer93: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate37: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer94: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button39: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svTDListWithdrawnTimeDep"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview30.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
TDListPreTermTimeDep: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Pre-Terminated Time Deposit\" && ${selectReports.dataValue}==\"Time Deposit Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview31: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer95: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu32: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer96: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate38: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer97: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button40: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svTDListPreTermTimeDep"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview31.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
TDListUnclaimedMaturedTimeDep: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of  Unclaimed Matured Time Deposit\" && ${selectReports.dataValue}==\"Time Deposit Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview32: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer98: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu33: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer99: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate39: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer100: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button41: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svTDListUnclaimedMaturedTimeDep"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview32.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
TDTrialBal: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily Trial Balance\" && ${selectReports.dataValue}==\"Time Deposit Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview33: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer101: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu34: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer102: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate40: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer103: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button42: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svDailyListReturnedItemsCA"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview33.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
TDListTimeDepBal: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Time Deposit Balances\" && ${selectReports.dataValue}==\"Time Deposit Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview34: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer104: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu35: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer105: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate41: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer106: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button43: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svTDListTimeDepBal"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview34.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
TDListLargeTimeDepTrans: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Large Time Deposit Transactions\" && ${selectReports.dataValue}==\"Time Deposit Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview35: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer107: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu36: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer108: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate42: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer109: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button44: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svTDListLargeTimeDepTrans"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview35.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
TDListIntPaidPerClientForMonth: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Interest Paid Per Client for the Month\" && ${selectReports.dataValue}==\"Time Deposit Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview36: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer110: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu37: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer111: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate43: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer112: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button45: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svTDListIntPaidPerClientForMonth"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview36.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
TDListIntPaidPerClientForDay: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Interest Paid Per Client to Date\" && ${selectReports.dataValue}==\"Time Deposit Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview37: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer113: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu38: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer114: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate44: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer115: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button46: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svTDListIntPaidPerClientForDay"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview37.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
TDListRenewedTimeDeposits: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of Renewed Time Deposit\" && ${selectReports.dataValue}==\"Time Deposit Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview38: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer116: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu39: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer117: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate45: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer118: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button47: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svTDListRenewedTimeDeposits"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview38.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
TDListNewTimeDep: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${varRptName.dataValue}==\"Daily List of New Time Deposits\" && ${selectReports.dataValue}==\"Time Deposit Reports\"","targetProperty":"showing"}, {}]
}],
selectPreview39: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Preview As: ","captionSize":"90px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"PDF,Excel","required":true,"width":"20%"}, {}],
spacer119: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
selectMenu40: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch Name: ","captionSize":"100px","dataField":"brid","dataType":"com.smslai_eoddb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","width":"35%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchCode","targetProperty":"dataSet"}, {}]
}]
}],
spacer120: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
fDate46: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","dataValue":undefined,"displayValue":"","height":"25px","width":"20%"}, {}],
spacer121: ["wm.Spacer", {"height":"10px","width":"15px"}, {}],
button48: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svTDListNewTimeDep"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${selectPreview39.invalid}","targetProperty":"disabled"}, {}]
}]
}]
}],
spacer4: ["wm.Spacer", {"height":"30px","width":"10px"}, {}],
reportFrame: ["wm.IFrame", {"border":"0.5,0.5,0.5,0.5","borderColor":"#756e6e","height":"90%","styles":{},"width":"100%"}, {}]
}]
}]
};

Report_Main.prototype._cssText = '';
Report_Main.prototype._htmlText = '';