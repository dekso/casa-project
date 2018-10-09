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