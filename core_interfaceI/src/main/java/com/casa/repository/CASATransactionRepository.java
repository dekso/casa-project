package com.casa.repository;

import com.casa.form.fin.FinancialGenericForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Types;
import java.util.HashMap;

/**
 * Created by saoDG on 5/15/2018.
 */
@Repository
public class CASATransactionRepository {

    @Autowired
    private JdbcTemplate jt;

    HashMap<String, Object> param = new HashMap<String, Object>();

    public FinancialGenericForm processTransaction(String txref, BigDecimal tellerslimit) throws SQLException {
        FinancialGenericForm form = new FinancialGenericForm();
        Connection connection = jt.getDataSource().getConnection();
        CallableStatement statement = connection.prepareCall("{call FINTX_SP(?,?,?,?,?,?,?,?,?)}");
        statement.setString(1, txref);
        statement.setBigDecimal("tellerslimit", tellerslimit);
        statement.registerOutParameter("resultret", Types.VARCHAR);
        statement.registerOutParameter("resulttxrefno", Types.VARCHAR);
        statement.registerOutParameter("resulttxrefbr", Types.VARCHAR);
        statement.registerOutParameter("resultposttx", Types.VARCHAR);
        statement.registerOutParameter("resultposttxdesc", Types.VARCHAR);
        statement.registerOutParameter("override", Types.INTEGER);
        statement.registerOutParameter("txstatus", Types.VARCHAR);
        statement.execute();
        form.setResult(statement.getString("resultret"));
        form.setTxrefno(statement.getString("resulttxrefno"));
        form.setPosttx(statement.getString("resultposttx"));
        form.setPosttxdesc(statement.getString("resultposttxdesc"));
        form.setTxrefbr(statement.getString("resulttxrefbr"));
        form.setTxstatus(statement.getString("txstatus"));
        form.setOverride(statement.getInt("override"));
        return form;
    }

    public Integer errorCollect(String txref) throws SQLException {
        Connection connection = jt.getDataSource().getConnection();
        CallableStatement statement = connection.prepareCall("{call ERROR_CORRECT(?,?)}");
        statement.setString(1, txref);
        statement.registerOutParameter("result", Types.INTEGER);
        statement.execute();
        return statement.getInt("result");

    }

    public Integer overrideTransaction(String txref, String userid) throws SQLException {
        return jt.update("UPDATE TBFINTXJRNL SET override=1, overrideby=? WHERE txrefmain=?",
                userid, txref);
    }

    public Integer cancelOverrideTransaction(String txref) throws SQLException {
        return jt.update("UPDATE TBFINTXJRNL SET override=2 WHERE txrefmain=?", txref);
    }

    public void cancelTransaction(String txref) {
        jt.update("UPDATE TBFINTXJRNL SET txstatus='5' WHERE txrefmain=?", txref);
    }

    public Integer remoteOverride(String txref) {
        return jt.update("UPDATE TBFINTXJRNL SET override=3 WHERE txrefmain=?", txref);
    }

    public Integer depositMc(String accountno, BigDecimal amount) {
        return jt.update("UPDATE TBDEPOSIT SET AccountBalance=AccountBalance+? WHERE accountno=?", amount, accountno);
    }
}
