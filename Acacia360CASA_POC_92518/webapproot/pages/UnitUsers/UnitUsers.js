dojo.declare("UnitUsers", wm.Page, {
    start: function() {
        this.svGetSecurityParams.update();
        this.svGroupListSearch.update();
        this.svGetUserList.update();
        this.svGetCompanyListEDIT.update();
        this.svGetListOfUsers.update();
    },
    "preferredDevice": "desktop",

    svSaveUserAcctResult: function(inSender, inDeprecated) {
        if (this.svSaveUserAcct.dataValue === "Success") {
            app.toastSuccess("User Account Successfully Created!", 3000);
            this.dlgCreateUser.hide();
        } else {
            app.toastError("Error Creating User Account!", 3000);
        }
    },
    grdUserListSelectionChange: function(inSender) {

    },
    grdUserListClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        this.searchUserInDB.update();
    },
    srvcLogginRolesResult: function(inSender, inDeprecated) {
        console.log(inSender.getData());
        var allIdArray = [];
        var length = inSender.getCount();
        for (var i = 0; i < length; i++) {
            var item = inSender.getItem(i);
            var id = item.getValue("dataValue");
            allIdArray.push(id);
        }

        app.alert("ID: " + allIdArray);
    },
    srvcSaveEditedADUserAndRolesSuccess: function(inSender, inDeprecated) {
        this.editUserAndRoles.hide();
        this.svGetUserList.update();
    },

    srvcDeactivateUserResult: function(inSender, inDeprecated) {
        this.editUserAndRoles.hide();
        this.svGetUserList.update();
    },
    editUserAndRolesShow: function(inSender) {
        var isADmember = this.chkActiveDirecoryMem.getDataValue();
        if (isADmember == true) {
            // this.txtDefaultPass.hide();
            this.txtpExpiryDate.hide();
            this.txtValidDateTo.hide();
            this.txtValidDateFrom.hide();
            this.txtLastPassChange.hide();
        } else {
            // this.txtDefaultPass.show();
            this.txtpExpiryDate.show();
            this.txtValidDateTo.show();
            this.txtValidDateFrom.show();
            this.txtLastPassChange.show();
        }
    },
    createNonADUserShow: function(inSender) {
        this.editUserAndRolesShow(inSender);
    },


    button3Click: function(inSender) {
        var isADUser = this.chkActiveDirecoryMem.getDataValue();
        // var isShowing = this.txtDefaultPass.getValue("showing");
        if (isADUser == false) {
            this.srvcSaveEditedDBUser.update();
        } else if (isADUser == true) {
            this.srvcSaveEditedADUser.update();

        }
    },
    grdUserListUnitFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        if (inValue == "AL") {
            return "AUTO LOAN";
        } else if (inValue == "HL") {
            return "HOUSING LOAN";
        } else if (inValue == "BOTH") {
            return "BOTH";
        }
    },
    srvcSaveEditedDBUserResult: function(inSender, inDeprecated) {
        if (inSender.getData().dataValue == true) {
            app.toastSuccess("User Account Successfully Updated!", 5000);
        } else {
            app.toastError("Error in updating user account!", 5000);
        }
    },
    srvcSaveEditedADUserResult: function(inSender, inDeprecated) {
        if (inSender.getData().dataValue == true) {
            app.toastSuccess("User Account Successfully Updated!", 5000);
            if (this.checkbox1.getChecked() == true) {
                this.svSaveAOSequence.update();
            }
        } else {
            app.toastError("Error in updating user account!", 5000);
        }
    },
    srvcSaveUserToDbResult: function(inSender, inDeprecated) {
        var flag = inSender.getData().flag;
        var smtpFlag = inSender.getData().smtpFlag;
        if (flag == "success" && smtpFlag != "success") {
            app.alert("<b>User Account Successfully Created!<br> Email Sending failed !</b>");
        } else if (smtpFlag == "success"){
            this.svGetUserList.update();
            this.createNonADUser.hide();
            app.toastSuccess("<b>User Account Successfully Created!",5000);
        }else {
            app.toastError("Error in creating user account!", 5000);
        }
    },
    button5Click1: function(inSender) {
        this.createNonADUser.hide();
        this.svGetUserList.update();
        this.createNonADUser.clearData();
    },
    svValidateResult: function(inSender, inDeprecated) {
        var flag = inSender.getData().flag;
        var errorMessage = inSender.getData().errorMessage;
        if (flag == "failed") {
            app.alert(errorMessage);
        } else if (flag == "success") {
            this.srvcSaveUserToDb.update();
        }
    },
    txtEConfirmPassChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (this.txtENewPass.getDataValue() !== this.txtEConfirmPass.getDataValue()) {
            this.txtNotMatch.setValue("showing", true);
            this.button1.setValue("disabled", true);
        } else {
            this.txtNotMatch.setValue("showing", false);
            this.button1.setValue("disabled", false);
        }
    },

    svValidatePassResult: function(inSender, inDeprecated) {
        var flag = inSender.getData().flag;
        var errorMessage = inSender.getData().errorMessage;
        if (flag !== "success") {
            app.alert(errorMessage);
            this.containerWidget.clearData();
        } else {
            this.svChangePass.update();
        }
    },

    svChangePassResult: function(inSender, inDeprecated) {
        if (inSender.getData().dataValue == "success") {
            this.notifSuccessChangePass.update();
            this.containerWidget.clearData();
        }
    },
    notifSuccessChangePassClose: function(inSender) {
        this.dialogChangePass.hide();
        this.searchUserInDB.update();
    },
    button10Click: function(inSender) {
        this.cfgDialog.hide();
    },
    label6Click: function(inSender, inEvent) {
        this.cfgDialog.show();

/*
        var cfgidal = this.varCfgIds2.getData().cfgidal;
        var cfgidhl = this.varCfgIds2.getData().cfgidhl;
        var prmid = this.varCfgIds2.getData().prmid;
        
        if(cfgidal != undefined && cfgidhl != undefined && prmid != undefined){
            this.txtAutoCfg.setDataValue(cfgidal);
            this.txtHousingCfg.setDataValue(cfgidhl);
            this.txtPrmId.setDataValue(prmid);
        }
        
        */


    },
    txtPrmIdChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.txtPrmId.setDataValue(inDataValue.toUpperCase());
    },
    button9Click: function(inSender) {
        this.button3Click();
    },
    svEnableDeletedAcctResult: function(inSender, inDeprecated) {
        if (inSender.getData().dataValue == "success") {
            this.svFilterDeletedAcct.update();
            app.toastSuccess("User Re-Enable Successful.", 3500);
        } else {
            app.toastError("User Re-Enable Unsuccessful.", 3500);
        }
    },
    dojoGrid1GridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
        this.dojoGrid1.select(rowIndex);
        this.notReEnableAccount.update();
    },
    checkbox1Blur: function(inSender) {
        this.cfgDialog.clearData();
        var iscfgofficer = this.searchUserInDB.getData().useraccount.iscfgofficer;

        if (iscfgofficer == false || iscfgofficer == undefined) {
            this.svGenerateAOId.update();
            this.cfgDialog.show();
        }
    },
    button11Click: function(inSender) {
        var val = this.checkbox1.dataValue;
        if (val) {
            this.svGenerateAOId.update();
            this.cfgDialog.show();
        }
    },
    svGenerateAOIdSuccess: function(inSender, inDeprecated) {
        this.txtPrmId.setDataValue(this.varCfgIds2.getData().prmid);
    },
    editUserAndRolesClose: function(inSender, inWhy) {
        this.grdUserList.deselectAll();
        this.svResetPassword.clearData();
    },
    svValidateEditUserResult: function(inSender, inDeprecated) {
        var flag = inSender.getData().flag;
        var errorMessage = inSender.getData().errorMessage;
        if (flag == "failed") {
            app.alert(errorMessage);
        } else if (flag == "success") {
            this.button3Click();
        }
    },
    chkPassNvrExpChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        this.chkCNPassNvrExpChange(inSender, inDisplayValue, inDataValue, inSetByCode);
    },
    chkCNPassNvrExpireChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        var date = new Date(new Date().setDate(new Date().getDate() + this.svGetSecurityParams.getData().maxpasswordage));
        if (inDataValue == 1) {
            this.txtCNPassExpDate.clear();
            this.txtCNPassExpDate.setValue("required", false);
        } else {
            this.txtCNPassExpDate.setDataValue(date);
            this.txtCNPassExpDate.setValue("required", true);
        }
    },
    chkPassNvrExpireChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        var date = new Date(new Date().setDate(new Date().getDate() + this.svGetSecurityParams.getData().maxpasswordage));
        if (inDataValue == 1) {
            this.txtpExpiryDate.clear();
            this.txtpExpiryDate.setValue("required", false);
        } else {
            this.txtpExpiryDate.setDataValue(date);
            this.txtpExpiryDate.setValue("required", true);
        }
    },
    svResetPasswordResult: function(inSender, inDeprecated) {
        var flag = inSender.getData().flag;
        var errorMessage = inSender.getData().errorMessage;
        if (flag == "failed") {
            app.alert("Failed! Please try again.");
        } else if (flag == "success") {
            //this.editUserAndRoles.hide();
            app.alert("Password has been changed !");
        }
    },
    slcCNGroupChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (inDataValue.includes("MKTG")) {
            this.slcCNTeam.setValue("required", true);
        } else {
            this.slcCNTeam.setValue("required", false);
        }
    },
    slcGroupChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (inDataValue.includes("MKTG")) {
            this.slcTeam.setValue("required", true);
        } else {
            this.slcTeam.setValue("required", false);
        }
    },

    grdUserListGroupcodeFormat: function(inValue, rowId, cellId, cellField, cellObj, rowObj) {
        var length = this.grdUserList.getRowCount();
        for (var i = 0; i < length; i++) {
            var item = rowObj.groupcode;
            if (this.svGroupListSearch.getItem(i).getValue("groupcode") === item) {
                return this.svGroupListSearch.getItem(i).getValue("groupname");
            }
        }
    },
    txtCNValidDateToChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        var d1 = new Date(inDataValue).setHours(0, 0, 0, 0);
        var d2 = new Date().setHours(0, 0, 0, 0);
        if (d1 >= d2) {
            this.chkCNIsActive.setValue("dataValue", true);
        } else {
            this.chkCNIsActive.setValue("dataValue", false);
        }
    },
    txtDlgValidDateToChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        var d1 = new Date(inDataValue).setHours(0, 0, 0, 0);
        var d2 = new Date().setHours(0, 0, 0, 0);
        if (d1 >= d2) {
            this.chkIsActive.setValue("dataValue", true);
        } else {
            this.chkIsActive.setValue("dataValue", false);
        }
    },
    svValidateMaxNoOfUserADDResult: function(inSender, inDeprecated) {
        var flag = inSender.getData().dataValue;
        if (flag == true) {
            app.alert("<b>The maximum number of active licensed users has been reached.");
        } else {
            this.createNonADUser.show();
        }
    },
    svValidateMaxNoOfUserENABLEResult: function(inSender, inDeprecated) {
        var flag = inSender.getData().dataValue;
        if (flag == true) {
            app.alert("<b>The maximum number of active licensed users has been reached.");
        } else {
            this.dojoGrid1GridButtonClick();
        }
    },
    svResendPasswordResetResult: function(inSender, inDeprecated) {
        var flag = inSender.getData().dataValue;
        if (flag == "success") {
            app.alert("The new password has been sent successfully !");
        } else {
            app.alert("Failed! Please try again.");
        }
    },
    svResendPasswordUserCreationResult: function(inSender, inDeprecated) {
	  var flag = inSender.getData().dataValue;
        if (flag == "success") {
            app.alert("The password has been sent successfully !");
        } else {
            app.alert("Failed! Please try again.");
        }
	},
  createNonADUserClose: function(inSender, inWhy) {
        inSender.clearData();
		var maxPasswordAge = new Date(new Date().setDate(new Date().getDate()+ this.svGetSecurityParams.getData().maxpasswordage));
        var validityFrom = new Date();
        var validityTo = new Date(new Date().setDate(new Date().getDate()+ this.svGetSecurityParams.getData().validityperiodindays));
        this.txtCNPassExpDate.setDataValue(maxPasswordAge);
        this.txtCNValidDateFrom.setDataValue(validityFrom);
        this.txtCNValidDateTo.setDataValue(validityTo);
        this.chkCNIsActive.setChecked(true);
        this.chkCNChangePass.setChecked(true);
        
        this.slcCNCompany.setDataValue("110");
        this.slcCNBranch.setDataValue("001");
	},
	
	_end: 0
});