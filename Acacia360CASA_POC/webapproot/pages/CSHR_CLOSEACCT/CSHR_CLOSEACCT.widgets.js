CSHR_CLOSEACCT.widgets = {
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
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"ACCOUNT CLOSURE","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,3","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}],
				spacer1: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}],
				button1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}],
				button2: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Back","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}]
			}],
			panel10: ["wm.Panel", {"height":"413px","horizontalAlign":"left","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label2: ["wm.Label", {"caption":"ACCOUNT DETAILS","height":"30px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}],
				panel4: ["wm.Panel", {"height":"344px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"410px"}, {}, {
						acctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
							}]
						}],
						spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						acctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${svSearchAccount.form.name}","targetProperty":"dataValue"}, {}]
							}]
						}],
						spacer2: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						acctName1: ["wm.Text", {"border":"0","caption":"Status:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${svSearchAccount.form.name}","targetProperty":"dataValue"}, {}]
							}]
						}],
						spacer3: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						AcctLastUpdate: ["wm.Date", {"border":"0","caption":"Date of Last Update","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"width":"400px"}, {}],
						spacer4: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						acctPostingRes: ["wm.Text", {"border":"0","caption":"Posting Restriction","captionSize":"200px","displayValue":"","height":"25px","readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svSearchAccount.form.accountstatus","targetProperty":"dataValue"}, {}]
							}]
						}],
						acctPassbookBal: ["wm.Number", {"border":"0","caption":"Passbook Balance","captionSize":"200px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}],
						acctCurrentBal: ["wm.Number", {"border":"0","caption":"Current Balance","captionSize":"200px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}],
						acctFloat: ["wm.Number", {"border":"0","caption":"Float","captionSize":"200px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}],
						acctHold: ["wm.Number", {"border":"0","caption":"Hold","captionSize":"200px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}],
						acctAvailBal: ["wm.Number", {"border":"0","caption":"Available Balance","captionSize":"200px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}],
						acctUnpostedInt: ["wm.Number", {"border":"0","caption":"Unposted Interest","captionSize":"200px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}],
						acctWtaxAmt: ["wm.Number", {"border":"0","caption":"W/ Tax Amount","captionSize":"200px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}],
						acctClosingBal: ["wm.Number", {"border":"0","caption":"Closing Balance","captionSize":"200px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"400px"}, {}]
					}],
					spacer10: ["wm.Spacer", {"height":"10px","styles":{},"width":"10px"}, {}]
				}],
				panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
					button3: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}],
					button4: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}]
				}]
			}]
		}]
	}]
}