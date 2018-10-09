dojo.declare("SYSAD_TERMINAL_SETUP", wm.Page, {
	start: function() {
        this.svList.update();
	},
	"preferredDevice": "desktop",
	btnAddClick: function(inSender) {
        this.dlgTerminal.show();
		this.dlgTerminal.setValue("title", "Add Terminal");
	},
	btnSubmitClick: function(inSender) {
		this.svAE.update();
	},
    svAEResult: function(inSender, inDeprecated) {
	    if(inSender.getData().dataValue=="0"){
            app.alert("IP Address/Terminal No is already in use!");    
	    }else if(inSender.getData().dataValue=="1"){
            app.alert("Successful : New terminal added!");
            this.containerWidget.clearData();
            this.dlgTerminal.hide();
            this.svAE.clearData();
            this.svList.update();
        }else if(inSender.getData().dataValue=="999"){
            app.alert("Error in routine!");    
        }
	},
	btnCloseClick: function(inSender) {
		this.dlgTerminal.hide();
        this.containerWidget.clearData();
	},
	dgTerminalGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
		  console.log(rowData);
          app.confirm("Delete terminal?", false, 
            dojo.hitch(this, function() {
                this.svDelete.input.setValue("id", rowData.id);
                this.svDelete.update();
            }), 
            dojo.hitch(this, function(){
                this.svList.update();
            }), "Yes", "No");
	},
	svDeleteResult: function(inSender, inDeprecated) {
		console.log(inSender);
        if(inSender.getData().dataValue=="0"){
            app.alert("Error in routine!");
        }else if(inSender.getData().dataValue=="1"){
            app.alert("Terminal deleted!");
            this.svList.update();
        }
	},
	_end: 0
});