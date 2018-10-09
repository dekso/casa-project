dojo.declare("TLR_FX_MCGCPRCH", wm.Page, {
    start: function() {
        this.svGetTxcode.update();
    },
    "preferredDevice": "desktop",

    svCheckAccountPayableToResult: function(inSender, inDeprecated) {
        if (inSender.getData().result == "0") {
            this.lblResultPayableTo.setCaption("<b><font color='red'>Account No. doesn't exist!");
//            this.txtAccountName.setDataValue("");
        } else if (inSender.getData().result == "1") {
            //            app.alert("Account found!");
            this.lblResultPayableTo.setCaption("<b><font color='blue'>Account number found!");
//            this.txtAccountName.setDataValue(inSender.getData().name);
        } else if (inSender.getData().result == "503") {
            this.lblResult.setCaption("<b><font color='red'>Host not available!");

        }
    },
    svCheckAccountPurchasorResult: function(inSender, inDeprecated) {
        this.txtAccountNo.setInvalid(true);
        if (inSender.getData().result == "0") {
            this.lblResultPurchasor.setCaption("<b><font color='red'>Account No. doesn't exist!");
            this.txtAccountName.setDataValue("");
        } else if (inSender.getData().result == "1") {
            this.lblResultPurchasor.setCaption("<b><font color='blue'>Account number found!");
            this.txtAccountName.setDataValue(inSender.getData().name);
            this.txtAccountNo.setInvalid(false);
        } else if (inSender.getData().result == "503") {
            this.lblResult.setCaption("<b><font color='red'>Host not available!");

        }		
	},
	svGetTxcodeResult: function(inSender, inDeprecated) {
		if(inSender.getData()!=null){
            this.txtServiceCharge.setDataValue(inSender.getData().servicecharge);
		}else{
            this.panel3.setValue("disabled",true);
		    app.alert("System unable to load. Please refresh the page.");
        }
	},
	svSaveResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue == "1"){
		    this.svDepositMc.update();
        }else if(inSender.getData().dataValue == "2"){
            app.toastWarning("Check Number already issued.");
        }else{
            console.log(inSender.getData().dataValue);
            app.toastError("Transaction Failed");
        }
	},
	slcPayModeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.pnlPurchasor.clearData();
        this.pnlCheckDetails.clearData();
        this.svCheckAccountPurchasor.clearData();
		if(inDataValue=="1"){
		    this.pnlAccountNo.setShowing(false);
            this.txtORNumber.setShowing(true);
            this.txtAccountName.setReadonly(false);
            this.txtAccountNo.setValue("required",false);
        }else if(inDataValue=="2"){
            this.pnlAccountNo.setShowing(true);
            this.txtORNumber.setShowing(false);
            this.txtAccountName.setReadonly(true);
            this.txtAccountNo.setValue("required",true);
        }
	},
	svDepositMcResult: function(inSender, inDeprecated) {
	    var res = inSender.getData().dataValue;
    	if(res == "1"){
		    app.toastError("Check Number does not exist!");
        }else if(res == "2"){
            app.toastError("Check amount on record is not the same with value entered! \n Please verify!");        
        }else if(res == "3"){
            app.toastError("Check date on record is not the same with value entered! \n Please verify!");
        }else if(res == "4"){
            app.toastError("Check is already stale! Please refer to transaction officer!");
        }else if(res == "5"){
            app.toastError("Check is already negotiated!");
        }else if(res == "6"){
            app.toastError("Check No. " + this.txtMCGCNumber.getDataValue() + " has been reported lost! \n Report matter to Officer!");
        }else if(res == "7"){
            app.toastError("Check No. " + this.txtMCGCNumber.getDataValue() + " is currently under SPO! \n Report matter to Officer!");
        }else if(res == "8"){
            app.toastError("Transaction Failed.");
        }else if(res == "0"){
            app.toastSuccess("Transaction Completed.");
        }
	},
  _end: 0
});