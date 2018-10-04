package com.casa.form.util;

import java.util.List;

/**
 * Created by saoDG on 5/8/2018.
 */
public class AccountInquiryForm {

    private AccountInquiry inquiry;
    private AccountInquiry atainq;
    private List<AccountInquiryJournal> histlist;
    private String result;

    public AccountInquiry getInquiry() {
        return inquiry;
    }

    public void setInquiry(AccountInquiry inquiry) {
        this.inquiry = inquiry;
    }

    public AccountInquiry getAtainq() {
        return atainq;
    }

    public void setAtainq(AccountInquiry atainq) {
        this.atainq = atainq;
    }

    public List<AccountInquiryJournal> getHistlist() {
        return histlist;
    }

    public void setHistlist(List<AccountInquiryJournal> histlist) {
        this.histlist = histlist;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }
}
