package com.casa.acct;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.lang.annotation.Annotation;
import java.math.BigDecimal;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.cloudfoundry.org.codehaus.jackson.map.ObjectMapper;
import org.springframework.web.bind.annotation.RequestBody;

import com.casa.acct.forms.AccountClosureForm;
import com.casa.acct.forms.AccountClosureFormDetail;
import com.casa.acct.forms.AccountCreationForm;
import com.casa.acct.forms.AccountGenericForm;
import com.casa.acct.forms.AccountMaintenanceForm;
import com.casa.acct.forms.InquiryCIFNameList;
import com.casa.acct.forms.MaturedAccountActionForm;
import com.casa.acct.forms.MaturedAccountHandler;
import com.casa.acct.forms.PlaceHoldForm;
import com.casa.acct.forms.PlaceHoldFormHandler;
import com.casa.acct.forms.StopPaymentOrderForm;
import com.casa.acct.forms.StopPaymentOrderHandler;
import com.casa.acct.forms.TimeDepositAccountDetailForm;
import com.casa.acct.forms.TimeDepositCertForm;
import com.casa.acct.forms.TimeDepositCertFormHandler;
import com.casa.acct.forms.TimeDepositListForm;
//import com.casa.fintx.forms.AccountCheckForm;
//import com.casa.fintx.forms.AccountInquiryMainForm;
//import com.casa.user.forms.UserInfoForm;
import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
//import com.etel.util.ConfigPropertyUtil;
//import com.etel.util.Connection;
import com.etel.util.HQLUtil;
import com.gldb.data.Tbdeposit;
import com.gldb.data.Tbdepositcif;
import com.gldb.data.Tbholdamtcheck;
import com.gldb.data.Tbprodmatrix;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.security.SecurityService;

public class AccountServiceImpl implements AccountService {

	DBService dbService = new DBServiceImpl();
	Map<String, Object> param = HQLUtil.getMap();
	SecurityService service = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");
//	private static boolean check = Connection.connectionCheck();
//	private String wsurl = ConfigPropertyUtil.getPropertyValue("ws_url");

//	@Override
//	public AccountGenericForm createAccount(Tbdeposit dep, List<Tbdepositcif> ciflist) {
//		// TODO Auto-generated method stub
//		/***
//		 * RESULT 0/999 = Error 1 = Success
//		 ***/
//		AccountGenericForm form = new AccountGenericForm();
//		form.setResult(0);
//		try {
//			if (check) {
//				dep.setCreatedBy(service.getUserId());
//				URL url = new URL(wsurl+"/csr/create-account");
//				HttpURLConnection con = (HttpURLConnection) url.openConnection();
//				con.setDoOutput(true);
//				con.setRequestMethod("POST");
//				con.setRequestProperty("Content-Type", "application/json");
//				ObjectMapper mapper = new ObjectMapper();
//				AccountCreationForm txform = new AccountCreationForm();
//				txform.setTbdeposit(dep);
//				txform.setCiflist(ciflist);
//				String jsonData = mapper.writeValueAsString(txform);
//				OutputStream os = con.getOutputStream();
//				os.write(jsonData.getBytes());
//				os.flush();
//				if (con.getResponseCode() != HttpURLConnection.HTTP_ACCEPTED) {
//					form.setResult(0);
//				} else {
//					BufferedReader in = new BufferedReader(new InputStreamReader((con.getInputStream())));
//					form = mapper.readValue(in.readLine(), AccountGenericForm.class);
//				}
//				con.disconnect();
//			} else {
//				form.setResult(503);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return form;
//	}

//	@Override
//	public AccountGenericForm rolloverTimeDepositAccount(Tbdeposit dep) {
//		// TODO Auto-generated method stub
//		/***
//		 * RESULT 0/999 = Error 1 = Success
//		 ***/
//		AccountGenericForm form = new AccountGenericForm();
//		form.setResult(0);
//		try {
//			if (check) {
//				dep.setCreatedBy(service.getUserId());
//				URL url = new URL(wsurl+"/csr/rollover-account");
//				HttpURLConnection con = (HttpURLConnection) url.openConnection();
//				con.setDoOutput(true);
//				con.setRequestMethod("POST");
//				con.setRequestProperty("Content-Type", "application/json");
//				ObjectMapper mapper = new ObjectMapper();
//				String jsonData = mapper.writeValueAsString(dep);
//				OutputStream os = con.getOutputStream();
//				os.write(jsonData.getBytes());
//				os.flush();
//				if (con.getResponseCode() != HttpURLConnection.HTTP_ACCEPTED) {
//					form.setResult(0);
//				} else {
//					BufferedReader in = new BufferedReader(new InputStreamReader((con.getInputStream())));
//					form = mapper.readValue(in.readLine(), AccountGenericForm.class);
//				}
//				con.disconnect();
//			} else {
//				form.setResult(503);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return form;
//	}

	@Override
	public AccountGenericForm checkAccount(String accountno) {
		// TODO Auto-generated method stub
		/***
		 * RESULT 0 = Error 1 = Success
		 ***/
		AccountGenericForm form = new AccountGenericForm();
		try {
			form.setResult(0);
			param.put("accountno", accountno);
			Integer chk = (Integer) dbService.execStoredProc(
					"SELECT COUNT(*) FROM TBDEPOSIT " + "WHERE AccountNo=:accountno", param, null, 0, null);
			if (chk > 0) {
				form.setResult(1);
				form.setValue(accountno);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

//	@Override
//	public AccountMaintenanceForm acctInfo(String accountno) {
//		// TODO Auto-generated method stub
//		AccountMaintenanceForm form = new AccountMaintenanceForm();
//		try {
//			if (check) {
//				String url = wsurl+"/csr/account-maintenance/detail/" + accountno;
//				URL obj = new URL(url);
//				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
//				con.setRequestMethod("GET");
//				System.out.println("Response Code : " + con.getResponseCode());
//				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
//					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//					ObjectMapper mapper = new ObjectMapper();
//					form = mapper.readValue(in.readLine(), AccountMaintenanceForm.class);
//				}
//				con.disconnect();
//			} else {
//				form.setAcctsts(503);
//			}
//			// param.put("accountno", accountno);
//			// form = (AccountMaintenanceForm) dbService.execStoredProc("SELECT tb.AccountNo
//			// as accountno, "
//			// + "tb.AccountName AS name, tb.AccountStatus as acctsts, "
//			// + "tb.BookDate as dtopened, cd.desc1 as jointaccttype,
//			// SUBSTRING(AccountName,1,10) AS shortname, "
//			// + "tb.Posttx as posttx FROM TBDEPOSIT tb JOIN TBCODETABLE cd " + "ON
//			// tb.OwnershipType=cd.codevalue "
//			// + "WHERE AccountNo=:accountno AND cd.codename='OWNERSHIPTYPE'", param,
//			// AccountMaintenanceForm.class,
//			// 0, null);
//			// System.out.println(form.getAccountno() + " " + form.getAcctsts() + " " +
//			// form.getJointaccttype());
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return form;
//	}

//	@Override
//	public AccountGenericForm acctSave(AccountMaintenanceForm form) {
//		// TODO Auto-generated method stub
//		/***
//		 * RESULT 0 = Error 1 = Success
//		 ***/
//		AccountGenericForm rtrnform = new AccountGenericForm();
//		rtrnform.setResult(0);
//		try {
//			if (check) {
//				param.put("status", form.getAcctsts());
//				param.put("posttx", form.getPosttx());
//				param.put("acctno", form.getAccountno());
//				param.put("statusdate", form.getDtopened());
//				param.put("alertflag", form.getAlertflag());
//				param.put("alertlevel", form.getAlertflag() == 0 ? 0 : form.getAlertlevel());
//				param.put("alertmessage", form.getAlertflag() == 0 ? "" : form.getAlertmessage());
//				ObjectMapper mapper = new ObjectMapper();
//				String jsonData = mapper.writeValueAsString(param);
//				System.out.println(jsonData);
//				String url = wsurl+"/csr/account-maintenance/update";
//				URL obj = new URL(url);
//				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
//				con.setRequestMethod("PUT");
//				con.setDoOutput(true);
//				con.setRequestProperty("Content-Type", "application/json");
//				con.setRequestProperty("Accept", "application/json");
//				OutputStream os = con.getOutputStream();
//				os.write(jsonData.getBytes());
//				os.flush();
//				System.out.println("Response Code : " + con.getResponseCode());
//				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
//					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//					rtrnform = mapper.readValue(in.readLine(), AccountGenericForm.class);
//				}
//				con.disconnect();
//			} else {
//				rtrnform.setResult(503);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return rtrnform;
//	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbprodmatrix> getProdList(String prodgroup) {
		// TODO Auto-generated method stub
		List<Tbprodmatrix> list = new ArrayList<Tbprodmatrix>();
		try {
			param.put("prodgroup", prodgroup);
			list = (List<Tbprodmatrix>) dbService.execStoredProc(
					"SELECT * FROM TBPRODMATRIX WHERE prodgroup=:prodgroup", param, Tbprodmatrix.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

//	@Override
//	public AccountClosureForm getAcctClosure(String accountno) {
//		// TODO Auto-generated method stub
//		AccountClosureForm form = new AccountClosureForm();
//		try {
//			if (check) {
//				String strUrl = wsurl+"/csr/account-close/view/" + accountno;
//				URL url = new URL(strUrl);
//				HttpURLConnection con = (HttpURLConnection) url.openConnection();
//				con.setDoOutput(true);
//				con.setRequestMethod("GET");
//				System.out.println("Response Code : " + con.getResponseCode());
//				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
//					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//					ObjectMapper mapper = new ObjectMapper();
//					form = mapper.readValue(in.readLine(), AccountClosureForm.class);
//				}
//				con.disconnect();
//			} else {
//				form.setAccountstatus("503");
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return form;
//	}

//	@Override
//	public AccountGenericForm acctClose(String accountno) {
//		// TODO Auto-generated method stub
//		/***
//		 * RESULT 0 = Error 1 = Success
//		 ***/
//		AccountGenericForm form = new AccountGenericForm();
//		form.setResult(0);
//		try {
//			if (check) {
//				param.put("accountno", accountno);
//				ObjectMapper mapper = new ObjectMapper();
//				String jsonData = mapper.writeValueAsString(param);
//				System.out.println(jsonData);
//				String url = wsurl+"/csr/account-close/close";
//				URL obj = new URL(url);
//				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
//				con.setRequestMethod("PUT");
//				con.setDoOutput(true);
//				con.setRequestProperty("Content-Type", "application/json");
//				con.setRequestProperty("Accept", "application/json");
//				OutputStream os = con.getOutputStream();
//				os.write(jsonData.getBytes());
//				os.flush();
//				System.out.println("Response Code : " + con.getResponseCode());
//				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
//					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//					form = mapper.readValue(in.readLine(), AccountGenericForm.class);
//				}
//				con.disconnect();
//			} else {
//				form.setResult(503);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return form;
//	}

//	@Override
//	public AccountGenericForm placeHoldAmt(Tbholdamtcheck record) {
//		// TODO Auto-generated method stub
//		/*
//		 * flag return values 0 = account not found/exist 1 = success 2 = insufficient
//		 * balance 3 = error in routine
//		 */
//		AccountGenericForm form = new AccountGenericForm();
//		try {
//			if (check) {
//				URL url = new URL(wsurl+"/csr/placehold-amount");
//				HttpURLConnection con = (HttpURLConnection) url.openConnection();
//				con.setDoOutput(true);
//				con.setRequestMethod("POST");
//				con.setRequestProperty("Content-Type", "application/json");
//				ObjectMapper mapper = new ObjectMapper();
//				String jsonData = mapper.writeValueAsString(record);
//				OutputStream os = con.getOutputStream();
//				os.write(jsonData.getBytes());
//				os.flush();
//				if (con.getResponseCode() != HttpURLConnection.HTTP_ACCEPTED) {
//					form.setResult(3);
//				} else {
//					BufferedReader in = new BufferedReader(new InputStreamReader((con.getInputStream())));
//					form = mapper.readValue(in.readLine(), AccountGenericForm.class);
//				}
//				con.disconnect();
//			} else {
//				form.setResult(503);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//			form.setResult(3);
//		}
//		return form;
//	}

//	@Override
//	public List<PlaceHoldForm> getHoldAmtList(String accountno) {
//		// TODO Auto-generated method stub
//		List<PlaceHoldForm> list = new ArrayList<PlaceHoldForm>();
//		try {
//			if (check) {
//				String strUrl = wsurl+"/csr/holdamount/";
//				strUrl = accountno == null ? strUrl + "all" : strUrl + accountno;
//				URL url = new URL(strUrl);
//				HttpURLConnection con = (HttpURLConnection) url.openConnection();
//				con.setDoOutput(true);
//				con.setRequestMethod("GET");
//				System.out.println("Response Code : " + con.getResponseCode());
//				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
//					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//					ObjectMapper mapper = new ObjectMapper();
//					PlaceHoldFormHandler form = new PlaceHoldFormHandler();
//					form = mapper.readValue(in.readLine(), PlaceHoldFormHandler.class);
//					list = form.getList();
//				}
//				con.disconnect();
//			} else {
//				System.out.println("getHoldAmyList : 503");
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return list;
//	}

//	@Override
//	public AccountGenericForm liftHoldAmt(int id, String liftreason, Date businessdt) {
//		// TODO Auto-generated method stub
//		AccountGenericForm form = new AccountGenericForm();
//		form.setResult(0);
//		try {
//			if (check) {
//				param.put("id", id);
//				param.put("liftreason", liftreason);
//				param.put("userid", service.getUserId());
//				param.put("busidt", businessdt);
//				ObjectMapper mapper = new ObjectMapper();
//				String jsonData = mapper.writeValueAsString(param);
//				System.out.println(jsonData);
//				String url = wsurl+"/csr/lift-holdamount";
//				URL obj = new URL(url);
//				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
//				con.setRequestMethod("PUT");
//				con.setDoOutput(true);
//				con.setRequestProperty("Content-Type", "application/json");
//				con.setRequestProperty("Accept", "application/json");
//				OutputStream os = con.getOutputStream();
//				os.write(jsonData.getBytes());
//				os.flush();
//				System.out.println("Response Code : " + con.getResponseCode());
//				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
//					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//					form = mapper.readValue(in.readLine(), AccountGenericForm.class);
//				}
//				con.disconnect();
//			} else {
//				form.setResult(503);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return form;
//	}

	@SuppressWarnings("unchecked")
	@Override
	public List<TimeDepositListForm> getTimeDepAcctList(String accountno) {
		// TODO Auto-generated method stub
		List<TimeDepositListForm> list = new ArrayList<TimeDepositListForm>();
		try {
			if (accountno == null) {
				list = (List<TimeDepositListForm>) dbService.execStoredProc(
						"SELECT AccountBalance AS accountbal, AccountName as accountname, AccountNo as accountno, "
								+ "Maturitydate AS matdt, Term AS term FROM TBDEPOSIT "
								+ "WHERE ProductCode='30' AND (PlacementAmt > 0 OR PlacementAmt > AccountBalance)",
						null, TimeDepositListForm.class, 1, null);
			} else {
				param.put("accountno", accountno);
				list = (List<TimeDepositListForm>) dbService.execStoredProc(
						"SELECT AccountBalance AS accountbal, AccountName as accountname, AccountNo as accountno, "
								+ "Maturitydate AS matdt, Term AS term FROM TBDEPOSIT "
								+ "WHERE ProductCode='30' AND AccountNo=:accountno",
						param, TimeDepositListForm.class, 1, null);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public TimeDepositAccountDetailForm getTimeDepAcctDet(String accountno) {
		// TODO Auto-generated method stub
		TimeDepositAccountDetailForm form = new TimeDepositAccountDetailForm();
		try {
			param.put("accountno", accountno);
			form = (TimeDepositAccountDetailForm) dbService.execStoredProc(""
					+ "SELECT tb.IntRate AS intrate, tb.LessWTaxAmt AS lesswtax, tb.MatAmt AS matamt, tb.BookDate AS opendt, "
					+ "tb.PlacementAmt AS placementamt, cd.desc1 AS status, tb.WTAXRate AS taxrate "
					+ "FROM TBDEPOSIT tb JOIN TBCODETABLE cd ON cd.codevalue=CONVERT(VARCHAR(1), tb.AccountStatus) "
					+ "WHERE AccountNo=:accountno AND cd.codename='CASA-ACCTSTS' ", param,
					TimeDepositAccountDetailForm.class, 0, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

//	@Override
//	public List<Tbdeposit> getTimeDepMatAcctList(String accountno) {
//		// TODO Auto-generated method stub
//		List<Tbdeposit> list = new ArrayList<Tbdeposit>();
//		try {
//			if (check) {
//				String strUrl = wsurl+"/csr/matured-account/";
//				strUrl = accountno == null ? strUrl + "all" : strUrl + accountno;
//				URL url = new URL(strUrl);
//				HttpURLConnection con = (HttpURLConnection) url.openConnection();
//				con.setDoOutput(true);
//				con.setRequestMethod("GET");
//				System.out.println("Response Code : " + con.getResponseCode());
//				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
//					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//					ObjectMapper mapper = new ObjectMapper();
//					MaturedAccountHandler form = new MaturedAccountHandler();
//					form = mapper.readValue(in.readLine(), MaturedAccountHandler.class);
//					list = form.getMaturedlist();
//				}
//				con.disconnect();
//			} else {
//				System.out.println("getTimeDepMatAcctList : 503");
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return list;
//	}

	@Override
	public AccountGenericForm submitMatAcctAction(MaturedAccountActionForm form) {
		// TODO Auto-generated method stub
		return null;
	}

//	@Override
//	public AccountGenericForm placeHoldCheck(Tbholdamtcheck record) {
//		// TODO Auto-generated method stub
//		/*
//		 * flag return values 0 = account not found/exist 1 = success 2 = error in
//		 * routine
//		 */
//		AccountGenericForm form = new AccountGenericForm();
//		try {
//			if (check) {
//				URL url = new URL(wsurl+"/csr/place-spo");
//				HttpURLConnection con = (HttpURLConnection) url.openConnection();
//				con.setDoOutput(true);
//				con.setRequestMethod("POST");
//				con.setRequestProperty("Content-Type", "application/json");
//				ObjectMapper mapper = new ObjectMapper();
//				String jsonData = mapper.writeValueAsString(record);
//				OutputStream os = con.getOutputStream();
//				os.write(jsonData.getBytes());
//				os.flush();
//				if (con.getResponseCode() != HttpURLConnection.HTTP_ACCEPTED) {
//					form.setResult(3);
//				} else {
//					BufferedReader in = new BufferedReader(new InputStreamReader((con.getInputStream())));
//					form = mapper.readValue(in.readLine(), AccountGenericForm.class);
//				}
//				con.disconnect();
//			} else {
//				form.setResult(503);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//			form.setResult(3);
//		}
//		return form;
//	}

//	@Override
//	public List<StopPaymentOrderForm> spoList(String accountno) {
//		// TODO Auto-generated method stub
//		List<StopPaymentOrderForm> list = null;
//		try {
//			if (check) {
//				String strUrl = wsurl+"/csr/spo-list/";
//				strUrl = accountno == null ? strUrl + "all" : strUrl + accountno;
//				URL url = new URL(strUrl);
//				HttpURLConnection con = (HttpURLConnection) url.openConnection();
//				con.setDoOutput(true);
//				con.setRequestMethod("GET");
//				System.out.println("Response Code : " + con.getResponseCode());
//				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
//					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//					ObjectMapper mapper = new ObjectMapper();
//					StopPaymentOrderHandler form = new StopPaymentOrderHandler();
//					form = mapper.readValue(in.readLine(), StopPaymentOrderHandler.class);
//					list = form.getList();
//				}
//				con.disconnect();
//			} else {
//				System.out.println("spoList : 503");
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return list;
//	}

//	@Override
//	public AccountGenericForm liftSPO(int id, String liftreason, Date businessdt) {
//		// TODO Auto-generated method stub
//		AccountGenericForm form = new AccountGenericForm();
//		form.setResult(0);
//		try {
//			if (check) {
//				param.put("id", id);
//				param.put("liftreason", liftreason);
//				param.put("userid", service.getUserId());
//				param.put("busidt", businessdt);
//				ObjectMapper mapper = new ObjectMapper();
//				String jsonData = mapper.writeValueAsString(param);
//				String url = wsurl+"/csr/lift-spo";
//				URL obj = new URL(url);
//				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
//				con.setRequestMethod("PUT");
//				con.setDoOutput(true);
//				con.setRequestProperty("Content-Type", "application/json");
//				con.setRequestProperty("Accept", "application/json");
//				OutputStream os = con.getOutputStream();
//				os.write(jsonData.getBytes());
//				os.flush();
//				System.out.println("Response Code : " + con.getResponseCode());
//				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
//					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//					form = mapper.readValue(in.readLine(), AccountGenericForm.class);
//					// result = in.readLine().equalsIgnoreCase("success") ? "1" : "0";
//				}
//				con.disconnect();
//			} else {
//				form.setResult(503);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return form;
//	}

	@Override
	public String createNewProduct(Tbprodmatrix input) {
		// TODO Auto-generated method stub
		/***
		 * RESULT 0 = Error 1 = Already Existing 2 = Success
		 ***/
		String result = "0";
		try {
			param.put("prodgroup", input.getProdgroup());
			param.put("prodcode", input.getProdcode());
			param.put("prodname", input.getProdname());
			param.put("prodsname", input.getProdsname());
			if ((Integer) dbService.execStoredProc("SELECT COUNT(*) FROM TBPRODMATRIX WHERE "
					+ "prodgroup=:prodgroup AND prodcode=:prodcode AND prodname=:prodname AND "
					+ "prodsname=:prodsname ", param, null, 0, null) > 0) {
				result = "1";
			} else {
				input.setCreatedby(service.getUserId());
				input.setCreateddate(new Date());
				if ((Integer) dbService.execStoredProc(null, param, null, 3, input) > 0) {
					result = "2";
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return result;
	}

//	@Override
//	public UserInfoForm checkMemberNo(String memberno) {
//		// TODO Auto-generated method stub
//		UserInfoForm form = new UserInfoForm();
//		try {
//			param.put("memberno", memberno);
//			String name = (String) dbService.execStoredProc(
//					"SELECT main.fullname AS name FROM CIFSDBDEMO.dbo.TBCIFMAIN main WHERE cifno=:memberno", param,
//					null, 0, null);
//			if (name == null || name.equals(null)) {
//				form.setName("");
//				form.setResult(0);
//				form.setCifno(null);
//			} else {
//				form.setName(name);
//				form.setCifno(memberno);
//				form.setResult(1);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return form;
//	}

	@SuppressWarnings("unchecked")
	@Override
	public List<InquiryCIFNameList> checkMemberNoName(String name) {
		// TODO Auto-generated method stub
		List<InquiryCIFNameList> list = null;
		try {
			param.put("name", "%" + name + "%");
			list = (List<InquiryCIFNameList>) dbService.execStoredProc(
					"SELECT main.fullname AS name, cifno FROM CIFSDBDEMO.dbo.TBCIFMAIN main WHERE main.fullname LIKE :name AND main.cifstatus='3'",
					param, InquiryCIFNameList.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public Tbprodmatrix getProductDetail(String prodcode, String subprodcode) {
		// TODO Auto-generated method stub
		try {
			param.put("prodcode", prodcode);
			param.put("subprodcode", subprodcode);
			return (Tbprodmatrix) dbService.execStoredProc(
					"SELECT * FROM TBPRODMATRIX WHERE prodgroup=:prodcode AND prodcode=:subprodcode", param,
					Tbprodmatrix.class, 0, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

//	@Override
//	public Integer acctAlertOff(String accountno) {
//		// TODO Auto-generated method stub
//		try {
//			if (check) {
//				ObjectMapper mapper = new ObjectMapper();
//				String jsonData = mapper.writeValueAsString(accountno);
//				String url = wsurl+"/util/acctalert/off";
//				URL obj = new URL(url);
//				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
//				con.setRequestMethod("PUT");
//				con.setDoOutput(true);
//				con.setRequestProperty("Content-Type", "application/json");
//				con.setRequestProperty("Accept", "application/json");
//				OutputStream os = con.getOutputStream();
//				os.write(jsonData.getBytes());
//				os.flush();
//				System.out.println("Response Code : " + con.getResponseCode());
//				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
//					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//					return mapper.readValue(in.readLine(), Integer.class);
//					// result = in.readLine().equalsIgnoreCase("success") ? "1" : "0";
//				}
//				con.disconnect();
//			} else {
//				return 503;
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return null;
//	}

//	@Override
//	public String getControlno(String accountno) {
//		// TODO Auto-generated method stub
//		try {
//			if (check) {
//				String url = wsurl+"/csr/tdc_print_detail/" + accountno;
//				URL obj = new URL(url);
//				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
//				con.setRequestMethod("GET");
//				System.out.println("Response Code : " + con.getResponseCode());
//				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
//					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//					ObjectMapper mapper = new ObjectMapper();
//					String result = mapper.readValue(in.readLine(), String.class);
//					return result;
//				}
//				con.disconnect();
//			} else {
//				return "503";
//			}
// 		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return null;
//	}

//	@Override
//	public List<TimeDepositCertForm> getTCDList(String accountno) {
//		// TODO Auto-generated method stub
//		try {
//			if (check) {
//				String strUrl = wsurl+"/csr/tdc_list/";
//				strUrl = accountno == null ? strUrl + "all" : strUrl + accountno;
//				URL url = new URL(strUrl);
//				HttpURLConnection con = (HttpURLConnection) url.openConnection();
//				con.setRequestMethod("GET");
//				System.out.println("Response Code : " + con.getResponseCode());
//				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
//					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//					ObjectMapper mapper = new ObjectMapper();
//					TimeDepositCertFormHandler result = mapper.readValue(in.readLine(), TimeDepositCertFormHandler.class);
//					System.out.println("TDC List count : "+result.getList().size());
//					return result.getList();
//				}
//				con.disconnect();
//			}
// 		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		return null;
//	}

}
