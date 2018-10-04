/**
 * 
 */
package com.etel.facade;

import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.apache.log4j.Logger;
import org.passay.CharacterRule;
import org.passay.EnglishCharacterData;
import org.passay.LengthRule;
import org.passay.PasswordData;
import org.passay.PasswordValidator;
import org.passay.RepeatCharacterRegexRule;
import org.passay.Rule;
import org.passay.RuleResult;
import org.passay.WhitespaceRule;

import com.smslai_eoddb.data.Tbpasswordbank;
import com.smslai_eoddb.data.Tbsecurityparams;
import com.smslai_eoddb.data.Tbunituser;
import com.smslai_eoddb.data.Tbuser;
import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.forms.FormValidation;
import com.etel.forms.UserForm;
import com.etel.security.forms.TBRoleForm;
import com.etel.utils.AuditLog;
import com.etel.utils.AuditLogEvents;
import com.etel.utils.HQLUtil;
import com.etel.utils.PasswordGeneratorUtil;
import com.etel.utils.UserUtil;
import com.wavemaker.runtime.RuntimeAccess;

public class SecurityServiceImpl implements SecurityService {

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.etel.security.SecurityService#getListofUsersPerUsernameOrRole(java
	 * .lang.String, java.lang.String)
	 */
	private static final Logger logger = Logger.getLogger(SecurityServiceImpl.class);
	private static final String queryUser = "FROM Tbuser WHERE username=:user";
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Tbuser> getListofUsersPerUsernameOrRole(String username,
			String rolecode, String groupcode) {
		// TODO Search for List of Users per username or role
		DBService dbsrvc = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		List<Tbuser> userlist = new ArrayList<Tbuser>();
		params.put("username", "%"+ username + "%");
		params.put("rolecode", rolecode);
//		params.put("groupcode", groupcode);
		StringBuilder hql = new StringBuilder();
		hql.append("FROM Tbuser WHERE isdisabled <>'true'");
		if(!username.equals(null) && !username.isEmpty()) {
			hql.append(" AND (username LIKE :username OR firstname LIKE :username OR lastname LIKE :username)");
		}
//		if(groupcode != null && !groupcode.isEmpty()){
//			hql.append(" AND groupcode=:groupcode");
//		}
		try {
			userlist = (List<Tbuser>) dbsrvc.executeListHQLQuery(hql.toString(), params);
			
			//For Group code only >>return groupname - Kevin - June 5,2017
//			if(userlist !=null){
//				for(Tbuser user : userlist){
//					if(user.getGroupcode()!=null){
//						params.put("groupcode", user.getGroupcode());
//						Tbgroup tbGroup = (Tbgroup) dbsrvc.executeUniqueHQLQuery("FROM Tbgroup a WHERE a.id.groupcode=:groupcode", params);
//						if(tbGroup==null){
//							user.setGroupcode(user.getGroupcode());
//						}else{
//							user.setGroupcode(tbGroup.getGroupname());
//						}
//					}
//				}
//			}
			logger.debug("RETRIEVE USERS FROM QUERY");
		} catch (Exception e) {
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}
		return userlist;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<TBRoleForm> getListofRoles() {
		// TODO Get list of roles
		List<TBRoleForm> form = new ArrayList<TBRoleForm>();
		DBService dbsrvc = new DBServiceImpl();
		try {
//			List<Tbrole> roles = (List<Tbrole>) dbsrvc.executeListHQLQuery("FROM Tbrole",null);
//			for(Tbrole role : roles){
//				TBRoleForm tbRoleForm = new TBRoleForm();
//				tbRoleForm.setRoleid(role.getId().getRoleid());
//				tbRoleForm.setRolename(role.getId().getRolename());
//				tbRoleForm.setCreateddate(role.getCreateddate());
//				tbRoleForm.setCreatedby(role.getCreatedby());
//				tbRoleForm.setDateupdated(role.getDateupdated());
//				tbRoleForm.setUpdatedby(role.getUpdatedby());
//				form.add(tbRoleForm);
//			}
		} catch (Exception e) {
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}
		return form;
	}

	@Override
	public Boolean checkUsername(String username) {
		Boolean result = false;
		Tbuser u = new Tbuser();
		DBService dbsrvc = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("username", username);
		try {
			u = (Tbuser) dbsrvc.executeUniqueHQLQuery("FROM Tbuser Where username=:username", params);
			if (u == null) {
				result = false;
			} else {
				result = true;
			}
		} catch (Exception e) {
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public UserForm getUserAccount(String username) {

		UserForm userform = new UserForm();
		Tbuser useracct = new Tbuser();
		DBService dbsrvc = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();

		params.put("username", username);
		try {
			useracct = (Tbuser) dbsrvc.executeUniqueHQLQuery("FROM Tbuser WHERE username=:username", params);
			userform.setUseraccount(useracct);
		} catch (Exception e) {
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}
		return userform;
	}

	@Override
	public String saveUserAccount(Tbuser useracct, List<TBRoleForm> roles) {
		String results = "Failed";
		DBService dbsrvc = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("user", useracct.getUsername());
		Tbuser sUser = (Tbuser) dbsrvc.executeUniqueHQLQuery(queryUser, params);
		if (sUser != null) {
			return results;
		}
		useracct.setCreatedby(RuntimeAccess.getInstance().getRequest().getUserPrincipal().getName());
		useracct.setDatecreated(new Date());
		
		if (useracct.getIsactivedirectorymember() == false) {
			useracct.setPassword(UserUtil.sha1(useracct.getPassword()));
		} else if (useracct.getIsactivedirectorymember() == false) {
			AuditLog.addAuditLog(AuditLogEvents.getAuditLogEvents(AuditLogEvents.ADD_OR_CREATE_USER_ACCOUNT_AD),
					"Add or Create User " + useracct.getUsername() + ".",
					RuntimeAccess.getInstance().getRequest().getUserPrincipal().getName(), new Date());
		}
		try {
			if (dbsrvc.saveOrUpdate(useracct)) {
				// System.out.println(roles.toString());
//				for (TBRoleForm r : roles) {
//					Tbuserroles ur = new Tbuserroles();
//					TbuserrolesId id = new TbuserrolesId();
//					id.setRoleid(r.getRoleid());
//					id.setUsername(useracct.getUsername());
//					ur.setId(id);
//					// ur.setDatecreated(new Date());
//					if (dbsrvc.saveOrUpdate(ur)) {
//						results = "Success";
//					} else {
//						results = "Failed";
//					}
//				}
			} else {
				results = "Failed";
			}
		} catch (Exception e) {
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}
		return results;
	}

	@Override
	public UserForm getUserAccountAndRoles(String username) {
		UserForm userform = new UserForm();
		Tbuser useracct = new Tbuser();
		DBService dbsrvc = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("username", username);
		try {
			useracct = (Tbuser) dbsrvc.executeUniqueHQLQuery("FROM Tbuser WHERE username=:username", params);
			userform.setUseraccount(useracct);
		} catch (Exception e) {
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}

		return userform;
	}

	@Override
	public FormValidation validate(Tbunituser useracct, TBRoleForm role, String newOrEdited) {
		// System.out.println("Validating User before creation...");
		FormValidation values = new FormValidation();
		String errors = "";
		StringBuilder sb = new StringBuilder(errors);
		boolean hasErrors = false;
		String username = null;
		int minusernamelength = 5;
		int maxusernamelength = 20;
		DBService dbService = new DBServiceImpl();
		try {
			Tbsecurityparams param = (Tbsecurityparams) dbService
					.executeUniqueHQLQueryMaxResultOne("FROM Tbsecurityparams", null);
			if (param != null) {
				if (param.getMinimumusernamelength() != null) {
					minusernamelength = param.getMinimumusernamelength();
				}
				if (param.getMaximumusernamelength() != null) {
					maxusernamelength = param.getMaximumusernamelength();
				}
			}
			// Last Modified Aug-01-2017 - Kevin
			if (useracct != null) {
				if (newOrEdited != null && newOrEdited.equalsIgnoreCase("new")) {
					if (useracct.getUsername() == null) {
						hasErrors = true;
						sb.append("<br>");
						sb.append("<b>FAILED! </b><b>Username</b> cannot be empty.");
					} else if (useracct.getUsername() != null || !useracct.getUsername().equalsIgnoreCase("")) {
						username = useracct.getUsername();
						if (username.length() < minusernamelength || username.length() == 0) {
							hasErrors = true;
							sb.append("<br>");
							sb.append("<b>FAILED! </b><b>Username</b> should not be less than " + minusernamelength
									+ " character long.");
						}
						if (username.length() > maxusernamelength) {
							hasErrors = true;
							sb.append("<br>");
							sb.append("<b>FAILED! </b><b>Username</b> should not be greater than " + maxusernamelength
									+ " character long.");
						}
						boolean userAlreadyAvailable = checkUsername(useracct.getUsername());
						if (userAlreadyAvailable) {
							hasErrors = true;
							sb.append("<br>");
							sb.append(
									"<b>FAILED! </b><b>Username</b> already available. Please provide a different username.");
						}

						if (role == null) {
							hasErrors = true;
							sb.append("<br>");
							sb.append("<b>FAILED! </b><b>Roles</b> cannot be empty.");
						}
					}
				} else {
					if (role == null) {
						hasErrors = true;
						sb.append("<br>");
						sb.append("<b>FAILED! </b><b>Roles</b> cannot be empty.");
					}
				}
			} else {
				hasErrors = true;
				sb.append("<br>");
				sb.append("<i><b>FAILED! </b> Invalid user account creation. Cannot create empty account.</i>");
			}
			if (hasErrors) {
				values.setFlag("failed");
				values.setErrorMessage(sb.toString());
			} else {
				values.setFlag("success");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return values;
	}

	@Override
	public FormValidation validatePassword(String password, String username) {
		//System.out.println("Validating User's password...");
		FormValidation values = new FormValidation();
		String errors = "";
		StringBuilder sb = new StringBuilder(errors);
		boolean hasErrors = false;
		
		DBService dbService = new DBServiceImpl();
		Tbsecurityparams param = (Tbsecurityparams) dbService.executeUniqueHQLQueryMaxResultOne("FROM Tbsecurityparams", null);
		
		Rule[] rules = {
			// length between 8 and 20 characters
			new LengthRule(param.getMinimumpasswordlength(),20),
			// at least one upper-case character 
			new CharacterRule(EnglishCharacterData.UpperCase, param.getMinimumuppercase()),
			// at least one lower-case character 
			new CharacterRule(EnglishCharacterData.LowerCase, param.getMinimumlowercase()),
			// at least one digit character 
			new CharacterRule(EnglishCharacterData.Digit, param.getMinimumnumber()),
			// at least one symbol character 
			new CharacterRule(EnglishCharacterData.Special, param.getMinimumspecialchar()),
			// no whitespace
			new WhitespaceRule(),
			// repeated ascii character
			new RepeatCharacterRegexRule(param.getRepeatcharacterregex())
		};
		
		PasswordValidator validator = new PasswordValidator(Arrays.asList(rules));
		
		RuleResult result = validator.validate(new PasswordData(password));
		if(result.isValid()){
			//System.out.println("Password is valid");
			
			int isNewPassword = SecurityServiceImplUtil.validatePassword(username, UserUtil.sha1(password));
			if(isNewPassword == 1){
				hasErrors = true;
				sb.append("<br/>");
				sb.append("<i><b>ERROR!! System cannot complete the password change for "+ username + " because the password"
						+ " does not meet the password policy requirements. <br/><br/>"
						+ "Caused: Password already been used.</b></i>");
			}
			
		}else{
			hasErrors = true;
			for(String msg : validator.getMessages(result)){
				sb.append("<br>");
				sb.append("<i><b>FAILED!</b> "+ msg +"</i>");
			}
		}
		if(hasErrors){
			values.setFlag("failed");
			values.setErrorMessage(sb.toString());
		}else{
			values.setFlag("success");
		}
		return values;
	}

	@Override
	public String validateOldPassword(String password, String username) {
		String status = "failed";
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("username", username.trim());
		try {
			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser where username = :username", params);
			if(user == null){
				return status;
			}else{
				if(user.getPassword().equalsIgnoreCase(UserUtil.sha1(password))){
					status = "matched";
				}
			}
		} catch (Exception e) {
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public String changePassword(String username, String password) {
		String status = "failed";
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("username", username.trim());
		try {
			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser where username = :username", params);
			Tbsecurityparams secparam = (Tbsecurityparams) dbService.executeUniqueHQLQueryMaxResultOne("FROM Tbsecurityparams", null);
			if(user != null){
				user.setPassword(UserUtil.sha1(password));
				
				//Modified 05-28-2017 - Kevin >> Added Checking if password never expire.
				if(user.getIspwneverexpire()==null || (user.getIspwneverexpire()!=null && user.getIspwneverexpire()==false)){
				}else{
					Calendar cal = new GregorianCalendar(Locale.getDefault());
					cal.setTime(new Date());
					cal.add(Calendar.DATE, secparam.getMaxpasswordage());
					user.setPwexpirydate(cal.getTime());
				}
				user.setIschangepwrequired(false);
				user.setIssuspended(false);
				user.setLastpasswordchange(new Date());
				if(dbService.saveOrUpdate(user)){
					status = "success";
				}
			}
		} catch (Exception e) {
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public String datetimerecord() {
		SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
		Date date = new Date();
		String strDate = format.format(date);
		return strDate;
	}

	@Override
	public Tbsecurityparams getSecurityParams() {
		DBService dbService  = new DBServiceImpl();
		return (Tbsecurityparams) dbService.executeUniqueHQLQueryMaxResultOne("FROM Tbsecurityparams", null);
	}

	@Override
	public String saveSecurityParams(Tbsecurityparams params) {
		String status = "failed";
		DBService dbService  = new DBServiceImpl();
		try {
			Tbsecurityparams secparam = (Tbsecurityparams) dbService.executeUniqueHQLQueryMaxResultOne("FROM Tbsecurityparams", null);
			if(secparam != null){
				secparam.setMinimumpasswordlength(params.getMinimumpasswordlength());
				secparam.setMaxinvalidattempts(params.getMaxinvalidattempts());
				secparam.setMinimumspecialchar(params.getMinimumspecialchar());
				secparam.setMinimumlowercase(params.getMinimumlowercase());
				secparam.setMinimumuppercase(params.getMinimumuppercase());
				secparam.setMinimumnumber(params.getMinimumnumber());
				secparam.setRepeatcharacterregex(params.getRepeatcharacterregex());
				secparam.setPasswordhistorycount(params.getPasswordhistorycount());
				secparam.setNumdaysbeforepasswordexpirewarn(params.getNumdaysbeforepasswordexpirewarn());
				secparam.setMaxpasswordage(params.getMaxpasswordage());
				secparam.setValidityperiodindays(params.getValidityperiodindays());
				secparam.setSecuritymessage(params.getSecuritymessage());
				secparam.setDefaultpassword(params.getDefaultpassword());
				secparam.setMinimumusernamelength(params.getMinimumusernamelength());
				secparam.setMaximumusernamelength(params.getMaximumusernamelength());
				if(dbService.saveOrUpdate(secparam)){
				//	System.out.println("Successfully updated Security Parameter!!");
					status = "success";
				}
			}
		} catch (Exception e) {
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public String resetUserSession() {
		return SecurityServiceImplUtil.resetUserRecord();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbuser> filterDeletedAcct(String search) {
		List<Tbuser> list = null;
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("isdisabled", true);
		params.put("search", "%"+search+"%");
		
		try{
			
			if(search == null || search == ""){
				list = (List<Tbuser>) dbService.executeListHQLQuery("FROM Tbuser where isdisabled = :isdisabled", params);
			}else{
				list = (List<Tbuser>) dbService.executeListHQLQuery("FROM Tbuser where isdisabled = :isdisabled AND (username LIKE :search OR firstname LIKE :search OR lastname LIKE :search)", params);
			}
			
			if(list != null && list.isEmpty() == false){
				//System.out.println("Retrieved Deleted Users: " + list.size());
			}else{
				return null;
			}
		}catch(Exception e){
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String enableUserAcct(String username) {
		String status = "failed";
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("username", username);
		try {
			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser where username = :username", params);
			if (user != null) {
				user.setIsactive(true);
				user.setIsdisabled(false);
				if (dbService.saveOrUpdate(user)) {
					status = "success";
				}
			}
		} catch (Exception e) {
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}
		return status;
	}
	/**Get User Agreement Message - Tbsecurityparams.securitymessage
	 * @author Kevin 05.31.2017
	 * */
	@Override
	public String getUserAgreementMessage() {
		String msg = "";
		DBService dbService = new DBServiceImpl();
		try {
			Tbsecurityparams secParam = (Tbsecurityparams) dbService.executeUniqueHQLQueryMaxResultOne("FROM Tbsecurityparams", null);
			if (secParam != null) {
				if(secParam.getSecuritymessage()!=null){
					msg = secParam.getSecuritymessage();
				}
			}
		} catch (Exception e) {
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}
		return msg;
	}
	/**
	 * Reset Password
	 * @author Kevin 05.31.2017
	 * */
	@Override
	public FormValidation resetPassword(String username) {
		FormValidation form = new FormValidation();
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
//		EmailFacade email = new EmailFacade();
		form.setFlag("failed");
		String changePass = "";
		params.put("username", username);
		try {
			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE username=:username", params);
			Tbsecurityparams secParam = (Tbsecurityparams) dbService.executeUniqueHQLQueryMaxResultOne("FROM Tbsecurityparams", null);
			if (user != null) {
				//Max Password Age from TBSECURITYPARAMS
				Calendar cal = new GregorianCalendar(Locale.getDefault());
				cal.setTime(new Date());
				cal.add(Calendar.DATE, secParam.getMaxpasswordage());
				Date newPassExpDate = cal.getTime();
				
//				if(EmailUtil.isEmailServerReachable()){
//					changePass = PasswordGeneratorUtil.generatePassword();
//					user.setPassword(UserUtil.sha1(changePass));
//					user.setIschangepwrequired(true);
//					user.setPwexpirydate(newPassExpDate);
//					//PONGYU 08-14-17
//					user.setIsloggedon(false);
//					user.setInvalidattemptscount(0);
//					user.setIslocked(false);
//					dbService.saveOrUpdate(user);
//					
//					//Insert Generated Password to TBPASSWORDBANK
//					Tbpasswordbank passwordBank = new Tbpasswordbank();
//					passwordBank.setUsername(username);
//					passwordBank.setPassword(UserUtil.sha1(changePass));
//					passwordBank.setDatecreated(new Date());
//					dbService.save(passwordBank);
//					
//					//Email
//					email.sendEmail(EmailCode.PASSWORD_RESET, username, changePass);
//					form.setFlag("success");
//					form.setErrorMessage("Password has been changed!");
//					return form;
//				}else{
//					if(secParam!=null){
//						if(secParam.getDefaultpassword()!=null){
//							changePass = secParam.getDefaultpassword();
//							user.setPassword(UserUtil.sha1(changePass));
//							user.setIschangepwrequired(true);
//							user.setPwexpirydate(newPassExpDate);
//							//PONGYU 08-14-17
//							user.setIsloggedon(false);
//							user.setInvalidattemptscount(0);
//							user.setIslocked(false);
//							dbService.saveOrUpdate(user);
//							
//							form.setFlag("success");
//							form.setErrorMessage("Password has been changed to <b>default</b>!");
//							
//							//Email
//							if(EmailUtil.isEmailServerReachable()){
//								email.sendEmail(EmailCode.PASSWORD_RESET, username, changePass);
//							}
//						}
//					}
//				}
//				String emailFlag="success";
//				try{
//					//Modified Aug.21,2017 - Kevin
//					changePass = PasswordGeneratorUtil.generatePassword();
//					user.setPassword(UserUtil.sha1(changePass));
//					user.setIschangepwrequired(true);
//					user.setPwexpirydate(newPassExpDate);
//					user.setIsloggedon(false);
//					user.setInvalidattemptscount(0);
//					user.setIslocked(false);
//					dbService.saveOrUpdate(user);
//					//Insert Generated Password to TBPASSWORDBANK
//					Tbpasswordbank passwordBank = new Tbpasswordbank();
//					passwordBank.setUsername(username);
//					passwordBank.setPassword(UserUtil.sha1(changePass));
//					passwordBank.setDatecreated(new Date());
//					dbService.save(passwordBank);
//					form.setErrorMessage(changePass);
//					//Email
//					String res = email.sendEmail(EmailCode.PASSWORD_RESET, username, changePass).getFlag();
//					if(res != null && res.equals("success")){
//						form.setFlag("success");
//					}else{
//						emailFlag="failed";
//					}
//				} catch (Exception e) {
//					emailFlag="failed";
//				}
//				
//				/*--------Error Handling------*/
//				if(emailFlag.equals("failed")){
//					String dir = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/resources/properties");
//					File request = new File(dir + "/EmailSecurityErrorLogs.txt");
//					request.getParentFile().mkdirs();
//					try {
//						if (!request.exists()) {
//							request.getParentFile().mkdirs();
//						}
//						// Get length of file in bytes
//						long fileSizeInBytes = request.length();
//						// Convert the bytes to Kilobytes (1 KB = 1024 Bytes)
//						long fileSizeInKB = fileSizeInBytes / 1024;
//						// Convert the KB to MegaBytes (1 MB = 1024 KBytes)
//						long fileSizeInMB = fileSizeInKB / 1024;
//						FileWriter fw = new FileWriter(request, true);
//	
//						if (fileSizeInMB < 5) {
//							fw.write(">>>>Email Sending Failed: "+ new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S").format(new Date()));
//							fw.write(System.getProperty("line.separator"));
//							fw.write("  Password Reset -->  " + "Username: "+username+" , Temporary Password: "+ changePass);
//							fw.write(System.getProperty("line.separator"));
//							fw.write(System.getProperty("line.separator"));
//							fw.write(System.getProperty("line.separator"));
//							fw.close();
//						} else {
//							PrintWriter writer = new PrintWriter(request);
//							writer.print("");
//							writer.close();
//						}
//						fw.close();
//					}catch (Exception e) {
//						e.printStackTrace();
//					}
//				}
				
				return form;
			}
		} catch (Exception e) {
			logger.fatal(e.getMessage());
			e.printStackTrace();
		}
		return form;
	}

//	@Override
//	public String resendEmail(String username, String changepass, String type) {
//		String flag = "failed";
//		EmailFacade email = new EmailFacade();
//		String emailType="";
//		try {
//			try {
//				if(type != null && type.equalsIgnoreCase("create")){
//					flag = email.sendEmail(EmailCode.USER_ACCOUNT_CREATION, username, changepass).getFlag();
//					emailType = "User Account Creation";
//				}else if(type != null && type.equalsIgnoreCase("reset")){
//					flag = email.sendEmail(EmailCode.PASSWORD_RESET, username, changepass).getFlag();
//					emailType = "Password Reset";
//				}
//			} catch (Exception e) {
//				/*--------Error Handling------*/
//				String dir = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/resources/properties");
//				File request = new File(dir + "/EmailSecurityErrorLogs.txt");
//				request.getParentFile().mkdirs();
//				try {
//					if (!request.exists()) {
//						request.getParentFile().mkdirs();
//					}
//					// Get length of file in bytes
//					long fileSizeInBytes = request.length();
//					// Convert the bytes to Kilobytes (1 KB = 1024 Bytes)
//					long fileSizeInKB = fileSizeInBytes / 1024;
//					// Convert the KB to MegaBytes (1 MB = 1024 KBytes)
//					long fileSizeInMB = fileSizeInKB / 1024;
//					FileWriter fw = new FileWriter(request, true);
//
//					if (fileSizeInMB < 5) {
//						fw.write(">>>>Email Sending Failed: "+ new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S").format(new Date()));
//						fw.write(System.getProperty("line.separator"));
//						fw.write("  "+emailType+" -->  " + "Username: "+username+" , Temporary Password: "+ changepass);
//						fw.write(System.getProperty("line.separator"));
//						fw.write(System.getProperty("line.separator"));
//						fw.write(System.getProperty("line.separator"));
//						fw.close();
//					} else {
//						PrintWriter writer = new PrintWriter(request);
//						writer.print("");
//						writer.close();
//					}
//					fw.close();
//				} catch (Exception ex) {
//					ex.printStackTrace();
//				} 
//				return flag;
//			}
//			
//		} catch (Exception e) {
//			e.printStackTrace();
//			return flag;
//		}
//		return flag;
//	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbunituser> getListOfUser() {
		// TODO Auto-generated method stub
		DBService dbservice = new DBServiceImpl();
		List<Tbunituser> list = new ArrayList<Tbunituser>();
		Map<String,Object> params = HQLUtil.getMap();
		try {
			list =(List<Tbunituser>)dbservice.executeListHQLQuery("FROM Tbunituser", params);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return list;
	}
}
