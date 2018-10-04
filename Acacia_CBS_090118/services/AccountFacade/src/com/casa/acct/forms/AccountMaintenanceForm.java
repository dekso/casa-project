package com.casa.acct.forms;

import java.util.Date;

public class AccountMaintenanceForm {

	private String accountno;
	private String name;
	private int	acctsts;
	private Date dtopened;
	private String shortname;
	private String jointaccttype;
	private String posttx;
	private Integer alertflag;
	private Integer alertlevel;
	private String alertmessage;
	
	public String getAccountno() {
		return accountno;
	}
	public String getName() {
		return name;
	}
	public int getAcctsts() {
		return acctsts;
	}
	public Date getDtopened() {
		return dtopened;
	}
	public String getShortname() {
		return shortname;
	}
	public String getJointaccttype() {
		return jointaccttype;
	}
	public String getPosttx() {
		return posttx;
	}
	public void setAccountno(String accountno) {
		this.accountno = accountno;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setAcctsts(int acctsts) {
		this.acctsts = acctsts;
	}
	public void setDtopened(Date dtopened) {
		this.dtopened = dtopened;
	}
	public void setShortname(String shortname) {
		this.shortname = shortname;
	}
	public void setJointaccttype(String jointaccttype) {
		this.jointaccttype = jointaccttype;
	}
	public void setPosttx(String posttx) {
		this.posttx = posttx;
	}
	public Integer getAlertflag() {
		return alertflag;
	}
	public void setAlertflag(Integer alertflag) {
		this.alertflag = alertflag;
	}
	public Integer getAlertlevel() {
		return alertlevel;
	}
	public void setAlertlevel(Integer alertlevel) {
		this.alertlevel = alertlevel;
	}
	public String getAlertmessage() {
		return alertmessage;
	}
	public void setAlertmessage(String alertmessage) {
		this.alertmessage = alertmessage;
	}
}
