dojo.declare("SYS_CODETABLE_MAINTENANCE", wm.Page, {
	start: function() {
	    this.svCodenameList.update();
        this.svCodetableList.update();
	},
	"preferredDevice": "desktop",

	btnSearchClick: function(inSender) {
		this.svCodetableList.update();
	},
	btnAddClick: function(inSender) {
	    this.dlgSetupNewEdit.show();  
        this.dlgSetupNewEdit.setValue("title", "SETUP NEW "+this.fCodename.getDisplayValue());
        this.fCdname.setValue("required",true);
        this.fCdname.setValue("readonly",false);
        this.fCdval.setValue("readonly",false);
        this.fCdval.setValue("required",true);
        if(this.fCodename.getDataValue()!=null){
            this.fCdname.setDataValue(this.fCodename.getDataValue());
        }
	},
	btnSetupSubmitClick: function(inSender) {
	    if(this.fId.getDataValue()==null){
            this.svSaveNew.update();
	    }else{
            this.svSaveEdit.update();   
	    }
	},
    btnSetupCloseClick: function(inSender) {
	    this.pnlSetup.clearData();
        this.dlgSetupNewEdit.hide();
	},
    svSaveNewResult: function(inSender, inDeprecated) {
	    if(inSender.getData().dataValue=="1"){
            this.dlgSetupNewEdit.hide();
            this.pnlSetup.clearData();
            this.svCodetableList.update();
            this.svCodenameList.update();
            app.alert("SAVING NEW "+this.fCodename.getDisplayValue()+" SUCCESSFUL!");  
	    } else {
            app.alert("ERROR IN ROUTINE!");   
	    }
	},
	codetableGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.dlgSetupNewEdit.show();  
        this.dlgSetupNewEdit.setValue("title", "EDIT "+selectedItem.getData().codename);
        this.fCdval.setDataValue(selectedItem.getData().codevalue);
        this.fDesc1.setDataValue(selectedItem.getData().desc1);
        this.fDesc2.setDataValue(selectedItem.getData().desc2);
        this.fCdname.setDataValue(selectedItem.getData().codename);
        this.fId.setDataValue(selectedItem.getData().id);
        this.fCdname.setValue("readonly",true);
        this.fCdval.setValue("readonly",true);
	},
	svSaveEditResult: function(inSender, inDeprecated) {
	    if(inSender.getData().dataValue=="1"){
            this.dlgSetupNewEdit.hide();
            app.alert("UPDATING "+this.codetableGrid.selectedItem.getData().codename+" SUCCESSFUL!");
            this.pnlSetup.clearData();
            this.svCodetableList.update();
        } else {
            app.alert("ERROR IN ROUTINE!");   
	    }
	},
  _end: 0
});