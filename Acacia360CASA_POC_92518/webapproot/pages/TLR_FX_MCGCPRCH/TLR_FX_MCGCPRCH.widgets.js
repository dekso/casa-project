TLR_FX_MCGCPRCH.widgets = {
	varCheckType: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"MC\",\"dataValue\":\"1\"},{\"name\":\"GC\",\"dataValue\":\"0\"}]","type":"EntryData"}, {}],
	svCheckAccountPurchasor: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkAcct","service":"FinTxFacade"}, {"onResult":"svCheckAccountPurchasorResult"}, {
		input: ["wm.ServiceInput", {"type":"checkAcctInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtAccountNo.dataValue","targetProperty":"accountno"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"txtAccountNo.dataValue","targetProperty":"acctno"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"txtAccountNo","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svCheckAccountPayableTo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkAcct","service":"FinTxFacade"}, {"onResult":"svCheckAccountPayableToResult"}, {
		input: ["wm.ServiceInput", {"type":"checkAcctInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtPayableTo.dataValue","targetProperty":"accountno"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"txtPayableTo.dataValue","targetProperty":"acctno"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"txtPayableTo","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svGetTxcode: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getTxinfo","service":"FinTxFacade"}, {"onResult":"svGetTxcodeResult"}, {
		input: ["wm.ServiceInput", {"type":"getTxinfoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"MC / GC Purchase\"","targetProperty":"txname"}, {}]
			}]
		}]
	}],
	svSave: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"requestMc","service":"FinTxFacade"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"requestMcInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"caption":"MC / GC Purchase","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"350px"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"244px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				radioButton1Panel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					rBtnMC: ["wm.RadioButton", {"border":"0","caption":"MC","captionSize":"30px","displayValue":"","groupValue":true,"height":"25px","width":"80px"}, {}],
					rBtnGC: ["wm.RadioButton", {"border":"0","caption":"GC","captionSize":"30px","displayValue":"true","groupValue":true,"height":"25px","width":"80px"}, {}]
				}],
				lblPurchasor: ["wm.Label", {"caption":"Purchasor : ","padding":"3","styles":{"color":"#353535","fontSize":"11px","fontWeight":"bolder"}}, {}],
				pnlPurchasor: ["wm.Panel", {"height":"60px","horizontalAlign":"left","padding":"0,0,0,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					txtAccountName: ["wm.Text", {"border":"0","caption":"Name : ","captionSize":"125px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"styles":{},"width":"600px"}, {"onfocus":"onFocusField"}],
					txtAccountNoPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"590px"}, {}, {
						txtAccountNo: ["wm.Text", {"border":"0","caption":"Account Number : ","captionSize":"125px","dataValue":undefined,"displayValue":"","height":"100%","styles":{},"width":"310px"}, {"onfocus":"onFocusField"}],
						btnSearchPurchasor: ["wm.Button", {"border":"1","caption":"Search","height":"100%","margin":"0,0,0,10","styles":{},"width":"80px"}, {"onclick":"svCheckAccountPurchasor"}],
						lblResultPurchasor: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
					}]
				}],
				fAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"695px"}, {}, {
					txtPayableTo: ["wm.Text", {"border":"0","caption":"Payable To : ","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","styles":{},"width":"320px"}, {"onfocus":"onFocusField"}],
					btnSearchPayableTo: ["wm.Button", {"border":"1","caption":"Search","height":"100%","margin":"0,0,0,10","styles":{},"width":"80px"}, {"onclick":"svCheckAccountPayableTo"}],
					lblResultPayableTo: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
				}],
				slcPurpose: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Purpose : ","captionSize":"135px","dataSet":"","dataType":"com.casa.util.forms.DescIdForm","displayValue":"","emptyValue":"null","height":"25px","showing":false,"styles":{},"width":"320px"}, {}],
				txtAmount: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Amount:","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"required":true,"styles":{},"width":"320px"}, {"onfocus":"onFocusField"}],
				txtServiceCharge: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Service Charge : ","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"readonly":true,"required":true,"styles":{"textAlign":"right"},"width":"320px"}, {"onfocus":"onFocusField"}],
				txtMCGCNumber: ["wm.Text", {"border":"0","caption":"MC / GC Number : ","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","mobileHeight":"25%","required":true,"styles":{},"width":"320px"}, {"onfocus":"onFocusField"}]
			}],
			btnSubmitPanel: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"620px"}, {}, {
				btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","width":"80px"}, {"onclick":"svCheckDep"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${panel3.invalid};\n${txtAmount.dataValue}<=0.00;\n${txtMCGCNumber.invalid}","targetProperty":"disabled"}, {}]
					}]
				}],
				btnCancel: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Cancel","desktopHeight":"25px","height":"25px","width":"90px"}, {"onclick":"btnCancelClick"}],
				btnHome: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"25px","height":"25px","width":"100px"}, {"onclick":"btnHomeClick"}]
			}]
		}]
	}]
}