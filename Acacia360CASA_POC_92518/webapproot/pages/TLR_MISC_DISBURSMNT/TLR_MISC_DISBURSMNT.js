dojo.declare("TLR_MISC_DISBURSMNT", wm.Page, {
	start: function() {
		this.svCurrency.update();
        this.svReason.update();
        this.svPaymentMode.update();
	},
	"preferredDevice": "desktop",
	fAmtFocus: function(inSender) {
		this.fAmt.setDisplayValue("");
	},
	svSaveResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="1"){
            this.fPayeeName.clear();
            this.fAmt.clear();
            this.fReasonPaymRel.clear();
            this.fCheckno.clear();
            this.fCheckdate.clear();
            this.fRemarks.clear();
            app.alert("Transaction Successful!"); 
		}else{
            app.alert("Transaction Failed: Error in Routine");
		}
	},
	_end: 0
});