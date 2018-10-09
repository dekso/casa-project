package com.casa.util.forms;

import java.util.Date;

public class BranchInfoForm {

	private String brstatus;
	private Date businessdt;
	private Date nxtbusinessdt;
	
	public String getBrstatus() {
		return brstatus;
	}
	public void setBrstatus(String brstatus) {
		this.brstatus = brstatus;
	}
	public Date getBusinessdt() {
		return businessdt;
	}
	public void setBusinessdt(Date businessdt) {
		this.businessdt = businessdt;
	}
	public Date getNxtbusinessdt() {
		return nxtbusinessdt;
	}
	public void setNxtbusinessdt(Date nxtbusinessdt) {
		this.nxtbusinessdt = nxtbusinessdt;
	}
}
