dojo.declare("SYS_FEES_AND_CHARGES_MAINTENANCE", wm.Page, {
	start: function() {
		this.svFeesandChargesList.update();
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
    svAddFeesResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue == "created"){
            app.toastSuccess("added successfully.", 3000);
		    this.desFeesSetup.hide();
            this.formPanel1.clearData();
            this.svFeesandChargesList.update();
        }else if(inSender.getData().dataValue == "updated"){
            app.toastSuccess("record updated.", 3000);
    	    this.desFeesSetup.hide();
            this.formPanel1.clearData();
            this.svFeesandChargesList.update();
            this.FeesandChargesGrid.deselectAll();
        }else{
            app.toastError("Error", 3000);
        }
	},
	FeesandChargesGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.desFeesSetup.show();
	},

	
	_end: 0
});