UnitUsers.widgets = {
	svGetUserList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListofUsersPerUsernameOrRole","service":"SecurityFacade"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"panel3","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"getListofUsersPerUsernameOrRoleInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtSearchUsername.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"selRoles.selectedItem.roleid","targetProperty":"rolecode"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"slcSearchGroup.dataValue","targetProperty":"groupcode"}, {}]
			}]
		}]
	}],
	svGetRoles: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","loadingDialog":"","operation":"getListofRoles","service":"SecurityFacade","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getListofRolesInputs"}, {}]
	}],
	roles: ["wm.Variable", {"type":"com.cifsdb.data.Tbrole"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"checkboxSet1.selectedItem","targetProperty":"dataSet"}, {}]
		}]
	}],
	svGetDefaultPassword: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkUsername","service":"SecurityFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"checkUsernameInputs"}, {}]
	}],
	navigationCall1: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"ADUserInquiry\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"[main].mainPageContainer","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	searchUserInDB: ["wm.ServiceVariable", {"inFlightBehavior":undefined,"operation":"searchDBUser","service":"ADInquiryFacade"}, {"onResult":"editUserAndRoles.show","onSuccess":"searchUserInDBSuccess"}, {
		input: ["wm.ServiceInput", {"type":"searchDBUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"grdUserList.selectedItem.username","targetProperty":"username"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"grdUserList","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	srvcLogginRoles: ["wm.ServiceVariable", {"inFlightBehavior":undefined,"operation":"getUserRoles","service":"securityService","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserRolesInputs"}, {}]
	}],
	srvcDeactivateUser: ["wm.ServiceVariable", {"inFlightBehavior":undefined,"operation":"deactivateUser","service":"ADInquiryFacade"}, {"onResult":"srvcDeactivateUserResult"}, {
		input: ["wm.ServiceInput", {"type":"deactivateUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtUsername.dataValue","targetProperty":"username"}, {}]
			}]
		}]
	}],
	srvcSaveUserToDb: ["wm.ServiceVariable", {"inFlightBehavior":undefined,"operation":"saveDbUser","service":"ADInquiryFacade"}, {"onResult":"srvcSaveUserToDbResult"}, {
		input: ["wm.ServiceInput", {"type":"saveDbUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"checkboxSet5.selectedItem","targetProperty":"userForm.roles"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"checkboxSet5.selectedItem.rolename","targetProperty":"userForm.roles.rolename"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"checkboxSet5.selectedItem.roleid","targetProperty":"userForm.roles.roleid"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"varSaveNewUser","targetProperty":"userForm.useraccount"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"createNonADUser","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	srvcSaveEditedADUser: ["wm.ServiceVariable", {"inFlightBehavior":undefined,"operation":"saveEditUserAndRoles","service":"ADInquiryFacade"}, {"onResult":"srvcSaveEditedADUserResult","onSuccess":"srvcSaveEditedADUserAndRolesSuccess"}, {
		input: ["wm.ServiceInput", {"type":"saveEditUserAndRolesInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"aduser\"","targetProperty":"tag"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"varSaveEditAD","targetProperty":"userForm"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	varSaveEditDB: ["wm.Variable", {"type":"com.etel.forms.UserForm"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"checkboxSet4.selectedItem","targetProperty":"dataSet.roles"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"txtFirstName.dataValue","targetProperty":"dataSet.useraccount.firstname"}, {}],
			wire2: ["wm.Wire", {"expression":undefined,"source":"txtLastname.dataValue","targetProperty":"dataSet.useraccount.lastname"}, {}],
			wire3: ["wm.Wire", {"expression":undefined,"source":"txtEmailAdd.dataValue","targetProperty":"dataSet.useraccount.emailadd"}, {}],
			wire4: ["wm.Wire", {"expression":undefined,"source":"txtUsername.dataValue","targetProperty":"dataSet.useraccount.username"}, {}],
			wire6: ["wm.Wire", {"expression":undefined,"source":"chkActiveDirecoryMem.dataValue","targetProperty":"dataSet.useraccount.isactivedirectorymember"}, {}],
			wire7: ["wm.Wire", {"expression":undefined,"source":"chkLocked.dataValue","targetProperty":"dataSet.useraccount.islocked"}, {}],
			wire8: ["wm.Wire", {"expression":undefined,"source":"chkLoggedIn.dataValue","targetProperty":"dataSet.useraccount.isloggedon"}, {}],
			wire9: ["wm.Wire", {"expression":undefined,"source":"chkIsActive.dataValue","targetProperty":"dataSet.useraccount.isactive"}, {}],
			wire10: ["wm.Wire", {"expression":undefined,"source":"chkChangePass.dataValue","targetProperty":"dataSet.useraccount.ischangepwrequired"}, {}],
			wire11: ["wm.Wire", {"expression":undefined,"source":"chkSuspended.dataValue","targetProperty":"dataSet.useraccount.issuspended"}, {}],
			wire14: ["wm.Wire", {"expression":undefined,"source":"txtValidDateTo.dataValue","targetProperty":"dataSet.useraccount.validitydateto"}, {}],
			wire13: ["wm.Wire", {"expression":undefined,"source":"txtValidDateFrom.dataValue","targetProperty":"dataSet.useraccount.validitydatefrom"}, {}],
			wire5: ["wm.Wire", {"expression":undefined,"source":"selectMenu.dataValue","targetProperty":"dataSet.useraccount.unit"}, {}],
			wire15: ["wm.Wire", {"expression":undefined,"source":"txtCfgAo.dataValue","targetProperty":"dataSet.useraccount.cfgid"}, {}],
			wire16: ["wm.Wire", {"expression":undefined,"source":"txtpExpiryDate.dataValue","targetProperty":"dataSet.useraccount.expirydate"}, {}],
			wire12: ["wm.Wire", {"expression":undefined,"source":"txtpExpiryDate.dataValue","targetProperty":"dataSet.useraccount.pwexpirydate"}, {}],
			wire19: ["wm.Wire", {"expression":undefined,"source":"txtMiddleName.dataValue","targetProperty":"dataSet.useraccount.middlename"}, {}],
			wire17: ["wm.Wire", {"expression":undefined,"source":"slcGroup.selectedItem.groupcode","targetProperty":"dataSet.useraccount.groupcode"}, {}],
			wire18: ["wm.Wire", {"expression":undefined,"source":"slcBranch.selectedItem.branchcode","targetProperty":"dataSet.useraccount.branchcode"}, {}],
			wire20: ["wm.Wire", {"expression":undefined,"source":"slcCompany.selectedItem.companycode","targetProperty":"dataSet.useraccount.companycode"}, {}],
			wire21: ["wm.Wire", {"expression":undefined,"source":"chkPassNvrExpire.dataValue","targetProperty":"dataSet.useraccount.ispwneverexpire"}, {}],
			wire22: ["wm.Wire", {"expression":undefined,"source":"slcTeam.dataValue","targetProperty":"dataSet.useraccount.teamcode"}, {}]
		}]
	}],
	srvcSaveEditedDBUser: ["wm.ServiceVariable", {"inFlightBehavior":undefined,"operation":"saveEditUserAndRoles","service":"ADInquiryFacade"}, {"onResult":"srvcSaveEditedDBUserResult","onSuccess":"srvcSaveEditedADUserAndRolesSuccess"}, {
		input: ["wm.ServiceInput", {"type":"saveEditUserAndRolesInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"dbuser\"","targetProperty":"tag"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"varSaveEditDB","targetProperty":"userForm"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"editUserAndRoles","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svValidate: ["wm.ServiceVariable", {"inFlightBehavior":undefined,"operation":"validate","service":"SecurityFacade"}, {"onResult":"svValidateResult"}, {
		input: ["wm.ServiceInput", {"type":"validateInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"varUseracct","targetProperty":"varUseracct"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"varUseracct","targetProperty":"useracct"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"checkboxSet5.selectedItem.rolename","targetProperty":"role.rolename"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"checkboxSet5.selectedItem.roleid","targetProperty":"role.roleid"}, {}],
				wire4: ["wm.Wire", {"expression":"\"new\"","targetProperty":"newOrEdited"}, {}]
			}]
		}]
	}],
	svChangePass: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"changePassword","service":"SecurityFacade"}, {"onResult":"svChangePassResult"}, {
		input: ["wm.ServiceInput", {"type":"changePasswordInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"txtEConfirmPass.dataValue","targetProperty":"password"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"txtUsername.dataValue","targetProperty":"username"}, {}]
			}]
		}]
	}],
	svValidatePass: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"validatePassword","service":"SecurityFacade"}, {"onResult":"svValidatePassResult"}, {
		input: ["wm.ServiceInput", {"type":"validatePasswordInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"txtEConfirmPass.dataValue","targetProperty":"password"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"txtUsername.dataValue","targetProperty":"username"}, {}]
			}]
		}]
	}],
	notifSuccessChangePass: ["wm.NotificationCall", {"operation":"toast"}, {"onClose":"notifSuccessChangePassClose"}, {
		input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Thank You. Your password has successfully been changed.\"","targetProperty":"text"}, {}],
				wire1: ["wm.Wire", {"expression":"3000","targetProperty":"duration"}, {}],
				wire2: ["wm.Wire", {"expression":"\"bottom center\"","targetProperty":"dialogPosition"}, {}],
				wire3: ["wm.Wire", {"expression":"\"Success\"","targetProperty":"cssClasses"}, {}]
			}]
		}]
	}],
	svGetSecurityParams: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSecurityParams","service":"SecurityFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getSecurityParamsInputs"}, {}]
	}],
	svFilterDeletedAcct: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"filterDeletedAcct","service":"SecurityFacade"}, {"onResult":"svFilterDeletedAcctResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid1","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"filterDeletedAcctInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtSearchUser.dataValue","targetProperty":"search"}, {}]
			}]
		}]
	}],
	svEnableDeletedAcct: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"enableUserAcct","service":"SecurityFacade"}, {"onResult":"svEnableDeletedAcctResult"}, {
		input: ["wm.ServiceInput", {"type":"enableUserAcctInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid1.selectedItem.username","targetProperty":"username"}, {}]
			}]
		}]
	}],
	varUseracct: ["wm.Variable", {"type":"com.cifsdb.data.Tbuser"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire5: ["wm.Wire", {"expression":"true","targetProperty":"dataSet.ischangepwrequired"}, {}],
			wire7: ["wm.Wire", {"expression":undefined,"source":"selUnit.selectedItem.dataValue","targetProperty":"dataSet.unit"}, {}],
			wire9: ["wm.Wire", {"expression":"false","targetProperty":"dataSet.issuspended"}, {}],
			wire10: ["wm.Wire", {"expression":"true","targetProperty":"dataSet.isactive"}, {}],
			wire11: ["wm.Wire", {"expression":"false","targetProperty":"dataSet.isloggedon"}, {}],
			wire12: ["wm.Wire", {"expression":"false","targetProperty":"dataSet.islocked"}, {}],
			wire15: ["wm.Wire", {"expression":"0","targetProperty":"dataSet.invalidattemptscount"}, {}],
			wire14: ["wm.Wire", {"expression":"false","targetProperty":"dataSet.isactivedirectorymember"}, {}],
			wire16: ["wm.Wire", {"expression":"false","targetProperty":"dataSet.isdisabled"}, {}],
			wire1: ["wm.Wire", {"expression":"\"P@ssword01\"","targetProperty":"dataSet.password"}, {}],
			wire19: ["wm.Wire", {"expression":undefined,"source":"txtCNValidDateFrom.dataValue","targetProperty":"dataSet.validitydatefrom"}, {}],
			wire20: ["wm.Wire", {"expression":undefined,"source":"[main].templateUsernameVar.dataValue","targetProperty":"dataSet.createdby"}, {}],
			wire: ["wm.Wire", {"expression":undefined,"source":"txtCNUsername.dataValue","targetProperty":"dataSet.username"}, {}],
			wire2: ["wm.Wire", {"expression":undefined,"source":"txtUserID.dataValue","targetProperty":"dataSet.lastname"}, {}],
			wire3: ["wm.Wire", {"expression":undefined,"source":"txtName.dataValue","targetProperty":"dataSet.firstname"}, {}],
			wire4: ["wm.Wire", {"expression":undefined,"source":"txtCNValidDateTo.dataValue","targetProperty":"dataSet.validitydateto"}, {}],
			wire6: ["wm.Wire", {"expression":undefined,"source":"txtUnitBal.dataValue","targetProperty":"dataSet.emailadd"}, {}],
			wire8: ["wm.Wire", {"expression":undefined,"source":"checkboxSet5.selectedItem.rolename","targetProperty":"dataSet.role"}, {}],
			wire13: ["wm.Wire", {"expression":undefined,"source":"txtCNPassExpDate.dataValue","targetProperty":"dataSet.pwexpirydate"}, {}],
			wire17: ["wm.Wire", {"expression":undefined,"source":"slcCNCompany.dataValue","targetProperty":"dataSet.companycode"}, {}],
			wire18: ["wm.Wire", {"expression":undefined,"source":"slcCNGroup.dataValue","targetProperty":"dataSet.groupcode"}, {}],
			wire21: ["wm.Wire", {"expression":undefined,"source":"txtCNMiddleName.dataValue","targetProperty":"dataSet.middlename"}, {}],
			wire22: ["wm.Wire", {"expression":undefined,"source":"chkCNPassNvrExpire.dataValue","targetProperty":"dataSet.ispwneverexpire"}, {}],
			wire23: ["wm.Wire", {"expression":undefined,"source":"slcCNTeam.dataValue","targetProperty":"dataSet.teamcode"}, {}]
		}]
	}],
	varSaveNewUser: ["wm.Variable", {"type":"com.cifsdb.data.Tbuser"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire5: ["wm.Wire", {"expression":"true","targetProperty":"dataSet.ischangepwrequired"}, {}],
			wire7: ["wm.Wire", {"expression":undefined,"source":"selUnit.selectedItem.dataValue","targetProperty":"dataSet.unit"}, {}],
			wire9: ["wm.Wire", {"expression":"false","targetProperty":"dataSet.issuspended"}, {}],
			wire10: ["wm.Wire", {"expression":"true","targetProperty":"dataSet.isactive"}, {}],
			wire11: ["wm.Wire", {"expression":"false","targetProperty":"dataSet.isloggedon"}, {}],
			wire12: ["wm.Wire", {"expression":"false","targetProperty":"dataSet.islocked"}, {}],
			wire15: ["wm.Wire", {"expression":"0","targetProperty":"dataSet.invalidattemptscount"}, {}],
			wire14: ["wm.Wire", {"expression":"false","targetProperty":"dataSet.isactivedirectorymember"}, {}],
			wire16: ["wm.Wire", {"expression":"false","targetProperty":"dataSet.isdisabled"}, {}],
			wire1: ["wm.Wire", {"expression":"\"P@ssword01\"","targetProperty":"dataSet.password"}, {}],
			wire20: ["wm.Wire", {"expression":undefined,"source":"[main].templateUsernameVar.dataValue","targetProperty":"dataSet.createdby"}, {}],
			wire: ["wm.Wire", {"expression":undefined,"source":"txtCNUsername.dataValue","targetProperty":"dataSet.username"}, {}],
			wire2: ["wm.Wire", {"expression":undefined,"source":"txtUserID.dataValue","targetProperty":"dataSet.lastname"}, {}],
			wire3: ["wm.Wire", {"expression":undefined,"source":"txtName.dataValue","targetProperty":"dataSet.firstname"}, {}],
			wire6: ["wm.Wire", {"expression":undefined,"source":"txtUnitBal.dataValue","targetProperty":"dataSet.emailadd"}, {}],
			wire17: ["wm.Wire", {"expression":undefined,"source":"txtCNValidDateFrom.dataValue","targetProperty":"dataSet.validitydatefrom"}, {}],
			wire4: ["wm.Wire", {"expression":undefined,"source":"txtCNValidDateTo.dataValue","targetProperty":"dataSet.validitydateto"}, {}],
			wire18: ["wm.Wire", {"expression":undefined,"source":"txtCNPassExpDate.dataValue","targetProperty":"dataSet.pwexpirydate"}, {}],
			wire8: ["wm.Wire", {"expression":undefined,"source":"slcCNGroup.selectedItem.groupcode","targetProperty":"dataSet.groupcode"}, {}],
			wire13: ["wm.Wire", {"expression":undefined,"source":"slcCNBranch.selectedItem.branchcode","targetProperty":"dataSet.branchcode"}, {}],
			wire19: ["wm.Wire", {"expression":undefined,"source":"slcCNCompany.selectedItem.companycode","targetProperty":"dataSet.companycode"}, {}],
			wire21: ["wm.Wire", {"expression":undefined,"source":"txtCNMiddleName.dataValue","targetProperty":"dataSet.middlename"}, {}],
			wire22: ["wm.Wire", {"expression":undefined,"source":"chkCNPassNvrExpire.dataValue","targetProperty":"dataSet.ispwneverexpire"}, {}],
			wire23: ["wm.Wire", {"expression":undefined,"source":"slcCNTeam.dataValue","targetProperty":"dataSet.teamcode"}, {}]
		}]
	}],
	svValidateEditUser: ["wm.ServiceVariable", {"inFlightBehavior":undefined,"operation":"validate","service":"SecurityFacade"}, {"onResult":"svValidateEditUserResult"}, {
		input: ["wm.ServiceInput", {"type":"validateInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"varSaveEditDB.useraccount","targetProperty":"useracct"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"varSaveEditDB.roles.roleid","targetProperty":"role.roleid"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"varSaveEditDB.roles.rolename","targetProperty":"role.rolename"}, {}],
				wire3: ["wm.Wire", {"expression":"\"edited\"","targetProperty":"newOrEdited"}, {}]
			}]
		}]
	}],
	svSearchADUser: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"searchADUser","service":"ADInquiryFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"searchADUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtADSearch.dataValue","targetProperty":"username"}, {}]
			}]
		}]
	}],
	svResetPassword: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"resetPassword","service":"SecurityFacade"}, {"onResult":"svResetPasswordResult"}, {
		input: ["wm.ServiceInput", {"type":"resetPasswordInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtUsername.dataValue","targetProperty":"username"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"editUserAndRoles","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	notResetPassword: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svResetPassword"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Are you sure you want to reset the user's password?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	svGetBranchListCN: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListOfBranchbyCompany","service":"BranchFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListOfBranchbyCompanyInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"slcCNCompany.selectedItem.companycode","targetProperty":"companyCode"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"slcCNCompany.selectedItem.companycode","targetProperty":"companycode"}, {}]
			}]
		}]
	}],
	svGetGroupListCN: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListOfGroupByCompanyAndBranch","service":"GroupFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListOfGroupByCompanyAndBranchInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"slcCNCompany.selectedItem.companycode","targetProperty":"companyCode"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"slcCNBranch.selectedItem.branchcode","targetProperty":"branchCode"}, {}]
			}]
		}]
	}],
	svGetCompanyListCN: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListOfCompany","service":"CompanyFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListOfCompanyInputs"}, {}]
	}],
	svGetTeamList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListOfTeams","service":"TeamFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListOfTeamsInputs"}, {}]
	}],
	svGroupListSearch: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListOfGroup","service":"GroupFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListOfGroupInputs"}, {}]
	}],
	svGetBranchListEDIT: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListOfBranchbyCompany","service":"BranchFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListOfBranchbyCompanyInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"slcCompany.selectedItem.companycode","targetProperty":"companyCode"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"slcCompany.selectedItem.companycode","targetProperty":"companycode"}, {}]
			}]
		}]
	}],
	svGetCompanyListEDIT: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListOfCompany","service":"CompanyFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListOfCompanyInputs"}, {}]
	}],
	svGetGroupListEDIT: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListOfGroupByCompanyAndBranch","service":"GroupFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListOfGroupByCompanyAndBranchInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"slcCompany.selectedItem.companycode","targetProperty":"companyCode"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"slcBranch.selectedItem.branchcode","targetProperty":"branchCode"}, {}]
			}]
		}]
	}],
	notSave: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svValidateEditUser","onOk1":"dialogAccountValidity.hide"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Are you sure you want to save your changes?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	notDisableAccount: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"srvcDeactivateUser"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Are you sure you want to disable the user account?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	notReEnableAccount: ["wm.NotificationCall", {"operation":"confirm"}, {"onOk":"svEnableDeletedAcct"}, {
		input: ["wm.ServiceInput", {"type":"confirmInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Are you sure you want to re-enable the user account?\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	svValidateMaxNoOfUserADD: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"validateMaxNoOfUser","service":"SecurityFacade"}, {"onResult":"svValidateMaxNoOfUserADDResult"}, {
		input: ["wm.ServiceInput", {"type":"validateMaxNoOfUserInputs"}, {}]
	}],
	svValidateMaxNoOfUserENABLE: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"validateMaxNoOfUser","service":"SecurityFacade"}, {"onResult":"svValidateMaxNoOfUserENABLEResult"}, {
		input: ["wm.ServiceInput", {"type":"validateMaxNoOfUserInputs"}, {}]
	}],
	svResendPasswordUserCreation: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"resendEmail","service":"SecurityFacade"}, {"onResult":"svResendPasswordUserCreationResult"}, {
		input: ["wm.ServiceInput", {"type":"resendEmailInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire2: ["wm.Wire", {"expression":"\"create\"","targetProperty":"type"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"srvcSaveUserToDb.returnMessage","targetProperty":"changepass"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"txtCNUsername.dataValue","targetProperty":"username"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"createNonADUser","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svResendPasswordReset: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"resendEmail","service":"SecurityFacade"}, {"onResult":"svResendPasswordResetResult"}, {
		input: ["wm.ServiceInput", {"type":"resendEmailInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtUsername.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"svResetPassword.errorMessage","targetProperty":"changepass"}, {}],
				wire2: ["wm.Wire", {"expression":"\"reset\"","targetProperty":"type"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"editUserAndRoles","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svGetListOfUsers: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getListOfUser","service":"SecurityFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getListOfUserInputs"}, {}]
	}],
	editUserAndRoles: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","desktopHeight":"445px","height":"445px","mobileHeight":"90%","styles":{},"title":"<b>Edit User and Role(s)","width":"800px"}, {"onClose":"editUserAndRolesClose","onShow":"editUserAndRolesShow","onShow1":"layer1.activate","onShow3":"svGetTeamList"}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			tabLayers1: ["wm.TabLayers", {"border":"0","transition":"slide"}, {}, {
				layer1: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Information","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel21: ["wm.Panel", {"height":"339px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						panel12: ["wm.Panel", {"height":"327px","horizontalAlign":"right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
							txtUsername: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Username:","captionSize":"150px","displayValue":"","height":"25px","maxChars":"20","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.username","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtFirstName: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"First Name:","captionSize":"150px","displayValue":"","height":"25px","maxChars":"100","required":true,"styles":{}}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.firstname","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtMiddleName: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Middle Name:","captionSize":"150px","displayValue":"","height":"25px","invalidMessage":undefined,"maxChars":"100","required":true,"styles":{},"tooltipDisplayTime":undefined}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.middlename","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtLastname: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Lastname:","captionSize":"150px","displayValue":"","height":"25px","maxChars":"100","required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.lastname","targetProperty":"dataValue"}, {}]
								}]
							}],
							selectMenu: ["wm.SelectMenu", {"border":"0","caption":"Loan Group","captionSize":"150px","dataType":"com.cifdb.data.Codetable","displayField":"codevalue","displayValue":"","height":"25px","margin":"0,0,0,0","placeHolder":"Select Loan Group","showing":false,"styles":{},"width":"400px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svGetLoanGroup","targetProperty":"dataSet"}, {}],
									wire1: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.unit","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtEmailAdd: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Email:","captionSize":"150px","displayValue":"","height":"25px","maxChars":"250","regExp":"^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$","required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.emailadd","targetProperty":"dataValue"}, {}]
								}]
							}],
							slcCompany: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Company:","captionSize":"150px","dataField":"companycode","dataType":"com.etel.company.forms.CompanyForm","displayField":"companyname","displayValue":"","height":"25px","required":true}, {"onchange":"svGetBranchListEDIT"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svGetCompanyListEDIT","targetProperty":"dataSet"}, {}],
									wire1: ["wm.Wire", {"expression":undefined,"source":"grdUserList.selectedItem.companycode","targetProperty":"dataValue"}, {}]
								}]
							}],
							slcBranch: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch:","captionSize":"150px","dataField":"branchcode","dataType":"com.etel.branch.forms.BranchForm","displayField":"branchname","displayValue":"","height":"25px"}, {"onchange":"svGetGroupListEDIT"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svGetBranchListEDIT","targetProperty":"dataSet"}, {}],
									wire1: ["wm.Wire", {"expression":undefined,"source":"grdUserList.selectedItem.branchcode","targetProperty":"dataValue"}, {}]
								}]
							}],
							slcGroup: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Group:","captionSize":"150px","dataField":"groupcode","dataType":"com.etel.group.forms.GroupForm","displayField":"groupname","displayValue":"","height":"25px","showing":false}, {"onchange":"slcGroupChange"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svGetGroupListEDIT","targetProperty":"dataSet"}, {}],
									wire1: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.groupcode","targetProperty":"dataValue"}, {}]
								}]
							}],
							slcTeam: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Team:","captionSize":"150px","dataField":"teamcode","dataType":"com.etel.team.forms.TeamForm","displayField":"teamname","displayValue":"","height":"25px","showing":false}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svGetTeamList","targetProperty":"dataSet"}, {}],
									wire2: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.teamcode","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtpExpiryDate: ["wm.Date", {"border":"0","caption":"Password Expiry Date:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","readonly":true,"required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"grdUserList.selectedItem.pwexpirydate","targetProperty":"dataValue"}, {}],
									wire1: ["wm.Wire", {"expression":"new Date()","targetProperty":"minimum"}, {}]
								}]
							}],
							txtValidDateFrom: ["wm.Date", {"border":"0","caption":"Account Validity From:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","readonly":true,"required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"txtDlgValidDateFrom.dataValue","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtValidDateTo: ["wm.Date", {"border":"0","caption":"Account Validity To:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","readonly":true,"required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire1: ["wm.Wire", {"expression":"new Date()","targetProperty":"minimum"}, {}],
									wire: ["wm.Wire", {"expression":undefined,"source":"txtDlgValidDateTo.dataValue","targetProperty":"dataValue"}, {}]
								}]
							}],
							panel4: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
								panel11: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","showing":false,"styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
									checkbox1: ["wm.Checkbox", {"_classes":{"domNode":["bCheckbox"]},"border":"0,1,0,0","borderColor":"#d1d1d1","caption":"IS CFGACCOUNT OFFICER","captionPosition":"right","desktopHeight":"20px","displayValue":false,"height":"20px","width":"180px"}, {"onblur":"checkbox1Blur"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":"${slcCNGroup.invalid}","targetProperty":"disabled"}, {}],
											wire1: ["wm.Wire", {"expression":"if(${searchUserInDB.useraccount.iscfgofficer} == null || ${searchUserInDB.useraccount.iscfgofficer} == \"\" || ${searchUserInDB.useraccount.iscfgofficer} == undefined)\nfalse\nelse\n${searchUserInDB.useraccount.iscfgofficer}","targetProperty":"dataValue"}, {}]
										}]
									}],
									label6: ["wm.Label", {"align":"center","caption":"<u>View Generated CFG IDs</u>","height":"20px","padding":"4"}, {"onclick":"label6Click"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"checkbox1.dataValue","targetProperty":"showing"}, {}]
										}]
									}]
								}]
							}],
							txtLastPassChange: ["wm.DateTime", {"border":"0","caption":"Last Password Change:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","openOnClick":false,"readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.lastpasswordchange","targetProperty":"dataValue"}, {}]
								}]
							}]
						}],
						panel13: ["wm.Panel", {"height":"329px","horizontalAlign":"left","padding":"0,0,0,5","styles":{},"verticalAlign":"top","width":"371px"}, {}, {
							panel1: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"362px"}, {}, {
								chkSuspended: ["wm.Checkbox", {"_classes":{"domNode":["bCheckbox"]},"border":"0,0,0,0","borderColor":"#d1d1d1","caption":"Suspended:","captionSize":"80px","displayValue":false,"height":"25px","readonly":true,"styles":{},"width":"115px"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.issuspended","targetProperty":"dataValue"}, {}]
									}]
								}],
								spacer1: ["wm.Spacer", {"height":"25px","width":"60px"}, {}],
								chkIsActive: ["wm.Checkbox", {"_classes":{"domNode":["bCheckbox"]},"border":"0,0,0,0","borderColor":"#d1d1d1","caption":"Active:","captionSize":"80px","displayValue":false,"height":"25px","readonly":true,"styles":{},"width":"115px"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.isactive","targetProperty":"dataValue"}, {}]
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
										wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.isloggedon","targetProperty":"dataValue"}, {}]
									}]
								}],
								spacer2: ["wm.Spacer", {"height":"25px","width":"60px"}, {}],
								chkLocked: ["wm.Checkbox", {"_classes":{"domNode":["bCheckbox"]},"border":"0,0,0,0","borderColor":"#d1d1d1","caption":"Locked:","captionSize":"80px","displayValue":false,"height":"25px","readonly":true,"styles":{},"width":"115px"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.islocked","targetProperty":"dataValue"}, {}]
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
									wire: ["wm.Wire", {"expression":undefined,"source":"grdUserList.selectedItem.ispwneverexpire","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtLastLoggonDate: ["wm.DateTime", {"border":"0","caption":"Last Logon Date:","captionSize":"180px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","openOnClick":false,"readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"grdUserList.selectedItem.lastlogondate","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtDateCreated: ["wm.DateTime", {"border":"0","caption":"Date Created:","captionSize":"180px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","openOnClick":false,"readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.datecreated","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtCreatedBy: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Created By:","captionSize":"180px","displayValue":"","height":"25px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.createdby","targetProperty":"dataValue"}, {}]
								}]
							}],
							dtLastUpdated: ["wm.DateTime", {"border":"0","caption":"Last Updated:","captionSize":"180px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":undefined,"height":"25px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.dateupdated","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtUpdatedBy: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Updated By:","captionSize":"180px","displayValue":"","height":"25px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.updatedby","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtInvalidAttempt: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Invalid Attempt Count:","captionSize":"180px","displayValue":"","height":"25px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.invalidattemptscount","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtInvalidAttempt1: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"IP Address Invalid Attempt:","captionSize":"180px","displayValue":"","height":"25px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.invalidattempip","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtCurrentLoggedOn: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"IP Address Current Logged:","captionSize":"180px","displayValue":"","height":"25px","readonly":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.useraccount.lastIp","targetProperty":"dataValue"}, {}]
								}]
							}],
							resendPanel: ["wm.Panel", {"height":"42px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"${svResetPassword.isEmpty}==false","targetProperty":"showing"}, {}]
								}],
								labelResend1: ["wm.Label", {"align":"center","padding":"0,0,0,0","styles":{},"width":"38px"}, {"onclick":"svResendPasswordReset"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":"\"<b><font size=\\\"5\\\" color = \\\"#FF823E\\\">&#8634\"","targetProperty":"caption"}, {}]
									}]
								}],
								labelResend2: ["wm.Label", {"align":"right","padding":"0","styles":{"fontWeight":"bold"},"width":"225px"}, {"onclick":"svResendPasswordReset"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":"\"Re-send Email for Password Reset?\"","targetProperty":"caption"}, {}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer2: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Roles","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel20: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						checkboxSet4: ["wm.CheckboxSet", {"_classes":{"domNode":["bCheckboxSet"]},"border":"0","borderColor":"#ffffff","caption":undefined,"dataField":"roleid","dataType":"com.etel.security.forms.TBRoleForm","displayField":"rolename","displayValue":"","height":"100%","required":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svGetRoles","targetProperty":"dataSet"}, {}],
								wire1: ["wm.Wire", {"expression":undefined,"source":"searchUserInDB.roles","targetProperty":"dataValue"}, {}]
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
			btnSaveEditUser: ["wm.Button", {"_classes":{"domNode":["Primary"]},"border":"1","borderColor":"#265d24","caption":"Save","desktopHeight":"25px","height":"25px","width":"100px"}, {"onclick":"notSave"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"panel12.invalid","targetProperty":"disabled"}, {}]
				}]
			}],
			btnCloseEditUser: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Close","desktopHeight":"25px","height":"25px","padding":"0","styles":{},"width":"100px"}, {"onclick":"editUserAndRoles.hide"}]
		}]
	}],
	dialogChangePass: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"170px","height":"170px","modal":false,"styles":{},"title":"<b>Change User Password","width":"400px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100px","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
			txtENewPass: ["wm.Text", {"border":"0","caption":"New Password:","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","password":true,"styles":{},"width":"350px"}, {}],
			txtEConfirmPass: ["wm.Text", {"border":"0","caption":"Confirm Password:","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","password":true,"styles":{},"width":"350px"}, {"onchange":"txtEConfirmPassChange"}],
			txtNotMatch: ["wm.Label", {"align":"center","caption":"Password Not Match","padding":"4","showing":false,"styles":{"color":"#f30303","fontWeight":"bold"},"width":"100%"}, {"onHide":"txtNotMatchHide","onShow":"txtNotMatchShow"}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"60px","height":"36px","horizontalAlign":"center","verticalAlign":"middle"}, {}, {
			button1: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Submit","desktopHeight":"25px","disabled":true,"height":"25px","margin":"0","styles":{}}, {"onclick":"svValidatePass"}]
		}]
	}],
	createNonADUser: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar3","containerWidgetId":"containerWidget2","desktopHeight":"435px","height":"435px","styles":{},"title":"<b>Setup New User","width":"750px"}, {"onClose":"createNonADUserClose","onShow":"svGetRoles","onShow1":"svGetLoanGroup","onShow2":"layer4.hide","onShow3":"svGetCompanyListCN","onShow4":"svGetTeamList"}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			tabLayers2: ["wm.TabLayers", {"border":"0","styles":{},"transition":"slide"}, {}, {
				layer3: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Information","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"layer4.hide"}, {
					panel22: ["wm.Panel", {"height":"305px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						panel18: ["wm.Panel", {"height":"302px","horizontalAlign":"left","styles":{},"verticalAlign":"top","width":"402px"}, {}, {
							txtCNUsername: ["wm.Text", {"border":"0","caption":"Username:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","maxChars":"20","required":true,"tooltipDisplayTime":undefined,"width":"400px"}, {}],
							txtName: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Name:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","invalidMessage":undefined,"maxChars":"100","required":true,"styles":{},"tooltipDisplayTime":undefined,"width":"400px"}, {}],
							txtUserID: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"User ID:","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","invalidMessage":undefined,"maxChars":"100","required":true,"tooltipDisplayTime":undefined,"width":"400px"}, {}],
							selectMenuCN: ["wm.SelectMenu", {"border":"0","caption":"Loan Group","captionSize":"150px","dataType":"com.cifdb.data.Codetable","dataValue":undefined,"displayField":"codevalue","displayValue":"","height":"25px","margin":"0,0,0,0","placeHolder":"Select Loan Group","showing":false,"styles":{},"width":"400px"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svGetLoanGroup","targetProperty":"dataSet"}, {}]
								}]
							}],
							txtUnitBal: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Unit Balance:","captionSize":"150px","dataValue":undefined,"displayValue":"","formatter":undefined,"height":"25px","invalidMessage":"Not a valid email address","maxChars":"250","regExp":"^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$","required":true,"width":"400px"}, {}],
							txtCNPassword: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Password:","captionSize":"150px","dataValue":undefined,"displayValue":"","formatter":undefined,"height":"25px","invalidMessage":undefined,"password":true,"showing":false,"tooltipDisplayTime":undefined,"width":"400px"}, {}],
							slcCNGroup: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Group:","captionSize":"150px","dataField":"groupcode","dataType":"com.etel.group.forms.GroupForm","dataValue":undefined,"displayField":"groupname","displayValue":"","height":"25px","showing":false}, {"onchange":"slcCNGroupChange"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svGetGroupListCN","targetProperty":"dataSet"}, {}]
								}]
							}],
							slcCNTeam: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Team:","captionSize":"150px","dataField":"teamcode","dataType":"com.etel.team.forms.TeamForm","dataValue":undefined,"displayField":"teamname","displayValue":"","height":"25px","showing":false}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svGetTeamList","targetProperty":"dataSet"}, {}]
								}]
							}],
							txtCNPassExpDate: ["wm.Date", {"border":"0","caption":"Password Expiry Date:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"9/18/2017","emptyValue":"null","formatter":undefined,"height":"25px","readonly":true,"required":true,"showing":false}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire1: ["wm.Wire", {"expression":"new Date()","targetProperty":"minimum"}, {}],
									wire: ["wm.Wire", {"expression":"//new Date(new Date().getTime() + (86400000*60));\nnew Date(new Date().setDate(new Date().getDate()+ ${svGetSecurityParams.maxpasswordage}))","targetProperty":"dataValue"}, {}]
								}]
							}],
							txtCNValidDateFrom: ["wm.Date", {"border":"0","caption":"Account Validity From:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"9/18/2017","emptyValue":"null","formatter":undefined,"height":"25px","required":true,"showing":false}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"new Date();","targetProperty":"dataValue"}, {}],
									wire1: ["wm.Wire", {"expression":undefined,"source":"txtCNValidDateTo.dataValue","targetProperty":"maximum"}, {}]
								}]
							}],
							txtCNValidDateTo: ["wm.Date", {"border":"0","caption":"Account Validity To:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"9/18/2017","emptyValue":"null","formatter":"Date","height":"25px","minimum":null,"required":true,"showing":false,"styles":{}}, {"onchange":"txtCNValidDateToChange"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"//new Date(new Date().getTime() + (86400000*${svGetSecurityParams.maxpasswordage}));\nnew Date(new Date().setDate(new Date().getDate()+ ${svGetSecurityParams.validityperiodindays}))","targetProperty":"dataValue"}, {}]
								}],
								format: ["wm.DateFormatter", {}, {}]
							}],
							txtUnitBrID: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Unit Branch ID:","captionSize":"150px","dataValue":undefined,"displayValue":"","formatter":undefined,"height":"25px","invalidMessage":"Not a valid email address","maxChars":"250","regExp":"^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$","required":true,"width":"400px"}, {}],
							txtCurrency: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Currency:","captionSize":"150px","dataValue":undefined,"displayValue":"","formatter":undefined,"height":"25px","invalidMessage":"Not a valid email address","maxChars":"250","regExp":"^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$","required":true,"width":"400px"}, {}],
							txtInstcode: ["wm.Text", {"_classes":{"domNode":["sText"]},"border":"0","caption":"Instcode:","captionSize":"150px","dataValue":undefined,"displayValue":"","formatter":undefined,"height":"25px","invalidMessage":"Not a valid email address","maxChars":"250","regExp":"^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$","required":true,"width":"400px"}, {}]
						}],
						panel23: ["wm.Panel", {"height":"104%","horizontalAlign":"left","padding":"0,0,0,5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
							chkCNIsActive: ["wm.Checkbox", {"_classes":{"domNode":["bCheckbox"]},"border":"0,0,0,0","borderColor":"#d1d1d1","caption":"Active:","captionSize":"150px","checkedValue":false,"dataValue":false,"displayValue":false,"height":"25px","readonly":true,"startChecked":true,"styles":{},"width":"180px"}, {}],
							chkCNChangePass: ["wm.Checkbox", {"border":"0","caption":"Must Change Password at Next Logon","captionSize":"150px","checkedValue":false,"dataValue":false,"desktopHeight":"37px","displayValue":false,"emptyValue":"false","height":"37px","readonly":true,"singleLine":false,"startChecked":true,"styles":{},"width":"266px"}, {}],
							chkCNPassNvrExpire: ["wm.Checkbox", {"border":"0","caption":"Password Never Expire:","captionSize":"150px","dataValue":false,"displayValue":false,"emptyValue":"false","height":"25px","showing":false,"width":"180px"}, {"onchange":"chkCNPassNvrExpireChange"}]
						}]
					}],
					button4Panel: ["wm.Panel", {"height":"25px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"panel22.invalid","targetProperty":"disabled"}, {}]
						}],
						btnNext: ["wm.Button", {"_classes":{"domNode":["Primary"]},"border":"1","borderColor":"#265d24","caption":"Next","height":"20px","width":"100px"}, {"onclick":"layer4.show","onclick1":"layer4.activate"}]
					}]
				}],
				layer4: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Roles","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel25: ["wm.Panel", {"height":"290px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						checkboxSet5: ["wm.CheckboxSet", {"_classes":{"domNode":["bCheckboxSet"]},"border":"0","borderColor":"#ffffff","caption":" ","captionSize":"20px","dataField":"roleid","dataType":"com.etel.security.forms.TBRoleForm","displayField":"rolename","displayValue":"","emptyValue":"null","height":"100%","required":true,"styles":{}}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svGetRoles","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					button4: ["wm.Panel", {"height":"25px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						btnNext1: ["wm.Button", {"_classes":{"domNode":["Primary"]},"border":"1","borderColor":"#265d24","caption":"Save","height":"20px","width":"100px"}, {"onclick":"svValidate"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"panel18.invalid","targetProperty":"disabled"}, {}]
							}]
						}]
					}],
					resendPanel1: ["wm.Panel", {"height":"26px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":"${srvcSaveUserToDb.isEmpty}==false && ${srvcSaveUserToDb.smtpFlag}!=\"success\"","targetProperty":"showing"}, {}]
						}],
						labelResendUsercreation1: ["wm.Label", {"align":"center","padding":"0,0,0,0","styles":{},"width":"38px"}, {"onclick":"svResendPasswordUserCreation"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"\"<b><font size=\\\"5\\\" color = \\\"#FF823E\\\">&#8634\"","targetProperty":"caption"}, {}]
							}]
						}],
						labelResendUsercreation2: ["wm.Label", {"align":"right","padding":"0","styles":{"fontWeight":"bold"},"width":"265px"}, {"onclick":"svResendPasswordUserCreation"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"\"Re-send Email for User Account Creation?\"","targetProperty":"caption"}, {}]
							}]
						}]
					}]
				}]
			}]
		}],
		buttonBar3: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"60px","height":"31px"}, {}, {
			button8: ["wm.Button", {"_classes":{"domNode":["dButton"]},"border":"1","caption":"Close","height":"20px","styles":{},"width":"90px"}, {"onclick":"createNonADUser.hide"}]
		}]
	}],
	createADUser: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar4","containerWidgetId":"containerWidget1","desktopHeight":"380px","height":"380px","styles":{},"title":"<b>Setup New AD User","width":"750px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			text1Panel: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"500px"}, {}, {
				txtADSearch: ["wm.Text", {"border":"0","caption":"Search AD User:","dataValue":undefined,"displayValue":"","height":"25px","styles":{},"width":"415px"}, {"onEnterKeyPress":"svSearchADUser"}],
				btnADSearch: ["wm.Button", {"border":"1","caption":"Search","height":"20px"}, {"onclick":"svSearchADUser"}]
			}],
			panel8: ["wm.Panel", {"height":"104px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panel10: ["wm.Panel", {"height":"102px","horizontalAlign":"left","verticalAlign":"top","width":"302px"}, {}, {
					txtADUsername: ["wm.Text", {"border":"0","caption":"Username:","displayValue":"","height":"25px","readonly":true,"width":"300px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svSearchADUser.username","targetProperty":"dataValue"}, {}]
						}]
					}],
					txtADFname: ["wm.Text", {"border":"0","caption":"First Name:","displayValue":"","height":"25px","readonly":true,"width":"300px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svSearchADUser.firstname","targetProperty":"dataValue"}, {}]
						}]
					}],
					txtADLname: ["wm.Text", {"border":"0","caption":"Last Name:","displayValue":"","height":"25px","readonly":true,"width":"300px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svSearchADUser.lastname","targetProperty":"dataValue"}, {}]
						}]
					}],
					txtADEmail: ["wm.Text", {"border":"0","caption":"Email:","displayValue":"","height":"25px","readonly":true,"width":"300px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svSearchADUser.emailadd","targetProperty":"dataValue"}, {}]
						}]
					}]
				}],
				panel9: ["wm.Panel", {"height":"102px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					txtADValidDateTo1: ["wm.Date", {"border":"0","caption":"Account Validity To:","displayValue":"","emptyValue":"null","formatter":"Date","height":"25px","required":true,"width":"300px"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"grdUserList.selectedItem.validitydateto","targetProperty":"dataValue"}, {}]
						}],
						format: ["wm.DateFormatter", {}, {}]
					}],
					slcADCompany: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Company:","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}],
					slcADBranch: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Branch:","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}],
					slcADGroup: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Group:","dataValue":undefined,"displayValue":"","height":"25px","width":"300px"}, {}]
				}]
			}],
			checkboxSet6: ["wm.CheckboxSet", {"_classes":{"domNode":["bCheckboxSet"]},"border":"0","borderColor":"#ffffff","caption":" Roles","captionSize":"50px","dataType":"com.etel.security.forms.TBRoleForm","desktopHeight":"166px","displayField":"createdby","displayValue":"","emptyValue":"null","height":"166px","mobileHeight":"100%","required":true,"styles":{}}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svGetRoles","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		buttonBar4: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"31px"}, {}, {
			button5: ["wm.Button", {"_classes":{"domNode":["Primary"]},"border":"1","borderColor":"#265d24","caption":"Add","height":"20px","imageList":"app.silkIconList"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"layer5.invalid","targetProperty":"disabled"}, {}]
				}]
			}],
			button6: ["wm.Button", {"border":"1","caption":"Cancel","height":"20px"}, {"onclick":"createADUser.hide"}]
		}]
	}],
	dialogDisabledAcct: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar1","containerWidgetId":"containerWidget4","desktopHeight":"430px","height":"430px","styles":{},"title":"<b>Disabled Account","width":"650px"}, {"onClose":"svGetUserList"}, {
		containerWidget4: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"fitToContentHeight":true,"height":"361px","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			panel5: ["wm.Panel", {"height":"349px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				txtSearchUser: ["wm.Text", {"border":"0","caption":"Search User:","changeOnKey":true,"dataValue":undefined,"displayValue":"","height":"25px","placeHolder":"Search by full name or username","width":"300%"}, {"onchange":"svFilterDeletedAcct"}],
				panel6: ["wm.Panel", {"height":"322px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					dojoGrid1: ["wm.DojoGrid", {"border":"0","columns":[
{"show":true,"field":"username","title":"Username","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":false,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"firstname","title":"Firstname","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"lastname","title":"Lastname","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":false,"field":"emailadd","title":"Emailadd","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"lastIp","title":"LastIp","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"lastlogondate","title":"Lastlogondate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"lastpasswordchange","title":"Lastpasswordchange","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"isloggedon","title":"Isloggedon","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"islocked","title":"Islocked","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"isactive","title":"Isactive","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"issuspended","title":"Issuspended","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"isactivedirectorymember","title":"Isactivedirectorymember","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"invalidattemptscount","title":"Invalidattemptscount","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"validitydateto","title":"Validitydateto","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"validitydatefrom","title":"Validitydatefrom","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"validitytimeto","title":"Validitytimeto","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"validitytimefrom","title":"Validitytimefrom","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"datecreated","title":"Datecreated","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"dateupdated","title":"Dateupdated","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"createdby","title":"Createdby","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"updatedby","title":"Updatedby","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ischangepwrequired","title":"Ischangepwrequired","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"isdisabled","title":"Isdisabled","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"invalidattempip","title":"Invalidattempip","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"lastlogoutdate","title":"Lastlogoutdate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Username: \" + ${username} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Firstname: \" + ${firstname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Lastname: \" + ${lastname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Action: \" + ${wm.runtimeId}.formatCell(\"action\", ${action}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":false},
{"show":true,"field":"action","title":"Action","width":"100%","align":"center","formatFunc":"wm_button_formatter","formatProps":{"buttonclass":"dButton"},"expression":"\"Re-Enable\"","isCustomField":true,"mobileColumn":false},
{"show":false,"field":"lastsession","title":"Lastsession","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"middlename","title":"Middlename","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"pwexpirydate","title":"Pwexpirydate","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},
{"show":false,"field":"ispwneverexpire","title":"Ispwneverexpire","width":"100%","displayType":"CheckBox","align":"left","formatFunc":""},
{"show":false,"field":"companycode","title":"Companycode","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":false,"field":"groupcode","title":"Groupcode","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":false,"field":"branchcode","title":"Branchcode","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":false,"field":"terminatedsessionip","title":"Terminatedsessionip","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"datetimelockedout","title":"Datetimelockedout","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},
{"show":false,"field":"teamcode","title":"Teamcode","width":"100%","displayType":"Text","align":"left","formatFunc":""}
],"dsType":"com.los1db.data.Users","height":"320px","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {"onGridButtonClick":"svValidateMaxNoOfUserENABLE"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"svFilterDeletedAcct","targetProperty":"dataSet"}, {}]
						}]
					}]
				}]
			}]
		}],
		buttonBar1: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"31px"}, {}, {
			button2: ["wm.Button", {"border":"1","caption":"Close","height":"20px","width":"80px"}, {"onclick":"dialogDisabledAcct.hide"}]
		}]
	}],
	dialogAccountValidity: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar5","containerWidgetId":"containerWidget5","desktopHeight":"130px","height":"130px","title":"<b>Adjust Account Validity","width":"350px"}, {}, {
		containerWidget5: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
			txtDlgValidDateFrom: ["wm.Date", {"border":"0","caption":"Account Validity From:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":"Date","height":"25px","minimum":null,"required":true}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"grdUserList.selectedItem.validitydatefrom","targetProperty":"dataValue"}, {}],
					wire1: ["wm.Wire", {"expression":undefined,"source":"txtDlgValidDateTo.dataValue","targetProperty":"maximum"}, {}]
				}],
				format: ["wm.DateFormatter", {}, {}]
			}],
			txtDlgValidDateTo: ["wm.Date", {"border":"0","caption":"Account Validity To:","captionSize":"150px","datePattern":"M/d/yyyy","displayValue":"","emptyValue":"null","formatter":"Date","height":"25px","minimum":null,"required":true}, {"onchange":"txtDlgValidDateToChange"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"grdUserList.selectedItem.validitydateto","targetProperty":"dataValue"}, {}]
				}],
				format: ["wm.DateFormatter", {}, {}]
			}]
		}],
		buttonBar5: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"31px"}, {}, {
			btnSaveValidity: ["wm.Button", {"_classes":{"domNode":["Primary"]},"border":"1","borderColor":"#265d24","caption":"Save","height":"20px","width":"80px"}, {"onclick":"notSave"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"containerWidget5.invalid","targetProperty":"disabled"}, {}]
				}]
			}],
			button3: ["wm.Button", {"border":"1","caption":"Close","height":"20px"}, {"onclick":"dialogAccountValidity.hide"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","padding":"0,0,0,0","styles":{},"verticalAlign":"top"}, {}, {
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
{"show":false,"field":"instcode","title":"Instcode","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"com.los1db.data.Users","height":"90%","localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"styles":{},"width":"1025px"}, {"onClick":"grdUserListClick","onSelectionChange":"grdUserListSelectionChange"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svGetListOfUsers","targetProperty":"dataSet"}, {}]
				}]
			}]
		}]
	}]
}