
package com.smslai_eoddb.data;

import java.math.BigDecimal;


/**
 *  SMSLAI_EODDB.Tbfeesandcharges
 *  10/11/2018 13:34:38
 * 
 */
public class Tbfeesandcharges {

    private Integer id;
    private String productcode;
    private String subprodcode;
    private String name;
    private BigDecimal amount;
    private String chargetype;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductcode() {
        return productcode;
    }

    public void setProductcode(String productcode) {
        this.productcode = productcode;
    }

    public String getSubprodcode() {
        return subprodcode;
    }

    public void setSubprodcode(String subprodcode) {
        this.subprodcode = subprodcode;
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
