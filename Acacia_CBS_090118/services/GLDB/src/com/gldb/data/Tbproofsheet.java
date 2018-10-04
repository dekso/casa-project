
package com.gldb.data;

import java.util.Date;


/**
 *  GLDB.Tbproofsheet
 *  08/31/2018 11:52:37
 * 
 */
public class Tbproofsheet {

    private Integer id;
    private String psid;
    private String batch;
    private Date psdate;
    private String status;
    private Date statusdate;
    private String currency;
    private Integer sequence;
    private String createdby;
    private String checkedby;
    private String authorizedby;
    private String reason;
    private String instcode;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPsid() {
        return psid;
    }

    public void setPsid(String psid) {
        this.psid = psid;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }

    public Date getPsdate() {
        return psdate;
    }

    public void setPsdate(Date psdate) {
        this.psdate = psdate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getStatusdate() {
        return statusdate;
    }

    public void setStatusdate(Date statusdate) {
        this.statusdate = statusdate;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Integer getSequence() {
        return sequence;
    }

    public void setSequence(Integer sequence) {
        this.sequence = sequence;
    }

    public String getCreatedby() {
        return createdby;
    }

    public void setCreatedby(String createdby) {
        this.createdby = createdby;
    }

    public String getCheckedby() {
        return checkedby;
    }

    public void setCheckedby(String checkedby) {
        this.checkedby = checkedby;
    }

    public String getAuthorizedby() {
        return authorizedby;
    }

    public void setAuthorizedby(String authorizedby) {
        this.authorizedby = authorizedby;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getInstcode() {
        return instcode;
    }

    public void setInstcode(String instcode) {
        this.instcode = instcode;
    }

}
