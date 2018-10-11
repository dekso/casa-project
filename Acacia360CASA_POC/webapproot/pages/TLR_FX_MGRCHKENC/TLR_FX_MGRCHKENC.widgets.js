TLR_FX_MGRCHKENC.widgets = {
	svViewSigcard: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"viewSigcard","service":"SigcardFacade"}, {"onResult":"svViewSigcardResult"}, {
		input: ["wm.ServiceInput", {"type":"viewSigcardInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fAcctNo.dataValue","targetProperty":"cifno"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"svCheckAccount.accountno","targetProperty":"acctno"}, {}]
			}]
		}]
	}],
	sv: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast"}, {}, {
		input: ["wm.ServiceInput", {"type":"Inputs"}, {}]
	}],
	dlgSigcard: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"","desktopHeight":"500px","height":"500px","noEscape":true,"title":"Sigcard","width":"900px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			sigcardPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				sigImg: ["wm.Picture", {"aspect":"v","height":"1200px","width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"41px","height":"41px"}, {}, {
			panel7: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"0,0,0,0","padding":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				btnVerifiedSigcard: ["wm.Button", {"border":"1","caption":"Signature Verified","desktopHeight":"25px","height":"25px","margin":"0,0,0,0","styles":{},"width":"120px"}, {"onclick":"btnVerifiedSigcardClick"}],
				btnInvalidSigcard: ["wm.Button", {"border":"1","caption":"Signature Invalid","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"120px"}, {"onclick":"btnInvalidSigcardClick"}],
				btnCloseSigcard: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"25px","height":"25px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnCloseSigcardClick"}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				lblTitle: ["wm.Label", {"caption":"Manager's / Gift Encashment","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"350px"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"220px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				fTxdt: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"135px","displayValue":"","height":"25px","readonly":true,"width":"320px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
					}]
				}],
				fAcctPanel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					fAcctNo: ["wm.Text", {"border":"0","caption":"MC / GC Account No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {"onfocus":"onFocusField"}],
					btnSearch: ["wm.Button", {"border":"1","caption":"Search","height":"100%","width":"80px"}, {"onclick":"btnSearchClick"}],
					lblResult: ["wm.Label", {"caption":"","padding":"4","styles":{"color":"#060606"}}, {}]
				}],
				fAcctName: ["wm.Text", {"border":"0","caption":"Check Account Name:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {"onfocus":"onFocusField"}],
				fAmt: ["wm.Number", {"applyPlacesWhileTyping":true,"border":"0","caption":"Amount:","captionSize":"135px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","minimum":0,"places":2,"required":true,"styles":{},"width":"320px"}, {"onfocus":"onFocusField"}],
				fCurr: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","captionSize":"135px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"id","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"210px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}]
					}]
				}],
				fChkAcctName: ["wm.Text", {"border":"0","caption":"Check Account Name:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true}, {}],
				fChkNo: ["wm.Text", {"border":"0","caption":"Check No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","regExp":"^[0-9]+([,.][0-9]+)?$","required":true,"width":"320px"}, {}],
				fChkTxdt: ["wm.Date", {"border":"0","caption":"Check Date:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"320px"}, {}]
			}],
			btnSubmitPanel: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"620px"}, {}, {
				btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","width":"80px"}, {"onclick":"svCheckDep"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${panel3.invalid};\n${fAmt.dataValue}==0.00","targetProperty":"disabled"}, {}]
					}]
				}],
				btnSigcard: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"View Sigcard","desktopHeight":"25px","height":"25px","width":"100px"}, {"onclick":"btnSigcardClick"}],
				btnHome: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"25px","height":"25px","showing":false,"width":"100px"}, {}]
			}]
		}]
	}]
}