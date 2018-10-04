TLR_FX_OTHRBANKRETCHK.widgets = {
	svBank: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"BANK\"","targetProperty":"codename"}, {}]
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
				wire: ["wm.Wire", {"expression":undefined,"source":"svOBRetChk.txrefno","targetProperty":"txrefno"}, {}]
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
	svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"CURR\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svCancelReject: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cancelOverrideTX","service":"FinTxFacade"}, {"onResult":"svCancelRejectResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"cancelOverrideTXInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"svOBRetChk.txrefno","targetProperty":"txrefno"}, {}]
			}]
		}]
	}],
	svOBRetChk: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cashDepWithDrCrMemo","service":"FinTxFacade"}, {"onResult":"svOBRetChkResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"cashDepWithDrCrMemoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fChkDraweeBnk.dataValue","targetProperty":"jrnl.draweebank"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fAmt.dataValue","targetProperty":"jrnl.txamount"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"fLedgerline.dataValue","targetProperty":"jrnl.ledgerlineno"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"jrnl.txby"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"fCurr.dataValue","targetProperty":"jrnl.currency"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"fChkTxdt.dataValue","targetProperty":"jrnl.checkdate"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"fChkNo.dataValue","targetProperty":"jrnl.checkno"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"jrnl.txvaldt"}, {}],
				wire8: ["wm.Wire", {"expression":"1","targetProperty":"jrnl.txstatus"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"jrnl.accountno"}, {}],
				wire11: ["wm.Wire", {"expression":undefined,"source":"fTxdt.dataValue","targetProperty":"jrnl.txdate"}, {}],
				wire12: ["wm.Wire", {"expression":"112242","targetProperty":"jrnl.txcode"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"jrnl.unit"}, {}],
				wire13: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"jrnl.instcode"}, {}]
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
	svTransInfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getTxinfo","service":"FinTxFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getTxinfoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Other Bank Return Check\"","targetProperty":"txname"}, {}]
			}]
		}]
	}],
	svPrint: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"printDocSlip","service":"FinTxFacade"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"panel3","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"printDocSlipInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"svOBRetChk.txrefno","targetProperty":"txrefno"}, {}]
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
				label1: ["wm.Label", {"caption":"Other Bank's Return Check","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"263px"}, {}]
			}],
			fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"135px","displayValue":"","height":"25px","readonly":true,"width":"320px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
				}]
			}],
			panel3: ["wm.Panel", {"height":"250px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				fAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {"onfocus":"onFocusField"}],
					btnSearch: ["wm.Button", {"border":"1","caption":"Search","height":"100%","width":"80px"}, {"onclick":"btnSearchClick"}],
					lblResult: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
				}],
				fAcctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {"onfocus":"onFocusField"}],
				fAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Amount:","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"required":true,"width":"320px"}, {"onfocus":"fAmtFocus"}],
				fCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":"PHP","displayField":"id","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"210px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}]
					}]
				}],
				label2: ["wm.Label", {"caption":"Additional Details","padding":"4","styles":{"color":"#0b0a0a","fontWeight":"bolder"}}, {}],
				fChkNo: ["wm.Text", {"border":"0","caption":"Check No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","showing":false,"width":"320px"}, {}],
				fChkTxdt: ["wm.Date", {"border":"0","caption":"Check Date:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","showing":false,"width":"320px"}, {}],
				fChkDraweeBnk: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Drawee Bank:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","restrictValues":false,"showing":false,"width":"400px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svBank","targetProperty":"dataSet"}, {}]
					}]
				}],
				panel4: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					fwPass: ["wm.RadioButton", {"border":"0","caption":"with Passbook","displayValue":"","height":"25px","width":"180px"}, {}],
					fwoPass: ["wm.RadioButton", {"border":"0","caption":"w/o Passbook","displayValue":"","height":"25px","width":"180px"}, {}],
					fLate: ["wm.Checkbox", {"border":"0","caption":"Late","dataValue":false,"displayValue":false,"height":"100%","showing":false,"width":"65px"}, {}],
					fwPassbook: ["wm.RadioSet", {"border":"0","caption":"with Passbook","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwPassbookChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				panel5: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
					fwCheck: ["wm.RadioButton", {"border":"0","caption":"with Checkbook","displayValue":"","height":"25px","showing":false,"width":"180px"}, {}],
					fwoCheck: ["wm.RadioButton", {"border":"0","caption":"w/o Checkbook","displayValue":"","height":"25px","showing":false,"width":"180px"}, {}],
					fwCheckbook: ["wm.RadioSet", {"border":"0","caption":"with Checkbook","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwCheckbookChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				panel7: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
					fwSoa: ["wm.RadioButton", {"border":"0","caption":"with SOA","displayValue":"","height":"25px","showing":false,"width":"180px"}, {}],
					fwoSoa: ["wm.RadioButton", {"border":"0","caption":"w/o SOA","displayValue":"","height":"25px","showing":false,"width":"180px"}, {}],
					fwStatementOfAcct: ["wm.RadioSet", {"border":"0","caption":"with SOA","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwStatementOfAcctChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				panel8: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
					fwCTD: ["wm.RadioButton", {"border":"0","caption":"with CTD","displayValue":"","height":"25px","showing":false,"width":"180px"}, {}],
					fwoCTD: ["wm.RadioButton", {"border":"0","caption":"w/o CTD","displayValue":"","height":"25px","showing":false,"width":"180px"}, {}],
					fwCertTimeDep: ["wm.RadioSet", {"border":"0","caption":"with CTD","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","editorBorder":false,"height":"25px","showing":false,"styles":{},"width":"300px"}, {"onchange":"fwCertTimeDepChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varCheck","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
				fLedgerline: ["wm.Text", {"border":"0","caption":"Ledger Line No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","width":"210px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"fwoPass.checked","targetProperty":"disabled"}, {}]
					}]
				}]
			}],
			btnSubmitPanel: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","width":"80px"}, {"onclick":"btnSubmitClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${panel3.invalid} || ${fAmt.dataValue}==0","targetProperty":"disabled"}, {}]
					}]
				}],
				btnValidateSlip: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Validate Slip/Doc","desktopHeight":"25px","height":"25px","width":"120px"}, {"onclick":"svPrint"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${svOBRetChk.result}!=\"1\" && ${svOverride.dataValue}!=\"1\"","targetProperty":"disabled"}, {}]
					}]
				}],
				btnClear: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Clear","desktopHeight":"25px","height":"25px","width":"80px"}, {"onclick":"btnClearClick"}]
			}]
		}]
	}]
}