package com.gl.glacct.form;

import java.math.BigDecimal;
import java.util.Date;

public class ProofsheetDetailForm {
	
	private Date psdate;
	private String currency;
	private String status;
	private int id;
	private BigDecimal drTotal;
	private BigDecimal crTotal;

	public Date getPsdate() {
		return psdate;
	}
	public void setPsdate(Date psdate) {
		this.psdate = psdate;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public BigDecimal getDrTotal() {
		return drTotal;
	}
	public void setDrTotal(BigDecimal drTotal) {
		this.drTotal = drTotal;
	}
	public BigDecimal getCrTotal() {
		return crTotal;
	}
	public void setCrTotal(BigDecimal crTotal) {
		this.crTotal = crTotal;
	}
	
}
