dojo.declare("BOO_BULK_ACCT_CREATE", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	dojoFileUpload1Success: function(inSender, fileList) {
		this.label4.setCaption("File Uploaded");
	},
	svBulkAcctCreateSuccess: function(inSender, inDeprecated) {
		app.alert("Account Generated Successful!");
	},
	_end: 0
});