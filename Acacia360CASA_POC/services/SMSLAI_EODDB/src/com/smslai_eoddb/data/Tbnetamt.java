
package com.smslai_eoddb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbnetamt
 *  10/12/2018 12:49:06
 * 
 */
public class Tbnetamt {

    private Integer id;
    private String userid;
    private String currency;
    private BigDecimal userbalance;
    private Date businessdate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public BigDecimal getUserbalance() {
        return userbalance;
    }

    public void setUserbalance(BigDecimal userbalance) {
        this.userbalance = userbalance;
    }

    public Date getBusinessdate() {
        return businessdate;
    }

    public void setBusinessdate(Date businessdate) {
        this.businessdate = businessdate;
    }

}
