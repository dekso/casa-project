
package com.smslai_eoddb.data;

import java.math.BigDecimal;


/**
 *  SMSLAI_EODDB.Tbfintxchecklist
 *  10/12/2018 12:49:06
 * 
 */
public class Tbfintxchecklist {

    private Integer id;
    private String txrefmain;
    private String checkno;
    private BigDecimal checkamt;
    private String clearingtype;
    private String draweebank;
    private String brstnno;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTxrefmain() {
        return txrefmain;
    }

    public void setTxrefmain(String txrefmain) {
        this.txrefmain = txrefmain;
    }

    public String getCheckno() {
        return checkno;
    }

    public void setCheckno(String checkno) {
        this.checkno = checkno;
    }

    public BigDecimal getCheckamt() {
        return checkamt;
    }

    public void setCheckamt(BigDecimal checkamt) {
        this.checkamt = checkamt;
    }

    public String getClearingtype() {
        return clearingtype;
    }

    public void setClearingtype(String clearingtype) {
        this.clearingtype = clearingtype;
    }

    public String getDraweebank() {
        return draweebank;
    }

    public void setDraweebank(String draweebank) {
        this.draweebank = draweebank;
    }

    public String getBrstnno() {
        return brstnno;
    }

    public void setBrstnno(String brstnno) {
        this.brstnno = brstnno;
    }

}
