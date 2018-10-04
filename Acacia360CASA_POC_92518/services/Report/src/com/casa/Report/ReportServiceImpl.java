package com.casa.Report;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Map;
import java.util.Properties;

import org.apache.log4j.Logger;

import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.security.SecurityService;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JRExporterParameter;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.export.JRCsvExporter;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.export.ooxml.JRDocxExporter;
import net.sf.jasperreports.engine.export.ooxml.JRXlsxExporter;
import net.sf.jasperreports.engine.util.JRLoader;

public class ReportServiceImpl implements ReportService {

	private static final Logger logger = Logger.getLogger(ReportFacade.class);

	SecurityService service = (SecurityService) RuntimeAccess.getInstance().getServiceBean("securityService");
	public static Connection connectDB(String databaseName, String userName, String password) {


		Connection jdbcConnection = null;

		try {

			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			jdbcConnection = DriverManager.getConnection(databaseName,
					userName, password);
		} catch (Exception ex) {
			String connectMsg = "Could not connect to the database: "
					+ ex.getMessage() + " " + ex.getLocalizedMessage();
			logger.debug(connectMsg);
		}

		return jdbcConnection;
	}

	public String executeJasperPDF(String fileName, Map<String, Object> parameters) {

		// get file url
		URL reportFile = null;

		try {
			reportFile = RuntimeAccess.getInstance().getSession()
					.getServletContext()
					.getResource("/WEB-INF/jasper/" + fileName + ".jasper");
		} catch (MalformedURLException e) {
			logger.debug("{}", e);
		}

		// initialize jasper report
		JasperReport report = null;

		// generate report
		JasperPrint jasperPrint = null;

		try {

			String dir = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/resources/properties");
			File file = new File(dir);
			if(!file.exists()){
				file.mkdirs();
			}

			File config = new File(file, "config.properties");
			if(config.exists()){
				System.out.println(config.getAbsolutePath());
			}
			Properties prop = new Properties();
			InputStream input = new FileInputStream(config);

			// Load Properties
			prop.load(input);

			report = (JasperReport) JRLoader.loadObject(reportFile);

			Connection jdbcConnection = connectDB(prop.getProperty("reportDB"), prop.getProperty("dbuser"), prop.getProperty("dbpass"));

			jasperPrint = JasperFillManager.fillReport(report, parameters,
					jdbcConnection);

		} catch (JRException e) {
			logger.debug("{}", e);
		} catch (IOException e) {
			e.printStackTrace();
		}

		// URL path =
		// RuntimeAccess.getInstance().getSession().getServletContext().getResource(
		// "/WEB-INF/jasper/pdf/" );

		String pathWR = RuntimeAccess.getInstance().getSession()
				.getServletContext().getRealPath("/resources/printtemp/");

		File pdfDirectory = new File(pathWR);

		// if ( !pdfDirectory.exists() )
		// {
		// pdfDirectory.mkdir();
		// }

		String tempFileName = new String();

		File tempFile = null;
		try {
			tempFile = File.createTempFile(fileName, ".pdf", pdfDirectory);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			logger.debug("{}", e);
		}
		tempFile.deleteOnExit();
		tempFileName = tempFile.getName();

		// JRCsvExporter exporter = new JRCsvExporter();
		JRPdfExporter exporter = new JRPdfExporter();
		exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
		exporter.setParameter(JRExporterParameter.OUTPUT_FILE_NAME,
				pdfDirectory + "/" + tempFileName);

		try {
			exporter.exportReport();
		} catch (JRException e) {
			// TODO Auto-generated catch block
			logger.debug("{}", e);
		}

		return "resources/printtemp/" + tempFileName;

	}


	// EXCEL
	public String executeJasperXLSX(String fileName,
			Map<String, Object> parameters) {

		// get file url
		URL reportFile = null;

		try {
			reportFile = RuntimeAccess.getInstance().getSession()
					.getServletContext()
					.getResource("/WEB-INF/jasper/" + fileName + ".jasper");
		} catch (MalformedURLException e) {
			logger.debug("{}", e);
		}


		// initialize jasper report
		JasperReport report = null;

		// generate report
		JasperPrint jasperPrint = null;

		try {

			String dir = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/resources/properties");
			File file = new File(dir);
			if(!file.exists()){
				file.mkdirs();
			}

			File config = new File(file, "config.properties");
			if(config.exists()){
				//	    		System.out.println(config.getAbsolutePath());
			}
			Properties prop = new Properties();
			InputStream input = new FileInputStream(config);

			// Load Properties
			prop.load(input);

			report = (JasperReport) JRLoader.loadObject(reportFile);

			Connection jdbcConnection = connectDB(prop.getProperty("reportDB"), prop.getProperty("dbuser"), prop.getProperty("dbpass"));

			jasperPrint = JasperFillManager.fillReport(report, parameters,
					jdbcConnection);

		} catch (JRException e) {
			logger.debug("{}", e);
		} catch (IOException e) {
			e.printStackTrace();
		}

		// URL path =
		// RuntimeAccess.getInstance().getSession().getServletContext().getResource(
		// "/WEB-INF/jasper/pdf/" );

		String pathWR = RuntimeAccess.getInstance().getSession()
				.getServletContext().getRealPath("/resources/printtemp/");

		File pdfDirectory = new File(pathWR);

		// if ( !pdfDirectory.exists() )
		// {
		// pdfDirectory.mkdir();
		// }

		String tempFileName1 = new String();

		File tempFile1 = null;
		try {
			tempFile1 = File.createTempFile(fileName, ".xlsx", pdfDirectory);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			logger.debug("{}", e);
		}
		tempFile1.deleteOnExit();
		tempFileName1 = tempFile1.getName();

		// JRPdfExporter exporter= new JRPdfExporter();
		// JRXlsExporter exporter= new JRXlsExporter();
		JRXlsxExporter exporter1 = new JRXlsxExporter();
		exporter1.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
		exporter1.setParameter(JRExporterParameter.OUTPUT_FILE_NAME,
				pdfDirectory + "/" + tempFileName1);
		try {
			exporter1.exportReport();
		} catch (JRException e) {
			// TODO Auto-generated catch block
			logger.debug("{}", e);
		}

		return "resources/printtemp/" + tempFileName1;
	}

	// for CSV File generation
	public String executeJasperCSV(String fileName,
			Map<String, Object> parameters) {

		//		System.out.println("<<<<<<<<<<<<<<<<<<<CSV Reports");
		// get file url
		URL reportFile = null;

		try {
			reportFile = RuntimeAccess.getInstance().getSession()
					.getServletContext()
					.getResource("/WEB-INF/jasper/" + fileName + ".jasper");
		} catch (MalformedURLException e) {
			logger.debug("{}", e);
		}


		// initialize jasper report
		JasperReport report = null;

		// generate report
		JasperPrint jasperPrint = null;

		try {

			String dir = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/resources/properties");
			File file = new File(dir);
			if(!file.exists()){
				file.mkdirs();
			}

			File config = new File(file, "config.properties");
			if(config.exists()){
				System.out.println(config.getAbsolutePath());
			}
			Properties prop = new Properties();
			InputStream input = new FileInputStream(config);

			// Load Properties
			prop.load(input);

			report = (JasperReport) JRLoader.loadObject(reportFile);

			Connection jdbcConnection = connectDB(prop.getProperty("reportDB"), prop.getProperty("dbuser"), prop.getProperty("dbpass"));

			jasperPrint = JasperFillManager.fillReport(report, parameters,
					jdbcConnection);

		} catch (JRException e) {
			logger.debug("{}", e);
		} catch (IOException e) {
			e.printStackTrace();
		}

		// URL path =
		// RuntimeAccess.getInstance().getSession().getServletContext().getResource(
		// "/WEB-INF/jasper/pdf/" );

		String pathWR = RuntimeAccess.getInstance().getSession()
				.getServletContext().getRealPath("/resources/printtemp/");

		File pdfDirectory = new File(pathWR);

		// if ( !pdfDirectory.exists() )
		// {
		// pdfDirectory.mkdir();
		// }

		String tempFileName = new String();

		File tempFile = null;
		try {
			tempFile = File.createTempFile(fileName, ".csv", pdfDirectory);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			logger.debug("{}", e);
		}
		tempFile.deleteOnExit();
		tempFileName = tempFile.getName();

		JRCsvExporter exporter = new JRCsvExporter();
		// JRPdfExporter exporter = new JRPdfExporter();
		exporter.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
		exporter.setParameter(JRExporterParameter.OUTPUT_FILE_NAME,
				pdfDirectory + "/" + tempFileName);

		try {
			exporter.exportReport();
		} catch (JRException e) {
			// TODO Auto-generated catch block
			logger.debug("{}", e);
		}

		return "resources/printtemp/" + tempFileName;
	}

	public String executeJasperDOCX(String fileName,
			Map<String, Object> parameters) {

		// get file url
		URL reportFile = null;

		try {
			reportFile = RuntimeAccess.getInstance().getSession()
					.getServletContext()
					.getResource("/WEB-INF/jasper/" + fileName + ".jasper");
		} catch (MalformedURLException e) {
			logger.debug("{}", e);
		}


		// initialize jasper report
		JasperReport report = null;

		// generate report
		JasperPrint jasperPrint = null;

		try {

			String dir = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/resources/properties");
			File file = new File(dir);
			if(!file.exists()){
				file.mkdirs();
			}

			File config = new File(file, "config.properties");
			if(config.exists()){
				System.out.println(config.getAbsolutePath());
			}
			Properties prop = new Properties();
			InputStream input = new FileInputStream(config);

			// Load Properties
			prop.load(input);

			report = (JasperReport) JRLoader.loadObject(reportFile);

			Connection jdbcConnection = connectDB(prop.getProperty("reportDB"), prop.getProperty("dbuser"), prop.getProperty("dbpass"));

			jasperPrint = JasperFillManager.fillReport(report, parameters,
					jdbcConnection);

		} catch (JRException e) {
			logger.debug("{}", e);
		} catch (IOException e) {
			e.printStackTrace();
		}

		// URL path =
		// RuntimeAccess.getInstance().getSession().getServletContext().getResource(
		// "/WEB-INF/jasper/pdf/" );

		String pathWR = RuntimeAccess.getInstance().getSession()
				.getServletContext().getRealPath("/resources/printtemp/");

		File pdfDirectory = new File(pathWR);

		// if ( !pdfDirectory.exists() )
		// {
		// pdfDirectory.mkdir();
		// } 

		String tempFileName1 = new String();

		File tempFile1 = null;
		try {
			tempFile1 = File.createTempFile(fileName, ".docx", pdfDirectory);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			logger.debug("{}", e);
		}
		tempFile1.deleteOnExit();
		tempFileName1 = tempFile1.getName();

		// JRPdfExporter exporter= new JRPdfExporter();
		// JRXlsExporter exporter= new JRXlsExporter();
		JRDocxExporter exporter1 = new JRDocxExporter();
		exporter1.setParameter(JRExporterParameter.JASPER_PRINT, jasperPrint);
		exporter1.setParameter(JRExporterParameter.OUTPUT_FILE_NAME,
				pdfDirectory + "/" + tempFileName1);
		try {
			exporter1.exportReport();
		} catch (JRException e) {
			// TODO Auto-generated catch block
			logger.debug("{}", e);
		}

		return "resources/printtemp/" + tempFileName1;
	}
}
