TLR_ACCTBALINQ_BU.widgets = {
	svSearchAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"accountInquiry","service":"FinTxFacade"}, {"onResult":"svSearchAccountResult"}, {
		input: ["wm.ServiceInput", {"type":"accountInquiryInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"acctno"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fAcctName.dataValue","targetProperty":"name"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svSearchByName: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"accountInquiryName","service":"FinTxFacade"}, {"onResult":"svSearchByNameResult"}, {
		input: ["wm.ServiceInput", {"type":"accountInquiryNameInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fAcctName.dataValue","targetProperty":"name"}, {}]
			}]
		}]
	}],
	svOffAlert: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"acctAlertOff","service":"AccountFacade"}, {"onResult":"svOffAlertResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"acctAlertOffInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"accountno"}, {}]
			}]
		}]
	}],
	searchResultDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","title":"Search Result By Name"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			gridResultName: ["wm.DojoGrid", {"_classes":{"domNode":["cDojoGrid"]},"border":"0","columns":[
{"show":true,"field":"acctno","title":"Acctno","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"btn","title":"Action","width":"100px","align":"center","formatFunc":"wm_button_formatter","editorProps":null,"expression":"\"Select\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Acctno: \" + ${acctno} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${name}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.casa.fintx.forms.InquiryNameList","height":"100%","localizationStructure":{},"margin":"0,0,5,0","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {"onGridButtonClick":"gridResultNameGridButtonClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svSearchByName","targetProperty":"dataSet"}, {}]
				}]
			}],
			panel9: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				label3: ["wm.Label", {"padding":"4","styles":{"color":"#030303"},"width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"\"Result : \"+${svSearchByName.count}","targetProperty":"caption"}, {}]
					}]
				}],
				btnClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"30px","height":"30px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseClick"}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
			label1: ["wm.Label", {"caption":"Deposit Account Balance Inquiry","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
		}],
		panel3: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,3","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"100px","displayValue":"","emptyValue":"null","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"300px"}, {"onfocus":"fAcctNoFocus"}],
			label2: ["wm.Label", {"align":"center","caption":"or","padding":"4","styles":{"color":"#0d0c0c"},"width":"29px"}, {}],
			fAcctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"100px","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"300px"}, {"onfocus":"fAcctNameFocus"}],
			spacer1: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}],
			btnSearch: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Search","desktopHeight":"23px","height":"23px","styles":{},"width":"80px"}, {"onclick":"btnSearchClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"panel3.invalid","targetProperty":"disabled"}, {}]
				}]
			}]
		}],
		panel4: ["wm.Panel", {"height":"185px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"${svSearchAccount.result}==1","targetProperty":"showing"}, {}]
			}],
			panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"350px"}, {}, {
				acctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${svSearchAccount.inquiry.accountno}","targetProperty":"dataValue"}, {}]
					}]
				}],
				acctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${svSearchAccount.inquiry.name}","targetProperty":"dataValue"}, {}]
					}]
				}],
				acctDtbk: ["wm.Date", {"border":"0","caption":"Date Opened:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.dateopened","targetProperty":"dataValue"}, {}]
					}]
				}],
				acctProd: ["wm.Text", {"border":"0","caption":"Product","captionSize":"120px","displayValue":"","height":"25px","readonly":true}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.product","targetProperty":"dataValue"}, {}]
					}]
				}],
				acctDtlast: ["wm.Date", {"border":"0","caption":"Last Date Update:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.datelast","targetProperty":"dataValue"}, {}]
					}]
				}],
				acctPostRestric: ["wm.Text", {"border":"0","caption":"Posting Restriction:","captionSize":"120px","displayValue":"","height":"25px","readonly":true}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.posttx","targetProperty":"dataValue"}, {}]
					}]
				}]
			}],
			spacer10: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}],
			panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"270px"}, {}, {
				acctStatus: ["wm.Text", {"border":"0","caption":"Account Status:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.accountstatus","targetProperty":"dataValue"}, {}]
					}]
				}],
				acctAvailablebal: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Book Balance:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.accountbal","targetProperty":"dataValue"}, {}]
					}]
				}],
				acctFloatamt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Float Amount:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.floatamount","targetProperty":"dataValue"}, {}]
					}]
				}],
				acctHoldamt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Hold Amount:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.holdamount","targetProperty":"dataValue"}, {}]
					}]
				}],
				acctTotalamt: ["wm.Number", {"border":"0","caption":"Available Balance:","captionSize":"120px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${acctAvailablebal.dataValue}-(${acctHoldamt.dataValue}+${acctFloatamt.dataValue})","targetProperty":"dataValue"}, {}]
					}]
				}],
				acctNoATA: ["wm.Text", {"border":"0","caption":"ATA Account No:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.accountnoata","targetProperty":"dataValue"}, {}]
					}]
				}],
				panel7: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
					btnJournal: ["wm.Button", {"border":"1","caption":"","desktopHeight":"23px","height":"23px","margin":"0,0,0,0","styles":{},"width":"150px"}, {"onclick":"btnJournalClick"}],
					btnHome: ["wm.Button", {"border":"1","caption":"Home","desktopHeight":"23px","height":"23px","margin":"0,0,0,10","styles":{},"width":"81px"}, {"onclick":"btnHomeClick"}]
				}]
			}],
			pnlAlert: ["wm.Panel", {"height":"138px","horizontalAlign":"center","styles":{},"verticalAlign":"top","width":"300px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${svSearchAccount.inquiry.alertflag}==1||${svSearchAccount.inquiry.alertflag}==\"1\"","targetProperty":"showing"}, {}]
				}],
				fAlertMessage: ["wm.LargeTextArea", {"_classes":{"domNode":["CustomArea"]},"border":"0","caption":"Alert Message:","captionSize":"20px","desktopHeight":"80px","displayValue":"","height":"80px","margin":"5,0,0,0","padding":"3","styles":{}}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.alertmessage","targetProperty":"dataValue"}, {}]
					}]
				}],
				fAlertLevel: ["wm.Number", {"border":"0","caption":"Alert Level:","captionSize":"70px","displayValue":"","height":"25px","readonly":true}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.inquiry.alertlevel","targetProperty":"dataValue"}, {}]
					}]
				}],
				btnAlert: ["wm.Button", {"border":"1","caption":"Off Alert","desktopHeight":"26px","height":"26px","width":"81px"}, {"onclick":"btnAlertClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"(${app.varRole.dataValue}==\"teller\"&&${svSearchAccount.inquiry.alertlevel}==1) ||\n(${app.varRole.dataValue}==\"csr\"&&(${svSearchAccount.inquiry.alertlevel}==2||${svSearchAccount.inquiry.alertlevel}==1))\n","targetProperty":"showing"}, {}]
					}]
				}]
			}]
		}],
		panel8: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0,0,20,0","styles":{},"verticalAlign":"top","width":"720px"}, {}, {
			tabLayers1: ["wm.Layers", {"defaultLayer":0,"styles":{}}, {}, {
				layer1: ["wm.Layer", {"border":"1","borderColor":"","caption":"layer1","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
				layer2: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"layer2","horizontalAlign":"left","styles":{},"themeStyleType":"","verticalAlign":"top"}, {}, {
					dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"txvaldt","title":"Transaction Date","width":"100%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"datePattern":"MM/dd/yyyy","timePattern":"HH:mm:ss","formatLength":"short","dateType":"date and time"},"mobileColumn":false},
{"show":true,"field":"txcode","title":"Transaction","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"txrefno","title":"Reference No","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"txamt","title":"Amount","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":true,"field":"debit","title":"Debit","width":"70px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"editorProps":null,"expression":"if (${debit}==null){\n\t\"-\"\n} else {\n\t${debit}\n}","mobileColumn":false},
{"show":true,"field":"credit","title":"Credit","width":"70px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"editorProps":null,"expression":"if (${credit}==null){\n\t\"-\"\n} else {\n\t${credit}\n}","mobileColumn":false},
{"show":true,"field":"outbal","title":"Outbal","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Transaction Date: \" + ${wm.runtimeId}.formatCell(\"txvaldt\", ${txvaldt}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Transaction: \" + ${txcode}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Reference No: \" + ${txrefno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Debit: \" + ${wm.runtimeId}.formatCell(\"debit\", ${debit}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Credit: \" + ${wm.runtimeId}.formatCell(\"credit\", ${credit}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Outbal: \" + ${wm.runtimeId}.formatCell(\"outbal\", ${outbal}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.histlist","targetProperty":"dataSet"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}