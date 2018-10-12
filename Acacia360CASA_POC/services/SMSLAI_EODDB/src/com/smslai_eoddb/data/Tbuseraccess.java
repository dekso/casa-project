
package com.smslai_eoddb.data;

import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbuseraccess
 *  10/11/2018 13:34:38
 * 
 */
public class Tbuseraccess {

    private TbuseraccessId id;
    private String modulename;
    private Date assigneddate;

    public TbuseraccessId getId() {
        return id;
    }

    public void setId(TbuseraccessId id) {
        this.id = id;
    }

    public String getModulename() {
        return modulename;
    }

    public void setModulename(String modulename) {
        this.modulename = modulename;
    }

    public Date getAssigneddate() {
        return assigneddate;
    }

    public void setAssigneddate(Date assigneddate) {
        this.assigneddate = assigneddate;
    }

}
