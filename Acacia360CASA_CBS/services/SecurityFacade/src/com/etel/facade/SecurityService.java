package com.etel.facade;

import java.util.List;

import com.etel.util.forms.FormValidation;
import com.etel.util.forms.UserForm;
import com.etel.security.forms.TBRoleForm;
import com.gldb.data.Tbsecurityparams;
import com.gldb.data.Tbuser;

public interface SecurityService {

	public List<Tbuser> getListofUsersPerUsernameOrRole(String username, String rolecode, String groupcode);
	public List<TBRoleForm> getListofRoles();
	public Boolean checkUsername(String username);
	public UserForm getUserAccount(String username);
	public String saveUserAccount(Tbuser useracct, List<TBRoleForm> roles);
	public UserForm getUserAccountAndRoles(String username);
	public FormValidation validate(Tbuser useracct,TBRoleForm role, String newOrEdited);
	public FormValidation validatePassword(String password, String username);
	public String validateOldPassword(String password, String username);
	public String changePassword(String username, String password);
	public String datetimerecord();
	public Tbsecurityparams getSecurityParams();
	public String saveSecurityParams(Tbsecurityparams params);
	public String resetUserSession();
	public List<Tbuser> filterDeletedAcct(String search);
	public String enableUserAcct(String username);
	public String getUserAgreementMessage();
	public FormValidation resetPassword(String username);
//	public String resendEmail(String username, String changepass, String flag);
	public List<Tbuser> getListOfUser();
}
