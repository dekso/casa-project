
package com.etel.facade;

import java.util.ArrayList;
import java.util.List;


import com.etel.forms.FormValidation;
import com.etel.forms.UserForm;
import com.etel.security.forms.TBRoleForm;
import com.etel.utils.UserUtil;
import com.smslai_eoddb.data.Tbsecurityparams;
import com.smslai_eoddb.data.Tbunituser;
import com.smslai_eoddb.data.Tbuser;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

/**
 * This is a client-facing service class.  All
 * public methods will be exposed to the client.  Their return
 * values and parameters will be passed to the client or taken
 * from the client, respectively.  This will be a singleton
 * instance, shared between all requests. 
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL, String, Exception).
 * LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log level.
 * For info on these levels, look for tomcat/log4j documentation
 */
@ExposeToClient
public class SecurityFacade extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public SecurityFacade() {
       super(FATAL);
    }

    //User Account Inquiry (MMM)
	public List<Tbuser> getListofUsersPerUsernameOrRole(String username, String rolecode, String groupcode) {
    	List<Tbuser> userlist = new ArrayList<Tbuser>();
    	SecurityService secsrvc = new SecurityServiceImpl();
    	userlist = secsrvc.getListofUsersPerUsernameOrRole(username, rolecode, groupcode);
    	return userlist;
    	
    }
    
    //get Roles
    public List<TBRoleForm> getListofRoles() {
    	SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.getListofRoles();
    }
      
    public Boolean checkUsername(String username) {
    	SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.checkUsername(username);
    	
    }
    public UserForm getUserAccount(String username) {
    	UserForm useraccount = new UserForm();
    	SecurityService secsrvc = new SecurityServiceImpl();
    	useraccount = secsrvc.getUserAccount(username);
    	return useraccount;
    	
    }
    
    public String saveUserAccount(Tbuser useracct, List<TBRoleForm> roles) {
    	String result = "Failed";
    	SecurityService secsrvc = new SecurityServiceImpl();
    	result = secsrvc.saveUserAccount(useracct, roles);
    	return result;
    	
    }
    
    public FormValidation validate(Tbunituser useracct, TBRoleForm role, String newOrEdited) {
    	SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.validate(useracct,role,newOrEdited);
    }
    
    public FormValidation validatePassword(String password, String username) {
    	SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.validatePassword(password, username);
    }
    
    public String validateOldPassword(String password, String username) {
    	SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.validateOldPassword(password, username);
    }

    public String changePassword(String username, String password) {
    	SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.changePassword(username, password);
    }
    
    public String datetimerecord() {
    	SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.datetimerecord();
    }
    
    public String saveSecurityParams(Tbsecurityparams params) {
    	SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.saveSecurityParams(params);
    }
    
    public Tbsecurityparams getSecurityParams() {
    	SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.getSecurityParams();
    }
    
    public String resetUserSession() {
    	SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.resetUserSession();
    }
        
    public List<Tbuser> filterDeletedAcct(String search) {
    	SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.filterDeletedAcct(search);
    }
    
    public String enableUserAcct(String username) {
    	SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.enableUserAcct(username);
    }
    
	public String getUserFirstname() throws Exception{
		String name = null;
		name = UserUtil.getUserByUsername(RuntimeAccess.getInstance().getRequest().getUserPrincipal().getName())
				.getFirstname();
		if (name == null) {
			name = "";
		}
		return name;
	}
	
	public String getUserAgreementMessage() {
		SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.getUserAgreementMessage();
	}
	
	public FormValidation resetPassword(String username) {
		SecurityService secsrvc = new SecurityServiceImpl();
    	return secsrvc.resetPassword(username);
	}
    
	public boolean userSessionCheck(){
    	return UserUtil.userSessionCheck();
	}
	
	public boolean validateMaxNoOfUser(){
		return UserUtil.isMaxNumberOfUserReached();
	}
//	public String resendEmail(String username, String changepass, String type){
//		SecurityService secsrvc = new SecurityServiceImpl();
//    	return secsrvc.resendEmail(username, changepass, type);
//	}
	public List<Tbunituser> getListOfUser(){
		SecurityService service = new SecurityServiceImpl();
		List<Tbunituser> list = new ArrayList<Tbunituser>();	
		list = service.getListOfUser();
		return list;
	}
}
