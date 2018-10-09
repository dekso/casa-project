dojo.declare("CSR_PLACE_EARMARK", wm.Page, {
	start: function() {
		this.svCurrency.update();
        this.svHoldReason.update();
	},
	"preferredDevice": "desktop",
	svPlaceHoldResult: function(inSender, inDeprecated) {
		if(inSender.getData().result=="0"){
            app.alert("Account does not exist!");    
		}else if(inSender.getData().result=="1"){
            app.alert("Place Earmark Amount Successful!");
            this.panel1.clearData();
		}else if(inSender.getData().result=="2"){
            app.alert("Insufficient Balance!");
		}else if(inSender.getData().result=="3"){
            app.alert("Error in Routine!");   
		}
	},
	btnSearchClick: function(inSender) {
		this.svCheckAccount.update();
	},
   
	svCheckAccountResult: function(inSender, inDeprecated) {
	    if(inSender.getData().result=="0"){
            //app.alert("Account no does not exist!");   
            this.lblResult.setCaption("<b><font color='red'>Record does not exist!");
            this.acctCurrency.setDataValue(""); 
            this.acctName.setDataValue("");
        }else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
            this.lblResult.setCaption("<b><font color='blue'>Record found!");
            this.acctCurrency.setDataValue(inSender.getData().currency);
            this.acctName.setDataValue(inSender.getData().name);
    	}
	},
    onFocusField: function(inSender) {
        //console.log(inSender.name);
        var clearobj = this[inSender.name];
        clearobj.clear();
    },
	_end: 0
});