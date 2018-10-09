dojo.declare("Login", wm.Page, {
    "preferredDevice": "desktop",
    start: function() {
        this.svGetUserAgreeMessage.update();
        this.hashInput.setDataValue(window.location.hash);
        dojo.connect(this.newPass.domNode, "onkeyup", this, "gotKeyUp");
    },

    onLoginSuccess: function() {
        this.svSuccess.update();
    },
    loginFailed: function(inResponse) {
        this.svInvalidCount.update();
    },

    svForceLogoutResult: function(inSender, inDeprecated) {
        var result = inSender.getData().dataValue;
        if (result === "Removed token") {
            this.loadingDialog.show();
            this.svSuccess.update();
        } else {
            this.loadingDialog.hide();
            this.dlgExistingSession.hide();
            this.app.alert("Cannot Log out User.");
        }
    },
    svUserStatusResult: function(inSender, inDeprecated) {
        var flag = inSender.getData().flag;
        var errorMessage = inSender.getData().errorMessage;
        console.log("User status >> "+flag);
        if (flag == "valid") {
            this.userAgreementDialog.show();
        } else if (flag == "invalid") {
            this.loginErrorMsg.setCaption(errorMessage);
            this.usernameInput.focus();
        } else if (flag == "changePass") {
            this.changePassDialog.show();
        } else if (flag == "passExpWarning") {
            this.labelPasswordExpire.setCaption(errorMessage);
            this.dlgPasswordExpire.show();
        } else if ("existingSession") {
            this.userAgreementDialog.show();
        } else {
            this.loginErrorMsg.setCaption("Invalid username, password or brid.");
            this.usernameInput.focus();
        }
    },

    usernameInputEnterKeyPress: function(inSender) {
        this.passwordInput.focus();
    },
    //password strength meter
    gotKeyUp: function(e) {
        var pass = this.newPass.getDataValue();
    },

    scorePassword: function(pass) {
        var score = 0;
        if (!pass) return score;

        // award every unique letter until 5 repetitions
        var letters = new Object();
        for (var i = 0; i < pass.length; i++) {
            letters[pass[i]] = (letters[pass[i]] || 0) + 1;
            score += 5.0 / letters[pass[i]];
        }

        // bonus points for mixing it up
        var variations = {
            digits: /\d/.test(pass),
            lower: /[a-z]/.test(pass),
            upper: /[A-Z]/.test(pass),
            nonWords: /\W/.test(pass),
        }

        variationCount = 0;
        for (var check in variations) {
            variationCount += (variations[check] == true) ? 1 : 0;
        }
        score += (variationCount - 1) * 10;

        return parseInt(score);
    },
    newPassChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        var score = this.scorePassword(inDataValue);
        if (score > 80) {
            this.label3.setCaption("<font color = #008000><b>Strong</b>");
        }
        else if (score > 60) {
            this.label3.setCaption("<font color = #FF4500><b>Good</b>");
        }
        else if (score >= 30) {
            this.label3.setCaption("<font color = #FF0000><b>Weak</b>");
        }
        else if (score = 0) {
            this.label3.setCaption("<font color = #FF0000><b>Weak</b>");
        } else {
            this.label3.setCaption("<font color = #FF0000><b>Weak</b>");
        }
    },
    text3Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (this.newPass.getDataValue() != this.text3.getDataValue()) {
            this.lblNotMatch.setCaption("Password mismatch.");
        } else if (this.newPass.getDataValue() == this.text3.getDataValue()) {
            this.lblNotMatch.setCaption("");
        }
    },
    changePassDialogShow: function(inSender) {
        this.oldPass.focus();
    },
    button3Click: function(inSender) {
        if (this.newPass.getDataValue() == null || this.text3.getDataValue() == null) {
            app.alert("Password cannot be empty!");
        } else if (this.newPass.getDataValue() == this.text3.getDataValue()) {
            this.svValidatePass.update();
        }
    },


    btnCloseRequestDlgClick1: function(inSender) {
        this.containerWidget3.clearData();
    },
    btnLoginClick: function(inSender) {
//        app.alert("ad");;
        var username = this.usernameInput.getDataValue();
//        var bridtype = this.bridInput.getDataValue();
        var password = this.passwordInput.getDataValue();
        var loginType = this.selectLoginType.getDataValue();
        if (username == null || password == null) {
            this.loginErrorMsg.setCaption("Please fill up required fields.");
            this.usernameInput.focus();
        } else {
            this.loginErrorMsg.setCaption("");
            if (loginType == "AD") {
                this.adLogin(); //Custom Script
            } else if (loginType == "NONAD") {
//                app.alert("dd");
                console.log("NONAD>>>");
                this.dbLogin();
            } else {
                this.loginErrorMsg.setCaption("Please select login type!");
                this.selectLoginType.focus();
            }
        }
        dojo.cookie("user", this.usernameInput.getDataValue(), {
            expires: 365
        });
    },


    dbLogin: function() {
        this.svEncryption.update();
        this.svUserStatus.update();
    },
    adLogin: function() {
        this.svEncryption.update();
        this.svAuthenticateAD.update();
    },

    svAuthenticateADResult: function(inSender, inDeprecated) {
        var result = inSender.getData().dataValue;
        if (result === this.passwordInput.getDataValue()) {
            this.proceedADLogin(result);
        } else {
            this.loginFailedAD(result);
            this.loadingDialog.hide();
        }
    },

    proceedADLogin: function(token) {
        this.passwordInput.setDataValue(token);
        this.svUserStatus.update();
    },

    loginFailedAD: function(message) {
        this.loginErrorMsg.setCaption(message);
        this.usernameInput.focus();
    },
    btnAgreeUserAgreementClick2: function(inSender) {
        var flag = this.svUserStatus.getData().flag;
        if (flag == "existingSession") {
            this.dlgExistingSession.show();
        } else {
            this.loginVariable1.update();;

        }
    },
    svValidatePassResult: function(inSender, inDeprecated) {
		var flag = inSender.getData().flag;
        var errorMessage = inSender.getData().errorMessage;
        if (flag !== "success") {
            app.alert(errorMessage);
            this.newPass.clear();
            this.text3.clear();
            this.label3.setCaption("");
        } else {
            this.svChangePass.update();
        }
	},
	svChangePassResult: function(inSender, inDeprecated) {
		if (this.svChangePass.getData().dataValue == "success") {
            this.passwordInput.clear();
            this.changePassDialog.hide();
            app.alert("Password succesfully changed!");
        }else{
            app.alert("Failed!");
        }
	},
	svRequestPasswordRequestResult: function(inSender, inDeprecated) {
		var resultFlag = inSender.getData().flag;
        var resultErrmsg = inSender.getData().errorMessage;
        if (resultFlag == "failed") {
            this.label10.hide();
            this.label11.show();
            this.label12.hide();
            this.label11.setCaption(resultErrmsg);
        } else if (resultFlag == "success") {
            this.btnSubmitRequest.hide();
            this.label10.hide();
            this.label11.hide();
            this.label12.show();
            this.label12.setCaption(resultErrmsg);
        }
	},
	btnCloseChangePassClick: function(inSender) {
	  this.button3Click(inSender);
	},
    svEncryptionResult: function(inSender, inDeprecated) {
	    console.log("Encryption >> "+inSender.getData().dataValue);	
	},
	_end: 0
});