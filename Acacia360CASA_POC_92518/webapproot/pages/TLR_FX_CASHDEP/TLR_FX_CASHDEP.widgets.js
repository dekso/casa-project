TLR_FX_CASHDEP.widgets = {
	svCashDep: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cashDepWithDrCrMemo","service":"FinTxFacade"}, {"onResult":"svCashDepResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"cashDepWithDrCrMemoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"fAcctledger.dataValue","targetProperty":"jrnl.ledgerlineno"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"fAmt.dataValue","targetProperty":"jrnl.txamount"}, {}],
				wire3: ["wm.Wire", {"expression":"110111","targetProperty":"jrnl.txcode"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"fCurr.dataValue","targetProperty":"jrnl.currency"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"jrnl.txby"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"jrnl.unit"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"jrnl.instcode"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"jrnl.txdate"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"jrnl.accountno"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"fAcctName.dataValue","targetProperty":"jrnl.acctname"}, {}]
			}]
		}]
	}],
	svUnitBalance: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUnitBalance","service":"UserInfoFacade"}, {"onResult":"svUnitBalanceResult"}, {
		input: ["wm.ServiceInput", {"type":"getUnitBalanceInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.varCurrency.dataValue","targetProperty":"currency"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"userid"}, {}]
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
				wire: ["wm.Wire", {"expression":undefined,"source":"svCashDep.txrefno","targetProperty":"txrefno"}, {}]
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
	svCancelReject: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cancelOverrideTX","service":"FinTxFacade"}, {"onResult":"svCancelRejectResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"cancelOverrideTXInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"svCashDep.txrefno","targetProperty":"txrefno"}, {}]
			}]
		}]
	}],
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
	svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"CURR\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svPrint: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"printDocSlip","service":"FinTxFacade"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"printDocSlipInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"svCashDep.txrefbr","targetProperty":"txrefno"}, {}]
			}]
		}]
	}],
	svTransInfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getTxinfo","service":"FinTxFacade"}, {"onResult":"svTransInfoResult"}, {
		input: ["wm.ServiceInput", {"type":"getTxinfoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Cash Deposit\"","targetProperty":"txname"}, {}]
			}]
		}]
	}],
	varOverride: ["wm.Variable", {"type":"NumberData"}, {}],
	varCheck: ["wm.Variable", {"isList":true,"json":"[{\"dataValue\":\"1\"}]","type":"EntryData"}, {}],
	codeProd: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PRODUCTGROUP\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svFreezeInfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getFreezeInfo","service":"AccountFacade"}, {"onResult":"svFreezeInfoResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"getFreezeInfoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"accountno"}, {}]
			}]
		}]
	}],
	dlgCharge: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"","desktopHeight":"110px","height":"110px","title":"Interbranch Service Charge","width":"350px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			fServiceAmt: ["wm.Number", {"border":"0","caption":"Service Charge:","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svTransInfo.servicecharge","targetProperty":"dataValue"}, {}]
				}]
			}],
			panel7: ["wm.Panel", {"height":"37px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				btnProceedWaive: ["wm.Button", {"border":"1","caption":"Proceed Waive","desktopHeight":"25px","height":"25px","width":"110px"}, {"onclick":"btnProceedWaiveClick"}],
				btnProceedCollect: ["wm.Button", {"border":"1","caption":"Proceed Collect","desktopHeight":"25px","height":"25px","width":"110px"}, {}],
				btnChargeCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"25px","height":"25px","margin":"0,0,0,0","styles":{},"width":"100px"}, {"onclick":"dlgCharge.hide"}]
			}]
		}]
	}],
	dlgOverride: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"135px","height":"135px","noEscape":true,"title":"Override Transaction","width":"440px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			pnlOverride: ["wm.Panel", {"height":"61px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				overrideUsername: ["wm.Text", {"border":"0","caption":"Username:","dataValue":undefined,"displayValue":"","height":"25px","required":true}, {}],
				overridePassword: ["wm.Text", {"border":"0","caption":"Password:","dataValue":undefined,"displayValue":"","height":"25px","password":true,"required":true}, {}]
			}],
			panel6: ["wm.Panel", {"height":"28px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"0,0,0,0","padding":"0,0,0,0","styles":{},"verticalAlign":"top","width":"422px"}, {}, {
				btnViewSig: ["wm.Button", {"border":"1","caption":"View Sigcard","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","showing":false,"styles":{},"width":"100px"}, {"onclick":"btnViewSigClick"}],
				btnReqOR: ["wm.Button", {"border":"1","caption":"Remote Override","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"120px"}, {"onclick":"btnReqORClick"}],
				btnOverride: ["wm.Button", {"border":"1","caption":"Override","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnOverrideClick"}],
				btnCancel: ["wm.Button", {"border":"1","caption":"Reject","desktopHeight":"25px","height":"25px","margin":"0,10,0,10","styles":{},"width":"100px"}, {"onclick":"svCancelReject"}]
			}]
		}]
	}],
	dlgOverrideDet: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"140px","height":"140px","noEscape":true,"title":"Waiting for Override Result","width":"350px"}, {}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			pnlOverrideDet1: ["wm.Panel", {"height":"55px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				fOverrideBy: ["wm.Text", {"border":"0","caption":"Override By:","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {}],
				fOverrideResult: ["wm.Text", {"border":"0","caption":"Override Result :","displayValue":"","emptyValue":"null","height":"25px","readonly":true}, {}]
			}],
			panel8: ["wm.Panel", {"height":"37px","horizontalAlign":"right","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				btnContinue: ["wm.Button", {"border":"1","caption":"Continue","desktopHeight":"30px","height":"30px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnContinueClick"}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,5,0","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"Cash Deposit","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
			}],
			fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"135px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{},"width":"320px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
				}]
			}],
			panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				fAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {"onchange":"fAcctNoChange","onfocus":"clearF"}],
					btnSearch: ["wm.Button", {"border":"1","caption":"Search","height":"100%","width":"80px"}, {"onclick":"btnSearchClick"}],
					lblResult: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
				}],
				fAcctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"width":"604px"}, {"onfocus":"onFocusField"}],
				slcProdtype: ["wm.SelectMenu", {"border":"0","caption":"Product Type:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","height":"25px","readonly":true,"width":"320px"}, {"onchange":"svProductListFull"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"codeProd","targetProperty":"dataSet"}, {}],
						wire1: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.prodtype","targetProperty":"dataValue"}, {}]
					}]
				}],
				fSubProdType: ["wm.Text", {"border":"0","caption":"Sub-product Type:","captionSize":"135px","displayValue":"","height":"25px","readonly":true,"width":"600px"}, {"onfocus":"onFocusField"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.subprod","targetProperty":"dataValue"}, {}]
					}]
				}],
				fAmt: ["wm.Number", {"border":"0","caption":"Amount:","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"required":true,"width":"320px"}, {"onfocus":"onFocusField"}],
				fCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"id","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"210px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}]
					}]
				}],
				panel4: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${svCheckAccount.prodtype}==\"20\" || ${svCheckAccount.prodtype}==\"50\" ","targetProperty":"showing"}, {}]
					}],
					fwPass: ["wm.RadioButton", {"border":"0","caption":"with Passbook","checkedValue":undefined,"displayValue":"","groupValue":"WAR","height":"25px","width":"180px"}, {}],
					fwoPass: ["wm.RadioButton", {"border":"0","caption":"w/o Passbook","checkedValue":"1","displayValue":"","groupValue":"WAR","height":"25px","styles":{},"width":"180px"}, {}],
					fwPassbook: ["wm.RadioSet", {"border":"0","caption":"with Passbook","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"160px"}, {"onchange":"fwPassbookChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				panel9: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
					fwCheck: ["wm.RadioButton", {"border":"0","caption":"with Passbook","checkedValue":undefined,"displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
					fwoCheck: ["wm.RadioButton", {"border":"0","caption":"w/o Passbook","checkedValue":"1","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"styles":{},"width":"180px"}, {}],
					fwCheckbook: ["wm.RadioSet", {"border":"0","caption":"with Checkbook","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"160px"}, {"onchange":"fwCheckbookChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				panel10: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
					fwSoa: ["wm.RadioButton", {"border":"0","caption":"with Passbook","checkedValue":undefined,"displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
					fwoSoa: ["wm.RadioButton", {"border":"0","caption":"w/o Passbook","checkedValue":"1","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"styles":{},"width":"180px"}, {}],
					fwStatementOfAcct: ["wm.RadioSet", {"border":"0","caption":"with SOA","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"160px"}, {"onchange":"fwStatementOfAcctChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				panel11: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
					fwCTD: ["wm.RadioButton", {"border":"0","caption":"with Passbook","checkedValue":undefined,"displayValue":"","groupValue":"WAR","height":"25px","showing":false,"width":"180px"}, {}],
					fwoCTD: ["wm.RadioButton", {"border":"0","caption":"w/o Passbook","checkedValue":"1","displayValue":"","groupValue":"WAR","height":"25px","showing":false,"styles":{},"width":"180px"}, {}],
					fwCertTimeDep: ["wm.RadioSet", {"border":"0","caption":"with CTD","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"160px"}, {"onchange":"fwCertTimeDepChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
				fAcctledger: ["wm.Text", {"border":"0","caption":"Ledger Line No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","styles":{},"width":"210px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${fwoPass.checked}","targetProperty":"disabled"}, {}],
						wire1: ["wm.Wire", {"expression":"${svCheckAccount.prodtype}==\"20\" || ${svCheckAccount.prodtype}==\"50\" ","targetProperty":"showing"}, {}]
					}]
				}],
				button1Panel: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"650px"}, {}, {
					button1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","width":"80px"}, {"onclick":"button1Click"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${panel1.invalid} || ${fAmt.dataValue} == 0 || ${svCheckAccount.result}==\"0\" || ${svCheckAccount.isEmpty}","targetProperty":"disabled"}, {}]
						}]
					}],
					panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"275px"}, {}, {
						btnValidateDocSlip: ["wm.Button", {"border":"1","caption":"Validate Slip/Doc","desktopHeight":"25px","height":"25px","width":"138px"}, {"onclick":"btnValidateDocSlipClick"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${svCashDep.result}!=\"1\" && ${svOverride.dataValue}!=\"1\"","targetProperty":"disabled"}, {}]
							}]
						}],
						button3: ["wm.Button", {"border":"1","caption":"Post to Passbook","desktopHeight":"25px","disabled":true,"height":"25px","width":"138px"}, {}]
					}],
					btnClear: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Clear","desktopHeight":"25px","height":"25px","width":"80px"}, {"onclick":"btnClearClick"}]
				}]
			}]
		}]
	}]
}