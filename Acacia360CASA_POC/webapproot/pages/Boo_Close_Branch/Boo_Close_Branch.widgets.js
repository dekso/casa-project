Boo_Close_Branch.widgets = {
	navCashDep: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"TLR_FX_CASHDEP\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navCashWith: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"TLR_FX_CASHWDRW\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navAccountInq: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"TLR_ACCTBALINQ\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	svCurrList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCurrency","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getCurrencyInputs"}, {}]
	}],
	svUserList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUserListCico","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserListCicoInputs"}, {}]
	}],
	notiCposAccept: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"notiCposAcceptOk"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"\"Proceed\"","targetProperty":"OKButtonText"}, {}],
				wire: ["wm.Wire", {"expression":"\"Are you sure you want to accept?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	svConfimCpos: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"cashPosDenom","service":"FinTxFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"cashPosDenomInputs"}, {}]
	}],
	varCposAction: ["wm.Variable", {"type":"StringData"}, {}],
	svActionCpos: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"confirmCashPos","service":"FinTxFacade"}, {"onResult":"svActionCposResult"}, {
		input: ["wm.ServiceInput", {"type":"confirmCashPosInputs"}, {}]
	}],
	notiCposDecline: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"notiCposDeclineOk"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Are you sure you want to decline?\"","targetProperty":"text"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Process\"","targetProperty":"OKButtonText"}, {}]
			}]
		}]
	}],
	svUnitBalance: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","loadingDialog":"","operation":"getUnitBalance","service":"UserInfoFacade"}, {"onResult":"svUnitBalanceResult"}, {
		input: ["wm.ServiceInput", {"type":"getUnitBalanceInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[main].svSecurityUser.dataValue","targetProperty":"userid"}, {}]
			}]
		}]
	}],
	timer1: ["wm.Timer", {"autoStart":true,"delay":1500,"repeating":false}, {"onTimerFire":"svCashInCashOut"}],
	dlgAmtEntry: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"470px","height":"470px","title":"Amount Entry","width":"420px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			panel11: ["wm.Panel", {"height":"358px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				panel12: ["wm.Panel", {"height":"355px","horizontalAlign":"center","verticalAlign":"top","width":"130px"}, {}, {
					label2: ["wm.Label", {"align":"center","caption":"Denomination","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
					denomPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						tx1000dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":1000,"displayValue":"1,000.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx500dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":500,"displayValue":"500.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx200dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":200,"displayValue":"200.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx100dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":100,"displayValue":"100.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx50dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":50,"displayValue":"50.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx20dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":20,"displayValue":"20.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx10dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":10,"displayValue":"10.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx5dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":5,"displayValue":"5.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx1dnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":1,"displayValue":"1.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx25cntdnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.25,"displayValue":"0.25","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx10cntdnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.1,"displayValue":"0.10","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx5cntdnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.05,"displayValue":"0.05","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx1cntdnm: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.01,"displayValue":"0.01","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}]
					}]
				}],
				panel1: ["wm.Panel", {"height":"355px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"120px"}, {}, {
					label4: ["wm.Label", {"align":"center","caption":"Count","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
					countPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						tx1000qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
						tx500qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
						tx200qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
						tx100qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
						tx50qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
						tx20qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
						tx10qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
						tx5qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
						tx1qn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
						tx25cntqn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
						tx10cntqn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
						tx5cntqn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}],
						tx1cntqn: ["wm.Number", {"border":"0","caption":undefined,"dataValue":0,"displayValue":"0","emptyValue":"zero","height":"25px","places":undefined}, {}]
					}]
				}],
				panel4: ["wm.Panel", {"height":"355px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"140px"}, {}, {
					label5: ["wm.Label", {"align":"center","caption":"Amount","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
					amountPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						tx1000: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx1000dnm.dataValue}*${tx1000qn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx500: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx500dnm.dataValue}*${tx500qn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx200: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx200dnm.dataValue}*${tx200qn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx100: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx100dnm.dataValue}*${tx100qn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx50: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx50dnm.dataValue}*${tx50qn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx20: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx20dnm.dataValue}*${tx20qn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx10: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx10dnm.dataValue}*${tx10qn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx5: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx5dnm.dataValue}*${tx5qn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx1: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx1dnm.dataValue}*${tx1qn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx25cnt: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx25cntdnm.dataValue}*${tx25cntqn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx10cnt: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx10cntdnm.dataValue}*${tx10cntqn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx5cnt: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx5cntdnm.dataValue}*${tx5cntqn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx1cnt: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx1cntdnm.dataValue}*${tx1cntqn.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}]
					}]
				}]
			}],
			panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				panel6: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					txTotalAmt: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":"Total Amount:","captionSize":"120px","displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"200px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${tx1000.dataValue}+${tx500.dataValue}+${tx200.dataValue}+\n${tx100.dataValue}+${tx50.dataValue}+${tx20.dataValue}+\n${tx10.dataValue}+${tx5.dataValue}+${tx1.dataValue}+\n${tx25cnt.dataValue}+${tx10cnt.dataValue}+${tx5cnt.dataValue}+${tx1cnt.dataValue}","targetProperty":"dataValue"}, {}]
						}]
					}],
					spacer1: ["wm.Spacer", {"height":"20px","width":"15px"}, {}]
				}],
				panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					btnSubmit: ["wm.Button", {"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","width":"95px"}, {"onclick":"dlgAmtEntry.hide"}],
					btnCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"28px","height":"28px","margin":"0,0,0,0","styles":{},"width":"80px"}, {"onclick":"btnCancelClick"}],
					spacer2: ["wm.Spacer", {"height":"20px","width":"15px"}, {}]
				}]
			}]
		}]
	}],
	dlgCashPos: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget1","desktopHeight":"230px","height":"230px","title":"Cash Out","width":"370px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			cicoPanel: ["wm.Panel", {"height":"130px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				cpTxdate: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Transaction Date:","displayValue":"10/19/2017","height":"25px","width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
					}]
				}],
				cpOrigin: ["wm.Text", {"border":"0","caption":"Origin:","displayValue":"","height":"25px","readonly":true,"width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"[main].svUserInfo.name","targetProperty":"dataValue"}, {}]
					}]
				}],
				cpDestination: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Destination:","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svUserList","targetProperty":"dataSet"}, {}]
					}]
				}],
				cpCurrency: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svCurrList","targetProperty":"dataSet"}, {}]
					}]
				}],
				cpTxamount: ["wm.Number", {"border":"0","caption":"Amount:","displayValue":"0","emptyValue":"zero","height":"25px","width":"300px"}, {"onfocus":"dlgAmtEntry.show"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"txTotalAmt.dataValue","targetProperty":"dataValue"}, {}]
					}]
				}]
			}],
			panel8: ["wm.Panel", {"height":"39px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				btnCicoSubmit: ["wm.Button", {"border":"1","caption":"Submit","desktopHeight":"31px","height":"31px","width":"93px"}, {"onclick":"svCashPosition"}],
				btnCicoCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"31px","height":"31px","width":"93px"}, {"onclick":"btnCicoCancelClick"}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"15px"}, {}]
	}],
	dlgAmtDetail: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"470px","height":"470px","title":"Amount Denomination Detail","width":"420px"}, {}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			panel13: ["wm.Panel", {"height":"358px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				panel14: ["wm.Panel", {"height":"355px","horizontalAlign":"center","verticalAlign":"top","width":"130px"}, {}, {
					label6: ["wm.Label", {"align":"center","caption":"Denomination","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
					denomPanelDet: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						tx1000dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":1000,"displayValue":"1,000.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx500dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":500,"displayValue":"500.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx200dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":200,"displayValue":"200.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx100dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":100,"displayValue":"100.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx50dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":50,"displayValue":"50.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx20dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":20,"displayValue":"20.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx10dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":10,"displayValue":"10.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx5dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":5,"displayValue":"5.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx1dnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":1,"displayValue":"1.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx25cntdnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.25,"displayValue":"0.25","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx10cntdnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.1,"displayValue":"0.10","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx5cntdnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.05,"displayValue":"0.05","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}],
						tx1cntdnmdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"dataValue":0.01,"displayValue":"0.01","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}]
					}]
				}],
				panel9: ["wm.Panel", {"height":"355px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"120px"}, {}, {
					label7: ["wm.Label", {"align":"center","caption":"Count","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
					countPanelDet: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						tx1000countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm1000","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx500countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm500","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx200countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm200","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx100countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm100","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx50countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm50","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx20countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm20","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx10countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm10","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx5countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm5","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx1countdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm1","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx25cntcountdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm25cnt","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx10cntcountdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm10cnt","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx5cntcountdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm5cnt","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx1cntcountdet: ["wm.Number", {"_classes":{"domNode":["tx1000dnm"]},"border":"0","caption":undefined,"displayValue":"","emptyValue":"zero","height":"25px","places":undefined,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.dnm1cnt","targetProperty":"dataValue"}, {}]
							}]
						}]
					}]
				}],
				panel15: ["wm.Panel", {"height":"355px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"140px"}, {}, {
					label8: ["wm.Label", {"align":"center","caption":"Amount","padding":"4","styles":{"fontWeight":"bold"},"width":"100%"}, {}],
					amountPanelDet: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						tx1000amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx1000dnmdet.dataValue}*${tx1000countdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx500amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx500dnmdet.dataValue}*${tx500countdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx200amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx200dnmdet.dataValue}*${tx200countdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx100amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx100dnmdet.dataValue}*${tx100countdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx50amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx50dnmdet.dataValue}*${tx50countdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx20amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx20dnmdet.dataValue}*${tx20countdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx10amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx10dnmdet.dataValue}*${tx10countdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx5amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx5dnmdet.dataValue}*${tx5countdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx1amtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx1dnmdet.dataValue}*${tx1countdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx25cntamtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx25cntdnmdet.dataValue}*${tx25cntcountdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx10cntamtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx10cntdnmdet.dataValue}*${tx10cntcountdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx5cntamtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx5cntdnmdet.dataValue}*${tx5cntcountdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}],
						tx1cntamtdet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":undefined,"displayValue":"0.00","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"${tx1cntdnmdet.dataValue}*${tx1cntcountdet.dataValue}","targetProperty":"dataValue"}, {}]
							}]
						}]
					}]
				}]
			}],
			panel16: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				panel17: ["wm.Panel", {"height":"30px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					txStatus: ["wm.Text", {"_classes":{"domNode":["txamount"]},"border":"0","caption":"Status:","captionSize":"45px","displayValue":"","emptyValue":"emptyString","height":"25px","margin":"0,0,0,5","padding":"0","readonly":true,"styles":{},"width":"120px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.status","targetProperty":"dataValue"}, {}]
						}]
					}],
					spacer5: ["wm.Spacer", {"height":"20px","width":"70px"}, {}],
					txTotalAmtDet: ["wm.Number", {"_classes":{"domNode":["txamount"]},"applyPlacesWhileTyping":true,"border":"0","caption":"Total Amount:","captionSize":"120px","displayValue":"","emptyValue":"zero","height":"25px","places":2,"readonly":true,"styles":{},"width":"200px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svConfimCpos.denom.txamount","targetProperty":"dataValue"}, {}]
						}]
					}],
					spacer3: ["wm.Spacer", {"height":"20px","width":"15px"}, {}]
				}],
				panel18: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					btnCposActionPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"172px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${txStatus.dataValue}==\"Pending\"","targetProperty":"showing"}, {}]
						}],
						btnCposAccept: ["wm.Button", {"border":"1","caption":"Accept","desktopHeight":"28px","height":"28px","styles":{},"width":"100%"}, {"onclick":"notiCposAccept"}],
						btnCposDecline: ["wm.Button", {"border":"1","caption":"Decline","desktopHeight":"28px","height":"28px","margin":"0,0,0,0","styles":{},"width":"80px"}, {"onclick":"notiCposDecline"}]
					}],
					btnCposClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"28px","height":"28px","margin":"0,0,0,10","styles":{},"width":"95px"}, {"onclick":"dlgAmtDetail.hide"}],
					spacer4: ["wm.Spacer", {"height":"20px","width":"15px"}, {}]
				}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"80%"}, {}, {
			pnlCashin: ["wm.Panel", {"height":"50%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
					label1: ["wm.Label", {"caption":"Close Branch","height":"30px","padding":"4","styles":{"fontWeight":"bold","fontSize":"18px"}}, {}]
				}],
				panel10: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}],
				cashinGrid: ["wm.DojoGrid", {"caseSensitiveSort":false,"columnReordering":false,"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txdate","title":"Txdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":true,"field":"unit","title":"Unit","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"origin","title":"Origin","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"destination","title":"Destination","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"currency","title":"Currency","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txamount","title":"Txamount","width":"80px","align":"right","formatFunc":"wm_number_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":false,"field":"remarks","title":"Remarks","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txref","title":"Txref","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"txstatus","title":"Txstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"instcode","title":"Instcode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Txdate: \" + ${wm.runtimeId}.formatCell(\"txdate\", ${txdate}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Unit: \" + ${unit}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Origin: \" + ${origin}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Destination: \" + ${destination}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Currency: \" + ${currency}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txamount: \" + ${wm.runtimeId}.formatCell(\"txamount\", ${txamount}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txref: \" + ${txref}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Txstatus: \" + ${txstatus}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"btn\", ${btn}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"btn","title":"Action","width":"100%","align":"left","formatFunc":"wm_button_formatter","expression":"\"View\"","isCustomField":true}
],"dataSet":"","height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"sortingEnabled":false,"styles":{}}, {"onGridButtonClick":"cashinGridGridButtonClick"}]
			}]
		}]
	}]
}