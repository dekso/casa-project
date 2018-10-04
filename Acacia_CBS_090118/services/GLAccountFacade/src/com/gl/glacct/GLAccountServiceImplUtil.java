package com.gl.glacct;

import java.util.Map;

import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.util.HQLUtil;
import com.gldb.data.Tbglaccount;
public class GLAccountServiceImplUtil {

	static DBService dbService = new DBServiceImpl();
	static Map<String, Object> param = HQLUtil.getMap();
	private static String result = "0";
	
	/*******************ADD EDIT UTILITY**********************/
	public String addEditUtil(Object obj) {
		/**
		 * result 0 = error in routine
		 * result 1 = already exist
		 * result 2 = success
		 * **/
		try { 
			if ((Integer) dbService.execStoredProc(null, null, null, 3, obj) > 0) 
			{
				result = "2";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	public Integer checkGLAccount(Tbglaccount input){
		param.put("acctcode", input.getAcctcode());
		param.put("acctlvl", input.getAcctlvl());
		return (Integer) dbService.execStoredProc("DECLARE @result int "
				+ "EXEC CHK_GLACCT @acctlvl = :acctlvl, @acctcode = :acctcode, @result = @result OUTPUT "
				+ "SELECT @result as N'Result'", param, null, 0, null);
	}
}
