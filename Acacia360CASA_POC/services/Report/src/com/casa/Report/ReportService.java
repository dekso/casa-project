package com.casa.Report;

import java.util.Map;

public interface ReportService {
	
			//PDF
			String executeJasperPDF(String fileName, Map<String, Object> parameters);
			//EXCEL
			String executeJasperXLSX(String fileName, Map<String, Object> parameters);
			//CSV
			String executeJasperCSV(String fileName, Map<String, Object> parameters);
			//DOCX
			String executeJasperDOCX(String fileName, Map<String, Object> parameters);

}
