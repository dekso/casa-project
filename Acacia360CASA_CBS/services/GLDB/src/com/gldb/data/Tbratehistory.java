
package com.gldb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  GLDB.Tbratehistory
 *  10/08/2018 20:01:50
 * 
 */
public class Tbratehistory {

    private Integer id;
    private String currency;
    private BigDecimal boardrate;
    private BigDecimal irr;
    private BigDecimal pds;
    private String updatedby;
    private Date updateddate;
    private String buySell;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public BigDecimal getBoardrate() {
        return boardrate;
    }

    public void setBoardrate(BigDecimal boardrate) {
        this.boardrate = boardrate;
    }

    public BigDecimal getIrr() {
        return irr;
    }

    public void setIrr(BigDecimal irr) {
        this.irr = irr;
    }

    public BigDecimal getPds() {
        return pds;
    }

    public void setPds(BigDecimal pds) {
        this.pds = pds;
    }

    public String getUpdatedby() {
        return updatedby;
    }

    public void setUpdatedby(String updatedby) {
        this.updatedby = updatedby;
    }

    public Date getUpdateddate() {
        return updateddate;
    }

    public void setUpdateddate(Date updateddate) {
        this.updateddate = updateddate;
    }

    public String getBuySell() {
        return buySell;
    }

    public void setBuySell(String buySell) {
        this.buySell = buySell;
    }

}
