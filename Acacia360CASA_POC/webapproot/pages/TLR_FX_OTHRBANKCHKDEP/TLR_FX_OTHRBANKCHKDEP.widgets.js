TLR_FX_OTHRBANKCHKDEP.widgets = {
	svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"CURR\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svBank: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"BANK\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svClearType: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"CLEARTYPE\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svOBCheckDep: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cashDepWithDrCrMemo","service":"FinTxFacade"}, {"onResult":"svOBCheckDepResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"cashDepWithDrCrMemoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fChkDraweeBnk.dataValue","targetProperty":"jrnl.draweebank"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fLedgerline.dataValue","targetProperty":"jrnl.ledgerlineno"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"jrnl.txby"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"fCurr.dataValue","targetProperty":"jrnl.currency"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"fChkNo.dataValue","targetProperty":"jrnl.checkno"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"fChkTxdt.dataValue","targetProperty":"jrnl.checkdate"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"fClrtype.dataValue","targetProperty":"jrnl.cleartype"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"jrnl.txvaldt"}, {}],
				wire8: ["wm.Wire", {"expression":"1","targetProperty":"jrnl.txstatus"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"fBrstnNo.dataValue","targetProperty":"jrnl.brstnno"}, {}],
				wire10: ["wm.Wire", {"expression":"111212","targetProperty":"jrnl.txcode"}, {}],
				wire12: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"jrnl.txdate"}, {}],
				wire13: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"jrnl.accountno"}, {}],
				wire14: ["wm.Wire", {"expression":undefined,"source":"fAmt.dataValue","targetProperty":"jrnl.txamount"}, {}],
				wire11: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"jrnl.unit"}, {}],
				wire15: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"jrnl.instcode"}, {}],
				wire16: ["wm.Wire", {"expression":undefined,"source":"fLate.dataValue","targetProperty":"jrnl.checklateind"}, {}],
				wire17: ["wm.Wire", {"expression":undefined,"source":"varChecklist","targetProperty":"checklist"}, {}]
			}]
		}]
	}],
	svCancelReject: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cancelOverrideTX","service":"FinTxFacade"}, {"onResult":"svCancelRejectResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"cancelOverrideTXInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"svOBCheckDep.txrefno","targetProperty":"txrefno"}, {}]
			}]
		}]
	}],
	svOverride: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"overrideTransaction","service":"FinTxFacade"}, {"onResult":"svOverrideResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"overrideTransactionInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"overrideUsername.dataValue","targetProperty":"username"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"svOBCheckDep.txrefno","targetProperty":"txrefno"}, {}]
			}]
		}]
	}],
	svValidateUser: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"validateUser","service":"UtilFacade"}, {"onResult":"svValidateUserResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"containerWidget","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"validateUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"overrideUsername.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"overridePassword.dataValue","targetProperty":"password"}, {}]
			}]
		}]
	}],
	varCheckList: ["wm.Variable", {"isList":true,"type":"com.smslai_eoddb.data.Tbchecklist"}, {}],
	svCheckAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkAcct","service":"FinTxFacade"}, {"onResult":"svCheckAccountResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"checkAcctInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"acctno"}, {}]
			}]
		}]
	}],
	varCheckDetail: ["wm.Variable", {"type":"com.smslai_eoddb.data.Tbfintxchecklist"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"fChkAmt.dataValue","targetProperty":"dataSet.checkamt"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"fChkNo.dataValue","targetProperty":"dataSet.checkno"}, {}],
			wire2: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataSet.txdate"}, {}],
			wire3: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"dataSet.txby"}, {}],
			wire4: ["wm.Wire", {"expression":undefined,"source":"fChkDraweeBnk.dataValue","targetProperty":"dataSet.draweebank"}, {}],
			wire5: ["wm.Wire", {"expression":undefined,"source":"fBrstnNo.dataValue","targetProperty":"dataSet.brstnno"}, {}],
			wire6: ["wm.Wire", {"expression":undefined,"source":"fClrtype.dataValue","targetProperty":"dataSet.clearingtype"}, {}]
		}]
	}],
	varChecklist: ["wm.Variable", {"isList":true,"type":"com.smslai_eoddb.data.Tbfintxchecklist"}, {}],
	svTransInfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getTxinfo","service":"FinTxFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getTxinfoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Other Bank Check Deposit\"","targetProperty":"txname"}, {}]
			}]
		}]
	}],
	svPrint: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"printDocSlip","service":"FinTxFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"printDocSlipInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"svOBCheckDep.txrefno","targetProperty":"txrefno"}, {}]
			}]
		}]
	}],
	varCheck: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"\",\"dataValue\":\"1\"}]","type":"EntryData"}, {}],
	dlgOverride: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"150px","height":"150px","title":"Override Transaction","width":"350px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			pnlOverride: ["wm.Panel", {"height":"61px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				overrideUsername: ["wm.Text", {"border":"0","caption":"Username:","dataValue":undefined,"displayValue":"","height":"25px","required":true}, {}],
				overridePassword: ["wm.Text", {"border":"0","caption":"Password:","dataValue":undefined,"displayValue":"","height":"25px","password":true,"required":true}, {}]
			}],
			panel6: ["wm.Panel", {"height":"37px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				btnSubmit1: ["wm.Button", {"border":"1","caption":"Override","desktopHeight":"30px","height":"30px","styles":{},"width":"114px"}, {"onclick":"svValidateUser"}],
				btnCancel: ["wm.Button", {"border":"1","caption":"Reject","desktopHeight":"30px","height":"30px","styles":{},"width":"120px"}, {"onclick":"svCancelReject"}]
			}]
		}]
	}],
	dlgCheckList: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget1","desktopHeight":"320px","height":"320px","title":"Check List","width":"700px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Checkno: \" + ${checkno} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Checkamt: \" + ${wm.runtimeId}.formatCell(\"checkamt\", ${checkamt}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Draweebank: \" + ${draweebank}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Brstnno: \" + ${brstnno}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"txrefmain","title":"Txrefmain","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"checkno","title":"Checkno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"checkamt","title":"Checkamt","width":"100px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":false,"field":"clearingtype","title":"Clearingtype","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"draweebank","title":"Draweebank","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"brstnno","title":"Brstnno","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"btn","title":"Action","width":"70px","align":"center","formatFunc":"wm_button_formatter","formatProps":null,"editorProps":null,"expression":"\"Delete\"","isCustomField":true,"mobileColumn":false}
],"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true}, {"onGridButtonClick":"dojoGrid1GridButtonClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"varChecklist","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"39px","height":"39px"}, {}, {
			text1Panel: ["wm.Panel", {"height":"27px","horizontalAlign":"left","margin":"0,0,0,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				checkTotal: ["wm.Number", {"border":"0","caption":"Total Amount:","captionSize":"90px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"300px"}, {}]
			}],
			btnClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"28px","height":"28px","margin":"0,0,0,0","styles":{},"width":"80px"}, {"onclick":"btnCloseClick"}]
		}]
	}],
	dlgCharge: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"110px","height":"110px","title":"Interbranch Service Charge","width":"350px"}, {}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			fServiceAmt: ["wm.Number", {"border":"0","caption":"Service Charge:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svTransInfo.servicecharge","targetProperty":"dataValue"}, {}]
				}]
			}],
			panel9: ["wm.Panel", {"height":"37px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				btnProceedWaive: ["wm.Button", {"border":"1","caption":"Proceed Waive","desktopHeight":"25px","height":"25px","width":"110px"}, {"onclick":"btnProceedWaiveClick"}],
				btnProceedCollect: ["wm.Button", {"border":"1","caption":"Proceed Collect","desktopHeight":"25px","height":"25px","width":"110px"}, {"onclick":"btnProceedCollectClick"}],
				btnChargeCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"25px","height":"25px","margin":"0,0,0,0","styles":{},"width":"100px"}, {"onclick":"dlgCharge.hide"}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"Other Bank's Check Deposit","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"296px"}, {}]
			}],
			fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"135px","displayValue":"","height":"25px","readonly":true,"width":"320px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
				}]
			}],
			panel3: ["wm.Panel", {"height":"480px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				pnlAcctDetail: ["wm.Panel", {"height":"155px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					fAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {"onfocus":"onFocusField","onfocus1":"pnlAcctDetail.clearData"}],
						btnSearch: ["wm.Button", {"border":"1","caption":"Search","height":"100%","width":"80px"}, {"onclick":"btnSearchClick"}],
						lblResult: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
					}],
					fAcctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {"onfocus":"onFocusField"}],
					fAmtPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"722px"}, {}, {
						fAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Amount:","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"required":true,"width":"320px"}, {"onchange":"fAmtChange","onfocus":"onFocusField"}],
						lblAmtChk: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"},"width":"300px"}, {}]
					}],
					fCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"id","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"210px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}],
							wire1: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.currency","targetProperty":"dataValue"}, {}]
						}]
					}],
					fClrtype: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Clearing Type:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":"2","displayField":"description","displayValue":"","height":"25px","width":"320px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svClearType","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				label2: ["wm.Label", {"caption":"Additional Details","padding":"4","styles":{"color":"#0b0a0a","fontWeight":"bolder"}}, {}],
				pnlCheckDet: ["wm.Panel", {"height":"136px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					fChkNo: ["wm.Text", {"border":"0","caption":"Check No:","captionSize":"135px","displayValue":"","emptyValue":"null","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {}],
					fChkAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Check Amount:","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"required":true,"width":"320px"}, {"onfocus":"onFocusField"}],
					fChkTxdt: ["wm.Date", {"border":"0","caption":"Check Date:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","showing":false,"width":"320px"}, {}],
					fChkDraweeBnk: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Drawee Bank:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","width":"400px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svBank","targetProperty":"dataSet"}, {}]
						}]
					}],
					fBrstnNo: ["wm.Text", {"border":"0","caption":"BRSTN No:","captionSize":"135px","displayValue":"","emptyValue":"null","height":"25px","width":"320px"}, {}],
					btnAddCheckPanel: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"321px"}, {}, {
						btnAddCheck: ["wm.Button", {"border":"1","caption":"Add Check","desktopHeight":"25px","height":"25px","width":"100px"}, {"onclick":"btnAddCheckClick"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"pnlCheckDet.invalid","targetProperty":"disabled"}, {}]
							}]
						}],
						btnViewCheckList: ["wm.Button", {"border":"1","caption":"View Check","desktopHeight":"25px","height":"25px","width":"100px"}, {"onclick":"btnViewCheckListClick"}]
					}]
				}],
				checkTotal1: ["wm.Number", {"border":"0","caption":"Total Check Amount:","captionSize":"140px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"checkTotal.dataValue","targetProperty":"dataValue"}, {}]
					}]
				}],
				fLate: ["wm.Checkbox", {"border":"0","caption":"Late","captionSize":"135px","dataValue":false,"displayValue":false,"height":"25%","width":"200px"}, {}],
				panel4: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${svCheckAccount.passbookind}==true","targetProperty":"showing"}, {}]
					}],
					fwPass: ["wm.RadioButton", {"border":"0","caption":"with Passbook","displayValue":"","groupValue":"WAR","height":"25px","styles":{},"width":"180px"}, {}],
					fwoPass: ["wm.RadioButton", {"border":"0","caption":"w/o Passbook","displayValue":"","groupValue":"WAR","height":"25px","width":"180px"}, {}],
					fwPassbook: ["wm.RadioSet", {"border":"0","caption":"with Passbook","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwPassbookChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				panel5: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
					fwCheck: ["wm.RadioButton", {"border":"0","caption":"with Checkbook","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
					fwoCheck: ["wm.RadioButton", {"border":"0","caption":"w/o Checkbook","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
					fwCheckbook: ["wm.RadioSet", {"border":"0","caption":"with Checkbook","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwCheckbookChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				panel7: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
					fwSoa: ["wm.RadioButton", {"border":"0","caption":"with SOA","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
					fwoSoa: ["wm.RadioButton", {"border":"0","caption":"w/o SOA","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
					fwStatementOfAcct: ["wm.RadioSet", {"border":"0","caption":"with SOA","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwStatementOfAcctChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				panel8: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
					fwCTD: ["wm.RadioButton", {"border":"0","caption":"with CTD","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
					fwoCTD: ["wm.RadioButton", {"border":"0","caption":"w/o CTD","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
					fwCertTimeDep: ["wm.RadioSet", {"border":"0","caption":"with CTD","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwCertTimeDepChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
				fLedgerline: ["wm.Text", {"border":"0","caption":"Ledger Line No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","width":"210px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${fwoPass.checked}","targetProperty":"disabled"}, {}],
						wire1: ["wm.Wire", {"expression":"${svCheckAccount.passbookind}==true","targetProperty":"showing"}, {}]
					}]
				}]
			}],
			btnSubmitPanel: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","margin":"0,0,0,5","styles":{},"width":"80px"}, {"onclick":"btnSubmitClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${pnlAcctDetail.invalid} || ${varChecklist.count}==0 || ${fAmt.dataValue}!=${checkTotal.dataValue}","targetProperty":"disabled"}, {}]
					}]
				}],
				btnValidateSlip: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Validate Slip/Doc","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"120px"}, {"onclick":"btnValidateSlipClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${svOBCheckDep.result}!=\"1\" && ${svOverride.dataValue}!=\"1\"","targetProperty":"disabled"}, {}]
					}]
				}],
				btnClear: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Clear","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"80px"}, {"onclick":"btnClearClick"}]
			}]
		}]
	}]
}