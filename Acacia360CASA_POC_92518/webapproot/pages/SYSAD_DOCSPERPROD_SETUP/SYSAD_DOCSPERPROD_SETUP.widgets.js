SYSAD_DOCSPERPROD_SETUP.widgets = {
	svList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getDocsperProd","service":"UtilFacade"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"getDocsperProdInputs"}, {}]
	}],
	svDelete: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"deleteTerminal","service":"UtilFacade"}, {"onResult":"svDeleteResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"deleteTerminalInputs"}, {}]
	}],
	svAddUpdate: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addOrupdateDocsperProd","service":"UtilFacade"}, {"onResult":"svAEResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"addOrupdateDocsperProdInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"data.unitid"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"data.createdby"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"fDocCode.dataValue","targetProperty":"data.ipadd"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"fDocName.dataValue","targetProperty":"data.terminalno"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"fDocName.dataValue","targetProperty":"data.terminal"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"fDocCode.dataValue","targetProperty":"data.ipaddress"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"fDocCode.dataValue","targetProperty":"doc.documentcode"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"fDocName.dataValue","targetProperty":"doc.documentname"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"fRemarks.dataValue","targetProperty":"doc.remarks"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"fDocName.dataValue","targetProperty":"docs.documentname"}, {}],
				wire11: ["wm.Wire", {"expression":undefined,"source":"fDocCode.dataValue","targetProperty":"docs.documentcode"}, {}],
				wire12: ["wm.Wire", {"expression":undefined,"source":"fRemarks.dataValue","targetProperty":"docs.remarks"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"dgDocument.selectedItem.id","targetProperty":"docs.id"}, {}],
				wire13: ["wm.Wire", {"expression":undefined,"source":"slcProdtype.selectedItem.id","targetProperty":"docs.producttype"}, {}]
			}]
		}]
	}],
	codeProdType: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"PRODUCTGROUP\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	dlgDocument: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"205px","height":"205px","styles":{},"title":undefined,"width":"430px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			fDocCode: ["wm.Text", {"border":"0","caption":"Document Code:","captionSize":"120px","displayValue":"","height":"25px","required":true,"styles":{}}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"dgDocument.selectedItem.documentcode","targetProperty":"dataValue"}, {}]
				}]
			}],
			fDocName: ["wm.Text", {"border":"0","caption":"Document Name:","captionSize":"120px","displayValue":"","height":"25px","required":true}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"dgDocument.selectedItem.documentname","targetProperty":"dataValue"}, {}]
				}]
			}],
			slcProdtype: ["wm.SelectMenu", {"border":"0","caption":"Product Type:","captionSize":"120px","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","displayField":"description","displayValue":"","height":"25px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"codeProdType","targetProperty":"dataSet"}, {}],
					wire1: ["wm.Wire", {"expression":undefined,"source":"dgDocument.selectedItem.producttype","targetProperty":"dataValue"}, {}]
				}]
			}],
			fRemarks: ["wm.Text", {"border":"0","caption":"Remarks:","captionSize":"120px","displayValue":"","height":"25px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"dgDocument.selectedItem.remarks","targetProperty":"dataValue"}, {}]
				}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"36px","height":"36px"}, {}, {
			btnSubmit: ["wm.Button", {"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","styles":{},"width":"90px"}, {"onclick":"btnSubmitClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${fDocCode.invalid} || ${fDocName.invalid}","targetProperty":"disabled"}, {}]
				}]
			}],
			btnClose: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"25px","height":"25px","margin":"0,0,0,0","styles":{},"width":"80px"}, {"onclick":"btnCloseClick"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"Documents Per Product Maintenance","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"357px"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"320px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"650px"}, {}, {
				spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
				dgDocument: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"createdby","title":"Createdby","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Document Code: \" + ${documentcode} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Document Name: \" + ${documentname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Product Type: \" + ${producttype}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Remarks: \" + ${remarks}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"btn","title":"Action","width":"100px","align":"center","formatFunc":"wm_button_formatter","expression":"\"Delete\"","isCustomField":true,"mobileColumn":false},
{"show":true,"field":"documentcode","title":"Document Code","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"documentname","title":"Document Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"producttype","title":"Product Type","width":"100%","align":"left","formatFunc":"","formatProps":null,"editorProps":null,"mobileColumn":false},
{"show":true,"field":"remarks","title":"Remarks","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datecreated","title":"Datecreated","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"updatedby","title":"Updatedby","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"lastupdated","title":"Lastupdated","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false}
],"dsType":"com.smslai_eoddb.data.Tbterminal","height":"100%","minDesktopHeight":60,"singleClickEdit":true}, {"onClick":"dgDocumentClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svList","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			btnAdd: ["wm.Button", {"border":"1","caption":"Add Document","desktopHeight":"30px","height":"30px","margin":"5,0,0,0","styles":{},"width":"110px"}, {"onclick":"btnAddClick"}]
		}]
	}]
}