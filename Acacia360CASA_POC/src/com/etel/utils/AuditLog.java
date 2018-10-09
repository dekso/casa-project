/**
 * 
 */
package com.etel.utils;

import java.util.Date;

import org.apache.log4j.Logger;

import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.smslai_eoddb.data.Tbaudittrail;

/**
 * @author MMM
 *
 */
public class AuditLog {

	private static final Logger logger = Logger
			.getLogger(AuditLog.class);
	
	/**
	 * 
	 * 
	 * @param event
	 * @param desc
	 * @param username
	 * @param eventdatetime
	 */
	public static void addAuditLog(String event, String desc, String username, Date eventdatetime) {
		
		Tbaudittrail log = new Tbaudittrail();
		DBService dbsrvc = new DBServiceImpl();
		
		log.setEventdatetime(new Date());
		log.setEventdescription(desc);
		log.setEventname(event);
		log.setUsername(username);
		
		try {
			dbsrvc.saveOrUpdate(log);
//			System.out.println("Log Entry Successful: " + log.getUsername());
		} catch (Exception e) {
			logger.error(e.toString());
		}
	}	
	
}
