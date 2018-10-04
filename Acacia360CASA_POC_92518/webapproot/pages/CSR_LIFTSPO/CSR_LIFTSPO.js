dojo.declare("CSR_LIFTSPO", wm.Page, {
	start: function() {
        this.svSPOList.update();
        this.svLiftReason.update();
	},
	"preferredDevice": "desktop",

	acctlistGridGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
		this.acctlistGrid.select(rowIndex);
        this.dlgAcctDet.show();
	},
	btnCloseClick: function(inSender) {
		this.dlgAcctDet.hide();
	},
	btnLiftClick: function(inSender) {
		app.confirm("Proceed to lift SPO?", false, 
                  dojo.hitch(this, function() {
                     this.svLiftSPO.update();
                    }),
                  dojo.hitch(this, function() {}));
	},

	svLiftSPOResult: function(inSender, inDeprecated) {
		if(inSender.getData().result==1){
            app.alert("Lift SPO Successful!");
            this.dlgAcctDet.hide();
            this.svSPOList.update();
    	}else if(inSender.getData().result==0){
            app.alert("Error in Routine!");    
		}
	},
	_end: 0
});