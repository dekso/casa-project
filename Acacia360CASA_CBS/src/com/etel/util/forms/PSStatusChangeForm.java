package com.etel.util.forms;

import java.util.Date;

public class PSStatusChangeForm {

	private int id;
	private String status;
	private Date statusdt;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getStatusdt() {
		return statusdt;
	}
	public void setStatusdt(Date statusdt) {
		this.statusdt = statusdt;
	}
}
