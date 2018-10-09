package com.etel.util;

import java.util.Map;

import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;

public class SequenceGenerator {

	static DBService dbService = new DBServiceImpl();
	static Map<String, Object> param = HQLUtil.getMap();

	public static String generateSequencePS(String userid) {
		String seqno = "";
		try{
			param.put("userid", userid);
			seqno = String.valueOf(dbService.execStoredProc("DECLARE @sequence varchar(16) "
					+ "EXEC SEQGEN_PS @userid=:userid, @sequence = @sequence OUTPUT "
					+ "SELECT @sequence as N'@sequence'", param, null, 0, null));
			if (seqno == null) {
				generateSequencePS(userid);
			}
		} catch (Exception e){
			e.printStackTrace();
		}
		return seqno;
	}
	
	public static String generateUserSequence(String unit, String instcode) {
		String seqno = "";
		try{
			param.put("unit", unit);
			seqno = String.valueOf(dbService.execStoredProc("DECLARE @sequence varchar(16) EXEC SEQGEN_USER @unit=:unit,"
					+ "@sequence = @sequence OUTPUT "
					+ "SELECT @sequence as N'@sequence' ", param, null, 0, null));
			if (seqno == null) {
				generateUserSequence(unit, instcode);
			}
		} catch (Exception e){
			e.printStackTrace();
		}
		return seqno;
	}
}
