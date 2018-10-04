dojo.declare("CSR_CLOSEACCT", wm.Page, {
	start: function() {
        this.pnlAcctDetails.setValue("showing",false);
	},
	"preferredDevice": "desktop",

    svCheckAccountResult: function(inSender, inDeprecated) {
//	    console.log(inSender.getData());
        if(inSender.getData()!=null){
            this.pnlAcctDetails.setValue("showing",true);
            app.toastSuccess("Account Found!", 5000);    
	    }else{
            this.pnlAcctDetails.setValue("showing",false);
            app.toastError("Account not found/exist!", 5000);
	    }
	},
	btnCancelClick: function(inSender) {
		this.panel1.clearData();
        this.svCheckAccount.clearData();
        this.pnlAcctDetails.setValue("showing",false);
	},
	svCloseAccountResult: function(inSender, inDeprecated) {
		if(inSender.getData().result=="1"){
            app.alert("Account Closed!");  
            this.panel1.clearData();
            this.svCheckAccount.clearData();
            this.pnlAcctDetails.setValue("showing",false);
        }else if(inSender.getData().result=="0"){
            app.alert("Error in closing account!");
	    }
	},
	btnSubmitClick: function(inSender) {
		app.confirm("Proceed to close this account?", false, 
                  dojo.hitch(this, function() {
                     this.svCloseAccount.update();
                    }),
                  dojo.hitch(this, function() {}));
	},
    btnSearchClick: function(inSender) {
		if(this.fAcctNo.getDataValue()!=null){
            this.svCheckAccount.update();    
    	}else if(this.fAcctName.getDataValue()!=null){
            this.svSearchByName.update();
		}
	},
	fAcctNameFocus: function(inSender) {
		this.fAcctNo.setValue("required", false);
        this.fAcctNo.setDataValue("");        
        this.fAcctName.setValue("required", true);
	},
	fAcctNoFocus: function(inSender) {
		this.fAcctName.setValue("required", false);
        this.fAcctName.setDataValue("");
        this.fAcctNo.setValue("required", true);
	},
    svSearchByNameResult: function(inSender, inDeprecated) {
		this.searchResultDialog.show();
	},
    btnCloseClick: function(inSender) {
    	this.searchResultDialog.hide();
	},
    gridResultNameGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
        this.fAcctNo.setDataValue(rowData.acctno);
        this.fAcctName.setDataValue(rowData.name);
	    this.svCheckAccount.input.setValue("accountno", rowData.acctno);
        this.svCheckAccount.update();
        this.searchResultDialog.hide();	
	},
	_end: 0
});