
package com.gldb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  GLDB.Tbproofsheettrno
 *  08/31/2018 11:52:37
 * 
 */
public class Tbproofsheettrno {

    private Integer idtrno;
    private String psid;
    private Date psdate;
    private String trno;
    private BigDecimal totaldebit;
    private BigDecimal totalcredit;
    private Integer status;
    private String createdby;

    public Integer getIdtrno() {
        return idtrno;
    }

    public void setIdtrno(Integer idtrno) {
        this.idtrno = idtrno;
    }

    public String getPsid() {
        return psid;
    }

    public void setPsid(String psid) {
        this.psid = psid;
    }

    public Date getPsdate() {
        return psdate;
    }

    public void setPsdate(Date psdate) {
        this.psdate = psdate;
    }

    public String getTrno() {
        return trno;
    }

    public void setTrno(String trno) {
        this.trno = trno;
    }

    public BigDecimal getTotaldebit() {
        return totaldebit;
    }

    public void setTotaldebit(BigDecimal totaldebit) {
        this.totaldebit = totaldebit;
    }

    public BigDecimal getTotalcredit() {
        return totalcredit;
    }

    public void setTotalcredit(BigDecimal totalcredit) {
        this.totalcredit = totalcredit;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getCreatedby() {
        return createdby;
    }

    public void setCreatedby(String createdby) {
        this.createdby = createdby;
    }

}
