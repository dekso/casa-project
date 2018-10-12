dojo.declare("CSR_OPENACCT_TD", wm.Page, {
    start: function() {
        this.svCurrency.update();
        this.svOwnershipType.update();
        this.svProdGroup.update();
        this.svSpecialInstr.update();
        this.svSoaDispo.update();
        this.svDeliveryDispo.update();
        //this.svProdList.update();
        //this.svProductListFull.update();
        this.pnlNewTimeDepAcct.setValue("showing", false);
        this.pnlNewSavDepAcct.setValue("showing", false);
        this.pnlFileup.setValue("showing", false);
        this.pnlButton.setValue("showing", false);
//        this.fAccountno.setValue("showing", false);
        this.fAccountnoPanel.setShowing(false);
        this.fSOADispo.setShowing(false);
        this.fSpecialInstr.setValue("showing", false);
        this.varInit.setValue("dataValue", false);
        this.btnContinue.setValue("showing", true);
        this.fSpecialInstr.setDataValue("TD01");
        this.slcPayMode.setDataValue("1");
    },
    "preferredDevice": "desktop",
    btnContinueClick: function(inSender) {
        app.confirm("Proceed to open new account?", false, dojo.hitch(this, function() {
            this.pnlCustDet.setValue("showing", false);
            this.varInit.setValue("dataValue", true);
            this.pnlButton.setValue("showing", true);
            this.fBkdt.setDataValue(new Date());
            this.varInit.setValue("dataValue", true);
            this.fTerm.setDataValue(this.acctProdType.selectedItem.getData().minterm);
            if (this.acctProdGroup.getDataValue() == "10") {
                this.pnlNewSavDepAcct.setValue("showing", true);
                this.label4.setCaption("SETUP NEW CURRENT DEPOSIT ACCOUNT");
                this.submitSA();
                this.pnlFileup.setValue("showing", true);
                this.fSOADispo.setShowing(true);
            } else if (this.acctProdGroup.getDataValue() == "20") {
                this.pnlNewSavDepAcct.setValue("showing", true);
                this.label4.setCaption("SETUP NEW SAVINGS DEPOSIT ACCOUNT");
                this.submitSA();
                this.pnlFileup.setValue("showing", true);
            } else if (this.acctProdGroup.getDataValue() == "30") {

            } else if (this.acctProdGroup.getDataValue() == "40") {
                this.pnlNewTimeDepAcct.setValue("showing", true);
                this.label4.setCaption("SETUP NEW TIME DEPOSIT ACCOUNT");
                this.pnlFileup.setValue("showing", true);
                this.fSpecialInstr.setValue("showing", true);
            }
            if (this.acctProdGroup.getDataValue() == "30" || (this.acctProdType.selectedItem.getData().ataind == true || this.acctProdType.selectedItem.getData().ataind == "1")) {
//                this.fAccountno.setValue("showing", true);
                this.fAccountnoPanel.setShowing(true);
            } else {
//                this.fAccountno.setValue("showing", false);
                this.fAccountnoPanel.setShowing(false);
            }
        }), dojo.hitch(this, function() {}));
        //app.alert("HERE");
//        this.svCheckProdMatrix.update();
    },
    notifCreateSuccessOk: function(inSender, inResult) {
        this.pnlNewTimeDepAcct.clearData();
        this.pnlNewSavDepAcct.clearData();
        this.pnlCustDet.clearData();
        wm.Page.getPage("Main").pageContainer1.setPageName("");
    },
    btnCancelClick: function(inSender) {
        this.pnlCustDet.clearData();
        this.pnlNewTimeDepAcct.clearData();
        this.pnlNewSavDepAcct.clearData();
        this.fAcctFullname.clear();
        this.label4.setCaption("SETUP NEW ACCOUNT");
        this.pnlCustDet.setValue("showing", true);
        this.pnlNewTimeDepAcct.setValue("showing", false);
        this.pnlNewSavDepAcct.setValue("showing", false);
        this.pnlButton.setValue("showing", false);
        this.pnlFileup.setValue("showing", false);
        this.varSigcard.setValue("dataValue", 0);
        this.btnViewSigcard.setDisabled(true);
        this.svCheckMember.setData(null);
        this.varCIFList.clearData();
//        this.fAccountno.setValue("showing", false);
        this.fAccountnoPanel.setShowing(false);
        this.fSOADispo.setShowing(false);
    },
    btnHomeClick: function(inSender) {
        this.pnlCustDet.clearData();
        this.pnlNewTimeDepAcct.clearData();
        this.pnlNewSavDepAcct.clearData();
        wm.Page.getPage("Main").pageContainer1.setPageName("");
    },
    computeDtTerm: function() {
        //		var dt = new Date(this.fBkdt.getDataValue());
        //        this.fMatdt.setDataValue(dt.setDay(dt.getDay()+this.fTerm.getDataValue()));
//        this.lblMatResult.setCaption("");
        this.lblTermResult.setCaption("");
        if(!this.fTerm.getInvalid()){
            if (this.varInit.getValue("dataValue")) {
            var date = new Date(this.fBkdt.getDataValue());
            var term = this.fTerm.getDataValue();
            var newdate = new Date(date);
            newdate.setDate(newdate.getDate() + this.fTerm.getDataValue());
            while (Boolean(this.svListHolidays.getData().find(res => new Date(res.holDate).getTime() === newdate.getTime()))
                || (newdate.getDay() === 0 ) || (newdate.getDay() === 6 )) {
                    newdate.setDate(newdate.getDate() + 1);
                    term = term + 1;
//                    this.lblMatResult.setCaption("<font color='blue'>Maturity falls on a weekend or holiday. Moved to nearest work day.");
                }
                
                this.fMatdt.setDataValue(newdate);
                this.fTerm.setDataValue(term);
            }
        }else{
            this.lblTermResult.setCaption("<font color='red'>Term value should not fall below " + this.acctProdType.selectedItem.getData().minterm + ".");
        }
    },
    acctCIFIDFocus: function(inSender) {
        this.acctCIFID.setValue("required", true);
        this.acctCustFullname.setValue("required", false);
        this.acctCustFullname.setDataValue("");
    },
    acctCustFullnameFocus: function(inSender) {
        this.acctCustFullname.setValue("required", true);
        this.acctCIFID.setValue("required", false);
        this.acctCIFID.setDataValue("");
    },
    acctCIFID2Focus: function(inSender) {
        //        this.acctCIFID2.setValue("required", true);
        //    	this.acctCustFullname2.setValue("required", false);
        this.acctCustFullname2.setDataValue("");
    },
    acctCustFullname2Focus: function(inSender) {
        //		this.acctCustFullname2.setValue("required", true);
        //        this.acctCIFID2.setValue("required", false);
        this.acctCIFID2.setDataValue("");
    },
    acctCIFID3Focus: function(inSender) {
        //        this.acctCIFID3.setValue("required", true);
        //        this.acctCustFullname3.setValue("required", false);
        this.acctCustFullname3.setDataValue("");
    },
    acctCustFullname3Focus: function(inSender) {
        //		this.acctCustFullname3.setValue("required", true);
        //        this.acctCIFID3.setValue("required", false);
        this.acctCIFID3.setDataValue("");
    },
    acctProdGroupChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (inDataValue != null) {
            this.svProductListFull.update();
        }
        this.acctCIFIDPanel.clearData();
        this.acctCIFIDMulti.clearData();
        this.acctAcctType.clear();
        this.fAcctFullname.clear();
    },
    btnSubmitClick: function(inSender) {
        if (this.acctProdGroup.getDataValue() == "10") {
            this.svCreateSAcct.update();
        } else if (this.acctProdGroup.getDataValue() == "20") {
            this.svCreateSAcct.update();
        } else if (this.acctProdGroup.getDataValue() == "30") {

        } else if (this.acctProdGroup.getDataValue() == "40") {
            this.svCreateTDAcct.update();
        }
    },
    svCreateTDAcctResult: function(inSender, inDeprecated) {
        console.log(inSender.getData().result);
        if (inSender.getData().result == 0) {
            app.alert("Error in creating account!");
        }else if (inSender.getData().result == 503) {
            app.alert("Host not available!");
        } else {
            this.notifCreateSuccess.input.setValue("text", "Account creation successful!<br/> Account no : <b><font color='blue'> " + inSender.getData().value);
            this.notifCreateSuccess.update();
            this.svSaveSigcard.input.setValue("acctno", inSender.getData().value);
            this.svSaveSigcard.update();
            this.svCheckProdMatrix.update();
        }
    },
    svCreateSAcctResult: function(inSender, inDeprecated) {
        if (inSender.getData().result == 0) {
            app.alert("Error in creating account!");
        } else {
            this.notifCreateSuccess.input.setValue("text", "Account creation successful!<br/> Account no : <b><font color='blue'> " + inSender.getData().value);
            this.notifCreateSuccess.update();
            this.svSaveSigcard.input.setValue("acctno", inSender.getData().value);
            this.svSaveSigcard.update();
            this.svCheckProdMatrix.update();
        }
    },

    submitTD: function() {
        if (this.fPlacementAmt.getDataValue() > 0.00 && this.fBkdt != null && this.fTerm.getDataValue() > 0 && this.varSigcard.getData().dataValue == 1
            && this.fTerm.getDataValue()>=this.acctProdType.selectedItem.getData().minterm) { //&& this.fSpecialInstr.getDataValue()!=null
            if (this.fSpecialInstr.getDataValue() == "TD02") {
                if (this.svCheckAccount.getData()!=null && this.svCheckAccount.getData().result == 1) {
                    this.btnSubmit.setDisabled(false);
                } else {
                    this.btnSubmit.setDisabled(true);
                }
            } else {
                this.btnSubmit.setDisabled(false);
            }
        } else {
            this.btnSubmit.setDisabled(true);
        }
    },

    submitSA: function() {
        if (this.fSACustName.getDataValue() != null && this.fAcctName.getDataValue() != null && this.varSigcard.getData().dataValue == 1) {
            if (this.fAccountno.getDataValue() != null && this.acctProdType.selectedItem.getData().ataind == true) {
                this.btnSubmit.setDisabled(false);
            } else if (this.fAccountno.getDataValue() == null && this.acctProdType.selectedItem.getData().ataind == true) {
                this.btnSubmit.setDisabled(true);
            } else if (this.acctProdType.selectedItem.getData().ataind == false) {
                this.btnSubmit.setDisabled(false);
            }
        } else {
            this.btnSubmit.setDisabled(true);
        }
    },

    fSACustNameFocus: function(inSender) {
        this.fSACustName.clear();
    },
    fAcctNameFocus: function(inSender) {
        this.fAcctName.clear();
    },
    svCheckMemberListResult: function(inSender, inDeprecated) {
        console.log(inSender);
        this.searchResultDialog.show();
        this.varSearchResult.setValue("dataSet", inSender.getData());
    },

    btnSearchClick: function(inSender) {
        this.varSearchNo.setValue("dataValue", 1);
        if (this.acctCIFID.getDataValue() != null) {
            this.svCheckMember.update();
        } else if (this.acctCustFullname.getDataValue() != null) {
            this.svCheckMemberList.update();
        }
    },
    btnCloseClick: function(inSender) {
        this.searchResultDialog.hide();
    },
    gridResultNameGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
        this.acctCIFID.setDataValue(rowData.cifno);
        this.svCheckMember.update();
        //        if(this.varSearchNo.getData().dataValue==1){
        //            this.acctCIFID.setDataValue(rowData.cifno);        
        //            this.svCheckMember.update();
        //        }else if(this.varSearchNo.getData().dataValue==2){
        //            this.acctCIFID2.setDataValue(rowData.cifno);        
        //            this.svCheckMember2.update();
        //        }else if(this.varSearchNo.getData().dataValue==3){
        //            this.acctCIFID3.setDataValue(rowData.cifno);        
        //            this.svCheckMember3.update();
        //        } 
        this.searchResultDialog.hide();
    },

    btnSearch2Click: function(inSender) {
        this.varSearchNo.setValue("dataValue", 2);
        if (this.acctCIFID2.getDataValue() != null) {
            this.svCheckMember2.update();
        } else if (this.acctCustFullname2.getDataValue() != null) {
            this.svCheckMemberList2.update();
        }
    },
    svCheckMemberList2Result: function(inSender, inDeprecated) {
        this.searchResultDialog.show();
        this.varSearchResult.setValue("dataSet", inSender.getData());
    },
    svCheckMemberResult: function(inSender, inDeprecated) {
        if (inSender.getData().result == 0) {
            app.toastError("Member does not exist!", 5000);
        } else {
            app.toastSuccess("Record found!", 5000);
            this.svCheckDeceased.update();
        }
        //this.acctfull();
    },
    svCheckMember2Result: function(inSender, inDeprecated) {
        if (inSender.getData().result == 0) {
            app.toastError("Member not found/exist!", 5000);
        } else {
            //this.acctCustFullname2.setDataValue(inSender.getData().)
            app.toastSuccess("Member found/exist!", 5000);
        }
        this.acctfull(inSender);
    },
    btnSearch3Click: function(inSender) {
        this.varSearchNo.setValue("dataValue", 3);
        if (this.acctCIFID3.getDataValue() != null) {
            this.svCheckMember3.update();
        } else if (this.acctCustFullname3.getDataValue() != null) {
            this.svCheckMemberList3.update();
        }
    },
    svCheckMemberList3Result: function(inSender, inDeprecated) {
        this.searchResultDialog.show();
        this.varSearchResult.setValue("dataSet", inSender.getData());
    },
    svCheckMember3Result: function(inSender, inDeprecated) {
        if (inSender.getData().result == 0) {
            app.toastError("Member not found/exist!", 5000);
        } else {
            //this.acctCustFullname2.setDataValue(inSender.getData().)
            app.toastSuccess("Member found/exist!", 5000);
        }
        this.acctfull();
    },
    acctfull: function() {
        var acctname;
        //        console.log("HERE");
        for (var i = 0; i < this.varCIFList.getCount(); i++) {
            if (i == 0) {
                acctname = this.varCIFList.getItem(i).getData().cifname;
            } else {
                acctname = acctname + " " + this.acctAcctType.getDisplayValue() + " " + this.varCIFList.getItem(i).getData().cifname;
            }
        }
        this.fAcctFullname.setDataValue(acctname);
    },
    acctAcctTypeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.varCIFList.clearData();
        this.acctCIFIDPanel.clearData();
        if (this.svCheckMember.getData() != null) {
            //            console.log("1>>");
            if (inDataValue == "0") {
                this.varCIFList.clearData();
                if (this.fAcctName.getDataValue() != null && this.acctCIFID.getDataValue() != null) {
                    this.varCIFList.addItem(this.varCIF.getData(), this.varCIFList.getCount() + 1);
                    this.acctfull();
                }
            }
        }
        this.acctfull();
//        if (this.acctAcctType.getDataValue() > 0) {
//            this.acctCIFIDMulti.setHeight(62);
//        } else {
//            this.acctCIFIDMulti.setHeight(32);
//        }
    },

    dojoFileUploadSuccess: function(inSender, fileList) {
        this.lblUpload.setCaption("<font color='green'>Sigcard Uploaded!");
        this.varSigcard.setValue("dataValue", 1);
        this.submitValidation();
        this.btnViewSigcard.setDisabled(false);
    },
    dojoFileUploadError: function(inSender, inErrorMsg) {
        this.lblUpload.setCaption("<font color='red'>Invalid file format!");
        this.varSigcard.setValue("dataValue", 0);
        this.submitValidation();
    },
    submitValidation: function() {
        if (this.acctProdGroup.getDataValue() == "10") {
            this.submitSA();
        } else if (this.acctProdGroup.getDataValue() == "20") {
            this.submitSA();
        } else if (this.acctProdGroup.getDataValue() == "30") {

        } else if (this.acctProdGroup.getDataValue() == "40") {
            this.submitTD();
        }
    },
    btnAddCIFClick: function(inSender) {
//        console.log(this.acctAcctType.getDataValue().id);
        if (this.acctAcctType.getDataValue() == 0) {
            this.fAcctFullname.clear();
            this.varCIFList.clearData();
        }
        var chk = true;
        for (var i = 0; i < this.varCIFList.getCount(); i++) {
            if (this.varCIFList.getItem(i).getData().cifno == this.varCIF.getData().cifno) {
                chk = false;
            }
        }
        if (chk) {
            this.varCIFList.addItem(this.varCIF.getData(), this.varCIFList.getCount() + 1);
            this.acctfull();
        } else {
            app.alert("Account already in use!");
        }
    },
    btnCloseCIFClick: function(inSender) {
        this.cifListDialog.hide();
    },
    btnCIFListClick: function(inSender) {
        this.cifListDialog.show();
    },
    ciflistGridGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
        this.ciflistGrid.deleteRow(rowIndex);
        this.acctfull();
    },
    fAccountnoChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (this.acctProdGroup.getDataValue() == "10" || this.acctProdGroup.getDataValue() == "20") {
            this.submitSA();
        } else if (this.acctProdGroup.getDataValue() == "30" || this.acctProdGroup.getDataValue() == "40") {
            this.submitTD();
        }
    },
    fCreditAccountChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.svCheckAccount.update();
    },
    fSpecialInstrChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.submitTD();
    },
    svCheckDeceasedResult: function(inSender, inDeprecated) {
        if(inSender.getData() != null && inSender.getData().deceasedflag == true){
         this.notifDeceased.update();   
        }else{
            this.svCheckMishandled.update();
        }
	},
	notifDeceasedOk: function(inSender, inResult) {
		wm.Page.getPage("Main").pageContainer1.forceReloadPage();
	},
    svCheckAccountResult: function(inSender, inDeprecated) {
		if(inSender.getData().result==1){
		    this.lblAccountResult.setCaption("<font color='green'> Account number found!");
        }else{
            this.lblAccountResult.setCaption("<font color='red'> Account does not exist!");
        }
        this.submitTD();
	},
	slcIntFreqChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		this.submitTD();
	},
	svCheckProdMatrixResult: function(inSender, inDeprecated) {
        app.toastWarning("The required initial deposit amount for this product type is " +inSender.getData().reqinitialdepamt+".", 5000);
	},
	btnSearch1Click: function(inSender) {
	  this.svCheckAccountATA.update();
	},
    svCheckAccountATAResult: function(inSender, inDeprecated) {
	  if(inSender.getData().result=="0"){
            //app.alert("Account no does not exist!");   
            this.btnSubmit.setDisabled(true);
            this.lblResult.setCaption("<b><font color='red'>Account No. doesn't exist!");
    	}else if(inSender.getData().result=="1"){
//            app.alert("Account found!");
            this.lblResult.setCaption("<b><font color='blue'>Account number found!");
            this.btnSubmit.setDisabled(false);
    	}else if(inSender.getData().result=="503"){
            this.lblResult.setCaption("<b><font color='red'>Host not available!");
            this.btnSubmit.setDisabled(true);
    
    	}
	},
	notifMishandledCancel: function(inSender) {
		this.svCheckMember.clearData();
        this.acctCIFID.setDataValue("");
        this.varCIFList.clearData();
	},
	svCheckMishandledResult: function(inSender, inDeprecated) {
        if(inSender.getData().dataValue>0){
        var chk = true;
		 for (var i = 0; i < this.varCIFList.getCount(); i++) {
             console.log(this.varCIFList.getItem(i).getData().cifno);
            if (this.varCIFList.getItem(i).getData().cifno == this.varCIF.getData().cifno) {
                chk = false;
            }
        }
        console.log(chk);
        if(chk){
           this.notifMishandled.update(); 
            }
        }else{
            this.btnAddCIF.click();
        }
	},
	notifMishandledOk: function(inSender, inResult) {
		this.btnAddCIF.click();
	},
	
    acctSolOfficerFocus: function(inSender) {
	  this.acctCIFIDFocus(inSender);
	},
    acctRefOfficerFocus: function(inSender) {
	  this.acctSolOfficerFocus(inSender);
	},
    acctChannelFocus: function(inSender) {
	  this.acctRefOfficerFocus(inSender);
	},


	svViewSigcardResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="0"){
            app.alert("Sigcard not found!");    
    	}else{
            this.ImgSigcard.setSource(inSender.getData().dataValue);
            this.desViewSigcard.show();
		}
	},
	svProductListFullResult: function(inSender, inDeprecated) {
		console.log(inSender);
	},
	_end: 0
});