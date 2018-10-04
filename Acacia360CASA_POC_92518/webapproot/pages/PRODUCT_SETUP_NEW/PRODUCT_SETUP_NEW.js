dojo.declare("PRODUCT_SETUP_NEW", wm.Page, {
	start: function() {
        this.svProdGroup.update();
        this.svCurrency.update();
        this.svBalCompBas.update();
        this.svBalType.update();
        this.svFreqCycle.update();
        this.svPeriod.update();
        this.svPostTx.update();
        this.svIntRateType.update();
	},
	"preferredDevice": "desktop",
	svSaveResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="0"){
            app.alert("Error in Routine!");    
		}else if(inSender.getData().dataValue=="1"){
            app.alert("Already Existing!");    
    	}else if(inSender.getData().dataValue=="2"){
            app.alert("Creating New Product Successful!");
            this.panelData.clearData();
    	}
	},
	_end: 0
});