
package com.gldb.data;

import java.util.Date;


/**
 *  GLDB.Tbholiday
 *  10/08/2018 20:01:50
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
