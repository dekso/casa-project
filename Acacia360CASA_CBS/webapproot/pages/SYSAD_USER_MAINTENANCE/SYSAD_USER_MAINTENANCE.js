dojo.declare("SYSAD_USER_MAINTENANCE", wm.Page, {
	start: function() {
	    this.svUserList.update();
        this.svBranchList.update();
        this.svRole.update();
        this.svDepartment.update();
        this.svTerminalList.update();
	},
	"preferredDevice": "desktop",

	btnAddNonADUserClick: function(inSender) {
		this.dlgCreateNonADUser.show();
	},
	grdUserListClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.grdUserList.select(rowId);
        this.svUserDetail.input.setValue("id", this.grdUserList.selectedItem.getData().id);
        this.svUserDetail.update();
        this.dlgEditUser.show();
	},
	svSaveUserResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="1"){
            this.svUserList.update();
            app.alert("User Creation Successful!");
            this.pnlSetupNewUserLeft.resetData();
            this.dlgCreateNonADUser.hide();
		}else{
            app.alert("Error in Routine!");
		}
	},
	svEditUserResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="1"){
            this.svUserList.update();
            app.alert("User Update Successful!");
            this.dlgEditUser.hide();
    	}else{
            app.alert("Error in Routine!");
		}
	},
	btnSaveEditUserClick: function(inSender) {
		app.confirm("Proceed to save changes?", false, 
        dojo.hitch(this, function() {
            this.svEditUser.update();        
        }),
        dojo.hitch(this, function() {}));
	},
	svBranchListResult: function(inSender, inDeprecated) {
		if(app.varRole.getData().dataValue!="secad"){
		    this.slcBranch.setDataValue(app.varUnit.getData().dataValue);
            this.slcBranch.setShowing(false);
        }
	},
	svTerminalListResult: function(inSender, inDeprecated) {
	  this.svBranchListResult(inSender, inDeprecated);
	},
  svBranchList1Result: function(inSender, inDeprecated) {
	  this.svBranchListResult(inSender, inDeprecated);
	},
  _end: 0
});