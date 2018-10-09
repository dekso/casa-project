
package com.casa.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;


/**
 *  SMSLAI_EODDB.Tbfreezeaccount
 *  09/03/2018 05:51:54
 * 
 */
@Entity
@Table(name="TBFREEZEACCOUNT")
public class Tbfreezeaccount {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String accountno;
    private String remarks;
    private Date freezedate;
    private String freezeby;
    private Date liftdate;
    private String liftby;
    private Date validitydate;
//    private BigDecimal amount;

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

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Date getFreezedate() {
        return freezedate;
    }

    public void setFreezedate(Date freezedate) {
        this.freezedate = freezedate;
    }

    public String getFreezeby() {
        return freezeby;
    }

    public void setFreezeby(String freezeby) {
        this.freezeby = freezeby;
    }

    public Date getLiftdate() {
        return liftdate;
    }

    public void setLiftdate(Date liftdate) {
        this.liftdate = liftdate;
    }

    public String getLiftby() {
        return liftby;
    }

    public void setLiftby(String liftby) {
        this.liftby = liftby;
    }

    public Date getValiditydate() {
        return validitydate;
    }

    public void setValiditydate(Date validitydate) {
        this.validitydate = validitydate;
    }

//    public BigDecimal getAmount() {
//        return amount;
//    }
//
//    public void setAmount(BigDecimal amount) {
//        this.amount = amount;
//    }
}
