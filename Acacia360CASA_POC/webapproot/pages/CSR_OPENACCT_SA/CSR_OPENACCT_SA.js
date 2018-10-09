dojo.declare("CSR_OPENACCT_SA", wm.Page, {
	start: function() {
		this.svCurrency.update();
        this.svOwnershipType.update();
        this.svProdList.update();
        this.pnlNewDepAcct.setValue("showing", false);
	},
	"preferredDevice": "desktop",
	btnContinueClick: function(inSender) {
        app.confirm("Proceed to open new account?", false, 
                  dojo.hitch(this, function() {
                     this.pnlCustDet.setValue("showing", false);
                     this.pnlNewDepAcct.setValue("showing", true);
                     this.label1.setCaption("SETUP NEW DEPOSIT ACCOUNT");
                    }),
                  dojo.hitch(this, function() {}));
        //app.alert("HERE");
	},
	svCheckMemberResult: function(inSender, inDeprecated) {
		if(inSender.getData().result==0){
            app.toastError("Member ID not found/exist!", 5000);       
    	}else{
            app.toastSuccess("Member ID found/exist!", 5000);   
		}
	},
	svCreateAcctResult: function(inSender, inDeprecated) {
		if(inSender.getData().result==0){
            app.alert("Error in creating account!");       
        }else{
            this.notifCreateSuccess.update();
		}
	},  
	notifCreateSuccessOk: function(inSender, inResult) {
		this.pnlNewDepAcct.clearData();
        this.pnlCustDet.clearData();
        wm.Page.getPage("Main").pageContainer1.setPageName("");
	},
	btnCancelClick: function(inSender) {
		this.pnlCustDet.clearData();
        this.pnlNewDepAcct.clearData();
        this.pnlCustDet.setValue("showing", true);
        this.pnlNewDepAcct.setValue("showing", false);
	},
	btnHomeClick: function(inSender) {
		this.pnlCustDet.clearData();
        this.pnlNewDepAcct.clearData();
        wm.Page.getPage("Main").pageContainer1.setPageName("");
	},
	_end: 0
});