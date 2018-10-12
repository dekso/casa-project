
package com.gldb.data;

import java.math.BigDecimal;


/**
 *  GLDB.Tbtransactioncode
 *  10/11/2018 14:29:34
 * 
 */
public class Tbtransactioncode {

    private Integer id;
    private String txcode;
    private String txname;
    private BigDecimal servicecharge;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTxcode() {
        return txcode;
    }

    public void setTxcode(String txcode) {
        this.txcode = txcode;
    }

    public String getTxname() {
        return txname;
    }

    public void setTxname(String txname) {
        this.txname = txname;
    }

    public BigDecimal getServicecharge() {
        return servicecharge;
    }

    public void setServicecharge(BigDecimal servicecharge) {
        this.servicecharge = servicecharge;
    }

}
