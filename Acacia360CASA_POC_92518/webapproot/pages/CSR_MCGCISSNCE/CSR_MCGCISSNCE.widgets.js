CSR_MCGCISSNCE.widgets = {
	varCheckType: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"MC\",\"dataValue\":\"1\"},{\"name\":\"GC\",\"dataValue\":\"0\"}]","type":"EntryData"}, {}],
	svSave: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkbookIssuance","service":"MiscTxFacade"}, {"onResult":"svSaveResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"checkbookIssuanceInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"data.unit"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"data.releasedby"}, {}],
				wire2: ["wm.Wire", {"expression":"1","targetProperty":"data.status"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"acctRecvdBy.dataValue","targetProperty":"data.receivedby"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"acctStrtChkNo.dataValue","targetProperty":"data.startchkno"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"acctEndChkNo.dataValue","targetProperty":"data.endchkno"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"data.accountno"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"chkBkNo.dataValue","targetProperty":"data.checkbookno"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"data.checkbkaccountno"}, {}],
				wire9: ["wm.Wire", {"expression":"if(${rBtnMC.checked}){\n    ${rBtnMC.dataValue}\n}else{\n    ${rBtnGC.dataValue}\n}","targetProperty":"data.checktype"}, {}]
			}]
		}]
	}],
	svCheckAccount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkAcct","service":"FinTxFacade"}, {"onResult":"svCheckAccountResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"checkAcctInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"acctno"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"caption":"MC / GC Registration","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"350px"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"269px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				radioButton1Panel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					rBtnMC: ["wm.RadioButton", {"border":"0","caption":"MC","captionSize":"30px","checkedValue":1,"dataType":"number","displayValue":1,"groupValue":1,"height":"25px","startChecked":true,"width":"80px"}, {}],
					rBtnGC: ["wm.RadioButton", {"border":"0","caption":"GC","captionSize":"30px","checkedValue":2,"dataType":"number","displayValue":0,"groupValue":1,"height":"25px","width":"80px"}, {}]
				}],
				panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					panel7: ["wm.Panel", {"height":"150px","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						acctNoPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							acctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"150px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"350px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
								}]
							}],
							button1: ["wm.Button", {"border":"1","caption":"Search","desktopHeight":"24px","height":"24px","margin":"0,0,0,10","mobileHeight":"25%","styles":{}}, {"onclick":"svCheckAccount"}],
							lblSearchResult: ["wm.Label", {"padding":"4","width":"100%"}, {}]
						}],
						chkBkNo: ["wm.Text", {"border":"0","caption":"Checkbook No:","captionSize":"150px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"350px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
							}]
						}],
						acctStrtChkNo: ["wm.Number", {"border":"0","caption":"Start Check Number:","captionSize":"150px","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"350px"}, {}],
						acctEndChkNo: ["wm.Number", {"border":"0","caption":"End Check Number:","captionSize":"150px","dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"350px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"(${acctStrtChkNo.dataValue}+1)","targetProperty":"minimum"}, {}]
							}]
						}],
						acctRecvdBy: ["wm.Text", {"border":"0","caption":"Received By:","captionSize":"150px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","styles":{},"width":"350px"}, {}],
						date1: ["wm.Date", {"border":"0","caption":"Date Received:","captionSize":"150px","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"350px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
							}]
						}]
					}],
					panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {"onEnterKeyPress":"panel11EnterKeyPress"}, {
						btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnSubmitClick"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${panel7.invalid} || (!${rBtnMC.checked} && !${rBtnGC.checked})","targetProperty":"disabled"}, {}]
							}]
						}],
						button4: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}]
					}]
				}]
			}]
		}]
	}]
}