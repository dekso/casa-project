dojo.declare("Acacia360CASA_POC_92518", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"hintDelay": 1500, 
	"i18n": false, 
	"isLoginPageEnabled": true, 
	"isSSLUsed": false, 
	"isSecurityEnabled": true, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha30", 
	"projectVersion": 1, 
	"sessionExpirationHandler": "nothing", 
	"studioVersion": "6.7.0.RELEASE", 
	"tabletMain": "", 
	"theme": "common.themes.AcaciaGreen", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		svBusinessDt: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getBusinessdt","service":"UtilFacade"}, {}, {
			input: ["wm.ServiceInput", {"type":"getBusinessdtInputs"}, {}]
		}], 
		username: ["wm.Variable", {}, {}], 
		varAccountno: ["wm.Variable", {"type":"StringData"}, {}], 
		varCurrency: ["wm.Variable", {"type":"StringData"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[main].selCurrency.selectedItem.id","targetProperty":"dataSet.dataValue"}, {}]
			}]
		}], 
		varInstcode: ["wm.Variable", {"type":"StringData"}, {}], 
		varNetCash: ["wm.Variable", {"type":"NumberData"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[main].svUnitBalance.dataValue","targetProperty":"dataSet.dataValue"}, {}]
			}]
		}], 
		varRole: ["wm.Variable", {"type":"StringData"}, {}], 
		varTxrefmo: ["wm.Variable", {"type":"StringData"}, {}], 
		varUnit: ["wm.Variable", {"type":"StringData"}, {}], 
		varUserId: ["wm.Variable", {"type":"StringData"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[main].svUserInfo.userid","targetProperty":"dataSet.dataValue"}, {}]
			}]
		}]
	},
	_end: 0
});

dojo.declare("Monitor", null, {
        _events: [
            [window, 'scroll'],
            [window, 'resize'],
            [document, 'mousemove'],
            [document, 'keydown']
        ],
        _idleTime: null,
        _timers: null,
        idleTime: null,
        constructor: function(time, timers) {
            Monitor.prototype.time = time;
            this._timers = timers;
            this.initObservers();
            this.setTimer();
        },
        initObservers: function() {
            dojo.forEach(this._events, function(e) {
                dojo.connect(e[0], e[1], function(event) {
                    Monitor.prototype.onInterrupt();
                });
            });
        },
        onInterrupt: function() {
            this.idleTime = new Date() - this._idleTime;
            dojo.publish("state:active", [this.idleTime]);
            this.setTimer();
        },
        setTimer: function() {
            var oj = Monitor.prototype;
            this.clearTimers();
            this._idleTime = new Date();
            this._timers.push(setTimeout(function() {
                dojo.publish("state:idle", null);
            }, oj.time));
        },
        clearTimers: function() {
            if (this._timers) {
                for (var i = 0; i < this._timers.length; i++) {
                  //  console.debug("Clearing Timer: " + this._timers[i]);
                    clearTimeout(this._timers[i]);
                }
            }
            this._timers = [];
        }
    });

    Acacia360CASA_POC_92518.extend({

    _end: 0
});