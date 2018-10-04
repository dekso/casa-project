
package com.smslai_eoddb.data;

import java.util.Date;


/**
 *  SMSLAI_EODDB.TbtransactionType
 *  09/18/2017 21:43:59
 * 
 */
public class TbtransactionType {

    private Integer id;
    private Date dateUpdated;
    private String docvalMessage;
    private Boolean eod;
    private Integer eodPriority;
    private Boolean eodInclude;
    private String mnemonic;
    private String name;
    private String passbookMnemonic;
    private String passbookMessage;
    private Integer updatedBy;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDateUpdated() {
        return dateUpdated;
    }

    public void setDateUpdated(Date dateUpdated) {
        this.dateUpdated = dateUpdated;
    }

    public String getDocvalMessage() {
        return docvalMessage;
    }

    public void setDocvalMessage(String docvalMessage) {
        this.docvalMessage = docvalMessage;
    }

    public Boolean getEod() {
        return eod;
    }

    public void setEod(Boolean eod) {
        this.eod = eod;
    }

    public Integer getEodPriority() {
        return eodPriority;
    }

    public void setEodPriority(Integer eodPriority) {
        this.eodPriority = eodPriority;
    }

    public Boolean getEodInclude() {
        return eodInclude;
    }

    public void setEodInclude(Boolean eodInclude) {
        this.eodInclude = eodInclude;
    }

    public String getMnemonic() {
        return mnemonic;
    }

    public void setMnemonic(String mnemonic) {
        this.mnemonic = mnemonic;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassbookMnemonic() {
        return passbookMnemonic;
    }

    public void setPassbookMnemonic(String passbookMnemonic) {
        this.passbookMnemonic = passbookMnemonic;
    }

    public String getPassbookMessage() {
        return passbookMessage;
    }

    public void setPassbookMessage(String passbookMessage) {
        this.passbookMessage = passbookMessage;
    }

    public Integer getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(Integer updatedBy) {
        this.updatedBy = updatedBy;
    }

}
