package com.gl.glacct.form;

import java.util.Date;

public class EODDetailForm {

	private Date currdt;
	private Date nextdt;
	private Integer openbr;
	
	public Date getCurrdt() {
		return currdt;
	}
	public void setCurrdt(Date currdt) {
		this.currdt = currdt;
	}
	public Date getNextdt() {
		return nextdt;
	}
	public void setNextdt(Date nextdt) {
		this.nextdt = nextdt;
	}
	public Integer getOpenbr() {
		return openbr;
	}
	public void setOpenbr(Integer openbr) {
		this.openbr = openbr;
	}
}
