SYS_CODETABLE_MAINTENANCE.widgets = {
	svCodenameList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCodename","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getCodenameInputs"}, {}]
	}],
	svCodetableList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"listCodetable","service":"UtilFacade"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"listCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fCodename.dataValue","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svSaveNew: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addCodetable","service":"UtilFacade"}, {"onResult":"svSaveNewResult"}, {
		input: ["wm.ServiceInput", {"type":"addCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"fDesc1.dataValue","targetProperty":"record.desc1"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"fDesc2.dataValue","targetProperty":"record.desc2"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"fCdval.dataValue","targetProperty":"record.codevalue"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"fCdname.dataValue","targetProperty":"record.codename"}, {}]
			}]
		}]
	}],
	svSaveEdit: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addCodetable","service":"UtilFacade"}, {"onResult":"svSaveEditResult"}, {
		input: ["wm.ServiceInput", {"type":"addCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"fDesc1.dataValue","targetProperty":"record.desc1"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"fDesc2.dataValue","targetProperty":"record.desc2"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"fCdval.dataValue","targetProperty":"record.codevalue"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"fId.dataValue","targetProperty":"record.id"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"codetableGrid.selectedItem.codename","targetProperty":"record.codename"}, {}]
			}]
		}]
	}],
	dlgSetupNewEdit: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"180px","height":"180px","title":"","width":"400px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			pnlSetup: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				panel2: ["wm.Panel", {"height":"102px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					fId: ["wm.Text", {"border":"0","caption":"Id:","captionSize":"80px","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"showing":false,"width":"300px"}, {}],
					fCdname: ["wm.Text", {"border":"0","caption":"Codename:","captionSize":"80px","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}],
					fCdval: ["wm.Text", {"border":"0","caption":"Codevalue:","captionSize":"80px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"300px"}, {}],
					fDesc1: ["wm.Text", {"border":"0","caption":"Desc1:","captionSize":"80px","dataValue":undefined,"displayValue":"","height":"25px","required":true}, {}],
					fDesc2: ["wm.Text", {"border":"0","caption":"Desc2:","captionSize":"80px","dataValue":undefined,"displayValue":"","height":"25px"}, {}]
				}],
				panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
					btnSetupSubmit: ["wm.Button", {"border":"1","caption":"Submit","desktopHeight":"24px","height":"24px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnSetupSubmitClick"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"pnlSetup.invalid","targetProperty":"disabled"}, {}]
						}]
					}],
					btnSetupClose: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"24px","height":"24px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnSetupCloseClick"}]
				}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		pnlMain: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			label1: ["wm.Label", {"border":"0,0,0,0","borderColor":"","caption":"Codetable Maintenance","padding":"4","styles":{"fontWeight":"bolder","fontSize":"13px","color":"#6a696f","textDecoration":"underline"}}, {}],
			spacer1: ["wm.Spacer", {"height":"10px","width":"96px"}, {}],
			panel1: ["wm.Panel", {"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,0,0,5","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
				fCodename: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Codename:","captionSize":"80px","dataField":"dataValue","dataType":"java.lang.String","displayField":"dataValue","displayValue":"","emptyValue":"null","height":"25px","styles":{},"width":"250px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svCodenameList","targetProperty":"dataSet"}, {}]
					}]
				}],
				btnSearch: ["wm.Button", {"border":"1","caption":"Search","desktopHeight":"24px","height":"24px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnSearchClick"}],
				btnAdd: ["wm.Button", {"border":"1","caption":"Add","desktopHeight":"24px","height":"24px","margin":"0,0,0,10","styles":{},"width":"100px"}, {"onclick":"btnAddClick"}]
			}],
			pnlGrid: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,5,0,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				codetableGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Codevalue","width":"50%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Codename: \" + ${codename} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Codevalue: \" + ${codevalue}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Desc1: \" + ${desc1}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Desc2: \" + ${desc2}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"codename","title":"Codename","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"codevalue","title":"Codevalue","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"desc1","title":"Desc1","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"desc2","title":"Desc2","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"width":"90%"}, {"onClick":"codetableGridClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svCodetableList","targetProperty":"dataSet"}, {}]
					}]
				}]
			}]
		}]
	}]
}