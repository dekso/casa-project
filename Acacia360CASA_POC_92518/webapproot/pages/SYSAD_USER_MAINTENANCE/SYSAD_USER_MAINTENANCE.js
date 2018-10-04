dojo.declare("SYSAD_USER_MAINTENANCE", wm.Page, {
	start: function() {
	    this.svUserList.update();
        this.svCurrency.update();
        this.svRole.update();
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
            this.pnlSetupNewUserLeft.clearData();
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
	_end: 0
});