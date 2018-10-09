dojo.declare("CSR_OPENACCT_TD_BACKUP", wm.Page, {
    start: function() {
		this.svCurrency.update();
        this.svOwnershipType.update();
        this.svProdGroup.update();
        //this.svProdList.update();
        //this.svProductListFull.update();
        this.pnlNewTimeDepAcct.setValue("showing", false);
        this.pnlNewSavDepAcct.setValue("showing", false);
        this.pnlFileup.setValue("showing", false);
        this.pnlButton.setValue("showing", false);
	},
	"preferredDevice": "desktop",
	btnContinueClick: function(inSender) {
        app.confirm("Proceed to open new account?", false, 
                  dojo.hitch(this, function() {
                     this.pnlCustDet.setValue("showing", false);
                     this.pnlButton.setValue("showing", true);
                     if(this.acctProdGroup.getDataValue()=="10"){
                        this.pnlNewSavDepAcct.setValue("showing", true);
                        this.label4.setCaption("SETUP NEW CURRENT DEPOSIT ACCOUNT");
                        this.submitSA();
                        this.pnlFileup.setValue("showing", true);
                     }else if(this.acctProdGroup.getDataValue()=="20"){
                        this.pnlNewSavDepAcct.setValue("showing", true);
                        this.label4.setCaption("SETUP NEW SAVINGS DEPOSIT ACCOUNT");
                        this.submitSA();
                        this.pnlFileup.setValue("showing", true);
                     }else if(this.acctProdGroup.getDataValue()=="30"){
                            
                     }else if(this.acctProdGroup.getDataValue()=="40"){
                        this.pnlNewTimeDepAcct.setValue("showing", true);
                        this.label4.setCaption("SETUP NEW TIME DEPOSIT ACCOUNT");
                        this.pnlFileup.setValue("showing", true);
                     }
                    }),
                  dojo.hitch(this, function() {}));
        //app.alert("HERE");
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
        this.label4.setCaption("SETUP NEW ACCOUNT");
        this.pnlCustDet.setValue("showing", true);
        this.pnlNewTimeDepAcct.setValue("showing", false);
        this.pnlNewSavDepAcct.setValue("showing", false);
        this.pnlButton.setValue("showing", false);
        this.pnlFileup.setValue("showing", false);
        this.varSigcard.setValue("dataValue", 0);
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
        var date = new Date(this.fBkdt.getDataValue());
        var newdate = new Date(date);
        newdate.setDate(newdate.getDate() + this.fTerm.getDataValue());    
        this.fMatdt.setDataValue(newdate);
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
		if(inDataValue!=null){
            this.svProductListFull.update();    
		}
	},
    btnSubmitClick: function(inSender) {
	    if(this.acctProdGroup.getDataValue()=="10"){
            this.svCreateSAcct.update();    
	    }else if(this.acctProdGroup.getDataValue()=="20"){
            this.svCreateSAcct.update();    
        }else if(this.acctProdGroup.getDataValue()=="30"){
                
        }else if(this.acctProdGroup.getDataValue()=="40"){
            this.svCreateTDAcct.update();
        }
	},
	svCreateTDAcctResult: function(inSender, inDeprecated) {
		if(inSender.getData().result==0){
            app.alert("Error in creating account!");       
        }else{
            this.notifCreateSuccess.input.setValue("text", 
            "Account creation successful!<br/> Account no : <b><font color='blue'> "+inSender.getData().value);
            this.notifCreateSuccess.update();
            this.svSaveSigcard.input.setValue("cifno", inSender.getData().value);
            this.svSaveSigcard.update();
    	}
	},
	svCreateSAcctResult: function(inSender, inDeprecated) {
		if(inSender.getData().result==0){
            app.alert("Error in creating account!");       
        }else{
            this.notifCreateSuccess.input.setValue("text", 
            "Account creation successful!<br/> Account no : <b><font color='blue'> "+inSender.getData().value);
            this.notifCreateSuccess.update();
            this.svSaveSigcard.input.setValue("cifno", inSender.getData().value);
            this.svSaveSigcard.update();
        }
	},

    submitTD: function() {
        if(this.fPlacementAmt.getDataValue() > 0.00 && this.fBkdt!=null && this.fTerm.getDataValue() > 0
        && this.varSigcard.getData().dataValue==1){
            this.btnSubmit.setDisabled(false);    
        } else {
            this.btnSubmit.setDisabled(true);
        }
    },
    
    submitSA: function() {
        if(this.fSACustName.getDataValue()!= null && this.fAcctName.getDataValue()!= null 
        && this.varSigcard.getData().dataValue==1){
            this.btnSubmit.setDisabled(false);    
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
	    this.searchResultDialog.show();
        this.varSearchResult.setValue("dataSet", inSender.getData());
	},

	btnSearchClick: function(inSender) {
        this.varSearchNo.setValue("dataValue",1);
		if(this.acctCIFID.getDataValue()!=null){
            this.svCheckMember.update();    
		} else if(this.acctCustFullname.getDataValue()!=null){
            this.svCheckMemberList.update();
		}
	},
	btnCloseClick: function(inSender) {
		this.searchResultDialog.hide();
	},
	gridResultNameGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
        if(this.varSearchNo.getData().dataValue==1){
            this.acctCIFID.setDataValue(rowData.cifno);        
            this.svCheckMember.update();
        }else if(this.varSearchNo.getData().dataValue==2){
            this.acctCIFID2.setDataValue(rowData.cifno);        
            this.svCheckMember2.update();
        }else if(this.varSearchNo.getData().dataValue==3){
            this.acctCIFID3.setDataValue(rowData.cifno);        
            this.svCheckMember3.update();
        } 
        this.searchResultDialog.hide();
	},

    btnSearch2Click: function(inSender) {
	    this.varSearchNo.setValue("dataValue",2);   
    	if(this.acctCIFID2.getDataValue()!=null){
            this.svCheckMember2.update();    
		} else if(this.acctCustFullname2.getDataValue()!=null){
            this.svCheckMemberList2.update();
		}
	},
	svCheckMemberList2Result: function(inSender, inDeprecated) {
		this.searchResultDialog.show();
        this.varSearchResult.setValue("dataSet", inSender.getData());
	},
    svCheckMemberResult: function(inSender, inDeprecated) {
		if(inSender.getData().result==0){
            app.toastError("Member not found/exist!", 5000);       
    	}else{
            app.toastSuccess("Member found/exist!", 5000);  
		}
        this.acctfull();
	},
	svCheckMember2Result: function(inSender, inDeprecated) {
		if(inSender.getData().result==0){
            app.toastError("Member not found/exist!", 5000);       
        }else{
            //this.acctCustFullname2.setDataValue(inSender.getData().)
            app.toastSuccess("Member found/exist!", 5000);
		}
        this.acctfull(inSender);
	},
	btnSearch3Click: function(inSender) {
		this.varSearchNo.setValue("dataValue",3);   
        if(this.acctCIFID3.getDataValue()!=null){
            this.svCheckMember3.update();    
		} else if(this.acctCustFullname3.getDataValue()!=null){
            this.svCheckMemberList3.update();
		}
	},
	svCheckMemberList3Result: function(inSender, inDeprecated) {
		this.searchResultDialog.show();
        this.varSearchResult.setValue("dataSet", inSender.getData());
	},
	svCheckMember3Result: function(inSender, inDeprecated) {
		if(inSender.getData().result==0){
            app.toastError("Member not found/exist!", 5000);       
        }else{
            //this.acctCustFullname2.setDataValue(inSender.getData().)
            app.toastSuccess("Member found/exist!", 5000);  
    	}
        this.acctfull();
	},
    acctfull: function(){
        var acctname;
        if(this.svCheckMember.getValue("result")==1){
            acctname = this.svCheckMember.getData().name;          
        }
        if(this.svCheckMember2.getValue("result")==1 && this.acctAcctType.getDataValue() > 0){
            acctname = acctname+" "+this.acctAcctType.getDisplayValue()+" "
            +this.svCheckMember2.getData().name;          
        }
        if(this.svCheckMember3.getValue("result")==1 && this.acctAcctType.getDataValue() > 0){
            acctname = acctname+" "+this.acctAcctType.getDisplayValue()+" "
            +this.svCheckMember3.getData().name;          
        }
        this.fAcctFullname.setDataValue(acctname);
    },
	acctAcctTypeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		this.acctfull();
	},

	dojoFileUploadSuccess: function(inSender, fileList) {
		this.lblUpload.setCaption("<font color='green'>Sigcard Uploaded!");
        this.varSigcard.setValue("dataValue", 1);
        this.submitValidation();
	},
	dojoFileUploadError: function(inSender, inErrorMsg) {
		this.lblUpload.setCaption("<font color='red'>Invalid file format!");
        this.varSigcard.setValue("dataValue", 0);
        this.submitValidation();
	},
    submitValidation: function(){
        if(this.acctProdGroup.getDataValue()=="10"){
            this.submitSA();    
        }else if(this.acctProdGroup.getDataValue()=="20"){
            this.submitSA();
         }else if(this.acctProdGroup.getDataValue()=="30"){
                
         }else if(this.acctProdGroup.getDataValue()=="40"){
            this.submitTD();
         }    
    },
	btnAddCIFClick: function(inSender) {
	    this.varCIFList.addItem(this.varCIF.getData(), this.varCIFList.getCount()+1);
	},
    btnCloseCIFClick: function(inSender) {
        this.cifListDialog.hide();
	},
  _end: 0
});