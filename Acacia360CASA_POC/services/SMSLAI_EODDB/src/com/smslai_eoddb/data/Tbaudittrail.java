
package com.smslai_eoddb.data;

import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbaudittrail
 *  10/12/2018 12:49:06
 * 
 */
public class Tbaudittrail {

    private Integer audittrailid;
    private String eventname;
    private String eventdescription;
    private String username;
    private Date eventdatetime;

    public Integer getAudittrailid() {
        return audittrailid;
    }

    public void setAudittrailid(Integer audittrailid) {
        this.audittrailid = audittrailid;
    }

    public String getEventname() {
        return eventname;
    }

    public void setEventname(String eventname) {
        this.eventname = eventname;
    }

    public String getEventdescription() {
        return eventdescription;
    }

    public void setEventdescription(String eventdescription) {
        this.eventdescription = eventdescription;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getEventdatetime() {
        return eventdatetime;
    }

    public void setEventdatetime(Date eventdatetime) {
        this.eventdatetime = eventdatetime;
    }

}
