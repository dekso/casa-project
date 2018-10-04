dojo.declare("CSR_LIFT_FREEZE", wm.Page, {
	start: function() {
		this.svCurrency.update();
        this.svHoldReason.update();
	},
	"preferredDevice": "desktop",
	svPlaceHoldResult: function(inSender, inDeprecated) {
		if(inSender.getData().result=="0"){
            app.alert("Account not found/exist!");    
		}else if(inSender.getData().result=="1"){
            app.alert("Place Hold Amount Successful!");
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
            this.acctName.setDataValue("");
        }else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
            this.lblResult.setCaption("<b><font color='blue'>Record found!");
            this.acctName.setDataValue(inSender.getData().name);
            this.svFreezeAcctInfo.update();
    	}
	},
    onFocusField: function(inSender) {
        //console.log(inSender.name);
        var clearobj = this[inSender.name];
        clearobj.clear();
    },
	button3Click: function(inSender) {
		app.confirm("Proceed to lift freeze account?", false, 
                  dojo.hitch(this, function() {
                     this.svLift.update();
                     this.lblResult.setCaption("");
                    }),
                  dojo.hitch(this, function() {
                       
                    }));
	},
	svFreezeAcctInfoResult: function(inSender, inDeprecated) {
		if(inSender.getData()==null){
            app.alert("Error in routine!");    
		}
	},
	svLiftResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="0"){
            app.alert("Error in Routine!");   
		}else if(inSender.getData().dataValue=="1"){
            app.alert("Lift Freeze Successful!");
            this.panel1.clearData();
		}else if(inSender.getData().dataValue=="503"){
            app.alert("Host unavailable!");
		}
	},
	_end: 0
});