dojo.declare("CSR_ACCTPROFMAINTENANCE", wm.Page, {
	start: function() {
	    this.pnlAcctInfo.setValue("showing", false);
        this.svAcctStat.update();
        this.svWatchlist.update();
        this.svPostTx.update();
        this.svAlertlevel.update();
	},
	"preferredDevice": "desktop",
    svCheckAcctResult: function(inSender, inDeprecated) {
		console.log(inSender.getData());
        if(inSender.getData().result==0||inSender.getData().result==null){
            app.toastError("Account not found/exist!", 5000);    
		}else{
            app.toastSuccess("Account found!", 5000);
            this.svGetAcctInfo.update();
            this.pnlAcctInfo.setValue("showing", true);
		}    
	},
	svSaveResult: function(inSender, inDeprecated) {
		if(inSender.getData().result==0||inSender.getData().result==null){
            app.toastError("Error in Account Update!", 5000);    
    	}else{
            app.alert("Account Update Successful!");
            this.panel1.clearData();
            this.pnlAcctInfo.setValue("showing",false);
		}
	},
	svGetAcctInfoResult: function(inSender, inDeprecated) {
        console.log("1231");
		console.log(inSender.getData());
	},
	svSearchByNameResult: function(inSender, inDeprecated) {
		this.searchResultDialog.show();
	},
    btnCloseClick: function(inSender) {
		this.searchResultDialog.hide();
	},
	btnSearchClick: function(inSender) {
		if(this.fAcctNo.getDataValue()!=null){
            this.svCheckAcct.update();    
    	}else if(this.fAcctName.getDataValue()!=null){
            this.svSearchByName.update();
		}
	},
	fAcctNameFocus: function(inSender) {
		this.fAcctNo.setValue("required", false);
        this.fAcctName.setValue("required", true);
	},
	fAcctNoFocus: function(inSender) {
		this.fAcctName.setValue("required", false);
        this.fAcctNo.setValue("required", true);
	},
	gridResultNameGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
        this.fAcctNo.setDataValue(rowData.acctno);
        this.fAcctName.setDataValue(rowData.name);
	    this.svCheckAcct.input.setValue("accountno", rowData.acctno);
        this.svCheckAcct.update();
        this.searchResultDialog.hide();	
	},
	pnlAlertEnterKeyPress: function(inSender, inEvent) {
		console.log(inSender);
	},
	alertIndiChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		console.log(inDataValue);
        if(inDataValue=="1"){
            this.pnlAlert.setValue("showing", true);    
        } else {
            this.pnlAlert.setValue("showing", false);
        }
	},
	AcctCancelClick: function(inSender) {
		wm.Page.getPage("Main").pageContainer1.setPageName("");
	},
	fAcctName1Focus: function(inSender) {
	  this.fAcctNameFocus(inSender);
	},
  _end: 0
});