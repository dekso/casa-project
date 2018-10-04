TLR_OTX_CASHRECON.widgets = {
	serviceVariable1: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"ss","service":"CodetableFacade","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"ssInputs"}, {}]
	}],
	liveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.basedb.data.Tbuser"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.basedb.data.Tbuser","view":[
{"caption":"Username","sortable":true,"dataIndex":"username","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},
{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},
{"caption":"Firstname","sortable":true,"dataIndex":"firstname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},
{"caption":"Lastname","sortable":true,"dataIndex":"lastname","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},
{"caption":"Middlename","sortable":true,"dataIndex":"middlename","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},
{"caption":"Emailadd","sortable":true,"dataIndex":"emailadd","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"},
{"caption":"LastIp","sortable":true,"dataIndex":"lastIp","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1006,"subType":null,"widthUnits":"px"},
{"caption":"Lastlogondate","sortable":true,"dataIndex":"lastlogondate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1007,"subType":null,"widthUnits":"px"},
{"caption":"Lastpasswordchange","sortable":true,"dataIndex":"lastpasswordchange","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1008,"subType":null,"widthUnits":"px"},
{"caption":"Isloggedon","sortable":true,"dataIndex":"isloggedon","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1009,"subType":null,"widthUnits":"px"},
{"caption":"Islocked","sortable":true,"dataIndex":"islocked","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1010,"subType":null,"widthUnits":"px"},
{"caption":"Isactive","sortable":true,"dataIndex":"isactive","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1011,"subType":null,"widthUnits":"px"},
{"caption":"Issuspended","sortable":true,"dataIndex":"issuspended","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1012,"subType":null,"widthUnits":"px"},
{"caption":"Isactivedirectorymember","sortable":true,"dataIndex":"isactivedirectorymember","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1013,"subType":null,"widthUnits":"px"},
{"caption":"Invalidattemptscount","sortable":true,"dataIndex":"invalidattemptscount","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1014,"subType":null,"widthUnits":"px"},
{"caption":"Pwexpirydate","sortable":true,"dataIndex":"pwexpirydate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1015,"subType":null,"widthUnits":"px"},
{"caption":"Validitydateto","sortable":true,"dataIndex":"validitydateto","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1016,"subType":null,"widthUnits":"px"},
{"caption":"Validitydatefrom","sortable":true,"dataIndex":"validitydatefrom","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1017,"subType":null,"widthUnits":"px"},
{"caption":"Validitytimeto","sortable":true,"dataIndex":"validitytimeto","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1018,"subType":null,"widthUnits":"px"},
{"caption":"Validitytimefrom","sortable":true,"dataIndex":"validitytimefrom","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1019,"subType":null,"widthUnits":"px"},
{"caption":"Datecreated","sortable":true,"dataIndex":"datecreated","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1020,"subType":null,"widthUnits":"px"},
{"caption":"Dateupdated","sortable":true,"dataIndex":"dateupdated","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1021,"subType":null,"widthUnits":"px"},
{"caption":"Createdby","sortable":true,"dataIndex":"createdby","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1022,"subType":null,"widthUnits":"px"},
{"caption":"Updatedby","sortable":true,"dataIndex":"updatedby","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1023,"subType":null,"widthUnits":"px"},
{"caption":"Ischangepwrequired","sortable":true,"dataIndex":"ischangepwrequired","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1024,"subType":null,"widthUnits":"px"},
{"caption":"Ispwneverexpire","sortable":true,"dataIndex":"ispwneverexpire","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1025,"subType":null,"widthUnits":"px"},
{"caption":"Isdisabled","sortable":true,"dataIndex":"isdisabled","type":"java.lang.Boolean","displayType":"CheckBox","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1026,"subType":null,"widthUnits":"px"},
{"caption":"Invalidattempip","sortable":true,"dataIndex":"invalidattempip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1027,"subType":null,"widthUnits":"px"},
{"caption":"Lastlogoutdate","sortable":true,"dataIndex":"lastlogoutdate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1028,"subType":null,"widthUnits":"px"},
{"caption":"Lastsession","sortable":true,"dataIndex":"lastsession","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1029,"subType":null,"widthUnits":"px"},
{"caption":"Companycode","sortable":true,"dataIndex":"companycode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1030,"subType":null,"widthUnits":"px"},
{"caption":"Groupcode","sortable":true,"dataIndex":"groupcode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1031,"subType":null,"widthUnits":"px"},
{"caption":"Branchcode","sortable":true,"dataIndex":"branchcode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1032,"subType":null,"widthUnits":"px"},
{"caption":"Teamcode","sortable":true,"dataIndex":"teamcode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1033,"subType":null,"widthUnits":"px"},
{"caption":"Terminatedsessionip","sortable":true,"dataIndex":"terminatedsessionip","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1034,"subType":null,"widthUnits":"px"},
{"caption":"Datetimelockedout","sortable":true,"dataIndex":"datetimelockedout","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1035,"subType":null,"widthUnits":"px"}
]}, {}]
	}],
	variable1: ["wm.Variable", {"type":undefined}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"serviceVariable1","targetProperty":"dataSet"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"Cash Reconciliation","padding":"4","styles":{"fontSize":"12px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
			}],
			panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"50%"}, {}, {
					fCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px","styles":{},"width":"180px"}, {}],
					fUsername: ["wm.Text", {"border":"0","caption":"Username:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px","styles":{},"width":"250px"}, {}],
					panel4: ["wm.Panel", {"desktopHeight":"25px","enableTouchHeight":true,"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"55%"}, {}],
						panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"15%"}, {}, {
							label2: ["wm.Label", {"align":"center","caption":"Count","height":"100%","padding":"4","styles":{"color":"#090909","fontWeight":"bold"},"width":"100%"}, {}]
						}],
						panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"30%"}, {}, {
							label3: ["wm.Label", {"align":"center","caption":"Amount","height":"100%","padding":"4","styles":{"color":"#090909","fontWeight":"bold"},"width":"100%"}, {}]
						}]
					}],
					panel9: ["wm.Panel", {"desktopHeight":"25px","enableTouchHeight":true,"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"55%"}, {}, {
							label5: ["wm.Label", {"caption":"Beginning Cash Balance","padding":"4","styles":{"color":"#030202","fontWeight":"bold"},"width":"55%"}, {}]
						}],
						panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"15%"}, {}, {
							label6: ["wm.Label", {"align":"center","caption":"--","height":"100%","padding":"4","styles":{"color":"#090909","fontWeight":"bold"},"width":"100%"}, {}]
						}],
						panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"30%"}, {}, {
							label7: ["wm.Label", {"align":"center","caption":"1,000,000.00","height":"100%","padding":"4","styles":{"color":"#090909","fontWeight":"normal"},"width":"100%"}, {}]
						}]
					}],
					panel18: ["wm.Panel", {"desktopHeight":"25px","enableTouchHeight":true,"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						panel19: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"55%"}, {}, {
							label11: ["wm.Label", {"caption":"Cash In","padding":"4","styles":{"color":"#030202","fontWeight":"bold"},"width":"55%"}, {}]
						}]
					}],
					panel20: ["wm.Panel", {"desktopHeight":"25px","enableTouchHeight":true,"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						panel21: ["wm.Panel", {"height":"27px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"55%"}, {}, {
							label12: ["wm.Label", {"caption":"Cash Deposit","padding":"4","styles":{"color":"#030202","fontWeight":"bold"},"width":"85%"}, {}]
						}],
						panel22: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"15%"}, {}, {
							label13: ["wm.Label", {"align":"center","caption":"--","height":"100%","padding":"4","styles":{"color":"#090909","fontWeight":"bold"},"width":"100%"}, {}]
						}],
						panel23: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"30%"}, {}, {
							label14: ["wm.Label", {"align":"center","caption":"--","height":"100%","padding":"4","styles":{"color":"#090909","fontWeight":"normal"},"width":"100%"}, {}]
						}]
					}],
					panel24: ["wm.Panel", {"desktopHeight":"25px","enableTouchHeight":true,"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						panel25: ["wm.Panel", {"height":"100%","horizontalAlign":"right","styles":{},"verticalAlign":"top","width":"55%"}, {}, {
							label15: ["wm.Label", {"caption":"Bills Payment Local Check","padding":"4","styles":{"color":"#030202","fontWeight":"bold"},"width":"85%"}, {}]
						}],
						panel26: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"15%"}, {}, {
							label16: ["wm.Label", {"align":"center","caption":"--","height":"100%","padding":"4","styles":{"color":"#090909","fontWeight":"bold"},"width":"100%"}, {}]
						}],
						panel27: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"30%"}, {}, {
							label17: ["wm.Label", {"align":"center","caption":"--","height":"100%","padding":"4","styles":{"color":"#090909","fontWeight":"normal"},"width":"100%"}, {}]
						}]
					}],
					panel28: ["wm.Panel", {"desktopHeight":"25px","enableTouchHeight":true,"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						panel29: ["wm.Panel", {"height":"100%","horizontalAlign":"right","styles":{},"verticalAlign":"top","width":"55%"}, {}, {
							label18: ["wm.Label", {"caption":"Miscellaneous Receipts Payment","padding":"4","styles":{"color":"#030202","fontWeight":"bold"},"width":"85%"}, {}]
						}],
						panel30: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"15%"}, {}, {
							label19: ["wm.Label", {"align":"center","caption":"--","height":"100%","padding":"4","styles":{"color":"#090909","fontWeight":"bold"},"width":"100%"}, {}]
						}],
						panel31: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"30%"}, {}, {
							label20: ["wm.Label", {"align":"center","caption":"--","height":"100%","padding":"4","styles":{"color":"#090909","fontWeight":"normal"},"width":"100%"}, {}]
						}]
					}]
				}],
				panel13: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
					label4: ["wm.Label", {"align":"center","caption":"Actual Cash Count","height":"27px","padding":"4","styles":{"fontWeight":"bold","color":"#000000"},"width":"100%"}, {}],
					panel14: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						panel15: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,3,0,3","styles":{},"verticalAlign":"top","width":"30%"}, {}, {
							label8: ["wm.Label", {"align":"center","caption":"Denomination","padding":"4","styles":{"fontWeight":"bold","color":"#000000"},"width":"100%"}, {}],
							text1: ["wm.Number", {"border":"0","caption":"text1","captionSize":"0px","dataValue":1000,"disabled":true,"displayValue":"1,000","emptyValue":"zero","height":"25px","styles":{"textAlign":"right"}}, {}]
						}],
						panel16: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"35%"}, {}, {
							label9: ["wm.Label", {"align":"center","caption":"Count","padding":"4","styles":{"fontWeight":"bold","color":"#000000"},"width":"100%"}, {}]
						}],
						panel17: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"35%"}, {}, {
							label10: ["wm.Label", {"align":"center","caption":"Amount","padding":"4","styles":{"fontWeight":"bold","color":"#000000"},"width":"100%"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}