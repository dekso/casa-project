dojo.declare("FX_RATE_MAINTENANCE1", wm.Page, {
	start: function() {
        this.svGetRates.update();
		
	},
	"preferredDevice": "desktop",

	btnCloseClick: function(inSender) {
        this.gridRate.deselectAll();
		this.desAddOrUpdateRates.hide();
        this.panel5.clearData();
	},

	svAddOrUpdateRatesResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue == "updated"){
            app.toastSuccess("rate updated", 3000);
		    this.gridRate.deselectAll();
            this.panel5.clearData();
            this.desAddOrUpdateRates.hide();
            this.svGetRates.update();
        }else if(inSender.getData().dataValue == "created"){
            app.toastSuccess("rate created", 3000);
            this.svGetRates.update();
            this.desAddOrUpdateRates.hide();
            this.panel5.clearData();
        }
        else{
            app.toastError("Error", 3000);
        }
	},

	svDeleteRateResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue = "success"){
            this.svGetRates.update();
            app.toastSuccess("record deleted", 3000);
            this.desAddOrUpdateRates.hide();
		}
	},
	btnAddClick: function(inSender) {
		this.desAddOrUpdateRates.setTitle("Add Rate");
        this.desAddOrUpdateRates.show();
	},
	gridRateClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.desAddOrUpdateRates.setTitle("Update Rate");
        this.desAddOrUpdateRates.show();
	},
	txtCurrencyChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		this.inDisplayValue.toUppercase();
	},
	_end: 0
});