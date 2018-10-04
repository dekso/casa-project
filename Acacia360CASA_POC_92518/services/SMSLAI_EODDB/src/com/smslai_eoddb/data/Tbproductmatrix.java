
package com.smslai_eoddb.data;

import java.math.BigDecimal;


/**
 *  SMSLAI_EODDB.Tbproductmatrix
 *  10/01/2018 19:31:04
 * 
 */
public class Tbproductmatrix {

    private Integer id;
    private String productCode;
    private String productName;
    private String subTypeCode;
    private String subTypeName;
    private Integer rankMin;
    private Integer rankMax;
    private BigDecimal loanAmtMin;
    private BigDecimal loanAmtMax;
    private Integer loanAmtInd;
    private BigDecimal loanTermMin;
    private BigDecimal loanTermMax;
    private Boolean indNetPay;
    private String indCm1;
    private String indCm2;
    private Integer minTenureCm;
    private Boolean indPastDue;
    private Boolean indManyAvail;
    private Boolean indSameLoan;
    private Integer sameLoanPaid;
    private BigDecimal procFee;
    private Boolean indPfdeduct;
    private BigDecimal minTenureSla;
    private Integer minTenureSm;
    private BigDecimal indMinCapcon;
    private BigDecimal indMinSavings;
    private Boolean indOffset;
    private Integer wtaxRate;
    private Integer paymentCycle;
    private BigDecimal intRate1;
    private BigDecimal intRate2;
    private BigDecimal intRate3;
    private BigDecimal denominations;
    private String modeofrelease1;
    private String modeofrelease2;
    private BigDecimal amountforrelease2;
    private Boolean cmcoveredcapcon;
    private Boolean cmnotcovercapcon;
    private Integer cmtenurerequired;
    private Integer postingpriority;
    private Boolean disabled;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getSubTypeCode() {
        return subTypeCode;
    }

    public void setSubTypeCode(String subTypeCode) {
        this.subTypeCode = subTypeCode;
    }

    public String getSubTypeName() {
        return subTypeName;
    }

    public void setSubTypeName(String subTypeName) {
        this.subTypeName = subTypeName;
    }

    public Integer getRankMin() {
        return rankMin;
    }

    public void setRankMin(Integer rankMin) {
        this.rankMin = rankMin;
    }

    public Integer getRankMax() {
        return rankMax;
    }

    public void setRankMax(Integer rankMax) {
        this.rankMax = rankMax;
    }

    public BigDecimal getLoanAmtMin() {
        return loanAmtMin;
    }

    public void setLoanAmtMin(BigDecimal loanAmtMin) {
        this.loanAmtMin = loanAmtMin;
    }

    public BigDecimal getLoanAmtMax() {
        return loanAmtMax;
    }

    public void setLoanAmtMax(BigDecimal loanAmtMax) {
        this.loanAmtMax = loanAmtMax;
    }

    public Integer getLoanAmtInd() {
        return loanAmtInd;
    }

    public void setLoanAmtInd(Integer loanAmtInd) {
        this.loanAmtInd = loanAmtInd;
    }

    public BigDecimal getLoanTermMin() {
        return loanTermMin;
    }

    public void setLoanTermMin(BigDecimal loanTermMin) {
        this.loanTermMin = loanTermMin;
    }

    public BigDecimal getLoanTermMax() {
        return loanTermMax;
    }

    public void setLoanTermMax(BigDecimal loanTermMax) {
        this.loanTermMax = loanTermMax;
    }

    public Boolean getIndNetPay() {
        return indNetPay;
    }

    public void setIndNetPay(Boolean indNetPay) {
        this.indNetPay = indNetPay;
    }

    public String getIndCm1() {
        return indCm1;
    }

    public void setIndCm1(String indCm1) {
        this.indCm1 = indCm1;
    }

    public String getIndCm2() {
        return indCm2;
    }

    public void setIndCm2(String indCm2) {
        this.indCm2 = indCm2;
    }

    public Integer getMinTenureCm() {
        return minTenureCm;
    }

    public void setMinTenureCm(Integer minTenureCm) {
        this.minTenureCm = minTenureCm;
    }

    public Boolean getIndPastDue() {
        return indPastDue;
    }

    public void setIndPastDue(Boolean indPastDue) {
        this.indPastDue = indPastDue;
    }

    public Boolean getIndManyAvail() {
        return indManyAvail;
    }

    public void setIndManyAvail(Boolean indManyAvail) {
        this.indManyAvail = indManyAvail;
    }

    public Boolean getIndSameLoan() {
        return indSameLoan;
    }

    public void setIndSameLoan(Boolean indSameLoan) {
        this.indSameLoan = indSameLoan;
    }

    public Integer getSameLoanPaid() {
        return sameLoanPaid;
    }

    public void setSameLoanPaid(Integer sameLoanPaid) {
        this.sameLoanPaid = sameLoanPaid;
    }

    public BigDecimal getProcFee() {
        return procFee;
    }

    public void setProcFee(BigDecimal procFee) {
        this.procFee = procFee;
    }

    public Boolean getIndPfdeduct() {
        return indPfdeduct;
    }

    public void setIndPfdeduct(Boolean indPfdeduct) {
        this.indPfdeduct = indPfdeduct;
    }

    public BigDecimal getMinTenureSla() {
        return minTenureSla;
    }

    public void setMinTenureSla(BigDecimal minTenureSla) {
        this.minTenureSla = minTenureSla;
    }

    public Integer getMinTenureSm() {
        return minTenureSm;
    }

    public void setMinTenureSm(Integer minTenureSm) {
        this.minTenureSm = minTenureSm;
    }

    public BigDecimal getIndMinCapcon() {
        return indMinCapcon;
    }

    public void setIndMinCapcon(BigDecimal indMinCapcon) {
        this.indMinCapcon = indMinCapcon;
    }

    public BigDecimal getIndMinSavings() {
        return indMinSavings;
    }

    public void setIndMinSavings(BigDecimal indMinSavings) {
        this.indMinSavings = indMinSavings;
    }

    public Boolean getIndOffset() {
        return indOffset;
    }

    public void setIndOffset(Boolean indOffset) {
        this.indOffset = indOffset;
    }

    public Integer getWtaxRate() {
        return wtaxRate;
    }

    public void setWtaxRate(Integer wtaxRate) {
        this.wtaxRate = wtaxRate;
    }

    public Integer getPaymentCycle() {
        return paymentCycle;
    }

    public void setPaymentCycle(Integer paymentCycle) {
        this.paymentCycle = paymentCycle;
    }

    public BigDecimal getIntRate1() {
        return intRate1;
    }

    public void setIntRate1(BigDecimal intRate1) {
        this.intRate1 = intRate1;
    }

    public BigDecimal getIntRate2() {
        return intRate2;
    }

    public void setIntRate2(BigDecimal intRate2) {
        this.intRate2 = intRate2;
    }

    public BigDecimal getIntRate3() {
        return intRate3;
    }

    public void setIntRate3(BigDecimal intRate3) {
        this.intRate3 = intRate3;
    }

    public BigDecimal getDenominations() {
        return denominations;
    }

    public void setDenominations(BigDecimal denominations) {
        this.denominations = denominations;
    }

    public String getModeofrelease1() {
        return modeofrelease1;
    }

    public void setModeofrelease1(String modeofrelease1) {
        this.modeofrelease1 = modeofrelease1;
    }

    public String getModeofrelease2() {
        return modeofrelease2;
    }

    public void setModeofrelease2(String modeofrelease2) {
        this.modeofrelease2 = modeofrelease2;
    }

    public BigDecimal getAmountforrelease2() {
        return amountforrelease2;
    }

    public void setAmountforrelease2(BigDecimal amountforrelease2) {
        this.amountforrelease2 = amountforrelease2;
    }

    public Boolean getCmcoveredcapcon() {
        return cmcoveredcapcon;
    }

    public void setCmcoveredcapcon(Boolean cmcoveredcapcon) {
        this.cmcoveredcapcon = cmcoveredcapcon;
    }

    public Boolean getCmnotcovercapcon() {
        return cmnotcovercapcon;
    }

    public void setCmnotcovercapcon(Boolean cmnotcovercapcon) {
        this.cmnotcovercapcon = cmnotcovercapcon;
    }

    public Integer getCmtenurerequired() {
        return cmtenurerequired;
    }

    public void setCmtenurerequired(Integer cmtenurerequired) {
        this.cmtenurerequired = cmtenurerequired;
    }

    public Integer getPostingpriority() {
        return postingpriority;
    }

    public void setPostingpriority(Integer postingpriority) {
        this.postingpriority = postingpriority;
    }

    public Boolean getDisabled() {
        return disabled;
    }

    public void setDisabled(Boolean disabled) {
        this.disabled = disabled;
    }

}
