Main.widgets = {
	logoutVariable: ["wm.LogoutVariable", {"inFlightBehavior":"executeLast"}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	svUserInfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"userMainInfo","service":"UserAccountFacade"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"userMainInfoInputs"}, {}]
	}],
	svSecurityUser: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getUserId","service":"securityService","startUpdate":true}, {"onResult":"svUserInfo"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"getUserIdInputs"}, {}]
	}],
	svRemoveToken: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"removeADLoginToken","service":"AuthenticationFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"removeADLoginTokenInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"\"loggedin\"","targetProperty":"tag"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"svUserInfo.username","targetProperty":"username"}, {}]
			}]
		}]
	}],
	svUserSessionCheck: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"userSessionCheck","service":"SecurityFacade"}, {"onResult":"svUserSessionCheckResult"}, {
		input: ["wm.ServiceInput", {"type":"userSessionCheckInputs"}, {}]
	}],
	svMen: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"accessRightsMain","service":"UserAccountFacade"}, {"onResult":"svMenResult"}, {
		input: ["wm.ServiceInput", {"type":"accessRightsMainInputs"}, {}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	variable1: ["wm.Variable", {}, {}],
	svMen2: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"accessRightsSub","service":"UserAccountFacade"}, {"onResult":"svMen"}, {
		input: ["wm.ServiceInput", {"type":"accessRightsSubInputs"}, {}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	idleDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"","desktopHeight":"120px","height":"120px","noEscape":true,"styles":{"borderRadius":"0px"},"title":undefined,"width":"300px"}, {"onClose":"idleDialogClose","onShow":"idleDialogShow"}, {
		containerWidget16: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			countdownlabel: ["wm.Label", {"_classes":{"domNode":["dialogfooter"]},"padding":"4","styles":{},"width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"Your session will close in 60 seconds\"","targetProperty":"caption"}, {}]
				}]
			}],
			label4: ["wm.Label", {"caption":"Do you want to keep working?","height":"100%","padding":"4","styles":{"fontSize":"15px","fontWeight":"bold"},"width":"100%"}, {}],
			YesIdleBtnPanel: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				YesIdleBtn: ["wm.Button", {"border":"1","caption":"Yes","desktopHeight":"30px","height":"30px","margin":"4","styles":{"borderRadius":"0px"}}, {"onclick":"YesIdleBtnClick"}],
				NoIdleDialog: ["wm.Button", {"border":"1","caption":"No","desktopHeight":"30px","height":"30px","margin":"4","styles":{"borderRadius":"0px"}}, {"onclick":"NoIdleDialogClick"}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"958px"}, {}, {
		panelHeader: ["wm.HeaderContentPanel", {"height":"58px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,5","styles":{"backgroundColor":"#535c69"},"verticalAlign":"middle","width":"100%"}, {}, {
			picture1: ["wm.Picture", {"aspect":"h","height":"90%","source":"resources/images/yourlogo.png","styles":{},"width":"140px"}, {}],
			label2: ["wm.Label", {"caption":"CBS <font size=\"1\" color = \"#b1b1b1\">Version 3.3.0</font>","height":"45px","padding":"4","styles":{"fontSize":"15px","fontWeight":"bold","color":"#ffffff"},"width":"100%"}, {}],
			panel7: ["wm.Panel", {"height":"52px","horizontalAlign":"right","styles":{},"verticalAlign":"top","width":"170px"}, {}, {
				panel8: ["wm.Panel", {"height":"25px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					lblWelcom2: ["wm.Label", {"align":"left","padding":"0","styles":{"fontWeight":"bold","fontSize":"11.5px","color":"#ffffff"},"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"\"Branch: \"+${svUserInfo.branch}","targetProperty":"caption"}, {}]
						}]
					}]
				}],
				mainNetCashPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"52px","horizontalAlign":"right","showing":false,"verticalAlign":"top","width":"200px"}, {}, {
				panel4: ["wm.Panel", {"height":"25px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					lblWelcom: ["wm.Label", {"align":"left","padding":"0","styles":{"fontWeight":"bold","fontSize":"11.5px","color":"#ffffff"},"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"\"Department: \"+${svUserInfo.dept}","targetProperty":"caption"}, {}]
						}]
					}]
				}],
				mainDatePanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					lblSysDate: ["wm.Label", {"align":"left","padding":"0","showing":false,"styles":{"fontWeight":"bold","fontSize":"11.5px","color":"#e1e1e1"},"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"\"Business Date : \"+${app.svBusinessDt.dataValue}","targetProperty":"caption"}, {}]
						}]
					}],
					mainDate: ["wm.DateTime", {"border":"0","caption":"Business Date : ","captionSize":"60px","dateMode":"Date","displayValue":"10/11/2018","height":"25px","readonly":true,"showing":false,"styles":{},"width":"201px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
						}]
					}],
					BusinessDt: ["wm.Date", {"_classes":{"domNode":["DtCommon"]},"border":"0","caption":"Business Date:","captionSize":"90px","displayValue":"","height":"25px","padding":"0","readonly":true,"styles":{"fontSize":"11.5px","fontWeight":"normal"}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svUserInfo.businessdt","targetProperty":"dataValue"}, {}]
						}]
					}]
				}]
			}],
			panel5: ["wm.Panel", {"height":"52px","horizontalAlign":"right","verticalAlign":"top","width":"290px"}, {}, {
				panel6: ["wm.Panel", {"height":"25px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					lblWelcom1: ["wm.Label", {"align":"left","padding":"0","styles":{"fontWeight":"bold","fontSize":"11.5px","color":"#ffffff"},"width":"216px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"\"Welcome: \" +${svUserInfo.name}","targetProperty":"caption"}, {}]
						}]
					}],
					logoutbutton: ["wm.Button", {"_classes":{"domNode":["Warning","logoutbutton"]},"border":"0","borderColor":"#f89406","caption":"<c>Logout","desktopHeight":"25px","height":"25px","imageList":undefined,"margin":"0","styles":{}}, {"onclick":"logoutbuttonClick"}]
				}],
				mainDatePanel1: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					lblSysDate1: ["wm.Label", {"align":"left","padding":"0","styles":{"fontWeight":"bold","fontSize":"11.5px","color":"#e1e1e1"},"width":"218px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"\"&nbsp;Today is : \"+ ${mainDate.displayValue}","targetProperty":"caption"}, {}]
						}]
					}],
					mainDate1: ["wm.DateTime", {"border":"0","caption":"Today is: ","captionSize":"60px","displayValue":"10/11/2018 03:06 PM","height":"25px","readonly":true,"showing":false,"styles":{},"width":"201px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
						}]
					}]
				}]
			}]
		}],
		pnlMenu2: ["wm.Panel", {"border":"0,0,2,0","borderColor":"#219c35","height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#788a81"},"verticalAlign":"top","width":"100%"}, {}, {
			dj: ["wm.DojoMenu", {"border":"0","height":"100%","localizationStructure":{}}, {}]
		}],
		pnlMenu1: ["wm.Panel", {"border":"0,0,2,0","borderColor":"#219c35","height":"27px","horizontalAlign":"left","showing":false,"styles":{"backgroundColor":"#788a81"},"verticalAlign":"top","width":"100%"}, {}, {
			dojoMenuTLR: ["wm.DojoMenu", {"border":"0","fullStructure":[
{"label":"Home","separator":undefined,"defaultLabel":"Home","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"dojoMenuTLRHomeClick","children":[]},
{"label":"System Admin","separator":undefined,"defaultLabel":"System Admin","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"COA Maintenance","separator":undefined,"defaultLabel":"COA Maintenance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"dojoMenuTLRCOA_MaintenanceClick","children":[]},
{"label":"Main GL Maintenance","separator":undefined,"defaultLabel":"Main GL Maintenance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"dojoMenuTLRMain_GL_MaintenanceClick","children":[]},
{"label":"Segment Maintenance","separator":undefined,"defaultLabel":"Segment Maintenance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"dojoMenuTLRSegment_MaintenanceClick","children":[]},
{"label":"Codetable Maintenance","separator":undefined,"defaultLabel":"Codetable Maintenance","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"dojoMenuTLRCodetable_MaintenanceClick","children":[]}
]}
],"height":"100%","localizationStructure":{},"styles":{}}, {}]
		}],
		panel1: ["wm.Panel", {"height":"50%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"26px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"CASH IN","padding":"4","styles":{"fontWeight":"bold"}}, {}]
			}],
			dojoGrid1: ["wm.DojoGrid", {"height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}]
		}],
		button1: ["wm.Button", {"border":"1","desktopHeight":"34px","height":"34px","margin":"4","showing":false,"width":"93px"}, {"onclick":"serviceVariable2"}],
		panel9: ["wm.Panel", {"height":"50%","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
			panel10: ["wm.Panel", {"height":"26px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				label3: ["wm.Label", {"caption":"CASH OUT","padding":"4","styles":{"fontWeight":"bold"}}, {}]
			}],
			dojoGrid2: ["wm.DojoGrid", {"height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}]
		}],
		pageContainer1: ["wm.PageContainer", {"deferLoad":true,"styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
	}]
}