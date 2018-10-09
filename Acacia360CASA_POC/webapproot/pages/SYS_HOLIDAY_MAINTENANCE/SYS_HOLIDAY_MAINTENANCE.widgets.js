SYS_HOLIDAY_MAINTENANCE.widgets = {
	notiAdd: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"notiAddOk"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Add Record?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	notiUpdate: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"notiUpdateOk"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"update record?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	notiDelete: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"notiDeleteOk"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Delete record?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	svAddEditDeleteHoliday: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addOrupdateHoliday","service":"UtilFacade"}, {"onResult":"svAddEditDeleteHolidayResult"}, {
		input: ["wm.ServiceInput", {"type":"addOrupdateHolidayInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtHolName.dataValue","targetProperty":"code.codename"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"txtDesc1.dataValue","targetProperty":"code.desc1"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"txtCodevalue.dataValue","targetProperty":"code.codevalue"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"gridHoliday.selectedItem.id","targetProperty":"code.id"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"txtHolName.dataValue","targetProperty":"hol.holName"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"dtHolDate.dataValue","targetProperty":"hol.holDate"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"gridHoliday.selectedItem.id","targetProperty":"hol.id"}, {}]
			}]
		}]
	}],
	svGetListHoliday: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListHoliday","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListHolidayInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtSearch.dataValue","targetProperty":"search"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"gridHoliday","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	desAddorUpdate: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"140px","height":"140px","title":undefined,"width":"440px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			formPanel1: ["wm.FormPanel", {"height":"100%"}, {}, {
				panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					txtHolName: ["wm.Text", {"border":"0","caption":"Holiday Name :","captionSize":"110px","displayValue":"","height":"25px","width":"400px"}, {"onchange":"txtHolNameChange"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"gridHoliday.selectedItem.holName","targetProperty":"dataValue"}, {}]
						}]
					}],
					dtHolDate: ["wm.Date", {"border":"0","caption":"Holiday Date :","captionSize":"110px","desktopHeight":"26px","displayValue":"","height":"26px","width":"400px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"gridHoliday.selectedItem.holDate","targetProperty":"dataValue"}, {}]
						}]
					}]
				}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"25px","margin":"0,0,0,0","padding":"0","styles":{}}, {}, {
			btnSave: ["wm.Button", {"border":"1","caption":"Save","desktopHeight":"24px","height":"24px","margin":"2,3,1,0","styles":{}}, {"onclick":"notiAdd"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${gridHoliday.emptySelection}","targetProperty":"showing"}, {}]
				}]
			}],
			btnUpdate: ["wm.Button", {"border":"1","caption":"Update","desktopHeight":"24px","height":"24px","margin":"2,3,1,0","styles":{}}, {"onclick":"notiUpdate"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${gridHoliday.isRowSelected}","targetProperty":"showing"}, {}]
				}]
			}],
			btnDelete: ["wm.Button", {"border":"1","caption":"Delete","desktopHeight":"24px","height":"24px","margin":"2,3,1,0","styles":{}}, {"onclick":"notiDelete"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"${gridHoliday.isRowSelected}","targetProperty":"showing"}, {}]
				}]
			}],
			btnCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"24px","height":"24px","margin":"2,3,1,0","styles":{}}, {"onclick":"btnCancelClick"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"26px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"Holiday Maintenance","padding":"4","styles":{"fontWeight":"bold","fontSize":"13px"},"width":"100%"}, {}]
			}],
			spacer1: ["wm.Spacer", {"height":"10px","styles":{},"width":"96px"}, {}],
			panel4: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				txtSearch: ["wm.Text", {"border":"0","caption":"Seach:","displayValue":"","emptyValue":"null","height":"25px","padding":"0,0,0,10","placeHolder":"Holiday Name","styles":{},"width":"400px"}, {}],
				btnSearch: ["wm.Button", {"border":"1","caption":"Search","desktopHeight":"25px","height":"25px","margin":"0,0,0,5","styles":{},"width":"100px"}, {"onclick":"svGetListHoliday"}],
				btnClear: ["wm.Button", {"border":"1","caption":"Clear","desktopHeight":"25px","height":"25px","margin":"0,0,0,5","styles":{},"width":"100px"}, {"onclick":"btnClearClick"}]
			}],
			panel3: ["wm.Panel", {"height":"250px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"90%"}, {}, {
				gridHoliday: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Date: \" + ${wm.runtimeId}.formatCell(\"holDate\", ${holDate}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Holiday Name: \" + ${holName}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"holDate","title":"Date","width":"30%","align":"left","formatFunc":"wm_date_formatter","formatProps":{"formatLength":"short","dateType":"date"},"mobileColumn":false},
{"show":true,"field":"holName","title":"Holiday Name","width":"70%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":undefined,"height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {"onClick":"gridHolidayClick"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"svGetListHoliday","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			panel5: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"90%"}, {}, {
				btnAdd: ["wm.Button", {"border":"1","caption":"Add","desktopHeight":"25px","height":"25px","margin":"0,5,0,0","styles":{},"width":"100px"}, {"onclick":"desAddorUpdate.show"}]
			}]
		}]
	}]
}