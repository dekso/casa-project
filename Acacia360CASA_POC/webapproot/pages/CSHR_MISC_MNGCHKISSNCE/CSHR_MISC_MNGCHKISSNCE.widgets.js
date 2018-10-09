CSHR_MISC_MNGCHKISSNCE.widgets = {
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
				label1: ["wm.Label", {"caption":"MANAGER'S CHECK","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
			}],
			panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${svSearchAccount.result}==1","targetProperty":"showing"}, {}]
				}],
				panel5: ["wm.Panel", {"height":"55%","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"500px"}, {}, {
					fTxdate: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"200px","displayValue":"10/14/2017","height":"25px","width":"400px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"new Date();","targetProperty":"dataValue"}, {}]
						}]
					}],
					spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					fDepName: ["wm.Text", {"border":"0","caption":"Depositor's Name:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}],
					spacer3: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					fPayeesName: ["wm.Text", {"border":"0","caption":"Payee's Name:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}],
					spacer2: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					fAmt: ["wm.Text", {"border":"0","caption":"Amount:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}],
					spacer4: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					fMCAcctNo: ["wm.Text", {"border":"0","caption":"MC Account No:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
						}]
					}],
					spacer5: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					fMCChkNo: ["wm.Text", {"border":"0","caption":"MC Check No:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
						}]
					}],
					label2Panel: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"400px"}, {}, {
						label2: ["wm.Label", {"caption":"Mode of Payment","padding":"4","styles":{"fontWeight":"bold","color":"#393636"}}, {}],
						fcash: ["wm.RadioButton", {"border":"0","caption":"Cash","captionSize":"50px","displayValue":"","height":"25px","styles":{},"width":"70px"}, {}],
						fcash1: ["wm.RadioButton", {"border":"0","caption":"Debit Account","captionSize":"90px","displayValue":"","height":"25px","styles":{},"width":"120px"}, {}]
					}],
					spacer6: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}]
				}],
				panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
					button3: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}],
					button4: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}]
				}]
			}]
		}]
	}]
}