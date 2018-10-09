CSR_CLOSEACCT.widgets = {
	svCheckAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getAcctClosure","service":"AccountFacade"}, {"onResult":"svCheckAccountResult"}, {
		input: ["wm.ServiceInput", {"type":"getAcctClosureInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"accountno"}, {}]
			}]
		}]
	}],
	svCloseAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"acctClose","service":"AccountFacade"}, {"onResult":"svCloseAccountResult"}, {
		input: ["wm.ServiceInput", {"type":"acctCloseInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"accountno"}, {}]
			}]
		}]
	}],
	svSearchByName: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"accountInquiryName","service":"FinTxFacade"}, {"onResult":"svSearchByNameResult"}, {
		input: ["wm.ServiceInput", {"type":"accountInquiryNameInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fAcctName.dataValue","targetProperty":"name"}, {}]
			}]
		}]
	}],
	searchResultDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","title":"Search Result By Name"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			gridResultName: ["wm.DojoGrid", {"_classes":{"domNode":["cDojoGrid"]},"border":"0","columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Name: \" + ${name} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Acctno: \" + ${acctno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"acctno","title":"Acctno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"btn","title":"Action","width":"100px","align":"center","formatFunc":"wm_button_formatter","expression":"\"Select\"","isCustomField":true,"mobileColumn":false}
],"height":"100%","localizationStructure":{},"margin":"0,0,5,0","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {"onGridButtonClick":"gridResultNameGridButtonClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svSearchByName","targetProperty":"dataSet"}, {}]
				}]
			}],
			panel10: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				label3: ["wm.Label", {"padding":"4","styles":{"color":"#030303"},"width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"\"Result : \"+${svSearchByName.count}","targetProperty":"caption"}, {}]
					}]
				}],
				btnClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"30px","height":"30px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseClick"}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"Account Closure","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,3","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"100px","displayValue":"","emptyValue":"null","height":"25px","required":true,"styles":{},"width":"300px"}, {"onfocus":"fAcctNoFocus"}],
				spacer1: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}],
				fAcctName: ["wm.Text", {"border":"0","caption":"or Account Name:","captionSize":"110px","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"320px"}, {"onfocus":"fAcctNameFocus"}],
				btnSearch: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Search","desktopHeight":"28px","height":"28px","margin":"0,0,0,10","styles":{},"width":"80px"}, {"onclick":"btnSearchClick"}]
			}],
			pnlAcctDetails: ["wm.Panel", {"height":"407px","horizontalAlign":"left","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
				label2: ["wm.Label", {"caption":"Account Details","height":"30px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}],
				panel4: ["wm.Panel", {"height":"318px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					panel5: ["wm.Panel", {"height":"321px","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"410px"}, {}, {
						acctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.accountno","targetProperty":"dataValue"}, {}]
							}]
						}],
						spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						acctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.accountname","targetProperty":"dataValue"}, {}]
							}]
						}],
						spacer2: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						acctName1: ["wm.Text", {"border":"0","caption":"Status:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.accountstatus","targetProperty":"dataValue"}, {}]
							}]
						}],
						spacer3: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						AcctLastUpdate: ["wm.Date", {"border":"0","caption":"Date of Last Update","captionSize":"200px","displayValue":"","height":"25px","readonly":true,"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.dtlastupdate","targetProperty":"dataValue"}, {}]
							}]
						}],
						spacer4: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						acctPostingRes: ["wm.Text", {"border":"0","caption":"Posting Restriction","captionSize":"200px","displayValue":"","height":"25px","readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.posttx","targetProperty":"dataValue"}, {}]
							}]
						}],
						acctCurrentBal: ["wm.Number", {"border":"0","caption":"Current Balance","captionSize":"200px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.currentbal","targetProperty":"dataValue"}, {}]
							}]
						}],
						acctFloat: ["wm.Number", {"border":"0","caption":"Float","captionSize":"200px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.floatamt","targetProperty":"dataValue"}, {}]
							}]
						}],
						acctHold: ["wm.Number", {"border":"0","caption":"Hold","captionSize":"200px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.holdamt","targetProperty":"dataValue"}, {}]
							}]
						}],
						acctAvailBal: ["wm.Number", {"border":"0","caption":"Available Balance","captionSize":"200px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}],
						acctUnpostedInt: ["wm.Number", {"border":"0","caption":"Unposted Interest","captionSize":"200px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}],
						acctWtaxAmt: ["wm.Number", {"border":"0","caption":"W/ Tax Amount","captionSize":"200px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}],
						acctClosingBal: ["wm.Number", {"border":"0","caption":"Closing Balance","captionSize":"200px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}]
					}],
					spacer10: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}]
				}],
				panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
					btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnSubmitClick"}],
					btnCancel: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Cancel","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnCancelClick"}]
				}]
			}]
		}]
	}]
}