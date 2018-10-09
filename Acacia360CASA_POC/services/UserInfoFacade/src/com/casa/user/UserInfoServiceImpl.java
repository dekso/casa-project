package com.casa.user;

import java.math.BigDecimal;
import java.util.Map;

import com.casa.user.forms.UserDetailForm;
import com.casa.user.forms.UserInfoForm;
import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.util.HQLUtil;
import com.smslai_eoddb.data.Tbunit;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.security.SecurityService;

public class UserInfoServiceImpl implements UserInfoService {

	DBService dbService = new DBServiceImpl();
	Map<String, Object> param = HQLUtil.getMap();
	SecurityService service = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");

	@Override
	public UserDetailForm getUserinfo(String userid) {
		// TODO Auto-generated method stub
		UserDetailForm user = null;
		try {
			param.put("userid", service.getUserId());
			user = (UserDetailForm) dbService.execStoredProc("SELECT usr.username AS username, usr.role AS role, usr.firstname AS firstname, "
					+ "usr.middlename AS middlename, usr.lastname AS lastname, ntamt.userbalance AS unitbalance, usr.unitbrid AS brid, "
					+ "usr.userid AS userid, ntamt.currency AS currency, unit.brname AS brname, usr.instcode AS instcode "
					+ "FROM TBUSER usr JOIN TBUNIT unit ON unit.brid=usr.unitbrid "
					+ "JOIN TBNETAMT ntamt ON ntamt.userid=usr.userid WHERE usr.userid=:userid AND ntamt.currency='PHP'", 
					param, UserDetailForm.class, 0, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return user;
	}

	@Override
	public BigDecimal getUnitBalance(String userid, String currency) {
		// TODO Auto-generated method stub
		BigDecimal amount = null;
		try {
			System.out.println("userid  " +userid+"        "+currency);
			param.put("userid", userid);
			param.put("currency", currency);
//			amount = dbService.getSQLAmount("SELECT unitbalance FROM Tbuser WHERE userid=:userid", param);
			amount = (BigDecimal) dbService.execStoredProc("SELECT userbalance FROM TBNETAMT WHERE userid=:userid AND currency=:currency", 
					param, null, 0, null);
			System.out.println("Amount : " +amount);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return amount;
	}

	@Override
	public Tbunit getUnitinfo() {
		// TODO Auto-generated method stub
		Tbunit unit = null;
		try {
			param.put("userid", service.getUserId());
			System.out.println(">?>>>>" +service.getUserId());
			unit = (Tbunit) dbService.execStoredProc("SELECT * FROM TBUNIT unit LEFT JOIN TBUSER usr ON "
					+ "unit.brid=usr.unitbrid WHERE unit.instcode=usr.instcode AND usr.userid=:userid", param, Tbunit.class, 0, null);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return unit;
	}


}
