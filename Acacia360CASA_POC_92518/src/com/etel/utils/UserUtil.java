/**
 * 
 */
package com.etel.utils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.smslai_eoddb.data.Tbuser;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.security.SecurityService;

public class UserUtil {
	public static SecurityService securityService = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");
	
	public static final String queryUser = "FROM Tbuser WHERE username=:user AND isdisabled<>'true'";
	public static final int maxNumberOfUserAccount = 30;
	
	public static String md5(String password){
		String md5Password = null;
		
		MessageDigest md;
		try {
			md = MessageDigest.getInstance("MD5");

			md.update(password.getBytes());

			byte byteData[] = md.digest();

			// convert the byte to hex format method 1
			StringBuffer sb = new StringBuffer();
			for (int i = 0; i < byteData.length; i++) {
				sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16)
						.substring(1));
			}

			
			md5Password = sb.toString();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		
		return md5Password;
	}
	public static String sha1(String password){
		String sha1Password = null;
		
		MessageDigest md;
		try {
			md = MessageDigest.getInstance("SHA-1");

			md.update(password.getBytes());

			byte byteData[] = md.digest();

			// convert the byte to hex format method 1
			StringBuffer sb = new StringBuffer();
			for (int i = 0; i < byteData.length; i++) {
				sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16)
						.substring(1));
			}

			
			sha1Password = sb.toString();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		
		return sha1Password;
	}
	
	public static Tbuser getUserByUsername(String username) {
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("user", username);
		try {
			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery(queryUser, params);
			if (user != null) {
				return user;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public static String getUserIp(){
		HttpServletRequest request = RuntimeAccess.getInstance().getRequest();
		String clientIp = request.getRemoteAddr();
		return clientIp;
	}
	
	/*
	 * Added Method - Kevin 05-25-2017
	 */
	public static String getUserSessionID() {
		String sessionId = "";
		try {
			sessionId = RuntimeAccess.getInstance().getSession().getId();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return sessionId;
	}
	
	public static boolean userSessionCheck() {
		SecurityService service = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");
		DBService dbService = new DBServiceImpl();
		Map<String, Object> param = HQLUtil.getMap();
		try {
			if(service == null || (service != null && service.getUserName() == null)){
				return true;
			}else{
				param.put("user", service.getUserName());
				String session = RuntimeAccess.getInstance().getSession().getId();
				Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery(queryUser, param);
				if(user.getLastsession().equalsIgnoreCase(session)||user.getLastsession()==session){
					return true;
				}
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	@SuppressWarnings("unchecked")
	public static List<String> getUsernameList(){
		DBService dbService = new DBServiceImpl();
		List<String> usernameList = new ArrayList<String>();
		try {
			usernameList = (List<String>) dbService.executeListHQLQuery("SELECT username FROM Tbuser", null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return usernameList;
	}
	
	public static String getUserFullname(String username){
		DBService dbService = new DBServiceImpl();
		Tbuser user = new Tbuser();
		String name = "";
		Map<String, Object> params = HQLUtil.getMap();
		try {
			if (username != null) {
				params.put("username", username);
				user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:username", params);
				if (user != null) {
					name = user.getFirstname() + " " + user.getLastname();
				} 
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return name;
	}
	/**
	 * ---isMaxNumberOfUserReached---<br>
	 * Added Aug.18,2017
	 * @author Kevin
	 * @return boolean (true/false)
	 * */
	public static boolean isMaxNumberOfUserReached() {
		DBService dbService = new DBServiceImpl();
		try {
			Integer count = (Integer)dbService.executeUniqueSQLQuery("SELECT COUNT(*) FROM Tbuser WHERE isactive='true'", null);
			if(count >= maxNumberOfUserAccount){
				return true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
}
