dojo.declare("TLR_FX_CRMEMO", wm.Page, {
	start: function() {
        this.svCurrency.update();
		this.fwoPass.setDataValue(true);
        this.svTransInfo.update();
	},
	"preferredDevice": "desktop",
    fAmtFocus: function(inSender) {
		this.fAmt.setDisplayValue("");
	},
	svCreditMemoResult: function(inSender, inDeprecated) {
		if(inSender.getData().result=="0"){
            app.alert("Account No. doesn't exist!");   
    	}else if(inSender.getData().result=="1"){
            this.pnlTransDet.clearData();
			this.lblResult.setCaption("");
            app.alert("Transaction Successful!");   
		}else if(inSender.getData().result=="3"){
            app.confirm("Posting Restriction : " +inSender.getData().posttxdesc
			+"<br/>Override Transaction?", false, 
                  dojo.hitch(this, function() {
                     this.dlgOverride.show();
                    }),
                  dojo.hitch(this, function() {}));
    	}else if(inSender.getData().result=="4"){
            app.alert("Transaction Failed : Account is Closed!");   
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
			this.pnlTransDet.clearData();
    		this.lblResult.setCaption("");
            
		}else{
            app.alert("Override Failed!");
		}
	},
    svCheckAccountResult: function(inSender, inDeprecated) {
        console.log(inSender.getData());
        console.log(app.varUnit.getData().dataValue);
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
//                this.panel7.setShowing(true);
//                this.fwCheckbook.setDataValue(true);
//                }
//            if(inSender.getData().soaind==true){
//                this.panel8.setShowing(true);
//                this.fwStatementOfAcct.setDataValue(true);
//                }
//            if(inSender.getData().certtimedepind==true){
//                this.panel9.setShowing(true);
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
    },
	button1Click: function(inSender) {
		console.log(app.varUnit.getData().dataValue);
        console.log(this.svCheckAccount.getData().unit);
        console.log(this.svTransInfo.getData());
        if(this.svCheckAccount.getData().unit==app.varUnit.getData().dataValue){
            this.svCreditMemo.update();    
		}else{
            if(this.svTransInfo.getData().servicecharge > 0){
                this.dlgCharge.show();    
            }else{
                this.svCreditMemo.update();    
            }
		}
	},
	svCancelRejectResult: function(inSender, inDeprecated) {
		this.dlgOverride.hide();
        this.panel5.clearData();
    	if(inSender.getData().dataValue=='1'){
            app.alert("Transaction Rejected/Cancelled!");
            this.fAcctNo.clear();
            this.fAcctName.clear();
    		this.fAmt.clear();
            this.fCurr.clear();
            this.lblResult.setCaption("");
    	}
	},
	btnValidateSlipClick: function(inSender) {
	  this.svPrint.update();
	},
    btnClearClick: function(inSender) {
        this.pnlTransDet.clearData();
        this.lblResult.setCaption("");
        this.btnValidateSlip.setDisabled(true);
        this.fAcctledger.setShowing(false);
	    this.panel4.setShowing(false);
//        this.panel7.setShowing(false);
//        this.panel8.setShowing(false);
//        this.panel9.setShowing(false);
	},
  svFreezeInfoResult: function(inSender, inDeprecated) {
      this.fAcctName.setDataValue(this.svCheckAccount.getData().name);
      this.fCurr.setDataValue(this.svCheckAccount.getData().currency);
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