package com.gl.glacct;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.util.HQLUtil;
import com.etel.util.SequenceGenerator;
import com.etel.util.forms.DescIdForm;
import com.etel.util.forms.PSStatusChangeForm;
import com.gl.glacct.form.BranchSetupForm;
import com.gl.glacct.form.EODDetailForm;
import com.gl.glacct.form.ProofsheetDetailForm;
import com.gl.glacct.form.ProofsheetForm;
import com.gl.glacct.form.ProofsheetTrForm;
import com.gl.glacct.form.SegmentParamForm;
import com.gl.glacct.form.SegmentSelectForm;
import com.gldb.data.Tbglaccount;
import com.gldb.data.Tbmainglcode;
import com.gldb.data.Tbproofsheet;
import com.gldb.data.Tbproofsheetdetail;
import com.gldb.data.Tbproofsheettrno;
import com.gldb.data.Tbsegment;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.security.SecurityService;

public class GLAccountServiceImpl implements GLAccountService {

	DBService dbService = new DBServiceImpl();
	Map<String, Object> param = HQLUtil.getMap();
	SecurityService service = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");
	private String result = "0";
	GLAccountServiceImplUtil util = new GLAccountServiceImplUtil();

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbmainglcode> getMainGlList() {
		// TODO Auto-generated method stub
		List<Tbmainglcode> list = null;
		try {
			list = (List<Tbmainglcode>) dbService.execStoredProc(
					"SELECT cd.desc1 AS bstype," + "cd1.desc1 AS status, mn.* "
							+ "FROM TBMAINGLCODE mn LEFT JOIN TBCODETABLE cd ON mn.bstype=cd.codevalue "
							+ "LEFT JOIN TBCODETABLE cd1 ON mn.status=cd1.codevalue "
							+ "WHERE cd.codename='BSTYPE' AND cd1.codename='GLACCTSTATUS'",
					null, Tbmainglcode.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String aeMainGl(Tbmainglcode input) {
		// TODO Auto-generated method stub
		/**
		 * result 0 = error in routine result 1 = already exist result 1.5 = already in
		 * use result 2 = success
		 **/
		param.put("bstype", input.getBstype());
		param.put("mglcode", input.getGlcode());
		if (input.getId() == null && (Integer) dbService.execStoredProc(
				"SELECT COUNT(*) FROM TBMAINGLCODE WHERE glcode=:mglcode AND bstype=:bstype", param, null, 0,
				null) > 0) {
			result = "1";
		} else {
			if (input.getId() != null) {
				param.put("id", input.getId());
				if ((Integer) dbService.execStoredProc(
						"SELECT COUNT(acct.id) FROM TBGLACCOUNT acct LEFT JOIN TBMAINGLCODE main "
								+ "ON acct.mainglcode = main.glcode WHERE main.id=:id AND main.bstype=acct.bstype",
						param, null, 0, null) > 0) {
					result = "1.5";
				} else {
					if ((Integer) dbService.execStoredProc(
							"SELECT COUNT(*) FROM TBMAINGLCODE WHERE glcode=:mglcode AND bstype=:bstype", param, null,
							0, null) > 0) {
						result = "1";
					} else {
						result = util.addEditUtil(input);
					}
				}
			} else {
				result = util.addEditUtil(input);
			}
		}
		return result;
	}

	@Override
	public String deleteRecord(int id) {
		// TODO Auto-generated method stub
		/**
		 * result 0 = error in routine result 1 = already in use result 2 = success
		 **/
		try {
			param.put("id", id);
			if ((Integer) dbService
					.execStoredProc(
							"SELECT COUNT(acct.id) FROM TBGLACCOUNT acct LEFT JOIN TBMAINGLCODE main "
									+ "ON acct.mainglcode = main.glcode WHERE main.id=:id",
							param, null, 0, null) == 0) {
				if ((Integer) dbService.execStoredProc("DELETE FROM TBMAINGLCODE WHERE id=:id", param, null, 2,
						null) > 0) {
					result = "2";
				}
			} else {
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbglaccount> getGlList() {
		// TODO Auto-generated method stub
		List<Tbglaccount> list = null;
		try {
			list = (List<Tbglaccount>) dbService.execStoredProc("EXEC GLACCTLIST", null, Tbglaccount.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String aeGlAccount(Tbglaccount input) {
		// TODO Auto-generated method stub
		/**
		 * RESULT 0 = MISSING PARENT RESULT 1 = EXISTING RESULT 2 = CONDITION MET RESULT
		 * 3 = GLACCOUNT ALREADY IN USE/EXIST RESULT 4 = NOT AUTHORIZED TO CREATE MOTHER
		 * ACCOUNT RESULT 5 = GLNAME ALREADY IN USE/EXIST
		 **/
		input.setAcctcode(input.getBstype() + input.getMainglcode() + input.getSegment1() + input.getSegment2()
				+ input.getSegment3() + input.getSegment4());
		Integer chk = null;
		if (input.getSegment3str().length() == 0) {
			input.setSegment3str("0000");
		}
		if (input.getSegment4str().length() == 0) {
			input.setSegment4str("0000");
		}
		if (!service.getUserId().substring(0, 4).equals("0001") && input.getAcctlvl() == 0) {
			result = "4";
		} else {
			param.put("glname", input.getAcctname());
			if (input.getId() == null) {
				param.put("acctname", input.getAcctname());
				if ((Integer) dbService.execStoredProc("SELECT COUNT(*) FROM TBGLACCOUNT WHERE acctname=:acctname",
						param, null, 0, null) > 0) {
					result = "5";
				} else {
					chk = util.checkGLAccount(input);
					System.out.println(chk);
					if (chk != 2) {
						result = chk.toString();
					} else {
						result = util.addEditUtil(input);
					}
				}
			} else {
				param.put("id", input.getId());
				System.out.println(input.getId() + "<<<<<");
				String acctname = String.valueOf(dbService
						.execStoredProc("SELECT acctname FROM TBGLACCOUNT WHERE id=:id", param, null, 0, null));
				param.put("acctname", acctname);
				if (((String) dbService.execStoredProc("SELECT acctcode FROM TBGLACCOUNT WHERE id=:id", param, null, 0,
						null)).equals(input.getAcctcode())) {
					if (acctname.equals(input.getAcctname())) {
						result = util.addEditUtil(input);
					} else {
						param.put("acctname", input.getAcctname());
						if ((Integer) dbService.execStoredProc(
								"SELECT COUNT(*) FROM TBGLACCOUNT WHERE acctname=:acctname", param, null, 0,
								null) > 0) {
							result = "5";
						} else {
							result = util.addEditUtil(input);
						}
					}
				} else if ((Integer) dbService
						.execStoredProc("DECLARE @result int EXEC CHK_EDIT_GLACCT @id = :id, @result = @result OUTPUT "
								+ "SELECT @result AS 'result' ", param, null, 0, null) == 2) {
					param.put("acctcode", input.getAcctcode());
					if ((Integer) dbService.execStoredProc("SELECT COUNT(*) FROM TBGLACCOUNT WHERE acctcode=:acctcode",
							param, null, 0, null) > 0) {
						result = "1";
					} else {
						param.put("acctname", input.getAcctname());
						if ((Integer) dbService.execStoredProc(
								"SELECT COUNT(*) FROM TBGLACCOUNT WHERE acctname=:acctname", param, null, 0,
								null) > 0) {
							result = "5";
						} else {
							chk = util.checkGLAccount(input);
							System.out.println(chk);
							if (chk != 2) {
								result = chk.toString();
							} else {
								result = util.addEditUtil(input);
							}
						}
						// chk = util.checkGLAccount(input);
						// System.out.println(chk);
						// if (chk != 2) {
						// result = chk.toString();
						// } else {
						// result = util.addEditUtil(input);
						// }
					}
				} else {
					result = "3";
				}
			}
		}
		System.out.println("RESULT : " + result);
		return result;
	}

	@Override
	public String deleteGlAccount(int id) {
		// TODO Auto-generated method stub
		try {
			param.put("id", id);
			if ((Integer) dbService.execStoredProc(
					"DECLARE @result INT EXEC CHK_DEL_GLACCT " + "@id=:id, @result = @result OUTPUT SELECT @result",
					param, null, 0, null) == 1) {
				result = "1";
			} else {
				if ((Integer) dbService.execStoredProc("DELETE FROM TBGLACCOUNT WHERE id=:id", param, null, 2,
						null) > 0) {
					result = "2";
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<DescIdForm> mainglList(String bstype) {
		// TODO Auto-generated method stub
		List<DescIdForm> list = null;
		try {
			param.put("bstype", bstype);
			list = (List<DescIdForm>) dbService.execStoredProc(
					"SELECT glcode AS id, glname AS description FROM TBMAINGLCODE WHERE bstype=:bstype", param,
					DescIdForm.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<DescIdForm> segSelectList(SegmentSelectForm form) {
		// TODO Auto-generated method stub
		List<DescIdForm> list = null;
		try {
			param.put("mgl", form.getMgl());
			param.put("parentseg", form.getSeg());
			param.put("parentsegno", (Integer) form.getSegno());
			param.put("bstype", form.getBstype());
			System.out.println("MGL : " + form.getMgl() + "\n PARENT SEG : " + form.getSeg() + "\n PARENT SEG NO : "
					+ form.getSegno());
			list = (List<DescIdForm>) dbService.execStoredProc(
					"SELECT segcode AS id, segname AS description FROM TBSEGMENT "
							+ "WHERE maingl=:mgl AND parentseg=:parentseg AND parentsegno=:parentsegno AND bstype=:bstype",
					param, DescIdForm.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbsegment> listSeg(SegmentParamForm form) {
		// TODO Auto-generated method stub
		List<Tbsegment> list = null;
		StringBuilder strQuery = new StringBuilder();
		try {
			param.put("maingl", form.getMaingl());
			// param.put("bstype", form.get)
			strQuery.append("SELECT * FROM TBSEGMENT WHERE maingl=:maingl ");
			if (form.getMaingl() != null && form.getSeg1() == null && form.getSeg2() == null
					&& form.getSeg3() == null) {
				strQuery.append("AND parentseg=:maingl AND parentsegno=0");
			}
			if (form.getSeg1() != null && form.getSeg2() == null && form.getSeg3() == null) {
				param.put("seg", form.getSeg1());
				strQuery.append("AND parentseg=:seg AND parentsegno=1");
			} else if (form.getSeg2() != null && form.getSeg3() == null) {
				param.put("seg", form.getSeg2());
				strQuery.append("AND parentseg=:seg AND parentsegno=2");
			} else if (form.getSeg3() != null) {
				param.put("seg", form.getSeg3());
				strQuery.append("AND parentseg=:seg AND parentsegno=3");
			}
			System.out.println(strQuery.toString());
			list = (List<Tbsegment>) dbService.execStoredProc(strQuery.toString(), param, Tbsegment.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String addSeg(Tbsegment record) {
		// TODO Auto-generated method stub
		/**
		 * result 0 = error in routine result 1 = already exist result 2 = success
		 **/
		try {
			param.put("mgl", record.getMaingl());
			param.put("pseg", record.getParentseg());
			param.put("psegno", (Integer) record.getParentsegno());
			param.put("seg", record.getSegcode());
			param.put("segno", (Integer) record.getSegno());
			if ((Integer) dbService.execStoredProc(
					"SELECT COUNT(*) FROM TBSEGMENT WHERE maingl=:mgl AND parentseg=:pseg AND parentsegno=:psegno "
							+ "AND segno=:segno AND segcode=:seg ",
					param, null, 0, null) == 0) {
				if ((Integer) dbService.execStoredProc(null, null, null, 3, record) > 0) {
					result = "2";
				}
			} else {
				result = "1";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String deleteSeg(String acctcode, int acctlvl, int id) {
		// TODO Auto-generated method stub
		/**
		 * result 0 = error in routine result 1 = already in use result 2 = success
		 **/
		try {
			System.out.println("ACTT " + acctcode + " ACCT LVL " + acctlvl);
			StringBuilder query = new StringBuilder();
			query.append("SELECT COUNT(*) FROM TBGLACCOUNT WHERE ");
			if (acctlvl == 1) {
				query.append("SUBSTRING(acctcode,2,8)=:acctcode");
			} else if (acctlvl == 2) {
				query.append("SUBSTRING(acctcode,2,12)=:acctcode");
			} else if (acctlvl == 3) {
				query.append("SUBSTRING(acctcode,2,16)=:acctcode");
			} else if (acctlvl == 4) {
				query.append("SUBSTRING(acctcode,2,20)=:acctcode");
			}
			param.put("acctcode", acctcode);
			if ((Integer) dbService.execStoredProc(query.toString(), param, null, 0, null) > 0) {
				result = "1";
			} else {
				param.put("id", id);
				if ((Integer) dbService.execStoredProc("DELETE FROM TBSEGMENT WHERE id=:id", param, null, 2,
						null) > 0) {
					result = "2";
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbproofsheet> psList(String currency, Date psdate, String status) {
		// TODO Auto-generated method stub
		List<Tbproofsheet> list = new ArrayList<Tbproofsheet>();
		try {
			param.put("userid", service.getUserId());
			param.put("currency", currency);
			param.put("psdate", psdate);
			param.put("status", status);
			// System.out.println(param.get("userid").toString());
			// System.out.println(param.get("currency").toString());
			// System.out.println(param.get("status").toString());
			String role = (String) dbService.execStoredProc("SELECT role FROM TBUSER WHERE userid=:userid", param, null,
					0, null);
			StringBuilder query = new StringBuilder();
//			if (role.equals("maker")) {
//				query.append("SELECT * FROM TBPROOFSHEET WHERE createdby=:userid ");
//				// + "AND ps.status IN (0,1,4) ");
//			} else if (role.equals("checker")) {
//				query.append("SELECT * FROM TBPROOFSHEET WHERE (ps.checkedby IS NULL OR ps.checkedby=:userid) AND ps.status IN (6) ");
//			} else if (role.equals("accounting")) {
//				query.append("SELECT * FROM TBPROOFSHEET WHERE (ps.authorizedby IS NULL OR ps.authorizedby=:userid) AND ps.status IN (7) ");
//			}
			if (role.equals("maker")) {
				query.append("SELECT cd.desc1 AS currency, cd1.desc1 AS status, ps.* "
						+ "FROM TBPROOFSHEET ps LEFT JOIN TBCODETABLE cd ON ps.currency=cd.codevalue "
						+ "LEFT JOIN TBCODETABLE cd1 ON ps.status=cd1.codevalue "
						+ "WHERE cd.codename='CURRENCY' AND cd1.codename='PSSTATUS' AND ps.createdby=:userid ");
				// + "AND ps.status IN (0,1,4) ");
			} else if (role.equals("checker")) {
				query.append("SELECT cd.desc1 AS currency, cd1.desc1 AS status, ps.* "
						+ "FROM TBPROOFSHEET ps LEFT JOIN TBCODETABLE cd ON ps.currency=cd.codevalue "
						+ "LEFT JOIN TBCODETABLE cd1 ON ps.status=cd1.codevalue "
						+ "WHERE cd.codename='CURRENCY' AND cd1.codename='PSSTATUS' AND (ps.checkedby IS NULL OR ps.checkedby=:userid) "
						+ "AND ps.status IN (6) ");
			} else if (role.equals("accounting")) {
				query.append("SELECT cd.desc1 AS currency, cd1.desc1 AS status, ps.* "
						+ "FROM TBPROOFSHEET ps LEFT JOIN TBCODETABLE cd ON ps.currency=cd.codevalue "
						+ "LEFT JOIN TBCODETABLE cd1 ON ps.status=cd1.codevalue "
						+ "WHERE cd.codename='CURRENCY' AND cd1.codename='PSSTATUS' AND (ps.authorizedby IS NULL OR ps.authorizedby=:userid) "
						+ "AND ps.status IN (7) ");
			}
			if (currency != null) {
				query.append(" AND ps.currency=:currency ");
			}
			if (psdate != null) {
				query.append(" AND CONVERT(DATE,ps.psdate,120) = CONVERT(DATE,:psdate,120) ");
			}
			if (status != null) {
				query.append(" AND ps.status=:status ");
			}
			query.append("ORDER BY ps.psdate,ps.psid");
			System.out.println(query.toString());
			list = (List<Tbproofsheet>) dbService.execStoredProc(query.toString(), param, Tbproofsheet.class, 1, null);
			System.out.println("HR "+list.size());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<DescIdForm> acctList() {
		// TODO Auto-generated method stub
		List<DescIdForm> list = null;
		try {
			list = (List<DescIdForm>) dbService.execStoredProc(
					"SELECT acctcode AS id, acctname AS " + "description FROM TBGLACCOUNT WHERE acctstatus='1'", null,
					DescIdForm.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String addPS(Tbproofsheet input) {
		// TODO Auto-generated method stub
		param.put("crtby", input.getCreatedby());
		param.put("psdt", input.getPsdate());
		param.put("cur", input.getCurrency());
		if ((Integer) dbService.execStoredProc(
				"SELECT COUNT(*) FROM TBPROOFSHEET " + "WHERE psdate=:psdt AND currency=:cur", param, null, 0,
				null) > 0) {
			result = "1";
		} else {
			input.setPsid(SequenceGenerator.generateSequencePS(service.getUserId()));
			input.setCreatedby(service.getUserId());
			/** To apply when users is activated **/
			// input.setPsid(SequenceGenerator.generateSequencePS(input.getCreatedby()));
			result = util.addEditUtil(input);
		}
		return result;
	}

	@Override
	public String updtPS(PSStatusChangeForm input) {
		// TODO Auto-generated method stub
		try {
			param.put("id", input.getId());
			param.put("sts", input.getStatus());
			param.put("stsdt", input.getStatusdt() == null ? new Date() : input.getStatusdt());
			if ((Integer) dbService.execStoredProc(
					"UPDATE TBPROOFSHEET SET status=:sts, " + "statusdate=:stsdt WHERE id=:id", param, null, 2,
					null) > 0) {
				result = "2";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public ProofsheetDetailForm psDetail(String psid) {
		// TODO Auto-generated method stub
		ProofsheetDetailForm form = null;
		try {
			param.put("psid", psid);
			form = (ProofsheetDetailForm) dbService.execStoredProc(
					"SELECT DISTINCT ps.psdate AS psdate, tb.desc1 AS currency, " + "tb1.desc1 AS status, ps.id AS id, "
							+ "(SELECT SUM(drcurramt) FROM TBPROOFSHEETDETAIL WHERE psid=ps.psid AND "
							+ "CONVERT(DATE,psdt,120)=CONVERT(DATE,ps.psdate,120) ) AS drTotal, "
							+ "(SELECT SUM(crcurramt) FROM TBPROOFSHEETDETAIL WHERE psid=ps.psid AND "
							+ "CONVERT(DATE,psdt,120)=CONVERT(DATE,ps.psdate,120) ) AS crTotal "
							+ "FROM TBPROOFSHEET ps LEFT JOIN TBCODETABLE tb ON ps.currency=tb.codevalue "
							+ "LEFT JOIN TBCODETABLE tb1 ON ps.status=tb1.codevalue "
							+ "WHERE tb.codename='CURRENCY' AND ps.psid=:psid AND tb1.codename='PSSTATUS' ",
					param, ProofsheetDetailForm.class, 0, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbproofsheetdetail> psDetailList(String psid, Date psdt) {
		// TODO Auto-generated method stub
		List<Tbproofsheetdetail> list = null;
		try {
			param.put("psid", psid);
			param.put("psdt", psdt);
			System.out.println("psid : " + psid + " psdt : " + psdt);
			list = (List<Tbproofsheetdetail>) dbService.execStoredProc("SELECT cd1.desc1 AS respcenter,"
					+ "cd2.desc1 AS costcenter, cd3.desc1 AS prjctasgmt, det.* FROM TBPROOFSHEETDETAIL det "
					+ "LEFT JOIN TBCODETABLE cd1 ON cd1.codevalue=det.respcenter "
					+ "LEFT JOIN TBCODETABLE cd2 ON cd2.codevalue=det.costcenter "
					+ "LEFT JOIN TBCODETABLE cd3 ON cd3.codevalue=det.prjctasgmt "
					+ "WHERE psid=:psid AND CONVERT(DATE, psdt, 120)=CONVERT(DATE, :psdt, 120)"
					+ "AND cd1.codename='RESPCENTER' AND cd2.codename='COSTCENTER' AND cd3.codename='PROJASGMT'"
					+ "ORDER BY det.trno", param, Tbproofsheetdetail.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public String aePSDetail(Tbproofsheetdetail input) {
		// TODO Auto-generated method stub
		if (input.getId() == null) {
			input.setCreatedby(service.getUserId());
		}
		return result = util.addEditUtil(input);
	}

	@Override
	public String getTxrefno(String psid, Date psdt) {
		// TODO Auto-generated method stub
		String refno = null;
		try {
			param.put("userid", service.getUserId());
			param.put("psid", psid);
			param.put("psdt", psdt);
			System.out.println(service.getUserId());
			System.out.println(psid);
			System.out.println(psdt);
			refno = (String) dbService.execStoredProc(
					"DECLARE @sequence VARCHAR(30) " + "EXEC SEQGEN_TXREFNO @userid=:userid, @psid=:psid, @psdt=:psdt, "
							+ "@sequence = @sequence OUTPUT " + "SELECT @sequence ",
					param, null, 0, null);
			System.out.println("REF NO: " + refno);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return refno;
	}

	@Override
	public String psToVerify(String psid) {
		// TODO Auto-generated method stub
		try {
			param.put("psid", psid);
			result = String.valueOf(dbService.execStoredProc(
					"DECLARE @result INT " + "EXEC VERIFY_PS @psid=:psid, @result=@result OUTPUT " + "SELECT @result",
					param, null, 0, null));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String verifyToAuth(String psid) {
		// TODO Auto-generated method stub
		try {
			param.put("psid", psid);
			if ((Integer) dbService.execStoredProc("UPDATE TBPROOFSHEET SET status = 7 WHERE psid=:psid ", param, null,
					2, null) > 0) {
				result = "2";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String returnPS(String psid) {
		// TODO Auto-generated method stub
		try {
			param.put("psid", psid);
			if ((Integer) dbService.execStoredProc("UPDATE TBPROOFSHEET SET status = 4 WHERE psid=:psid ", param, null,
					2, null) > 0) {
				result = "2";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String authPS(String psid) {
		// TODO Auto-generated method stub
		try {
			param.put("psid", psid);
			if ((Integer) dbService.execStoredProc("UPDATE TBPROOFSHEET SET status = 8 WHERE psid=:psid ", param, null,
					2, null) > 0) {
				result = "2";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public BranchSetupForm branchDetail() {
		// TODO Auto-generated method stub
		BranchSetupForm form = new BranchSetupForm();
		try {
			param.put("brid", service.getUserId().substring(0, 4));
			System.out.println("USER " + service.getUserId().substring(0, 4));
			form = (BranchSetupForm) dbService.execStoredProc(
					"SELECT unt.brname AS brname, unt.currbusinessdate AS brbusinessdt,"
							+ " cd.desc1 AS brstatus, unt.brid AS brid FROM TBUNIT unt LEFT JOIN TBCODETABLE cd ON unt.brstatus=cd.codevalue "
							+ " WHERE cd.codename='BRSTATUS' AND unt.brid=:brid",
					param, BranchSetupForm.class, 0, null);
			System.out.println(form.getBrstatus());
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

	@Override
	public String openCloseBranch(String value) {
		// TODO Auto-generated method stub
		try {
			param.put("brid", service.getUserId().substring(0, 4));
			param.put("input", value);
			if ((Integer) dbService.execStoredProc("UPDATE TBUNIT SET brstatus=:input WHERE " + "brid=:brid", param,
					null, 2, null) > 0) {
				result = "2";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public EODDetailForm eodDetail() {
		// TODO Auto-generated method stub
		EODDetailForm form = new EODDetailForm();
		try {
			form = (EODDetailForm) dbService
					.execStoredProc("SELECT currbusinessdate AS currdt, nextbusinessdate AS nextdt, "
							+ "(SELECT COUNT(*) FROM TBUNIT WHERE brstatus=0) AS openbr "
							+ "FROM TBUNIT WHERE brid = '0001'", null, EODDetailForm.class, 0, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println(form.getCurrdt());
		System.out.println(form.getNextdt());
		return form;
	}

	@Override
	public String runEod() {
		// TODO Auto-generated method stub
		/**
		 * result 0 = error in routine result 1 = all branch not close result 2 =
		 * success result 3 = not authorized to run
		 **/
		try {
			if (!service.getUserId().substring(0, 4).equals("0001")) {
				result = "3";
			} else {
				result = String.valueOf(dbService.execStoredProc(
						"DECLARE @result int " + "EXEC EOD @result = @result OUTPUT " + "SELECT @result", null, null, 0,
						null));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@Override
	public String updatePSList(List<Tbproofsheetdetail> data, String trnostatus) {
		// TODO Auto-generated method stub
		/**
		 * result 0 = error in routine result 2 = success
		 **/
		try {
			param.put("trno", data.get(0).getTrno());
			param.put("psid", data.get(0).getPsid());
			param.put("psdt", data.get(0).getPsdt());
			System.out.println(data.get(0).getTrno());
			System.out.println(data.get(0).getPsid());
			System.out.println(data.get(0).getPsdt());
			dbService.execStoredProc("DELETE FROM TBPROOFSHEETDETAIL WHERE trno=:trno AND "
					+ "CONVERT(DATE,psdt,120) = CONVERT(DATE,:psdt,120) AND psid=:psid ", param, null, 2, null);
			Object obj = data;
			if ((Integer) dbService.execStoredProc(null, null, null, 4, obj) > 0) {
				result = "2";
				Integer trcheck = (Integer) dbService.execStoredProc("SELECT COUNT(*) FROM TBPROOFSHEETTRNO WHERE trno=:trno AND "
								+ "CONVERT(DATE,psdate,120) = CONVERT(DATE,:psdt,120) AND psid=:psid ",param, null, 0, null);
				Object[] objarr = (Object[]) dbService.execStoredProc(
						"SELECT SUM(drcurramt), SUM(crcurramt) FROM TBPROOFSHEETDETAIL WHERE trno=:trno AND CONVERT(DATE,psdt,120) = CONVERT(DATE,:psdt,120) AND psid=:psid ",
						param, null, 0, null);
				if (trcheck == null || trcheck == 0) {
					Tbproofsheettrno trnorecord = new Tbproofsheettrno();
					trnorecord.setCreatedby(data.get(0).getCreatedby());
					trnorecord.setPsdate(data.get(0).getPsdt());
					trnorecord.setPsid(data.get(0).getPsid());
					trnorecord.setTrno(data.get(0).getTrno());
					trnorecord.setStatus(0);
					trnorecord.setTotaldebit(new BigDecimal(objarr[0].toString()));
					trnorecord.setTotalcredit(new BigDecimal(objarr[1].toString()));
					dbService.execStoredProc(null, null, null, 3, trnorecord);
				} else {
					param.put("totaldr", new BigDecimal(objarr[0].toString()));
					param.put("totalcr", new BigDecimal(objarr[1].toString()));
					dbService.execStoredProc("UPDATE TBPROOFSHEETTRNO SET totaldebit=:totaldr, totalcredit=:totalcr WHERE trno=:trno AND CONVERT(DATE,psdate,120) = CONVERT(DATE,:psdt,120) AND psid=:psid", 
							param, null, 2, null);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbproofsheetdetail> getTrnoList(String trno, Date psdt) {
		// TODO Auto-generated method stub
		List<Tbproofsheetdetail> list = null;
		try {
			param.put("trno", trno);
			param.put("psdt", psdt);
			list = (List<Tbproofsheetdetail>) dbService.execStoredProc("SELECT * FROM "
					+ "TBPROOFSHEETDETAIL WHERE trno=:trno AND CONVERT(DATE,psdt,120) = CONVERT(DATE,:psdt,120)", param,
					Tbproofsheetdetail.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<ProofsheetTrForm> getTrList(String psid, Date psdt) {
		// TODO Auto-generated method stub
		List<ProofsheetTrForm> list = null;
		try { 
			param.put("psid", psid);
			param.put("psdt", psdt);
			list = (List<ProofsheetTrForm>) dbService.execStoredProc("SELECT trno.trno, trno.totaldebit, trno.totalcredit, cd.desc1 AS status FROM TBPROOFSHEETTRNO trno LEFT JOIN TBCODETABLE cd ON "
					+ "trno.status=cd.codevalue WHERE cd.codename='PSTRNOSTATUS' AND trno.psid=:psid AND CONVERT(DATE, trno.psdate, 120)=CONVERT(DATE, :psdt, 120)", 
					param, ProofsheetTrForm.class, 1, null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

}
