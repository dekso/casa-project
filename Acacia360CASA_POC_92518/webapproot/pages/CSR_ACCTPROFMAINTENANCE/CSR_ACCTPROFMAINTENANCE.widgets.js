CSR_ACCTPROFMAINTENANCE.widgets = {
	svCheckAcct: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkAccount","service":"AccountFacade"}, {"onResult":"svCheckAcctResult"}, {
		input: ["wm.ServiceInput", {"type":"checkAccountInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"accountno"}, {}]
			}]
		}]
	}],
	svGetAcctInfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"acctInfo","service":"AccountFacade"}, {"onResult":"svGetAcctInfoResult"}, {
		input: ["wm.ServiceInput", {"type":"acctInfoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"svCheckAcct.value","targetProperty":"accountno"}, {}]
			}]
		}]
	}],
	svAcctStat: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"CASA-ACCTSTS\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svPostTx: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"POSTTX\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svWatchlist: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"WATCHLISTCD\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svSave: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"acctSave","service":"AccountFacade"}, {"onResult":"svSaveResult"}, {
		input: ["wm.ServiceInput", {"type":"acctSaveInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctSatus.dataValue","targetProperty":"form.acctsts"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"acctWatchlist.dataValue","targetProperty":"form.watchlistcode"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"acctPostingRes.dataValue","targetProperty":"form.posttx"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"form.accountno"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"form.dtopened"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"largeTextArea1.dataValue","targetProperty":"form.alertmessage"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"aletLevel.dataValue","targetProperty":"form.alertlevel"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"alertIndi.dataValue","targetProperty":"form.alertflag"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"acctWatchlist.dataValue","targetProperty":"form.watchlist"}, {}]
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
	svAlertlevel: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"ALERTLEVEL\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	varBoolean: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Yes\",\"dataValue\":\"1\"},{\"name\":\"No\",\"dataValue\":\"0\"}]","type":"EntryData"}, {}],
	searchResultDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","title":"Search Result By Name"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			gridResultName: ["wm.DojoGrid", {"_classes":{"domNode":["cDojoGrid"]},"border":"0","columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Name: \" + ${name} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Acctno: \" + ${acctno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"acctno","title":"Acctno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"btn","title":"Action","width":"100px","align":"center","formatFunc":"wm_button_formatter","expression":"\"Select\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"productCode","title":"ProductCode","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""}
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
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"Account Maintenance","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,3","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"100px","displayValue":"","emptyValue":"null","height":"25px","required":true,"styles":{},"width":"300px"}, {"onfocus":"fAcctNoFocus"}],
				spacer1: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}],
				fAcctName: ["wm.Text", {"border":"0","caption":"or Account Name:","captionSize":"110px","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"320px"}, {"onfocus":"fAcctNameFocus"}],
				btnSearch: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Search","desktopHeight":"28px","height":"28px","margin":"0,0,0,10","styles":{},"width":"80px"}, {"onclick":"btnSearchClick"}]
			}],
			pnlAcctInfo: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"400px"}, {}, {
					acctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.accountno","targetProperty":"dataValue"}, {}]
						}]
					}],
					acctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.name","targetProperty":"dataValue"}, {}]
						}]
					}],
					acctProdtype: ["wm.Text", {"border":"0","caption":"Product Type:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.prodtype","targetProperty":"dataValue"}, {}]
						}]
					}],
					acctSolicitingOfficer: ["wm.Text", {"border":"0","caption":"Soliciting Officer:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.solofficer","targetProperty":"dataValue"}, {}]
						}]
					}],
					acctReferralOfficer: ["wm.Text", {"border":"0","caption":"Referral Officer:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.refofficer","targetProperty":"dataValue"}, {}]
						}]
					}],
					acctChannel: ["wm.Text", {"border":"0","caption":"Campaign:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.channel","targetProperty":"dataValue"}, {}]
						}]
					}],
					acctSatus: ["wm.SelectMenu", {"border":"0","caption":"Account Status:","captionSize":"120px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","height":"25px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svAcctStat","targetProperty":"dataSet"}, {}],
							wire1: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.acctsts","targetProperty":"dataValue"}, {}]
						}]
					}],
					fAcctName1: ["wm.Text", {"border":"0","caption":"Change ATA Account No.:","captionSize":"120px","displayValue":"","emptyValue":"null","height":"25px","required":true}, {"onfocus":"fAcctName1Focus"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${svGetAcctInfo.ataind} == true","targetProperty":"showing"}, {}]
						}]
					}],
					specialInstruction: ["wm.SelectMenu", {"border":"0","caption":"Special Instruction","captionSize":"120px","dataValue":undefined,"displayValue":"","height":"25px","width":"190px"}, {}],
					alertIndi: ["wm.RadioSet", {"border":"0","caption":"Alert Indicator:","dataField":"dataValue","dataType":"EntryData","desktopHeight":"56px","displayField":"name","displayValue":"","emptyValue":"null","height":"56px"}, {"onchange":"alertIndiChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire1: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.alertflag","targetProperty":"dataValue"}, {}],
							wire: ["wm.Wire", {"expression":undefined,"source":"varBoolean","targetProperty":"dataSet"}, {}]
						}]
					}],
					pnlAlert: ["wm.Panel", {"height":"140px","horizontalAlign":"left","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
						aletLevel: ["wm.SelectMenu", {"border":"0","caption":"Alert Level:","captionSize":"120px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","height":"25px","width":"190px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svAlertlevel","targetProperty":"dataSet"}, {}],
								wire1: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.alertlevel","targetProperty":"dataValue"}, {}]
							}]
						}],
						largeTextArea1: ["wm.LargeTextArea", {"border":"0","caption":"Alert Message:","captionPosition":"left","captionSize":"120px","desktopHeight":"100px","displayValue":"","height":"100px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.alertmessage","targetProperty":"dataValue"}, {}]
							}]
						}]
					}]
				}],
				spacer10: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}],
				panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"331px"}, {}, {
					acctDtbk: ["wm.Date", {"border":"0","caption":"Date Opened:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.dtopened","targetProperty":"dataValue"}, {}]
						}]
					}],
					acctShortname: ["wm.Text", {"border":"0","caption":"Short Name:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.shortname","targetProperty":"dataValue"}, {}]
						}]
					}],
					acctJointAcctType: ["wm.Text", {"border":"0","caption":"Account Type:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.jointaccttype","targetProperty":"dataValue"}, {}]
						}]
					}],
					acctWatchlist: ["wm.SelectMenu", {"allowNone":true,"border":"0","caption":"Watch List:","captionSize":"120px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svWatchlist","targetProperty":"dataSet"}, {}],
							wire1: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.watchlist","targetProperty":"dataValue"}, {}]
						}]
					}],
					acctPostingRes: ["wm.SelectMenu", {"border":"0","caption":"Posting Restriction:","captionSize":"120px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","height":"25px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svGetAcctInfo.posttx","targetProperty":"dataValue"}, {}],
							wire1: ["wm.Wire", {"expression":undefined,"source":"svPostTx","targetProperty":"dataSet"}, {}]
						}]
					}],
					panel9: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						AcctSave: ["wm.Button", {"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","width":"100px"}, {"onclick":"svSave"}],
						AcctCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"28px","height":"28px","width":"100px"}, {"onclick":"AcctCancelClick"}]
					}],
					panel7: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"bottom","width":"100%"}, {}, {
						btnJournal: ["wm.Button", {"border":"1","caption":"","desktopHeight":"28px","height":"28px","width":"169px"}, {"onclick":"btnJournalClick"}]
					}]
				}]
			}]
		}]
	}]
}