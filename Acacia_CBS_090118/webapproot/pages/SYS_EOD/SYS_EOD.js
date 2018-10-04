dojo.declare("SYS_EOD", wm.Page, {
	start: function() {
        this.svEODDetail.update();
	},
	"preferredDevice": "desktop",

	btnRunClick: function(inSender) {
	    this.svRun.update();	
	},
    svRunResult: function(inSender, inDeprecated) {
        this.svEODDetail.update();
		if(inSender.getData().dataValue=="0"){
            app.alert("Run Failed : Error in Routine!");       
		}else if(inSender.getData().dataValue=="1"){
            app.alert("Run Failed : All branch not close!");
		}else if(inSender.getData().dataValue=="2"){
            app.alert("Run Successful : EOD Done!");    
		}else if(inSender.getData().dataValue=="3"){
		    app.alert("Run Failed : You are not authorized to run EOD");
        }
	},
	_end: 0
});