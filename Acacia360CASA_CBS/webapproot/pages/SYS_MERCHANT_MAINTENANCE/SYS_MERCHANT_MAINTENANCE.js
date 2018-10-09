dojo.declare("SYS_MERCHANT_MAINTENANCE", wm.Page, {
	start: function() {
		this.svMerchantList.update();
        this.codeBrStat.update();
	},
	"preferredDevice": "desktop",

	btnAddClick: function(inSender) {
		
	},
	btnCancelClick: function(inSender) {
		this.desMerchantSetup.hide();
        this.formPanel1.clearData();
        this.MerchantGrid.deselectAll();
	},
	btnSaveClick: function(inSender) {
	  this.btnCancelClick(inSender);
	},
    btnUpdateClick: function(inSender) {
	  this.btnSaveClick(inSender);
	},
    svAddBranchResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue == "created"){
            app.toastSuccess("New Merchant added.", 3000);
		    this.desMerchantSetup.hide();
            this.formPanel1.clearData();
            this.svMerchantList.update();
        }else if(inSender.getData().dataValue == "updated"){
            app.toastSuccess("Merchant record updated", 3000);
    	    this.desMerchantSetup.hide();
            this.formPanel1.clearData();
            this.svMerchantList.update();
            this.MerchantGrid.deselectAll();
        }else{
            app.toastError("Error", 3000);
        }
	},
	MerchantGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.desMerchantSetup.show();
	},

	_end: 0
});