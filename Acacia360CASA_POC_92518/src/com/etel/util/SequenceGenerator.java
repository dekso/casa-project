package com.etel.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.TimeZone;

import org.joda.time.Instant;
import org.joda.time.LocalDate;
import org.joda.time.LocalDateTime;
import org.joda.time.LocalTime;

import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;

public class SequenceGenerator {

	static DBService dbService = new DBServiceImpl();
	static Map<String, Object> param = HQLUtil.getMap();

	public static String generateSequence(String unit) {
		String seqno = "";
		try{
			param.put("unit", unit);
			seqno = String.valueOf(dbService.execStoredProc("DECLARE @sequence varchar(16) EXEC SEQGEN_REFNO @unit=:unit,"
					+ "@sequence = @sequence OUTPUT SELECT @sequence as N'@sequence' ", param, null, 0, null));
			if (seqno == null) {
				generateSequence(unit);
			}
		} catch (Exception e){
			e.printStackTrace();
		}
		return seqno;
	}
	
	public static String generateAccountNoSequence(String unit, String prodcode, String prodgroup) {
		String seqno = "";
		try{
			param.put("unit", unit);
			param.put("prodgroup", prodgroup);
			param.put("prodcode", prodcode);
			System.out.println("UNIT : " +unit+" /n PRODGROUP : "+prodgroup+"/n PRODCODE : "+prodcode);
			seqno = String.valueOf(dbService.execStoredProc("DECLARE @sequence varchar(16) EXEC SEQGEN_ACCTNO @unit=:unit,"
					+ "@prodcode=:prodcode, @prodgroup=:prodgroup, @sequence = @sequence OUTPUT "
					+ "SELECT @sequence as N'@sequence' ", param, null, 0, null));
			if (seqno == null) {
				generateAccountNoSequence(unit, prodcode, prodgroup);
			}
		} catch (Exception e){
			e.printStackTrace();
		}
		return seqno;
	}

	public static String generateMerchSequence(String unit, String instcode) {
		String seqno = "";
		try{
			param.put("unit", unit);
			param.put("instcode", instcode);
			seqno = String.valueOf(dbService.execStoredProc("DECLARE @sequence varchar(16) EXEC SEQGEN_MERCHNO @unit=:unit,"
					+ "@instcode=:instcode, @sequence = @sequence OUTPUT "
					+ "SELECT @sequence as N'@sequence' ", param, null, 0, null));
			if (seqno == null) {
				generateMerchSequence(unit, instcode);
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
			param.put("instcode", instcode);
			seqno = String.valueOf(dbService.execStoredProc("DECLARE @sequence varchar(16) EXEC SEQGEN_USER @unit=:unit,"
					+ "@instcode=:instcode, @sequence = @sequence OUTPUT "
					+ "SELECT @sequence as N'@sequence' ", param, null, 0, null));
			if (seqno == null) {
				generateMerchSequence(unit, instcode);
			}
		} catch (Exception e){
			e.printStackTrace();
		}
		return seqno;
	}
	
	public static Date fixDateTime(Date date) {
		try {
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			SimpleDateFormat tformat = new SimpleDateFormat("HH:mm:ss");
			SimpleDateFormat ttformat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String strtime = tformat.format(new Date());
			date = ttformat.parse(format.format(date)+" "+strtime);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return date;
	}
	
}
