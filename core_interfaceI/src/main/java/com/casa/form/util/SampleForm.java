package com.casa.form.util;

import com.casa.model.Tbcheckbook;
import com.casa.model.Tbdeposit;

import java.util.List;

/**
 * Created by saoDG on 6/26/2018.
 */
public class SampleForm {

    private Tbdeposit tbdeposit;
    private List<Tbcheckbook> tbcheckbookbList;


    public Tbdeposit getTbdeposit() {
        return tbdeposit;
    }

    public void setTbdeposit(Tbdeposit tbdeposit) {
        this.tbdeposit = tbdeposit;
    }

    public List<Tbcheckbook> getTbcheckbookbList() {
        return tbcheckbookbList;
    }

    public void setTbcheckbookbList(List<Tbcheckbook> tbcheckbookbList) {
        this.tbcheckbookbList = tbcheckbookbList;
    }
}
