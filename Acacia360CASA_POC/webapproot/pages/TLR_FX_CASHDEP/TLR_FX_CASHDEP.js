dojo.declare("TLR_FX_CASHDEP", wm.Page, {
	start: function() {
        this.svTransInfo.update();
        this.svCurrency.update();
	    this.fwoPass.setDataValue(true);
        this.codeProd.update();
        
	},
	"preferredDevice": "desktop",

	svCashDepResult: function(inSender, inDeprecated) {
        console.log(inSender.getData().result);
        this.svUnitBalance.update();
        //app.alert(inSender.getData().dataValue);
		if(inSender.getData().result=="0"){
            app.alert("Account No. doesn't exist!");   
		}else if(inSender.getData().result=="1"){
//            this.fAcctNo.clear();
//            this.fAcctName.clear();
//			this.fAmt.clear();
//            this.fCurr.clear();
//            this.lblResult.setCaption("");
            app.alert("Transaction Successful!");
            this.button1.setDisabled(true);
            this.dlgOverride.hide();
            this.dlgCharge.hide();
		}else if(inSender.getData().result=="3"){
            this.varInterBranch.clearData();
            this.chargeamt.clearData();
            this.charge.clearData();
            this.chargeby.clearData();
            app.confirm("Posting Restriction : " +inSender.getData().posttxdesc
			+"<br/>Override Transaction?", false, 
                  dojo.hitch(this, function() {
                     this.dlgOverride.show();
                    }),
                  dojo.hitch(this, function() {
                     this.svCancelReject.update(); 
                    }));
        }else if(inSender.getData().result=="4"){
            app.alert("Transaction Failed : Account is Closed!");   
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
            app.alert("Override Successful!");
            this.fAcctNo.clear();
            this.fAcctName.clear();
    		this.fAmt.clear();
            this.fCurr.clear();
            this.lblResult.setCaption("");
		}else{
            app.alert("Override Failed!");
		}
	},
	svCancelRejectResult: function(inSender, inDeprecated) {
        this.dlgOverride.hide();
        this.pnlOverride.clearData();
		if(inSender.getData().dataValue=='1'){
            app.alert("Transaction Rejected/Cancelled!");
            this.fAcctNo.clear();
            this.fAcctName.clear();
    		this.fAmt.clear();
            this.fCurr.clear();
            this.lblResult.setCaption("");
		}
	},
	svCheckAccountResult: function(inSender, inDeprecated) {
        console.log(inSender.getData());
    	if(inSender.getData().result=="0"){
            //app.alert("Account no does not exist!");   
            this.lblResult.setCaption("<b><font color='red'>Account No. doesn't exist!");
//            this.fCurr.setDataValue("");
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
//                this.panel9.setShowing(true);
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
    },
    clearF: function() {
        this.fAcctNo.clear();
        this.fAcctName.clear();
		this.fAmt.clear();
        this.fCurr.clear();
        this.lblResult.setCaption("");
//        this.panel4.setShowing(false);
//        this.panel9.setShowing(false);
//        this.panel10.setShowing(false);
//        this.panel11.setShowing(false);
        this.btnValidateDocSlip.setDisabled(true);
        this.slcProdtype.clear();
        this.fSubProdType.clear();
        
    },
    btnValidateDocSlipClick: function(inSender) {
		this.svPrint.update();
	},
	button1Click: function(inSender) {
        console.log(app.varUnit.getData().dataValue);
        console.log(this.svCheckAccount.getData());
        console.log(this.svTransInfo.getData());
		if(this.svCheckAccount.getData().unit==app.varUnit.getData().dataValue){
            this.svCashDep.update();    
		}else{
            if(this.svTransInfo.getData().servicecharge > 0){
                this.dlgCharge.show();    
            }else{
                this.svCashDep.update();    
            }
		}
	},
	btnProceedWaiveClick: function(inSender) {
        this.varInterBranch.setValue("dataValue",1);
		this.dlgOverride.show();
        this.varOverride.setValue("dataValue",1);
	},
	btnReqORClick: function(inSender) {
		
	},

	btnOverrideClick: function(inSender) {
        if(this.varInterBranch.getData().dataValue==1){
            this.chargeamt.setValue("dataValue",this.svTransInfo.getData().servicecharge);
            this.charge.setValue("dataValue",1);
            this.chargeby.setValue("dataValue",this.overrideUsername.getDataValue());
            this.svCashDep.update();
        }else{
            this.svOverride.update();
        }
	},
	svTransInfoResult: function(inSender, inDeprecated) {
		if(inSender.getData().txcode == '110111'){
		}
	},
	
    btnClearClick: function(inSender) {
		this.fAcctNo.clear();
        this.fAcctName.clear();
    	this.fAmt.clear();
        this.fCurr.clear();
        this.slcProdtype.clear();
        this.fSubProdType.clear();
        this.lblResult.setCaption("");
        this.btnValidateDocSlip.setDisabled(true);
//        this.panel4.setShowing(false);
//        this.panel9.setShowing(false);
//        this.panel10.setShowing(false);
//        this.panel11.setShowing(false);
	},

  svFreezeInfoResult: function(inSender, inDeprecated) {
      this.fAcctName.setDataValue(this.svCheckAccount.getData().name);
      this.fCurr.setDataValue(this.svCheckAccount.currency);
        if(inSender.getData()!= null){
            this.lblResult.setCaption("<b><font color='red'>This account is under freeze order!");
//            this.fCurr.setDataValue("");
            this.fAmt.setDisabled(true);
        }else{
            this.lblResult.setCaption("<b><font color='blue'>Account number found!");
            this.fAmt.setDisabled(false);
            
        }
    },
	fAcctNoChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		this.svCheckAccount.clearData();
        this.svFreezeInfo.clearData();
	},
	_end: 0
});