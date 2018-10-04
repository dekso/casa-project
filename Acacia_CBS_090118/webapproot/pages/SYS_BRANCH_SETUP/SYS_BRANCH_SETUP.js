dojo.declare("SYS_BRANCH_SETUP", wm.Page, {
	start: function() {
        this.svBranchDetail.update();
	},
	"preferredDevice": "desktop",

	svUpdateBranchResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue==0){
            app.alert("Error in Routine!");    
		}else if(inSender.getData().dataValue==2){
            this.svBranchDetail.update();
            app.alert("Status Change Success!");
		}
	},
	btnCloseClick: function(inSender) {
        var val = null;
        if(this.fBranchstatus.getDataValue()=="Open"){
            val = "1";    
        }else if(this.fBranchstatus.getDataValue()=="Close"){
            val = "0";    
        }
        app.alert(val);
        this.svUpdateBranch.input.setValue("value",val);
		this.svUpdateBranch.update();
	},
	_end: 0
});