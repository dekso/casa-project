/**
 * 
 */
package com.casa.forms;

import java.util.List;

import com.gldb.data.Tblogs;

/**
 * @author ETEL-COMP05
 *
 */
public class LogsAndModulesForm {
	
	List<Tblogs> logList;
	EODModulesForm eodForm;
	public List<Tblogs> getLogList() {
		return logList;
	}
	public void setLogList(List<Tblogs> logList) {
		this.logList = logList;
	}
	public EODModulesForm getEodForm() {
		return eodForm;
	}
	public void setEodForm(EODModulesForm eodForm) {
		this.eodForm = eodForm;
	}
	
	
	
}
