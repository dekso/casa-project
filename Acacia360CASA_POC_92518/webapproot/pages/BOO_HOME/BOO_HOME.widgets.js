BOO_HOME.widgets = {
	svGetUnitInfo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getBrInfo","service":"UtilFacade"}, {"onResult":"svGetUnitInfoResult"}, {
		input: ["wm.ServiceInput", {"type":"getBrInfoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"unit"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"instcode"}, {}]
			}]
		}]
	}],
	svChangeBranchStat: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"updateBr","service":"UtilFacade"}, {"onResult":"svChangeBranchStatResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"updateBrInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtStatus.dataValue","targetProperty":"brstat"}, {}]
			}]
		}]
	}],
	varCIFlist: ["wm.Variable", {"isList":true,"type":"com.smslai_eoddb.data.Tbdepositcif"}, {}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"fontWeight":"bold","fontSize":"18px"},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"90%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"35,20,10,40","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"90%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				label1Panel: ["wm.Panel", {"height":"33px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"598px"}, {}, {
					label1: ["wm.Label", {"caption":"Branch Detail","height":"30px","padding":"4","styles":{"fontWeight":"bold","fontSize":"17px"},"width":"100%"}, {}]
				}],
				label2: ["wm.Panel", {"height":"90%","horizontalAlign":"left","margin":"0,0,0,0","padding":"5","styles":{},"verticalAlign":"top","width":"60%"}, {}, {
					txtStatusPanel: ["wm.Panel", {"height":"91px","horizontalAlign":"left","styles":{},"verticalAlign":"middle","width":"400px"}, {}, {
						txtStatus: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Status","captionSize":"200px","displayValue":"","height":"25px","readonly":true}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svGetUnitInfo.brstatus","targetProperty":"dataValue"}, {}]
							}]
						}],
						CurBusinessDt: ["wm.Date", {"border":"0","caption":"Current Business Date","captionSize":"200px","displayValue":"","height":"25px","readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svGetUnitInfo.businessdt","targetProperty":"dataValue"}, {}]
							}]
						}],
						NxtBusinessDt: ["wm.Date", {"border":"0","caption":"Next Business Date","captionSize":"200px","displayValue":"","height":"25px","readonly":true,"styles":{},"width":"400px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svGetUnitInfo.nxtbusinessdt","targetProperty":"dataValue"}, {}]
							}]
						}]
					}],
					time1Panel: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"400px"}, {}, {
						cutofftime: ["wm.Time", {"border":"0","caption":"Clearing Cut-off Time","captionSize":"200px","dataValue":undefined,"displayValue":"","height":"25px","readonly":true,"width":"400px"}, {}]
					}],
					button1Panel: ["wm.Panel", {"height":"50px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"400px"}, {}, {
						button1: ["wm.Button", {"border":"1","desktopHeight":"25px","height":"25px","styles":{},"width":"130px"}, {"onclick":"button1Click"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"if(${txtStatus.dataValue}==\"Open\"){\n    \"Close Branch\"    \n}else{\n    \"Open Branch\"\n}","targetProperty":"caption"}, {}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}