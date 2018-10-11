package com.etel.facade;

import java.util.Date;
import java.util.Map;

import org.apache.log4j.Logger;
import org.joda.time.Days;
import org.joda.time.LocalDate;

import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.encryption.EncryptionFacade;
import com.etel.forms.FormValidation;
import com.etel.utils.AuditLog;
import com.etel.utils.AuditLogEvents;
import com.etel.utils.DateTimeUtil;
import com.etel.utils.HQLUtil;
import com.etel.utils.UserUtil;
import com.smslai_eoddb.data.Tbsecurityparams;
import com.smslai_eoddb.data.Tbuser;
import com.wavemaker.runtime.RuntimeAccess;


public class AuthenticationServiceImpl implements AuthenticationService {
	
	private Logger logger = Logger.getLogger(AuthenticationServiceImpl.class);

	//Error Codes
	private static final int USERNAME_NOT_FOUND = 0x525;
	private static final int INVALID_PASSWORD = 0x52e;
	private static final int NOT_PERMITTED = 0x530;
	private static final int PASSWORD_EXPIRED = 0x532;
	private static final int ACCOUNT_DISABLED = 0x533;
	private static final int ACCOUNT_EXPIRED = 0x701;
	private static final int PASSWORD_NEEDS_RESET = 0x773;
	private static final int ACCOUNT_LOCKED = 0x775; 
	private static final int ACCOUNT_VALID = 0; 
	
	private String adMessage(int errorCode, String username, String password) {
		switch(errorCode){
		case ACCOUNT_VALID:
			DBService dbService = new DBServiceImpl();
			Map<String, Object> params = HQLUtil.getMap();
			params.put("user", username);
			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:user", params);
			if(user != null && user.getIsactivedirectorymember()){
				String s = password;
				EncryptionFacade encryptPassword = new EncryptionFacade();
				s = encryptPassword.encryptSha1(s);
				user.setPassword(s);
				user.setLastlogondate(new Date());
				user.setLastip(RuntimeAccess.getInstance().getRequest().getRemoteAddr());
				dbService.saveOrUpdate(user);
				return password;
			}else{
				return "You don't have access rights in the system.";
			}
		case USERNAME_NOT_FOUND:
			return "User was not found in directory";
		case INVALID_PASSWORD:
			return "Supplied password was invalid";
		case NOT_PERMITTED:
			return "User not permitted to logon at this time";
		case PASSWORD_EXPIRED:
			return "Password has expired";
		case ACCOUNT_DISABLED:
			return "Account is disabled";
		case ACCOUNT_EXPIRED:
			return "Account expired";
		case PASSWORD_NEEDS_RESET:
			return "User must reset password";
		case ACCOUNT_LOCKED:
			return "Account locked";
		}
		
		return "Unknown (error code " + Integer.toHexString(errorCode) +")";
	}
	
	@Override
	public String autheticateUser(String username, String password) {
		
		int result = new AuthenticationServiceImplUtil().loginUserUsingAD(username, password);
		
		System.out.println("Error Code: " + result);
		
		String errorMsg = adMessage(result, username, password);
		
		if(result != 0){
			AuditLog.addAuditLog(AuditLogEvents.getAuditLogEvents(AuditLogEvents.ACTIVE_DIRECTORY_ERROR_MESSAGE),
					"User: " + username + " Error Message: " + errorMsg + ".", 
					username, 
					new Date());
		}
		
		return errorMsg;
		
	}

	@Override
	public String removeADLoginToken(String username, String password, String tag) {
		System.out.println(">>>>>>>>>>>>>>>>>>>>> Username: " + username); 
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("user", username);
		
		Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:user", params);
		if(user != null){

			AuditLog.addAuditLog(AuditLogEvents.getAuditLogEvents(AuditLogEvents.USER_LOGOUT),
					"User " + user.getUsername() + " Logout.", 
					user.getUsername(), 
					new Date());
			user.setIsloggedon(false);
			user.setLastlogoutdate(new Date());
			dbService.saveOrUpdate(user);
			
//			//Invalidate
//			ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
//	        HttpSession currentSession = attr.getRequest().getSession(false);
//	        
//	        if(null != currentSession) {
//	            currentSession.invalidate();
//	        }
			return "Removed token";
		}else{
			return "Not valid user";
		}
	}

	@Override
	public String computePasswordAge(String username) {
		String msg = "";
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("user", username);
		try{
			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:user", params);
			Tbsecurityparams param = (Tbsecurityparams) dbService.executeUniqueHQLQueryMaxResultOne("FROM Tbsecurityparams", null);
			if(user != null){
				if (!user.getIsactivedirectorymember()) {
					LocalDate now = LocalDate.now();
					LocalDate expiryDate = LocalDate.fromDateFields(user.getPwexpirydate());
					int difference = Days.daysBetween(now, expiryDate).getDays();
					
					String days = difference == 1 ? "day" : "days";
					msg = difference != 0 && (difference > 0 && difference <= param.getNumdaysbeforepasswordexpirewarn())? "Your password will expire in " + difference + " " + days + ". Please change your password or your account will soon be suspended." : "Expired";
					// msg = "Your password will expire in " + difference + " days. Please change your password or your account will soon be suspended";
				}else{
					msg = "AD";
				}
				return msg;
			}
		}catch(Exception e){
			logger.error(e);
			e.printStackTrace();
		}
		return msg;
	}

	@Override
	public Integer failedLoginCount(String username) {
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("user", username);
		Integer cnt = null;
		Tbuser user = new Tbuser();
		try{
			user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:user", params);
			Tbsecurityparams param = (Tbsecurityparams) dbService.executeUniqueHQLQueryMaxResultOne("FROM Tbsecurityparams", null);
			if (user != null) {
				if(user.getIslocked()){
					boolean min = DateTimeUtil.compareDateTimeByMinutes(user.getDatetimelockedout(), 5);
					System.out.println(">>>>>MIN: "+min);
					if(min){
						user.setIslocked(false);
						user.setInvalidattemptscount(0);
						user.setDatetimelockedout(null);
						if(dbService.saveOrUpdate(user)){
							user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:user", params);	
						}
					}
				}
				int invalidAttempt = user.getInvalidattemptscount();
				if (invalidAttempt < param.getMaxinvalidattempts()) {
					invalidAttempt++;
//					System.out.println("Invalid Attempt: " + invalidAttempt);
					user.setInvalidattemptscount(invalidAttempt);
					user.setInvalidattempip(RuntimeAccess.getInstance().getRequest().getRemoteAddr());
					dbService.saveOrUpdate(user);

					if (invalidAttempt == param.getMaxinvalidattempts()) {
						user.setIslocked(true);
						user.setDatetimelockedout(new Date());
						dbService.saveOrUpdate(user);
					}
				}
				cnt = user.getInvalidattemptscount();
				System.out.println("invalid attempt count "+cnt);
				AuditLog.addAuditLog(AuditLogEvents.getAuditLogEvents(AuditLogEvents.FAILED_LOGIN),
						"Failed logged in by " + user.getUsername() + ".", 
						user.getUsername(), 
						new Date());
			}
		}catch(Exception e){
			logger.error(e);
			e.printStackTrace();
		}
		return cnt;
	}
	@Override
	public void success(String username) {
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		try{
			if(username !=null){
				params.put("user", username);
				Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:user", params);
				if (user != null) {
					user.setLastip(RuntimeAccess.getInstance().getRequest().getRemoteAddr());
					user.setLastlogondate(new Date());
					user.setIsloggedon(true);
					user.setLastsession(RuntimeAccess.getInstance().getSession().getId());
					user.setInvalidattemptscount(0);
					dbService.saveOrUpdate(user);
					
					AuditLog.addAuditLog(AuditLogEvents.getAuditLogEvents(AuditLogEvents.USER_LOGIN),
							"User " + user.getUsername() + " login.", 
							user.getUsername(), 
							new Date());
				}
			}
		}catch(Exception e){
			logger.error(e);
			e.printStackTrace();
		}
	}

	@Override
	public String status(String username, String password) {
		System.out.println(">>>>>>>>>> Checking User Status ...." + "[username: " + username +", password: " + password + "]");
		String msg = "";
		
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("user", username);
		int difference = 0;
		int accountexpires = 0;
		try{
			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:user", params);
			if(user.getIsactivedirectorymember() != true){
				LocalDate now = LocalDate.now();
				LocalDate expiryDate = LocalDate.fromDateFields(user.getPwexpirydate());
				LocalDate validto = LocalDate.fromDateFields(user.getValiditydateto());
				difference = Days.daysBetween(now, expiryDate).getDays();
				accountexpires = Days.daysBetween(now, validto).getDays();
				if(difference <= 0){
					user.setIssuspended(true);
					dbService.saveOrUpdate(user);
					
					AuditLog.addAuditLog(AuditLogEvents.getAuditLogEvents(AuditLogEvents.SUSPEND_USER),
							"User " + user.getUsername() + " is suspended because password expired.", 
							user.getUsername(), 
							new Date());
				}
				
				if(accountexpires <= 0){
					user.setIssuspended(true);
					dbService.saveOrUpdate(user);
					
					AuditLog.addAuditLog(AuditLogEvents.getAuditLogEvents(AuditLogEvents.SUSPEND_USER),
							"User " + user.getUsername() + " is suspended because account expired.", 
							user.getUsername(), 
							new Date());
				}
			}
			
			if (user.getIschangepwrequired() == true && user.getPassword().equalsIgnoreCase(UserUtil.sha1(password))) {
				msg = "ChangePass";
			}else if (user.getIsactive() && user.getIsloggedon() && !user.getIssuspended() && !user.getIsdisabled()
					&& !user.getIslocked()) {
				msg = "Logged In";
			}else if(user.getIsactive() && user.getIslocked() && !user.getIssuspended() && !user.getIsdisabled() && !user.getIsloggedon()){
				msg = "Locked";
			}else if(user.getIsactive() && user.getIssuspended() && !user.getIslocked() && !user.getIsdisabled() && !user.getIsloggedon() && difference <= 0){
					msg = "Suspended";
			}else if(user.getIsactive() && user.getIssuspended() && !user.getIslocked() && !user.getIsdisabled() && !user.getIsloggedon() && accountexpires <= 0){
					msg = "Expired";
			}else if(user.getIsactive() && user.getIsdisabled() && !user.getIslocked() && !user.getIssuspended() && !user.getIsloggedon()){
					msg = "Disabled";
			}else if(user.getIsactive() && !user.getIsloggedon() && !user.getIssuspended() && !user.getIsdisabled() && !user.getIslocked()){
				msg = "Active";
			}
		}catch(Exception e){
			logger.error(e);
			e.printStackTrace();
		}
		
		System.out.println(">>>>>>>>>>>> User Status: " + msg);
		
		return msg;
	}
	@Override
	public FormValidation requestPassReset(String username, String emailAdd) {
		FormValidation form = new FormValidation();
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("user", username);
		try {
			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:user", params);
			if(user==null){
				form.setErrorMessage("Invalid username or email address. Please try again.");
				form.setFlag("failed");
			}else{
				if(user.getUsername().equalsIgnoreCase(username)&&user.getEmailadd().equals(emailAdd)){
//					EmailFacade email = new EmailFacade();
//					FormValidation emailForm = email.sendEmail("EM2", username, null);
//					if(emailForm.getFlag()=="success"){
//						form.setFlag("success");
//						form.setErrorMessage("Your request has been sent. Please wait while the Security Administrator is validating your request.");
//					}else{
//						form.setFlag("failed");
//						form.setErrorMessage("Unable to process request. Please try again or contact security administrator.");
//					}
					return form;
				}else{
					form.setErrorMessage("Invalid username or email address. Please try again.");
					form.setFlag("failed");
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}
	/**
	 *  User Account Status
	 *  @author Kevin
	 *  @return FormValidation = (flag = "invalid" || "valid" || "changePass" || "passExpWarning" || "existingSession" ) AND errorMessage
	 */
	@Override
	public FormValidation checkUserStatus(String username, String password, String brid) {
//		System.out.println(">>>>>>>>>> Checking User Status : "+ username);
		FormValidation form = new FormValidation();
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("user", username);
//		params.put("brid", brid );
		int pExpiryDate = 0;
		int validityDateTo = 0;
		try{
//			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:user and unitbrid=:brid", params);
			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:user", params);
			Tbsecurityparams secParam = (Tbsecurityparams) dbService.executeUniqueHQLQueryMaxResultOne("FROM Tbsecurityparams", null);
			if (user != null) {
				LocalDate now = LocalDate.now();
				if(user.getIspwneverexpire()==null || (user.getIspwneverexpire()!=null && user.getIspwneverexpire()==false)){
					LocalDate userPexpiryDate = LocalDate.fromDateFields(user.getPwexpirydate());
					pExpiryDate = Days.daysBetween(now, userPexpiryDate).getDays();
				}
				LocalDate userAccountValidTo = LocalDate.fromDateFields(user.getValiditydateto());
				validityDateTo = Days.daysBetween(now, userAccountValidTo).getDays();
				
				if (user.getIsactivedirectorymember()) {
					/*>>>>>>>>>>>>> ACTIVE DIRECTORY <<<<<<<<<<<<<<*/
					System.out.println(">>> Active Directory <<<");
					if (user.getUsername().equalsIgnoreCase(username) && user.getPassword().equalsIgnoreCase(UserUtil.sha1(password))) {
						
						//Added - Aug 18,2017 - Kevin
//						Integer count = (Integer)dbService.executeUniqueSQLQuery("SELECT COUNT(*) FROM Tbuser WHERE isactive='true'", null);
//						if(count > UserUtil.maxNumberOfUserAccount){
//							form.setFlag("invalid");
//							form.setErrorMessage("The maximum number of licensed users has been reached. Please contact the Security Administrator.");
//							return form;
//						} ced
						
						//if isdisabled
						if (user.getIsdisabled()!=null && user.getIsdisabled()) {
							form.setFlag("invalid");
							form.setErrorMessage("User account is disabled. Please contact the Security Administrator.");
							return form;
						}
						
						//if deactivated
						if (user.getIsactive()!=null && user.getIsactive() == false) {
							form.setFlag("invalid");
							form.setErrorMessage("User account is currently deactivated. Please contact the Security Administrator.");
							return form;
						}
						//if islocked
						if (user.getIslocked()!=null && user.getIslocked()) {
							boolean min = DateTimeUtil.compareDateTimeByMinutes(user.getDatetimelockedout(), 5);
							if (min == false) {
								form.setFlag("invalid");
								form.setErrorMessage("User account is locked out. Please try to login again after 5 minutes.");
								return form;
							}
						}
						//Account Validity
						if (validityDateTo < 0) {
							user.setIsactive(false);
							dbService.saveOrUpdate(user);
							AuditLog.addAuditLog(AuditLogEvents.getAuditLogEvents(AuditLogEvents.DEACTIVATE_USER),
									"User " + user.getUsername() + " is deactivated because account is expired.",
									user.getUsername(), new Date());
							form.setFlag("invalid");
							form.setErrorMessage("User account is currently deactivated. Please contact the Security Administrator.");
							return form;
						}

						//if issuspended
						if (user.getIssuspended()!=null && user.getIssuspended()) {
							form.setFlag("invalid");
							form.setErrorMessage("User account is currently suspended. Please contact the Security Administrator.");
							return form;
						}
						//if isloggedon
						if (user.getIsloggedon()!=null && user.getIsloggedon()) {
							form.setFlag("existingSession");
							form.setErrorMessage("Existing session detected. Do you want to terminate the other session?");
							return form;
						}
						form.setFlag("valid");
						return form;
					}else{
						//Invalid Attempt
						user.setInvalidattempip(UserUtil.getUserIp());
						dbService.saveOrUpdate(user);
						int attempt = failedLoginCount(username);
						form.setFlag("invalid");
						if(attempt == secParam.getMaxinvalidattempts()){
							form.setErrorMessage("User account is locked out. Please try to login again after 5 minutes.");
						}else{
							form.setErrorMessage("Invalid username, password or brid.");
						}
						return form;
					}
				} else {
					/*>>>>>>>>>>>>>>>> NON-ACTIVE DIRECTORY <<<<<<<<<<<<<<*/
					System.out.println(">>> Non - Active Directory <<<");
					//if Correct Credentials
					if (user.getUsername().equalsIgnoreCase(username) && user.getPassword().equalsIgnoreCase(UserUtil.sha1(password))) {
						
						//Added - Aug 18,2017 - Kevin
//						Integer count = (Integer)dbService.executeUniqueSQLQuery("SELECT COUNT(*) FROM Tbuser WHERE isactive='true'", null);
//						if(count > UserUtil.maxNumberOfUserAccount){
//							form.setFlag("invalid");
//							form.setErrorMessage("The maximum number of active licensed users has been reached. Please contact the Security Administrator.");
//							return form;
//						} ced
						
						//if isdisabled
						if (user.getIsdisabled()!=null && user.getIsdisabled()) {
							form.setFlag("invalid");
							form.setErrorMessage("User account is disabled. Please contact the Security Administrator.");
							return form;
						}
						
						//if deactivated
						if (user.getIsactive()!=null && user.getIsactive() == false) {
							form.setFlag("invalid");
							form.setErrorMessage("User account is currently deactivated. Please contact the Security Administrator.");
							return form;
						}
						// if Change Password required on first login
						if (user.getIschangepwrequired() != null && user.getIschangepwrequired()) {
							form.setFlag("changePass");
							form.setErrorMessage("Change Password required!");
							return form;
						}
						// if islocked
						if (user.getIslocked()!=null && user.getIslocked()) {
							boolean min = DateTimeUtil.compareDateTimeByMinutes(user.getDatetimelockedout(), 5);
							if (min == false) {
								//System.out.println(">>>>> 5 minutes");
								form.setFlag("invalid");
								form.setErrorMessage("User account is locked out. Please try to login again after 5 minutes.");
								return form;
							}
						}
						//Account Validity
						if (validityDateTo < 0) {
							user.setIsactive(false);
							dbService.saveOrUpdate(user);
							AuditLog.addAuditLog(AuditLogEvents.getAuditLogEvents(AuditLogEvents.DEACTIVATE_USER),
									"User " + user.getUsername() + " is deactivated because account is expired.",
									user.getUsername(), new Date());
							form.setFlag("invalid");
							System.out.println(">!>!>! 2");
							form.setErrorMessage("User account is currently deactivated. Please contact the Security Administrator.");
							return form;
						}
						//if unitbrid
//						if(user.getUnitbrid()!= brid || user.getUnitbrid() == null){
//							form.setFlag("invalid");
//							form.setErrorMessage("Account not found!");
//							System.out.println("BRID>>>>>" +brid);
//							return form;
//						}
						//if issuspended
						if (user.getIssuspended()!=null && user.getIssuspended()) {
							form.setFlag("invalid");
							form.setErrorMessage("User account is currently suspended. Please contact the Security Administrator.");
							return form;
						}
						if(user.getIspwneverexpire()==null || (user.getIspwneverexpire()!=null && user.getIspwneverexpire()==false)){
							// if password is expired
							if (pExpiryDate < 0) {
								user.setIssuspended(true);
								dbService.saveOrUpdate(user);
								AuditLog.addAuditLog(AuditLogEvents.getAuditLogEvents(AuditLogEvents.SUSPEND_USER),
										"User " + user.getUsername() + " is suspended because password is expired.",
										user.getUsername(), new Date());
								form.setFlag("invalid");
								form.setErrorMessage("User account is currently suspended. Please contact the Security Administrator.");
								return form;
							}
							// Password Expiration Warning
							if (pExpiryDate != 0 && (pExpiryDate > 0 && pExpiryDate <= secParam.getNumdaysbeforepasswordexpirewarn())) {
								String msg = "";
								String days = pExpiryDate == 1 ? "day" : "days";
								msg = "Your password will expire in " + pExpiryDate + " " + days
										+ ". Please change your password or your account will soon be suspended.";
								form.setFlag("passExpWarning");
								form.setErrorMessage(msg);
								return form;
							}
						}
						// if isloggedon
						if (user.getIsloggedon()!=null && user.getIsloggedon()) {
							form.setFlag("existingSession");
							form.setErrorMessage("Existing session detected. Do you want to terminate the other session?");
							return form;
						}
						form.setFlag("valid");
						return form;
					}else{
						//Invalid Attempt
						user.setInvalidattempip(UserUtil.getUserIp());
						dbService.saveOrUpdate(user);
						int attempt = failedLoginCount(username);
						form.setFlag("invalid");
						if(attempt == secParam.getMaxinvalidattempts()){
							form.setErrorMessage("User account is locked out. Please try to login again after 5 minutes.");
						}else{
							form.setErrorMessage("Invalid username, password or brid.");
						}
						return form;
					}
				}
			}else{
				form.setFlag("invalid");
				form.setErrorMessage("Invalid username, password or brid.");
			}
		}catch(Exception e){
			logger.error(e);
			e.printStackTrace();
		}
		return form;
	}
	/**
	 * Terminate Existing Session - Send Email if lastIP is not equal to currentIP.
	 * @author Kevin
	 * @return String = success / failed
	 * */
	@Override
	public String existingSession(String username) {
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
//		EmailFacade email = new EmailFacade();
		params.put("username", username);
		String flag = "failed";
		try {
			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:username", params);
			if (user != null) {
				if(user.getLastip() != null){
					if(!user.getLastip().equalsIgnoreCase(UserUtil.getUserIp())){
						user.setTerminatedsessionip(user.getLastip());
						dbService.saveOrUpdate(user);
						
//						flag = email.sendEmail(EmailCode.EXISTING_SESSION,username,null).getFlag();
						
						AuditLog.addAuditLog(AuditLogEvents.getAuditLogEvents(AuditLogEvents.EXISTING_SESSION_TERMINATED),
								"User " + user.getUsername() + " existing session terminated. Last login IP: "+user.getLastip()+" , New Login IP: "+UserUtil.getUserIp()+".", 
								user.getUsername(), 
								new Date());
					}else{
						flag = "success";
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return flag;
	}
}
