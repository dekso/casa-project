dojo.declare("SYS_EOD", wm.Page, {
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
        if (inSender.getData().result == "0") {
            this.lblResultPurchasor.setCaption("<b><font color='red'>Account No. doesn't exist!");
            this.txtAccountName.setDataValue("");
        } else if (inSender.getData().result == "1") {
            this.lblResultPurchasor.setCaption("<b><font color='blue'>Account number found!");
            this.txtAccountName.setDataValue(inSender.getData().name);
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
	_end: 0
});