USER_MAINTENANCE.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		label2: ["wm.Label", {"align":"left","caption":"User Account Inquiry","height":"40px","margin":"0,0,10,0","padding":"0,0,0,10","styles":{"fontSize":"12px","fontWeight":"bold","backgroundGradient":{"direction":"horizontal","startColor":"#d1d1d1","endColor":"#ffffff","colorStop":50},"borderRadius":"5px 0px 0px"},"width":"100%"}, {}],
		panel2: ["wm.Panel", {"height":"47px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,0","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			txtSearchUsername: ["wm.Text", {"border":"0","caption":"Search by:","captionSize":"80px","dataValue":"","displayValue":"","emptyValue":"emptyString","height":"25px","margin":"0,10,0,0","placeHolder":"USERNAME","styles":{},"width":"264px"}, {"onEnterKeyPress":"btnSearch.click"}],
			selRoles: ["wm.SelectMenu", {"border":"0","caption":"Role","captionSize":"40px","dataType":"com.etel.security.forms.TBRoleForm","dataValue":"","displayField":"createdby","displayValue":"","emptyValue":"emptyString","height":"25px","showing":false,"width":"234px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svGetRoles","targetProperty":"dataSet"}, {}]
				}]
			}],
			spacer3: ["wm.Spacer", {"height":"25px","width":"230px"}, {}],
			btnSearch: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Search","desktopHeight":"25px","height":"25px","padding":"0","styles":{"fontSize":"12px"},"width":"72px"}, {"onclick":"svGetUserList"}],
			btnAddNewUser: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Add Robinsons Bank User","desktopHeight":"25px","height":"25px","showing":false,"styles":{"fontSize":"12px"},"width":"190px"}, {"onclick":"navigationCall1"}],
			btnAddNonADUser: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Setup New User","desktopHeight":"25px","height":"25px","padding":"0","styles":{"fontSize":"12px"},"width":"130px"}, {"onclick":"svValidateMaxNoOfUserADD"}],
			btnAddADUser: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Setup AD - User","desktopHeight":"25px","height":"25px","padding":"0","showing":false,"styles":{"fontSize":"12px"},"width":"130px"}, {"onclick":"createADUser.show"}],
			btnViewDelAcct: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"View Disabled Accounts","desktopHeight":"25px","height":"25px","padding":"0","styles":{"fontSize":"12px"},"width":"200px"}, {"onclick":"dialogDisabledAcct.show","onclick1":"svFilterDeletedAcct"}]
		}],
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			grdUserList: ["wm.DojoGrid", {"border":"0","borderColor":"","columns":[
{"show":true,"field":"username","title":"Username","width":"150px","align":"center","formatFunc":"","mobileColumn":false},
{"show":false,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Username: \" + ${username} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${name}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Userid: \" + ${userid}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"UnitBalance: \" + ${wm.runtimeId}.formatCell(\"unitBalance\", ${unitBalance}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Currency: \" + ${currency}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"id","title":"Id","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"name","title":"Name","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"userid","title":"Userid","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"unitBalance","title":"UnitBalance","width":"80px","align":"right","formatFunc":"wm_currency_formatter","formatProps":{"dijits":2},"mobileColumn":false},
{"show":false,"field":"unitbrid","title":"Unitbrid","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"currency","title":"Currency","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":false,"field":"instcode","title":"Instcode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"limitamount","title":"Limitamount","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":false,"field":"role","title":"Role","width":"100%","displayType":"Text","align":"left","formatFunc":""}
],"height":"90%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"styles":{},"width":"1025px"}, {"onClick":"grdUserListClick","onSelectionChange":"grdUserListSelectionChange"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svGetListOfUsers","targetProperty":"dataSet"}, {}]
				}]
			}]
		}]
	}]
}