CSHR_ACCTPROFMAINTENANCE.widgets = {
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
	searchResultDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"Search Result"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"15px"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"ACCOUNT MAINTENANCE","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,3","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}],
				spacer1: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}],
				button1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}],
				button2: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Back","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}]
			}],
			panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"10,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${svSearchAccount.result}==1","targetProperty":"showing"}, {}]
				}],
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"350px"}, {}, {
					acctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
						}]
					}],
					spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					acctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${svSearchAccount.form.name}","targetProperty":"dataValue"}, {}]
						}]
					}],
					spacer2: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					spacer3: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					spacer4: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					spacer5: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					selectMenu1: ["wm.SelectMenu", {"border":"0","caption":"Status","dataValue":undefined,"displayValue":"","height":"25px"}, {}],
					selectMenu2: ["wm.SelectMenu", {"border":"0","caption":"Special Instruction","dataValue":undefined,"displayValue":"","height":"25px"}, {}],
					acctStatus: ["wm.Text", {"border":"0","caption":"Account Status:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.form.accountstatus","targetProperty":"dataValue"}, {}]
						}]
					}]
				}],
				spacer10: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}],
				panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"270px"}, {}, {
					acctDtbk: ["wm.Date", {"border":"0","caption":"Date Opened:","captionSize":"120px","displayValue":"","height":"25px","readonly":true,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.form.dateopened","targetProperty":"dataValue"}, {}]
						}]
					}],
					spacer6: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					acctShortname: ["wm.Text", {"border":"0","caption":"Short Name:","captionSize":"120px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"styles":{}}, {}],
					spacer7: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					acctJoinAcctType: ["wm.Text", {"border":"0","caption":"Join Account Type:","captionSize":"120px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"styles":{}}, {}],
					spacer8: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					acctWatchlist: ["wm.SelectMenu", {"border":"0","caption":"Watch List","dataValue":undefined,"displayValue":"","height":"25px"}, {}],
					spacer9: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					acctPostingRes: ["wm.SelectMenu", {"border":"0","caption":"Posting Restriction","dataValue":undefined,"displayValue":"","height":"25px"}, {}],
					panel9: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						AcctSave: ["wm.Button", {"border":"1","caption":"Save","desktopHeight":"28px","height":"28px","width":"100px"}, {"onclick":"AcctSaveClick"}],
						AcctBack: ["wm.Button", {"border":"1","caption":"Back","desktopHeight":"28px","height":"28px","width":"80px"}, {"onclick":"AcctBackClick"}]
					}],
					panel7: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"bottom","width":"100%"}, {}, {
						btnJournal: ["wm.Button", {"border":"1","caption":"","desktopHeight":"28px","height":"28px","width":"169px"}, {"onclick":"btnJournalClick"}]
					}]
				}],
				panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					tabLayers1: ["wm.Layers", {"defaultLayer":0,"transition":"slide"}, {}, {
						layer1: ["wm.Layer", {"border":"1","borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
						layer2: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"left","styles":{},"themeStyleType":"","verticalAlign":"top"}, {}, {
							dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"txvaldt","title":"Txvaldt","width":"100%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"datePattern":"MM/dd/yyyy ","timePattern":"HH:mm:ss","formatLength":"short","dateType":"date and time"},"mobileColumn":false},
{"show":true,"field":"txcode","title":"Txcode","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"txrefno","title":"Txrefno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"txamt","title":"Txamt","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":true,"field":"credit","title":"Credit","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"editorProps":null,"mobileColumn":false},
{"show":true,"field":"debit","title":"Debit","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"editorProps":null,"mobileColumn":false},
{"show":true,"field":"outbal","title":"Outbal","width":"100%","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Txvaldt: \" + ${wm.runtimeId}.formatCell(\"txvaldt\", ${txvaldt}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txcode: \" + ${txcode}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txrefno: \" + ${txrefno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Credit: \" + ${wm.runtimeId}.formatCell(\"credit\", ${credit}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Debit: \" + ${wm.runtimeId}.formatCell(\"debit\", ${debit}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Outbal: \" + ${wm.runtimeId}.formatCell(\"outbal\", ${outbal}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.casa.fintx.forms.AccountInquiryHistoryForm","height":"400px","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.histform","targetProperty":"dataSet"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}