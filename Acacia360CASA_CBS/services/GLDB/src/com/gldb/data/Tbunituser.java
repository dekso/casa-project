
package com.gldb.data;

import java.math.BigDecimal;


/**
 *  GLDB.Tbunituser
 *  10/11/2018 14:29:34
 * 
 */
public class Tbunituser {

    private Integer id;
    private String name;
    private String userid;
    private BigDecimal unitBalance;
    private BigDecimal limitamount;
    private String unitbrid;
    private String currency;
    private String username;
    private String password;
    private String role;
    private String instcode;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public BigDecimal getUnitBalance() {
        return unitBalance;
    }

    public void setUnitBalance(BigDecimal unitBalance) {
        this.unitBalance = unitBalance;
    }

    public BigDecimal getLimitamount() {
        return limitamount;
    }

    public void setLimitamount(BigDecimal limitamount) {
        this.limitamount = limitamount;
    }

    public String getUnitbrid() {
        return unitbrid;
    }

    public void setUnitbrid(String unitbrid) {
        this.unitbrid = unitbrid;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getInstcode() {
        return instcode;
    }

    public void setInstcode(String instcode) {
        this.instcode = instcode;
    }

}
