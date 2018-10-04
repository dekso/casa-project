var logoutNow = function() {
    window.onbeforeunload = null;
    main.svRemoveToken.update();
    wm.logout();
};
var id;
var logoutTimeout;
var monitor = new Monitor(840000, []); //180 000 =3 minutes. 
dojo.declare("Main", wm.Page, {
    start: function() {
        this.svMenu.update();
        this.menuPanel.setShowing(false);
        this.svUserSessionCheck.update();
        //idle function
        dojo.ready(function() {
            function onActive(args) {
                monitor.clearTimers();
            }

            function onIdle() {
                // console.debug("idle...logging out"); 
                logoutTimeout = setTimeout(logoutNow, 60000);
                main.idleDialog.show();
            }
            dojo.subscribe("state:active", null, onActive);
            dojo.subscribe("state:idle", null, onIdle);
        });
    },
    "preferredDevice": "desktop",
    //idle dialog
    YesIdleBtnClick: function(inSender) {
        clearTimeout(logoutTimeout);
        monitor.clearTimers();
        this.idleDialog.hide();
        ////execute here some query for refresh server for not go to session expiration     	
    },
    NoIdleDialogClick: function(inSender) {
        window.onbeforeunload = null;
        main.svRemoveToken.update();
        wm.logout();
    },
    idleDialogShow: function(inSender) {
        try {
            var counter = 60;
            id = setInterval(function() {
                counter--;
                if (counter < 0) {
                    clearInterval(id);
                } else {
                    main.countdownlabel.setCaption("Your session will close in " + counter + " seconds");
                }
            }, 1000);
        } catch (e) {
            console.log(e.name, e.message);
        }
    },
    idleDialogClose: function(inSender, inWhy) {
        clearInterval(id);
        this.countdownlabel.setCaption("Your session will close in 60 seconds");
    },

    logoutbuttonClick: function(inSender) {
        window.onbeforeunload = null;
        wm.logout();
        this.svRemoveToken.update();
    },
    timerTimerFire: function(inSender) {
        this.mainDate.setDataValue(new Date());
    },
    svUserSessionCheckResult: function(inSender, inDeprecated) {
		var flag = inSender.getData().dataValue;
        if(flag == false|| flag == undefined || flag == null){
            window.onbeforeunload = null;
            wm.logout();
        }
	},
    
    //Menu Access Rights
	svMenuResult: function(inSender, inDeprecated) {
        //Home
        var home = inSender.getData().home;
        //Customer Inquiry
        var customerInquiry = inSender.getData().customerInquiry;
        this.menuCustInquiry.setShowing(customerInquiry);
        //Customer Setup
        var customerSetup = inSender.getData().customerSetup;
//        this.menuCustSetup.setShowing(customerSetup);
        //Customer Setup Individual
        var custSetupIndiv = inSender.getData().custSetupIndiv;
        this.menuCustSetup.setItemShowing("Individual", custSetupIndiv);
        //Customer Setup Corporate
        var custSetupCorp = inSender.getData().custSetupCorp;
        this.menuCustSetup.setItemShowing("Corporate", custSetupCorp);
        //Assignments
        var assignments = inSender.getData().assignments;
//        this.menuAssgn.setShowing(assignments);
        //Assignments My Assingments
        var myAssignments = inSender.getData().myAssignments;
        this.menuAssgn.setItemShowing("My Assignments", myAssignments);
        //Assignments Manual Assingments
        var manualAssignments = inSender.getData().manualAssignments;
        this.menuAssgn.setItemShowing("Manual Assignments", manualAssignments);
        //Other CIF Transactions
        var otherCIFTx = inSender.getData().otherCIFTx;
//        this.menuOtherCIFTxn.setShowing(otherCIFTx);
        //Other CIF Transactions Change CIF
        var changeCIF = inSender.getData().changeCIF;
        this.menuOtherCIFTxn.setItemShowing("Change of Customer Information", changeCIF);
        //Other CIF Transactions Cancel CIF
        var cancelCIF = inSender.getData().cancelCIF;
        this.menuOtherCIFTxn.setItemShowing("Cancellation of CIF", cancelCIF);
        //Other CIF Transactions Merge Duplicate CIF
        var mergeDuplicateCIF = inSender.getData().mergeDuplicateCIF;
        this.menuOtherCIFTxn.setItemShowing("Merging of Duplicate CIF", mergeDuplicateCIF);
        //AMLA
        var amla = inSender.getData().amla;
//        this.menuAMLA.setShowing(amla);
        //AMLA Inquiry
        var amlaInquiry = inSender.getData().amlaInquiry;
        this.menuAMLA.setItemShowing("Inquiry", amlaInquiry);
        //AMLA For Approval
        var amlaForApproval = inSender.getData().amlaForApproval;
        this.menuAMLA.setItemShowing("For Approval", amlaForApproval);
        //AMLA File Upload
        var amlaFileUpload = inSender.getData().amlaFileUpload;
        this.menuAMLA.setItemShowing("File Upload", amlaFileUpload);
        //Blacklist
        var blacklist = inSender.getData().blacklist;
//        this.menuBlklist.setShowing(blacklist);
        //Blacklist Inquiry
        var blacklistInquiry = inSender.getData().blacklistInquiry;
        this.menuBlklist.setItemShowing("Inquiry", blacklistInquiry);
        //Blacklist For Approval
        var blacklistForApproval = inSender.getData().blacklistForApproval;
        this.menuBlklist.setItemShowing("For Approval", blacklistForApproval);
        //Blacklist File Upload 
        var blacklistFileUpload = inSender.getData().blacklistFileUpload;
        this.menuBlklist.setItemShowing("File Upload", blacklistFileUpload);
        //Other Utilities
        var otherUtilities = inSender.getData().otherUtilities;
//        this.menuOtherUtil.setShowing(otherUtilities);
        //Other Utilities Document Maintenace
        var documentMaintenace = inSender.getData().documentMaintenace;
        this.menuOtherUtil.setItemShowing("Document Maintenance", documentMaintenace);
        //Other Utilities Accredited Trade Partners
        var accreditedTrade = inSender.getData().accreditedTrade;
        this.menuOtherUtil.setItemShowing("Accredited Trade Partners", accreditedTrade);
        //Reports
        var reports = inSender.getData().reports;
//        this.menuRpts.setShowing(reports);
        //System Administrator
        var sysAdmin = inSender.getData().sysAdmin;
//        this.menuSysAdmin.setShowing(sysAdmin);
        //System Administrator System Parameters
        var sysParams = inSender.getData().sysParams;
        this.menuSysAdmin.setItemShowing("System Parameters", sysParams);
        //System Administrator Document Checklist
        var docChecklist = inSender.getData().docChecklist;
        this.menuSysAdmin.setItemShowing("Document Checklist", docChecklist);
        //System Administrator Company
        var company = inSender.getData().company;
        this.menuSysAdmin.setItemShowing("Company", company);
        //System Administrator Branch
        var branch = inSender.getData().branch;
        this.menuSysAdmin.setItemShowing("Branch", branch);
        //System Administrator Group
        var group = inSender.getData().group;
        this.menuSysAdmin.setItemShowing("Group", group);
        //System Administrator Team
        var team = inSender.getData().team;
        this.menuSysAdmin.setItemShowing("Team", team);
        //Security
        var security = inSender.getData().security;
//        this.menuSecAdmin.setShowing(security);
        //Security User Account
        var userAccount = inSender.getData().userAccount;
        this.menuSecAdmin.setItemShowing("User Account", userAccount);
        //Security Role & Access Rights
        var roleAndAccessRights = inSender.getData().roleAndAccessRights;
        this.menuSecAdmin.setItemShowing("Role & Access Rights", roleAndAccessRights);
        //Security Parameter
        var securityParams = inSender.getData().securityParams;
        this.menuSecAdmin.setItemShowing("Security Parameter", securityParams);
        //Security Email Utility
        var emailUtility = inSender.getData().emailUtility;
        this.menuSecAdmin.setItemShowing("Email Utility", emailUtility);
        //Security Audit Trail
        var auditTrail = inSender.getData().auditTrail;
        this.menuSecAdmin.setItemShowing("Audit Trail", auditTrail);
        //Security Reports
        var securityReports = inSender.getData().securityRepots;
        this.menuSecAdmin.setItemShowing("Reports", securityReports);
        this.menuPanel.setShowing(true);
	},
    
	_end: 0
});