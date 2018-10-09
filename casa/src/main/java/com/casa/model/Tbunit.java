
package com.casa.model;

import javax.persistence.*;
import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbunit
 *  05/04/2018 15:50:12
 * 
 */
@Entity
@Table(name="TBUNIT")
public class Tbunit {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String brid;
    private String brname;
    private String braddress;
    private String brstatus;
    private String currency;
    private Date currbusinessdate;
    private Date nextbusinessdate;
    private Integer seqno;
    private Integer sequser;
    private Integer seqmerch;
    private String seqyy;
    private String updatedby;
    private String instcode;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBrid() {
        return brid;
    }

    public void setBrid(String brid) {
        this.brid = brid;
    }

    public String getBrname() {
        return brname;
    }

    public void setBrname(String brname) {
        this.brname = brname;
    }

    public String getBraddress() {
        return braddress;
    }

    public void setBraddress(String braddress) {
        this.braddress = braddress;
    }

    public String getBrstatus() {
        return brstatus;
    }

    public void setBrstatus(String brstatus) {
        this.brstatus = brstatus;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Date getCurrbusinessdate() {
        return currbusinessdate;
    }

    public void setCurrbusinessdate(Date currbusinessdate) {
        this.currbusinessdate = currbusinessdate;
    }

    public Date getNextbusinessdate() {
        return nextbusinessdate;
    }

    public void setNextbusinessdate(Date nextbusinessdate) {
        this.nextbusinessdate = nextbusinessdate;
    }

    public Integer getSeqno() {
        return seqno;
    }

    public void setSeqno(Integer seqno) {
        this.seqno = seqno;
    }

    public Integer getSequser() {
        return sequser;
    }

    public void setSequser(Integer sequser) {
        this.sequser = sequser;
    }

    public Integer getSeqmerch() {
        return seqmerch;
    }

    public void setSeqmerch(Integer seqmerch) {
        this.seqmerch = seqmerch;
    }

    public String getSeqyy() {
        return seqyy;
    }

    public void setSeqyy(String seqyy) {
        this.seqyy = seqyy;
    }

    public String getUpdatedby() {
        return updatedby;
    }

    public void setUpdatedby(String updatedby) {
        this.updatedby = updatedby;
    }

    public String getInstcode() {
        return instcode;
    }

    public void setInstcode(String instcode) {
        this.instcode = instcode;
    }

}
