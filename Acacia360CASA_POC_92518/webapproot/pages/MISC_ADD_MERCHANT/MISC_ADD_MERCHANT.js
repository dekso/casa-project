dojo.declare("MISC_ADD_MERCHANT", wm.Page, {
	start: function() {

	},
	"preferredDevice": "desktop",
	svAddMerchantResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="0"){
            app.toastError("Account not found/exist!", 5000);
		}else if(inSender.getData().dataValue=="1"){
            app.alert("Merchant Added Successfully");
            this.fAcctNo.clear();
            this.fMerchname.clear();
		}else{
            app.toastError("Error in Routine!", 5000);    
		}
	},
	_end: 0
});