
package com.smslai_eoddb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbtxhistory
 *  06/06/2018 11:10:37
 * 
 */
public class Tbtxhistory {

    private Integer id;
    private String accountno;
    private BigDecimal amount;
    private String createdBy;
    private String employeeno;
    private Date txdate;
    private String txrefno;
    private String txstatusafter;
    private String txstatusbefore;
    private String txtype;

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

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getEmployeeno() {
        return employeeno;
    }

    public void setEmployeeno(String employeeno) {
        this.employeeno = employeeno;
    }

    public Date getTxdate() {
        return txdate;
    }

    public void setTxdate(Date txdate) {
        this.txdate = txdate;
    }

    public String getTxrefno() {
        return txrefno;
    }

    public void setTxrefno(String txrefno) {
        this.txrefno = txrefno;
    }

    public String getTxstatusafter() {
        return txstatusafter;
    }

    public void setTxstatusafter(String txstatusafter) {
        this.txstatusafter = txstatusafter;
    }

    public String getTxstatusbefore() {
        return txstatusbefore;
    }

    public void setTxstatusbefore(String txstatusbefore) {
        this.txstatusbefore = txstatusbefore;
    }

    public String getTxtype() {
        return txtype;
    }

    public void setTxtype(String txtype) {
        this.txtype = txtype;
    }

}
