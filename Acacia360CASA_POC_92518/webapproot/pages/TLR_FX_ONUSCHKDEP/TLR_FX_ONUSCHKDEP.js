dojo.declare("TLR_FX_ONUSCHKDEP", wm.Page, {
	start: function() {
        this.fwoPass.setDataValue(true);
	    this.svCurrency.update();
        this.svTransInfo.update();
	},
	"preferredDevice": "desktop",

	fAmtFocus: function(inSender) {
		this.fAmt.setDisplayValue("");
	},
	svCheckDepResult: function(inSender, inDeprecated) {
		if(inSender.getData().result=="0"){
            app.alert("Account No. doesn't exist!");   
    	}else if(inSender.getData().result=="1"){
//            this.fAcctNo.clear();
//            this.fAmt.clear();
//            this.fChkAcctNo.clear();
//            this.fChkNo.clear();
//            this.fChkTxdt.clear();
//            this.fCurr.clear();
//            this.fAcctName.clear();
//            this.fChkAcctName.clear();
//            this.lblResult.setCaption("");
//            this.lblChkResult.setCaption("");
            this.btnVerifiedSigcard.setDisabled(true);
            this.btnInvalidSigcard.setDisabled(true);
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
            this.panel3.setValue("disabled",false);
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
        }else if(inSender.getData().result=="7"){
            app.alert("Transaction Failed : Check On Hold!");   
            this.panel3.setValue("disabled",false);
        }else if(inSender.getData().result=="8"){
            app.alert("Transaction Failed : Check No. Not Yet Issued!");   
            this.panel3.setValue("disabled",false);
        }else if(inSender.getData().result=="9"){
            app.alert("Transaction Failed : Check No. Already Used!");   
            this.panel3.setValue("disabled",false);
        }else if(inSender.getData().result=="999"){
            app.alert("Transaction Failed : Error in Routine!");   
            this.panel3.setValue("disabled",false);
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
            this.fAcctNo.clear();
            this.fAmt.clear();
            this.fChkAcctNo.clear();
            this.fChkNo.clear();
            this.fChkTxdt.clear();
            this.fCurr.clear();
            this.fAcctName.clear();
            this.fChkAcctName.clear();
            this.fOverrideBy.clear();
            this.fOverrideResult.clear();
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
            this.fChkAcctNo.clear();
            this.fChkNo.clear();
            this.fChkTxdt.clear();
            this.fCurr.clear();
            this.fAcctName.clear();
            this.fChkAcctName.clear();
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
            this.lblResult.setCaption("<b><font color='red'>Account doesn't exist!");
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
//                this.panel10.setShowing(true);
//                this.fwStatementOfAcct.setDataValue(true);
//                }
//            if(inSender.getData().certtimedepind==true){
//                this.panel11.setShowing(true);
//                this.fwCertTimeDep.setDataValue(true);
//                }
            if(inSender.getData().posttx == "12"){
                app.alert("This account is with Posting Restriction - 'No Check Deposits'!");
                this.btnSubmit.setDisabled(true);
                this.btnSigcard.setDisabled(true);
                }        
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
    },
	btnChkSearchClick: function(inSender) {  
	    this.svCheckChkAccount.update();
	},
    svCheckChkAccountResult: function(inSender, inDeprecated) {
	    if(inSender.getData().result=="0"){
            //app.alert("Account no does not exist!");   
            this.lblChkResult.setCaption("<b><font color='red'>Check Account does not exist!");
            this.fChkCurr.setDataValue("");
            this.fChkAcctName.setDataValue("");
    	}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
            this.lblChkResult.setCaption("<b><font color='blue'>Check Account found!");
            this.fChkCurr.setDataValue(inSender.getData().currency);
            this.fChkAcctName.setDataValue(inSender.getData().name);
    	}
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
    btnSubmitClick: function(inSender) {
		console.log(app.varUnit.getData().dataValue);
        console.log(this.svCheckAccount.getData().unit);
        console.log(this.svTransInfo.getData());
        if(this.svCheckAccount.getData().unit==app.varUnit.getData().dataValue){
            this.svCheckDep.update();    
		}else{
            if(this.svTransInfo.getData().servicecharge > 0){
                this.dlgCharge.show();    
            }else{
                this.svCheckDep.update();    
            }
		}
	},
	btnVerifiedSigcardClick: function(inSender) {
	  this.dlgSigcard.hide();
      this.panel3.setValue("disabled",true);
      this.btnSubmit.setDisabled(false);
	},
    btnInvalidSigcardClick: function(inSender) {
	  this.dlgSigcard.hide();
      this.btnSubmit.setDisabled(true);
      this.panel3.clearData();
      this.lblResult.setCaption("");
      this.lblChkResult.setCaption("");
      this.btnValidateSlip.setDisabled(true);
      this.svViewSigcard.input.setValue("acctno", "");
      this.fwoPass.setDataValue(true);
	},
    btnValidateSlipClick: function(inSender) {
	  this.btnSigcardClick(inSender);
	},
    btnClearClick: function(inSender) {
	    this.panel3.clearData();
        this.lblResult.setCaption("");
        this.lblChkResult.setCaption("");
        this.fwoPass.setDataValue(true);
        this.btnSubmit.setDisabled(true);
        this.btnValidateSlip.setDisabled(true);
        this.svViewSigcard.input.setValue("acctno", "");
        this.btnVerifiedSigcard.setDisabled(false);
        this.btnInvalidSigcard.setDisabled(false);
        this.panel3.setValue("disabled",false);
//        this.panel4.setShowing(false);
//        this.panel5.setShowing(false);
//        this.panel10.setShowing(false);
//        this.panel11.setShowing(false);
	},
  _end: 0
});