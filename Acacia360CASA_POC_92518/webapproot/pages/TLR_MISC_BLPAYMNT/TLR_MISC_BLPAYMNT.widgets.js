TLR_MISC_BLPAYMNT.widgets = {
	svPaymmode: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PAYMODE-BL\"","targetProperty":"codename"}, {}]
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
	svBankList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"BANK\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svMerchantList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getMerchantList","service":"MiscTxFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getMerchantListInputs"}, {}]
	}],
	svSavePayment: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"createPayment","service":"MiscTxFacade"}, {"onResult":"svSavePaymentResult"}, {
		input: ["wm.ServiceInput", {"type":"createPaymentInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fOrno.dataValue","targetProperty":"payment.orno"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fBrstnNo.dataValue","targetProperty":"payment.brstnno"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"fPaymSlipNo.dataValue","targetProperty":"payment.paymentslipno"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"fCurr.selectedItem.id","targetProperty":"payment.currency"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"fAmt.dataValue","targetProperty":"payment.amount"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"fModepaym.selectedItem.id","targetProperty":"payment.paymmode"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"fCheckDt.dataValue","targetProperty":"payment.checkdate"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"fBank.selectedItem.id","targetProperty":"payment.bankcode"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"fBank.selectedItem.description","targetProperty":"payment.bankname"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"fCheckAcctNo.dataValue","targetProperty":"payment.checkacctno"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"fSubscAcctNo.dataValue","targetProperty":"payment.susbaccountno"}, {}],
				wire11: ["wm.Wire", {"expression":undefined,"source":"fSubsName.dataValue","targetProperty":"payment.subsname"}, {}],
				wire12: ["wm.Wire", {"expression":undefined,"source":"fMerchant.selectedItem.merchantcode","targetProperty":"payment.merchantcode"}, {}],
				wire13: ["wm.Wire", {"expression":undefined,"source":"fSubscAcctNo.dataValue","targetProperty":"payment.subsaccountno"}, {}],
				wire14: ["wm.Wire", {"expression":"1","targetProperty":"payment.txstatus"}, {}],
				wire15: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"payment.txby"}, {}],
				wire16: ["wm.Wire", {"expression":undefined,"source":"fDebitAccount.dataValue","targetProperty":"payment.debitaccountno"}, {}],
				wire17: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"payment.unit"}, {}],
				wire18: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"payment.instcode"}, {}],
				wire19: ["wm.Wire", {"expression":undefined,"source":"fPaymentType.dataValue","targetProperty":"payment.typepayment"}, {}]
			}]
		}]
	}],
	codePaymentType: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"TYPEPAYMENT\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,0","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"align":undefined,"caption":"Bills/Loan Payment","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
			}],
			fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"145px","displayValue":"","height":"25px","styles":{},"width":"270px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
				}]
			}],
			pnlMainInfo: ["wm.Panel", {"height":"242px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				fPaymentType: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Payment Type:","captionSize":"145px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"340px"}, {"onchange":"fPaymentTypeChange"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"codePaymentType","targetProperty":"dataSet"}, {}]
					}]
				}],
				fMerchant: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Merchant:","captionSize":"145px","dataField":"merchantcode","dataType":"com.casa.misc.forms.MerchantForm","displayField":"merchantname","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"340px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svMerchantList","targetProperty":"dataSet"}, {}]
					}]
				}],
				fPaymSlipNo: ["wm.Text", {"border":"0","caption":"Payment Slip No:","captionSize":"145px","displayValue":"","emptyValue":"null","height":"25px","width":"340px"}, {}],
				fSubscAcctNo: ["wm.Text", {"border":"0","caption":"Subscriber Account No:","captionSize":"145px","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"340px"}, {}],
				fSubsName: ["wm.Text", {"border":"0","caption":"Subscriber Name:","captionSize":"145px","displayValue":"","emptyValue":"null","height":"25px","width":"340px"}, {}],
				fAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Amount:","captionSize":"145px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"required":true,"width":"270px"}, {"onfocus":"fAmtFocus"}],
				fCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"145px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":"PHP","displayField":"id","displayValue":"","height":"25px","width":"220px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}]
					}]
				}],
				fOrno: ["wm.Text", {"border":"0","caption":"OR No:","captionSize":"145px","displayValue":"","emptyValue":"null","height":"25px","width":"340px"}, {}],
				fModepaym: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Mode of Payment:","captionSize":"145px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":"1","displayField":"description","displayValue":"","height":"25px","width":"270px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svPaymmode","targetProperty":"dataSet"}, {}]
					}]
				}],
				spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}]
			}],
			pnlCheckInfo: ["wm.Panel", {"height":"104px","horizontalAlign":"left","margin":"0,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${fModepaym.dataValue}=='2'","targetProperty":"showing"}, {}]
				}],
				fCheckAcctNo: ["wm.Text", {"border":"0","caption":"Check Account No:","captionSize":"145px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"340px"}, {}],
				fCheckDt: ["wm.Date", {"border":"0","caption":"Check Date:","captionSize":"145px","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"270px"}, {}],
				fBank: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Bank:","captionSize":"145px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","required":true,"width":"400px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svBankList","targetProperty":"dataSet"}, {}]
					}]
				}],
				fBrstnNo: ["wm.Text", {"border":"0","caption":"BRSTN No:","captionSize":"145px","displayValue":"","emptyValue":"null","height":"25px","width":"270px"}, {}]
			}],
			pnlDebitAcct: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${fModepaym.dataValue}=='3'||${fModepaym.dataValue}=='4'","targetProperty":"showing"}, {}]
				}],
				fDebitAccount: ["wm.Text", {"border":"0","caption":"Debit Acount No:","captionSize":"145px","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"340px"}, {}]
			}],
			btnPanel: ["wm.Panel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"5,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"90px"}, {"onclick":"svSavePayment"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"if(${fModepaym.dataValue}=='1'){\n    ${pnlMainInfo.invalid}&&\n    ${fAmt.dataValue}==0.00;\n} else if(${fModepaym.dataValue}=='2'){\n    ${pnlMainInfo.invalid}&&\n    ${fAmt.dataValue}==0.00;\n    ${pnlCheckInfo.invalid};\n} else {\n    ${pnlMainInfo.invalid} &&\n    ${fAmt.dataValue}==0.00;\n    ${pnlDebitAcct.invalid};\n}","targetProperty":"disabled"}, {}]
					}]
				}],
				btnCancel: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Cancel","desktopHeight":"28px","height":"28px","width":"100px"}, {}]
			}]
		}]
	}]
}