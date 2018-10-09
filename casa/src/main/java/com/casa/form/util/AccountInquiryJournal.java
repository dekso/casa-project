package com.casa.form.util;

import java.math.BigDecimal;
import java.util.Date;
/**
 * Created by saoDG on 5/8/2018.
 */
public class AccountInquiryJournal {

    private String txrefno;
    private Date txvaldt;
    private BigDecimal debit;
    private BigDecimal credit;
    private BigDecimal txamt;
    private BigDecimal outbal;
    private String txcode;
    private String errorcorrect;
    private String txbrrefno;
    private String unit;
    private String checkacctno;

    public String getTxrefno() {
        return txrefno;
    }
    public void setTxrefno(String txrefno) {
        this.txrefno = txrefno;
    }
    public Date getTxvaldt() {
        return txvaldt;
    }
    public void setTxvaldt(Date txvaldt) {
        this.txvaldt = txvaldt;
    }
    public BigDecimal getDebit() {
        return debit;
    }
    public void setDebit(BigDecimal debit) {
        this.debit = debit;
    }
    public BigDecimal getCredit() {
        return credit;
    }
    public void setCredit(BigDecimal credit) {
        this.credit = credit;
    }
    public BigDecimal getTxamt() {
        return txamt;
    }
    public void setTxamt(BigDecimal txamt) {
        this.txamt = txamt;
    }
    public BigDecimal getOutbal() {
        return outbal;
    }
    public void setOutbal(BigDecimal outbal) {
        this.outbal = outbal;
    }
    public String getTxcode() {
        return txcode;
    }
    public void setTxcode(String txcode) {
        this.txcode = txcode;
    }

    public String getErrorcorrect() {
        return errorcorrect;
    }

    public void setErrorcorrect(String errorcorrect) {
        this.errorcorrect = errorcorrect;
    }

    public String getTxbrrefno() {
        return txbrrefno;
    }

    public void setTxbrrefno(String txbrrefno) {
        this.txbrrefno = txbrrefno;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getCheckacctno() {
        return checkacctno;
    }

    public void setCheckacctno(String checkacctno) {
        this.checkacctno = checkacctno;
    }
}
