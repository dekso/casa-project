SYS_EOD.widgets = {
	svEODDetail: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"eodDetail","service":"GLAccountFacade"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"eodDetailInputs"}, {}]
	}],
	svRun: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"runEod","service":"GLAccountFacade"}, {"onResult":"svRunResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"runEodInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"if(${svEODDetail.brstatus}==\"Open\"){\n\"0\"    \n}else if(${svEODDetail.brstatus}==\"Close\"){\n\"1\"\n}","targetProperty":"value"}, {}]
			}]
		}]
	}],
	designableDialog1: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","styles":{}}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"15px"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		pnlMain: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			label1: ["wm.Label", {"border":"0,0,0,0","borderColor":"","caption":"End Of Day","padding":"4","styles":{"fontWeight":"bolder","fontSize":"13px","color":"#6a696f","textDecoration":"underline"}}, {}],
			spacer1: ["wm.Spacer", {"height":"10px","width":"96px"}, {}],
			panel1: ["wm.Panel", {"height":"149px","horizontalAlign":"left","margin":"0,0,0,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				fCurrdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Current Business Date:","captionSize":"133px","displayValue":"","height":"25px","readonly":true,"width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svEODDetail.currdt","targetProperty":"dataValue"}, {}]
					}]
				}],
				fNxtdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Next Business Date:","captionSize":"133px","displayValue":"","height":"25px","readonly":true,"width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svEODDetail.nextdt","targetProperty":"dataValue"}, {}]
					}]
				}],
				fBranchno: ["wm.Text", {"border":"0","caption":"Branch Open:","captionSize":"133px","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"styles":{},"width":"300px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svEODDetail.openbr","targetProperty":"dataValue"}, {}]
					}]
				}],
				spacer2: ["wm.Spacer", {"height":"10px","styles":{},"width":"96px"}, {}],
				btnRun: ["wm.Button", {"border":"1","caption":"Run EOD","desktopHeight":"24px","height":"24px","margin":"0,0,0,0","styles":{},"width":"110px"}, {"onclick":"btnRunClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"${fBranchno.dataValue} > 0","targetProperty":"disabled"}, {}]
					}]
				}]
			}]
		}]
	}]
}