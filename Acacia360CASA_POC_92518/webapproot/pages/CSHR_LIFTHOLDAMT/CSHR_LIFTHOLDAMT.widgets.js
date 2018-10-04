CSHR_LIFTHOLDAMT.widgets = {
	navCashDep: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"TLR_FX_CASHDEP\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navCashWith: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"TLR_FX_CASHWDRW\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navAccountInq: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"TLR_ACCTBALINQ\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	svCurrList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCurrency","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getCurrencyInputs"}, {}]
	}],
	svUserList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUserListCico","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserListCicoInputs"}, {}]
	}],
	notiCposAccept: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"notiCposAcceptOk"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"\"Proceed\"","targetProperty":"OKButtonText"}, {}],
				wire: ["wm.Wire", {"expression":"\"Are you sure you want to accept?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	svConfimCpos: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cashPosDenom","service":"FinTxFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"cashPosDenomInputs"}, {}]
	}],
	varCposAction: ["wm.Variable", {"type":"StringData"}, {}],
	svActionCpos: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"confirmCashPos","service":"FinTxFacade"}, {"onResult":"svActionCposResult"}, {
		input: ["wm.ServiceInput", {"type":"confirmCashPosInputs"}, {}]
	}],
	notiCposDecline: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"notiCposDeclineOk"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Are you sure you want to decline?\"","targetProperty":"text"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Process\"","targetProperty":"OKButtonText"}, {}]
			}]
		}]
	}],
	svUnitBalance: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","loadingDialog":"","operation":"getUnitBalance","service":"UserInfoFacade"}, {"onResult":"svUnitBalanceResult"}, {
		input: ["wm.ServiceInput", {"type":"getUnitBalanceInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[main].svSecurityUser.dataValue","targetProperty":"userid"}, {}]
			}]
		}]
	}],
	timer1: ["wm.Timer", {"autoStart":true,"delay":1500,"repeating":false}, {"onTimerFire":"svCashInCashOut"}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"80%"}, {}, {
			panel10: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label3: ["wm.Label", {"caption":"LIFT HOLD AMOUNT","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
			}],
			pnlCashin: ["wm.Panel", {"height":"50%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
					txSearch: ["wm.Text", {"border":"0","caption":"Search by:","dataValue":undefined,"displayValue":"","height":"25px","width":"350px"}, {}],
					label1: ["wm.Label", {"caption":"(Account Number)","padding":"4","styles":{"fontWeight":"bold"},"width":"150px"}, {}]
				}],
				cashinGrid: ["wm.DojoGrid", {"caseSensitiveSort":false,"columnReordering":false,"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txdate","title":"Txdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"unit","title":"Unit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"origin","title":"Origin","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"destination","title":"Destination","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"currency","title":"Currency","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txamount","title":"Txamount","width":"80px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":false,"field":"remarks","title":"Remarks","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txref","title":"Txref","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txstatus","title":"Txstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"instcode","title":"Instcode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Txdate: \" + ${wm.runtimeId}.formatCell(\"txdate\", ${txdate}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Unit: \" + ${unit}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Origin: \" + ${origin}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Destination: \" + ${destination}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Currency: \" + ${currency}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txamount: \" + ${wm.runtimeId}.formatCell(\"txamount\", ${txamount}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txref: \" + ${txref}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txstatus: \" + ${txstatus}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"btn","title":"Action","width":"100%","align":"left","formatFunc":"wm_button_formatter","expression":"\"View\"","isCustomField":true}
],"dataSet":"","height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"sortingEnabled":false}, {"onGridButtonClick":"cashinGridGridButtonClick"}]
			}]
		}]
	}]
}