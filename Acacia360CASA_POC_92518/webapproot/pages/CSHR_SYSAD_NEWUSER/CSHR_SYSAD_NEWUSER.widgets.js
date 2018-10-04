CSHR_SYSAD_NEWUSER.widgets = {
	layoutBox1: ["wm.Layout", {"height":"505px","horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"align":undefined,"caption":"USER ACCOUNT SETUP","height":"35px","padding":"4","styles":{"fontSize":"18px","fontWeight":"bolder","color":"#535050"},"width":"250px"}, {}]
			}],
			panel5: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label3: ["wm.Label", {"align":undefined,"caption":"USER DETAILS","padding":"4","styles":{"fontSize":"12px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"392px","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				panel4: ["wm.Panel", {"height":"90px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
						fUsername: ["wm.Text", {"border":"0","caption":"Username:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}],
						fPassword: ["wm.Text", {"border":"0","caption":"Password:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}],
						fLstLgnDtAndTm: ["wm.Date", {"border":"0","caption":"Last Login Date and Time:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}]
					}],
					panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
						fPssExpDt: ["wm.Date", {"border":"0","caption":"Password Expiry Date:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}],
						fUserstat: ["wm.SelectMenu", {"border":"0","caption":"User Status:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}]
					}]
				}],
				panel8: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
					label4: ["wm.Label", {"align":undefined,"caption":"USER PROFILE","padding":"4","styles":{"fontSize":"12px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
				}],
				spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
				panel9: ["wm.Panel", {"height":"90px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
						fFrstName: ["wm.Text", {"border":"0","caption":"First Name:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}],
						fMName: ["wm.Text", {"border":"0","caption":"Middle Name:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}],
						fLName: ["wm.Text", {"border":"0","caption":"Last Name:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}]
					}],
					panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
						fLgnStat: ["wm.SelectMenu", {"border":"0","caption":"Login Status:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}],
						fBrchName: ["wm.SelectMenu", {"border":"0","caption":"Branch Name:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}],
						fTlrLimit: ["wm.Text", {"border":"0","caption":"Tellers Limit:","captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"400px"}, {}]
					}]
				}],
				panel12: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
					label5: ["wm.Label", {"align":undefined,"caption":"ROLE","padding":"4","styles":{"fontSize":"12px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
				}],
				fRole: ["wm.SelectMenu", {"border":"0","caption":undefined,"captionSize":"178px","dataValue":undefined,"displayValue":"","height":"25px","width":"200px"}, {}],
				button1Panel: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"340px"}, {}, {
					button1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","width":"80px"}, {}],
					button2: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Clear","desktopHeight":"28px","height":"28px","width":"80px"}, {}]
				}]
			}]
		}]
	}]
}