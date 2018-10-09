dojo.declare("CSR_TIMEDEPMATACCT", wm.Page, {
	start: function() {
        this.svListAccount.update();
        this.svAction.update();
        this.svModeRelease.update();
	},
	"preferredDevice": "desktop",

	acctlistGridGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
        this.acctlistGrid.select(rowIndex);
		this.dlgAcctDet.show();
        this.svAcctDet.update();
	},
	btnCloseClick: function(inSender) {
		this.dlgAcctDet.hide();
	},
	btnClose1Click: function(inSender) {
	  this.btnCloseClick(inSender);
	},
    btnProceedClick: function(inSender) {
	  this.dlgAcctDet.hide();
      this.svProdDetail.update();
      this.dlgMatAcctDispo.show();
	},
    dispoPrinPayoutChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		this.dispoPrinRollover.setDataValue(this.dispoPrinamt.getDataValue()-inDataValue);
	},
	dispoPrinRolloverChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		this.dispoPrinPayout.setDataValue(this.dispoPrinamt.getDataValue()-inDataValue);
	},
	dispoIntPayoutChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		this.dispoIntRollover.setDataValue(this.dispoIntamt.getDataValue()-inDataValue);
	},
	dispoIntRolloverChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		this.dispoIntPayout.setDataValue(this.dispoIntamt.getDataValue()-inDataValue);
	},
    computeDtTerm: function() {
//		var dt = new Date(this.fBkdt.getDataValue());
//        this.fMatdt.setDataValue(dt.setDay(dt.getDay()+this.fTerm.getDataValue()));
        var date = new Date(this.dispoBookdt.getDataValue());
        var newdate = new Date(date);
        newdate.setDate(newdate.getDate() + this.dispoTerm.getDataValue());    
        this.dispoMatdt.setDataValue(newdate);
    },       
	btnCancelClick: function(inSender) {
		this.pnlPayout.clearData();
        this.pnlRollover.clearData();
        this.dispoTerm.clear();
        this.dlgMatAcctDispo.hide();
	},
	svRolloverAccountResult: function(inSender, inDeprecated) {
		if(inSender.getData().result==0){
            app.alert("Error in creating account!");       
        }else{
            this.notifCreateSuccess.input.setValue("text", 
            "Account creation successful!<br/> Account no : <b><font color='blue'> "+inSender.getData().value);
            this.notifCreateSuccess.update();
            this.dlgMatAcctDispo.hide();
            this.svListAccount.update();
        }
	},
	btnSubmitClick: function(inSender) {
		app.confirm("Proceed Rollover of Account?", false, 
        dojo.hitch(this, function() {
            this.svRolloverAccount.update();
        }),
        dojo.hitch(this, function() {}));
	},
	svProdDetailResult: function(inSender, inDeprecated) {
		console.log("Prod detail");
	},
	_end: 0
});