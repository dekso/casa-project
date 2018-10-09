dojo.declare("CSR_OPNACCT_SA", wm.Page, {
	start: function() {
		this.svProdList.update();
        this.svOwnershipType.update();
        this.svCurrency.update();
	},
	"preferredDevice": "desktop",

    svCheckMemberResult: function(inSender, inDeprecated) {
        if(inSender.getData().result==0){
            app.toastError("Member ID not found/exist!", 5000);       
		}else{
            app.toastSuccess("Member ID found/exist!", 5000);   
		}
	},
	btnContinueClick: function(inSender) {
        spp.alert(inSender.getData().dataValue);
//		this.pnlCustDet.showing(false);
//        this.pnlNewDepAcct.showing(true);
//        this.label1.setCaption("Setup New Deposit Account");
	},
	button4Click: function(inSender) {
		 spp.alert();
	},
	_end: 0
});