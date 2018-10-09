package com.gl.glacct.form;

import java.math.BigDecimal;

public class ProofsheetTrForm {
	
	private String trno;
	private BigDecimal totaldebit;
	private BigDecimal totalcredit;
	private String status;
	
	public String getTrno() {
		return trno;
	}
	public void setTrno(String trno) {
		this.trno = trno;
	}
	public BigDecimal getTotaldebit() {
		return totaldebit;
	}
	public void setTotaldebit(BigDecimal totaldebit) {
		this.totaldebit = totaldebit;
	}
	public BigDecimal getTotalcredit() {
		return totalcredit;
	}
	public void setTotalcredit(BigDecimal totalcredit) {
		this.totalcredit = totalcredit;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
