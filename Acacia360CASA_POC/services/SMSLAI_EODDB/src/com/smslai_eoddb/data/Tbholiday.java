
package com.smslai_eoddb.data;

import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbholiday
 *  10/10/2018 15:49:33
 * 
 */
public class Tbholiday {

    private Integer id;
    private Date holDate;
    private String holName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getHolDate() {
        return holDate;
    }

    public void setHolDate(Date holDate) {
        this.holDate = holDate;
    }

    public String getHolName() {
        return holName;
    }

    public void setHolName(String holName) {
        this.holName = holName;
    }

}
