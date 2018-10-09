dojo.declare("Report_Page", wm.Page, {
	start: function() {
		this.ReportTree.forEachNode(function( n ) {n.setOpen(true); });
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
            
        case 'On Demand Reports':
            this.lblReport.setCaption("");
            break;
//        case 'Blacklisted Accounts':
//            this.lblReport.setCaption("");
//            break;
//        case 'AMLA Watchlist':
//            this.lblReport.setCaption("");        
//            break;
        
        case 'Cash In / Out Report':
            this.lblReport.setCaption("<u>"+rptName);
            break;  
        case 'Tellers Total Inquiry':
            this.lblReport.setCaption("<u>"+rptName);
            break;
        case 'Electronic Journal':
            this.lblReport.setCaption("<u>"+rptName);       
            break;
        case 'All Accepted Transaction':
            this.lblReport.setCaption("<u>"+rptName);        
            break;
        case 'All Error Correction Transaction':
            this.lblReport.setCaption("<u>"+rptName);         
            break;            
        case 'All Rejected Transaction':
             this.lblReport.setCaption("<u>"+rptName);        
            break;
        case 'All Supervisor Override Transaction':
             this.lblReport.setCaption("<u>"+rptName);
//             this.svGetListTeam.update();
            break;            
        case 'All Timeout and Accepted Transaction':
            this.lblReport.setCaption("<u>"+rptName);   
//            this.svCifstatus.update();
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
  _end: 0
});