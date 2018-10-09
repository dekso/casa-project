package com.etel.utils;

import java.util.Map;

import org.apache.log4j.Logger;

import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.smslai_eoddb.data.Tbauditevents;

public class AuditLogEvents {
	
	
	private final static Logger logger = Logger.getLogger(AuditLogEvents.class);
	private final static String queryAuditEvents = "FROM Tbauditevents where eventid = :eventid";
	
	
	
	public static final int EDIT_SECURITY_PARAMS = 1;
	public static final int ADD_OR_CREATE_USER_ACCOUNT_AD = 2;
	public static final int ADD_OR_CREATE_USER_ACCOUNT_NON_AD = 3;
	public static final int EDIT_USER_ACCOUNT_AD = 4;
	public static final int EDIT_USER_ACCOUNT_NON_AD = 5;
	public static final int VIEW_USER_ACCOUNT_AD = 6;
	public static final int VIEW_USER_ACCOUNT_NON_AD = 7;
	public static final int CHANGE_PASSWORD = 8;
	public static final int REACTIVATE_USER = 9;
	public static final int DEACTIVATE_USER = 10;
	public static final int SUSPEND_USER = 11;
	public static final int DISABLE_USER = 12;
	public static final int ENABLE_USER = 13;
	public static final int USER_LOGOUT = 14;
	public static final int USER_LOGIN = 15;
	public static final int SUCCESSFUL_LOGIN = 16;
	public static final int FAILED_LOGIN = 17;
	public static final int ACTIVE_DIRECTORY_ERROR_MESSAGE = 18;
	public static final int EXISTING_SESSION_TERMINATED = 19;

	
	public static String getAuditLogEvents(int eventid){
		String sEvent = "Unknown Event ID";
		
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("eventid", eventid);
		
		Tbauditevents event = (Tbauditevents) dbService.executeUniqueHQLQuery(queryAuditEvents, params);
		try{
			if(event != null){
				sEvent = event.getEventname();
			}
		}catch(Exception e){
			logger.error(e);
			e.printStackTrace();
		}
		
		return sEvent;
	}
	
}
