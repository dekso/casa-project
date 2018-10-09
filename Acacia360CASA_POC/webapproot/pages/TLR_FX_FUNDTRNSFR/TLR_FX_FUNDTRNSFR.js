dojo.declare("TLR_FX_FUNDTRNSFR", wm.Page, {
	start: function() {
        this.svCurrency.update();
		this.fwoPass.setDataValue(true);
        this.svTransInfo.update();
	},
	"preferredDevice": "desktop",
    fAmtFocus: function(inSender) {
    	this.fAmt.setDisplayValue("");
	},
	svFundTransferResult: function(inSender, inDeprecated) {
		if(inSender.getData().result=="0"){
            app.alert("Account No. doesn't exist!");   
        }else if(inSender.getData().result=="1"){
			this.lblResult.setCaption("");
            this.fAcctNoFrm.clear();
            this.fCurr.clear();
            this.fAcctNo.clear();
            this.fAmt.clear();
            app.alert("Transaction Successful!");   
		}else if(inSender.getData().result=="2"){
            app.alert("Insufficient Balance!");   
    	}else if(inSender.getData().result=="3"){
            app.confirm("Posting Restriction : " +inSender.getData().posttxdesc+"<br/>Override Transaction?", false, 
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
            this.lblResult.setCaption("");
            this.fAcctNoFrm.clear();
            this.fCurr.clear();
            this.fAcctNo.clear();
            this.fAmt.clear();
            this.fOverrideBy.clear();
            this.fOverrideResult.clear();
		}else{
            app.alert("Override Failed!");
		}
	},
	svCancelRejectResult: function(inSender, inDeprecated) {
		this.dlgOverride.hide();
        this.pnlOverride.clearData();
        if(inSender.getData().dataValue=='1'){
            app.alert("Transaction Cancelled/Rejected!");
            this.lblResult.setCaption("");
            this.fAcctNoFrm.clear();
            this.fCurr.clear();
            this.fAcctNo.clear();
            this.fAmt.clear();
            this.fOverrideBy.clear();
            this.fOverrideResult.clear();
        }else{
            app.alert("Error in Routine!");   
        }
	},
    svCheckAccountResult: function(inSender, inDeprecated) {
        console.log(inSender.getData());
		if(inSender.getData().result=="0"){
            //app.alert("Account no does not exist!");   
            this.lblResult.setCaption("<b><font color='red'>Both Account No. doesn't exist!");
            this.fCurr.setDataValue(""); 
		}else if(inSender.getData().result=="0.1"){
            //app.alert("Account no does not exist!");   
            this.lblResult.setCaption("<b><font color='red'>Source Account No. doesn't exist!");
            this.fCurr.setDataValue(""); 
    	}else if(inSender.getData().result=="0.2"){
            //app.alert("Account no does not exist!");   
            this.lblResult.setCaption("<b><font color='red'>Destination Account No. doesn't exist!");
            this.fCurr.setDataValue(""); 
    	}if(inSender.getData().result=="0.3"){
            //app.alert("Account no does not exist!");   
            this.lblResult.setCaption("<b><font color='red'>Account currency does not match!");
            this.fCurr.setDataValue(""); 
    	}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
            this.lblResult.setCaption("<b><font color='blue'>Account number found!");
            this.fCurr.setDataValue(inSender.getData().currency);
//                    console.log(inSender.getData());
//            if(inSender.getData().passbookind==true){
//                this.panel4.setShowing(true);
//                this.fwPassbook.setDataValue(true);
//                }
//            if(inSender.getData().checkbookind==true){
//                this.panel5.setShowing(true);
//                this.fwCheckbook.setDataValue(true);
//                }
//            if(inSender.getData().soaind==true){
//                this.panel10.setShowing(true);
//                this.fwStatementOfAcct.setDataValue(true);
//                }
//            if(inSender.getData().certtimedepind==true){
//                this.panel11.setShowing(true);
//                this.fwCertTimeDep.setDataValue(true);
//                }     
    	}else if(inSender.getData().result=="503"){
            this.lblResult.setCaption("<b><font color='red'>Host not available!");
    
    	}
	},
	btnSearchClick: function(inSender) {
		this.svCheckAccount.update();
	},
    onFocusField: function(inSender) {
        //console.log(inSender.name);
        var clearobj = this[inSender.name];
        clearobj.clear();
        this.svViewSigcard.input.setValue("acctno","");
    },
    btnReqORClick: function(inSender) {
        this.svRequestOverride.update();
        this.dlgOverrideDet.show();
        this.waitTimer.startTimer();
        this.dlgOverride.hide();
	},
    waitTimerTimerFire: function(inSender) {
	    this.svRequestOverrideWait.update();	
	},
	svRequestOverrideWaitResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue==1){
            this.waitTimer.stopTimer();
            this.svRequestOverrideResult.update();
		}
	},
	svRequestOverrideResultResult: function(inSender, inDeprecated) {
		this.fOverrideBy.setDataValue(inSender.getData().overrideby);
        this.fOverrideResult.setDataValue(inSender.getData().resultstr);
	},
	btnContinueClick: function(inSender) {
        this.dlgOverrideDet.hide();
		if(this.svRequestOverrideResult.getData().result==4){
            this.svOverride.input.setValue("username", this.svRequestOverrideResult.getData().overrideby);    
            this.svOverride.update();
		}else if(this.svRequestOverrideResult.getData().result==5){
            this.svCancelReject.update();
    	}
	},
    btnCloseSigcardClick: function(inSender) {
	    this.dlgSigcard.hide();    	
	},
	btnViewSigClick: function(inSender) {
		this.svViewSigcard.update();
	},
	btnSigcardClick: function(inSender) {
        this.svViewSigcard.input.setValue("acctno",this.fAcctNoFrm.getDataValue());
        this.svViewSigcard.update();
	},
	svViewSigcardResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="0"){
            app.alert("Sigcard not found!");    
		}else{
            this.sigImg.setSource(inSender.getData().dataValue);
            this.dlgSigcard.show();
		}
	},
	button1Click: function(inSender) {
		console.log(app.varUnit.getData().dataValue);
        console.log(this.svCheckAccount.getData().unit);
        console.log(this.svTransInfo.getData());
        if(this.svCheckAccount.getData().unit==app.varUnit.getData().dataValue){
            this.svFundTransfer.update();    
		}else{
            if(this.svTransInfo.getData().servicecharge > 0){
                this.dlgCharge.show();    
            }else{
                this.svFundTransfer.update();    
            }
		}
	},
	btnVerifiedSigcardClick: function(inSender) {
	  this.dlgSigcard.hide();
      this.button1.setDisabled(false);
	},
    btnInvalidSigcardClick: function(inSender) {
      this.dlgSigcard.hide();
	  this.button1.setDisabled(true);
      this.svViewSigcard.input.setValue("acctno","");
      this.panel3.clearData();
      this.lblResult.setCaption("");
	},
    btnValidateSlipClick: function(inSender) {
	  this.btnSigcardClick(inSender);
	},
    btnClearClick: function(inSender) {
	    this.panel3.clearData();
        this.lblResult.setCaption("");
        this.svViewSigcard.input.setValue("acctno","");
        this.fwoPass.setDataValue(true);
//        this.panel4.setShowing(false);
//        this.panel5.setShowing(false);
//        this.panel10.setShowing(false);
//        this.panel11.setShowing(false);
	},
  _end: 0
});