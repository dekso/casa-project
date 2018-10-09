package com.casa.repository;

import com.casa.form.util.AccountCheckForm;
import com.casa.form.util.AccountInquiry;
import com.casa.form.util.AccountInquiryJournal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * Created by saoDG on 5/15/2018.
 */
@Repository
public class CASAUtilRepository {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private JdbcTemplate jt;

    HashMap<String, Object> param = new HashMap<String, Object>();

    public AccountInquiry getInquiry(String acctno) {
        try {
            return jt.queryForObject("EXEC ACCTINQ @acctno=?",
                    new Object[]{acctno}, new BeanPropertyRowMapper<>(AccountInquiry.class));
        } catch (Exception e) {
            logger.info("UtilRepo -> Account Inquiry : " + e.getMessage(), e);
        }
        return null;
    }

    @SuppressWarnings("unchecked")
    public List<AccountInquiryJournal> getInquiryJournal(String acctno) {
        try {
            return jt.query("EXEC ACCTINQHIST @acctno=?", new Object[]{acctno},
                    new BeanPropertyRowMapper<>(AccountInquiryJournal.class));
//            Connection connection = jt.getDataSource().getConnection();
//            CallableStatement statement = connection.prepareCall("{call ACCTINQHIST(?)}");
//            statement.setString("acctno", acctno);
//            List<AccountInquiryJournal> list = new ArrfinayList<>();
//            boolean isResultSet = statement.execute();
//            if (!isResultSet) {
//                System.out.println("Result is not a result set");
//                return null;
//            } else {
//                ResultSet set = statement.getResultSet();
//                while (set.next()) {
//                    AccountInquiryJournal form = new AccountInquiryJournal();
//                    form.setTxrefno(set.getString("txrefno"));
//                    form.setTxvaldt(set.getDate("txvaldt"));
//                    form.setDebit(set.getBigDecimal("debit"));
//                    form.setCredit(set.getBigDecimal("credit"));
//                    form.setTxamt(set.getBigDecimal("txamt"));
//                    form.setOutbal(set.getBigDecimal("outbal"));
//                    form.setTxcode(set.getString("txcode"));
//                    list.add(form);
//                }
//                return list;
//            }
        } catch (Exception e) {
            logger.info("UtilRepo -> Ledger Inquiry : " + e.getMessage(), e);
        }
        return null;
    }

    public AccountCheckForm checkAccount(String acctno) {
        AccountCheckForm form = new AccountCheckForm();
        form.setResult("0");
        try {
            if (jt.queryForObject("SELECT COUNT(*) FROM TBDEPOSIT WHERE accountno=?", new Object[]{acctno}, Integer.class) > 0) {
                String query = "SELECT dep.accountno, prod.currency AS currency, dep.AccountName AS name, dep.ProductCode AS prodtype,'1' AS result,dep.unit, prod.passbookind, " +
                        " prod.checkbookind, prod.soaind,prod.rbmminmainbal AS mainbal, prod.certtimedepind, cd.desc1 AS accountstatus, prod.posttx, " +
                        " prod.prodname AS subprod, (isnull(SUM(isnull(dep.accountBalance,0)),0) - (isnull(SUM(isnull(dep.floatAmount,0)),0) + " +
                        "  isnull(SUM(isnull(dep.placeholdAmt,0)),0) +  isnull(SUM(isnull(dep.floatAmount,0)),0) + isnull(SUM(isnull(dep.earmarkbal,0)),0) + isnull(SUM(isnull(dep.garnishedbal,0)),0) )) AS availbal " +
                        " FROM TBDEPOSIT dep JOIN TBCODETABLE cd on dep.accountStatus=cd.codevalue AND cd.codename ='CASA-ACCTSTS' JOIN " +
                        " TBPRODMATRIX prod ON dep.ProductCode=prod.prodgroup AND dep.SubProductCode = prod.prodcode WHERE  dep.AccountNo=? GROUP BY dep.accountno, " +
                        " dep.unit, prod.passbookind,prod.checkbookind, prod.soaind, prod.certtimedepind, prod.posttx,prod.currency, dep.AccountName, dep.ProductCode, " +
                        " prod.rbmminmainbal,cd.desc1, prod.prodname";
                return jt.queryForObject(query, new Object[]{acctno},
                        new BeanPropertyRowMapper<>(AccountCheckForm.class));


            }
        } catch (Exception e) {
            logger.info("UtilRepo -> Check Account : " + e.getMessage(), e);
        }
        return form;
    }

    public String getCurrency(String accountno) {
        try {
            return jt.queryForObject("SELECT mat.currency FROM TBDEPOSIT dep JOIN TBPRODMATRIX mat ON dep.ProductCode=mat.prodgroup "
                    + "WHERE dep.AccountNo=? AND dep.SubProductCode = mat.prodcode ", new Object[]{accountno}, String.class);
        } catch (Exception e) {
            logger.info("UtilRepo -> Get Currency : " + e.getMessage(), e);
        }
        return null;
    }

    public Date getBusinessDate() {
        try {
            return jt.queryForObject("SELECT businessdt FROM TBSYSPARAM WHERE id=?", new Object[]{1}, Date.class);
        } catch (Exception e) {
            logger.info("UtilRepo -> Get Business Date : " + e.getMessage(), e);
        }
        return null;
    }

    public String generateSequence() {
        try {
            Connection connection = jt.getDataSource().getConnection();
            CallableStatement statement = connection.prepareCall("{call SEQGENERATE(?)}");
            statement.registerOutParameter(1, Types.VARCHAR);
            statement.execute();
            return statement.getString(1);
        } catch (Exception e) {
            logger.info("UtilRepo -> Generate Sequence : " + e.getMessage(), e);
        }
        return null;
    }

    public Integer offAlert(String accountno) {
        try {
            return jt.update("UPDATE TBDEPOSIT SET alertflag=0 WHERE accountno=?", new Object[]{accountno});
        } catch (Exception e) {
            logger.info("UtilRepo -> Off Alert : " + e.getMessage(), e);
        }
        return null;
    }

    public void updateBatchStatus(Integer id) {
        jt.update("UPDATE TBBATCHFILE SET batchstatus=1 WHERE id=?", new Object[] {id});
    }
}
