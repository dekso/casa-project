CSHR_MISC_BILLSPYMNT.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			label1: ["wm.Label", {"caption":"BILLS PAYMENT","padding":"4","styles":{"fontWeight":"bolder","fontSize":"14px","color":"#623d3d"}}, {}],
			panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				panel5: ["wm.Panel", {"height":"55%","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"500px"}, {}, {
					fTxdate: ["wm.Date", {"border":"0","caption":"Transaction Date:","captionSize":"200px","displayValue":"10/14/2017","height":"25px","width":"400px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"new Date();","targetProperty":"dataValue"}, {}]
						}]
					}],
					spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					panel3: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
						label2: ["wm.Label", {"caption":"Merchant:","padding":"4","styles":{"fontWeight":"bold","color":"#020202"}}, {}],
						fCode: ["wm.RadioButton", {"border":"0","caption":"Code","captionPosition":"right","captionSize":"60px","displayValue":"","height":"25px","width":"80px"}, {}],
						fName: ["wm.RadioButton", {"border":"0","caption":"Name","captionPosition":"right","captionSize":"60px","displayValue":"","height":"25px","width":"80px"}, {}],
						selectMenu1: ["wm.SelectMenu", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"25px","width":"120px"}, {}]
					}],
					fPaymSlipNo: ["wm.Text", {"border":"0","caption":"Payment Slip Number:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}],
					spacer2: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					fSubscAcctNo: ["wm.Text", {"border":"0","caption":"Subscriber's Account Number:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}],
					spacer3: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					fSubsName: ["wm.Text", {"border":"0","caption":"Subscriber's Name:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}],
					acctSubsName1Panel: ["wm.Panel", {"height":"25px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"522px"}, {}, {
						fAmt: ["wm.Text", {"border":"0","caption":"Transaction Amount / Currency:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}],
						fcur: ["wm.SelectMenu", {"border":"0","caption":undefined,"dataValue":undefined,"displayValue":"","height":"25px","width":"80px"}, {}]
					}],
					fORNo: ["wm.Text", {"border":"0","caption":"OR Number:","captionSize":"200px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"400px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
						}]
					}],
					fModeofPaym: ["wm.SelectMenu", {"border":"0","caption":"Mode of Payment:","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}]
				}],
				panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
					button3: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}],
					button4: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svSearchAccount"}]
				}]
			}]
		}]
	}]
}