dojo.declare("SYSAD_ROLES_MAINTENANCE", wm.Page, {
	start: function() {
	    this.svRoleList.update();
        this.svSelectList.update();
        this.svPageList.update();
	},
	"preferredDevice": "desktop",

	btnAddRightsClick: function(inSender) {
		this.dlgAddAccessRight.show();
	},
	btnCancelRightClick: function(inSender) {
		this.fMainMod.clear();
        this.fSubMod.clear();
        this.fPage.clear();
        this.dlgAddAccessRight.hide();
	},
	svAddRoleAccessResult: function(inSender, inDeprecated) {
	    if(inSender.getData().dataValue=="1"){
            this.svRoleAccessList.update();
            this.fMainMod.clear();
            this.fSubMod.clear();
            this.fPage.clear();
            app.alert("Adding Access Rights Success!");
            this.dlgAddAccessRight.hide();    
	    }else{
            app.alert("Error in Routine!");   
	    }
	},
	btnDelRightsClick: function(inSender) {
	    app.confirm("Proceed to delete access right?", false, 
        dojo.hitch(this, function() {
            this.svDelRights.update();
        }),
        dojo.hitch(this, function() {}));
	},
    svDelRightsResult: function(inSender, inDeprecated) {
	    if(inSender.getData().dataValue=="1"){
            app.alert("Deleting Access Right Successful!");
            this.svRoleAccessList.update();
	    }else{
            app.alert("Error in Routine!");
	    }
	},
	accessRightsGridCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.accessRightsGrid.deselectAll();
	},
	btnDelRoleClick: function(inSender) {
	    app.confirm("Proceed to delete role?", false, 
        dojo.hitch(this, function() {
            this.svDelRole.update();        
        }),
        dojo.hitch(this, function() {}));  
	},
    btnCancelRoleClick: function(inSender) {
        this.fRolename.clear();
	    this.dlgAddRole.hide();    
	},
    btnAddRoleClick: function(inSender) {
	    this.dlgAddRole.show();	
	},
	svAddRoleResult: function(inSender, inDeprecated) {
	    if(inSender.getData().dataValue=="1"){
            app.alert("Add Role Successful!");
            this.dlgAddRole.hide();
            this.svRoleList.update();
        }else{
            app.alert("Error in Routine!");
	    }	
	},
	svDelRoleResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="1"){
            app.alert("Deleting Role Successful!");
            this.svRoleList.update();
        }else{
            app.alert("Error in Routine!");
	    }
	},
	roleGridCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.roleGrid.deselectAll();
        this.svRoleAccessList.clearData();
	},
	btnModSetupClick: function(inSender) {
		this.dlgModule.show();
	},
	btnAddModCancelClick: function(inSender) {
		this.pnlMainAddMod.clearData();
        this.dlgAddMod.hide();
	},
	btnAddNewModuleClick: function(inSender) {
		this.dlgAddMod.show();
	},
	btnCloseModClick: function(inSender) {
		this.dlgModule.hide();
	},
	svAddModuleResult: function(inSender, inDeprecated) {
        if(inSender.getData().dataValue=="1"){
            app.alert("Adding of Module Successful!");
            if(this.fMod.getDisplayValue()=="MODULE"){
                this.svMainMod.update();
            }else{
                this.svSubMod.update();
            }
            this.svSelectList.update();
            this.pnlMainAddMod.clearData();
            this.dlgAddMod.hide();
        }else{
            app.alert("Error in Routine!");
        }
	},
	dlgModuleShow: function(inSender) {
		this.svMainMod.update();
        this.svSubMod.update();
	},
    mainmodGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
	    this.submodGrid.deselectAll();
        this.svDelMod.input.setValue("id",selectedItem.getData().id);
        this.fMod.setDataValue("MODULE");
	},
	submodGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.mainmodGrid.deselectAll();
        this.svDelMod.input.setValue("id",selectedItem.getData().id);
	    this.fMod.setDataValue("SUBMODULE");
    },
	svDelModResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="1"){
            app.alert("Deleting of Module Successful!");
            if(this.fMod.getDisplayValue()=="MODULE"){
                this.svMainMod.update();
            }else{
                this.svSubMod.update();
            }
            this.pnlMainAddMod.clearData();
        }else{
            app.alert("Error in Routine!");
        }
	},
	_end: 0
});