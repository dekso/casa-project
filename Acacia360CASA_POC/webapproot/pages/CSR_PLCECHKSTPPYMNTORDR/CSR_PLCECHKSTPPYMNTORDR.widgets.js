CSR_PLCECHKSTPPYMNTORDR.widgets = {
	svSave: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"placeHoldCheck","service":"AccountFacade"}, {"onResult":"svSaveResult"}, {
		input: ["wm.ServiceInput", {"type":"placeHoldCheckInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"acctno"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fAcctName.dataValue","targetProperty":"name"}, {}],
				wire2: ["wm.Wire", {"expression":"1","targetProperty":"record.status"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"acctRemarks.dataValue","targetProperty":"record.remarks"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"record.unit"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"acctValDate.dataValue","targetProperty":"record.validitydate"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"acctNo.dataValue","targetProperty":"record.accountno"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"record.datehold"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"acctChkNo.dataValue","targetProperty":"record.checkno"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"record.instcode"}, {}],
				wire11: ["wm.Wire", {"expression":"2","targetProperty":"record.txcode"}, {}],
				wire12: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"record.holdby"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"acctRsnfrStpPymnt.selectedItem.id","targetProperty":"record.holdreason"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svReason: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"SPOREASON\"","targetProperty":"codename"}, {}]
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
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label2: ["wm.Label", {"caption":"Place Check Stop Payment Order","height":"31px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"409px"}, {}]
			}],
			panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				panel5: ["wm.Panel", {"height":"209px","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"606.02105px"}, {}, {
					acctTxDate: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"165px","displayValue":"","height":"25px","readonly":true,"width":"400px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
						}]
					}],
					fAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						acctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"165px","dataValue":undefined,"displayValue":"","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {"onfocus":"onFocusField"}],
						btnSearch: ["wm.Button", {"border":"1","caption":"Search","height":"100%","width":"80px"}, {"onclick":"btnSearchClick"}],
						lblResult: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
					}],
					acctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"165px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"width":"420px"}, {"onfocus":"onFocusField"}],
					acctChkNo: ["wm.Text", {"border":"0","caption":"Check Number:","captionSize":"165px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"styles":{},"width":"400px"}, {}],
					acctValDate: ["wm.Date", {"border":"0","caption":"Validity Date:","captionSize":"165px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"400px"}, {}],
					acctRsnfrStpPymnt: ["wm.SelectMenu", {"border":"0","caption":"Reason for Stop Payment:","captionSize":"165px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":"1","displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"400px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svReason","targetProperty":"dataSet"}, {}]
						}]
					}],
					acctRemarks: ["wm.Text", {"border":"0","caption":"Remarks:","captionSize":"165px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${svSave.form.accountno}","targetProperty":"dataValue"}, {}]
						}]
					}],
					radioButton1Panel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						acctCharge: ["wm.RadioButton", {"border":"0","caption":"Charge","captionPosition":"right","displayValue":"","height":"25px","width":"85px"}, {}],
						acctWave: ["wm.RadioButton", {"border":"0","caption":"Wave","captionPosition":"right","displayValue":"","height":"25px","width":"120px"}, {}]
					}]
				}],
				panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
					btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSave"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"panel4.invalid","targetProperty":"disabled"}, {}]
						}]
					}],
					button4: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSave"}]
				}]
			}]
		}]
	}]
}