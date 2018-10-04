Login.widgets = {
	svSecurityParams: ["wm.ServiceVariable", {"inFlightBehavior":undefined,"operation":"getSecurityParams","service":"SecurityFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getSecurityParamsInputs"}, {}]
	}],
	svUserStatus: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkUserStatus","service":"AuthenticationFacade"}, {"onResult":"svUserStatusResult"}, {
		input: ["wm.ServiceInput", {"type":"checkUserStatusInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"passwordInput.dataValue","targetProperty":"password"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"bridInput.dataValue","targetProperty":"brid"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"loginMainPanel","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svSuccess: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"success","service":"AuthenticationFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"successInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"loginMainPanel","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	notifChangePassMsg: ["wm.NotificationCall", {}, {"onOk":"changePassDialog.show"}, {
		input: ["wm.ServiceInput", {"type":"alertInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"<b style='text-align:center;'>On first login, you should change your password.</b>\"","targetProperty":"text"}, {}]
			}]
		}]
	}],
	svChangePass: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"changePassword","service":"SecurityFacade"}, {"onResult":"svChangePassResult"}, {
		input: ["wm.ServiceInput", {"type":"changePasswordInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"text3.dataValue","targetProperty":"password"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}]
			}]
		}]
	}],
	svValidateOldPass: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"validateOldPassword","service":"SecurityFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"validateOldPasswordInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"oldPass.dataValue","targetProperty":"password"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}]
			}]
		}]
	}],
	svValidatePass: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"validatePassword","service":"SecurityFacade"}, {"onResult":"svValidatePassResult"}, {
		input: ["wm.ServiceInput", {"type":"validatePasswordInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"newPass.dataValue","targetProperty":"password"}, {}]
			}]
		}]
	}],
	svForceLogout: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"removeADLoginToken","service":"AuthenticationFacade"}, {"onResult":"svForceLogoutResult"}, {
		input: ["wm.ServiceInput", {"type":"removeADLoginTokenInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"passwordInput.dataValue","targetProperty":"password"}, {}]
			}]
		}]
	}],
	svInvalidCount: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"failedLoginCount","service":"AuthenticationFacade"}, {"onResult":"svInvalidCountResult"}, {
		input: ["wm.ServiceInput", {"type":"failedLoginCountInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"loginInputPanel","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	notifChangePassResult: ["wm.NotificationCall", {}, {"onOk":"notifChangePassResultOk"}, {
		input: ["wm.ServiceInput", {"type":"alertInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"if(${svChangePass.flag}==\"Failed\"){${svChangePass.errorMessage}}else{\"Change Password Successful.\"}","targetProperty":"text"}, {}]
			}]
		}]
	}],
	loginSuccess: ["wm.NavigationCall", {"operation":"gotoHomePage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoHomePageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svEncryption: ["wm.ServiceVariable", {"inFlightBehavior":undefined,"operation":"encryptSha1","service":"EncryptionFacade"}, {"onResult":"svEncryptionResult"}, {
		input: ["wm.ServiceInput", {"type":"encryptSha1Inputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"passwordInput.dataValue","targetProperty":"password"}, {}]
			}]
		}]
	}],
	loginVariable1: ["wm.LoginVariable", {"inFlightBehavior":"executeLast"}, {"onResult":"loadingDialog.hide","onSuccess":"onLoginSuccess"}, {
		input: ["wm.ServiceInput", {"type":"loginInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"svEncryption.dataValue","targetProperty":"password"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"hashInput.dataValue","targetProperty":"hash"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"loginMainPanel","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	varLoginType: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Non - Active Directory\",\"dataValue\":\"NONAD\"}]","type":"EntryData"}, {}],
	svAuthenticateAD: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"autheticateUser","service":"AuthenticationFacade"}, {"onResult":"svAuthenticateADResult"}, {
		input: ["wm.ServiceInput", {"type":"autheticateUserInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"passwordInput.dataValue","targetProperty":"password"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"loginMainPanel","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	svExistingSession: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"existingSession","service":"AuthenticationFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"existingSessionInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}]
			}]
		}]
	}],
	svGetUserAgreeMessage: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getUserAgreementMessage","service":"SecurityFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserAgreementMessageInputs"}, {}]
	}],
	svRequestPasswordRequest: ["wm.ServiceVariable", {"operation":"requestPassReset","service":"AuthenticationFacade"}, {"onResult":"svRequestPasswordRequestResult"}, {
		input: ["wm.ServiceInput", {"type":"requestPassResetInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"txtUsernameRequestInput.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"txtEmailRequestInput.dataValue","targetProperty":"emailAdd"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"dlgRequestPasswordReset","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	varBRID: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"FB-Makati Branch\",\"dataValue\":\"0001\"},{\"name\":\"FB-Head Office\",\"dataValue\":\"0000\"}]","type":"EntryData"}, {}],
	loadingDialog: ["wm.LoadingDialog", {"_classes":{"domNode":["rounded"]},"caption":"Logging in","captionWidth":"100px","styles":{}}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"loginInputPanel","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	userAgreementDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"220px","height":"220px","positionNear":"loginInputPanel","styles":{},"title":"User Responsibility Agreement","titlebarHeight":"40","width":"400px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#f1f1f1"},"verticalAlign":"top","width":"100%"}, {}, {
			label1: ["wm.Label", {"align":"justify","height":"100%","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"svGetUserAgreeMessage.dataValue","targetProperty":"caption"}, {}]
				}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"black","desktopHeight":"41px","height":"39px","mobileHeight":"41px","styles":{}}, {}, {
			btnAgreeUserAgreement: ["wm.Button", {"border":"1","caption":"Agree","desktopHeight":"28px","height":"28px","margin":"0,4,0,0","styles":{"borderRadius":"0px"}}, {"onclick":"userAgreementDialog.hide","onclick2":"btnAgreeUserAgreementClick2"}],
			button2: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"28px","height":"28px","margin":"0","styles":{"borderRadius":"0px"}}, {"onclick":"userAgreementDialog.hide"}]
		}]
	}],
	changePassDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","desktopHeight":"250px","height":"250px","positionNear":"loginInputPanel","styles":{},"title":"Change Password","titlebarHeight":"40","width":"300px"}, {"onShow":"changePassDialogShow"}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"center","padding":"5","styles":{"backgroundColor":"#f1f1f1"},"verticalAlign":"middle","width":"100%"}, {}, {
			oldPass: ["wm.Text", {"border":"0","caption":"Old Password: ","captionSize":"150px","dataValue":undefined,"displayValue":"","height":"25px","password":true,"required":true,"styles":{}}, {"onchange":"svValidateOldPass"}],
			lblIncorrect: ["wm.Label", {"align":"center","padding":"4","styles":{"color":"#ba5151","fontSize":"11px","fontWeight":"bold","fontStyle":"italic"},"width":"100%"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"if(${svValidateOldPass.dataValue}==\"failed\"){\"Old password is incorrect!\"}else{\" \"}","targetProperty":"caption"}, {}],
					wire1: ["wm.Wire", {"expression":"${svValidateOldPass.dataValue}==\"failed\"","targetProperty":"showing"}, {}]
				}]
			}],
			newPass: ["wm.Text", {"border":"0","caption":"New Password: ","captionSize":"150px","changeOnKey":true,"dataValue":undefined,"displayValue":"","height":"25px","password":true,"required":true,"styles":{}}, {"onchange":"newPassChange"}],
			text3: ["wm.Text", {"border":"0","caption":"Confirm Password: ","captionSize":"150px","changeOnKey":true,"dataValue":undefined,"displayValue":"","height":"25px","password":true,"required":true,"styles":{}}, {"onchange":"text3Change"}],
			label3Panel: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				label4: ["wm.Label", {"caption":"Password Strength:","padding":"4","styles":{"fontSize":"11px","fontWeight":"bold","fontStyle":"italic","color":"#747e72"},"width":"151px"}, {}],
				label3: ["wm.Label", {"caption":"","padding":"4","styles":{"fontStyle":"italic","fontSize":"11px"},"width":"100%"}, {}]
			}],
			lblNotMatch: ["wm.Label", {"align":"center","caption":"","padding":"4","styles":{"color":"#ba5151","fontSize":"11px","fontWeight":"bold"},"width":"100%"}, {}]
		}],
		buttonBar1: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"black","fitToContentHeight":false,"margin":"0,0,0,0","padding":"0,15,0,0","styles":{},"verticalAlign":"middle"}, {}, {
			btnCloseChangePass: ["wm.Button", {"border":"1","caption":"Close","desktopHeight":"28px","height":"28px","margin":"4","styles":{"borderRadius":"0px"},"width":"60px"}, {"onclick":"changePassDialog.hide"}],
			button3: ["wm.Button", {"border":"1","caption":"Change Password","desktopHeight":"28px","height":"28px","margin":"4","styles":{"borderRadius":"0px"},"width":"125px"}, {"onclick":"button3Click"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"if(${svValidateOldPass.dataValue}==\"matched\")\nfalse\nelse\ntrue","targetProperty":"disabled"}, {}]
				}]
			}]
		}]
	}],
	dlgRequestPasswordReset: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar3","containerWidgetId":"containerWidget3","desktopHeight":"190px","height":"190px","positionNear":"loginInputPanel","styles":{},"title":"Request for Password Reset","width":"350px"}, {}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			label12: ["wm.Label", {"border":"1","borderColor":"#a9e885","caption":"asdf","height":"45px","margin":"0,0,10,0","padding":"4","showing":false,"singleLine":false,"styles":{"fontSize":"11px","backgroundColor":"#c2f2c3","color":"#38a457"},"width":"100%"}, {}],
			label10: ["wm.Label", {"border":"1","borderColor":"#d1d1d1","caption":"Please provide the following information and click Submit Request.","height":"37px","margin":"0,0,10,0","padding":"4","styles":{"fontSize":"11px","backgroundColor":"#f1f1f1"},"width":"100%"}, {}],
			label11: ["wm.Label", {"border":"1","borderColor":"#e98585","caption":"Invalid username or email address. Please try again.","height":"37px","margin":"0,0,10,0","padding":"4","showing":false,"styles":{"fontSize":"11px","backgroundColor":"#f3c3ce","color":"#941616"},"width":"100%"}, {}],
			txtUsernameRequestInput: ["wm.Text", {"border":"0","caption":"Username:","dataValue":undefined,"displayValue":"","height":"25px","styles":{}}, {}],
			txtEmailRequestInput: ["wm.Text", {"border":"0","caption":"Email Address:","dataValue":undefined,"displayValue":"","height":"25px","styles":{}}, {}]
		}],
		buttonBar3: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"31px"}, {}, {
			btnSubmitRequest: ["wm.Button", {"border":"1","caption":"Submit Request","height":"20px","width":"118px"}, {"onclick":"svRequestPasswordRequest"}],
			btnCloseRequestDlg: ["wm.Button", {"border":"1","caption":"Close","height":"20px","styles":{},"width":"80px"}, {"onclick":"dlgRequestPasswordReset.hide","onclick1":"btnCloseRequestDlgClick1"}]
		}]
	}],
	dlgExistingSession: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","desktopHeight":"165px","height":"165px","positionNear":"loginInputPanel","styles":{},"title":"Warning!","width":"315px"}, {}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#f1f1f1"},"verticalAlign":"top","width":"100%"}, {}, {
			label2Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				labelExistingSession: ["wm.Label", {"align":"center","height":"70px","padding":"15,0,0,0","singleLine":false,"styles":{"fontWeight":"bold"},"width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"\"Existing session detected.<br>Do you want to terminate the other session?\"","targetProperty":"caption"}, {}]
					}]
				}]
			}]
		}],
		buttonBar2: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"black","desktopHeight":"41px","height":"39px"}, {}, {
			btnExistSessionProceed: ["wm.Button", {"border":"1","caption":"Proceed","desktopHeight":"28px","height":"28px","margin":"0,4,0,0","styles":{"borderRadius":"0px"}}, {"onclick":"svExistingSession","onclick1":"loginVariable1"}],
			button5: ["wm.Button", {"border":"1","caption":"Cancel","desktopHeight":"28px","height":"28px","margin":"0","styles":{"borderRadius":"0px"}}, {"onclick":"dlgExistingSession.hide"}]
		}]
	}],
	dlgPasswordExpire: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar4","containerWidgetId":"containerWidget2","desktopHeight":"165px","height":"165px","positionNear":"loginInputPanel","styles":{},"title":"Warning!","width":"315px"}, {}, {
		containerWidget4: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","styles":{"backgroundColor":"#f1f1f1"},"verticalAlign":"top","width":"100%"}, {}, {
			label2: ["wm.Panel", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
				labelPasswordExpire: ["wm.Label", {"align":"center","height":"70px","padding":"15,0,0,0","singleLine":false,"styles":{"fontWeight":"bold"},"width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"\"Your password will expire in 5 days. Please change your password or your account will soon be suspended.\"","targetProperty":"caption"}, {}]
					}]
				}]
			}]
		}],
		buttonBar4: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"black","desktopHeight":"41px","height":"39px"}, {}, {
			button8: ["wm.Button", {"border":"1","caption":"Ok","desktopHeight":"28px","height":"28px","margin":"4","styles":{"borderRadius":"0px"}}, {"onclick":"dlgExistingSession.hide","onclick1":"loginVariable1"}]
		}]
	}],
	layoutBox: ["wm.Layout", {"horizontalAlign":"center","styles":{}}, {}, {
		btmPanel1: ["wm.Panel", {"height":"52px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,0","styles":{"backgroundColor":"#535c69"},"verticalAlign":"middle","width":"100%"}, {}, {
			panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","padding":"0,0,0,10","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				picture2: ["wm.Picture", {"aspect":"v","height":"55px","source":"resources/images/Acacia360.png","styles":{},"width":"121px"}, {}]
			}],
			label6Panel: ["wm.Panel", {"height":"50px","horizontalAlign":"left","styles":{},"verticalAlign":"middle","width":"309px"}, {}, {
				label6: ["wm.Label", {"align":"right","caption":"CBS","link":undefined,"padding":"4","styles":{"fontWeight":"bold","color":"#ffffff","fontSize":"17px"},"width":"100%"}, {}],
				label8: ["wm.Label", {"align":"right","caption":"Version 2.0","link":undefined,"padding":"4","styles":{"fontWeight":"bold","color":"#d1d1d1","fontSize":"10px"},"width":"100%"}, {}]
			}]
		}],
		loginMainPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","styles":{"backgroundColor":"#e1e1e1"},"verticalAlign":"middle","width":"100%"}, {}, {
			label7: ["wm.Label", {"align":"center","caption":"Welcome!","height":"49px","padding":"4","styles":{"fontWeight":"bold","fontSize":"18px","backgroundColor":"#6d7f8d","color":"#ffffff","borderRadius":"5px 5px 0px 0px"},"width":"319px"}, {}],
			loginInputPanel: ["wm.HeaderContentPanel", {"_classes":{"domNode":["rounded"]},"desktopHeight":"298px","deviceType":null,"enableTouchHeight":true,"fitToContentHeight":true,"height":"235px","horizontalAlign":"center","margin":"0,0,0,0","mobileHeight":"290px","padding":"10","styles":{"color":"","backgroundColor":"#ffffff","borderRadius":"0px 0px 5px 5px"},"verticalAlign":"top","width":"319px"}, {}, {
				panel2: ["wm.Panel", {"height":"68px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
					pctrCompanyLogo: ["wm.Picture", {"aspect":"h","height":"54px","source":"resources/images/Acacia360.png","styles":{},"width":"255px"}, {}]
				}],
				panel1: ["wm.Panel", {"fitToContentHeight":true,"height":"95px","horizontalAlign":"left","padding":"4","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					selectLoginType: ["wm.SelectMenu", {"border":"0","caption":"selectMenu1","captionSize":"0px","dataField":"dataValue","dataType":"EntryData","dataValue":"NONAD","displayField":"name","displayValue":"Non - Active Directory","height":"25px","showing":false,"styles":{}}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"varLoginType","targetProperty":"dataSet"}, {}]
						}]
					}],
					usernameInput: ["wm.Text", {"_classes":{"domNode":["cText"]},"border":"0","caption":undefined,"captionAlign":"center","dataValue":undefined,"desktopHeight":"40px","displayValue":"","height":"40px","placeHolder":"username","required":true,"styles":{}}, {"onEnterKeyPress":"usernameInputEnterKeyPress"}],
					spacer1: ["wm.Spacer", {"height":"5px","width":"100%"}, {}],
					passwordInput: ["wm.Text", {"_classes":{"domNode":["cText"]},"border":"0","caption":undefined,"dataValue":undefined,"desktopHeight":"40px","displayValue":"","height":"40px","password":true,"placeHolder":"password","required":true,"styles":{}}, {"onEnterKeyPress":"btnLoginClick"}],
					hashInput: ["wm.Text", {"border":"0","dataValue":"#{%22studio%22:{%22pageName%22:%22DocumentaryChecklistLA%22,%22projectName%22:%22SLA_BACKOFFICE%22,%22deviceType%22:%22desktop%22},%22studio.sourceTabs%22:8}","displayValue":"#{%22studio%22:{%22pageName%22:%22DocumentaryChecklistLA%22,%22projectName%22:%22SLA_BACKOFFICE%22,%22deviceType%22:%22desktop%22},%22studio.sourceTabs%22:8}","height":"25px","showing":false}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"6","styles":{},"width":"100%"}, {}, {
					loginErrorMsg: ["wm.Label", {"align":"center","caption":"","height":"100%","padding":"2","singleLine":false,"styles":{"fontSize":"10px","color":"#df5126","fontWeight":"bold","textAlign":"left"},"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					btnLogin: ["wm.Button", {"_classes":{"domNode":["login"]},"border":"0","caption":"Login","desktopHeight":"45px","height":"45px","margin":"undefined","mobileHeight":"45%","padding":"undefined","styles":{"fontSize":"15px"},"width":"87px"}, {"onclick":"btnLoginClick"}]
				}]
			}],
			panel4: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","showing":false,"styles":{},"verticalAlign":"top","width":"319px"}, {}, {
				label9: ["wm.Label", {"caption":"<u>Forgot password?","padding":"4","styles":{"color":"#6d7f8d"}}, {"onclick":"dlgRequestPasswordReset.show"}]
			}]
		}],
		btmPanel: ["wm.Panel", {"height":"60px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundColor":"#333333"},"verticalAlign":"middle","width":"100%"}, {}, {
			label5: ["wm.Label", {"align":"center","caption":"<html><font color = #a1a1a1>© Copyright 2017&nbsp&nbsp&nbsp<a href=\"http://www.eteligent.com.ph/\" target=\"_blank\"><font color = #f1f1f1>Eteligent Software Solutions Inc.</a></html>","link":undefined,"padding":"4","styles":{"fontWeight":"normal"},"width":"369px"}, {}]
		}]
	}]
}