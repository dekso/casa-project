dojo.declare("SYS_HOLIDAY_MAINTENANCE", wm.Page, {
	start: function() {
        this.svGetListHoliday.update();
		
	},
	"preferredDevice": "desktop",

	btnClearClick: function(inSender) {
		this.txtSearch.clear();
        this.svGetListHoliday.update();
	},
	btnCancelClick: function(inSender) {
		this.formPanel1.clearData();
        this.gridHoliday.deselectAll();
        this.desAddorUpdate.hide();
	},
	gridHolidayClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.desAddorUpdate.show();
	},
	notiAddOk: function(inSender, inResult) {
		this.svAddEditDeleteHoliday.input.setValue("type", "1");
        this.svAddEditDeleteHoliday.update();
	},
	svAddEditDeleteHolidayResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue == "created"){
            app.toastSuccess("record created", 3000);
            this.svGetListHoliday.update();
            this.desAddorUpdate.hide();
            this.formPanel1.clearData();
            
		}if(inSender.getData().dataValue == "updated"){
            app.toastSuccess("record updated", 3000);
            this.gridHoliday.deselectAll();
            this.svGetListHoliday.update();
            this.desAddorUpdate.hide();
            this.formPanel1.clearData();
            
    	}if(inSender.getData().dataValue == "deleted"){
            app.toastSuccess("record deleted", 3000);
            this.gridHoliday.deselectAll();
            this.svGetListHoliday.update();
            this.desAddorUpdate.hide();
            this.formPanel1.clearData();
            
        }
	},
	notiUpdateOk: function(inSender, inResult) {
		this.svAddEditDeleteHoliday.input.setValue("type", "2");
        this.svAddEditDeleteHoliday.update();
	},
	notiDeleteOk: function(inSender, inResult) {
		this.svAddEditDeleteHoliday.input.setValue("type", "3");
        this.svAddEditDeleteHoliday.update();
	},

	txtHolNameChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		inSender.setDataValue(inDataValue.toUpperCase());
	},
	_end: 0
});