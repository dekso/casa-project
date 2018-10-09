dojo.declare("BOO_HOME", wm.Page, {
	start: function() {
        this.svGetUnitInfo.update();
	},
	"preferredDevice": "desktop",

	button1Click: function(inSender) {
		this.svChangeBranchStat.update();
	},
	svChangeBranchStatResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="0"){
            app.alert("Error in Routine");    
		}else{
            if(this.txtStatus.getDataValue()=="Close"){
                app.alert("Branch is Open");    
            }else{
                app.alert("Branch is Close");
            }
            this.svGetUnitInfo.update();
		}
	},
	svGetUnitInfoResult: function(inSender, inDeprecated) {
		app.svBusinessDt.update();
	},
	_end: 0
});