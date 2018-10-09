dojo.declare("CSR_PLCECHKSTPPYMNTORDR", wm.Page, {
	start: function() {
	    this.svReason.update();
	},
	"preferredDevice": "desktop",
    svSaveResult: function(inSender, inDeprecated) {
        app.alert(inSender.getData().result);
		if(inSender.getData().result=="0"){
            app.alert("Account not found/exist!");    
    	}else if(inSender.getData().result=="1"){
            app.alert("Place Check Stop Payment Order successful!");
            this.panel1.clearData();
		}else if(inSender.getData().result=="3"){
            app.alert("Error in Routine!");
		}
	},
    btnSearchClick: function(inSender) {
		this.svCheckAccount.update();
	},
   
	svCheckAccountResult: function(inSender, inDeprecated) {
	    console.log(inSender);
        if(inSender.getData().result=="0"){
            //app.alert("Account no does not exist!");   
            this.lblResult.setCaption("<b><font color='red'>AccountNo does not exist!");
            this.acctName.setDataValue("");
        }else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
            this.lblResult.setCaption("<b><font color='blue'>AccountNo found!");
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