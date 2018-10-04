dojo.declare("TLR_FX_CASHWDRW", wm.Page, {
	start: function() {
        this.svTransInfo.update();
        this.svCurrency.update();
	    this.fwoPass.setDataValue(true);
        this.codeProd.update();
	},
	"preferredDevice": "desktop",

	svCashWithdrawResult: function(inSender, inDeprecated) {
		this.svUnitBalance.update();
        console.log("Withdraw "+inSender.getData());
    	if(inSender.getData().result=="0"){
            app.alert("Account No. doesn't exist!");   
		}else if(inSender.getData().result=="1"){
            this.svAcctInq.update();
//            this.fAcctNo.clear();
//            this.fAmt.clear();
//			this.fCurr.clear();
//			this.fAcctName.clear();
//			this.lblResult.setCaption("");
            app.alert("Transaction Successful!");
            this.btnSubmit.setDisabled(true);
            this.btnSigcard.setDisabled(true);
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
	svUnitBalanceResult: function(inSender, inDeprecated) {
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
//                }else{
//                this.panel4.setShowing(false);
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
        this.svViewSigcard.input.setValue("acctno", this.fAcctNo.getDataValue());
//        this.svViewSigcard.update();
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
            if(this.svCheckAccount.getData().availbal < this.fAmt.getDataValue()){
            app.alert("Insufficient Balance");
            }else{
            this.svViewSigcard.update();
            }
	},
	svViewSigcardResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="0"){
            app.alert("Sigcard not found!");    
		}else{
            this.sigImg.setSource(inSender.getData().dataValue);
            this.dlgSigcard.show();
		}
	},
    
    clearF: function(){
        this.fAcctNo.clear();
        this.fAmt.clear();
		this.fCurr.clear();
		this.fAcctName.clear();
		this.lblResult.setCaption("");
//        this.panel4.setShowing(false);
//        this.panel10.setShowing(false);
//        this.panel11.setShowing(false);
//        this.panel12.setShowing(false);
        this.fSubProdType.clear();
        this.slcProdtype.clear();
    },
	btnValidateDocSlipClick: function(inSender) {
		this.svPrint.update();
	},
	btnOverrideClick: function(inSender) {
		this.svValidateUser.update();
	},
	btnSubmitClick: function(inSender) {
		console.log(app.varUnit.getData().dataValue);
        console.log(this.svCheckAccount.getData().unit);
        console.log(this.svTransInfo.getData());
    	if(this.svCheckAccount.getData().unit==app.varUnit.getData().dataValue){
            this.svCashWithdraw.update();
            
		}else{
            if(this.svTransInfo.getData().servicecharge > 0){
                this.dlgCharge.show();    
            }else{
                this.svCashDep.update();    
            }
		}
	},
	btnProceedWaiveClick: function(inSender) {
        console.log(this.app.varUserId.getData().dataValue);
        console.log(this.svTransInfo.getData().servicecharge);
		this.svCashWithdraw.input.setValue("chargeoverrideby", this.app.varUserId.getData().dataValue);
        this.svCashWithdraw.input.setValue("chargeamount", this.svTransInfo.getData().servicecharge);
        //this.dlgCharge.hide();
        app.confirm("Are you sure you want to waive charges?", false, 
                  dojo.hitch(this, function() {
                     this.dlgCharge.hide();
                     console.log(this.svCashWithdraw.input.getData().chargeoverrideby);
                     this.svCashWithdraw.update();
                    }),
                  dojo.hitch(this, function() {
//                     this.dlgCharge.hide();  
                    }));
	},
	btnProceedCollectClick: function(inSender) {
//		this.app.
        
	},
	btnVerifiedSigcardClick: function(inSender) {
	  this.dlgSigcard.hide();
      this.btnSubmit.setDisabled(false);
	},
    btnInvalidSigcardClick: function(inSender) {
      this.btnClear.click();
      this.dlgSigcard.hide();
	  this.btnSubmit.setDisabled(true);
	},
    btnClearClick: function(inSender) {
	        this.fAcctNo.clear();
            this.fAmt.clear();
    		this.fCurr.clear();
			this.fAcctName.clear();
			this.lblResult.setCaption("");
//            this.panel4.setShowing(false);
//            this.panel10.setShowing(false);
//            this.panel11.setShowing(false);
//            this.panel12.setShowing(false);
            this.btnValidateDocSlip.setDisabled(true);
            this.btnSubmit.setDisabled(true);
            this.fSubProdType.clear();
            this.slcProdtype.clear();
            this.svViewSigcard.input.setValue("acctno", this.fAcctNo.getDataValue());
	},
    svAcctInqResult: function(inSender, inDeprecated) {
        console.log(inSender.getData());
        var d= 0.00;
        d = (inSender.getData().inquiry.accountbal-(inSender.getData().inquiry.holdamount+inSender.getData().inquiry.floatamount+inSender.getData().inquiry.earmarkbal+inSender.getData().inquiry.garnishedbal));
//       
        if(d < inSender.getData().inquiry.maintainingBalance ){
            app.toastWarning("Account falls below the required maintaining balance.", 4000);
        }
        
	},
	fwPassbookChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		console.log(inSender);
	},
	fwCheckbookChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
	  this.fwPassbookChange(inSender, inDisplayValue, inDataValue, inSetByCode);
	},
  fwStateOfAcctChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
	  this.fwCheckbookChange(inSender, inDisplayValue, inDataValue, inSetByCode);
	},
  fwStatementOfAcctChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
	  this.fwCheckbookChange(inSender, inDisplayValue, inDataValue, inSetByCode);
	},
  fwCertTimeDepChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
	  this.fwCheckbookChange(inSender, inDisplayValue, inDataValue, inSetByCode);
	},
  svFreezeInfoResult: function(inSender, inDeprecated) {
      this.fAcctName.setDataValue(this.svCheckAccount.getData().name);
        if(inSender.getData()!= null){
            this.lblResult.setCaption("<b><font color='red'>This account is under freeze order!");
//            this.fCurr.setDataValue("");
            this.fAmt.setDisabled(true);
        }else{
            this.lblResult.setCaption("<b><font color='blue'>Account number found!");
//            this.fCurr.setDataValue(inSender.getData().currency);
            this.fAmt.setDisabled(false);
            
        }
	},
	fAcctNoChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
	    this.svCheckAccount.clearData();
        this.svFreezeInfo.clearData();
	},
	_end: 0
});