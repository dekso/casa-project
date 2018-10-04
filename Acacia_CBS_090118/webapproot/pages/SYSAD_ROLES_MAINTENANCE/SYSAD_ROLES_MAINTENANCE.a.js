dojo.declare("SYSAD_ROLES_MAINTENANCE", wm.Page, {
start: function() {
this.svRoleList.update();
this.svSelectList.update();
this.svPageList.update();
},
"preferredDevice": "desktop",
btnAddRightsClick: function(inSender) {
this.dlgAddAccessRight.show();
},
btnCancelRightClick: function(inSender) {
this.fMainMod.clear();
this.fSubMod.clear();
this.fPage.clear();
this.dlgAddAccessRight.hide();
},
svAddRoleAccessResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="1"){
this.svRoleAccessList.update();
this.fMainMod.clear();
this.fSubMod.clear();
this.fPage.clear();
app.alert("Adding Access Rights Success!");
this.dlgAddAccessRight.hide();
}else{
app.alert("Error in Routine!");
}
},
btnDelRightsClick: function(inSender) {
app.confirm("Proceed to delete access right?", false,
dojo.hitch(this, function() {
this.svDelRights.update();
}),
dojo.hitch(this, function() {}));
},
svDelRightsResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="1"){
app.alert("Deleting Access Right Successful!");
this.svRoleAccessList.update();
}else{
app.alert("Error in Routine!");
}
},
accessRightsGridCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
this.accessRightsGrid.deselectAll();
},
btnDelRoleClick: function(inSender) {
app.confirm("Proceed to delete role?", false,
dojo.hitch(this, function() {
this.svDelRole.update();
}),
dojo.hitch(this, function() {}));
},
btnCancelRoleClick: function(inSender) {
this.fRolename.clear();
this.dlgAddRole.hide();
},
btnAddRoleClick: function(inSender) {
this.dlgAddRole.show();
},
svAddRoleResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="1"){
app.alert("Add Role Successful!");
this.dlgAddRole.hide();
this.svRoleList.update();
}else{
app.alert("Error in Routine!");
}
},
svDelRoleResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="1"){
app.alert("Deleting Role Successful!");
this.svRoleList.update();
}else{
app.alert("Error in Routine!");
}
},
roleGridCellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
this.roleGrid.deselectAll();
this.svRoleAccessList.clearData();
},
btnModSetupClick: function(inSender) {
this.dlgModule.show();
},
btnAddModCancelClick: function(inSender) {
this.pnlMainAddMod.clearData();
this.dlgAddMod.hide();
},
btnAddNewModuleClick: function(inSender) {
this.dlgAddMod.show();
},
btnCloseModClick: function(inSender) {
this.dlgModule.hide();
},
svAddModuleResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="1"){
app.alert("Adding of Module Successful!");
if(this.fMod.getDisplayValue()=="MODULE"){
this.svMainMod.update();
}else{
this.svSubMod.update();
}
this.svSelectList.update();
this.pnlMainAddMod.clearData();
this.dlgAddMod.hide();
}else{
app.alert("Error in Routine!");
}
},
dlgModuleShow: function(inSender) {
this.svMainMod.update();
this.svSubMod.update();
},
mainmodGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
this.submodGrid.deselectAll();
this.svDelMod.input.setValue("id",selectedItem.getData().id);
this.fMod.setDataValue("MODULE");
},
submodGridClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
this.mainmodGrid.deselectAll();
this.svDelMod.input.setValue("id",selectedItem.getData().id);
this.fMod.setDataValue("SUBMODULE");
},
svDelModResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue=="1"){
app.alert("Deleting of Module Successful!");
if(this.fMod.getDisplayValue()=="MODULE"){
this.svMainMod.update();
}else{
this.svSubMod.update();
}
this.pnlMainAddMod.clearData();
}else{
app.alert("Error in Routine!");
}
},
_end: 0
});

SYSAD_ROLES_MAINTENANCE.widgets = {
svRoleList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"roleList","service":"UserAccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"roleListInputs"}, {}]
}],
svRoleAccessList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"roleAccessList","service":"UserAccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"roleAccessListInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"roleGrid.selectedItem.desc1","targetProperty":"role"}, {}]
}]
}]
}],
svPageList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"pageList","service":"UserAccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"pageListInputs"}, {}]
}],
svSelectList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"selectMainSub","service":"UserAccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"selectMainSubInputs"}, {}]
}],
svAddRoleAccess: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","loadingDialog":"","operation":"addRoleAccess","service":"UserAccountFacade"}, {"onResult":"svAddRoleAccessResult"}, {
input: ["wm.ServiceInput", {"type":"addRoleAccessInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${fSubMod.dataValue}==null){\n    ${fMainMod.selectedItem.value}    \n}else{\n    ${fSubMod.selectedItem.value}\n}","targetProperty":"rec.modulename"}, {}],
wire1: ["wm.Wire", {"expression":"${fMainMod.selectedItem.id}","targetProperty":"rec.module"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fPage.dataValue","targetProperty":"rec.page"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"fSubMod.dataValue","targetProperty":"rec.submodule"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"fRole.dataValue","targetProperty":"rec.role"}, {}],
wire5: ["wm.Wire", {"expression":undefined,"source":"fModLevel.dataValue","targetProperty":"rec.modulelevel"}, {}]
}]
}]
}],
svDelRights: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"deleteRoleAccess","service":"UserAccountFacade"}, {"onResult":"svDelRightsResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"deleteRoleAccessInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"accessRightsGrid.selectedItem.id","targetProperty":"id"}, {}]
}]
}]
}],
svAddRole: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addRole","service":"UserAccountFacade"}, {"onResult":"svAddRoleResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"pnlAddRole","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"addRoleInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"fRolename.dataValue","targetProperty":"rec.desc1"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"fRolevalue.dataValue","targetProperty":"rec.codevalue"}, {}],
wire: ["wm.Wire", {"expression":"\"ROLE\"","targetProperty":"rec.codename"}, {}]
}]
}]
}],
svDelRole: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"deleteRole","service":"UserAccountFacade"}, {"onResult":"svDelRoleResult"}, {
input: ["wm.ServiceInput", {"type":"deleteRoleInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"roleGrid.selectedItem.id","targetProperty":"id"}, {}]
}]
}]
}],
varModuleList: ["wm.Variable", {"isList":true,"json":"[{\"dataValue\":\"MODULE\"},{\"dataValue\":\"SUBMODULE\"}]","type":"StringData"}, {}],
svSubMod: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"subMod","service":"UserAccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"subModInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"SUBMODULE\"","targetProperty":"mod"}, {}]
}]
}]
}],
svMainMod: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"mainMod","service":"UserAccountFacade"}, {}, {
input: ["wm.ServiceInput", {"type":"mainModInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"MODULE\"","targetProperty":"mod"}, {}]
}]
}]
}],
svAddModule: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"addModule","service":"UserAccountFacade"}, {"onResult":"svAddModuleResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"containerWidget3","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"addModuleInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"fMod.dataValue","targetProperty":"rec.codename"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"fModName.dataValue","targetProperty":"rec.desc1"}, {}]
}]
}]
}],
svDelMod: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"deleteModule","service":"UserAccountFacade"}, {"onResult":"svDelModResult"}, {
input: ["wm.ServiceInput", {"type":"deleteModuleInputs"}, {}]
}],
dlgAddAccessRight: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"210px","height":"210px","title":"Add New Access Rights","width":"360px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
pnlAddAccess: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
fRole: ["wm.Text", {"border":"0","caption":"Role:","captionSize":"100px","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"roleGrid.selectedItem.desc1","targetProperty":"dataValue"}, {}]
}]
}],
fMainMod: ["wm.SelectMenu", {"border":"0","caption":"Main Module:","captionSize":"100px","dataField":"id","dataType":"com.etel.util.forms.GenericForm","dataValue":undefined,"displayField":"value","displayValue":"","emptyValue":"null","height":"25px","margin":"0,2,0,0","required":true,"styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSelectList.mainmod","targetProperty":"dataSet"}, {}]
}]
}],
fSubMod: ["wm.SelectMenu", {"border":"0","caption":"Sub Module:","captionSize":"100px","dataField":"id","dataType":"com.etel.util.forms.GenericForm","dataValue":undefined,"displayField":"value","displayValue":"","emptyValue":"null","height":"25px","margin":"0,2,0,0","styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":"${fMainMod.dataValue}==null","targetProperty":"disabled"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"svSelectList.submod","targetProperty":"dataSet"}, {}]
}]
}],
fModLevel: ["wm.Number", {"border":"0","caption":"Module Level:","captionSize":"100px","displayValue":"0","height":"25px","readonly":true,"styles":{},"width":"180px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${fSubMod.dataValue}==null&&${fMainMod.dataValue}!=null){1}\nelse if(${fSubMod.dataValue}!=null){2}else{0}","targetProperty":"dataValue"}, {}]
}]
}],
fPage: ["wm.SelectMenu", {"border":"0","caption":"Page:","captionSize":"100px","dataField":"dataValue","dataType":"java.lang.String","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","margin":"0,2,0,0","styles":{},"width":"320px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svPageList","targetProperty":"dataSet"}, {}]
}]
}],
pnlAddAccBtn: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnAddRight: ["wm.Button", {"border":"1","caption":"Add","desktopHeight":"26px","height":"26px","margin":"0,5,0,0","styles":{}}, {"onclick":"svAddRoleAccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${pnlAddAccess.invalid}||${fRole.dataValue}==null","targetProperty":"disabled"}, {}]
}]
}],
btnCancelRight: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"26px","height":"26px","margin":"0,5,0,0","styles":{}}, {"onclick":"btnCancelRightClick"}]
}]
}]
}]
}],
dlgAddRole: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget","desktopHeight":"125px","height":"125px","title":"Add New Role","width":"360px"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
pnlAddRole: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
fRolename: ["wm.Text", {"border":"0","caption":"Role Name:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"300px"}, {}],
fRolevalue: ["wm.Text", {"border":"0","caption":"Role Value:","captionSize":"100px","dataValue":undefined,"displayValue":"","height":"25px","required":true,"width":"160px"}, {}],
pnlAddRoleBtn: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnAddNewRole: ["wm.Button", {"border":"1","caption":"Add","desktopHeight":"26px","height":"26px","margin":"0,5,0,0","styles":{}}, {"onclick":"svAddRole"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"pnlAddRole.invalid","targetProperty":"disabled"}, {}]
}]
}],
btnCancelRole: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"26px","height":"26px","margin":"0,5,0,0","styles":{}}, {"onclick":"btnCancelRoleClick"}]
}]
}]
}]
}],
dlgModule: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget2","desktopHeight":"430px","height":"430px","title":"Module Maintenance","width":"670px"}, {"onShow":"dlgModuleShow"}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
pnlModMaintenance: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pnlModMaintenanceBtn: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnAddNewModule: ["wm.Button", {"border":"1","caption":"Add Module","desktopHeight":"28px","height":"28px","width":"120px"}, {"onclick":"btnAddNewModuleClick"}],
btnDelMod: ["wm.Button", {"border":"1","caption":"Delete Module","desktopHeight":"28px","height":"28px","width":"120px"}, {"onclick":"svDelMod"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${mainmodGrid.emptySelection}&&${submodGrid.emptySelection}","targetProperty":"disabled"}, {}]
}]
}]
}],
pnlModList: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
mainmodGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Module Code: \" + ${codevalue} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Module Name: \" + ${desc1}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"codename","title":"Codename","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"codevalue","title":"Module Code","width":"50%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"desc1","title":"Module Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"desc2","title":"Desc2","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"width":"50%"}, {"onClick":"mainmodGridClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svMainMod","targetProperty":"dataSet"}, {}]
}]
}],
spacer5: ["wm.Spacer", {"height":"48px","width":"10px"}, {}],
submodGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Module Code: \" + ${codevalue} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Module Name: \" + ${desc1}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"codename","title":"Codename","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"codevalue","title":"Module Code","width":"50%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"desc1","title":"Module Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"desc2","title":"Desc2","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"height":"100%","minDesktopHeight":60,"singleClickEdit":true,"width":"50%"}, {"onClick":"submodGridClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svSubMod","targetProperty":"dataSet"}, {}]
}]
}]
}],
panel2: ["wm.Panel", {"height":"36px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnCloseMod: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"26px","height":"26px","margin":"0,0,0,0","styles":{},"width":"80px"}, {"onclick":"btnCloseModClick"}]
}]
}]
}]
}],
dlgAddMod: ["wm.DesignableDialog", {"border":"1","buttonBarId":"","containerWidgetId":"containerWidget3","desktopHeight":"140px","height":"140px","title":"Add Module","width":"350px"}, {}, {
containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
pnlMainAddMod: ["wm.Panel", {"height":"57px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
fMod: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Module Type:","dataField":"dataValue","dataType":"StringData","dataValue":undefined,"displayField":"dataValue","displayValue":"","height":"25px","required":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"varModuleList","targetProperty":"dataSet"}, {}]
}]
}],
fModName: ["wm.Text", {"border":"0","caption":"Module Name:","dataValue":undefined,"displayValue":"","height":"25px","required":true}, {}]
}],
pnlAddModBtn: ["wm.Panel", {"height":"33px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
btnAddMod: ["wm.Button", {"border":"1","caption":"Add","desktopHeight":"26px","height":"26px","width":"80px"}, {"onclick":"svAddModule"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"pnlMainAddMod.invalid","targetProperty":"disabled"}, {}]
}]
}],
btnAddModCancel: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"26px","height":"26px","margin":"0,0,0,0","styles":{}}, {"onclick":"btnAddModCancelClick"}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
label2: ["wm.Label", {"align":"left","caption":"Role Maintenance","height":"40px","margin":"0,0,10,0","padding":"0,0,0,10","styles":{"fontSize":"12px","fontWeight":"bold","backgroundGradient":{"direction":"horizontal","startColor":"#d1d1d1","endColor":"#ffffff","colorStop":50},"borderRadius":"5px 0px 0px"},"width":"100%"}, {}],
panel1: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"5,0,0,10","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
btnModSetup: ["wm.Button", {"border":"1","caption":"Module Setup","desktopHeight":"25px","height":"25px","styles":{},"width":"110px"}, {"onclick":"btnModSetupClick"}]
}],
pnlMain: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","margin":"0,20,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
pnlRole: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"5,10,10,10","styles":{},"verticalAlign":"top","width":"350px"}, {}, {
labelRole: ["wm.Label", {"caption":"Role List","margin":"0,0,0,0","padding":"4","styles":{"fontSize":"12px","fontWeight":"bolder","fontFamily":"Arial"}}, {}],
spacer1: ["wm.Spacer", {"height":"5px","styles":{},"width":"90px"}, {}],
btnRolePanel: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
btnAddRole: ["wm.Button", {"border":"1","caption":"Add Role","desktopHeight":"28px","height":"28px","margin":"0,0,0,0","styles":{},"width":"85px"}, {"onclick":"btnAddRoleClick"}],
btnDelRole: ["wm.Button", {"border":"1","caption":"Delete Role","desktopHeight":"28px","height":"28px","margin":"0,0,0,10","styles":{},"width":"95px"}, {"onclick":"btnDelRoleClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${roleGrid.emptySelection}","targetProperty":"disabled"}, {}]
}]
}]
}],
spacer3: ["wm.Spacer", {"height":"5px","styles":{},"width":"90px"}, {}],
roleGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"codename","title":"Role code","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"codevalue","title":"Id","width":"35%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"desc1","title":"Role name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"desc2","title":"Desc2","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Id: \" + ${codevalue} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Role name: \" + ${desc1}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.smslai_eoddb.data.Tbcodetable","height":"100%","localizationStructure":{},"margin":"0,0,0,0","minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {"onCellDblClick":"roleGridCellDblClick","onSelect":"svRoleAccessList"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svRoleList","targetProperty":"dataSet"}, {}]
}]
}]
}],
pnlAccessRights: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"5,10,10,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
labelAccessRights: ["wm.Label", {"caption":"Access Rights","margin":"0,0,0,0","padding":"4","styles":{"fontSize":"12px","fontWeight":"bolder","fontFamily":"Arial"}}, {}],
spacer2: ["wm.Spacer", {"height":"5px","styles":{},"width":"90px"}, {}],
btnRightsPanel: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
btnAddRights: ["wm.Button", {"border":"1","caption":"Add Rights","desktopHeight":"28px","height":"28px","margin":"0,0,0,0","styles":{},"width":"85px"}, {"onclick":"btnAddRightsClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${roleGrid.emptySelection}","targetProperty":"disabled"}, {}]
}]
}],
btnDelRights: ["wm.Button", {"border":"1","caption":"Delete Rights","desktopHeight":"28px","height":"28px","margin":"0,0,0,10","styles":{},"width":"95px"}, {"onclick":"btnDelRightsClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${accessRightsGrid.emptySelection}","targetProperty":"disabled"}, {}]
}]
}]
}],
spacer4: ["wm.Spacer", {"height":"5px","styles":{},"width":"90px"}, {}],
accessRightsGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"role","title":"Role","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"module","title":"Module code","width":"80px","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"submodule","title":"Sub module","width":"80px","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"modulename","title":"Module name","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"modulelevel","title":"Level","width":"65px","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"page","title":"Page","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Module code: \" + ${module} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Sub module: \" + ${submodule}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Module name: \" + ${modulename}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Level: \" + ${modulelevel}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Page: \" + ${page}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.smslai_eoddb.data.Tbroleaccess","height":"100%","margin":"0,0,0,0","minDesktopHeight":60,"singleClickEdit":true,"styles":{},"width":"700px"}, {"onCellDblClick":"accessRightsGridCellDblClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svRoleAccessList","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
};

SYSAD_ROLES_MAINTENANCE.prototype._cssText = '';
SYSAD_ROLES_MAINTENANCE.prototype._htmlText = '';