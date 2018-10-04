package com.casa.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by saoDG on 9/10/2018.
 */
@Entity
@Table(name="TBMANAGERSCHECK")
public class Tbmanagerscheck {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String payee;
    private String accountno;
    private BigDecimal amount;
    private String remarks;
    private Date daterequest;
    private Integer status;
    private Date dateapproved;
    private Date datereleased;
    private String issuingbr;
    private Integer mccheckno;
    private Date expiry;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPayee() {
        return payee;
    }

    public void setPayee(String payee) {
        this.payee = payee;
    }

    public String getAccountno() {
        return accountno;
    }

    public void setAccountno(String accountno) {
        this.accountno = accountno;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Date getDaterequest() {
        return daterequest;
    }

    public void setDaterequest(Date daterequest) {
        this.daterequest = daterequest;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getDateapproved() {
        return dateapproved;
    }

    public void setDateapproved(Date dateapproved) {
        this.dateapproved = dateapproved;
    }

    public Date getDatereleased() {
        return datereleased;
    }

    public void setDatereleased(Date datereleased) {
        this.datereleased = datereleased;
    }

    public String getIssuingbr() {
        return issuingbr;
    }

    public void setIssuingbr(String issuingbr) {
        this.issuingbr = issuingbr;
    }

    public Integer getMccheckno() {
        return mccheckno;
    }

    public void setMccheckno(Integer mccheckno) {
        this.mccheckno = mccheckno;
    }

    public Date getExpiry() {
        return expiry;
    }

    public void setExpiry(Date expiry) {
        this.expiry = expiry;
    }
}
