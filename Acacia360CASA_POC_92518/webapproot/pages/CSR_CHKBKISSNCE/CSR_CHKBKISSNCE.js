dojo.declare("CSR_CHKBKISSNCE", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",
	btnSubmitClick: function(inSender) {
		this.svSave.update();
	},
	svSaveResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="0"){
            app.alert("Account not found!");
        }else if(inSender.getData().dataValue=="1"){
            app.alert("Checkbook already issued!");    
        }else if(inSender.getData().dataValue=="2"){
            app.alert("Success!");
            this.panel4.clearData();
        }else if(inSender.getData().dataValue=="999"){
            app.alert("Error in routine!");    
        } 
	},
	_end: 0
});