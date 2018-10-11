dojo.declare("TLR_FX_MGRCHKENC", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

    svViewSigcardResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="0"){
            app.alert("Sigcard not found!");    
		}else{
            this.sigImg.setSource(inSender.getData().dataValue);
            this.dlgSigcard.show();
		}
	},
    btnVerifiedSigcardClick: function(inSender) {
	  this.dlgSigcard.hide();
      this.btnSubmit.setDisabled(false);
	},
    btnInvalidSigcardClick: function(inSender) {
	  this.dlgSigcard.hide();
      this.btnSubmit.setDisabled(true);
	},
	_end: 0
});
