
package com.gldb.data;

import java.util.Date;


/**
 *  GLDB.Tbdocchecklist
 *  09/29/2018 15:22:55
 * 
 */
public class Tbdocchecklist {

    private Integer id;
    private String txrefno;
    private String employeeno;
    private String documentCode;
    private Integer seqNo;
    private Boolean isRequired;
    private Boolean isSubmitted;
    private Date dateSubmitted;
    private Boolean isRequestWaiver;
    private Date dateApproved;
    private Boolean isPoa;
    private String requirementType;
    private Integer requirementGroup;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTxrefno() {
        return txrefno;
    }

    public void setTxrefno(String txrefno) {
        this.txrefno = txrefno;
    }

    public String getEmployeeno() {
        return employeeno;
    }

    public void setEmployeeno(String employeeno) {
        this.employeeno = employeeno;
    }

    public String getDocumentCode() {
        return documentCode;
    }

    public void setDocumentCode(String documentCode) {
        this.documentCode = documentCode;
    }

    public Integer getSeqNo() {
        return seqNo;
    }

    public void setSeqNo(Integer seqNo) {
        this.seqNo = seqNo;
    }

    public Boolean getIsRequired() {
        return isRequired;
    }

    public void setIsRequired(Boolean isRequired) {
        this.isRequired = isRequired;
    }

    public Boolean getIsSubmitted() {
        return isSubmitted;
    }

    public void setIsSubmitted(Boolean isSubmitted) {
        this.isSubmitted = isSubmitted;
    }

    public Date getDateSubmitted() {
        return dateSubmitted;
    }

    public void setDateSubmitted(Date dateSubmitted) {
        this.dateSubmitted = dateSubmitted;
    }

    public Boolean getIsRequestWaiver() {
        return isRequestWaiver;
    }

    public void setIsRequestWaiver(Boolean isRequestWaiver) {
        this.isRequestWaiver = isRequestWaiver;
    }

    public Date getDateApproved() {
        return dateApproved;
    }

    public void setDateApproved(Date dateApproved) {
        this.dateApproved = dateApproved;
    }

    public Boolean getIsPoa() {
        return isPoa;
    }

    public void setIsPoa(Boolean isPoa) {
        this.isPoa = isPoa;
    }

    public String getRequirementType() {
        return requirementType;
    }

    public void setRequirementType(String requirementType) {
        this.requirementType = requirementType;
    }

    public Integer getRequirementGroup() {
        return requirementGroup;
    }

    public void setRequirementGroup(Integer requirementGroup) {
        this.requirementGroup = requirementGroup;
    }

}
