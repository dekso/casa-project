dojo.declare("SYS_TXCODE_MAINTENANCE", wm.Page, {
	start: function() {
	    this.svGetListTxcode.update();
	},
	"preferredDevice": "desktop",

	btnSearchClick: function(inSender) {
		this.svGetListTxcode.update();
	},
	btnAddClick: function(inSender) {
        this.btnSetupSubmit.setCaption("Save");
	    this.dlgSetupNewEdit.show();  
//        this.dlgSetupNewEdit.setValue("title", "SETUP NEW "+this.fCodename.getDisplayValue());
//        this.fCdname.setValue("required",true);
//        this.fCdname.setValue("readonly",false);
//        if(this.fCodename.getDataValue()!=null){
//            this.fCdname.setDataValue(this.fCodename.getDataValue());
//        }
	},

    btnSetupCloseClick: function(inSender) {
	    this.pnlSetup.clearData();
        this.dlgSetupNewEdit.hide();
	},

	txCodeGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        this.btnSetupSubmit.setCaption("Update");
		this.dlgSetupNewEdit.show();  
//        this.dlgSetupNewEdit.setValue("title", "EDIT "+selectedItem.getData().codename);
       
	},

	btnSetupSubmitClick: function(inSender) {
        console.log(inSender.caption);
		if(inSender.caption == "Save"){
            this.notiAdd.update();
		}else{
            this.notiUpdate.update();
		}
	},
	svNewUpdateResult: function(inSender, inDeprecated) {
        if(inSender.getData().dataValue == "updated"){
            app.toastSuccess("transaction code updated", 3000);
            this.dlgSetupNewEdit.hide();
            this.svGetListTxcode.update();
            this.pnlSetup.clearData();
        }else if(inSender.getData().dataValue == "created"){
            app.toastSuccess("new transaction code added", 3000);
            this.dlgSetupNewEdit.hide();
            this.svGetListTxcode.update();
            this.pnlSetup.clearData();
        }else{
            app.toastError("Error", 3000);
        }
		
	},
	_end: 0
});