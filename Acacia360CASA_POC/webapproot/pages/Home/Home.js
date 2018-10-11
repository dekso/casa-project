dojo.declare("Home", wm.Page, {
    start: function() {
        //this.dlgAmtEntry.activate();
        //this.svCashInCashOut.update();
        this.svCurrList.update();
        this.svUserList.update();
        this.svUserTotalNet.update();

    },
    "preferredDevice": "desktop",
    btnCancelClick: function(inSender) {
        this.countPanel.clearData();
        this.dlgAmtEntry.deactivate();
    },
    btnACOClick: function(inSender) {
        this.dlgCashPos.setValue("title", "Cash Out");
        this.cpOrigin.setCaption("Source");
        this.cpDestination.setCaption("Destination");
        this.lblTx.setCaption(this.dlgCashPos.title);
    },
    btnACIClick: function(inSender) {
        this.dlgCashPos.setValue("title", "Cash In");
        this.cpOrigin.setCaption("Destination");
        this.cpDestination.setCaption("Source");
        this.lblTx.setCaption(this.dlgCashPos.title);
    },
    btnCicoCancelClick: function(inSender) {
        this.cpDestination.clear();
        //        this.cpCurrency.clear();
        this.cpTxamount.clear();
        this.dlgCashPos.deactivate();
    },
    svCashPositionResult: function(inSender, inDeprecated) {
        if (inSender.getData().dataValue === "1") {
            app.alert("Transaction Successful!");
            this.cpDestination.clear();
//            this.cpCurrency.clear();
            this.cpTxamount.clear();
            this.dlgCashPos.deactivate();
            this.svCashInCashOut.update();
            this.svUnitBalance.update();
            this.svUserTotalNet.update();
        } else {
            app.alert("Transaction Failed!");
        }
    },
    cashinGridGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
        this.cashinGrid.select(rowIndex);
        this.svConfimCpos.input.setValue("txref", this.cashinGrid.selectedItem.getData().txref);
        this.svConfimCpos.update();
        this.dlgAmtDetail.activate();
        this.varCposInOut.setValue("dataValue", "IN");
    },
    notiCposAcceptOk: function(inSender, inResult) {
        if(this.varCposInOut.getData().dataValue == "OUT" && this.cashOutGrid.selectedItem.getData().txstatus == "Declined"){
            this.svActionCpos.input.setValue("txref", this.cashOutGrid.selectedItem.getData().txref);
            this.svActionCpos.input.setValue("act", "R");
            this.varCposAction.setValue("dataValue", "R");
        }else{
            this.svActionCpos.input.setValue("txref", this.cashinGrid.selectedItem.getData().txref);
            this.svActionCpos.input.setValue("act", "A");
            this.varCposAction.setValue("dataValue", "A");
        }
        this.svActionCpos.input.setValue("remarks", "");
        this.svActionCpos.update();
    },
    notiCposDeclineOk: function(inSender, inResult) {
        this.svActionCpos.input.setValue("txref", this.cashinGrid.selectedItem.getData().txref);
        this.svActionCpos.input.setValue("act", "D");
        this.varCposAction.setValue("dataValue", "D");
        this.svActionCpos.input.setValue("remarks", this.lgTxtRemarks.getDataValue());
        this.dlgDecline.hide();
        this.svActionCpos.update();
    },
    svActionCposResult: function(inSender, inDeprecated) {
//        console.log(inSender.getData().dataValue);
        if (inSender.getData().dataValue == "1") {
            if (this.varCposAction.getData().dataValue == "A" || this.varCposAction.getData().dataValue == "R") {
                app.alert("Transaction Accepted!");
                this.dlgAmtDetail.deactivate();
                this.svUnitBalance.update();
                this.svCashInCashOut.update();
            } else if (this.varCposAction.getData().dataValue == "D") {
                app.alert("Transaction Declined!");
                this.dlgAmtDetail.deactivate();
//                this.svUnitBalance.update();
                this.svCashInCashOut.update();
                //                this.svUserTotalNet.update();
            }
            this.svUserTotalNet.update();
        } else {
            app.alert("Error in Routine");
        }
    },
    svUnitBalanceResult: function(inSender, inDeprecated) {
        app.varNetCash.setValue("dataValue", inSender.getData().dataValue);
    },
    cashOutGridGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
        this.cashOutGrid.select(rowIndex);
        this.svConfimCpos.input.setValue("txref", this.cashOutGrid.selectedItem.getData().txref);
        this.svConfimCpos.update();
        this.varCposInOut.setValue("dataValue", "OUT");
        this.dlgAmtDetail.activate();
    },
    //	svCashInCashOutResult: function(inSender, inDeprecated) {
    ////        app.alert(this.variable1.getData().dataValue);
    //	    this.variable1.setValue("dataValue", this.svCashInCashOut.getData().cashout.count);
    //        app.alert(this.variable1.getData().dataValue);
    //        if(this.variable1.getData().dataValue>0){
    //            for(var i = 1; i < this.variable1.getData().dataValue; i++){
    ////                console.log("ers : "+this.svCashInCashOut.getData().cashout.select(i).getData().txref);    
    //            }
    //        }
    //	},
    //	serviceVariable1Result: function(inSender, inDeprecated) {
    //	       for(var i = 0; i < inSender.getData().length; i++){
    //               console.log(this.serviceVariable1.getItem(i).getData().name);
    //	       }
    //	},
    btnACI1Click: function(inSender) {
        this.btnACIClick(inSender);
    },
    notifConfirmOk: function(inSender, inResult) {
        console.log(this.svCashPosition.input.getData().form.cashpos);
        this.svCashPosition.update();
    },
    dlgCashPosClose: function(inSender, inWhy) {
		this.countPanel.clearData();
	},
	btnViewRemarksClick: function(inSender) {
        this.lgTxtRemarks.setDataValue(this.cashOutGrid.selectedItem.getData().remarks);
		this.lgTxtRemarks.setReadonly(true);
        this.btnOK.setShowing(false);
        this.dlgDecline.show();
	},
	btnCposDeclineClick: function(inSender) {
	    this.lgTxtRemarks.setReadonly(false);
        this.btnOK.setShowing(true);
        this.lgTxtRemarks.clear();
        this.dlgDecline.show();
	},
	svUnitBalance1Result: function(inSender, inDeprecated) {
	  console.log(inSender.getData());
	},
  cpDestinationChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		if(this.dlgCashPos.title == "Cash In"){
		    this.svUnitBalance1.update();
        }
	},
	_end: 0
});