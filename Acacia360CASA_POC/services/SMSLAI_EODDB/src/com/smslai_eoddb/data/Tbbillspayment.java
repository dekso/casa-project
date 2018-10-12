
package com.smslai_eoddb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbbillspayment
 *  10/11/2018 13:34:38
 * 
 */
public class Tbbillspayment {

    private Integer id;
    private String merchantcode;
    private String paymentslipno;
    private String subsaccountno;
    private String subsname;
    private BigDecimal amount;
    private String currency;
    private String orno;
    private String paymmode;
    private String checkacctno;
    private Date checkdate;
    private String clearingtype;
    private String bankcode;
    private String bankname;
    private String brstnno;
    private String debitaccountno;
    private String txstatus;
    private String txby;
    private String txrefno;
    private String unit;
    private String instcode;
    private String typepayment;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMerchantcode() {
        return merchantcode;
    }

    public void setMerchantcode(String merchantcode) {
        this.merchantcode = merchantcode;
    }

    public String getPaymentslipno() {
        return paymentslipno;
    }

    public void setPaymentslipno(String paymentslipno) {
        this.paymentslipno = paymentslipno;
    }

    public String getSubsaccountno() {
        return subsaccountno;
    }

    public void setSubsaccountno(String subsaccountno) {
        this.subsaccountno = subsaccountno;
    }

    public String getSubsname() {
        return subsname;
    }

    public void setSubsname(String subsname) {
        this.subsname = subsname;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getOrno() {
        return orno;
    }

    public void setOrno(String orno) {
        this.orno = orno;
    }

    public String getPaymmode() {
        return paymmode;
    }

    public void setPaymmode(String paymmode) {
        this.paymmode = paymmode;
    }

    public String getCheckacctno() {
        return checkacctno;
    }

    public void setCheckacctno(String checkacctno) {
        this.checkacctno = checkacctno;
    }

    public Date getCheckdate() {
        return checkdate;
    }

    public void setCheckdate(Date checkdate) {
        this.checkdate = checkdate;
    }

    public String getClearingtype() {
        return clearingtype;
    }

    public void setClearingtype(String clearingtype) {
        this.clearingtype = clearingtype;
    }

    public String getBankcode() {
        return bankcode;
    }

    public void setBankcode(String bankcode) {
        this.bankcode = bankcode;
    }

    public String getBankname() {
        return bankname;
    }

    public void setBankname(String bankname) {
        this.bankname = bankname;
    }

    public String getBrstnno() {
        return brstnno;
    }

    public void setBrstnno(String brstnno) {
        this.brstnno = brstnno;
    }

    public String getDebitaccountno() {
        return debitaccountno;
    }

    public void setDebitaccountno(String debitaccountno) {
        this.debitaccountno = debitaccountno;
    }

    public String getTxstatus() {
        return txstatus;
    }

    public void setTxstatus(String txstatus) {
        this.txstatus = txstatus;
    }

    public String getTxby() {
        return txby;
    }

    public void setTxby(String txby) {
        this.txby = txby;
    }

    public String getTxrefno() {
        return txrefno;
    }

    public void setTxrefno(String txrefno) {
        this.txrefno = txrefno;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getInstcode() {
        return instcode;
    }

    public void setInstcode(String instcode) {
        this.instcode = instcode;
    }

    public String getTypepayment() {
        return typepayment;
    }

    public void setTypepayment(String typepayment) {
        this.typepayment = typepayment;
    }

}
