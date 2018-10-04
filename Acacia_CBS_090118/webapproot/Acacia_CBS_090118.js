dojo.declare("Acacia_CBS_090118", wm.Application, {
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
	"projectSubVersion": "Alpha26", 
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
		svBusinessDt: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addCodetable","service":"UtilFacade"}, {}, {
			input: ["wm.ServiceInput", {"type":"addCodetableInputs"}, {}]
		}], 
		username: ["wm.Variable", {}, {}], 
		varBrid: ["wm.Variable", {"type":"StringData"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[main].svUserInfo.brid","targetProperty":"dataSet.dataValue"}, {}]
			}]
		}], 
		varBusinessdt: ["wm.Variable", {"type":"DateData"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[main].svUserInfo.businessdt","targetProperty":"dataSet.dataValue"}, {}]
			}]
		}], 
		varInstcode: ["wm.Variable", {"type":"StringData"}, {}], 
		varPS: ["wm.Variable", {"type":"StringData"}, {}], 
		varRole: ["wm.Variable", {"type":"StringData"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[main].svUserInfo.role","targetProperty":"dataSet.dataValue"}, {}]
			}]
		}], 
		varUnit: ["wm.Variable", {"type":"StringData"}, {}], 
		varUserId: ["wm.Variable", {"type":"StringData"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[main].svSecurityUser.dataValue","targetProperty":"dataSet.dataValue"}, {}]
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

    Acacia_CBS_090118.extend({

    _end: 0
});