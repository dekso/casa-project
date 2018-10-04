package com.user.maintenance;

import java.util.List;

import com.etel.forms.GenericForm;
import com.smslai_eoddb.data.Tbcodetable;
import com.smslai_eoddb.data.Tbroleaccess;
import com.smslai_eoddb.data.Tbuser;
import com.user.maintenance.form.AccessRights;
import com.user.maintenance.form.MainSubSelectModuleForm;
import com.user.maintenance.form.UserEditForm;
import com.user.maintenance.form.UserListForm;
import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

/**
 * This is a client-facing service class. All public methods will be exposed to
 * the client. Their return values and parameters will be passed to the client
 * or taken from the client, respectively. This will be a singleton instance,
 * shared between all requests.
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL,
 * String, Exception). LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to
 * modify your log level. For info on these levels, look for tomcat/log4j
 * documentation
 */
@ExposeToClient
public class UserAccountFacade extends JavaServiceSuperClass {
	/*
	 * Pass in one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log
	 * level; recommend changing this to FATAL or ERROR before deploying. For
	 * info on these levels, look for tomcat/log4j documentation
	 */
	public UserAccountFacade() {
		super(INFO);
	}

	UserAccountService service = new UserAccountServiceImpl();

	public List<Tbcodetable> roleList() {
		return service.roleList();
	}

	public List<AccessRights> accessRightsMain() {
		List<AccessRights> form = service.accessRightsMain();
		return form;
	}

	public List<AccessRights> accessRightsSub(String role) {
		List<AccessRights> form = service.accessRightsSub();
		return form;
	}

	public List<String> pageList() {
		return service.pageList();
	}

	public List<Tbroleaccess> roleAccessList(String role) {
		return service.roleAccessList(role);
	}
	
	public String addRoleAccess(Tbroleaccess rec) {
		return service.addRoleAccess(rec);
	}
	
	public String deleteRoleAccess(int id) {
		return service.deleteRoleAccess(id);
	}
	
	public String addRole(Tbcodetable rec) {
		return service.addRole(rec);
	}
	
	public String deleteRole(int id) {
		return service.deleteRole(id);
	}

	public List<Tbcodetable> mainMod() {
		List<Tbcodetable> list = service.mainMod();
		return list;
	}
	
	public List<Tbcodetable> subMod() {
		List<Tbcodetable> list = service.subMod();
		return list;
	}
	
	public MainSubSelectModuleForm selectMainSub(){
		return service.selectMainSub();
	}
	
	public String addModule(Tbcodetable rec) {
		return service.addModule(rec);
	}
	
	public String deleteModule(int id) {
		return service.deleteModule(id);
	}
	
	public String createUser(Tbuser user) {
		return service.createUser(user);
	}

	public List<UserListForm> userList(String username, String instcode) {
		return service.userList(username, instcode);
	}
	
	public Tbuser userInfo(int id) {
		return service.userInfo(id);
	}
	public String editUser(UserEditForm form) {
		return service.editUser(form);
	}
	
	/*-----------------------FORMS ACTIVATOR METHODS-----------------------*/
	public GenericForm initGenericForm(){
		GenericForm form = null;
		return form;
	}

}
