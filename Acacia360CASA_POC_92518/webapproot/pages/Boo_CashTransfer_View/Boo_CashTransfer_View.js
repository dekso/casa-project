dojo.declare("Boo_CashTransfer_View", wm.Page, {
	start: function() {
	    //this.dlgAmtEntry.activate();
        //this.svCashInCashOut.update();
        this.svCurrList.update();
        this.svUserList.update();        
	},
	"preferredDevice": "desktop",
	btnCancelClick: function(inSender) {
		this.countPanel.clearData();
        this.dlgAmtEntry.deactivate();
	},
	btnACOClick: function(inSender) {
		this.dlgCashPos.setValue("title", "Cash Out");
	},
	btnACIClick: function(inSender) {
		this.dlgCashPos.setValue("title", "Cash In");
	},
	btnCicoCancelClick: function(inSender) {
	    this.cpDestination.clear();
        this.cpCurrency.clear();
        this.cpTxamount.clear();
        this.dlgCashPos.deactivate();
	},
	svCashPositionResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue==="1"){
            app.alert("Transaction Successful!");
            this.cpDestination.clear();
            this.cpCurrency.clear();
            this.cpTxamount.clear();
            this.dlgCashPos.deactivate();
            this.svCashInCashOut.update();
            this.svUnitBalance.update();
		}else{
            app.alert("Transaction Failed!");
		}
	},
	cashinGridGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
	    this.cashinGrid.select(rowIndex);
        this.svConfimCpos.input.setValue("txref", this.cashinGrid.selectedItem.getData().txref);
        this.svConfimCpos.update();
        this.dlgAmtDetail.activate();
	},
    notiCposAcceptOk: function(inSender, inResult) {
		this.svActionCpos.input.setValue("txref", this.cashinGrid.selectedItem.getData().txref);
        this.svActionCpos.input.setValue("act", "A");
        this.varCposAction.setValue("dataValue", "A");
        this.svActionCpos.update();
	},
	notiCposDeclineOk: function(inSender, inResult) {
		this.svActionCpos.input.setValue("txref", this.cashinGrid.selectedItem.getData().txref);
        this.svActionCpos.input.setValue("act", "D");
        this.varCposAction.setValue("dataValue", "D");
        this.svActionCpos.update();
	},
	svActionCposResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="1"){
            if(this.varCposAction.getData().dataValue=="A"){
                app.alert("Transaction Accepted!");   
                this.dlgAmtDetail.deactivate();
                this.svUnitBalance.update();
                this.svCashInCashOut.update();
            }else if(this.varCposAction.getData().dataValue=="D"){
                app.alert("Transaction Declined!");   
                this.dlgAmtDetail.deactivate();
                this.svCashInCashOut.update();
            }    
		}else{
            app.alert("Error in Routine");
		}
	},
	svUnitBalanceResult: function(inSender, inDeprecated) {
		app.varNetCash.setValue("dataValue",inSender.getData().dataValue);
	},
	_end: 0
});