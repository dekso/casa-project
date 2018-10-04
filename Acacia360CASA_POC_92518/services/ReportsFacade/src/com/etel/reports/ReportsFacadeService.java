package com.etel.reports;

import java.util.List;
import java.util.Map;

import com.smslai_eoddb.data.Tbrole;
import com.smslai_eoddb.data.Tbunit;
import com.smslai_eoddb.data.Tbuserroles;
//import com.etel.role.forms.RoleForm;

public interface ReportsFacadeService {
	
	//PDF
	String executeJasperPDF(String fileName, Map<String, Object> parameters);
	//EXCEL
	String executeJasperXLSX(String fileName, Map<String, Object> parameters);
	//CSV
	String executeJasperCSV(String fileName, Map<String, Object> parameters);
	//DOCX
	String executeJasperDOCX(String fileName, Map<String, Object> parameters);
	//List<RoleForm> listUserRoles();
	/***** For Branch Name *****/
	List<Tbunit> getBranchName();
	
}
