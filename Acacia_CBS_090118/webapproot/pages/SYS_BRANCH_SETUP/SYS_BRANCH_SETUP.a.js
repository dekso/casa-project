dojo.declare("SYS_BRANCH_SETUP", wm.Page, {
start: function() {
this.svBranchDetail.update();
},
"preferredDevice": "desktop",
svUpdateBranchResult: function(inSender, inDeprecated) {
if(inSender.getData().dataValue==0){
app.alert("Error in Routine!");
}else if(inSender.getData().dataValue==2){
this.svBranchDetail.update();
app.alert("Status Change Success!");
}
},
btnCloseClick: function(inSender) {
var val = null;
if(this.fBranchstatus.getDataValue()=="Open"){
val = "1";
}else if(this.fBranchstatus.getDataValue()=="Close"){
val = "0";
}
app.alert(val);
this.svUpdateBranch.input.setValue("value",val);
this.svUpdateBranch.update();
},
_end: 0
});

SYS_BRANCH_SETUP.widgets = {
svBranchDetail: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"branchDetail","service":"GLAccountFacade"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"branchDetailInputs"}, {}]
}],
svUpdateBranch: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"openCloseBranch","service":"GLAccountFacade"}, {"onResult":"svUpdateBranchResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"openCloseBranchInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${svBranchDetail.brstatus}==\"Open\"){\n\"0\"    \n}else if(${svBranchDetail.brstatus}==\"Close\"){\n\"1\"\n}","targetProperty":"value"}, {}]
}]
}]
}],
designableDialog1: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","styles":{}}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"15px"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
pnlMain: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"border":"0,0,0,0","borderColor":"","caption":"Branch Detail","padding":"4","styles":{"fontWeight":"bolder","fontSize":"13px","color":"#6a696f","textDecoration":"underline"}}, {}],
spacer1: ["wm.Spacer", {"height":"10px","width":"96px"}, {}],
panel1: ["wm.Panel", {"height":"149px","horizontalAlign":"left","margin":"0,0,0,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
fBranchname: ["wm.Text", {"border":"0","caption":"Branch name:","captionSize":"100px","displayValue":"","height":"25px","readonly":true,"styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchDetail.brname","targetProperty":"dataValue"}, {}]
}]
}],
fBranchdate: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Business date:","captionSize":"100px","displayValue":"","height":"25px","readonly":true,"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchDetail.brbusinessdt","targetProperty":"dataValue"}, {}]
}]
}],
fBranchstatus: ["wm.Text", {"border":"0","caption":"Branch status:","captionSize":"100px","displayValue":"","emptyValue":"null","height":"25px","readonly":true,"styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"svBranchDetail.brstatus","targetProperty":"dataValue"}, {}]
}]
}],
spacer2: ["wm.Spacer", {"height":"10px","styles":{},"width":"96px"}, {}],
btnClose: ["wm.Button", {"border":"1","desktopHeight":"24px","height":"24px","margin":"0,0,0,0","styles":{},"width":"110px"}, {"onclick":"btnCloseClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"if(${fBranchstatus.displayValue}==\"Close\"){\n    \"Open Branch\"\n}else if(${fBranchstatus.displayValue}==\"Open\"){\n    \"Close Branch\"\n}","targetProperty":"caption"}, {}]
}]
}]
}]
}]
}]
};

SYS_BRANCH_SETUP.prototype._cssText = '';
SYS_BRANCH_SETUP.prototype._htmlText = '';