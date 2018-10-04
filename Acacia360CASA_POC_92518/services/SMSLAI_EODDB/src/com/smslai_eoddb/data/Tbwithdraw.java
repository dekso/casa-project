
package com.smslai_eoddb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbwithdraw
 *  07/30/2018 19:49:47
 * 
 */
public class Tbwithdraw {

    private Integer id;
    private String txBatch;
    private Date txdate;
    private String txRefNo;
    private String txcode;
    private String txmode;
    private Date txvaldt;
    private String slaidNo;
    private String employeeNo;
    private String lastName;
    private String firstName;
    private String middleName;
    private String accountno;
    private BigDecimal txAmount;
    private String txStatus;
    private Date txStatusDate;
    private String createdBy;
    private Date creationDate;
    private String approvedBy;
    private Date approvalDate;
    private String txRemarks;

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

    public String getTxmode() {
        return txmode;
    }

    public void setTxmode(String txmode) {
        this.txmode = txmode;
    }

    public Date getTxvaldt() {
        return txvaldt;
    }

    public void setTxvaldt(Date txvaldt) {
        this.txvaldt = txvaldt;
    }

    public String getSlaidNo() {
        return slaidNo;
    }

    public void setSlaidNo(String slaidNo) {
        this.slaidNo = slaidNo;
    }

    public String getEmployeeNo() {
        return employeeNo;
    }

    public void setEmployeeNo(String employeeNo) {
        this.employeeNo = employeeNo;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
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

    public String getTxStatus() {
        return txStatus;
    }

    public void setTxStatus(String txStatus) {
        this.txStatus = txStatus;
    }

    public Date getTxStatusDate() {
        return txStatusDate;
    }

    public void setTxStatusDate(Date txStatusDate) {
        this.txStatusDate = txStatusDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public String getApprovedBy() {
        return approvedBy;
    }

    public void setApprovedBy(String approvedBy) {
        this.approvedBy = approvedBy;
    }

    public Date getApprovalDate() {
        return approvalDate;
    }

    public void setApprovalDate(Date approvalDate) {
        this.approvalDate = approvalDate;
    }

    public String getTxRemarks() {
        return txRemarks;
    }

    public void setTxRemarks(String txRemarks) {
        this.txRemarks = txRemarks;
    }

}
