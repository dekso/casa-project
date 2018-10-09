BOO_BULK_TX.widgets = {
	svGetBatchList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getBatchList","service":"SigcardFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getBatchListInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fBatchStatusFilter.selectedItem.dataValue","targetProperty":"batchstatus"}, {}]
			}]
		}]
	}],
	svUploadBulk: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"saveBulkFile","service":"SigcardFacade"}, {"onResult":"svUploadBulkResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"saveBulkFileInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"0","targetProperty":"data.batchstatus"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"data.batchdate"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"data.processedby"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"dojoFileUpload1.variable.name","targetProperty":"data.batchfilename"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"data.uploadedby"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"data.originatingbr"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.dataValue","targetProperty":"data.companycode"}, {}]
			}]
		}]
	}],
	varBatchstatus: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Pending\",\"dataValue\":\"0\"},{\"name\":\"Processed\",\"dataValue\":\"1\"},{\"name\":\"All\",\"dataValue\":\"9\"}]","type":"EntryData"}, {}],
	svRunBulk: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"readBulk","service":"SigcardFacade"}, {"onResult":"svRunBulkResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"readBulkInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid1.selectedItem.id","targetProperty":"id"}, {}]
			}]
		}]
	}],
	designableDialog1: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"150px","height":"150px","styles":{},"title":"Upload FIle","width":"360px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"134px","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			label2Panel: ["wm.Panel", {"height":"40px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				label2Panel: ["wm.Panel", {"height":"33px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"334px"}, {}, {
					label2: ["wm.Label", {"caption":"Select File","height":"21px","padding":"0","styles":{"fontWeight":"normal","fontSize":"13px"},"width":"100%"}, {}],
					dojoFileUpload1: ["wm.DojoFileUpload", {"height":"28px","operation":"uploadCsvFile","styles":{},"useList":false,"width":"200px"}, {"onSuccess":"dojoFileUpload1Success"}, {
						input: ["wm.ServiceInput", {"type":"uploadCsvFileInputs"}, {}]
					}]
				}],
				label3Panel: ["wm.Panel", {"height":"24px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"0,12,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					label3: ["wm.Label", {"align":"right","caption":"","padding":"4","styles":{},"width":"100%"}, {}]
				}]
			}],
			selectMenu1: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Company Code: ","captionSize":"133px","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","options":"SAM, PLE","padding":"0,12,0,0","styles":{}}, {}],
			button2Panel: ["wm.Panel", {"height":"34px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"5,0,0,0","padding":"0,2,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				button2: ["wm.Button", {"border":"1","caption":"Submit","height":"100%","width":"80px"}, {"onclick":"svUploadBulk"}],
				button3: ["wm.Button", {"border":"1","caption":"Cancel","height":"100%","width":"80px"}, {"onclick":"button3Click"}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","margin":"10,40,0,40","styles":{},"verticalAlign":"top"}, {}, {
		panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
			label1: ["wm.Label", {"caption":"Bulk Transaction List","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
		}],
		panel1: ["wm.Panel", {"height":"29px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			fBatchStatusFilter: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Filter by status:","dataField":"dataValue","dataType":"EntryData","dataValue":undefined,"displayField":"name","displayValue":"","height":"25px","width":"300px"}, {"onchange":"svGetBatchList"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"varBatchstatus","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"companycode","title":"Companycode","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"batchstatus","title":"Batchstatus","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"batchdate","title":"Batchdate","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"processedby","title":"Processedby","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"batchfilename","title":"Batchfilename","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"uploadedby","title":"Uploadedby","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"originatingbr","title":"Originatingbr","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Companycode: \" + ${companycode} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Batchstatus: \" + ${batchstatus}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Batchdate: \" + ${batchdate}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Processedby: \" + ${processedby}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Batchfilename: \" + ${batchfilename}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Uploadedby: \" + ${uploadedby}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Originatingbr: \" + ${originatingbr}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.smslai_eoddb.data.Tbbatchfile","height":"350px","minDesktopHeight":60,"singleClickEdit":true}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"svGetBatchList","targetProperty":"dataSet"}, {}]
			}]
		}],
		spacer1: ["wm.Spacer", {"height":"10px","width":"96px"}, {}],
		button1Panel: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"300px"}, {}, {
			button1: ["wm.Button", {"border":"1","caption":"Upload FIle","desktopHeight":"24px","height":"24px","width":"99px"}, {"onclick":"button1Click"}],
			button4: ["wm.Button", {"border":"1","caption":"Run Bulk","desktopHeight":"24px","height":"24px","width":"99px"}, {"onclick":"svRunBulk"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${dojoGrid1.selectedItem.batchstatus}==1","targetProperty":"disabled"}, {}]
				}]
			}]
		}]
	}]
}