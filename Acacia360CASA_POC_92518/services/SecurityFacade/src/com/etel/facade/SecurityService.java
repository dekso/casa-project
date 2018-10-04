package com.etel.facade;

import java.util.List;

import com.etel.forms.FormValidation;
import com.etel.forms.UserForm;
import com.etel.security.forms.TBRoleForm;
import com.smslai_eoddb.data.Tbsecurityparams;
import com.smslai_eoddb.data.Tbunituser;
import com.smslai_eoddb.data.Tbuser;

public interface SecurityService {

	public List<Tbuser> getListofUsersPerUsernameOrRole(String username, String rolecode, String groupcode);
	public List<TBRoleForm> getListofRoles();
	public Boolean checkUsername(String username);
	public UserForm getUserAccount(String username);
	public String saveUserAccount(Tbuser useracct, List<TBRoleForm> roles);
	public UserForm getUserAccountAndRoles(String username);
	public FormValidation validate(Tbunituser useracct,TBRoleForm role, String newOrEdited);
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
	public List<Tbunituser> getListOfUser();
}
