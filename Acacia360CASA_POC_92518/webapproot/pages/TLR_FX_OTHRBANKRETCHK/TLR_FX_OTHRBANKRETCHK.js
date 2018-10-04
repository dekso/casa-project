dojo.declare("TLR_FX_OTHRBANKRETCHK", wm.Page, {
	start: function() {
		this.fwoPass.setDataValue(true);
        this.svCurrency.update();
        this.svBank.update();
        this.svTransInfo.update();
	},
	"preferredDevice": "desktop",
    svOBRetChkResult: function(inSender, inDeprecated) {
		if(inSender.getData().result=="0"){
            app.alert("Account No. doesn't exist!");   
    	}else if(inSender.getData().result=="1"){
//            this.fAcctNo.clear();
//            this.fAmt.clear();
//            this.fCurr.clear();
//            this.fAcctName.clear();
//            this.lblResult.setCaption("");
            this.btnSubmit.setDisabled(true);
            app.alert("Transaction Successful!");   
		}else if(inSender.getData().result=="2"){
            app.alert("Insufficient Balance!");   
    	}else if(inSender.getData().result=="3"){
            app.confirm("Posting Restriction : " 
			+inSender.getData().posttxdesc+"<br/>Override Transaction?", false, 
                  dojo.hitch(this, function() {
                     this.dlgOverride.show();
                    }),
                  dojo.hitch(this, function() {
                     this.svCancelReject.update();   
                    }));
        }else if(inSender.getData().result=="4"){
            app.alert("Transaction Failed : Account is Closed!");   
        }else if(inSender.getData().result=="5"){
            app.confirm("Invalid Transaction : Reached Tellers Limit!<br/>Override Transaction?", false, 
                  dojo.hitch(this, function() {
                     this.dlgOverride.show();
                    }),
                  dojo.hitch(this, function() {
                     this.svCancelReject.update();  
                    }));
        }else if(inSender.getData().result=="6"){
            app.confirm("Invalid Transaction : Reached Tellers Limit! <br/> Posting Restriction : "
			+inSender.getData().posttxdesc+"<br/>Override Transaction?", false, 
                  dojo.hitch(this, function() {
                     this.dlgOverride.show();
                    }),
                  dojo.hitch(this, function() {
                     this.svCancelReject.update();  
                    }));
        }else if(inSender.getData().result=="999"){
            app.alert("Transaction Failed : Error in Routine!");   
    	} 
	},
    fAmtFocus: function(inSender) {
    	this.fAmt.setDisplayValue("");
	},
	svValidateUserResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="0"){
            app.alert("Invalid username or password!");    
		}else if(inSender.getData().dataValue=="1"){
            app.toastSuccess("Override Account Validated!", 5000); 
            this.dlgOverride.hide();
            this.svOverride.update();
		}
	},
	svOverrideResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="1"){
            app.alert("Override Successful!");
            this.fAcctNo.clear();
            this.fAmt.clear();
            this.fCurr.clear();
            this.fAcctName.clear();
            this.lblResult.setCaption("");
		}else{
            app.alert("Override Failed!");
		}
	},
	svCancelRejectResult: function(inSender, inDeprecated) {
        this.dlgOverride.hide();
        this.pnlOverride.clearData();
		if(inSender.getData().dataValue=="1"){
            app.alert("Transaction Rejected/Cancelled!");
            this.fAcctNo.clear();
            this.fAmt.clear();
            this.fCurr.clear();
            this.fAcctName.clear();
            this.lblResult.setCaption("");
		}else{
            app.alert("Error in Routine!");
    	}
	},
	svCheckAccountResult: function(inSender, inDeprecated) {
        console.log(inSender.getData());
    	if(inSender.getData().result=="0"){
            //app.alert("Account no does not exist!");   
            this.lblResult.setCaption("<b><font color='red'>Account No. doesn't exist!");
            this.fCurr.setDataValue("");
            this.fAcctName.setDataValue("");
		}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
            this.lblResult.setCaption("<b><font color='blue'>Account number found!");
            this.fCurr.setDataValue(inSender.getData().currency);
            this.fAcctName.setDataValue(inSender.getData().name);
//            if(inSender.getData().passbookind==true){
//                this.panel4.setShowing(true);
//                this.fwPassbook.setDataValue(true);
//                }
//            if(inSender.getData().checkbookind==true){
//                this.panel5.setShowing(true);
//                this.fwCheckbook.setDataValue(true);
//                }
//            if(inSender.getData().soaind==true){
//                this.panel7.setShowing(true);
//                this.fwStatementOfAcct.setDataValue(true);
//                }
//            if(inSender.getData().certtimedepind==true){
//                this.panel8.setShowing(true);
//                this.fwCertTimeDep.setDataValue(true);
//                }
    	}else if(inSender.getData().result=="503"){
            this.lblResult.setCaption("<b><font color='red'>Host not available!");
    
    	}
	},    
    btnSearchClick: function(inSender) {
		this.svCheckAccount.update();
	},
	btnSubmitClick: function(inSender) {
        console.log(app.varUnit.getData().dataValue);
        console.log(this.svCheckAccount.getData().unit);
        console.log(this.svTransInfo.getData());
        if(this.svCheckAccount.getData().unit==app.varUnit.getData().dataValue){
            this.svOBRetChk.update();    
		}else{
            if(this.svTransInfo.getData().servicecharge > 0){
                this.dlgCharge.show();    
            }else{
                this.svOBRetChk.update();    
            }
		}
	},
	btnValidateSlipClick: function(inSender) {
	  this.btnSubmitClick(inSender);
	},
    btnClearClick: function(inSender) {
	    this.panel3.clearData();
        this.lblResult.setCaption("");
        this.fwoPass.setDataValue(true);
//        this.panel4.setShowing(false);
//        this.panel5.setShowing(false);
//        this.panel7.setShowing(false);
//        this.panel8.setShowing(false);
	},
  _end: 0
});