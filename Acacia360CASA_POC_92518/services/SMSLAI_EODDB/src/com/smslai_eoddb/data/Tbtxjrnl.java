
package com.smslai_eoddb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbtxjrnl
 *  06/06/2018 11:10:37
 * 
 */
public class Tbtxjrnl {

    private Integer id;
    private String txcode;
    private String txref;
    private Date txdate;
    private String unit;
    private String username;
    private String accountno;
    private BigDecimal txamount;
    private String currency;
    private String checkacctno;
    private String checkno;
    private Date checkdate;
    private String draweebank;
    private String brstnno;
    private String reasoncode;
    private String remarks;
    private String accountnofrom;
    private Integer passbook;
    private Integer ledgerlineno;
    private String txby;
    private String txstatus;
    private String instcode;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTxcode() {
        return txcode;
    }

    public void setTxcode(String txcode) {
        this.txcode = txcode;
    }

    public String getTxref() {
        return txref;
    }

    public void setTxref(String txref) {
        this.txref = txref;
    }

    public Date getTxdate() {
        return txdate;
    }

    public void setTxdate(Date txdate) {
        this.txdate = txdate;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAccountno() {
        return accountno;
    }

    public void setAccountno(String accountno) {
        this.accountno = accountno;
    }

    public BigDecimal getTxamount() {
        return txamount;
    }

    public void setTxamount(BigDecimal txamount) {
        this.txamount = txamount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getCheckacctno() {
        return checkacctno;
    }

    public void setCheckacctno(String checkacctno) {
        this.checkacctno = checkacctno;
    }

    public String getCheckno() {
        return checkno;
    }

    public void setCheckno(String checkno) {
        this.checkno = checkno;
    }

    public Date getCheckdate() {
        return checkdate;
    }

    public void setCheckdate(Date checkdate) {
        this.checkdate = checkdate;
    }

    public String getDraweebank() {
        return draweebank;
    }

    public void setDraweebank(String draweebank) {
        this.draweebank = draweebank;
    }

    public String getBrstnno() {
        return brstnno;
    }

    public void setBrstnno(String brstnno) {
        this.brstnno = brstnno;
    }

    public String getReasoncode() {
        return reasoncode;
    }

    public void setReasoncode(String reasoncode) {
        this.reasoncode = reasoncode;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getAccountnofrom() {
        return accountnofrom;
    }

    public void setAccountnofrom(String accountnofrom) {
        this.accountnofrom = accountnofrom;
    }

    public Integer getPassbook() {
        return passbook;
    }

    public void setPassbook(Integer passbook) {
        this.passbook = passbook;
    }

    public Integer getLedgerlineno() {
        return ledgerlineno;
    }

    public void setLedgerlineno(Integer ledgerlineno) {
        this.ledgerlineno = ledgerlineno;
    }

    public String getTxby() {
        return txby;
    }

    public void setTxby(String txby) {
        this.txby = txby;
    }

    public String getTxstatus() {
        return txstatus;
    }

    public void setTxstatus(String txstatus) {
        this.txstatus = txstatus;
    }

    public String getInstcode() {
        return instcode;
    }

    public void setInstcode(String instcode) {
        this.instcode = instcode;
    }

}
