dojo.declare("SYSAD_ACCTGEN", wm.Page, {
start: function() {
this.svBranchList.update();
},
"preferredDevice": "desktop",
_end: 0
});

SYSAD_ACCTGEN.widgets = {
svList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"terminalList","service":"UtilFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"terminalListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"unitid"}, {}]
}]
}]
}],
svDelete: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"deleteTerminal","service":"UtilFacade"}, {"onResult":"svDeleteResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"deleteTerminalInputs"}, {}]
}],
svBranchList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"findAllBranch","service":"UtilFacade"}, {"onResult":"svAEResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"findAllBranchInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"data.unitid"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"data.createdby"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fIPadd.dataValue","targetProperty":"data.ipadd"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"fTerminal.dataValue","targetProperty":"data.terminalno"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fTerminal.dataValue","targetProperty":"data.terminal"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"fIPadd.dataValue","targetProperty":"data.ipaddress"}, {}]
}]
}]
}],
svProductListFull: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getProdList","service":"AccountFacade"}, {"onResult":"svProductListFull"}, {
input: ["wm.ServiceInput", {"type":"getProdListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"acctProdGroup.dataValue","targetProperty":"prodgroup"}, {}]
}]
}]
}],
svProdGroup: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {"onResult":"svProdGroup"}, {
input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"30","targetProperty":"prodgroup"}, {}],
wire1: ["wm.Wire", {"expression":"\"PRODUCTGROUP\"","targetProperty":"codename"}, {}]
}]
}]
}],
dlgTerminal: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"135px","height":"135px","title":undefined,"width":"300px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
fIPadd: ["wm.Text", {"border":"0","caption":"IP Address:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px","styles":{}}, {}],
fTerminal: ["wm.Text", {"border":"0","caption":"Terminal Name:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px"}, {}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"36px","height":"36px"}, {}, {
btnSubmit: ["wm.Button", {"border":"1","caption":"Submit","desktopHeight":"25px","height":"25px","styles":{},"width":"90px"}, {"onclick":"btnSubmitClick"}],
btnClose: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"25px","height":"25px","margin":"0,0,0,0","styles":{},"width":"80px"}, {"onclick":"btnCloseClick"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
panel2: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Account Generation Maintenance","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"100%"}, {}]
}],
panel3: ["wm.Panel", {"height":"320px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"650px"}, {}, {
spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
slcBranch: ["wm.SelectMenu", {"border":"0","caption":"Branch : ","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}],
slcProdGroup: ["wm.SelectMenu", {"border":"0","caption":"Product Group : ","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}],
slcProdCode: ["wm.SelectMenu", {"border":"0","caption":"Product :","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}],
txtFrom: ["wm.Number", {"border":"0","caption":"From : ","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}],
txtTo: ["wm.Number", {"border":"0","caption":"To  : ","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}]
}],
btnGenerate: ["wm.Button", {"border":"1","caption":"Generate","desktopHeight":"30px","height":"30px","margin":"0,0,0,0","styles":{},"width":"80px"}, {"onclick":"btnAddClick"}]
}]
}]
};

SYSAD_ACCTGEN.prototype._cssText = '';
SYSAD_ACCTGEN.prototype._htmlText = '';