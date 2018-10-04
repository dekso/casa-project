dojo.declare("CSHR_MISC_BILLSPYMNT", wm.Page, {
	start: function() {
		this.btnJournal.setCaption("View Journal");
	},
	"preferredDevice": "desktop",

	svSearchAccountResult: function(inSender, inDeprecated) {
        if(inSender.getData().result=="1"){
            app.toastSuccess("Account Found!", 3000);
        }    
        else if(inSender.getData().result=="0"){
            app.toastError("Account Does Not Found/Exist!", 3000); 
        }
    },
	btnJournalClick: function(inSender) {
        if(this.layer2.isActive()){
            this.btnJournal.setCaption("View Journal");
            this.layer1.activate();   
        }else{    
            this.layer2.activate();
            this.btnJournal.setCaption("Close Journal");
        }
	},
	AcctSaveClick: function(inSender) {
	  this.btnJournalClick(inSender);
	},
  AcctBackClick: function(inSender) {
	  this.AcctSaveClick(inSender);
	},
  _end: 0
});