
package com.gldb.data;

import java.util.Date;


/**
 *  GLDB.Tbaccessrights
 *  10/11/2018 14:29:34
 * 
 */
public class Tbaccessrights {

    private TbaccessrightsId id;
    private String accesstype;
    private String submodulename;
    private String createdby;
    private Date createddate;
    private String updatedby;
    private Date dateupdated;
    private String description;

    public TbaccessrightsId getId() {
        return id;
    }

    public void setId(TbaccessrightsId id) {
        this.id = id;
    }

    public String getAccesstype() {
        return accesstype;
    }

    public void setAccesstype(String accesstype) {
        this.accesstype = accesstype;
    }

    public String getSubmodulename() {
        return submodulename;
    }

    public void setSubmodulename(String submodulename) {
        this.submodulename = submodulename;
    }

    public String getCreatedby() {
        return createdby;
    }

    public void setCreatedby(String createdby) {
        this.createdby = createdby;
    }

    public Date getCreateddate() {
        return createddate;
    }

    public void setCreateddate(Date createddate) {
        this.createddate = createddate;
    }

    public String getUpdatedby() {
        return updatedby;
    }

    public void setUpdatedby(String updatedby) {
        this.updatedby = updatedby;
    }

    public Date getDateupdated() {
        return dateupdated;
    }

    public void setDateupdated(Date dateupdated) {
        this.dateupdated = dateupdated;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
