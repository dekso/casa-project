SYSAD_USER_MAINTENANCE.widgets = {
	svUserList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"userList","service":"UserAccountFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"userListInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtSearchUsername.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"instcode"}, {}]
			}]
		}]
	}],
	svSaveUser: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"createUser","service":"UserAccountFacade"}, {"onResult":"svSaveUserResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"containerWidget3","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"createUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"fNewLastname.dataValue","targetProperty":"user.lastname"}, {}],
				wire1: ["wm.Wire", {"expression":"0","targetProperty":"user.unitBalance"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.svBusinessDt.dataValue","targetProperty":"user.datecreated"}, {}],
				wire3: ["wm.Wire", {"expression":"false","targetProperty":"user.isactivedirectorymember"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"fNewValidDateFrom.dataValue","targetProperty":"user.validitydatefrom"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"fNewValidDateTo.dataValue","targetProperty":"user.validitydateto"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"fNewPassExpDate.dataValue","targetProperty":"user.pwexpirydate"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"fNewUsername.dataValue","targetProperty":"user.username"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"fNewIsActive.dataValue","targetProperty":"user.isactive"}, {}],
				wire10: ["wm.Wire", {"expression":"false","targetProperty":"user.islocked"}, {}],
				wire11: ["wm.Wire", {"expression":"false","targetProperty":"user.isloggedon"}, {}],
				wire13: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"user.instcode"}, {}],
				wire14: ["wm.Wire", {"expression":undefined,"source":"fNewMiddlename.dataValue","targetProperty":"user.middlename"}, {}],
				wire15: ["wm.Wire", {"expression":undefined,"source":"fNewFirstname.dataValue","targetProperty":"user.firstname"}, {}],
				wire16: ["wm.Wire", {"expression":undefined,"source":"fNewPassNvrExpire.dataValue","targetProperty":"user.ispwneverexpire"}, {}],
				wire17: ["wm.Wire", {"expression":"false","targetProperty":"user.issuspended"}, {}],
				wire18: ["wm.Wire", {"expression":undefined,"source":"fNewEmail.dataValue","targetProperty":"user.emailadd"}, {}],
				wire19: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"user.updatedby"}, {}],
				wire20: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"user.createdby"}, {}],
				wire21: ["wm.Wire", {"expression":"false","targetProperty":"user.isdisabled"}, {}],
				wire23: ["wm.Wire", {"expression":undefined,"source":"fNewTellerslimit.dataValue","targetProperty":"user.limitamount"}, {}],
				wire24: ["wm.Wire", {"expression":"0","targetProperty":"user.invalidattemptscount"}, {}],
				wire25: ["wm.Wire", {"expression":undefined,"source":"fNewChangePass.dataValue","targetProperty":"user.ischangepwrequired"}, {}],
				wire12: ["wm.Wire", {"expression":undefined,"source":"fNewRole.selectedItem.description","targetProperty":"user.role"}, {}],
				wire26: ["wm.Wire", {"expression":"0","targetProperty":"user.unitbalance"}, {}],
				wire27: ["wm.Wire", {"expression":"1","targetProperty":"user.sequence"}, {}],
				wire22: ["wm.Wire", {"expression":undefined,"source":"fNewDepartment.dataValue","targetProperty":"user.depid"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"slcBranch.dataValue","targetProperty":"user.unitbrid"}, {}]
			}]
		}]
	}],
	svRole: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"ROLE\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svUserDetail: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"userInfo","service":"UserAccountFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"userInfoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"grdUserList.selectedItem.id","targetProperty":"id"}, {}]
			}]
		}]
	}],
	svEditUser: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"editUser","service":"UserAccountFacade"}, {"onResult":"svEditUserResult"}, {
		input: ["wm.ServiceInput", {"type":"editUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"grdUserList.selectedItem.id","targetProperty":"form.id"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"fEditMiddlename.dataValue","targetProperty":"form.middlename"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"fEditEmailadd.dataValue","targetProperty":"form.email"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"fEditTellerslimit.dataValue","targetProperty":"form.tellerslimit"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"chkIsActive.dataValue","targetProperty":"form.active"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"fEditLastname.dataValue","targetProperty":"form.lastname"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"chkPassNvrExpire.dataValue","targetProperty":"form.passneverexp"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"chkLocked.dataValue","targetProperty":"form.locked"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"fEditFirstname.dataValue","targetProperty":"form.firstname"}, {}],
				wire9: ["wm.Wire", {"expression":undefined,"source":"chkSuspended.dataValue","targetProperty":"form.suspended"}, {}],
				wire10: ["wm.Wire", {"expression":undefined,"source":"app.varUserId.dataValue","targetProperty":"form.updatedby"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"containerWidget2","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svDepartment: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"DEPARTMENT\"","targetProperty":"codename"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svBranchList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getBranchList","service":"UtilFacade"}, {"onResult":"svBranchListResult"}, {
		input: ["wm.ServiceInput", {"type":"getBranchListInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"BRANCH\"","targetProperty":"codename"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svTerminalList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"terminalList","service":"UtilFacade"}, {"onResult":"svTerminalListResult"}, {
		input: ["wm.ServiceInput", {"type":"terminalListInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"BRANCH\"","targetProperty":"codename"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"unitid"}, {}],
				wire2: ["wm.Wire", {"expression":"1","targetProperty":"isUnused"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	dlgCreateNonADUser: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar3","containerWidgetId":"","desktopHeight":"500px","height":"500px","styles":{},"title":"<b>Setup New User","width":"90%"}, {"onClose":"dlgCreateNonADUserClose","onShow":"svGetRoles","onShow1":"svGetLoanGroup","onShow2":"layer4.hide","onShow3":"svGetCompanyListCN","onShow4":"svGetTeamList"}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			tabLayers2: ["wm.TabLayers", {"border":"0","styles":{},"transition":"slide"}, {}, {
				layer3: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Information","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"layer4.hide"}, {
					pnlSetupNewUser: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						pnlSetupNewUserLeft: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"402px"}, {}, {
							fNewUsername: ["wm.Text", {"border":"0","caption":"Username:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","maxChars":"20","required":true,"tooltipDisplayTime":undefined,"width":"400px"}, {}],
							fNewFirstname: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"First Name:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","invalidMessage":undefined,"maxChars":"100","required":true,"styles":{},"tooltipDisplayTime":undefined,"width":"400px"}, {}],
							fNewMiddlename: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Middle Name:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","invalidMessage":undefined,"maxChars":"100","required":true,"styles":{},"tooltipDisplayTime":undefined,"width":"400px"}, {}],
							fNewLastname: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Lastname:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","invalidMessage":undefined,"maxChars":"100","required":true,"tooltipDisplayTime":undefined,"width":"400px"}, {}],
							fNewEmail: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Email:","captionSize":"150px","dataValue":undefined,"displayValue":"","formatter":undefined,"height":"25px","invalidMessage":"Not a valid email address","maxChars":"250","regExp":"^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$","required":true,"width":"400px"}, {}],
							fNewRole: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Role:","captionSize":"150px","dataType":"com.etel.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","required":true}, {"onchange":"svGetGroupListEDIT"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svRole","targetProperty":"dataSet"}, {}]
								}]
							}],
							fNewBranch: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch:","captionSize":"150px","dataField":"id","dataType":"com.gldb.data.Tbunit","dataValue":undefined,"displayField":"braddress","displayValue":"","height":"25px","showing":false,"styles":{}}, {"onchange":"svGetGroupListEDIT"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svBranchList","targetProperty":"dataSet"}, {}]
								}]
							}],
							slcBranch: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch:","captionSize":"150px","dataField":"brid","dataType":"com.gldb.data.Tbunit","dataValue":undefined,"displayField":"brname","displayValue":"","height":"25px","required":true,"width":"400px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svBranchList","targetProperty":"dataSet"}, {}]
								}]
							}],
							fNewDepartment: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Department:","captionSize":"150px","dataField":"id","dataType":"com.etel.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","required":true}, {"onchange":"svGetGroupListEDIT"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svDepartment","targetProperty":"dataSet"}, {}]
								}]
							}],
							fNewPassword: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Password:","captionSize":"150px","dataValue":undefined,"displayValue":"","formatter":undefined,"height":"25px","invalidMessage":undefined,"password":true,"showing":false,"tooltipDisplayTime":undefined,"width":"400px"}, {}],
							fNewPassExpDate: ["wm.Date", {"border":"0","caption":"Password Expiry Date:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"10/9/2018","emptyValue":"null","formatter":undefined,"height":"25px","required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire1: ["wm.Wire", {"expression":"new Date()","targetProperty":"minimum"}, {}],
									wire: ["wm.Wire", {"expression":"//new Date(new Date().getTime() + (86400000*60));\nnew Date(new Date().setDate(new Date().getDate()+ ${svGetSecurityParams.maxpasswordage}))","targetProperty":"dataValue"}, {}]
								}]
							}],
							fNewValidDateFrom: ["wm.Date", {"border":"0","caption":"Account Validity From:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"10/9/2018","emptyValue":"null","formatter":undefined,"height":"25px","required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"new Date();","targetProperty":"dataValue"}, {}],
									wire1: ["wm.Wire", {"expression":undefined,"source":"fNewValidDateTo.dataValue","targetProperty":"maximum"}, {}]
								}]
							}],
							fNewValidDateTo: ["wm.Date", {"border":"0","caption":"Account Validity To:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"10/9/2018","emptyValue":"null","formatter":"Date","height":"25px","minimum":null,"required":true,"styles":{}}, {"onchange":"fNewValidDateToChange"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"//new Date(new Date().getTime() + (86400000*${svGetSecurityParams.maxpasswordage}));\nnew Date(new Date().setDate(new Date().getDate()+ ${svGetSecurityParams.validityperiodindays}))","targetProperty":"dataValue"}, {}]
								}],
								format: ["wm.DateFormatter", {}, {}]
							}],
							slcTerminal: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Terminal:","captionSize":"150px","dataField":"id","dataType":"com.gldb.data.Tbterminal","dataValue":undefined,"displayField":"terminal","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"400px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svTerminalList","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						panel23: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,0,0,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
							fNewIsActive: ["wm.Checkbox", {"_classes":{"domNode":["bCheckbox"]},"border":"0,0,0,0","borderColor":"#d1d1d1","caption":"Active:","captionSize":"150px","dataValue":true,"displayValue":true,"height":"25px","readonly":true,"startChecked":true,"styles":{},"width":"180px"}, {}],
							fNewChangePass: ["wm.Checkbox", {"border":"0","caption":"Must Change Password at Next Logon","captionSize":"150px","checkedValue":false,"dataValue":false,"desktopHeight":"37px","displayValue":false,"emptyValue":"false","height":"37px","readonly":true,"singleLine":false,"startChecked":true,"styles":{},"width":"266px"}, {}],
							fNewPassNvrExpire: ["wm.Checkbox", {"border":"0","caption":"Password Never Expire:","captionSize":"150px","dataValue":false,"displayValue":false,"emptyValue":"false","height":"25px","width":"180px"}, {"onchange":"fNewPassNvrExpireChange"}]
						}]
					}]
				}]
			}]
		}],
		buttonBar3: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"60px","height":"39px","styles":{}}, {}, {
			btnNewUserSave: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Save","desktopHeight":"28px","height":"28px","margin":"0,0,0,10","styles":{},"width":"90px"}, {"onclick":"svSaveUser"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"pnlSetupNewUser.invalid","targetProperty":"disabled"}, {}]
				}]
			}],
			btnNewUserClose: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Close","desktopHeight":"28px","height":"28px","margin":"0,0,0,10","styles":{},"width":"90px"}, {"onclick":"dlgCreateNonADUser.hide"}]
		}]
	}],
	dlgEditUser: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","mobileHeight":"90%","styles":{},"title":"<b>Edit User and Role(s)","width":"800px"}, {"onClose":"dlgEditUserClose","onShow":"dlgEditUserShow","onShow1":"layer1.activate","onShow3":"svGetTeamList"}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			tabLayers1: ["wm.TabLayers", {"border":"0","transition":"slide"}, {}, {
				layer1: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Information","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel21: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
							fEditUsername: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Username:","captionSize":"150px","displayValue":"","height":"25px","maxChars":"20","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.username","targetProperty":"dataValue"}, {}]
								}]
							}],
							fEditFirstname: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"First Name:","captionSize":"150px","displayValue":"","height":"25px","maxChars":"100","required":true,"styles":{}}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.firstname","targetProperty":"dataValue"}, {}]
								}]
							}],
							fEditMiddlename: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Middle Name:","captionSize":"150px","displayValue":"","height":"25px","invalidMessage":undefined,"maxChars":"100","required":true,"styles":{},"tooltipDisplayTime":undefined}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.middlename","targetProperty":"dataValue"}, {}]
								}]
							}],
							fEditLastname: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Lastname:","captionSize":"150px","displayValue":"","height":"25px","maxChars":"100","required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.lastname","targetProperty":"dataValue"}, {}]
								}]
							}],
							fEditEmailadd: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Email:","captionSize":"150px","displayValue":"","height":"25px","maxChars":"250","regExp":"^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$","required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.emailadd","targetProperty":"dataValue"}, {}]
								}]
							}],
							fEditRole: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Role:","captionSize":"150px","displayValue":"","height":"25px","maxChars":"100","readonly":true,"styles":{}}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.role","targetProperty":"dataValue"}, {}]
								}]
							}],
							fEditBranch: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch:","captionSize":"150px","dataField":"id","dataType":"com.gldb.data.Tbunit","dataValue":undefined,"displayField":"braddress","displayValue":"","height":"25px","required":true}, {"onchange":"svGetGroupListEDIT"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svBranchList","targetProperty":"dataSet"}, {}]
								}]
							}],
							fEditDepartment: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Department:","captionSize":"150px","dataField":"id","dataType":"com.etel.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","height":"25px","required":true}, {"onchange":"svGetGroupListEDIT"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svDepartment","targetProperty":"dataSet"}, {}]
								}]
							}],
							fEditPassExpDate: ["wm.Date", {"border":"0","caption":"Password Expiry Date:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","readonly":true,"required":true,"styles":{}}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire1: ["wm.Wire", {"expression":"new Date()","targetProperty":"minimum"}, {}],
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.pwexpirydate","targetProperty":"dataValue"}, {}]
								}]
							}],
							fEditValidDtFrom: ["wm.Date", {"border":"0","caption":"Account Validity From:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","readonly":true,"required":true,"styles":{}}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.validitydatefrom","targetProperty":"dataValue"}, {}]
								}]
							}],
							fEditValidDtTo: ["wm.Date", {"border":"0","caption":"Account Validity To:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","readonly":true,"required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire1: ["wm.Wire", {"expression":"new Date()","targetProperty":"minimum"}, {}],
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.validitydateto","targetProperty":"dataValue"}, {}]
								}]
							}],
							fEditLastPassChange: ["wm.DateTime", {"border":"0","caption":"Last Password Change:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","openOnClick":false,"readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.lastpasswordchange","targetProperty":"dataValue"}, {}]
								}]
							}]
						}],
						panel13: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,0,0,5","styles":{},"verticalAlign":"top","width":"371px"}, {}, {
							panel1: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"362px"}, {}, {
								chkSuspended: ["wm.Checkbox", {"_classes":{"domNode":["bCheckbox"]},"border":"0,0,0,0","borderColor":"#d1d1d1","caption":"Suspended:","captionSize":"80px","displayValue":false,"height":"25px","readonly":true,"styles":{},"width":"115px"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.issuspended","targetProperty":"dataValue"}, {}]
									}]
								}],
								spacer1: ["wm.Spacer", {"height":"25px","width":"60px"}, {}],
								chkIsActive: ["wm.Checkbox", {"_classes":{"domNode":["bCheckbox"]},"border":"0,0,0,0","borderColor":"#d1d1d1","caption":"Active:","captionSize":"80px","displayValue":false,"height":"25px","readonly":true,"styles":{},"width":"115px"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.isactive","targetProperty":"dataValue"}, {}]
									}]
								}]
							}],
							chkActiveDirecoryMem: ["wm.Checkbox", {"border":"0","caption":"Active Directory User?","captionSize":"150px","displayValue":false,"height":"25px","showing":false,"width":"180px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.isactivedirectorymember","targetProperty":"dataValue"}, {}]
								}]
							}],
							panel7: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"362px"}, {}, {
								chkLoggedIn: ["wm.Checkbox", {"_classes":{"domNode":["bCheckbox"]},"border":"0,0,0,0","borderColor":"#d1d1d1","caption":"Logged In:","captionSize":"80px","displayValue":false,"height":"25px","readonly":true,"styles":{},"width":"115px"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.isloggedon","targetProperty":"dataValue"}, {}]
									}]
								}],
								spacer2: ["wm.Spacer", {"height":"25px","width":"60px"}, {}],
								chkLocked: ["wm.Checkbox", {"_classes":{"domNode":["bCheckbox"]},"border":"0,0,0,0","borderColor":"#d1d1d1","caption":"Locked:","captionSize":"80px","displayValue":false,"height":"25px","readonly":true,"styles":{},"width":"115px"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.islocked","targetProperty":"dataValue"}, {}]
									}]
								}]
							}],
							chkChangePass: ["wm.Checkbox", {"border":"0","caption":"Change password on login:","captionSize":"180px","displayValue":false,"height":"25px","showing":false,"styles":{},"width":"220px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.ischangepwrequired","targetProperty":"dataValue"}, {}]
								}]
							}],
							chkPassNvrExpire: ["wm.Checkbox", {"border":"0","caption":"Password Never Expire:","captionSize":"180px","displayValue":false,"emptyValue":"false","height":"25px","width":"220px"}, {"onchange":"chkPassNvrExpireChange"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.ispwneverexpire","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtLastLoggonDate: ["wm.DateTime", {"border":"0","caption":"Last Logon Date:","captionSize":"180px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","openOnClick":false,"readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.lastlogondate","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtDateCreated: ["wm.DateTime", {"border":"0","caption":"Date Created:","captionSize":"180px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","openOnClick":false,"readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.datecreated","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtCreatedBy: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Created By:","captionSize":"180px","displayValue":"","height":"25px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.createdby","targetProperty":"dataValue"}, {}]
								}]
							}],
							dtLastUpdated: ["wm.DateTime", {"border":"0","caption":"Last Updated:","captionSize":"180px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.dateupdated","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtUpdatedBy: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Updated By:","captionSize":"180px","displayValue":"","height":"25px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.updatedby","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtInvalidAttempt: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Invalid Attempt Count:","captionSize":"180px","displayValue":"","height":"25px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.invalidattemptscount","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtInvalidAttempt1: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"IP Address Invalid Attempt:","captionSize":"180px","displayValue":"","height":"25px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.invalidattempip","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtCurrentLoggedOn: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"IP Address Current Logged:","captionSize":"180px","displayValue":"","height":"25px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svUserDetail.lastip","targetProperty":"dataValue"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}],
		buttonBar2: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"60px","height":"36px","styles":{}}, {}, {
			btnDeleteAccount: ["wm.Button", {"_classes":{"domNode":["Danger"]},"border":"1","borderColor":"#bd362f","caption":"Disable Account","desktopHeight":"25px","height":"25px","width":"171px"}, {"onclick":"notDisableAccount"}],
			btnResetPass: ["wm.Button", {"_classes":{"domNode":["Inverse"]},"border":"1","borderColor":"#222222","caption":"Reset Password","desktopHeight":"25px","height":"25px","width":"165px"}, {"onclick":"notResetPassword"}],
			btnAdjustValidity: ["wm.Button", {"_classes":{"domNode":["Info"]},"border":"1","borderColor":"#2f96b4","caption":"Adjust Validity Period","desktopHeight":"25px","height":"25px","width":"150px"}, {"onclick":"dialogAccountValidity.show"}],
			btnSaveEditUser: ["wm.Button", {"_classes":{"domNode":["Primary"]},"border":"1","borderColor":"#265d24","caption":"Save","desktopHeight":"25px","height":"25px","width":"100px"}, {"onclick":"btnSaveEditUserClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"panel12.invalid","targetProperty":"disabled"}, {}]
				}]
			}],
			btnCloseEditUser: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Close","desktopHeight":"25px","height":"25px","padding":"0","styles":{},"width":"100px"}, {"onclick":"dlgEditUser.hide"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		label2: ["wm.Label", {"align":"left","caption":"User Account Inquiry","height":"40px","margin":"0,0,10,0","padding":"0,0,0,10","styles":{"fontSize":"12px","fontWeight":"bold","backgroundGradient":{"direction":"horizontal","startColor":"#d1d1d1","endColor":"#ffffff","colorStop":50},"borderRadius":"5px 0px 0px"},"width":"100%"}, {}],
		panel2: ["wm.Panel", {"height":"47px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,0,0,0","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			txtSearchUsername: ["wm.Text", {"border":"0","caption":"Search by:","captionSize":"80px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,10,0,0","placeHolder":"USERNAME","styles":{},"width":"300px"}, {"onEnterKeyPress":"btnSearch.click"}],
			selRoles: ["wm.SelectMenu", {"border":"0","caption":"Role","captionSize":"40px","dataType":"com.etel.security.forms.TBRoleForm","dataValue":"","displayField":"createdby","displayValue":"","emptyValue":"emptyString","height":"25px","showing":false,"width":"234px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svGetRoles","targetProperty":"dataSet"}, {}]
				}]
			}],
			spacer3: ["wm.Spacer", {"height":"25px","width":"180px"}, {}],
			btnSearch: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Search","desktopHeight":"25px","height":"25px","padding":"0","styles":{"fontSize":"11px"},"width":"72px"}, {"onclick":"svUserList"}],
			btnAddNewUser: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Add Robinsons Bank User","desktopHeight":"25px","height":"25px","showing":false,"styles":{"fontSize":"12px"},"width":"190px"}, {"onclick":"navigationCall1"}],
			btnAddNonADUser: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Setup New User","desktopHeight":"25px","height":"25px","padding":"0","styles":{"fontSize":"11px"},"width":"130px"}, {"onclick":"btnAddNonADUserClick"}],
			btnAddADUser: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Setup AD - User","desktopHeight":"25px","height":"25px","padding":"0","showing":false,"styles":{"fontSize":"12px"},"width":"130px"}, {"onclick":"createADUser.show"}],
			btnViewDelAcct: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"View Disabled Accounts","desktopHeight":"25px","height":"25px","padding":"0","styles":{"fontSize":"11px"},"width":"200px"}, {"onclick":"dialogDisabledAcct.show","onclick1":"svFilterDeletedAcct"}]
		}],
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			grdUserList: ["wm.DojoGrid", {"border":"0","borderColor":"","columns":[
{"show":true,"field":"username","title":"Username","width":"150px","align":"center","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"name","title":"Name","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"userid","title":"Userid","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"role","title":"Role","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"branch","title":"Branch","width":"100%","align":"left","editorProps":null,"isCustomField":true,"mobileColumn":false},
{"show":true,"field":"id","title":"Id","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":null,"expression":"\"<div class='MobileRowTitle'>\" +\n\"Username: \" + ${username} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Name: \" + ${name}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Userid: \" + ${userid}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Role: \" + ${role}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Branch: \" + ${branch}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Id: \" + ${id}\n + \"</div>\"\n\n","mobileColumn":true}
],"height":"90%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"styles":{},"width":"1025px"}, {"onClick":"grdUserListClick","onSelectionChange":"grdUserListSelectionChange"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svUserList","targetProperty":"dataSet"}, {}]
				}]
			}]
		}]
	}]
}