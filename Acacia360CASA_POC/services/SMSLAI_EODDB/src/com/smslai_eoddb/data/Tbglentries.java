
package com.smslai_eoddb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbglentries
 *  10/11/2018 13:34:38
 * 
 */
public class Tbglentries {

    private Integer id;
    private String txBatch;
    private Date txdate;
    private String txRefNo;
    private String txcode;
    private String txoper;
    private Date txvaldt;
    private Integer employeeNo;
    private String accountno;
    private BigDecimal txAmount;
    private String companyCode;
    private String satoCode;
    private String glbranch;
    private String glcodeParent;
    private String glcodeChild;
    private String gloper;
    private BigDecimal gldebit;
    private BigDecimal glcredit;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTxBatch() {
        return txBatch;
    }

    public void setTxBatch(String txBatch) {
        this.txBatch = txBatch;
    }

    public Date getTxdate() {
        return txdate;
    }

    public void setTxdate(Date txdate) {
        this.txdate = txdate;
    }

    public String getTxRefNo() {
        return txRefNo;
    }

    public void setTxRefNo(String txRefNo) {
        this.txRefNo = txRefNo;
    }

    public String getTxcode() {
        return txcode;
    }

    public void setTxcode(String txcode) {
        this.txcode = txcode;
    }

    public String getTxoper() {
        return txoper;
    }

    public void setTxoper(String txoper) {
        this.txoper = txoper;
    }

    public Date getTxvaldt() {
        return txvaldt;
    }

    public void setTxvaldt(Date txvaldt) {
        this.txvaldt = txvaldt;
    }

    public Integer getEmployeeNo() {
        return employeeNo;
    }

    public void setEmployeeNo(Integer employeeNo) {
        this.employeeNo = employeeNo;
    }

    public String getAccountno() {
        return accountno;
    }

    public void setAccountno(String accountno) {
        this.accountno = accountno;
    }

    public BigDecimal getTxAmount() {
        return txAmount;
    }

    public void setTxAmount(BigDecimal txAmount) {
        this.txAmount = txAmount;
    }

    public String getCompanyCode() {
        return companyCode;
    }

    public void setCompanyCode(String companyCode) {
        this.companyCode = companyCode;
    }

    public String getSatoCode() {
        return satoCode;
    }

    public void setSatoCode(String satoCode) {
        this.satoCode = satoCode;
    }

    public String getGlbranch() {
        return glbranch;
    }

    public void setGlbranch(String glbranch) {
        this.glbranch = glbranch;
    }

    public String getGlcodeParent() {
        return glcodeParent;
    }

    public void setGlcodeParent(String glcodeParent) {
        this.glcodeParent = glcodeParent;
    }

    public String getGlcodeChild() {
        return glcodeChild;
    }

    public void setGlcodeChild(String glcodeChild) {
        this.glcodeChild = glcodeChild;
    }

    public String getGloper() {
        return gloper;
    }

    public void setGloper(String gloper) {
        this.gloper = gloper;
    }

    public BigDecimal getGldebit() {
        return gldebit;
    }

    public void setGldebit(BigDecimal gldebit) {
        this.gldebit = gldebit;
    }

    public BigDecimal getGlcredit() {
        return glcredit;
    }

    public void setGlcredit(BigDecimal glcredit) {
        this.glcredit = glcredit;
    }

}
