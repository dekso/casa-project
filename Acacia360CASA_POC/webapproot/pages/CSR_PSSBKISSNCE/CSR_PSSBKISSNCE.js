dojo.declare("CSR_PSSBKISSNCE", wm.Page, {
	start: function() {
        
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

    svCheckAccountResult: function(inSender, inDeprecated) {
        console.log(inSender.getData());
		if(inSender.getData().result=="0"){
            this.lblResult.setCaption("<b><font color='red'>Account No. doesn't exist!");
    	}else if(inSender.getData().result=="1"){
            if(inSender.getData().prodtype == "20"){
            this.lblResult.setCaption("<b><font color='blue'>Account Number found!");
            }else{
            this.lblResult.setCaption("<b><font color='red'>Invalid Account No.");
            }
    	}else if(inSender.getData().result=="503"){
            this.lblResult.setCaption("<b><font color='red'>Host not available!");
    
    	}
	},
	svSaveResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue == "success"){
            app.toastSuccess("Passbook Issuance successful.", 3000);
            this.formPanel1.clearData();
            this.lblResult.setCaption("");
		}else if(inSender.getData().dataValue == "exist"){
            app.toastError("Existing passbook serial number.", 3000);
        }else{
		    app.toastError("Error while saving.", 3000);
        }
	},
	_end: 0
});