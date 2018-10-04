
package com.gldb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  GLDB.Tbproofsheetdetail
 *  08/31/2018 11:52:37
 * 
 */
public class Tbproofsheetdetail {

    private Integer id;
    private String trno;
    private String acctcode;
    private String accttitle;
    private String refdoc;
    private String refid;
    private String respcenter;
    private String costcenter;
    private String prjctasgmt;
    private BigDecimal drcurramt;
    private BigDecimal crcurramt;
    private String particulars;
    private String createdby;
    private Date datecreated;
    private String brid;
    private String psid;
    private Date psdt;
    private String instcode;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTrno() {
        return trno;
    }

    public void setTrno(String trno) {
        this.trno = trno;
    }

    public String getAcctcode() {
        return acctcode;
    }

    public void setAcctcode(String acctcode) {
        this.acctcode = acctcode;
    }

    public String getAccttitle() {
        return accttitle;
    }

    public void setAccttitle(String accttitle) {
        this.accttitle = accttitle;
    }

    public String getRefdoc() {
        return refdoc;
    }

    public void setRefdoc(String refdoc) {
        this.refdoc = refdoc;
    }

    public String getRefid() {
        return refid;
    }

    public void setRefid(String refid) {
        this.refid = refid;
    }

    public String getRespcenter() {
        return respcenter;
    }

    public void setRespcenter(String respcenter) {
        this.respcenter = respcenter;
    }

    public String getCostcenter() {
        return costcenter;
    }

    public void setCostcenter(String costcenter) {
        this.costcenter = costcenter;
    }

    public String getPrjctasgmt() {
        return prjctasgmt;
    }

    public void setPrjctasgmt(String prjctasgmt) {
        this.prjctasgmt = prjctasgmt;
    }

    public BigDecimal getDrcurramt() {
        return drcurramt;
    }

    public void setDrcurramt(BigDecimal drcurramt) {
        this.drcurramt = drcurramt;
    }

    public BigDecimal getCrcurramt() {
        return crcurramt;
    }

    public void setCrcurramt(BigDecimal crcurramt) {
        this.crcurramt = crcurramt;
    }

    public String getParticulars() {
        return particulars;
    }

    public void setParticulars(String particulars) {
        this.particulars = particulars;
    }

    public String getCreatedby() {
        return createdby;
    }

    public void setCreatedby(String createdby) {
        this.createdby = createdby;
    }

    public Date getDatecreated() {
        return datecreated;
    }

    public void setDatecreated(Date datecreated) {
        this.datecreated = datecreated;
    }

    public String getBrid() {
        return brid;
    }

    public void setBrid(String brid) {
        this.brid = brid;
    }

    public String getPsid() {
        return psid;
    }

    public void setPsid(String psid) {
        this.psid = psid;
    }

    public Date getPsdt() {
        return psdt;
    }

    public void setPsdt(Date psdt) {
        this.psdt = psdt;
    }

    public String getInstcode() {
        return instcode;
    }

    public void setInstcode(String instcode) {
        this.instcode = instcode;
    }

}
