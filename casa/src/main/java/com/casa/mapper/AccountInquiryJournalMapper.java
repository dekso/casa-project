package com.casa.mapper;

import com.casa.form.util.AccountInquiryJournal;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by saoDG on 5/12/2018.
 */
public class AccountInquiryJournalMapper implements RowMapper {

    @Override
    public Object mapRow(ResultSet resultSet, int i) throws SQLException {
        List<AccountInquiryJournal> list = new ArrayList<>();
//        while (resultSet.next()) {
//            AccountInquiryJournal form = new AccountInquiryJournal();
//            form.setTxrefno(resultSet.getString("txrefno"));
//            form.setTxvaldt(resultSet.getDate("txvaldt"));
//            form.setDebit(resultSet.getBigDecimal("debit"));
//            form.setCredit(resultSet.getBigDecimal("credit"));
//            form.setTxamt(resultSet.getBigDecimal("txamt"));
//            form.setOutbal(resultSet.getBigDecimal("outbal"));
//            form.setTxcode(resultSet.getString("txcode"));
//            list.add(form);
//        }
        return list;
    }
}
