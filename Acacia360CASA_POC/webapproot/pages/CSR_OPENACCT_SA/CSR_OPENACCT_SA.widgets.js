CSR_OPENACCT_SA.widgets = {
	svCheckMember: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"checkMemberNo","service":"AccountFacade"}, {"onResult":"svCheckMemberResult"}, {
		input: ["wm.ServiceInput", {"type":"checkMemberNoInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"memberno"}, {}]
			}]
		}]
	}],
	svCurrency: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getCurrency","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getCurrencyInputs"}, {}]
	}],
	svOwnershipType: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"genCodetable","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"genCodetableInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"OWNERSHIPTYPE\"","targetProperty":"codename"}, {}]
			}]
		}]
	}],
	svProdList: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getProdtype","service":"UtilFacade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getProdtypeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"20\"","targetProperty":"prodgroup"}, {}]
			}]
		}]
	}],
	svCreateAcct: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"createAccount","service":"AccountFacade"}, {"onResult":"svCreateAcctResult"}, {
		input: ["wm.ServiceInput", {"type":"createAccountInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"acctOwnrshpType.selectedItem.id","targetProperty":"dep.ownershipType"}, {}],
				wire1: ["wm.Wire", {"expression":"1","targetProperty":"dep.accountStatus"}, {}],
				wire3: ["wm.Wire", {"expression":"${acctProdType.selectedItem.id}","targetProperty":"dep.subProductCode"}, {}],
				wire2: ["wm.Wire", {"expression":"20","targetProperty":"dep.productCode"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"acctOwnrshpType.selectedItem.id","targetProperty":"dep.jointAcctType"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"dep.employeeNo"}, {}],
				wire6: ["wm.Wire", {"expression":undefined,"source":"fAcctName.dataValue","targetProperty":"dep.accountName"}, {}],
				wire7: ["wm.Wire", {"expression":undefined,"source":"app.varUnit.dataValue","targetProperty":"dep.unit"}, {}],
				wire8: ["wm.Wire", {"expression":undefined,"source":"app.varInstcode.dataValue","targetProperty":"dep.instcode"}, {}]
			}]
		}]
	}],
	notifCreateSuccess: ["wm.NotificationCall", {}, {"onOk":"notifCreateSuccessOk"}, {
		input: ["wm.ServiceInput", {"type":"alertInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Account creation successful!<br/> Account no : <b><font color='blue'>\"+${svCreateAcct.value}","targetProperty":"text"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,40,0,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"SETUP NEW ACCOUNT","height":"100%","padding":"4","styles":{"fontSize":"14px","fontWeight":"bolder","color":"#535050"},"width":"306px"}, {}]
			}],
			panel4Panel: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"0,0,0,0","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
					pnlCustDet: ["wm.Panel", {"height":"181px","horizontalAlign":"left","margin":"0,0,0,2","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
						label2Panel: ["wm.Panel", {"height":"27px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder"},"verticalAlign":"top","width":"100%"}, {}, {
							label2: ["wm.Label", {"caption":"Customer Details","margin":"0,0,0,0","padding":"4","styles":{"fontSize":"13px","fontWeight":"bolder","color":"#4c4848"},"width":"100%"}, {}]
						}],
						spacer11: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						acctProdType: ["wm.SelectMenu", {"border":"0","caption":"Product Type:","captionSize":"170px","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"370px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svProdList","targetProperty":"dataSet"}, {}]
							}]
						}],
						spacer4: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						acctOwnrshpType: ["wm.SelectMenu", {"border":"0","caption":"Ownership Type:","captionSize":"170px","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"description","displayValue":"","emptyValue":"null","height":"25px","required":true,"width":"370px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svOwnershipType","targetProperty":"dataSet"}, {}]
							}]
						}],
						spacer2: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						acctCIFIDPanel: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"372%"}, {}, {
							acctCIFID: ["wm.Text", {"border":"0","caption":"Customer CIF ID#1:","captionSize":"170px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","required":true,"styles":{},"width":"370px"}, {}],
							button5: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Search","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svCheckMember"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"pnlCustDet.invalid","targetProperty":"disabled"}, {}]
								}]
							}]
						}],
						spacer5: ["wm.Spacer", {"height":"3px","styles":{},"width":"10px"}, {}],
						acctCustFullname: ["wm.Text", {"border":"0","caption":"Customer Whole Name:","captionSize":"170px","displayValue":"","emptyValue":"null","height":"25px","margin":"0,0,0,0","styles":{},"width":"550px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svCheckMember.name","targetProperty":"dataValue"}, {}]
							}]
						}],
						panel11: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
							btnContinue: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Continue","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnContinueClick"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"${acctCustFullname.dataValue}==null","targetProperty":"disabled"}, {}]
								}]
							}],
							btnHome: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Home","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnHomeClick"}]
						}]
					}],
					pnlNewDepAcct: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
						fTxdt: ["wm.Date", {"_classes":{"domNode":["DateN"]},"border":"0","caption":"Transaction Date:","displayValue":"4/3/2018","emptyValue":"null","height":"25px","readonly":true,"width":"315px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"new Date()","targetProperty":"dataValue"}, {}]
							}]
						}],
						fCIFNo: ["wm.Text", {"border":"0","caption":"CIF No:","displayValue":"","height":"25px","readonly":true,"width":"317px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"acctCIFID.dataValue","targetProperty":"dataValue"}, {}]
							}]
						}],
						fCustName: ["wm.Text", {"border":"0","caption":"Customer Name:","displayValue":"","height":"25px","width":"419px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"acctCustFullname.dataValue","targetProperty":"dataValue"}, {}]
							}]
						}],
						fAcctName: ["wm.Text", {"border":"0","caption":"Account Name:","displayValue":"","height":"25px","width":"419px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"acctCustFullname.dataValue","targetProperty":"dataValue"}, {}]
							}]
						}],
						fDepProdName: ["wm.Text", {"border":"0","caption":"Product Name:","displayValue":"","height":"25px","readonly":true,"width":"317px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"acctProdType.selectedItem.description","targetProperty":"dataValue"}, {}]
							}]
						}],
						fCurrency: ["wm.SelectMenu", {"_classes":{"domNode":["selectMenu"]},"border":"0","caption":"Currency:","dataField":"id","dataType":"com.casa.util.forms.DescIdForm","dataValue":undefined,"displayField":"id","displayValue":"","height":"25px","width":"220px"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"svCurrency","targetProperty":"dataSet"}, {}]
							}]
						}],
						panel12: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
							btnSubmit: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"svCreateAcct"}],
							btnCancel: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Cancel","desktopHeight":"28px","height":"28px","styles":{},"width":"80px"}, {"onclick":"btnCancelClick"}]
						}]
					}]
				}]
			}]
		}]
	}]
}