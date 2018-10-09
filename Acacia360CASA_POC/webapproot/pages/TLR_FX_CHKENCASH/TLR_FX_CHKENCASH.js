dojo.declare("TLR_FX_CHKENCASH", wm.Page, {
	start: function() {
		this.fwoPass.setDataValue(true);
        this.svCurrency.update();
        this.svTransInfo.update();
	},
	"preferredDevice": "desktop",

	svCheckEncashResult: function(inSender, inDeprecated) {
        console.log(inSender.getData().result);
		if(inSender.getData().result=="0"){
            app.alert("Account No. doesn't exist!");   
		}else if(inSender.getData().result=="1"){
//            this.fAcctNo.clear();
//            this.fAmt.clear();
//            this.fChkNo.clear();
//            this.fChkTxdt.clear();
//            this.fCurr.clear();
//            this.fAcctName.clear();
//            this.lblResult.setCaption("");
            this.button3.setDisabled(false);
            this.btnSubmit.setDisabled(true);
            app.alert("Transaction Successful!");   
            this.svUnitBalance.update();        
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
        }else if(inSender.getData().result=="7"){
            app.alert("Transaction Failed : Check On Hold!");
        }else if(inSender.getData().result=="8"){
            app.alert("Transaction Failed : Check No. Not Yet Issued!");   
        }else if(inSender.getData().result=="9"){
            app.alert("Transaction Failed : Check No. Already Used!");   
        }else if(inSender.getData().result=="999"){
            app.alert("Transaction Failed : Error in Routine!");   
    	}
	},
    svUnitBalanceResult: function(inSender, inDeprecated) {
        console.log("Unit bal" +inSender.getData());
    	app.varNetCash.setValue("dataValue",inSender.getData().dataValue);
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
            this.svUnitBalance.update();
            app.alert("Override Successful!");
            this.fAcctNo.clear();
            this.fAmt.clear();
            this.fChkNo.clear();
            this.fChkTxdt.clear();
            this.fCurr.clear();
            this.fAcctName.clear();
            this.lblResult.setCaption("");
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
            this.fChkNo.clear();
            this.fChkTxdt.clear();
            this.fCurr.clear();
            this.fAcctName.clear();
            this.lblResult.setCaption("");
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
            this.lblResult.setCaption("<b><font color='red'>Account No. doesn't exist!");
            this.fCurr.setDataValue("");
            this.fAcctName.setDataValue("");
		}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
            this.svFreezeInfo.update();
//            if(inSender.getData().passbookind==true){
//                this.panel4.setShowing(true);
//                this.fwPassbook.setDataValue(true);
//                }
//            if(inSender.getData().checkbookind==true){
//                this.panel10.setShowing(true);
//                this.fwCheckbook.setDataValue(true);
//                }
//            if(inSender.getData().soaind==true){
//                this.panel11.setShowing(true);
//                this.fwStatementOfAcct.setDataValue(true);
//                }
//            if(inSender.getData().certtimedepind==true){
//                this.panel12.setShowing(true);
//                this.fwCertTimeDep.setDataValue(true);
//                }
            if(inSender.getData().posttx == "12"){
                app.alert("Account has posting restriction - 'No Check Encashment!'");
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
            this.svCheckEncash.update();    
		}else{
            if(this.svTransInfo.getData().servicecharge > 0){
                this.dlgCharge.show();    
            }else{
                this.svCheckEncash.update();    
            }
		}
	},
	btnVerifiedSigcardClick: function(inSender) {
	  this.dlgSigcard.hide();
      this.btnSubmit.setDisabled(false);
	},
    btnInvalidSigcardClick: function(inSender) {
	  this.dlgSigcard.hide();
      this.btnSubmit.setDisabled(true);
      this.panel3.clearData();
      this.lblResult.setCaption("");
      this.fwoPass.setDataValue(true);
      this.svViewSigcard.input.setValue("acctno","");
	},
    btnClearClick: function(inSender) {
	    this.panel3.clearData();
        this.btnSubmit.setDisabled(true);
        this.lblResult.setCaption("");
        this.fwoPass.setDataValue(true);
        this.svViewSigcard.input.setValue("acctno","");
//        this.panel4.setShowing(false);
//        this.panel10.setShowing(false);
//        this.panel11.setShowing(false);
//        this.panel12.setShowing(false);
	},
    svFreezeInfoResult: function(inSender, inDeprecated) {
      this.fAcctName.setDataValue(this.svCheckAccount.getData().name);
        if(inSender.getData()!= null){
            this.lblResult.setCaption("<b><font color='red'>This account is under freeze order!");
//            this.fCurr.setDataValue("");
            this.fAmt.setDisabled(true);
            this.fChkNo.setDisabled(true);
            this.fChkTxdt.setDisabled(true);
        }else{
            this.lblResult.setCaption("<b><font color='blue'>Account number found!");
//            this.fCurr.setDataValue(inSender.getData().currency);
            this.fAmt.setDisabled(false);
            this.fChkNo.setDisabled(false);
            this.fChkTxdt.setDisabled(false);
        }
    },
    fAcctNoChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.svCheckAccount.clearData();
        this.svFreezeInfo.clearData();
    },
	_end: 0
});