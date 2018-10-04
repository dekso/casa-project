package com.user.maintenance.form;

import java.util.Date;

public class UserInfoForm {
	
	private String branch;
	private String dept;
	private String role;
	private String name;
	private Date businessdt;
	private String brid;
	
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getBusinessdt() {
		return businessdt;
	}
	public void setBusinessdt(Date businessdt) {
		this.businessdt = businessdt;
	}
	public String getBrid() {
		return brid;
	}
	public void setBrid(String brid) {
		this.brid = brid;
	} 

}
