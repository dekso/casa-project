package com.casa.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by saoDG on 6/6/2018.
 */
@Entity
@Table(name="TBCHECKBOOK")
public class Tbcheckbook {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String checkbkaccountno;
    private String checkbookno;
    private Integer startchkno;
    private Integer endchkno;
    private String releasedby;
    private String receivedby;
    private Integer status;
    private String unit;
//    private String checktype;

//    @ManyToOne
//    @JoinColumn(
//            name = "checkbkaccountno",
//            referencedColumnName = "accountno", insertable = false, updatable = false
//    )
//
//    @JsonIgnoreProperties("tbcheckbookbList")
//    private Tbdeposit tbdeposit;
//
//    public Tbdeposit getTbdeposit() {
//        return tbdeposit;
//    }
//
//    public void setTbdeposit(Tbdeposit tbdeposit) {
//        this.tbdeposit = tbdeposit;
//    }
//    @ManyToOne
//    @JoinColumn(name= "accountno")
//    private Tbdeposit tbdeposit;
//
//    public Tbdeposit getTbdeposit() {
//        return tbdeposit;
//    }
//
//    public void setTbdeposit(Tbdeposit tbdeposit) {
//        this.tbdeposit = tbdeposit;
//    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCheckbkaccountno() {
        return checkbkaccountno;
    }

    public void setCheckbkaccountno(String checkbkaccountno) {
        this.checkbkaccountno = checkbkaccountno;
    }

    public String getCheckbookno() {
        return checkbookno;
    }

    public void setCheckbookno(String checkbookno) {
        this.checkbookno = checkbookno;
    }

    public Integer getStartchkno() {
        return startchkno;
    }

    public void setStartchkno(Integer startchkno) {
        this.startchkno = startchkno;
    }

    public Integer getEndchkno() {
        return endchkno;
    }

    public void setEndchkno(Integer endchkno) {
        this.endchkno = endchkno;
    }

    public String getReleasedby() {
        return releasedby;
    }

    public void setReleasedby(String releasedby) {
        this.releasedby = releasedby;
    }

    public String getReceivedby() {
        return receivedby;
    }

    public void setReceivedby(String receivedby) {
        this.receivedby = receivedby;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

//    public String getChecktype() {
//        return checktype;
//    }
//
//    public void setChecktype(String checktype) {
//        this.checktype = checktype;
//    }
}
