package com.gl.glacct.form;

import java.util.Date;

public class BranchSetupForm {

	private String brid;
	private String brname;
	private Date brbusinessdt;
	private String brstatus;
	
	public String getBrid() {
		return brid;
	}
	public void setBrid(String brid) {
		this.brid = brid;
	}
	public String getBrname() {
		return brname;
	}
	public void setBrname(String brname) {
		this.brname = brname;
	}
	public Date getBrbusinessdt() {
		return brbusinessdt;
	}
	public void setBrbusinessdt(Date brbusinessdt) {
		this.brbusinessdt = brbusinessdt;
	}
	public String getBrstatus() {
		return brstatus;
	}
	public void setBrstatus(String brstatus) {
		this.brstatus = brstatus;
	}
}
