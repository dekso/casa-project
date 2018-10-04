dojo.declare("SYSAD_DOCSPERPROD_SETUP", wm.Page, {
	start: function() {
        this.svList.update();
        this.codeProdType.update();
	},
	"preferredDevice": "desktop",
	btnAddClick: function(inSender) {
        this.dlgDocument.show();
		this.dlgDocument.setValue("title", "Add Document");
        this.fDocCode.setValue("readonly",false);
	},
	btnSubmitClick: function(inSender) {
		this.svAddUpdate.update();
	},
    svAEResult: function(inSender, inDeprecated) {
	    if(inSender.getData().dataValue=="updated"){
            this.dlgDocument.hide();
            this.svList.update();
            this.containerWidget.clearData();
            app.toastSuccess("Document updated", 3000);
            
	    }else{
	        this.dlgDocument.hide();
            this.svList.update();
            this.containerWidget.clearData();
            app.toastSuccess("New Document created", 3000);
        }
	},
	btnCloseClick: function(inSender) {
		this.dlgDocument.hide();
        this.containerWidget.clearData();
        this.dgDocument.deselectAll();
	},
//	dgDocumentGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
//		  console.log(rowData);
//          app.confirm("Delete terminal?", false, 
//            dojo.hitch(this, function() {
//                this.svDelete.input.setValue("id", rowData.id);
//                this.svDelete.update();
//            }), 
//            dojo.hitch(this, function(){
//                this.svList.update();
//            }), "Yes", "No");
//	},
	svDeleteResult: function(inSender, inDeprecated) {
		console.log(inSender);
        if(inSender.getData().dataValue=="0"){
            app.alert("Error in routine!");
        }else if(inSender.getData().dataValue=="1"){
            app.alert("Terminal deleted!");
            this.svList.update();
        }
	},
	dgDocumentClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.fDocCode.setValue("readonly",true);
        this.dlgDocument.show();
	},
	_end: 0
});