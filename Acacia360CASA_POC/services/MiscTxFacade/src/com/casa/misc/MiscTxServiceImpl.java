package com.casa.misc;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Map;

import org.cloudfoundry.org.codehaus.jackson.map.ObjectMapper;

import com.casa.misc.forms.MerchantForm;
import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.util.ConfigPropertyUtil;
import com.etel.util.Connection;
import com.etel.util.HQLUtil;
import com.etel.util.SequenceGenerator;
import com.smslai_eoddb.data.Tbbillspayment;
import com.smslai_eoddb.data.Tbcheckbook;
import com.smslai_eoddb.data.Tbmerchant;
import com.smslai_eoddb.data.Tbmiscellaneous;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.security.SecurityService;

public class MiscTxServiceImpl implements MiscTxService {

	DBService dbService = new DBServiceImpl();
	Map<String, Object> param = HQLUtil.getMap();
	SecurityService service = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");
	private String result = "0";
	private static boolean check = Connection.connectionCheck();
	private String wsurl = ConfigPropertyUtil.getPropertyValue("ws_url");

	@SuppressWarnings("unchecked")
	@Override
	public List<MerchantForm> getMerchantList() {
		// TODO Auto-generated method stub
		List<MerchantForm> list = null;
		try {
			list = (List<MerchantForm>) dbService.execStoredProc(
					"SELECT merchantcode, merchantname, accountno as merchantacctno FROM TBMERCHANT", null,
					MerchantForm.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String createPayment(Tbbillspayment payment) {
		// TODO Auto-generated method stub
		try {
			payment.setTxrefno(SequenceGenerator.generateSequence(service.getUserId()));
			if ((Integer) dbService.execStoredProc(null, null, null, 3, payment) > 0) {
				param.put("txrefno", payment.getTxrefno());
				result = String.valueOf(dbService.execStoredProc("DECLARE @result VARCHAR(3) "
						+ "EXEC MISCTX_SP @txrefno=:txrefno, @misctype='BILLS', @resultout = @result OUTPUT "
						+ "SELECT @result ", param, null, 0, null));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String createMiscTx(Tbmiscellaneous misc) {
		// TODO Auto-generated method stub
		try {
			if ((Integer) dbService.execStoredProc("", null, null, 3, misc) > 0) {
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String addMerchant(Tbmerchant merch) {
		// TODO Auto-generated method stub
		try {
			/***
			 * result 0 = account not found/exist result 1 = success result 2 = error in
			 * saving
			 ***/
			param.put("acctno", merch.getAccountno());
			if ((Integer) dbService.execStoredProc("SELECT COUNT(*) FROM TBDEPOSIT WHERE AccountNo=:acctno", param,
					null, 0, null) > 0) {
				merch.setMerchantcode(SequenceGenerator.generateMerchSequence(merch.getUnit(), merch.getInstcode()));
				if ((Integer) dbService.execStoredProc(null, null, null, 3, merch) > 0) {
					result = "1";
				} else {
					result = "2";
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String checkbookIssuance(Tbcheckbook data) {
		// TODO Auto-generated method stub
		/***
		 * result 0 = account not found/exist, result 1 = success, result 999 = error in
		 * routine, result 503 = no connection
		 ***/
		try {
			if (check) {
				URL url = new URL(wsurl+"/csr/checkbook-issuance/release");
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setDoOutput(true);
				con.setRequestMethod("POST");
				con.setRequestProperty("Content-Type", "application/json");
				ObjectMapper mapper = new ObjectMapper();
				String jsonData = mapper.writeValueAsString(data);
				OutputStream os = con.getOutputStream();
				os.write(jsonData.getBytes());
				os.flush();
				if (con.getResponseCode() != HttpURLConnection.HTTP_ACCEPTED) {
					result = "999";
				} else {
					BufferedReader in = new BufferedReader(new InputStreamReader((con.getInputStream())));
					result = mapper.readValue(in.readLine(), String.class);
				}
				con.disconnect();
			} else {
				result = "503";
			}
			System.out.println("ISSUANCE OF CHECKBOOK RESULT : " + result);
			// param.put("acctno", data.getAccountno());
			// if ((Integer) dbService.execStoredProc("SELECT COUNT(*) FROM TBDEPOSIT WHERE
			// AccountNo=:acctno", param,
			// null, 0, null) > 0) {
			// dbService.execStoredProc(null, null, null, 3, data);
			// result = "1";
			// }
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			result = "999";
		}
		return result;
	}

}
