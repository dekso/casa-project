
package com.smslai_eoddb.data;

import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbfreezeaccount
 *  10/10/2018 15:49:33
 * 
 */
public class Tbfreezeaccount {

    private Integer id;
    private String accountno;
    private String remarks;
    private Date freezedate;
    private String freezeby;
    private Date liftdate;
    private String liftby;
    private Date validitydate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAccountno() {
        return accountno;
    }

    public void setAccountno(String accountno) {
        this.accountno = accountno;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Date getFreezedate() {
        return freezedate;
    }

    public void setFreezedate(Date freezedate) {
        this.freezedate = freezedate;
    }

    public String getFreezeby() {
        return freezeby;
    }

    public void setFreezeby(String freezeby) {
        this.freezeby = freezeby;
    }

    public Date getLiftdate() {
        return liftdate;
    }

    public void setLiftdate(Date liftdate) {
        this.liftdate = liftdate;
    }

    public String getLiftby() {
        return liftby;
    }

    public void setLiftby(String liftby) {
        this.liftby = liftby;
    }

    public Date getValiditydate() {
        return validitydate;
    }

    public void setValiditydate(Date validitydate) {
        this.validitydate = validitydate;
    }

}
