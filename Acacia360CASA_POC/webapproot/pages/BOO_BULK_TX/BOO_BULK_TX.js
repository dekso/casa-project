dojo.declare("BOO_BULK_TX", wm.Page, {
	start: function() {
		this.svGetBatchList.input.setValue("batchstatus", 9);
        this.svGetBatchList.update();
	},
	"preferredDevice": "desktop",

	button1Click: function(inSender) {
		this.designableDialog1.show();
	},
	svUploadBulkResult: function(inSender, inDeprecated) {
		console.log(inSender.getData().dataValue);
        if(inSender.getData().dataValue=="1") {
            app.alert("Uploading Successful!");
            this.designableDialog1.hide();
            this.svGetBatchList.update();
        }else{
            app.alert("Uploading Failed!");
            
        }
	},
	dojoFileUpload1Success: function(inSender, fileList) {
		this.label3.setCaption("File Uploaded");
	},
	button3Click: function(inSender) {
		this.designableDialog1.hide();
        this.selectMenu1.clear();
        this.dojoFileUpload1.clearData();
	},
	button4Click: function(inSender) {
	  this.button1Click(inSender);
	},
    svRunBulkResult: function(inSender, inDeprecated) {
		console.log(inSender.getData().dataValue);
        if(inSender.getData().dataValue=="1") {
            app.alert("Bulk Transcation Successful!");
            this.designableDialog1.hide();
            this.svGetBatchList.update();
        }else{
            app.alert("Bulk Transcation Failed!");
            
        }
	},
	_end: 0
});