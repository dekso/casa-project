
package com.gldb.data;

import java.math.BigDecimal;


/**
 *  GLDB.Tbchecksforclearing
 *  10/08/2018 20:01:50
 * 
 */
public class Tbchecksforclearing {

    private Integer id;
    private String brstn;
    private BigDecimal checkamount;
    private String checkdate;
    private String checknumber;
    private Integer checktype;
    private String clearingdate;
    private Integer clearingdays;
    private Boolean islateclearing;
    private String status;
    private String accountno;
    private String txrefno;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBrstn() {
        return brstn;
    }

    public void setBrstn(String brstn) {
        this.brstn = brstn;
    }

    public BigDecimal getCheckamount() {
        return checkamount;
    }

    public void setCheckamount(BigDecimal checkamount) {
        this.checkamount = checkamount;
    }

    public String getCheckdate() {
        return checkdate;
    }

    public void setCheckdate(String checkdate) {
        this.checkdate = checkdate;
    }

    public String getChecknumber() {
        return checknumber;
    }

    public void setChecknumber(String checknumber) {
        this.checknumber = checknumber;
    }

    public Integer getChecktype() {
        return checktype;
    }

    public void setChecktype(Integer checktype) {
        this.checktype = checktype;
    }

    public String getClearingdate() {
        return clearingdate;
    }

    public void setClearingdate(String clearingdate) {
        this.clearingdate = clearingdate;
    }

    public Integer getClearingdays() {
        return clearingdays;
    }

    public void setClearingdays(Integer clearingdays) {
        this.clearingdays = clearingdays;
    }

    public Boolean getIslateclearing() {
        return islateclearing;
    }

    public void setIslateclearing(Boolean islateclearing) {
        this.islateclearing = islateclearing;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAccountno() {
        return accountno;
    }

    public void setAccountno(String accountno) {
        this.accountno = accountno;
    }

    public String getTxrefno() {
        return txrefno;
    }

    public void setTxrefno(String txrefno) {
        this.txrefno = txrefno;
    }

}
