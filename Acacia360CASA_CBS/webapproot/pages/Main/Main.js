var logoutNow = function() {
    window.onbeforeunload = null;
    this.svRemoveToken.update();
    wm.logout();
};
var id;
var logoutTimeout;
var monitor = new Monitor(360000,[]); //180 000 =3 minutes. 
dojo.declare("Main", wm.Page, {
    start: function() {
        this.svUserInfo.update();
        this.svUserSessionCheck.update();
        this.svMen2.update();
//        this.svMen.update();
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
                    this.countdownlabel.setCaption("Your session will close in " + counter + " seconds");
                }
            }, 1000);
        } catch (e) {
//            console.log(e.name, e.message);
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
	"preferredDevice": "desktop",
    svMenResult: function(inSender, inDeprecated) {
//        console.log(this.svMen.getData().length);
        var pMenuBar = new dijit.MenuBar({});
        var page = [];
        var counter = 1;
        for(var i = 0; i < this.svMen.getData().length; i++ ){
//            console.log("ez");
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
	_end: 0
});