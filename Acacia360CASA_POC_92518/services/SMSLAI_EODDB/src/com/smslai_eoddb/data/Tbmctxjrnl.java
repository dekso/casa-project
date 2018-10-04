
package com.smslai_eoddb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbmctxjrnl
 *  10/01/2018 19:31:05
 * 
 */
public class Tbmctxjrnl {

    private Integer id;
    private String accountno;
    private BigDecimal amount;
    private String issuingbr;
    private String txbr;
    private String mccheckno;
    private String txby;
    private Date txdate;
    private Integer txstatus;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAccountno() {
        return accountno;
    }

    public void setAccountno(String accountno) {
        this.accountno = accountno;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getIssuingbr() {
        return issuingbr;
    }

    public void setIssuingbr(String issuingbr) {
        this.issuingbr = issuingbr;
    }

    public String getTxbr() {
        return txbr;
    }

    public void setTxbr(String txbr) {
        this.txbr = txbr;
    }

    public String getMccheckno() {
        return mccheckno;
    }

    public void setMccheckno(String mccheckno) {
        this.mccheckno = mccheckno;
    }

    public String getTxby() {
        return txby;
    }

    public void setTxby(String txby) {
        this.txby = txby;
    }

    public Date getTxdate() {
        return txdate;
    }

    public void setTxdate(Date txdate) {
        this.txdate = txdate;
    }

    public Integer getTxstatus() {
        return txstatus;
    }

    public void setTxstatus(Integer txstatus) {
        this.txstatus = txstatus;
    }

}
