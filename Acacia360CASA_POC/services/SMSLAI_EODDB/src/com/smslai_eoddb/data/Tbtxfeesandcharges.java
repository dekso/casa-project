
package com.smslai_eoddb.data;

import java.math.BigDecimal;


/**
 *  SMSLAI_EODDB.Tbtxfeesandcharges
 *  07/30/2018 19:49:45
 * 
 */
public class Tbtxfeesandcharges {

    private Integer id;
    private String txrefno;
    private String name;
    private BigDecimal amount;
    private String chargetype;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getChargetype() {
        return chargetype;
    }

    public void setChargetype(String chargetype) {
        this.chargetype = chargetype;
    }

}
