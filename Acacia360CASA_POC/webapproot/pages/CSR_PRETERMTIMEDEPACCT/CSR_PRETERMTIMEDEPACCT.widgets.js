CSR_PRETERMTIMEDEPACCT.widgets = {
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
		panel1: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"PRE-TERMINATE TIME DEPOSIT ACCOUNT","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"350px"}, {}]
			}],
			panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${svSearchAccount.result}==1","targetProperty":"showing"}, {}]
				}],
				panel5: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,2","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
					spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					acctNo: ["wm.Text", {"border":"0","caption":"Account Number:","captionSize":"170px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"370px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
						}]
					}],
					spacer5: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
					button1: ["wm.Button", {"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","width":"80px"}, {}]
				}],
				spacer6: ["wm.Spacer", {"height":"6px","styles":{},"width":"10px"}, {}],
				panel3: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
					label2: ["wm.Label", {"caption":"DISPOSITION FOR RENEWAL / PAYOUT","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"350px"}, {}]
				}],
				panel7: ["wm.Panel", {"height":"25px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
					label3: ["wm.Label", {"align":"center","caption":"Account Details","height":"22px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bold","color":"#535050"},"width":"350px"}, {}]
				}],
				panel6: ["wm.Panel", {"height":"80px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"35%"}, {}, {
						acctNumber: ["wm.Text", {"border":"0","caption":"Account Number:","captionSize":"110px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
							}]
						}],
						spacer7: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						acctName: ["wm.Text", {"border":"0","caption":"Account Name:","captionSize":"110px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}]
					}],
					panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"35%"}, {}, {
						acctType: ["wm.SelectMenu", {"border":"0","caption":"Type:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px","width":"265px"}, {}],
						CurrentBal: ["wm.Text", {"border":"0","caption":"Current Balance:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}]
					}],
					panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"35%"}, {}, {
						Disposition: ["wm.SelectMenu", {"border":"0","caption":"Disposition for:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px","width":"265px"}, {}]
					}]
				}],
				panel11: ["wm.Panel", {"height":"345px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
					panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"35%"}, {}, {
						label4: ["wm.Label", {"align":"center","caption":"Time Deposit Details","height":"22px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bold","color":"#535050"},"width":"350%"}, {}],
						spacer9: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						SecName: ["wm.Text", {"border":"0","caption":"Second Name:","captionSize":"120px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
							}]
						}],
						spacer8: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						ThirdName: ["wm.Text", {"border":"0","caption":"Third Name:","captionSize":"120px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}],
						spacer13: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						PlcmntAmt: ["wm.Number", {"border":"0","caption":"Placement Amount:","captionSize":"120px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","margin":"0,0,0,0","places":2,"styles":{},"width":"265px"}, {}],
						spacer14: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						term: ["wm.Text", {"border":"0","caption":"Terms (days):","captionSize":"120px","dataValue":"","displayValue":"","emptyValue":"emptyString","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}],
						spacer15: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						IntRate: ["wm.Text", {"border":"0","caption":"Interest Rate(%):","captionSize":"120px","dataValue":"","displayValue":"","emptyValue":"emptyString","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}],
						spacer16: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						PaymentFreq: ["wm.SelectMenu", {"border":"0","caption":"Payment Frequency:","captionSize":"120px","dataValue":undefined,"displayValue":"","height":"25px","width":"265px"}, {}],
						spacer17: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						ModeOfPymnt: ["wm.SelectMenu", {"border":"0","caption":"Mode of Payment:","captionSize":"120px","dataValue":undefined,"displayValue":"","height":"25px","width":"265px"}, {}],
						spacer18: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						accountNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"120px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}],
						spacer19: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						BookingDate: ["wm.Date", {"border":"0","caption":"Booking Date:","captionSize":"120px","dataValue":undefined,"displayValue":"","height":"25px","width":"265px"}, {}],
						spacer20: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						MatDate: ["wm.Date", {"border":"0","caption":"Maturity Date:","captionSize":"120px","dataValue":undefined,"displayValue":"","height":"25px","width":"265px"}, {}],
						spacer21: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						Currency: ["wm.SelectMenu", {"border":"0","caption":"Currency:","captionSize":"120px","dataValue":undefined,"displayValue":"","height":"25px","width":"265px"}, {}]
					}],
					panel13: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"35%"}, {}, {
						label5: ["wm.Label", {"align":"center","caption":"Adjustment Details","height":"22px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bold","color":"#535050"},"width":"350%"}, {}],
						spacer10: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						RollOverAmt: ["wm.Text", {"border":"0","caption":"Roll-over Amount:","captionSize":"150px","displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${svSearchAccount.form.accountno}","targetProperty":"dataValue"}, {}]
							}]
						}],
						spacer12: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						AddtnlAmt: ["wm.Text", {"border":"0","caption":"Additional Amount:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}],
						spacer24: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						TotPlcmntAmt: ["wm.Text", {"border":"0","caption":"Total Placement Amount:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}],
						spacer25: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						term1: ["wm.Text", {"border":"0","caption":"Terms (days):","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}],
						spacer26: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						InterestRate: ["wm.Text", {"border":"0","caption":"Interest Rate(%):","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","margin":"0,0,0,0","styles":{},"width":"265px"}, {}],
						spacer27: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						PaymentFreq1: ["wm.SelectMenu", {"border":"0","caption":"Payment Frequency:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","width":"265px"}, {}],
						spacer28: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						BookingDate1: ["wm.Date", {"border":"0","caption":"Booking Date:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","width":"265px"}, {}],
						spacer29: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						MatDate1: ["wm.Date", {"border":"0","caption":"Maturity Date:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","width":"265px"}, {}],
						spacer30: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						ModeOfPymnt1: ["wm.SelectMenu", {"border":"0","caption":"Mode of Payment:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","width":"265px"}, {}]
					}],
					panel14: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"30%"}, {}, {
						label6: ["wm.Label", {"align":"center","caption":"Payout Details","height":"22px","padding":"4","styles":{"fontSize":"14px","fontWeight":"bold","color":"#535050"},"width":"350%"}, {}],
						spacer22: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						Penalty: ["wm.Number", {"border":"0","caption":"Penalty:","captionSize":"90px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","margin":"0,0,0,0","places":2,"styles":{},"width":"230px"}, {}],
						spacer23: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						tax: ["wm.Number", {"border":"0","caption":"Tax:","captionSize":"90px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","margin":"0,0,0,0","places":2,"styles":{},"width":"230px"}, {}],
						spacer31: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						DocStamp: ["wm.Number", {"border":"0","caption":"Doc Stamp:","captionSize":"90px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","margin":"0,0,0,0","places":2,"styles":{},"width":"230px"}, {}],
						spacer32: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						TotalAmt: ["wm.Number", {"border":"0","caption":"Total Amount:","captionSize":"90px","dataValue":0,"displayValue":"0.00","emptyValue":"zero","height":"25px","margin":"0,0,0,0","places":2,"styles":{},"width":"230px"}, {}],
						spacer33: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						ModeOfPymnt2: ["wm.SelectMenu", {"border":"0","caption":"Mode of Payment:","captionSize":"110px","dataValue":undefined,"displayValue":"","height":"25px","width":"230px"}, {}]
					}]
				}]
			}]
		}]
	}]
}