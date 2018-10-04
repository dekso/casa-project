
package com.gldb.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  GLDB.Tbtdcprint
 *  09/29/2018 15:22:55
 * 
 */
public class Tbtdcprint {

    private Integer id;
    private String tdcno;
    private String accountno;
    private Date issuedt;
    private Date matdt;
    private String name;
    private Integer term;
    private BigDecimal interest;
    private BigDecimal totalsum;
    private Integer status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTdcno() {
        return tdcno;
    }

    public void setTdcno(String tdcno) {
        this.tdcno = tdcno;
    }

    public String getAccountno() {
        return accountno;
    }

    public void setAccountno(String accountno) {
        this.accountno = accountno;
    }

    public Date getIssuedt() {
        return issuedt;
    }

    public void setIssuedt(Date issuedt) {
        this.issuedt = issuedt;
    }

    public Date getMatdt() {
        return matdt;
    }

    public void setMatdt(Date matdt) {
        this.matdt = matdt;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getTerm() {
        return term;
    }

    public void setTerm(Integer term) {
        this.term = term;
    }

    public BigDecimal getInterest() {
        return interest;
    }

    public void setInterest(BigDecimal interest) {
        this.interest = interest;
    }

    public BigDecimal getTotalsum() {
        return totalsum;
    }

    public void setTotalsum(BigDecimal totalsum) {
        this.totalsum = totalsum;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

}
