var logoutNow = function() {
    window.onbeforeunload = null;
    this.svRemoveToken.update();
    wm.logout();
};
var id;
var logoutTimeout;
var monitor = new Monitor(360000,[]); //180 000 =3 minutes. 
var homeload = 0;
var orc1 = 0;
var orc2 = 0;
dojo.declare("Main", wm.Page, {
    start: function() {
        this.svUserInfo.update();
        this.svMen2.update();
        this.svMen.update();
        this.app.svBusinessDt.update();
        this.svUserSessionCheck.update();
        this.svCurrency.update();
        this.dojoMenuTLR.setItemShowing("Teller's Total", false);
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
	svUserInfoResult: function(inSender, inDeprecated) {
//        this.svUnitinfo.update();
//        console.log(inSender);
        this.app.username.setValue("dataValue",inSender.getData().userid);
		this.app.varNetCash.setValue("dataValue",inSender.getData().unitbalance);
        this.app.varRole.setValue("dataValue", inSender.getData().role);
        this.app.varUnit.setValue("dataValue", inSender.getData().brid);
        this.app.varInstcode.setValue("dataValue", inSender.getData().instcode);
        if(inSender.getData().role=="boo"){
            this.overrideTimer.startTimer();    
        }else{
            this.overrideTimer.stopTimer();    
        }
//        app.alert(inSender.getData().instcode);
//        if(inSender.getData().role=="boo"){
//            wm.Page.getPage("BOO_HOME").svGetUnitInfo.update();    
//        }
	},
	    //idle dialog
    YesIdleBtnClick: function(inSender) {
        clearTimeout(logoutTimeout);
        monitor.clearTimers();
        this.idleDialog.hide();
        ////execute here some query for refresh server for not go to session expiration     	
    },
    NoIdleDialogClick: function(inSender) {
        window.onbeforeunload = null;
        this.svRemoveToken.update();
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
//                    this.countdownlabel.setCaption("Your session will close in " + counter + " seconds");
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
    svUserSessionCheckResult: function(inSender, inDeprecated) {
		var flag = inSender.getData().dataValue;
        if(flag == false|| flag == undefined || flag == null){
            window.onbeforeunload = null;
            wm.logout();
        }
	}, 
	svUnitinfoResult: function(inSender, inDeprecated) {
		this.app.varInstcode.setValue("dataValue", inSender.getData().instcode);
	},
	svMenResult: function(inSender, inDeprecated) {
//        console.log(inSender.getData());
        var pMenuBar = new dijit.MenuBar({});
        var page = [];
        var counter = 1;
        for(var i = 0; i < this.svMen.getData().length; i++ ){
            if(this.svMen.getItem(i).getData().module=="0"){
                this.pageContainer1.setPageName(this.svMen.getItem(i).getData().page);    
            }
            page.push(this.svMen.getItem(i).getData().page);
            var pSubMenu = new dijit.Menu({});
            var name = this.svMen.getItem(i).getData().modulename;
            var mod = this.svMen.getItem(i).getData().module;
            var count = this.svMen.getItem(i).getData().subcount;
            if(count==1){
                pMenuBar.addChild(new dijit.MenuBarItem({
                label: name,
                id : counter,
                onClick: function() {
                var dnid = this.domNode.id;
                wm.Page.getPage("Main").pageContainer1.setPageName(page[dnid-1]);
                }
                }));
            } else {                
                pMenuBar.addChild(new dijit.MenuBarItem({
                label: name,
                id : counter,
                popup:pSubMenu
                }));
                var subpage = [];
                var subcounter = 50;        
                for(var ii = 0; ii < this.svMen2.getData().length; ii++){
                    subpage.push(this.svMen2.getItem(ii).getData().page);
                    if(this.svMen2.getItem(ii).getData().module==mod){
                        pSubMenu.addChild(new dijit.MenuItem({
                        label: this.svMen2.getItem(ii).getData().modulename,
                        id : subcounter,
                        onClick: function() {
                        var subdnid = this.domNode.id;   
                        wm.Page.getPage("Main").pageContainer1.setPageName(subpage[subdnid-50]);
                        }
                        }));        
                    }
                    subcounter++;
                }
            }
            counter++;
        }
        pMenuBar.placeAt(this.dj.domNode.id);
        pMenuBar.startup();
	},
	selCurrencyChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
		this.svUnitBalance.update();
        if(homeload=="0"){
            homeload = "1"    
        }else{
            if(this.pageContainer1.pageName=="Home" && homeload=="1"){
                wm.Page.getPage("Home").svCashInCashOut.update();      
            }
        }
	},
	svUnitBalanceResult: function(inSender, inDeprecated) {
		//app.varNetCash.setValue("dataValue",inSender.getData().dataValue);
	},
	svCurrencyResult: function(inSender, inDeprecated) {
		//this.svUnitBalance.update();
        
	},
	selCurrency1Change: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
	  this.selCurrencyChange(inSender, inDisplayValue, inDataValue, inSetByCode);
	},
    overrideTimerTimerFire: function(inSender) {
	    this.svOverrideCount.update();	
	},
	lblOverrideClick: function(inSender, inEvent) {
		this.dlgOverride.show();
        this.svRequestOverrideList.update();
	},
	svOverrideCountResult: function(inSender, inDeprecated) {
        orc1 = inSender.getData().dataValue;
        orc2 = orc2+1;
        if(orc2 == 1 ){
            this.varORC.setValue("dataValue", inSender.getData().dataValue);
            if(orc1 > 0){
                app.alert("Override Request Received!");    
            }
        }else if(orc2 > 1){
            if(this.varORC.getData().dataValue!=orc1){
                //app.toastInfo("Ovverride Request Received", 5000);
                if( orc1 >  this.varORC.getData().dataValue ){
                    app.confirm("Override Request Received! ", false, 
                      dojo.hitch(this, function() {
                         this.varORC.setValue("dataValue",orc1);
                        }),
                      dojo.hitch(this, function() {
                         this.varORC.setValue("dataValue",orc1);
                        }));
                }
            }
        }
	},
	gridOverrideListGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
		console.log(rowData.txrefno);
        if(fieldName=="accept"){
            this.svRequestOverrideAction.input.setValue("val", 4);
        }else if(fieldName=="reject"){
            this.svRequestOverrideAction.input.setValue("val", 5);    
        }
        this.svRequestOverrideAction.input.setValue("txrefno", rowData.txrefno);
        this.svRequestOverrideAction.update();
	},
	svRequestOverrideActionResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="0"){
            app.alert("Error in Routine");    
		}else if(inSender.getData().dataValue=="1"){
            app.alert("Override result has been sent to teller!");    
            this.dlgOverride.hide();
		}
        this.svRequestOverrideList.update();
	},
	btnCloseClick: function(inSender) {
		this.dlgOverride.hide();
	},
	svMen2Result: function(inSender, inDeprecated) {
//		console.log(inSender.getData());
	},
	_end: 0
});