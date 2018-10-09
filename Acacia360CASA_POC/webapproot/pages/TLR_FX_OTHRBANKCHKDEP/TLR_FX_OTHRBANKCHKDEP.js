dojo.declare("TLR_FX_OTHRBANKCHKDEP", wm.Page, {
	start: function() {
		this.fwoPass.setDataValue(true);
        this.svCurrency.update();
        this.svBank.update();
        this.svClearType.update();
        this.svTransInfo.update();
	},
	"preferredDevice": "desktop",
    svOBCheckDepResult: function(inSender, inDeprecated) {
        console.log(inSender.getData());
    	if(inSender.getData().result=="0"){
            app.alert("Account No. doesn't exist!");   
		}else if(inSender.getData().result=="1"){
//            this.fAcctNo.clear();
//            this.fAmt.clear();
//            this.fAcctName.clear();
//            this.fCurr.clear();
//            this.checkTotal.clear();
//            this.varCheckList.clearData();
//            this.fClrtype.clear();
//            this.lblResult.setCaption("");
//            this.lblAmtChk.setCaption("");
            this.btnSubmit.setDisabled(true);
            app.alert("Transaction Successful!");   
		}else if(inSender.getData().result=="3"){   
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
    onFocusField: function(inSender) {
        //console.log(inSender.name);
        var clearobj = this[inSender.name];
        clearobj.clear();
        this.lblResult.setCaption("");
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
            this.fChkNo.clear();
            this.fChkTxdt.clear();
            this.fChkDraweeBnk.setDisplayValue("");
            this.fBrstnNo.clear();
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
            this.fAmt.clear();
            this.fChkNo.clear();
            this.fChkTxdt.clear();
            this.fChkDraweeBnk.setDisplayValue("");
            this.fBrstnNo.clear();
		}
	},
	btnAddCheckClick: function(inSender) {
        var checker = true;
//        console.log(this.varChecklist.getData());
//        console.log(this.varCheckDetail);
        for(var i = 0; i < this.varChecklist.getCount(); i++){
//            console.log("Data 1 "+this.varChecklist.getItem(i).getData().clearingtype);
//            console.log("Data 2 "+this.varCheckDetail.getData().clearingtype);
            if(this.varChecklist.getItem(i).getData().clearingtype!=this.varCheckDetail.getData().clearingtype){
                checker = false;    
            }
        }
        console.log(checker);
        if(checker){
		    this.varChecklist.addItem(this.varCheckDetail.getData(), this.varCheckList.getCount()+1);
            app.toastSuccess("Check Added!", 5000);
            this.checkTotal.setDataValue(this.checkTotal.getDataValue()+this.fChkAmt.getDataValue());
            this.pnlCheckDet.clearData();
            this.chkAmt();
        }else{
            app.alert("Invalid clearing type!");    
        }
	},
	btnViewCheckListClick: function(inSender) {
		this.dlgCheckList.show();
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
            if(inSender.getData().posttx == "12"){
                app.alert("This account is with Posting Restriction - 'No Check Deposits'!");
                this.btnSubmit.setDisabled(true);
                }    
    	}else if(inSender.getData().result=="503"){
            this.lblResult.setCaption("<b><font color='red'>Host not available!");
    
    	}
	},
	btnSearchClick: function(inSender) {
		this.svCheckAccount.update();
	},
	btnCloseClick: function(inSender) {
		this.dlgCheckList.hide();
	},
	dojoGrid1GridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
        this.checkTotal.setDataValue(this.checkTotal.getDataValue()-rowData.checkamt);
        this.dojoGrid1.deleteRow(rowIndex);
        this.chkAmt();
	},
    chkAmt: function(){
        if(this.fAmt.getDataValue() > 0){
            if(this.fAmt.getDataValue()!=this.checkTotal.getDataValue()){
                this.lblAmtChk.setCaption("<b><font color='red'>Amount and Checktotal is not balanced!");    
            }else{
                this.lblAmtChk.setCaption("");    
            }
        }
    },
	btnSubmitClick: function(inSender) {
        console.log(app.varUnit.getData().dataValue);
        console.log(this.svCheckAccount.getData().unit);
        console.log(this.svTransInfo.getData());
        if(this.svCheckAccount.getData().unit==app.varUnit.getData().dataValue){
            this.svOBCheckDep.update();    
		}else{
            if(this.svTransInfo.getData().servicecharge > 0){
                this.dlgCharge.show();    
            }else{
                this.svOBCheckDep.update();    
            }
		}
	},
	btnValidateSlipClick: function(inSender) {
	  this.svPrint.update();
	},
    btnClearClick: function(inSender) {
	    this.panel3.clearData();
        this.lblResult.setCaption("");
        this.fwoPass.setDataValue(true);
        this.btnValidateSlip.setDisabled(true);
        this.lblAmtChk.setCaption("");
        this.varChecklist.clearData();
//        this.panel4.setShowing(false);
//        this.panel5.setShowing(false);
//        this.panel7.setShowing(false);
//        this.panel8.setShowing(false);
	},

	fAmtChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		if(this.checkTotal1.getDataValue() > 0){
            if(inDataValue != this.checkTotal1.getDataValue()){
                this.lblAmtChk.setCaption("<b><font color='red'>Amount and Checktotal is not balanced!");
            }else{
                this.lblAmtChk.setCaption("");
            }
		}
	},
	_end: 0
});