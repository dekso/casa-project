package com.user.maintenance;

import java.io.File;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.forms.GenericForm;
import com.etel.util.HQLUtil;
import com.etel.util.SequenceGenerator;
import com.etel.utils.UserUtil;
import com.mongodb.DB;
import com.smslai_eoddb.data.Tbcodetable;
import com.smslai_eoddb.data.Tbnetamt;
import com.smslai_eoddb.data.Tbroleaccess;
import com.smslai_eoddb.data.Tbuser;
import com.sun.jersey.core.impl.provider.entity.XMLJAXBElementProvider.General;
import com.user.maintenance.form.AccessRights;
import com.user.maintenance.form.MainSubSelectModuleForm;
import com.user.maintenance.form.UserEditForm;
import com.user.maintenance.form.UserListForm;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.security.SecurityService;

public class UserAccountServiceImpl implements UserAccountService {

	DBService dbService = new DBServiceImpl();
	Map<String, Object> param = HQLUtil.getMap();
	SecurityService service = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");
	private String result = "0";
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Tbcodetable> roleList() {
		// TODO Auto-generated method stub
		List<Tbcodetable> list = new ArrayList<Tbcodetable>();
		try {
			list = (List<Tbcodetable>) dbService.execStoredProc("SELECT * FROM TBCODETABLE WHERE codename='ROLE'", 
					null, Tbcodetable.class, 1, null);
		} catch (Exception e) {
			
		}
		return list;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<AccessRights> accessRightsMain() {
		// TODO Auto-generated method stub
		List<AccessRights> list = new ArrayList<AccessRights>();
		try {
			param.put("userid", service.getUserId());
			System.out.println("USER ID : "+service.getUserId());
			String role = (String) dbService.execStoredProc("SELECT role FROM TBUSER WHERE userid=:userid", 
					param, null, 0, null);
			
			param.put("role", role);
			System.out.println("ROLE : "+role);
			list = (List<AccessRights>) dbService.execStoredProc("SELECT tb.module AS module, tb.modulename AS modulename,  "
					+ "tb.modulelevel AS level, tb.page AS page, (SELECT COUNT(*) FROM TBROLEACCESS tbl WHERE "
					+ "tbl.module=tb.module AND tbl.role=tb.role) AS subcount "
					+ "FROM TBROLEACCESS tb WHERE tb.modulelevel=1 AND tb.role=:role ORDER BY tb.module", 
					param, AccessRights.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("List main : " +list.size());
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<AccessRights> accessRightsSub() {
		// TODO Auto-generated method stub
		List<AccessRights> list = new ArrayList<AccessRights>();
		try {
			param.put("userid", service.getUserId());
			String role = (String) dbService.execStoredProc("SELECT role FROM TBUSER WHERE userid=:userid", 
					param, null, 0, null);
			param.put("role", role);
			list = (List<AccessRights>) dbService.execStoredProc("SELECT tb.module AS module, tb.modulename AS modulename,  "
					+ "tb.modulelevel AS level, tb.page AS page "
					+ "FROM TBROLEACCESS tb WHERE tb.modulelevel!=1 AND tb.role=:role", 
					param, AccessRights.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public List<String> pageList() {
		// TODO Auto-generated method stub
		List<String> list = new ArrayList<String>();
		String urlDirectory = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("pages/");
		try {
			File file = new File(urlDirectory);
			list = Arrays.asList(file.list());
		} catch(Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbroleaccess> roleAccessList(String role) {
		// TODO Auto-generated method stub
		List<Tbroleaccess> list = new ArrayList<Tbroleaccess>();
		try {
			param.put("role", role);
			list = (List<Tbroleaccess>) dbService.execStoredProc("SELECT * FROM TBROLEACCESS WHERE role=:role ORDER by module, "
					+ " modulelevel", param, Tbroleaccess.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String addRoleAccess(Tbroleaccess rec) {
		// TODO Auto-generated method stub
		try {
			if ((Integer) dbService.execStoredProc(null, null, null, 3, rec) > 0) 
			{
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String deleteRoleAccess(int id) {
		// TODO Auto-generated method stub
		try {
			param.put("id", id);
			if ((Integer) dbService.execStoredProc("DELETE FROM TBROLEACCESS WHERE id=:id", 
					param, null, 2, null) > 0 )
			{
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String addRole(Tbcodetable rec) {
		// TODO Auto-generated method stub
		try {
			if ((Integer) dbService.execStoredProc(null, null, null, 3, rec) > 0) 
			{
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String deleteRole(int id) {
		// TODO Auto-generated method stub
		try {
			param.put("id", id);
			if ((Integer) dbService.execStoredProc("DELETE FROM TBCODETABLE WHERE id=:id", 
					param, null, 2, null) > 0 )
			{
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbcodetable> mainMod() {
		// TODO Auto-generated method stub
		List<Tbcodetable> list = null;
		try { 
			list = (List<Tbcodetable>) dbService.execStoredProc("SELECT id AS id, codevalue AS codevalue, desc1 AS desc1 "
					+ "FROM TBCODETABLE WHERE codename='MODULE' ORDER by codevalue ", 
					null, Tbcodetable.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbcodetable> subMod() {
		// TODO Auto-generated method stub
		List<Tbcodetable> list = null;
		try { 
			list = (List<Tbcodetable>) dbService.execStoredProc("SELECT id AS id, codevalue AS codevalue, desc1 AS desc1 "
					+ "FROM TBCODETABLE WHERE codename='SUBMODULE'", 
					null, Tbcodetable.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public MainSubSelectModuleForm selectMainSub() {
		// TODO Auto-generated method stub
		MainSubSelectModuleForm form = new MainSubSelectModuleForm();
		try { 
			List<GenericForm> main = (List<GenericForm>) dbService.execStoredProc("SELECT  codevalue AS id, desc1 AS value "
					+ "FROM TBCODETABLE WHERE codename='MODULE'", null, GenericForm.class, 1, null);
			List<GenericForm> sub = (List<GenericForm>) dbService.execStoredProc("SELECT  codevalue AS id, desc1 AS value "
					+ "FROM TBCODETABLE WHERE codename='SUBMODULE'", null, GenericForm.class, 1, null);
			form.setMainmod(main);
			form.setSubmod(sub);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

	@Override
	public String addModule(Tbcodetable rec) {
		// TODO Auto-generated method stub
		try {
			param.put("mod", rec.getCodename());
			rec.setCodevalue((String) dbService.execStoredProc("SELECT CONVERT(VARCHAR,MAX(CAST(codevalue AS INT))+1) "
					+ "FROM TBCODETABLE WHERE codename=:mod", param, null, 0, null));
			if ((Integer) dbService.execStoredProc(null, null, null, 3, rec) > 0) {
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String deleteModule(int id) {
		// TODO Auto-generated method stub
		try {
			param.put("id", id);
			if ((Integer) dbService.execStoredProc("DELETE FROM TBCODETABLE WHERE id=:id", 
					param, null, 2, null) > 0 )
			{
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public String createUser(Tbuser user) {
		// TODO Auto-generated method stub
		try {
			System.out.println("ACTIVE : "+user.getIsactive());
			user.setPassword(UserUtil.sha1("P@ssword01"));
			user.setUserid(SequenceGenerator.generateUserSequence(user.getUnitbrid(), user.getInstcode()));
			if ((Integer) dbService.execStoredProc(null, null, null, 3, user) > 0)
			{
//				if (user.getRole().equals("teller") || user.getRole().equals("cashier")) {
					List<String> currlist = (List<String>) dbService.execStoredProc(
							"SELECT codevalue FROM TBCODETABLE WHERE codename='CURR' ", null, null, 1, null);
					System.out.println("CURRENCY COUNT "+currlist.size());
					for (String currency : currlist) {
						Tbnetamt record = new Tbnetamt();
						record.setUserbalance(BigDecimal.ZERO);
						record.setCurrency(currency);
						record.setUserid(user.getUserid());
						record.setBusinessdate(user.getDatecreated());
						dbService.execStoredProc(null, null, null, 3, record);
					}
					result = "1";
//				} else {
//					result = "1";
//				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<UserListForm> userList(String username, String instcode) {
		// TODO Auto-generated method stub
		List<UserListForm> list = new ArrayList<UserListForm>();
		try {
			param.put("username", "%"+username+"%");
			param.put("instcode", instcode);
			StringBuilder strquery = new StringBuilder();
			strquery.append("SELECT id AS id, username AS username, userid AS userid, "
					+ "currency AS currency, unitbalance AS unitbalance, role AS role, "
					+ "CONCAT(firstname,' ',SUBSTRING(middlename,1,1),'. ',lastname) AS name "
					+ "FROM TBUSER WHERE instcode =:instcode ");
			if (username == null) {
			} else {
				strquery.append("AND username LIKE :username");
			}
			list = (List<UserListForm>) dbService.execStoredProc(strquery.toString(), 
					param, UserListForm.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public Tbuser userInfo(int id) {
		// TODO Auto-generated method stub
		Tbuser user = null;
		try { 
			param.put("id", id);
			System.out.println("ID :" +id);
			user = (Tbuser) dbService.execStoredProc("SELECT * FROM TBUSER WHERE id=:id", param, Tbuser.class, 0, null);
			System.out.println(user.getCurrency()+" "+user.getUsername());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return user;
	}

	@Override
	public String editUser(UserEditForm form) {
		// TODO Auto-generated method stub
		try {
			param.put("id", form.getId());
			param.put("fname", form.getFirstname());
			param.put("mname", form.getMiddlename());
			param.put("lname", form.getLastname());
			param.put("email", form.getEmail());
			param.put("pwnvrexp", form.isPassneverexp());
			param.put("active", form.isActive());
			param.put("locked", form.isLocked());
			param.put("suspended", form.isSuspended());
			param.put("limit", form.getTellerslimit());
			param.put("updtby", form.getUpdatedby());
			param.put("dtupdt", new Date());
			if ((Integer) dbService.execStoredProc("UPDATE TBUSER SET firstname=:fname, middlename=:mname, lastname=:lname, "
					+ "emailadd=:email, ispwneverexpire=:pwnvrexp, isactive=:active, islocked=:locked, issuspended=:suspended, "
					+ "limitamount=:limit, updatedby=:updtby, dateupdated=:dtupdt WHERE id=:id", param, null, 2, null) > 0) 
			{
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

}
