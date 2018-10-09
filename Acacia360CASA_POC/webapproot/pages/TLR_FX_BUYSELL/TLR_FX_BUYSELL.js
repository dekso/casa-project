dojo.declare("TLR_FX_BUYSELL", wm.Page, {
	start: function() {
        this.svCurrency.update();
        this.svRate.update();
        this.svCust.update();
        this.fAcctPanel.setValue("showing", false);
	},
	"preferredDevice": "desktop",
	fCustTypeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		if(inDataValue=="1"){
            this.fAcctPanel.setValue("showing", true);
            this.fAcctNo.setValue("required",true);
            this.fCustName.setValue("readonly", true);
            this.fCustName.clear();
            this.fAcctNo.clear();
		}else{
            this.fAcctNo.setValue("required",false);    
            this.fAcctPanel.setValue("showing", false);
            this.fCustName.setValue("readonly", false);
            this.fCustName.clear();
		    this.fAcctNo.clear();
        }
	},

	fCurrencyChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.svGetRate.update();
	},
	fTransTypeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		this.fCurrency.clear();
	},


	svAddBuySellResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue =="saved"){
		    app.toastSuccess("Transaction completed.", 3000);
            this.panel3.clearData();
        }else{
            app.toastError("Error while saving transaction", 3000);
        }
	},
	btnSearchClick: function(inSender) {
		this.svCheckAccount.update();
	},
	svCheckAccountResult: function(inSender, inDeprecated) {
//		 console.log(inSender.getData());
//    	if(inSender.getData().result=="0"){
//            //app.alert("Account no does not exist!");   
//            this.lblResult.setCaption("<b><font color='red'>Account number does not exist!");
////            this.fCurr.setDataValue("");
//            this.fCustName.setDataValue("");
//		}else if(inSender.getData().result=="1"){
////            app.alert("Account found!");
//            this.lblResult.setCaption("<b><font color='blue'>Account number found!");
////            this.fCurr.setDataValue(inSender.getData().currency);
//            this.fCustName.setDataValue(inSender.getData().name);
//    	}else if(inSender.getData().result=="503"){
//            this.lblResult.setCaption("<b><font color='red'>Host not available!");
//    
//    	}
        if(inSender.getData().result==0){
            app.toastError("Member not found/exist!", 5000);       
        }else{
            app.toastSuccess("Member found/exist!", 5000);  
//            this.btnAddCIF.click();
//            this.svCheckDeceased.update();
		}
	},
	svCashDepResult: function(inSender, inDeprecated) {
        console.log(inSender.getData().result);
//		this.svUnitBalance.update();
        //app.alert(inSender.getData().dataValue);
    	if(inSender.getData().result=="0"){
            app.alert("Account no does not exist!");   
		}else if(inSender.getData().result=="1"){
//            this.fAcctNo.clear();
//            this.fAcctName.clear();
//			this.fAmt.clear();
//            this.fCurr.clear();
//            this.lblResult.setCaption("");
            this.panel3.clearData();
            app.alert("Transaction Successful!");   
		}else if(inSender.getData().result=="3"){   
            app.confirm("Posting Restriction : " +inSender.getData().posttxdesc
			+"<br/>Override Transaction?", false, 
                  dojo.hitch(this, function() {
                     this.dlgOverride.show();
                    }),
                  dojo.hitch(this, function() {
                     this.svCancelReject.update(); 
                    }));
        }else if(inSender.getData().result=="4"){
            app.alert("Transaction Failed : Account is Closed!");   
    	}else if(inSender.getData().result=="999"){
            app.alert("Transaction Failed : Error in Routine!");   
    	}    
	},
	_end: 0
});