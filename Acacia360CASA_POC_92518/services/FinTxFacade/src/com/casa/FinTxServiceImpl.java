package com.casa;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.math.BigDecimal;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.map.ObjectMapper;

import com.casa.fintx.forms.AccountCheckForm;
import com.casa.fintx.forms.AccountInquiryMainForm;
import com.casa.fintx.forms.CashInCashOutForm;
import com.casa.fintx.forms.CashPositionConfirmForm;
import com.casa.fintx.forms.CashPositionForm;
import com.casa.fintx.forms.FinGenericForm;
import com.casa.fintx.forms.InquiryNameList;
import com.casa.fintx.forms.OverrideActionForm;
import com.casa.fintx.forms.OverrideResultForm;
import com.casa.fintx.forms.TransactForm;
import com.casa.util.UtilService;
import com.casa.util.UtilServiceImpl;
import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.util.ConfigPropertyUtil;
import com.etel.util.Connection;
import com.etel.util.HQLUtil;
import com.etel.util.SequenceGenerator;
import com.etel.utils.DateTimeUtil;
import com.smslai_eoddb.data.Tbbrfintxjrnl;
import com.smslai_eoddb.data.Tbcashposition;
import com.smslai_eoddb.data.Tbcashpositiondenom;
import com.smslai_eoddb.data.Tbfintxchecklist;
import com.smslai_eoddb.data.Tbfintxjrnl;
import com.smslai_eoddb.data.Tbmanagerscheck;
import com.smslai_eoddb.data.Tbmctxjrnl;
import com.smslai_eoddb.data.Tbnetamt;
import com.smslai_eoddb.data.Tboverride;
import com.smslai_eoddb.data.Tbtransactioncode;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.security.SecurityService;

public class FinTxServiceImpl implements FinTxService {

	DBService dbService = new DBServiceImpl();
	Map<String, Object> param = HQLUtil.getMap();
	SecurityService service = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");
	UtilService utlSrvc = new UtilServiceImpl();
	private static boolean check = Connection.connectionCheck();
	private String wsurl = ConfigPropertyUtil.getPropertyValue("ws_url");

	@Override
	public String cashPos(CashPositionForm form) {
		// TODO Auto-generated method stub
		String flag = null;
		/*
		 * flag return values 1 = success null = error in routine
		 */
		try {
			String seq = SequenceGenerator.generateSequence(service.getUserId());
			Tbcashposition pos = form.getCashpos();
			Tbcashpositiondenom dnm = form.getCashdnm();
			pos.setTxref(seq);
			dnm.setTxrefno(seq);
			dbService.save(pos);
			dbService.save(dnm);
			param.put("txref", seq);
			flag = String.valueOf(dbService.execStoredProc(
					"DECLARE @retrn varchar(1) EXEC CASHPOSITION "
							+ "@retrn = @retrn OUTPUT, @txref=:txref SELECT @retrn as N'@result'",
					param, null, 0, null));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return flag;
	}

	@Override
	public CashPositionConfirmForm cashPosDenom(String txref) {
		// TODO Auto-generated method stub
		CashPositionConfirmForm form = new CashPositionConfirmForm();
		try {
			param.put("txref", txref);
			String status = String.valueOf(dbService.execStoredProc(
					"SELECT cd.desc1 FROM Tbcashposition pos JOIN Tbcodetable cd "
							+ "ON pos.txstatus=cd.codevalue WHERE pos.txref=:txref AND cd.codename='CSPD'",
					param, null, 0, null));
			Tbcashpositiondenom denom = (Tbcashpositiondenom) dbService
					.executeUniqueHQLQuery("FROM Tbcashpositiondenom " + "WHERE txrefno=:txref", param);
			form.setDenom(denom);
			form.setStatus(status);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

	@Override
	public String confirmCashPos(String txref, String act, String remarks) {
		// TODO Auto-generated method stub
		String flag = null;
		/*
		 * flag return values 1 = success updating null = error in routine
		 */
		try {
			param.put("txref", txref);
			param.put("act", act);
			param.put("remarks", remarks);
			System.out.println("act = " + act + "  txref " + txref + "remarks " + remarks);
			flag = String.valueOf(dbService.execStoredProc(
					"DECLARE @result VARCHAR(3) EXEC CASHPOSITIONACTION "
							+ "@txref=:txref, @action=:act, @result = @result OUTPUT,@remarks =:remarks " + "SELECT @result as N'result'",
					param, null, 0, null));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return flag;
	}

	@Override
	public FinGenericForm cashDepWithDrCrMemo(Tbfintxjrnl jrnl, List<Tbfintxchecklist> checklist) {
		// TODO Auto-generated method stub
		/*
		 * flag return values result 999 = error in routine result 0 = account not found
		 * result 1 = success result 2 = insufficient balance result 3 = posting
		 * restriction result 4 = close account result 5 = tellers limit result 6 =
		 * posttx and tellers limit result 7 = hold spo result 8 = (On Us Chech Deposit)
		 * checkno not yet issued result 9 = (On Us Chech Deposit) checkno already used
		 * result 10 = Rejected (For ATA only)/ATA posttx
		 */
		/*
		 * txcode 111212 = Other Bank Check Deposit txcode 110111 = Cash Deposit txcode
		 * 120121 = Cash Withdrawal txcode 112013 = Credit Memo txcode 122023 = Debit
		 * Memo txcode 111322 = Fund transfer txcode 111211 = On Us Check Deposit
		 */
		FinGenericForm form = new FinGenericForm();
		try {
			param.put("userid", service.getUserId());
			jrnl.setTxdate(SequenceGenerator.fixDateTime(jrnl.getTxdate()));
			jrnl.setTxvaldt(jrnl.getTxdate());
			jrnl.setTxref(SequenceGenerator.generateSequence(service.getUserId()));
			ObjectMapper mapper = new ObjectMapper();
			String strData = mapper.writeValueAsString(jrnl);
			System.out.println(strData + " ez");
			Tbbrfintxjrnl tosave = mapper.readValue(strData, Tbbrfintxjrnl.class);
			if ((Integer) dbService.execStoredProc(null, null, null, 4, tosave) > 0) {
				System.out.println("SAVED");
			}
			if (check) {
				URL url = new URL(wsurl + "/fin/transact");
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setDoOutput(true);
				con.setRequestMethod("POST");
				con.setRequestProperty("Content-Type", "application/json");
				TransactForm txform = new TransactForm();
				txform.setJrnl(mapper.readValue(strData, Tbfintxjrnl.class));
				txform.setChecklist(checklist);
				txform.setTellerslimit(new BigDecimal(dbService
						.execStoredProc("SELECT limitamount FROM TBUSER WHERE userid=:userid", param, null, 0, null)
						.toString()));
				String jsonData = mapper.writeValueAsString(txform);
				OutputStream os = con.getOutputStream();
				os.write(jsonData.getBytes());
				os.flush();
				if (con.getResponseCode() != HttpURLConnection.HTTP_ACCEPTED) {
					form.setResult("999");
				} else {
					BufferedReader in = new BufferedReader(new InputStreamReader((con.getInputStream())));
					form = mapper.readValue(in.readLine(), FinGenericForm.class);
				}
				con.disconnect();
				param.put("txref", form.getTxrefbr());
				param.put("txrefmain", form.getTxrefno());
				param.put("txstat", form.getTxstatus());
				param.put("override", form.getOverride());
				dbService.execStoredProc("UPDATE TBBRFINTXJRNL SET hostacceptind='1', txrefmain=:txrefmain, txstatus=:txstat, "
						+ "override=:override WHERE txref=:txref", param, null,
						2, null);
				System.out.println("0: " + form.getTxrefbr());
				System.out.println("1: " + form.getTxrefno());
				System.out.println("2: " + form.getResult());
			} else {
				form.setResult("503");
			}
		} catch (Exception e) {
			e.printStackTrace();
			form.setResult("999");
		}
		return form;
	}

	@Override
	public AccountInquiryMainForm accountInquiry(String acctno) {
		// TODO Auto-generated method stub
		AccountInquiryMainForm form = new AccountInquiryMainForm();
		/*
		 * Result 0 = Account not found/does not exist Result 1 = Account found Result
		 * 999 = Error in webservice check for error
		 */
		try {
			if (check) {
				String url = wsurl + "/util/acctinq/" + acctno;
				URL obj = new URL(url);
				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
				con.setRequestMethod("GET");
				System.out.println("Response Code : " + con.getResponseCode());
				if (con.getResponseCode() == HttpURLConnection.HTTP_OK) {
					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
					ObjectMapper mapper = new ObjectMapper();
					form = mapper.readValue(in.readLine(), AccountInquiryMainForm.class);
				} else {
					form.setResult("999");
				}
				con.disconnect();
			} else {
				form.setResult("503");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<InquiryNameList> accountInquiryName(String name) {
		// TODO Auto-generated method stub
		List<InquiryNameList> list = null;
		try {
			param.put("name", "%" + name + "%");
			list = (List<InquiryNameList>) dbService.execStoredProc("SELECT TD.AccountName AS name, "
					+ "TD.AccountNo AS acctno, PROD.prodname AS productCode FROM TBDEPOSIT TD LEFT JOIN TBPRODMATRIX PROD "
					+ "on PROD.prodcode=TD.SubProductCode WHERE " + "TD.AccountName LIKE :name", param,
					InquiryNameList.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public CashInCashOutForm getCashInCashOut(String userid, String currency) {
		// TODO Auto-generated method stub
		CashInCashOutForm form = new CashInCashOutForm();
		try {
			param.put("userid", userid);
			param.put("currency", currency);
			param.put("busdate", DateTimeUtil.convertDateToString(utlSrvc.getBusinessdt(), DateTimeUtil.DATE_FORMAT_MM_DD_YYYY));
			List<Tbcashposition> cashout = (List<Tbcashposition>) dbService
					.execStoredProc("SELECT pos.id, pos.txdate, tu.brname AS unit, "
							+ "orgn.username AS origin, dest.username AS destination, pos.currency, pos.txamount, pos.remarks, pos.txref, "
							+ "cd.desc1 AS txstatus, pos.instcode FROM TBCASHPOSITION pos , TBUSER orgn, TBUSER dest, TBUNIT tu, "
							+ "TBCODETABLE cd WHERE orgn.userid = pos.origin AND dest.userid= pos.destination AND tu.brid=pos.unit "
							+ "AND pos.origin=:userid AND pos.origin!=pos.destination AND pos.txstatus = cd.codevalue AND cd.codename='CSPD' "
							+ "AND CAST(pos.txvaldt AS DATE) =:busdate AND pos.currency=:currency AND pos.txstatus <> 'R'", param, Tbcashposition.class, 1, null);
			List<Tbcashposition> cashin = (List<Tbcashposition>) dbService
					.execStoredProc("SELECT pos.id, pos.txdate, tu.brname AS unit, "
							+ "orgn.username AS origin, dest.username AS destination, pos.currency, pos.txamount, pos.remarks, pos.txref, "
							+ "cd.desc1 AS txstatus, pos.instcode FROM TBCASHPOSITION pos , TBUSER orgn, TBUSER dest, TBUNIT tu, "
							+ "TBCODETABLE cd WHERE orgn.userid = pos.origin AND dest.userid= pos.destination AND tu.brid=pos.unit "
							+ "AND pos.destination=:userid AND pos.txstatus = cd.codevalue AND cd.codename='CSPD' "
							+ "AND CAST(pos.txvaldt AS DATE) =:busdate AND pos.currency=:currency AND pos.txstatus <> 'R'", param, Tbcashposition.class, 1, null);
			form.setCashin(cashin);
			form.setCashout(cashout);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

	@Override
	public String overrideTransaction(String txrefno, String username) {
		// TODO Auto-generated method stub
		String result = "0";
		try {
			if (check) {
				param.put("txrefno", txrefno);
				param.put("userid", service.getUserId());
				System.out.println(" overid " + txrefno + username);
				ObjectMapper mapper = new ObjectMapper();
				String jsonData = mapper.writeValueAsString(param);
				String url = wsurl + "/fin/override";
				URL obj = new URL(url);
				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
				con.setRequestMethod("PUT");
				con.setDoOutput(true);
				con.setRequestProperty("Content-Type", "application/json");
				con.setRequestProperty("Accept", "application/json");
				OutputStream os = con.getOutputStream();
				os.write(jsonData.getBytes());
				os.flush();
				System.out.println("Response Code : " + con.getResponseCode());
				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
					result = in.readLine().equalsIgnoreCase("success") ? "1" : "0";
				}
				con.disconnect();
			} else {
				result = "503";
			}
			System.out.println("###>>>>>> OVERRIDE " + result);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String cancelOverrideTX(String txrefno) {
		// TODO Auto-generated method stub
		String result = "0";
		try {
			if (check) {
				param.put("txref", txrefno);
				ObjectMapper mapper = new ObjectMapper();
				String jsonData = mapper.writeValueAsString(param);
				String url = wsurl + "/fin/override-cancel";
				URL obj = new URL(url);
				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
				con.setRequestMethod("PUT");
				con.setDoOutput(true);
				con.setRequestProperty("Content-Type", "application/json");
				con.setRequestProperty("Accept", "application/json");
				OutputStream os = con.getOutputStream();
				os.write(jsonData.getBytes());
				os.flush();
				System.out.println("Response Code : " + con.getResponseCode());
				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
					result = in.readLine().equalsIgnoreCase("success") ? "1" : "0";
				}
				con.disconnect();
			} else {
				result = "503";
			}
			System.out.println("###>>>>>> CANCEL OVERRIDE " + result);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public AccountCheckForm checkAcct(String acctno) {
		// TODO Auto-generated method stub
		/**
		 * result 0 = not found result 1 = success, result 999 = error in routine
		 **/
		AccountCheckForm form = new AccountCheckForm();
		try {
			if (check) {
				String url = wsurl + "/util/checkacct/" + acctno;
				URL obj = new URL(url);
				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
				con.setRequestMethod("GET");
				System.out.println("Response Code : " + con.getResponseCode());
				if (con.getResponseCode() == HttpURLConnection.HTTP_OK) {
					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
					ObjectMapper mapper = new ObjectMapper();
					form = mapper.readValue(in.readLine(), AccountCheckForm.class);
					System.out.println(form.getUnit());
				} else {
					form.setResult("999");
				}
				con.disconnect();
			} else {
				form.setResult("503");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

	@Override
	public AccountCheckForm checkAcctFundTrans(String acctnoto, String acctnofrom) {
		// TODO Auto-generated method stub
		/**
		 * result 0 = both acct not found result 0.1 = source acct not found result 0.2
		 * = destination acct not found result 0.3 = not same currency result 1 =
		 * success
		 **/
		AccountCheckForm form = new AccountCheckForm();
		try {
			if (check) {
				String url = wsurl + "/util/checkacct-fundtrans/" + acctnoto + "/" + acctnofrom;
				URL obj = new URL(url);
				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
				con.setRequestMethod("GET");
				System.out.println("Response Code : " + con.getResponseCode());
				if (con.getResponseCode() == HttpURLConnection.HTTP_OK) {
					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
					ObjectMapper mapper = new ObjectMapper();
					form = mapper.readValue(in.readLine(), AccountCheckForm.class);
				} else {
					form.setResult("999");
				}
				con.disconnect();
			} else {
				form.setResult("503");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

	@Override
	public String requestRemoteOverride(String txrefno) {
		// TODO Auto-generated method stub
		String result = "0";
		try {
			param.put("txrefno", txrefno);
			if ((Integer) dbService.execStoredProc("UPDATE TBBRFINTXJRNL SET override=3 WHERE txrefmain=:txrefno", param,
					null, 2, null) > 0) {
				result = "1";
			}
			if (check) {
				String url = wsurl + "/fin/remote-override/" + txrefno;
				URL obj = new URL(url);
				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
				con.setRequestMethod("PUT");
				System.out.println("Response Code : " + con.getResponseCode());
				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
					result = "1";
				} else {
					result = "0";
				}
				con.disconnect();
			} else {
				result = "503";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public Integer requestRemoteOverrideCount() {
		// TODO Auto-generated method stub
		Integer count = 0;
		try {
			count = (Integer) dbService.execStoredProc(
					"SELECT COUNT(*) FROM TBBRFINTXJRNL WHERE override=3 AND txstatus='5' ", null, null, 0, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return count;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<OverrideActionForm> requestRemoteOverrideList() {
		// TODO Auto-generated method stub
		List<OverrideActionForm> list = new ArrayList<OverrideActionForm>();
		try {
			list = (List<OverrideActionForm>) dbService.execStoredProc(
					"SELECT jrnl.accountno AS acctno, jrnl.txamount AS amount, jrnl.txby, "
							+ "txc.txname AS txcode, jrnl.txref AS txrefno, 'jrnl' AS source FROM TBFINTXJRNL jrnl JOIN TBTRANSACTIONCODE txc "
							+ "ON jrnl.txcode=txc.txcode WHERE override=3 AND txstatus='5' ",
					null, OverrideActionForm.class, 1, null);
			list.addAll((List<OverrideActionForm>) dbService.execStoredProc(
					"SELECT accountno AS acctno, chargeamount AS amount, txby, txcode, CONVERT(VARCHAR(20), sequence) AS txrefno, 'override' AS source FROM TBOVERRIDE WHERE status=0", 
					null, OverrideActionForm.class, 1, null));

		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public Integer requestRemoteOverrideWait(String txrefno) {
		// TODO Auto-generated method stub
		Integer count = 0;
		try {
			param.put("txrefno", txrefno);
			count = (Integer) dbService.execStoredProc(
					"SELECT COUNT(*) FROM TBBRFINTXJRNL WHERE override IN (4,5) " + "AND txstatus='5' AND txrefmain=:txrefno",
					param, null, 0, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return count;
	}

	@Override
	public OverrideResultForm requestRemoteOverrideResult(String txrefno) {
		// TODO Auto-generated method stub
		OverrideResultForm form = new OverrideResultForm();
		try {
			param.put("txrefno", txrefno);
			form = (OverrideResultForm) dbService.execStoredProc(
					"SELECT usr.username AS overrideby, CASE WHEN(jrnl.override=4) THEN 'Accepted' WHEN(jrnl.override=5) THEN 'Rejected' END AS resultstr, "
							+ "jrnl.override AS result FROM TBBRFINTXJRNL jrnl JOIN TBUSER usr ON jrnl.overrideby=usr.userid WHERE txrefmain=:txrefno",
					param, OverrideResultForm.class, 0, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

	@Override
	public String requestRemoteOverrideAction(String txrefno, Integer val) {
		// TODO Auto-generated method stub
		String result = "0";
		try {
			param.put("override", val);
			param.put("txrefno", txrefno);
			param.put("overrideby", service.getUserId());
			if ((Integer) dbService.execStoredProc(
					"UPDATE TBBRFINTXJRNL SET override=:override, overrideby=:overrideby WHERE txref=:txrefno", param,
					null, 2, null) > 0) {
				System.out.println();
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbnetamt> userCashPos(String userid) {
		// TODO Auto-generated method stub
		List<Tbnetamt> list = new ArrayList<Tbnetamt>();
		try {
			param.put("userid", userid);
			list = (List<Tbnetamt>) dbService.execStoredProc("SELECT * FROM TBNETAMT WHERE userid=:userid", param,
					Tbnetamt.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String errorCorrect(String txrefno) {
		// TODO Auto-generated method stub
		String result = "";
		try {
			if (check) {
				String url = wsurl + "/fin/error-correct/" + txrefno;
				URL obj = new URL(url);
				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
				con.setRequestMethod("PUT");
				System.out.println("Response Code : " + con.getResponseCode());
				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED) {
					result = "1";
				} else {
					result = "0";
				}
				con.disconnect();
			} else {
				result = "503";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public Tbtransactioncode getTxinfo(String txname) {
		// TODO Auto-generated method stub
		try {
			param.put("txname", txname);
			System.out.println("service charge of: " +txname);
			return (Tbtransactioncode) dbService.execStoredProc(
					"SELECT * FROM TBTRANSACTIONCODE WHERE txname=:txname", param, Tbtransactioncode.class, 0, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public String initOverride(Tboverride data) {
		try {
			dbService.execStoredProc(null, null, null, 4, data);
			return "1";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "0";
	}

	@Override
	public String requestMc(Tbmanagerscheck data) {
		// TODO Auto-generated method stub
		String result = "";
		try {
			if (check) {
				ObjectMapper mapper = new ObjectMapper();
				URL url = new URL(wsurl + "/fin/request-mc");
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setDoOutput(true);
				con.setRequestMethod("POST");
				con.setRequestProperty("Content-Type", "application/json");
				String jsonData = mapper.writeValueAsString(data);
				OutputStream os = con.getOutputStream();
				os.write(jsonData.getBytes());
				os.flush();
				if (con.getResponseCode() != HttpURLConnection.HTTP_ACCEPTED) {
					result = "0";
				} else {
					result = "1";
				}
				con.disconnect();
				
			} else {
				result = "503";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String depositMc(Tbmctxjrnl data) {
		// TODO Auto-generated method stub
		String result = "";
		try {
			if (check) {
				ObjectMapper mapper = new ObjectMapper();
				URL url = new URL(wsurl + "/fin/deposit-mc");
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setDoOutput(true);
				con.setRequestMethod("POST");
				con.setRequestProperty("Content-Type", "application/json");
				String jsonData = mapper.writeValueAsString(data);
				OutputStream os = con.getOutputStream();
				os.write(jsonData.getBytes());
				os.flush();
				if (con.getResponseCode() != HttpURLConnection.HTTP_ACCEPTED) {
					result = "0";
				} else {
					result = "1";
				}
				con.disconnect();
				
			} else {
				result = "503";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String saveBuySellFx(Tbbrfintxjrnl brjrnl) {
		// TODO Auto-generated method stub
		String result = "failed";
		Tbfintxjrnl fin = new Tbfintxjrnl();
		try {
			if (check) {
				String url = wsurl + "/util/sequence";
				URL obj = new URL(url);
				HttpURLConnection con = (HttpURLConnection) obj.openConnection();
				con.setRequestMethod("GET");
				System.out.println("Response Code : " + con.getResponseCode());
				if (con.getResponseCode() == HttpURLConnection.HTTP_OK) {
					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
					ObjectMapper mapper = new ObjectMapper();
					String txrefmain = mapper.readValue(in.readLine(), String.class);
					
					if(txrefmain == null){
						return result;
					}
					brjrnl.setTxref(SequenceGenerator.generateSequence(service.getUserId()));
					brjrnl.setTxrefmain(txrefmain);
					if(brjrnl.getRemarks().equals("Buy")){
						brjrnl.setTxcode("111123");
					}else{
						brjrnl.setTxcode("111133");
					}
					if(brjrnl.getAccountno() == null){
						brjrnl.setAccountno("000000000000");
					}else{
						brjrnl.setAccountno(brjrnl.getAccountno());
					}
					if(dbService.save(brjrnl)){
						result = "saved";
						
					}
					
				} else {
					return result;
				}
				con.disconnect();
				
			} 
			
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return result;
	}

}
