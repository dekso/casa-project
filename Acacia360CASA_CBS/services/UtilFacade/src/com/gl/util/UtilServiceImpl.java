package com.gl.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.gldb.data.Tbholiday;
import com.gldb.data.Tbmerchant;
import com.gldb.data.Tbprocessingdate;
import com.gldb.data.Tbtransactioncode;
import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.util.HQLUtil;
import com.etel.util.forms.DescIdForm;
import com.gl.util.forms.CodetableForm;
import com.gldb.data.Tbcodetable;
import com.gldb.data.Tbfeesandcharges;
import com.gldb.data.Tbunit;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.security.SecurityService;

public class UtilServiceImpl implements UtilService { 

	DBService dbService = new DBServiceImpl();
	Map<String, Object> param = HQLUtil.getMap();
	SecurityService service = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");
	private String result = "0";
	
	@SuppressWarnings("unchecked")
	@Override
	public List<DescIdForm> genCodetable(String codename) {
		// TODO Auto-generated method stub
		List<DescIdForm> list = null;
		try{
			if (codename == null) {
				list = (List<DescIdForm>) dbService.execStoredProc(
						"SELECT codevalue AS id, desc1 AS description " + "FROM Tbcodetable",
						null, DescIdForm.class, 1, null);
			} else {
				param.put("codename", codename);
				list = (List<DescIdForm>) dbService.execStoredProc(
						"SELECT codevalue AS id, desc1 AS description " + "FROM Tbcodetable WHERE codename=:codename",
						param, DescIdForm.class, 1, null);	
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return list;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Tbcodetable> listCodetable(String codename) {
		// TODO Auto-generated method stub
		List<Tbcodetable> list = null;
		try{
			if (codename == null) {
				list = (List<Tbcodetable>) dbService.execStoredProc(
						"SELECT * FROM Tbcodetable",
						null, Tbcodetable.class, 1, null);
			} else {
				param.put("codename", codename);
				list = (List<Tbcodetable>) dbService.execStoredProc(
						"SELECT * FROM Tbcodetable WHERE codename=:codename",
						param, Tbcodetable.class, 1, null);	
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String addCodetable(Tbcodetable record) {
		// TODO Auto-generated method stub
		/**
		 * result 0 = error in routine
		 * result 1 = success
		 * **/
		try {
			if(record.getId()!=null){
				Tbprocessingdate proc = (Tbprocessingdate)dbService.executeUniqueHQLQuery("FROM Tbprocessingdate WHERE id=1", null);
				proc.setId(1);
				proc.setCodetableedited(1);
				dbService.saveOrUpdate(proc);
			}
			if ((Integer) dbService.execStoredProc(null, null, null, 3, record) > 0) {
				result = "1";
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<String> getCodename() {
		// TODO Auto-generated method stub
		List<String> list = null;
		try {
			list = (List<String>) dbService.execStoredProc(
					"SELECT DISTINCT codename FROM Tbcodetable",
					null, null, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbunit> getBranchList() {
		// TODO Auto-generated method stub
		List<Tbunit> list = new ArrayList<Tbunit>();
 		try {
			list = (List<Tbunit>) dbService.execStoredProc(
					"SELECT * FROM TBUNIT",
					null, Tbunit.class, 1, null);
			System.out.println("list size: "+list.size());
 			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<DescIdForm> getPsStatSelect() {
		// TODO Auto-generated method stub
		List<DescIdForm> list = null;
		try{
			list = (List<DescIdForm>) dbService.execStoredProc("SELECT codevalue AS id, desc1 AS description FROM Tbcodetable "
					+"WHERE codename='PSSTATUS' AND codevalue < 2",
					null, DescIdForm.class, 1, null);
		}catch(Exception e){
			e.printStackTrace();
		}
		return list;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<Tbholiday> getListHoliday(String search) {
		// TODO Auto-generated method stub
		Map<String,Object> params = new HashMap<String, Object>();
		List<Tbholiday> list = new ArrayList<Tbholiday>();
		try {
			params.put("search", search==null ? "%":"%"+search+"%");
			System.out.println("search holiday: " +search);
			
			list = (List<Tbholiday>)dbService.executeListHQLQuery("FROM Tbholiday WHERE hol_name like :search", params);
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}


	@Override
	public String addOrupdateHoliday(Tbholiday hol,String type) {
		// TODO Auto-generated method stub
		Map<String, Object> params = new HashMap<String, Object>();
		String flag = "failed";
		try {
			params.put("id", hol.getId());
			System.out.println("holiday id: " +hol.getId());
			
			Tbholiday hd = (Tbholiday)dbService.executeUniqueHQLQuery("FROM Tbholiday WHERE id=:id", params);
			
			if(hd == null && type.equals("1")){
				if(dbService.save(hol)){
					flag = "created";
				}
			}
			if(hd != null && type.equals("2")){
				hol.setId(hd.getId());
				if(dbService.saveOrUpdate(hol)){
					flag = "updated";
				}
			}if(hd != null && type.equals("3")){
				if(dbService.delete(hd)){
					flag = "deleted";
				}
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return flag;
	}

	@Override
	public String addBranch(Tbunit unit) {
		// TODO Auto-generated method stub
		Map<String,Object> params = HQLUtil.getMap();
		String flag = "failed";
		try {
			params.put("id", unit.getId());
			Tbunit un = (Tbunit)dbService.executeUniqueHQLQuery("FROM Tbunit WHERE id=:id", params);
			
			if(un != null){
				unit.setId(un.getId());
				unit.setUpdatedby(service.getUserName());
				unit.setSeqno(unit.getSeqno());
				unit.setSequser(unit.getSequser());
				unit.setSeqmerch(unit.getSeqmerch());
				unit.setSeqtdc(unit.getSeqtdc());
				unit.setSeqoverride(unit.getSeqoverride());
				unit.setSeqyy(unit.getSeqyy());
				unit.setInstcode(unit.getInstcode());
				if(dbService.saveOrUpdate(unit)){
					flag="updated";
				}
			}else{
				if(dbService.save(unit)){
					flag ="created";
				}
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return flag;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<CodetableForm> getListofCodesPerCodename(String codename) {
		// TODO Auto-generated method stub
		List<CodetableForm> codelist = new ArrayList<CodetableForm>();
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		params.put("codename", codename);
		try {
			codelist = (List<CodetableForm>) dbService.execSQLQueryTransformer("SELECT codename,codevalue,desc1,desc2 FROM Tbcodetable WHERE codename=:codename ORDER BY desc1 ASC", params, CodetableForm.class, 1);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return codelist;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbtransactioncode> getListTxcode(String search) {
		// TODO Auto-generated method stub
		List<Tbtransactioncode> list = new ArrayList<Tbtransactioncode>();
		DBService dbService = new DBServiceImpl();
		Map<String,Object> params = HQLUtil.getMap();
		try {
			params.put("search", search==null? "%":"%"+search+"%");
			list = (List<Tbtransactioncode>) dbService.executeListHQLQuery(
					"FROM Tbtransactioncode WHERE txcode like :search OR txname like :search", params);
			System.out.println("size: " +list.size());

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String addOrUpdateTxcode(Tbtransactioncode code) {
		// TODO Auto-generated method stub
		String flag = "failed";
		Map<String, Object> params = HQLUtil.getMap();
		DBService dbService = new DBServiceImpl();
		try {
			params.put("id", code.getId());
			Tbtransactioncode tx = (Tbtransactioncode) dbService
					.executeUniqueHQLQuery("FROM Tbtransactioncode WHERE id=:id", params);
			
			if(tx!=null){
				code.setId(tx.getId());
				if(dbService.saveOrUpdate(code)){
					flag = "updated";
				}
			}else{
				if(dbService.save(code)){
					flag = "created";
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return flag;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbunit> getAllBranch() {
		// TODO Auto-generated method stub
		List<Tbunit> list = new ArrayList<Tbunit>();
		try {
			list = (List<Tbunit>)dbService.execStoredProc("SELECT * FROM Tbunit", null, Tbunit.class, 1, null);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbmerchant> getListMerchant() {
		// TODO Auto-generated method stub
		List<Tbmerchant> list = new ArrayList<Tbmerchant>();
		try {
			list = (List<Tbmerchant>) dbService.execStoredProc("SELECT * FROM Tbmerchant", null, Tbmerchant.class, 1,
					null);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String addOrupdateMerchant(Tbmerchant merchant) {
		// TODO Auto-generated method stub
		String flag = "failed";
		try {
			param.put("id", merchant.getId());
			System.out.println("merchant id : " +merchant.getId());
			Tbmerchant merch = (Tbmerchant)dbService.execStoredProc("SELECT * FROM Tbmerchant WHERE id=:id", param, Tbmerchant.class, 0, null);
			
			if(merch != null){
				merchant.setId(merch.getId());
				merchant.setUnit(merchant.getUnit());
				merchant.setStatus(merchant.getStatus());
				merchant.setInstcode(merchant.getInstcode());
				if(dbService.saveOrUpdate(merchant)){
					flag = "updated";
				}
			
			}else{
				if(dbService.save(merchant)){
					flag = "created";
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return flag;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbfeesandcharges> getListFeesandCharges() {
		// TODO Auto-generated method stub
		List<Tbfeesandcharges> list = new ArrayList<Tbfeesandcharges>();
		try {
			list = (List<Tbfeesandcharges>) dbService.execStoredProc("SELECT * FROM Tbfeesandcharges", null,
					Tbfeesandcharges.class, 1, null);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String addOrupdateFees(Tbfeesandcharges fees) {
		// TODO Auto-generated method stub
		String flag = "failed";
		try {
			param.put("id", fees.getId());
			Tbfeesandcharges fee = (Tbfeesandcharges) dbService.execStoredProc(
					"SELECT * FROM Tbfeesandcharges WHERE id=:id", param, Tbfeesandcharges.class, 0, null);
			if(fee != null){
				fees.setId(fee.getId());
				if(dbService.saveOrUpdate(fees)){
					flag = "updated";
				}
			}else{
				if(dbService.save(fees)){
					flag = "created";
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return flag;
	}

	@Override
	public String checkBrid(String brid) {
		// TODO Auto-generated method stub
		// 1 = existing  0 = does not exist
		String flag = "failed";
		try {
			param.put("brid", brid);
			System.out.println("brid: " +brid);
			 Tbunit unit= (Tbunit)dbService.execStoredProc("SELECT * FROM Tbunit WHERE brid=:brid", param, Tbunit.class, 0, null);
			if(unit != null){
				flag = "1";
			}else{
				flag = "0";
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return flag;
	}



}
