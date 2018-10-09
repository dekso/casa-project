dojo.declare("TLR_MISC_BLPAYMNT", wm.Page, {
	start: function() {
	    this.svPaymmode.update();
        this.svCurrency.update();
        this.svBankList.update();
        this.svMerchantList.update();
        this.codePaymentType.update();
	},
	"preferredDevice": "desktop",

	svSavePaymentResult: function(inSender, inDeprecated) {
        if(inSender.getData().dataValue=='0'){
            app.alert("Account Number doesn't exist!");    
		}else if(inSender.getData().dataValue=='1'){
            app.alert("Transaction Successful!");
            this.pnlMainInfo.clearData();
//            wm.Page.getPage("Main").pageContainer1.setPageName("Home");
		}else if(inSender.getData().dataValue=='2'){
            app.alert("Transaction Rejected! : Insufficient Balance!")
		}else if(inSender.getData().dataValue=='3'){
            app.alert("Transaction Rejected! : Posting Restriction!")
		}else if(inSender.getData().dataValue=='4'){
            app.alert("Error in routine, Please contact your administrator");    
		}
	},
	fAmtFocus: function(inSender) {
		this.fAmt.setDisplayValue("");
	},
	fPaymentTypeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		if(inDataValue=="L"){
            this.fMerchant.setShowing(false);
            this.fMerchant.setValue("required", false);
            this.fSubscAcctNo.setCaption("Loan Account No:");
            this.fSubsName.setCaption("Account Name:");
		}else{
            this.fMerchant.setValue("required", true);
            this.fMerchant.setShowing(true);
            this.fSubscAcctNo.setCaption("Subscriber Account No:");
            this.fSubsName.setCaption("Subscriber Name:");
		}
	},
	_end: 0
});