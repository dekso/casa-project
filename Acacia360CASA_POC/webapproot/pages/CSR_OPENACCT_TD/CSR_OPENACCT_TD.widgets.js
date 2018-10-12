CSR_OPENACCT_TD.widgets = {
	svCheckMember: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNo","service":"AccountFacade"}, {"onResult":"svCheckMemberResult"}, {
		input: ["wm.ServiceInput", {"type":"checkMemberNoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"memberno"}, {}]
			}]
		}]
	}],
	svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCurrency","service":"UtilFacade"}, {"onResult":"svListHolidays"}, {
		input: ["wm.ServiceInput", {"type":"getCurrencyInputs"}, {}]
	}],
	svOwnershipType: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"OWNERSHIPTYPE\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svProdList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getProdtype","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getProdtypeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctProdGroup.dataValue","targetProperty":"prodgroup"}, {}]
			}]
		}]
	}],
	notifCreateSuccess: ["wm.NotificationCall", {}, {"onOk":"notifCreateSuccessOk"}, {
		input: ["wm.ServiceInput", {"type":"alertInputs"}, {}]
	}],
	svProductListFull: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getProdList","service":"AccountFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getProdListInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctProdGroup.dataValue","targetProperty":"prodgroup"}, {}]
			}]
		}]
	}],
	svProdGroup: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"30","targetProperty":"prodgroup"}, {}],
				wire1: ["wm.Wire", {"expression":"\"PRODUCTGROUP\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svCreateTDAcct: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"createAccount","service":"AccountFacade"}, {"onResult":"svCreateTDAcctResult"}, {
		input: ["wm.ServiceInput", {"type":"createAccountInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctAcctType.selectedItem.id","targetProperty":"dep.ownershipType"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"fTerm.dataValue","targetProperty":"dep.term"}, {}],
				wire7: ["wm.Wire", {"expression":"${fMatValue.dataValue}","targetProperty":"dep.matAmt"}, {}],
				wire9: ["wm.Wire", {"expression":"${fMatdt.dataValue}","targetProperty":"dep.maturityDate"}, {}],
				wire10: ["wm.Wire", {"expression":"${fBkdt.dataValue}","targetProperty":"dep.bookDate"}, {}],
				wire11: ["wm.Wire", {"expression":"${fLessWithTaxAmt.dataValue}","targetProperty":"dep.lessWtaxAmt"}, {}],
				wire1: ["wm.Wire", {"expression":"1","targetProperty":"dep.accountStatus"}, {}],
				wire13: ["wm.Wire", {"expression":undefined,"source":"fCustName.dataValue","targetProperty":"dep.accountName"}, {}],
				wire14: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"dep.instcode"}, {}],
				wire15: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"dep.unit"}, {}],
				wire16: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.posttx","targetProperty":"dep.posttx"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.prodcode","targetProperty":"dep.subProductCode"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"acctProdGroup.selectedItem.id","targetProperty":"dep.productCode"}, {}],
				wire20: ["wm.Wire", {"expression":"0","targetProperty":"dep.placeholdAmt"}, {}],
				wire22: ["wm.Wire", {"expression":"0","targetProperty":"dep.floatAmount"}, {}],
				wire21: ["wm.Wire", {"expression":undefined,"source":"fPlacementAmt.dataValue","targetProperty":"dep.placementAmt"}, {}],
				wire12: ["wm.Wire", {"expression":"0","targetProperty":"dep.accountBalance"}, {}],
				wire23: ["wm.Wire", {"expression":undefined,"source":"varCIFList","targetProperty":"ciflist"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"fAccountno.dataValue","targetProperty":"dep.accountno2"}, {}],
				wire17: ["wm.Wire", {"expression":undefined,"source":"fCreditAccount.dataValue","targetProperty":"dep.accountnoata"}, {}],
				wire18: ["wm.Wire", {"expression":undefined,"source":"fSpecialInstr.dataValue","targetProperty":"dep.dispoflag"}, {}],
				wire19: ["wm.Wire", {"expression":"\"0\"","targetProperty":"dep.alertflag"}, {}],
				wire6: ["wm.Wire", {"expression":"parseFloat(${fIntRate.dataValue}).toFixed(2)","targetProperty":"dep.intRate"}, {}],
				wire8: ["wm.Wire", {"expression":"parseFloat(${fWTaxRate.dataValue}).toFixed(2)","targetProperty":"dep.wtaxrate"}, {}],
				wire24: ["wm.Wire", {"expression":"\"\"","targetProperty":"dep.slaidNo"}, {}],
				wire25: ["wm.Wire", {"expression":undefined,"source":"fSOADispo.selectedItem.id","targetProperty":"dep.soadispo"}, {}],
				wire26: ["wm.Wire", {"expression":"0","targetProperty":"dep.tdcreleaseind"}, {}],
				wire27: ["wm.Wire", {"expression":undefined,"source":"acctSolOfficer.dataValue","targetProperty":"dep.solicitingofficer"}, {}],
				wire28: ["wm.Wire", {"expression":undefined,"source":"acctChannel.dataValue","targetProperty":"dep.channel"}, {}],
				wire29: ["wm.Wire", {"expression":undefined,"source":"acctRefOfficer.dataValue","targetProperty":"dep.referralofficer"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svCreateSAcct: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"createAccount","service":"AccountFacade"}, {"onResult":"svCreateSAcctResult"}, {
		input: ["wm.ServiceInput", {"type":"createAccountInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"1","targetProperty":"dep.accountStatus"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"acctAcctType.selectedItem.id","targetProperty":"dep.jointAcctType"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"dep.unit"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"dep.instcode"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"acctAcctType.selectedItem.id","targetProperty":"dep.ownershipType"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"fAcctName.dataValue","targetProperty":"dep.accountName"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.prodcode","targetProperty":"dep.subProductCode"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"acctProdGroup.selectedItem.id","targetProperty":"dep.productCode"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dep.bookDate"}, {}],
				wire11: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.posttx","targetProperty":"dep.posttx"}, {}],
				wire5: ["wm.Wire", {"expression":"0","targetProperty":"dep.placeholdAmt"}, {}],
				wire9: ["wm.Wire", {"expression":"0","targetProperty":"dep.accountBalance"}, {}],
				wire15: ["wm.Wire", {"expression":"0","targetProperty":"dep.placementAmt"}, {}],
				wire16: ["wm.Wire", {"expression":"0","targetProperty":"dep.floatAmount"}, {}],
				wire17: ["wm.Wire", {"expression":undefined,"source":"varCIFList","targetProperty":"ciflist"}, {}],
				wire12: ["wm.Wire", {"expression":undefined,"source":"fAccountno.dataValue","targetProperty":"dep.accountno2"}, {}],
				wire13: ["wm.Wire", {"expression":undefined,"source":"fAccountno.dataValue","targetProperty":"dep.accountnoata"}, {}],
				wire14: ["wm.Wire", {"expression":"if(${acctProdType.selectedItem.checkbookind}==true){\n${fSAcheckFrom.dataValue} +  \"|\" + ${fSAcheckTo.dataValue}\n+ \"|\" + ${fSAcheckBookNo.dataValue}\n}else{\n    \"\"\n}","targetProperty":"dep.slaidNo"}, {}],
				wire18: ["wm.Wire", {"expression":"\"0\"","targetProperty":"dep.alertflag"}, {}],
				wire19: ["wm.Wire", {"expression":undefined,"source":"fSOADispo.selectedItem.id","targetProperty":"dep.soadispo"}, {}],
				wire20: ["wm.Wire", {"expression":undefined,"source":"acctRefOfficer.dataValue","targetProperty":"dep.referralofficer"}, {}],
				wire21: ["wm.Wire", {"expression":undefined,"source":"acctChannel.dataValue","targetProperty":"dep.channel"}, {}],
				wire22: ["wm.Wire", {"expression":undefined,"source":"acctSolOfficer.dataValue","targetProperty":"dep.solicitingofficer"}, {}],
				wire23: ["wm.Wire", {"expression":undefined,"source":"fAddressDispo.dataValue","targetProperty":"dep.addressdispo"}, {}],
				wire24: ["wm.Wire", {"expression":undefined,"source":"fDeliveryDispo.dataValue","targetProperty":"dep.deliverydispo"}, {}],
				wire25: ["wm.Wire", {"expression":undefined,"source":"acctChannel.dataValue","targetProperty":"dep.campaign"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svCheckMemberList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNoName","service":"AccountFacade"}, {"onResult":"svCheckMemberListResult"}, {
		input: ["wm.ServiceInput", {"type":"checkMemberNoNameInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"memberno"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"acctCustFullname.dataValue","targetProperty":"name"}, {}]
			}]
		}]
	}],
	svCheckMember2: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNo","service":"AccountFacade"}, {"onResult":"svCheckMember2Result"}, {
		input: ["wm.ServiceInput", {"type":"checkMemberNoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID2.dataValue","targetProperty":"memberno"}, {}]
			}]
		}]
	}],
	svCheckMemberList2: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNoName","service":"AccountFacade"}, {"onResult":"svCheckMemberList2Result"}, {
		input: ["wm.ServiceInput", {"type":"checkMemberNoNameInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"memberno"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"acctCustFullname2.dataValue","targetProperty":"name"}, {}]
			}]
		}]
	}],
	svCheckMember3: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNo","service":"AccountFacade"}, {"onResult":"svCheckMember3Result"}, {
		input: ["wm.ServiceInput", {"type":"checkMemberNoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID3.dataValue","targetProperty":"memberno"}, {}]
			}]
		}]
	}],
	svCheckMemberList3: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNoName","service":"AccountFacade"}, {"onResult":"svCheckMemberList3Result"}, {
		input: ["wm.ServiceInput", {"type":"checkMemberNoNameInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"memberno"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"acctCustFullname3.dataValue","targetProperty":"name"}, {}]
			}]
		}]
	}],
	varSearchResult: ["wm.Variable", {"isList":true,"type":"com.casa.acct.forms.InquiryCIFNameList"}, {}],
	varSearchNo: ["wm.Variable", {"type":"NumberData"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":"0","targetProperty":"dataSet.dataValue"}, {}]
		}]
	}],
	varSigcard: ["wm.Variable", {"type":"NumberData"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":"0","targetProperty":"dataSet.dataValue"}, {}]
		}]
	}],
	svSaveSigcard: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveSigcard","service":"SigcardFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"saveSigcardInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"dojoFileUpload.variable.name","targetProperty":"filename"}, {}]
			}]
		}]
	}],
	varCIF: ["wm.Variable", {"type":"com.smslai_eoddb.data.Tbdepositcif"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"dataSet.cifno"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"acctCustFullname.dataValue","targetProperty":"dataSet.cifname"}, {}]
		}]
	}],
	varCIFList: ["wm.Variable", {"isList":true,"type":"com.smslai_eoddb.data.Tbdepositcif"}, {}],
	svSpecialInstr: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"SPECIALINSTR\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svListHolidays: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"listHolidays","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"listHolidaysInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"new Date();","targetProperty":"minDate"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	varInit: ["wm.Variable", {"type":"BooleanData"}, {}],
	svCheckDeceased: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkDeceased","service":"AccountFacade"}, {"onResult":"svCheckDeceasedResult"}, {
		input: ["wm.ServiceInput", {"type":"checkDeceasedInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"svCheckMember.cifno","targetProperty":"memberno"}, {}]
			}]
		}]
	}],
	notifDeceased: ["wm.NotificationCall", {}, {"onOk":"notifDeceasedOk"}, {
		input: ["wm.ServiceInput", {"type":"alertInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Customer: \" +${svCheckMember.name}+ \" with cifno: \"+${svCheckMember.cifno}+\" is deceased\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	notifConfirmSubmit: ["wm.NotificationCall", {"operation":"confirm"}, {}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Are you sure you want to open a \" + ${acctAcctType.selectedItem.description} + \" for \" + ${acctCustFullname.dataValue} \"?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	varIntPayFreq: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Monthly Interest Payment\",\"dataValue\":\"1\"},{\"name\":\"Quarterly Interest Payment\",\"dataValue\":\"90\"},{\"name\":\"Semi-Annual Interest Payment\",\"dataValue\":\"180\"},{\"name\":\"Annual Interest Payment\",\"dataValue\":\"365\"}]","type":"EntryData"}, {}],
	varPayMode: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Credit To Account\",\"dataValue\":\"1\"}]","type":"EntryData"}, {}],
	svCheckAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkAccount","service":"AccountFacade"}, {"onResult":"svCheckAccountResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"checkAccountInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fCreditAccount.dataValue","targetProperty":"accountno"}, {}]
			}]
		}]
	}],
	svCheckProdMatrix: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkProduct","service":"UtilFacade"}, {"onResult":"svCheckProdMatrixResult"}, {
		input: ["wm.ServiceInput", {"type":"checkProductInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctProdType.dataValue","targetProperty":"prodcode"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"acctProdGroup.selectedItem.id","targetProperty":"prodgroup"}, {}]
			}]
		}]
	}],
	svCheckAccountATA: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkAcct","service":"FinTxFacade"}, {"onResult":"svCheckAccountATAResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"checkAcctInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fAccountno.dataValue","targetProperty":"acctno"}, {}]
			}]
		}]
	}],
	svCheckMishandled: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMishandled","service":"AccountFacade"}, {"onResult":"svCheckMishandledResult"}, {
		input: ["wm.ServiceInput", {"type":"checkMishandledInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"svCheckMember.cifno","targetProperty":"memberno"}, {}]
			}]
		}]
	}],
	notifMishandled: ["wm.NotificationCall", {"operation":"confirm"}, {"onCancel":"notifMishandledCancel","onOk":"notifMishandledOk"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"With mishandled account. Do you wish to proceed?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	svSoaDispo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"SOADISPOSITION\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svDeliveryDispo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"DELIVERYDISPO\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svViewSigcard: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"viewSigcard","service":"SigcardFacade"}, {"onResult":"svViewSigcardResult"}, {
		input: ["wm.ServiceInput", {"type":"viewSigcardInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"001010000400\"","targetProperty":"acctno"}, {}]
			}]
		}]
	}],
	searchResultDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","title":"Search Result By Name"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			gridResultName: ["wm.DojoGrid", {"_classes":{"domNode":["cDojoGrid"]},"border":"0","columns":[
{"show":true,"field":"cifno","title":"Cifno","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"btn","title":"Action","width":"100px","align":"center","formatFunc":"wm_button_formatter","editorProps":null,"expression":"\"Select\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Cifno: \" + ${cifno} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${name}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","localizationStructure":{},"margin":"0,0,5,0","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {"onGridButtonClick":"gridResultNameGridButtonClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"varSearchResult","targetProperty":"dataSet"}, {}]
				}]
			}],
			panel9: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				label3: ["wm.Label", {"padding":"4","styles":{"color":"#030303"},"width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"\"Result : \"+${varSearchResult.count}","targetProperty":"caption"}, {}]
					}]
				}],
				btnClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"30px","height":"30px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseClick"}]
			}]
		}]
	}],
	cifListDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget1","title":"CIF List","width":"480px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			ciflistGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"accountno","title":"Accountno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"cifno","title":"Cifno","width":"60%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"cifname","title":"Cifname","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Cifno: \" + ${cifno} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Cifname: \" + ${cifname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"btn","title":"Action","width":"100px","align":"center","formatFunc":"wm_button_formatter","expression":"\"Delete\"","isCustomField":true,"mobileColumn":false}
],"dsType":"com.smslai_eoddb.data.Tbdepositcif","height":"100%","minDesktopHeight":60,"singleClickEdit":true}, {"onGridButtonClick":"ciflistGridGridButtonClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"varCIFList","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"41px","height":"41px"}, {}, {
			btnCloseCIF: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"30px","height":"30px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseCIFClick"}]
		}]
	}],
	desViewSigcard: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar1","containerWidgetId":"containerWidget2","title":undefined}, {}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			ImgSigcard: ["wm.Picture", {"height":"100%","margin":"0,0,0,0","styles":{},"width":"100%"}, {}]
		}],
		buttonBar1: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"31px"}, {}, {
			btnCloseSigcard: ["wm.Button", {"border":"1","caption":"Close","height":"20px","styles":{},"width":"80px"}, {"onclick":"desViewSigcard.hide"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"825px"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label4: ["wm.Label", {"caption":"Setup New Account","height":"31px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"527px"}, {}]
			}],
			panel4Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					pnlCustDet: ["wm.Panel", {"height":"373px","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						label2Panel: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder"},"verticalAlign":"top","width":"100%"}, {}, {
							label2: ["wm.Label", {"caption":"Customer Details","margin":"0,0,0,0","padding":"4","styles":{"fontSize":"13px","fontWeight":"bolder","color":"#4c4848"},"width":"100%"}, {}]
						}],
						spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						acctProdGroup: ["wm.SelectMenu", {"border":"0","caption":"Product Group:","captionSize":"140px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"320px"}, {"onchange":"acctProdGroupChange"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svProdGroup","targetProperty":"dataSet"}, {}]
							}]
						}],
						acctProdType: ["wm.SelectMenu", {"border":"0","caption":"Product Type:","captionSize":"140px","dataField":"prodcode","dataType":"com.smslai_eoddb.data.Tbprodmatrix","displayField":"prodname","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"320px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svProductListFull","targetProperty":"dataSet"}, {}],
								wire1: ["wm.Wire", {"expression":"${acctProdGroup.dataValue}==null","targetProperty":"disabled"}, {}]
							}]
						}],
						acctAcctType: ["wm.SelectMenu", {"border":"0","caption":"Account Type:","captionSize":"140px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"320px"}, {"onchange":"acctAcctTypeChange"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svOwnershipType","targetProperty":"dataSet"}, {}],
								wire1: ["wm.Wire", {"expression":undefined,"source":"acctProdType.invalid","targetProperty":"disabled"}, {}]
							}]
						}],
						acctSolOfficer: ["wm.Text", {"border":"0","caption":"Soliciting Officer:","captionSize":"140px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"320px"}, {"onMouseOut":"acctSolOfficerMouseOut","onfocus":"acctSolOfficerFocus"}],
						acctRefOfficer: ["wm.Text", {"border":"0","caption":"Referral Officer:","captionSize":"140px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"320px"}, {"onMouseOut":"acctRefOfficerMouseOut","onfocus":"acctRefOfficerFocus"}],
						acctChannel: ["wm.Text", {"border":"0","caption":"Campaign:","captionSize":"140px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","styles":{},"width":"320px"}, {"onMouseOut":"acctChannelMouseOut","onfocus":"acctChannelFocus"}],
						acctCIFIDPanel: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"372%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"acctAcctType.invalid","targetProperty":"disabled"}, {}]
							}],
							acctCIFID: ["wm.Text", {"border":"0","caption":"Customer CIF ID:","captionSize":"140px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"320px"}, {"onMouseOut":"acctCIFIDMouseOut","onfocus":"acctCIFIDFocus"}],
							acctCustFullname: ["wm.Text", {"border":"0","caption":"Customer Name:","captionSize":"110px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"300px"}, {"onfocus":"acctCustFullnameFocus"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svCheckMember.name","targetProperty":"dataValue"}, {}]
								}]
							}],
							btnSearch: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Search","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnSearchClick"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFIDPanel.invalid","targetProperty":"disabled"}, {}]
								}]
							}],
							btnAddCIF: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","desktopHeight":"28px","height":"28px","showing":false,"styles":{},"width":"85px"}, {"onclick":"btnAddCIFClick"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"${acctCIFID.dataValue}==null||${acctCustFullname.dataValue}==null","targetProperty":"disabled"}, {}],
									wire1: ["wm.Wire", {"expression":"if(${acctAcctType.dataValue} > 0){\n    \"Add CIF\"    \n}else{\n    \"Use CIF\"    \n}","targetProperty":"caption"}, {}]
								}]
							}]
						}],
						acctCIFIDMulti: ["wm.Panel", {"height":"80px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"372%"}, {}, {
							fAcctFullname: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"140px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {}],
							btnCIFList: ["wm.Button", {"border":"1","caption":"View CIF List","desktopHeight":"28px","height":"28px","width":"111px"}, {"onclick":"btnCIFListClick"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"${acctAcctType.selectedItem.id} > 0","targetProperty":"showing"}, {}]
								}]
							}]
						}],
						spacer5: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
							btnContinue: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"27px","height":"27px","styles":{},"width":"80px"}, {"onclick":"btnContinueClick"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"${pnlCustDet.invalid} && (${acctCIFID.dataValue}==null||${acctCustFullname.dataValue}==null) && ${acctSolOfficer.invalid} && ${acctRefOfficer.invalid}","targetProperty":"disabled"}, {}]
								}]
							}],
							btnHome: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnHomeClick"}]
						}]
					}],
					pnlNewTimeDepAcct: ["wm.Panel", {"height":"325px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						fTxdtPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"820px"}, {}, {
							fTxdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Transaction Date:","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"450px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
								}]
							}],
							fSpecialInstr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Disposition:","captionSize":"180px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","width":"360px"}, {"onchange":"fSpecialInstrChange"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svSpecialInstr","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						fDepProdNamePanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"1170px"}, {}, {
							fDepProdName: ["wm.Text", {"border":"0","caption":"Product Type:","displayValue":"","height":"25px","readonly":true,"width":"450px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"${acctProdType.selectedItem.prodname}","targetProperty":"dataValue"}, {}]
								}]
							}],
							slcIntFreq: ["wm.SelectMenu", {"border":"0","caption":"Interest Payment Frequency : ","captionSize":"180px","dataField":"dataValue","dataType":"EntryData","dataValue":"1","displayField":"name","displayValue":"Monthly Interest Payment","emptyValue":"null","height":"25px","width":"360px"}, {"onchange":"slcIntFreqChange"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"varIntPayFreq","targetProperty":"dataSet"}, {}],
									wire1: ["wm.Wire", {"expression":"${fSpecialInstr.dataValue}=='TD02'","targetProperty":"showing"}, {}]
								}]
							}]
						}],
						fCustNamePanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							fCustName: ["wm.Text", {"border":"0","caption":"Customer Name:","displayValue":"","height":"25px","readonly":true,"width":"450px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"fAcctFullname.dataValue","targetProperty":"dataValue"}, {}]
								}]
							}],
							slcPayMode: ["wm.SelectMenu", {"border":"0","caption":"Interest Payment Mode : ","captionSize":"180px","dataField":"dataValue","dataType":"EntryData","dataValue":"1","displayField":"name","displayValue":"Credit To Account","emptyValue":"null","height":"25px","readonly":true,"width":"360px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"varPayMode","targetProperty":"dataSet"}, {}],
									wire1: ["wm.Wire", {"expression":"${fSpecialInstr.dataValue}=='TD02'","targetProperty":"showing"}, {}]
								}]
							}]
						}],
						fPlacementAmtPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"1910px"}, {}, {
							fPlacementAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Placement Amount:","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"required":true,"width":"300px"}, {"onchange":"submitTD"}],
							spacer1: ["wm.Spacer", {"height":"100%","width":"150px"}, {}],
							fCreditAccount: ["wm.Text", {"border":"0","caption":"Account Number:","captionSize":"180px","displayValue":"","emptyValue":"null","height":"25px","regExp":"^[0-9]*$","required":true,"width":"360px"}, {"onchange":"fCreditAccountChange"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"${fSpecialInstr.dataValue}=='TD02'","targetProperty":"showing"}, {}]
								}]
							}],
							lblAccountResult: ["wm.Label", {"padding":"4"}, {}]
						}],
						fTermPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							fTerm: ["wm.Number", {"border":"0","caption":"Term (days):","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","rangeMessage":undefined,"required":true,"showMessages":false,"width":"300px"}, {"onchange":"computeDtTerm","onchange1":"submitTD"}, {
								binding: ["wm.Binding", {}, {}, {
									wire1: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.minterm","targetProperty":"minimum"}, {}]
								}]
							}],
							lblTermResult: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#ff0202"},"width":"100%"}, {}]
						}],
						fIntRate: ["wm.Text", {"border":"0","caption":"Interest Rate:","displayValue":"0.00%","emptyValue":"zero","height":"25px","readonly":true,"width":"300px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"parseFloat(${acctProdType.selectedItem.intrate}*100).toFixed(2) + \"%\"","targetProperty":"dataValue"}, {}]
							}]
						}],
						fWTaxRate: ["wm.Text", {"border":"0","caption":"With Tax Rate:","displayValue":"0.00%","emptyValue":"zero","height":"25px","readonly":true,"width":"300px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"parseFloat(${acctProdType.selectedItem.wtaxrate}*100).toFixed(2) + \"%\"","targetProperty":"dataValue"}, {}]
							}]
						}],
						fBkdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Booking Date:","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"required":true,"useLocalTime":true,"width":"300px"}, {"onchange":"computeDtTerm","onchange1":"submitTD"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"minimum"}, {}]
							}]
						}],
						fMatdtPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							fMatdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Maturity Date:","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"useLocalTime":true,"width":"300px"}, {}],
							lblMatResult: ["wm.Label", {"padding":"4","width":"100%"}, {}]
						}],
						fTotalInt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Total Interest:","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"width":"300px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${fPlacementAmt.dataValue}*${acctProdType.selectedItem.intrate}*${fTerm.dataValue}/360","targetProperty":"dataValue"}, {}]
							}]
						}],
						fLessWithTaxAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Less With Tax Amount:","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"width":"300px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${fTotalInt.dataValue}*(${acctProdType.selectedItem.wtaxrate})","targetProperty":"dataValue"}, {}]
							}]
						}],
						txtDocStamps: ["wm.Number", {"border":"0","caption":"Less: Doc Stamps: ","displayValue":"0.00","height":"25px","places":2,"readonly":true,"width":"300px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"parseFloat((((${fPlacementAmt.dataValue}/200)*1.50)*${fTerm.dataValue})/365).toFixed(2)","targetProperty":"dataValue"}, {}]
							}]
						}],
						fMatValue: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Maturity Value:","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"width":"300px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"(${fPlacementAmt.dataValue}+${fTotalInt.dataValue})-${fLessWithTaxAmt.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}]
					}],
					pnlNewSavDepAcct: ["wm.Panel", {"height":"285px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
						fSATxdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Transaction Date:","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"315px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
							}]
						}],
						ffSACIFNo: ["wm.Text", {"border":"0","caption":"CIF No:","displayValue":"","height":"25px","readonly":true,"width":"317px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"dataValue"}, {}]
							}]
						}],
						fSACustName: ["wm.Text", {"border":"0","caption":"Customer Name:","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"500px"}, {"onchange":"submitSA","onfocus":"fSACustNameFocus"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"fAcctFullname.dataValue","targetProperty":"dataValue"}, {}]
							}]
						}],
						fAcctName: ["wm.Text", {"border":"0","caption":"Account Name:","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"500px"}, {"onchange":"submitSA","onfocus":"fAcctNameFocus"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"fAcctFullname.dataValue","targetProperty":"dataValue"}, {}]
							}]
						}],
						fSAAcctType: ["wm.Text", {"border":"0","caption":"Account Type:","displayValue":"","height":"25px","readonly":true,"width":"500px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"acctAcctType.displayValue","targetProperty":"dataValue"}, {}]
							}]
						}],
						fSADepProdName: ["wm.Text", {"border":"0","caption":"Product Name:","displayValue":"","height":"25px","readonly":true,"width":"500px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.prodname","targetProperty":"dataValue"}, {}]
							}]
						}],
						fSAAmount: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Amount:","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"showing":false,"width":"300px"}, {"onchange":"submitSA"}],
						fSACurrency: ["wm.Text", {"border":"0","caption":"Currency:","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"221px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.currency","targetProperty":"dataValue"}, {}]
							}]
						}],
						pnlCheckRange: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"//${acctProdType.selectedItem.checkbookind}==true","targetProperty":"showing"}, {}]
							}],
							fSAcheckFrom: ["wm.Text", {"border":"0","caption":"Check Series From:","dataValue":undefined,"displayValue":"","height":"100%","styles":{},"width":"240px"}, {}],
							fSAcheckTo: ["wm.Text", {"border":"0","caption":"To:","captionSize":"30px","dataValue":undefined,"displayValue":"","height":"100%","width":"140px"}, {}],
							fSAcheckBookNo: ["wm.Text", {"border":"0","caption":"Check Book No : ","dataValue":"0","displayValue":"0","emptyValue":"emptyString","height":"100%","styles":{},"width":"240px"}, {}]
						}],
						fSOADispo: ["wm.SelectMenu", {"border":"0","caption":"SOA Disposition:","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"240px"}, {"onchange":"fSOADispoChange"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svSoaDispo","targetProperty":"dataSet"}, {}]
							}]
						}],
						fDeliveryDispo: ["wm.SelectMenu", {"border":"0","caption":"Delivery Mode:","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"240px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svDeliveryDispo","targetProperty":"dataSet"}, {}],
								wire1: ["wm.Wire", {"expression":"${fSOADispo.dataValue} == \"D\"","targetProperty":"showing"}, {}]
							}]
						}],
						fAddressDispo: ["wm.Text", {"border":"0","caption":"Address :","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"450px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${fDeliveryDispo.dataValue} != null","targetProperty":"showing"}, {}]
							}]
						}]
					}],
					fAccountnoPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"750px"}, {}, {
						fAccountno: ["wm.Text", {"border":"0","caption":"Account Number:","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"320px"}, {"onchange":"fAccountnoChange"}],
						btnSearch1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Search","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnSearch1Click"}],
						lblResult: ["wm.Label", {"caption":"","padding":"4","width":"300px"}, {}]
					}],
					pnlFileup: ["wm.Panel", {"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"422px"}, {}, {
						dojoFileUpload: ["wm.DojoFileUpload", {"buttonCaption":"Upload Image","height":"28px","operation":"uploadImageFile","useList":false,"width":"100px"}, {"onChange":"dojoFileUploadChange","onError":"dojoFileUploadError","onSuccess":"dojoFileUploadSuccess"}, {
							input: ["wm.ServiceInput", {"type":"uploadImageFileInputs"}, {}]
						}],
						lblUpload: ["wm.Label", {"align":"left","caption":"Select file for upload","height":"28px","margin":"0,0,0,5","padding":"4","styles":{"color":"#000000"}}, {}]
					}],
					pnlButton: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
						btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnSubmitClick"}],
						btnViewSigcard: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"View Sigcard","desktopHeight":"28px","disabled":true,"height":"28px","styles":{},"width":"120px"}, {"onclick":"svViewSigcard"}],
						btnCancel: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Cancel","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnCancelClick"}]
					}]
				}]
			}]
		}]
	}]
}