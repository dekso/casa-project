
package com.smslai_eoddb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbuser
 *  10/11/2018 13:34:38
 * 
 */
public class Tbuser {

    private Integer id;
    private String username;
    private String role;
    private String password;
    private String firstname;
    private String lastname;
    private String middlename;
    private String emailadd;
    private String lastip;
    private Date lastlogondate;
    private Date lastpasswordchange;
    private Boolean isloggedon;
    private Boolean islocked;
    private Boolean isactive;
    private Boolean issuspended;
    private Boolean isactivedirectorymember;
    private Integer invalidattemptscount;
    private Date pwexpirydate;
    private Date validitydateto;
    private Date validitydatefrom;
    private String validitytimeto;
    private String validitytimefrom;
    private Date datecreated;
    private Date dateupdated;
    private String createdby;
    private String updatedby;
    private Boolean ischangepwrequired;
    private Boolean ispwneverexpire;
    private Boolean isdisabled;
    private String invalidattempip;
    private Date lastlogoutdate;
    private String lastsession;
    private String userid;
    private BigDecimal unitbalance;
    private BigDecimal limitamount;
    private String unitbrid;
    private String currency;
    private String instcode;
    private String terminatedsessionip;
    private Date datetimelockedout;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getMiddlename() {
        return middlename;
    }

    public void setMiddlename(String middlename) {
        this.middlename = middlename;
    }

    public String getEmailadd() {
        return emailadd;
    }

    public void setEmailadd(String emailadd) {
        this.emailadd = emailadd;
    }

    public String getLastip() {
        return lastip;
    }

    public void setLastip(String lastip) {
        this.lastip = lastip;
    }

    public Date getLastlogondate() {
        return lastlogondate;
    }

    public void setLastlogondate(Date lastlogondate) {
        this.lastlogondate = lastlogondate;
    }

    public Date getLastpasswordchange() {
        return lastpasswordchange;
    }

    public void setLastpasswordchange(Date lastpasswordchange) {
        this.lastpasswordchange = lastpasswordchange;
    }

    public Boolean getIsloggedon() {
        return isloggedon;
    }

    public void setIsloggedon(Boolean isloggedon) {
        this.isloggedon = isloggedon;
    }

    public Boolean getIslocked() {
        return islocked;
    }

    public void setIslocked(Boolean islocked) {
        this.islocked = islocked;
    }

    public Boolean getIsactive() {
        return isactive;
    }

    public void setIsactive(Boolean isactive) {
        this.isactive = isactive;
    }

    public Boolean getIssuspended() {
        return issuspended;
    }

    public void setIssuspended(Boolean issuspended) {
        this.issuspended = issuspended;
    }

    public Boolean getIsactivedirectorymember() {
        return isactivedirectorymember;
    }

    public void setIsactivedirectorymember(Boolean isactivedirectorymember) {
        this.isactivedirectorymember = isactivedirectorymember;
    }

    public Integer getInvalidattemptscount() {
        return invalidattemptscount;
    }

    public void setInvalidattemptscount(Integer invalidattemptscount) {
        this.invalidattemptscount = invalidattemptscount;
    }

    public Date getPwexpirydate() {
        return pwexpirydate;
    }

    public void setPwexpirydate(Date pwexpirydate) {
        this.pwexpirydate = pwexpirydate;
    }

    public Date getValiditydateto() {
        return validitydateto;
    }

    public void setValiditydateto(Date validitydateto) {
        this.validitydateto = validitydateto;
    }

    public Date getValiditydatefrom() {
        return validitydatefrom;
    }

    public void setValiditydatefrom(Date validitydatefrom) {
        this.validitydatefrom = validitydatefrom;
    }

    public String getValiditytimeto() {
        return validitytimeto;
    }

    public void setValiditytimeto(String validitytimeto) {
        this.validitytimeto = validitytimeto;
    }

    public String getValiditytimefrom() {
        return validitytimefrom;
    }

    public void setValiditytimefrom(String validitytimefrom) {
        this.validitytimefrom = validitytimefrom;
    }

    public Date getDatecreated() {
        return datecreated;
    }

    public void setDatecreated(Date datecreated) {
        this.datecreated = datecreated;
    }

    public Date getDateupdated() {
        return dateupdated;
    }

    public void setDateupdated(Date dateupdated) {
        this.dateupdated = dateupdated;
    }

    public String getCreatedby() {
        return createdby;
    }

    public void setCreatedby(String createdby) {
        this.createdby = createdby;
    }

    public String getUpdatedby() {
        return updatedby;
    }

    public void setUpdatedby(String updatedby) {
        this.updatedby = updatedby;
    }

    public Boolean getIschangepwrequired() {
        return ischangepwrequired;
    }

    public void setIschangepwrequired(Boolean ischangepwrequired) {
        this.ischangepwrequired = ischangepwrequired;
    }

    public Boolean getIspwneverexpire() {
        return ispwneverexpire;
    }

    public void setIspwneverexpire(Boolean ispwneverexpire) {
        this.ispwneverexpire = ispwneverexpire;
    }

    public Boolean getIsdisabled() {
        return isdisabled;
    }

    public void setIsdisabled(Boolean isdisabled) {
        this.isdisabled = isdisabled;
    }

    public String getInvalidattempip() {
        return invalidattempip;
    }

    public void setInvalidattempip(String invalidattempip) {
        this.invalidattempip = invalidattempip;
    }

    public Date getLastlogoutdate() {
        return lastlogoutdate;
    }

    public void setLastlogoutdate(Date lastlogoutdate) {
        this.lastlogoutdate = lastlogoutdate;
    }

    public String getLastsession() {
        return lastsession;
    }

    public void setLastsession(String lastsession) {
        this.lastsession = lastsession;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public BigDecimal getUnitbalance() {
        return unitbalance;
    }

    public void setUnitbalance(BigDecimal unitbalance) {
        this.unitbalance = unitbalance;
    }

    public BigDecimal getLimitamount() {
        return limitamount;
    }

    public void setLimitamount(BigDecimal limitamount) {
        this.limitamount = limitamount;
    }

    public String getUnitbrid() {
        return unitbrid;
    }

    public void setUnitbrid(String unitbrid) {
        this.unitbrid = unitbrid;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getInstcode() {
        return instcode;
    }

    public void setInstcode(String instcode) {
        this.instcode = instcode;
    }

    public String getTerminatedsessionip() {
        return terminatedsessionip;
    }

    public void setTerminatedsessionip(String terminatedsessionip) {
        this.terminatedsessionip = terminatedsessionip;
    }

    public Date getDatetimelockedout() {
        return datetimelockedout;
    }

    public void setDatetimelockedout(Date datetimelockedout) {
        this.datetimelockedout = datetimelockedout;
    }

}
