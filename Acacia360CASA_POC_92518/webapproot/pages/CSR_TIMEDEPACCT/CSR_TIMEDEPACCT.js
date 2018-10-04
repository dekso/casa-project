dojo.declare("CSR_TIMEDEPACCT", wm.Page, {
	start: function() {
        this.svListAccount.update();
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
	btnCloseTDCClick: function(inSender) {
		this.dlgCertificate.hide();
	},
	btnPrintClick: function(inSender) {
        this.svPrint.update();
		this.dlgCertificate.show();
	},
	svListAccountResult: function(inSender, inDeprecated) {
		console.log(inSender.getData());
	},
	_end: 0
});