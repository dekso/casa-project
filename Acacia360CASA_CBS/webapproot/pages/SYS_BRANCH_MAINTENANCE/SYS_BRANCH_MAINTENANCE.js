dojo.declare("SYS_BRANCH_MAINTENANCE", wm.Page, {
	start: function() {
		this.svBranchList.update();
        this.codeBrStat.update();
        this.codeRegion.update();
	},
	"preferredDevice": "desktop",

	btnAddClick: function(inSender) {
		
	},
	btnCancelClick: function(inSender) {
		this.desBranchSetup.hide();
        this.formPanel1.clearData();
        this.BranchGrid.deselectAll();
        this.txtBrid.setValue("readonly", false);
        this.button1.setShowing(true);
        this.formPanel1.setDisabled(true);
	},
	btnSaveClick: function(inSender) {
	  this.btnCancelClick(inSender);
	},
    btnUpdateClick: function(inSender) {
	  this.btnSaveClick(inSender);
	},
    svAddBranchResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue == "created"){
            app.toastSuccess("Branch added successfully", 3000);
		    this.desBranchSetup.hide();
            this.formPanel1.clearData();
            this.svBranchList.update();
        }else if(inSender.getData().dataValue == "updated"){
            app.toastSuccess("Branch updated successfully", 3000);
    	    this.desBranchSetup.hide();
            this.formPanel1.clearData();
            this.svBranchList.update();
        }else{
            app.toastError("Error", 3000);
        }
	},
	BranchGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        this.txtBrid.setValue("readonly", true);
        this.button1.setShowing(false);
        this.formPanel1.setDisabled(false);
		this.desBranchSetup.show();
        this.slcBrstat.setValue("required", true)
	},
	svCheckBridResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue == "1"){
            app.toastError("Branch ID not available", 3000);
            this.formPanel1.setDisabled(true);
		}else{
		    this.formPanel1.setDisabled(false);
            app.toastSuccess("Branch ID available", 3000);
        }
	},
	_end: 0
});