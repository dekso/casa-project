package com.casa.form.fin;

import com.casa.model.Tbfintxchecklist;
import com.casa.model.Tbfintxjrnl;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by saoDG on 5/25/2018.
 */
public class TransactForm {

    private Tbfintxjrnl jrnl;
    private List<Tbfintxchecklist> checklist;
    private BigDecimal tellerslimit;

    public Tbfintxjrnl getJrnl() {
        return jrnl;
    }

    public void setJrnl(Tbfintxjrnl jrnl) {
        this.jrnl = jrnl;
    }

    public List<Tbfintxchecklist> getChecklist() {
        return checklist;
    }

    public void setChecklist(List<Tbfintxchecklist> checklist) {
        this.checklist = checklist;
    }

    public BigDecimal getTellerslimit() {
        return tellerslimit;
    }

    public void setTellerslimit(BigDecimal tellerslimit) {
        this.tellerslimit = tellerslimit;
    }
}
