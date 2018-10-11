
package com.smslai_eoddb.data;

import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbemailparams
 *  10/10/2018 15:49:33
 * 
 */
public class Tbemailparams {

    private TbemailparamsId id;
    private String emailadd;
    private Date createddate;
    private String createdby;

    public TbemailparamsId getId() {
        return id;
    }

    public void setId(TbemailparamsId id) {
        this.id = id;
    }

    public String getEmailadd() {
        return emailadd;
    }

    public void setEmailadd(String emailadd) {
        this.emailadd = emailadd;
    }

    public Date getCreateddate() {
        return createddate;
    }

    public void setCreateddate(Date createddate) {
        this.createddate = createddate;
    }

    public String getCreatedby() {
        return createdby;
    }

    public void setCreatedby(String createdby) {
        this.createdby = createdby;
    }

}
