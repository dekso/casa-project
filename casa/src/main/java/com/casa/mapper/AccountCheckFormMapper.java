package com.casa.mapper;

import com.casa.form.util.AccountCheckForm;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by saoDG on 5/12/2018.
 */
public class AccountCheckFormMapper implements RowMapper {

    @Override
    public Object mapRow(ResultSet resultSet, int i) throws SQLException {
        AccountCheckForm form = new AccountCheckForm();
        form.setCurrency(resultSet.getString("currency"));
        form.setName(resultSet.getString("name"));
        form.setProdtype(resultSet.getString("prodtype"));
        return form;
    }
}
