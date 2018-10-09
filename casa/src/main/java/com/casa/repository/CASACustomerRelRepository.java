package com.casa.repository;

import com.casa.form.csr.*;
import com.casa.services.UtilService;
import com.casa.services.impl.UtilServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.util.Date;
import java.sql.Types;
import java.util.HashMap;
import java.util.List;

/**
 * Created by saoDG on 5/27/2018.
 */
@Repository
public class CASACustomerRelRepository {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    JdbcTemplate jt;

    @Autowired
    UtilService utilService;

    public String generateAccountNumberSequence(String unit, String prodcode, String prodgroup) {
        try {
            Connection connection = jt.getDataSource().getConnection();
            CallableStatement statement = connection.prepareCall("{call SEQGEN_ACCTNO(?,?,?,?)}");
            statement.setString("unit", unit);
            statement.setString("prodcode", prodcode);
            statement.setString("prodgroup", prodgroup);
            statement.registerOutParameter("sequence", Types.VARCHAR);
            statement.execute();
            String acctno = statement.getString("sequence");
            return acctno.concat(utilService.getCheckDigit(acctno, 93812));
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> Generate Account No : " + e.getMessage(), e);
        }
        return null;
    }

    public Integer accountCreationInit(String accountno) {
        try {
            Connection connection = jt.getDataSource().getConnection();
            CallableStatement statement = connection.prepareCall("{call ACCOUNTINIT(?,?)}");
            statement.setString("accountno", accountno);
            statement.registerOutParameter("resultcode", Types.INTEGER);
            statement.execute();
            return statement.getInt("resultcode");
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> Account Init : " + e.getMessage(), e);
        }
        return null;
    }

    public Integer updateAcctstat(String accountno) {
        try {
            return jt.update("UPDATE TBDEPOSIT SET AccountStatus = 5 WHERE AccountNo=?",
                    new Object[]{accountno});
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> Account Init : " + e.getMessage(), e);
        }
        return null;
    }

    public BigDecimal getHoldAmountBalance(String accountno) {
        try {
            return jt.queryForObject("SELECT (AccountBalance-(PlaceholdAmt+FloatAmount+earmarkbal+garnishedbal)) FROM " +
                    "TBDEPOSIT WHERE AccountNo=?", new Object[]{accountno}, BigDecimal.class);
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> Get Placehold Amount : ", e.getMessage(), e);
        }
        return null;
    }

    public Integer updateHoldAmount(String accountno, BigDecimal amount, Integer type) {
        try {
            StringBuilder query = new StringBuilder();
            query.append("UPDATE TBDEPOSIT SET ");
            query.append( type==1 ? "PlaceholdAmt=PlaceholdAmt+? "
                        : type==3 ? "earmarkbal=earmarkbal+? "
                        : type==4 ? "garnishedbal=garnishedbal+? " : "");
            query.append("WHERE AccountNo=?");
            return jt.update(query.toString(), new Object[]{amount, accountno});
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> Update Hold Amount : ", e.getMessage(), e);
        }
        return null;
    }

    @SuppressWarnings("unchecked")
    public List<PlaceHoldForm> holdAmountList(String accountno, Integer type) {
        try {
            StringBuilder query = new StringBuilder();
            query.append("SELECT chk.accountno AS accountno, dep.AccountName AS accountname, chk.amount AS amount, "
                    + "chk.datehold AS datehold, chk.expirydate AS expirydate, "
                    + "chk.validitydate AS validitydate, dep.AccountBalance AS acctbal, chk.id AS id, "
                    + "dep.AccountBalance-dep.PlaceholdAmt AS availbal ");
            query.append( type == 1 ? ",cd.desc1 AS holdreason " : "");
            query.append("FROM TBHOLDAMTCHECK chk JOIN TBDEPOSIT dep ON chk.accountno=dep.AccountNo ");
            query.append(
                    type == 1 ?
                    "JOIN TBCODETABLE cd ON cd.codevalue=chk.holdreason WHERE chk.txcode=? AND chk.status = 1 AND cd.codename='HOLDREASON'"
                    : "WHERE chk.txcode=? AND chk.status = 1 ");
            query.append(accountno.equalsIgnoreCase("all") ? "" : " AND chk.accountno=?");
            return jt.query(query.toString(), accountno.equalsIgnoreCase("all") ? new Object[]{type}
                            : new Object[]{type,accountno}, new BeanPropertyRowMapper<>(PlaceHoldForm.class));
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> Hold Amount List : ", e.getMessage(), e);
        }
        return null;
    }

    public Integer updateLiftHoldRecord(HashMap<String, Object> data) {
        try {
            return jt.update("UPDATE tb SET tb.releaseby=?, tb.releasereason=?, " +
                            "tb.datereleased=?, tb.status=2 FROM TBHOLDAMTCHECK tb WHERE tb.id=?",
                    new Object[]{data.get("userid"), data.get("liftreason"), new Date(Long.valueOf(data.get("busidt").toString())), data.get("id")});
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> Lift Hold Record : ", e.getMessage(), e);
        }
        return null;
    }

    public Integer updateLiftHoldAmount(HashMap<String, Object> data) {
        try {
            StringBuilder query = new StringBuilder();
            query.append("UPDATE dep SET ");
            query.append( data.get("type").equals("1")
                            ? "dep.PlaceholdAmt = dep.PlaceholdAmt-chk.amount "
                            : data.get("type").equals("3")
                            ? "dep.earmarkbal = dep.earmarkbal-chk.amount "
                            : data.get("type").equals("4")
                            ? "dep.garnishedbal = dep.garnishedbal-chk.amount " : "");
            query.append("FROM TBDEPOSIT dep JOIN TBHOLDAMTCHECK chk  ON dep.AccountNo=chk.accountno WHERE chk.id=?");
            return jt.update(query.toString(), new Object[]{data.get("id")});
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> Lift Hold Amount : ", e.getMessage(), e);
        }
        return null;
    }

    @SuppressWarnings("unchecked")
    public List<StopPaymentOrderForm> spoList(String accountno) {
        try {
            StringBuilder query = new StringBuilder();
                    query.append("SELECT list.id AS id, list.accountno AS acctno, list.checkno AS chkno, list.holdby AS holdby, list.validitydate AS validitydate, " +
                        "list.datehold AS datehold, cbl.desc1 AS reason, dep.AccountName AS name FROM TBHOLDAMTCHECK list JOIN TBDEPOSIT dep ON list.accountno=dep.AccountNo " +
                        "JOIN TBCODETABLE cbl ON cbl.codevalue=list.holdreason WHERE list.txcode='2' AND list.status=1 AND cbl.codename='SPOREASON' ");
            query.append(accountno.equalsIgnoreCase("all") ? "" : " AND list.accountno=?" );
            return jt.query(query.toString(),accountno.equalsIgnoreCase("all") ? new Object[]{} : new Object[] {accountno} , new BeanPropertyRowMapper<>(StopPaymentOrderForm.class));
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> SPO List : ", e.getMessage(), e);
        }
        return null;
    }

    public Integer lifSPO(HashMap<String, Object> data) {
        try {
            return jt.update("UPDATE tb SET tb.releaseby=?,tb.releasereason=?, tb.datereleased=?, tb.status=2 " +
                    "FROM TBHOLDAMTCHECK tb WHERE tb.id=?", new Object[] {data.get("userid"), data.get("liftreason"),
                    new Date(Long.valueOf(data.get("busidt").toString())), data.get("id") });
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> Lift SPO : ", e.getMessage(), e);
        }
        return null;
    }

    public AccountMaintenanceForm getAccountMaintenanceDetail(String accountno) {
        try {
            return jt.queryForObject("SELECT tb.AccountNo as accountno, tb.AccountName AS name, tb.AccountStatus as acctsts, tb.BookDate as dtopened, cd.desc1 as jointaccttype, " +
                            " SUBSTRING(AccountName,1,10) AS shortname, tb.Posttx as posttx, tb.alertflag AS alertflag, tb.alertlevel AS alertlevel, " +
                            " tb.alertmessage AS alertmessage, watchlistcode as watchlist ,tb.solicitingofficer AS solofficer, tb.referralofficer AS refofficer, " +
                            " tb.campaign AS channel,  prod.prodname AS prodtype, prod.ataind AS ataind FROM TBDEPOSIT tb  JOIN TBPRODMATRIX prod ON tb.productCode = prod.prodgroup AND " +
                            "  tb.subProductCode = prod.prodcode JOIN TBCODETABLE cd ON tb.OwnershipType=cd.codevalue WHERE " +
                            "  AccountNo=? AND cd.codename='OWNERSHIPTYPE'",
                    new Object[]{accountno}, new BeanPropertyRowMapper<>(AccountMaintenanceForm.class));
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> Account Maintenance Detail : ", e.getMessage(), e);
        }
        return null;
    }

    public Integer accountMaintenanceUpdate(HashMap<String, Object> data) {
        try {
            return jt.update("UPDATE TBDEPOSIT SET Posttx=?, AccountStatus=?, StatusDate=?, alertflag=?, alertlevel=?, " +
                            "alertmessage=?, WatchlistCode=? WHERE AccountNo=?",
                    new Object[]{data.get("posttx"), data.get("status"), new Date(Long.valueOf(data.get("statusdate").toString())),
                            Integer.parseInt(data.get("alertflag").toString()), Integer.parseInt(data.get("alertlevel").toString()), data.get("alertmessage"),
                            data.get("watchlist"),data.get("acctno")} );
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> Account Maintenance Update : ", e.getMessage(), e);
        }
        return null;
    }

    public AccountClosureForm closeAccountDetail(String accountno) {
        try {
            return jt.queryForObject("SELECT DEP.AccountNo AS accountno, DEP.AccountName AS accountname, CD1.desc1 AS accountstatus, " +
                    "DEP.Statusdate AS dtlastupdate, CD2.desc1 AS posttx, DEP.AccountBalance AS currentbal, " +
                    "DEP.FloatAmount AS floatamt, DEP.PlaceholdAmt AS holdamt FROM TBDEPOSIT DEP, TBCODETABLE CD1, " +
                    "TBCODETABLE CD2 WHERE DEP.AccountStatus=CD1.codevalue AND DEP.Posttx=CD2.codevalue AND " +
                    "DEP.AccountNo=? AND CD1.codename='CASA-ACCTSTS' AND CD2.codename='POSTTX'",
                    new Object[] {accountno}, new BeanPropertyRowMapper<>(AccountClosureForm.class));
        } catch (Exception e) {
            logger.error("CustomerRelRepo -> View Close Account : ", e.getMessage(), e);
        }
        return null;
    }

    public Integer closeAccount(String accountno) {
        try {
            return jt.update("UPDATE TBDEPOSIT SET AccountStatus=5 WHERE AccountNo=?", new Object[] {accountno});
        } catch (Exception e){
            logger.error("CustomerRelRepo -> Close Account : ", e.getMessage(), e);
        }
        return null;
    }

    public List<TimeDepositCertForm> getTDAccountListTDC(String accountno) {
        try {
            StringBuilder query = new StringBuilder();
//            query.append("SELECT dep.AccountNo, dep.AccountName AS name, dep.AccountStatus, dep.BookDate AS datebook, dep.MaturityDate AS matdt, " +
//                    "dep.unit AS branch, dep.AccountBalance AS accountbal, dep.term, dep.IntRate, dep.WTAXRate AS taxrate, dep.LessWTaxAmt AS lesswtax, dep.MatAmt, dep.Placementamt " +
//                    "FROM TBDEPOSIT dep WHERE dep.AccountStatus=1 AND dep.tdcreleaseind=0 AND dep.ProductCode='40' ");
            query.append("SELECT dep.AccountNo, dep.AccountName AS name, acct.desc1 as AccountStatus, dep.BookDate AS datebook, dep.MaturityDate AS matdt, " +
                    "unt.brname AS branch, dep.AccountBalance AS accountbal, dep.term, dep.IntRate, dep.WTAXRate AS taxrate, dep.LessWTaxAmt AS lesswtax, dep.MatAmt, dep.Placementamt " +
                    "FROM TBDEPOSIT dep LEFT JOIN TBUNIT unt ON dep.unit=unt.brid LEFT JOIN TBCODETABLE cd ON dep.AccountStatus=cd.codevalue " +
                    "LEFT JOIN TBCODETABLE acct on dep.AccountStatus=acct.codevalue " +
                    "WHERE cd.codename='CASA-ACCTSTS' AND dep.AccountStatus=1 AND dep.tdcreleaseind=0 AND dep.ProductCode='40' " +
                    "AND acct.codename='CASA-ACCTSTS'");
            query.append(accountno.equalsIgnoreCase("all") ? "" : " AND dep.AccountNo=?" );
            List<TimeDepositCertForm> form = jt.query(query.toString(), accountno.equalsIgnoreCase("all") ? new Object[]{} : new Object[] {accountno} ,
                    new BeanPropertyRowMapper<>(TimeDepositCertForm.class));
            System.out.println(">>>>>>>>>> DATA COUNT : "+form.size());
            return form;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public String getControlTDC(String accountno) {
        try {
            Connection connection = jt.getDataSource().getConnection();
            CallableStatement statement = connection.prepareCall("{call SEQGEN_TDC(?,?)}");
            statement.setString("unit", accountno.substring(0,4));
            statement.registerOutParameter("sequence", Types.VARCHAR);
            statement.execute();
            return statement.getString("sequence");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public Integer freezeAccount(String accountno, Date expdt, Integer id){
        return jt.update("UPDATE TBDEPOSIT SET freezeind=1, freezeexpdt=?, freezeid=?, freezeamt =?  WHERE AccountNo=?",
                expdt, id, accountno);
    }

    public Integer liftFreeze(String accountno) {
        return jt.update("UPDATE TBDEPOSIT SET freezeind=0, freezeexpdt=NULL, freezeid=NULL  WHERE AccountNo=?",
                accountno);
    }
}
