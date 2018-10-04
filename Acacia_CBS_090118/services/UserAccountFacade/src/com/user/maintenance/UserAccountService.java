package com.user.maintenance;

import java.util.List;

import com.gldb.data.Tbcodetable;
import com.gldb.data.Tbroleaccess;
import com.gldb.data.Tbuser;
import com.user.maintenance.form.AccessRights;
import com.user.maintenance.form.MainSubSelectModuleForm;
import com.user.maintenance.form.UserEditForm;
import com.user.maintenance.form.UserInfoForm;
import com.user.maintenance.form.UserListForm;

public interface UserAccountService {

	List<Tbcodetable> roleList();
	List<AccessRights> accessRightsMain();
	List<AccessRights> accessRightsSub();
	List<String> pageList();
	List<Tbroleaccess> roleAccessList(String role);
	String addRoleAccess(Tbroleaccess rec);
	String deleteRoleAccess(int id);
	String addRole(Tbcodetable rec);
	String deleteRole(int id);
	List<Tbcodetable> mainMod();
	List<Tbcodetable> subMod();
	MainSubSelectModuleForm selectMainSub();
	String addModule(Tbcodetable rec);
	String deleteModule(int id);
	
	String createUser(Tbuser user);
	List<UserListForm> userList(String username, String instcode);
	Tbuser userInfo(int id);
	String editUser(UserEditForm form);
	
	UserInfoForm userMainInfo();
}
