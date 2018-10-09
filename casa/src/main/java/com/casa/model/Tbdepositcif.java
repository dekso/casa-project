package com.casa.model;

import javax.persistence.*;

/**
 * Created by saoDG on 5/27/2018.
 */
@Entity
@Table(name="TBDEPOSITCIF")
public class Tbdepositcif {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String accountno;
    private String cifno;
    private String cifname;

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

    public String getCifno() {
        return cifno;
    }

    public void setCifno(String cifno) {
        this.cifno = cifno;
    }

    public String getCifname() {
        return cifname;
    }

    public void setCifname(String cifname) {
        this.cifname = cifname;
    }

}
