package com.casa.mapper;

import com.casa.form.util.AccountInquiry;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by saoDG on 5/12/2018.
 */
public class AccountInquiryMapper implements RowMapper {

    @Override
    public Object mapRow(ResultSet resultSet, int i) throws SQLException {
        AccountInquiry form = new AccountInquiry();
        form.setName(resultSet.getString("name"));
        form.setDateopened(resultSet.getDate("dateopened"));
        form.setAccountno(resultSet.getString("accountno"));
        form.setAccountstatus(resultSet.getString("accountstatus"));
        form.setProduct(resultSet.getString("product"));
        form.setDatelast(resultSet.getDate("datelast"));
        form.setAccountbal(resultSet.getBigDecimal("accountbal"));
        form.setPosttx(resultSet.getString("posttx"));
        form.setHoldamount(resultSet.getBigDecimal("holdamount"));
        form.setFloatamount(resultSet.getBigDecimal("floatamount"));
        return form;
    }
}
