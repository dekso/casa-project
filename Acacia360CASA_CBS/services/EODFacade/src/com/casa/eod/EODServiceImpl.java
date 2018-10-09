/**
 * 
 */
package com.casa.eod;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.cloudfoundry.org.codehaus.jackson.map.ObjectMapper;
import com.casa.forms.EODModulesForm;
import com.casa.forms.LogsAndModulesForm;
import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.util.ConfigPropertyUtil;
import com.etel.util.Connection;
import com.etel.util.HQLUtil;
import com.etel.utils.DateTimeUtil;
import com.gldb.data.Tblogs;
import com.gldb.data.Tbunit;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.security.SecurityService;

/**
 * @author ETEL-COMP05
 *
 */
public class EODServiceImpl implements EODService {
	
	DBService dbService = new DBServiceImpl();
	Map<String, Object> param = HQLUtil.getMap();
	SecurityService service = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");
	private static boolean check = Connection.connectionCheck();
	private String wsurl = ConfigPropertyUtil.getPropertyValue("ws_url");

	@Override
	public Tbunit getMainBranch() {
		Tbunit unit = new Tbunit();
		try {
			unit = (Tbunit) dbService.execStoredProc("SELECT * FROM Tbunit WHERE brid = '0000'", param, Tbunit.class, 0, null);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return unit;
	}
	
	@Override
	public LogsAndModulesForm findAllLogsFortheDay(Date currentbusinessdate) {
		LogsAndModulesForm logsAndModuleForm = new LogsAndModulesForm();
		List<Tblogs> logList = new ArrayList<Tblogs>();
		EODModulesForm eodForm = new EODModulesForm();
		param.put("currentbusinessdate", DateTimeUtil.convertDateToString(currentbusinessdate, DateTimeUtil.DATE_FORMAT_MM_DD_YYYY));
		try {
			if (check) {
				String strUrl = wsurl + "/util/eodlogs/" + param.get("currentbusinessdate");
				URL url = new URL(strUrl);
				HttpURLConnection con = (HttpURLConnection) url.openConnection();
				con.setDoOutput(true);
				con.setRequestMethod("GET");
				System.out.println("Response Code : " + con.getResponseCode());
				if (con.getResponseCode() == HttpURLConnection.HTTP_ACCEPTED || con.getResponseCode() == 200) {
					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
					ObjectMapper mapper = new ObjectMapper();
					logList =  Arrays.asList(mapper.readValue(in.readLine(), Tblogs[].class));
				}
				con.disconnect();
			} else {
				System.out.println("Cannot connect to host.");
			}
			logsAndModuleForm.setLogList(logList);
			eodForm = (EODModulesForm) dbService.execStoredProc("select " + 
					"(select count(*) from TBLOGS where currentdate =:currentbusinessdate and modulename = 'PCHC CLEARING' " + 
					"and eventname = 'END') as pchcClearing , " + 
					"(select count(*) from TBLOGS where currentdate =:currentbusinessdate and modulename = 'ROLL DOWN' " + 
					"and eventname = 'END') as rolldown , " + 
					"(select count(*) from TBLOGS where currentdate =:currentbusinessdate and modulename = 'BULK TRANSACTION' " + 
					"and eventname = 'END') as batchProcessing , " + 
					"(select count(*)  from TBLOGS where currentdate =:currentbusinessdate and modulename = 'EOD' " + 
					"and eventname = 'END') as eod", param, EODModulesForm.class, 0, null);
			logsAndModuleForm.setEodForm(eodForm);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return logsAndModuleForm; 
	}
	
	@Override
	public int runEOD(int module, String branchcodes) {
		int result = 0;
		try {
			if(module == 0) {
				param.put("branchcodes", branchcodes);
				result = (Integer) dbService.execStoredProc("declare @res int exec rolldown :branchcodes,@res output "
						+ "select @res", param, null, 0, null); 
			}else if(module == 1) {
				result = (Integer) dbService.execStoredProc("declare @res int exec pchc_clearing @res output "
						+ "select @res", param, null, 0, null); 
			}else if(module == 2) {
				result = (Integer) dbService.execStoredProc("declare @res int exec batch_processing @res output "
						+ "select @res", param, null, 0, null); 
			}else if(module == 3) {
				result = (Integer) dbService.execStoredProc("declare @res int exec casa_eod @res output "
						+ "select @res", param, null, 0, null); 
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return result;
	}

}
