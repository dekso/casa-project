Report_Page.widgets = {
	varRptName: ["wm.Variable", {"type":"StringData"}, {}],
	svErrCorrTx: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"ErrorCorrectionTrans","service":"Report"}, {"onResult":"svErrCorrTxResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"ErrorCorrectionTransInputs"}, {}]
	}],
	svCashInOut: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"CashInCashOut","service":"Report"}, {"onResult":"svCashInOutResult"}, {
		input: ["wm.ServiceInput", {"type":"CashInCashOutInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fDate.dataValue","targetProperty":"date"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.username.dataValue","targetProperty":"username"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svTLRTotalInq: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"TellersTotal","service":"Report"}, {"onResult":"svTLRTotalInqResult"}, {
		input: ["wm.ServiceInput", {"type":"TellersTotalInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.username.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fDate1.dataValue","targetProperty":"date"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svEJournal: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"EJournalPDF","service":"Report"}, {"onResult":"svEJournalResult"}, {
		input: ["wm.ServiceInput", {"type":"EJournalPDFInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.username.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fDate2.dataValue","targetProperty":"date"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svAllAccptdTx: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"AllAcceptedTrans","service":"Report"}, {"onResult":"svAllAccptdTxResult"}, {
		input: ["wm.ServiceInput", {"type":"AllAcceptedTransInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.username.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fDate3.dataValue","targetProperty":"date"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svAllRejTx: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"AllRejectedTrans","service":"Report"}, {"onResult":"svAllRejTxResult"}, {
		input: ["wm.ServiceInput", {"type":"AllRejectedTransInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.username.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fDate4.dataValue","targetProperty":"date"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svAllSupOverrideTx: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"AllSupOverridetx","service":"Report"}, {"onResult":"svAllSupOverrideTxResult"}, {
		input: ["wm.ServiceInput", {"type":"AllSupOverridetxInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.username.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fDate5.dataValue","targetProperty":"date"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svAllTimeOutAccptTx: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"AllTimeOutAcceptedtx","service":"Report"}, {"onResult":"svAllTimeOutAccptTxResult"}, {
		input: ["wm.ServiceInput", {"type":"AllTimeOutAcceptedtxInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.username.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fDate6.dataValue","targetProperty":"date"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"reportFrame","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
		ReportTreePanel: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{"backgroundColor":"#f1f1f1"},"verticalAlign":"top","width":"230px"}, {}, {
			ReportTree: ["wm.ObjectTree", {"data":{"On Demand Reports":{"Cash In / Out Report":undefined,"Tellers Total Inquiry":undefined,"Electronic Journal":undefined,"All Accepted Transaction":undefined,"All Error Correction Transaction":undefined,"All Rejected Transaction":undefined,"All Supervisor Override Transaction":undefined,"All Timeout and Accepted Transaction":undefined}},"height":"564px","margin":"25,0,0,0","styles":{"backgroundColor":"#f1f1f1"}}, {"onclick":"ReportTreeClick","onclick1":"ReportTreeClick1"}]
		}],
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			selectPrevAs: ["wm.SelectMenu", {"border":"0","caption":"Preview as:","dataField":"dataValue","dataValue":"PDF","displayField":"dataValue","displayValue":"PDF","height":"25px","options":"PDF","showing":false,"width":"240px"}, {}],
			lblReport: ["wm.Label", {"caption":"","height":"30px","padding":"4","width":"100%"}, {}],
			CashInOut: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Cash In / Out Report\"","targetProperty":"showing"}, {}]
				}],
				fDate: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","displayValue":"","height":"25px","width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
					}]
				}],
				button2: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svCashInOut"}]
			}],
			TlrTolInq: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Tellers Total Inquiry\"","targetProperty":"showing"}, {}]
				}],
				fDate1: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","displayValue":"","height":"25px","width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
					}]
				}],
				button3: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svTLRTotalInq"}]
			}],
			ElecJrnl: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"Electronic Journal\"","targetProperty":"showing"}, {}]
				}],
				fDate2: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","displayValue":"","height":"25px","width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
					}]
				}],
				button4: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svEJournal"}]
			}],
			AllAccTx: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"All Accepted Transaction\"","targetProperty":"showing"}, {}]
				}],
				fDate3: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","displayValue":"","height":"25px","width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
					}]
				}],
				button5: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svAllAccptdTx"}]
			}],
			ErrCorrTx: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"All Error Correction Transaction\"","targetProperty":"showing"}, {}]
				}],
				button1: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svErrCorrTx"}]
			}],
			AllRjctTx: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"All Rejected Transaction\"","targetProperty":"showing"}, {}]
				}],
				fDate4: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","displayValue":"","height":"25px","width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
					}]
				}],
				button6: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svAllRejTx"}]
			}],
			AllSpvsrOverrideTx: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"All Supervisor Override Transaction\"","targetProperty":"showing"}, {}]
				}],
				fDate5: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","displayValue":"","height":"25px","width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
					}]
				}],
				button7: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svAllSupOverrideTx"}]
			}],
			AllTimeoutAccptTx: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${varRptName.dataValue} == \"All Timeout and Accepted Transaction\"","targetProperty":"showing"}, {}]
				}],
				fDate6: ["wm.Date", {"border":"0","caption":"Date:","captionSize":"60px","displayValue":"","height":"25px","width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"dataValue"}, {}]
					}]
				}],
				button8: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"25px","height":"25px","styles":{},"width":"80px"}, {"onclick":"svAllTimeOutAccptTx"}]
			}],
			reportFrame: ["wm.IFrame", {"height":"100%","styles":{},"width":"100%"}, {}]
		}]
	}]
}