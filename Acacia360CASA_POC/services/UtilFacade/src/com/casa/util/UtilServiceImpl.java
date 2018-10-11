package com.casa.util;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.casa.acct.forms.AccountGenericForm;
import com.casa.util.forms.BranchInfoForm;
import com.casa.util.forms.DescIdForm;
import com.casa.util.forms.ProductMatrixForm;
import com.casa.util.forms.ProductUpdateCheck;
import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.printer.PrinterUtil;
import com.etel.util.HQLUtil;
import com.etel.utils.UserUtil;
import com.smslai_eoddb.data.Tbunit;
import com.smslai_eoddb.data.Tbtransactioncode;
import com.smslai_eoddb.data.Tbbrfintxjrnl;
import com.smslai_eoddb.data.Tbdeposit;
import com.smslai_eoddb.data.Tbdocsperproduct;
import com.smslai_eoddb.data.Tbdocumentpertransaction;
import com.smslai_eoddb.data.Tbdocuments;
import com.smslai_eoddb.data.Tbholiday;
import com.smslai_eoddb.data.Tbprodmatrix;
import com.smslai_eoddb.data.Tbrates;
import com.smslai_eoddb.data.Tbterminal;
import com.smslai_eoddb.data.Tbuser;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.security.SecurityService;

public class UtilServiceImpl implements UtilService {

	DBService dbService = new DBServiceImpl();
	Map<String, Object> param = HQLUtil.getMap();
	SecurityService service = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");

	@SuppressWarnings("unchecked")
	@Override
	public List<DescIdForm> getCurrency() {
		// TODO Auto-generated method stub
		List<DescIdForm> list = null;
		try {
			list = (List<DescIdForm>) dbService.execStoredProc(
					"SELECT codevalue AS id, desc1 AS description FROM TBCODETABLE WHERE codename='CURR'", null,
					DescIdForm.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<DescIdForm> getUserListCico() {
		// TODO Auto-generated method stub
		List<DescIdForm> list = null;
		try {
			param.put("userid", service.getUserId());
			Tbuser user = (Tbuser) dbService.executeUniqueHQLQuery("FROM Tbuser WHERE userid=:userid", param);
			param.put("branch", user.getUnitbrid());
			if(user.getRole().equals("cashier")) {
				list = (List<DescIdForm>) dbService.execStoredProc(
						"SELECT userid AS id, username AS description " + "FROM TBUSER WHERE role IN ('teller','cashier','csr')", null, DescIdForm.class, 1, null);
			} else if(user.getRole().equals("teller")) {
				list = (List<DescIdForm>) dbService.execStoredProc(
						"SELECT userid AS id, username AS description " + "FROM TBUSER WHERE role IN ('teller') AND unitbrid =:branch", param, DescIdForm.class, 1, null);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<DescIdForm> genCodetable(String codename) {
		List<DescIdForm> list = null;
		try {
			param.put("codename", codename);
			list = (List<DescIdForm>) dbService.execStoredProc(
					"SELECT codevalue AS id, desc1 AS description " + "FROM Tbcodetable WHERE codename=:codename",
					param, DescIdForm.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<DescIdForm> getProdtype(String prodgroup) {
		// TODO Auto-generated method stub
		List<DescIdForm> list = null;
		try {
			param.put("prodgroup", prodgroup);
			list = (List<DescIdForm>) dbService.execStoredProc(
					"SELECT prodcode AS id, prodname AS description " + "FROM TBPRODMATRIX WHERE prodgroup=:prodgroup",
					param, DescIdForm.class, 1, null);
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
	
	@Override
	public Date getBusinessdt() {
		// TODO Auto-generated method stub
		Date dt = null;
		try {
			param.put("userid", service.getUserId());
			dt = (Date) dbService.execStoredProc(
					"SELECT unit.currbusinessdate "
							+ "FROM TBUNIT unit JOIN TBUSER usr ON unit.brid=usr.unitbrid WHERE usr.userid=:userid",
					param, null, 0, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return dt;
	}

	@Override
	public String validateUser(String username, String password) {
		// TODO Auto-generated method stub
		String result = "0";
		try {
			param.put("username", username);
			System.out.println("pass : " + password);
			param.put("password", UserUtil.sha1(password));
			System.out.println("Password : " + UserUtil.sha1(password));
			Integer check = (Integer) dbService.execStoredProc(
					"SELECT COUNT(*) FROM TBUSER WHERE username=:username " + "AND password=:password AND role='boo' ",
					param, null, 0, null);
			if (check > 0) {
				System.out.println(">>>>>>>>>> Validate User : true >>>>>>>>>>>");
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public BranchInfoForm getBrInfo() {
		// TODO Auto-generated method stub
		BranchInfoForm form = null;
		try {
			param.put("userid", service.getUserId());
			form = (BranchInfoForm) dbService.execStoredProc("SELECT unit.currbusinessdate AS businessdt, "
					+ "unit.nextbusinessdate AS nxtbusinessdt, CASE WHEN unit.brstatus='0' THEN 'Close' ELSE 'Open' END AS brstatus "
					+ "FROM TBUNIT unit JOIN TBUSER usr ON unit.brid=usr.unitbrid WHERE usr.userid=:userid", param,
					BranchInfoForm.class, 0, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

	@Override
	public String updateBr(String brstat) {
		// TODO Auto-generated method stub
		String result = "0";
		try {
			param.put("userid", service.getUserId());
			if (brstat.equalsIgnoreCase("open")) {
				if ((Integer) dbService.execStoredProc(
						"UPDATE TBUNIT SET brstatus=CASE WHEN brstatus = '0' THEN '1' ELSE '0' END "
								+ "FROM TBUNIT unit JOIN TBUSER usr ON unit.brid=usr.unitbrid WHERE usr.userid=:userid",
						param, null, 2, null) > 0) {
					result = "1";
				}
			} else if (brstat.equalsIgnoreCase("close")) {
				if ((Integer) dbService.execStoredProc(
						"UPDATE TBUNIT SET brstatus=CASE WHEN brstatus = '0' THEN '1' ELSE '0' END, "
								+ "currbusinessdate = nextbusinessdate, nextbusinessdate = DATEADD(DAY,1,nextbusinessdate) "
								+ "FROM TBUNIT unit JOIN TBUSER usr ON unit.brid=usr.unitbrid WHERE usr.userid=:userid",
						param, null, 2, null) > 0) {
					result = "1";
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String aeTerminal(Tbterminal data) {
		// TODO Auto-generated method stub
		// result 0 = existing, 1 = success, 999 = error
		String result = "0";
		try {
			System.out.println(data.getIpaddress()+" "+data.getTerminal());
			param.put("ipadd", data.getIpaddress());
			param.put("trmnl", data.getTerminal());
			System.out.println("DATA" +dbService.execStoredProc("SELECT COUNT(*) FROM TBTERMINAL WHERE ipaddress=:ipadd OR terminal=:trmnl", 
					param, null, 1, null));
			if ((Integer) dbService.execStoredProc("SELECT COUNT(*) FROM TBTERMINAL WHERE ipaddress=:ipadd OR terminal=:trmnl", 
					param, null, 0, null) == 0) 
			{
				if ((Integer) dbService.execStoredProc(null, null, null, data.getId() == null ? 3 : 2, data) > 0) {
					result = "1";
				}
			}else {
				if ((Integer) dbService.execStoredProc(null, null, null,3, data) > 0) {
					result = "1";
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			result = "999";
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbterminal> terminalList(String unitid, int isUnused, String userid) {
		// TODO Auto-generated method stub
		List<Tbterminal> list = new ArrayList<Tbterminal>();
		try {
			param.put("unitid", unitid);
			System.out.println(unitid  + "  <<<<<<<< unitid");
			if(isUnused==1) {
				list = (List<Tbterminal>) dbService.execStoredProc("SELECT * FROM TBTERMINAL WHERE unitid=:unitid AND userid IS NULL", param,
						Tbterminal.class, 1, null);
			} else if(isUnused==2) {
				list = (List<Tbterminal>) dbService.execStoredProc("SELECT * FROM TBTERMINAL WHERE unitid=:unitid", param,
						Tbterminal.class, 1, null);
			} else {
				param.put("userid", userid);
				System.out.println(userid + " <<<<<< UDI");
				list = (List<Tbterminal>) dbService.execStoredProc("SELECT * FROM TBTERMINAL WHERE unitid=:unitid AND (userid IS NULL OR userid =:userid)", param,
						Tbterminal.class, 1, null);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String deleteTerminal(int id) {
		// TODO Auto-generated method stub
		String result = "0";
		try {
			param.put("id", id);
			if ((Integer) dbService.execStoredProc("DELETE FROM TBTERMINAL WHERE id=:id", param, null, 2, null) > 0) {
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<ProductMatrixForm> productList() {
		// TODO Auto-generated method stub
		try {
			return (List<ProductMatrixForm>) dbService.execStoredProc("SELECT prod.id AS id, cdtable.desc1 AS productgroup, prod.prodcode, prod.prodname, "
					+ "prod.prodsname, prod.currency, usr.username AS username FROM TBPRODMATRIX prod LEFT JOIN TBCODETABLE cdtable "
					+ "ON prod.prodgroup = cdtable.codevalue LEFT JOIN TBUSER usr ON "
					+ "prod.createdby=usr.userid WHERE cdtable.codename='PRODUCTGROUP'", 
					param, ProductMatrixForm.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public String aeProduct(Tbprodmatrix input) {
		// TODO Auto-generated method stub
		/***
		 * RESULT 0 = Error 1 = Already Existing 2 = Success
		 ***/
		String result = "0";
		try {
			System.out.println("Testing SOA : "+input.getSoaind());
			param.put("prodgroup", input.getProdgroup());
			param.put("prodcode", input.getProdcode());
			param.put("prodname", input.getProdname());
			param.put("prodsname", input.getProdsname());
			boolean proceed = false, count = false, save = false;
			if(input.getId()==null) {
				input.setCreatedby(service.getUserId());
				input.setCreateddate(new Date());
				count = true; 
				proceed = true;
			} else {
				//*****Additional checking if there is changes in prodgroup and prodcode
				param.put("id", input.getId());
				ProductUpdateCheck check =  (ProductUpdateCheck) dbService.execStoredProc("SELECT prodgroup AS prodgroup, prodcode As prodcode "
						+ "FROM TBPRODMATRIX WHERE id=:id", param, ProductUpdateCheck.class, 0, null);
				if(check.getProdgroup().equals(input.getProdgroup()) && check.getProdcode().equals(input.getProdcode())) {
					proceed = true;
				} else {
					count = true;
				}
			}
			if(count && proceed) {
				if ((Integer) dbService.execStoredProc("SELECT COUNT(*) FROM TBPRODMATRIX WHERE "
						+ "prodgroup=:prodgroup AND prodcode=:prodcode AND prodname=:prodname AND "
						+ "prodsname=:prodsname ", param, null, 0, null) > 0) {
					return "1";
				} else {
					save = true;
				}
			} else if (!count && proceed) {
				save = true;
			}
			if (save) {
				if ((Integer) dbService.execStoredProc(null, param, null, 3, input) > 0) {
					System.out.println("Entry 2 >>> ");
					result = "2";
				}
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public Tbprodmatrix getProductDetail(int id) {
		// TODO Auto-generated method stub
		try {
			param.put("id", id);
			return (Tbprodmatrix) dbService.execStoredProc("SELECT * FROM TBPRODMATRIX WHERE id=:id", 
					param, Tbprodmatrix.class, 0, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public int terminalNo(String userid) {
		// TODO Auto-generated method stub
		int id = 0;
		try { 
			param.put("userid", userid);
			System.out.println(userid +  " <<<<< userid");
			if((Integer) dbService.execStoredProc("SELECT id FROM TBTERMINAL WHERE userid=:userid", 
					param, null, 0, null)!=null) {
				id = (Integer) dbService.execStoredProc("SELECT id FROM TBTERMINAL WHERE userid=:userid", 
						param, null, 0, null);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return id;
	}

	@Override
	public Integer printDocSlip(String txrefno) {
		// TODO Auto-generated method stub
		try {
			param.put("txrefno", txrefno);
			String query ="SELECT cd.txname AS txcode, jrnl.* FROM TBBRFINTXJRNL jrnl LEFT JOIN " 
					+ "TBTRANSACTIONCODE cd ON jrnl.txcode=cd.txcode WHERE jrnl.txrefmain=:txrefno";
			if(txrefno.length()>12) {
				query ="SELECT cd.txname AS txcode, jrnl.* FROM TBBRFINTXJRNL jrnl LEFT JOIN " 
						+ "TBTRANSACTIONCODE cd ON jrnl.txcode=cd.txcode WHERE jrnl.txref=:txrefno";
			}
			Tbbrfintxjrnl jrnl = (Tbbrfintxjrnl) dbService.execStoredProc(query, param, Tbbrfintxjrnl.class, 0, null);
			List<String> datatoprint = new ArrayList<String>();
			datatoprint.add(jrnl.getTxcode().toUpperCase()+" "+jrnl.getCurrency()+" "+PrinterUtil.formatData(jrnl.getTxamount().toString(), 2));
//			datatoprint.add(jrnl.getHostacceptind().equals("1") ? "HOST ACCEPTED" : "HOST NOT ACCEPTED");
			datatoprint.add(jrnl.getAccountno());
			datatoprint.add(jrnl.getAcctname());
			datatoprint.add(jrnl.getTxref()+"   "+jrnl.getTerminalid()+"    "+jrnl.getUnit());
			datatoprint.add(jrnl.getTxdate().toString()+" "+(jrnl.getHostacceptind().equals("1") ? "HOST ACCEPTED" : "HOST NOT ACCEPTED"));
			return PrinterUtil.printerUtil(datatoprint, 1);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public Integer printPassbook(String txrefno) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Tbrates getRates(String curr,String buysell) {
		// TODO Auto-generated method stub
		Tbrates rate = new Tbrates();
		try {
			param.put("curr", curr);
			param.put("buysell", buysell);
			System.out.println("currency: " +curr+ " buysell: "+buysell);
			rate = (Tbrates)dbService.execStoredProc("SELECT currency,buySell,boardrate,irr,pds FROM Tbrates WHERE currency=:curr AND buySell=:buysell", param, Tbrates.class, 0, null);
		
		} catch (Exception e) {
			// TODO: handle exception
		}
		return rate;
	}
	
	@Override
	public List<Tbholiday> listHolidays(Date minDate){
		List<Tbholiday> listHolidays = new ArrayList<Tbholiday>();
		minDate = Calendar.getInstance().getTime();
		param.put("minDate", minDate);
		try {
			listHolidays = (List<Tbholiday>) dbService.executeListHQLQuery("FROM Tbholiday WHERE holDate>:minDate", param);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return listHolidays;
	}
	
	@Override
	public Integer printCTD(String accountno) {
		// TODO Auto-generated method stub
		try {
			param.put("acctno", accountno);
			Tbdeposit dep = (Tbdeposit) dbService.executeUniqueHQLQuery("FROM Tbdeposit WHERE accountno=:acctno", param);
			param.put("unit", dep.getUnit());
			String unit = (String) dbService.executeUniqueSQLQuery("SELECT brname FROM Tbunit WHERE brid=:unit", param);
			List<String> datatoprint = new ArrayList<String>();
			datatoprint.add("");
			datatoprint.add("");
			datatoprint.add("");
			datatoprint.add("");
			datatoprint.add("");
			datatoprint.add("");
			datatoprint.add("");
			datatoprint.add("                                                            	" + unit);
			datatoprint.add("");
			datatoprint.add("");
			datatoprint.add("                  " + dep.getAccountName());
			datatoprint.add("");
			datatoprint.add("                  " + dep.getAccountNo());
			return PrinterUtil.printerUtil(datatoprint, 4);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	@Override
	public ProductMatrixForm checkProduct(String prodcode, String prodgroup) {
		// TODO Auto-generated method stub
		ProductMatrixForm form = new ProductMatrixForm();
		try {
			param.put("prodcode", prodcode);
			param.put("prodgroup", prodgroup);
			form = (ProductMatrixForm) dbService.execStoredProc(
					"SELECT prodgroup AS productgroup,prodcode, prodname, reqinitialdepamt, rbmminmainbal FROM Tbprodmatrix WHERE prodcode=:prodcode AND prodgroup=:prodgroup",
					param, ProductMatrixForm.class, 0, null);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return form;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbdocuments> getListDocument() {
		// TODO Auto-generated method stub
		List<Tbdocuments> list = new ArrayList<Tbdocuments>();
		try {
			list = (List<Tbdocuments>) dbService.execStoredProc("SELECT * FROM Tbdocuments", null, Tbdocuments.class, 1,
					null);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbdocsperproduct> getDocsperProd() {
		// TODO Auto-generated method stub
		List<Tbdocsperproduct> list = new ArrayList<Tbdocsperproduct>();
		try {
			list = (List<Tbdocsperproduct>)dbService.execStoredProc("SELECT * from Tbdocsperproduct", null, Tbdocsperproduct.class, 1, null);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String addOrupdateDoc(Tbdocuments doc) {
		// TODO Auto-generated method stub
		String flag = "failed";
		try {
			param.put("id", doc.getDocumentcode());
			Tbdocuments docu = (Tbdocuments) dbService.execStoredProc(
					"SELECT * FROM Tbdocuments WHERE documentcode=:id", param, Tbdocuments.class, 0, null);
			if(docu != null){
				doc.setDocumentcode(docu.getDocumentcode());
				doc.setCreatedby(doc.getCreatedby());
				doc.setDatecreated(doc.getDatecreated());
				doc.setUpdatedby(UserUtil.securityService.getUserName());
				doc.setLastupdated(new Date());
				if(dbService.saveOrUpdate(doc)){
					flag = "updated";
				}
			}else{
				if(dbService.save(doc)){
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
	public String addOrupdateDocsperProd(Tbdocsperproduct docs) {
		// TODO Auto-generated method stub
		String flag = "failed";
		try {
			param.put("id",docs.getId());
			Tbdocsperproduct doc = (Tbdocsperproduct) dbService.execStoredProc(
					"SELECT * FROM Tbdocsperproduct WHERE id=:id", param, Tbdocsperproduct.class, 0, null);
			if(doc != null){
				docs.setId(doc.getId());
				docs.setDatecreated(docs.getDatecreated());
				docs.setCreatedby(docs.getCreatedby());
				docs.setUpdatedby(UserUtil.securityService.getUserName());
				docs.setLastupdated(new Date());
				if(dbService.saveOrUpdate(docs)){
					flag = "updated";
				}
			}else{
				if(dbService.save(docs)){
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
}
