SYSAD_GL_MAINTENANCE.widgets = {
	desAddorUpdate: ["wm.DesignableDialog", {"border":"1","desktopHeight":"250px","height":"250px","title":undefined,"width":"450px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			slcProd: ["wm.SelectMenu", {"border":"0","caption":"Product:","dataValue":undefined,"displayValue":"","height":"25px","width":"330px"}, {}],
			slcSubProd: ["wm.SelectMenu", {"border":"0","caption":"Sub-Product:","dataValue":undefined,"displayValue":"","height":"25px","width":"330px"}, {}],
			fGLLine1: ["wm.Text", {"border":"0","caption":"GL Line 1:","dataValue":undefined,"displayValue":"","height":"25px","width":"330px"}, {}],
			fGLLine2: ["wm.Text", {"border":"0","caption":"GL Line 2:","dataValue":undefined,"displayValue":"","height":"25px","width":"330px"}, {}],
			fGL: ["wm.Text", {"border":"0","caption":"GL:","dataValue":undefined,"displayValue":"","height":"25px","width":"330px"}, {}],
			fSL: ["wm.Text", {"border":"0","caption":"SL:","dataValue":undefined,"displayValue":"","height":"25px","width":"330px"}, {}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"31px"}, {}, {
			button2: ["wm.Button", {"border":"1","caption":"Save","height":"20px","styles":{},"width":"80px"}, {"onclick":"desAddorUpdate.show"}],
			btnClose: ["wm.Button", {"border":"1","caption":"Close","height":"20px","styles":{},"width":"80px"}, {"onclick":"desAddorUpdate.show"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		label2: ["wm.Label", {"align":"left","caption":"GL Maintenance","height":"40px","margin":"0,0,10,0","padding":"0,0,0,10","styles":{"fontSize":"12px","fontWeight":"bold","backgroundGradient":{"direction":"horizontal","startColor":"#d1d1d1","endColor":"#ffffff","colorStop":50},"borderRadius":"5px 0px 0px"},"width":"100%"}, {}],
		panel1: ["wm.Panel", {"height":"80%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"5,20,0,10","styles":{},"verticalAlign":"middle","width":"100%"}, {}],
		button1Panel: ["wm.Panel", {"height":"27px","horizontalAlign":"right","layoutKind":"left-to-right","margin":"0,20,0,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			button1: ["wm.Button", {"border":"1","caption":"Add","height":"20px","styles":{},"width":"80px"}, {"onclick":"desAddorUpdate.show"}]
		}]
	}]
}