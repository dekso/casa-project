package com.etel.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.AuthenticationFailedException;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.junit.Test;

import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.forms.FormValidation;
import com.smslai_eoddb.data.Tbproperties;
import com.wavemaker.runtime.RuntimeAccess;
/**
 * @author Kevin
 * */
public class EmailUtil {
	
	//Get SMTP Properties
//	private static String smtpUserEmailAdd = SystemUtil.getPropertyValue("smtpConfig.properties", "userEmailAdd");
//	private static String smtpPassword = SystemUtil.getPropertyValue("smtpConfig.properties", "password");
//	private static String smtpEmailAddAlias = SystemUtil.getPropertyValue("smtpConfig.properties", "emailAddAlias");
//	private static String smtpHost = SystemUtil.getPropertyValue("smtpConfig.properties", "host");
//	private static String smtpPort = SystemUtil.getPropertyValue("smtpConfig.properties", "port");
	
	private static String smtpUserEmailAdd;
	private static String smtpPassword;
	private static String smtpEmailAddAlias;
	private static String smtpHost;
	private static String smtpPort;
	private static String imagePath = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/resources/images");
	
	/**Send Email (SMTP)
	 * @author Kevin
	 * @return form ( flag = success / failed ; errorMessage = Exception )
	 * */
	@SuppressWarnings("static-access")
	@Test
	public static FormValidation sendEmail(String recipient, String CC, String BCC, String subject, String bodyMessage) {
		FormValidation form = new FormValidation();
		DBService dbService = new DBServiceImpl();
		Tbproperties conf = new Tbproperties();
		try {
			EncryptDecryptUtil en = new EncryptDecryptUtil();
			conf = (Tbproperties) dbService.executeUniqueHQLQueryMaxResultOne("FROM Tbproperties", null);
			if(conf != null){
				smtpUserEmailAdd = conf.getSmtpEmailaddress();
				smtpPassword = en.decrypt(conf.getSmtpPassword());
				smtpEmailAddAlias = conf.getSmtpEmailaddalias();
				smtpHost = conf.getSmtpHost();
				smtpPort = conf.getSmtpPort();
			}
			
			Properties props = System.getProperties();
			props.put("mail.smtp.starttls.enable", true); // added this line
			props.put("mail.smtp.host", smtpHost);
			props.put("mail.smtp.user", smtpUserEmailAdd);
			props.put("mail.smtp.password", smtpPassword);
			props.put("mail.smtp.port", smtpPort);
			props.put("mail.smtp.auth", true);

			Session session = Session.getInstance(props, null);
			MimeMessage message = new MimeMessage(session);
			
			InternetAddress from = new InternetAddress(smtpUserEmailAdd, smtpEmailAddAlias);
			message.setSubject(subject);
			message.setFrom(from);
//			message.addRecipients(Message.RecipientType.TO, InternetAddress.parse("mmmunoz@eteligent.com.ph, ndignacio.etel@gmail.com, kauriarte.etel@gmail.com, jdquindoza.etel@gmail.com ,mkmamaril.etel@gmail.com"));
			
			message.addRecipients(Message.RecipientType.TO, InternetAddress.parse(recipient));
			if (CC != null && CC != "") {
				message.addRecipients(Message.RecipientType.CC, InternetAddress.parse(CC));
			}
			if (BCC != null && BCC != "") {
				message.addRecipients(Message.RecipientType.BCC, InternetAddress.parse(BCC));
			}
			// This mail has 2 part, the BODY and the embedded image
	         MimeMultipart multipart = new MimeMultipart("alternative");

	         // >>>>First part (the html)
	         BodyPart messageBodyPart = new MimeBodyPart();
//	         String htmlText = "<H1>Hello</H1><img src=\"cid:image\">";
	         messageBodyPart.setContent(bodyMessage, "text/html");
	         // add it
	         multipart.addBodyPart(messageBodyPart);

	         // >>>>Second part (the image)
	          
	         //AcaciaLogo
	         messageBodyPart = new MimeBodyPart();
			 DataSource acacialogo = new FileDataSource(imagePath + "\\emailheader.png");
//			 System.out.println(imagePath + "\\emailheader.png");
	         messageBodyPart.setDataHandler(new DataHandler(acacialogo));
	         messageBodyPart.setHeader("Content-ID", "<acacialogo>");
	         multipart.addBodyPart(messageBodyPart);
	         //Eteligent Logo
	         messageBodyPart = new MimeBodyPart();
			 DataSource etellogo = new FileDataSource(imagePath + "\\etellogo.png");
//			 System.out.println(imagePath + "\\etellogo.png");
	         messageBodyPart.setDataHandler(new DataHandler(etellogo));
	         messageBodyPart.setHeader("Content-ID", "<etellogo>");
	         multipart.addBodyPart(messageBodyPart);
			
			
			// Add html part to multi part
			multipart.addBodyPart(messageBodyPart);

			// Associate multi-part with message
			message.setContent(multipart);

			// Send message
			Transport transport = session.getTransport("smtp");
			transport.connect(smtpHost, smtpUserEmailAdd, smtpPassword);
			System.out.println(">>>>>>>>>>>> Sending Email... " + new SimpleDateFormat("EEEE - MMMM dd, yyyy hh:mm a").format(new Date())+" <<<<<<<<<<<<");
			transport.sendMessage(message, message.getAllRecipients());
			transport.close();
			form.setFlag("success");
			form.setErrorMessage("The message has been sent.");
			System.out.println(">>>>>>>>>>>> The message has been sent!  " + new SimpleDateFormat("EEEE - MMMM dd, yyyy hh:mm a").format(new Date()));
			return form;
		} catch (AuthenticationFailedException e) {
			System.out.println(">>>>>>>>>>>>SMTP Invalid username or password.");
			form.setFlag("failed");
			form.setErrorMessage("Sending Failed! SMTP Invalid username or password.");
			e.printStackTrace();
		} catch (MessagingException e) {
			System.out.println(">>>>>>>>>>>>Sending Failed! SMTP server is unreachable!");
			form.setFlag("failed");
			form.setErrorMessage("Sending Failed! SMTP server is unreachable! Please try again.");
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			form.setFlag("failed");
			form.setErrorMessage("Sending Failed! Please try again.");
		}
		return form;
	}
	
	/**HTML content convert to string*/
	public static String readHtml(String htmlFilename){
		String dir = RuntimeAccess.getInstance().getSession().getServletContext().getRealPath("/resources/properties/emailformat");
		File fileDir = new File(new File(dir), htmlFilename);
    	StringBuilder contentBuilder = new StringBuilder();
    	try {
    	    BufferedReader in = new BufferedReader(new FileReader(fileDir));
    	    String str;
    	    while ((str = in.readLine()) != null) {
    	        contentBuilder.append(str);
    	    }
    	    in.close();
    	} catch (IOException e) {
    		e.printStackTrace();
    	}
    	String content = contentBuilder.toString();
    	return content;
	}
	
	
	@SuppressWarnings("static-access")
	@Test
	public static boolean isEmailServerReachable() {
		DBService dbService = new DBServiceImpl();
		Tbproperties conf = new Tbproperties();
		try {
			EncryptDecryptUtil en = new EncryptDecryptUtil();
			conf = (Tbproperties) dbService.executeUniqueHQLQueryMaxResultOne("FROM Tbproperties", null);
			if(conf != null){
				smtpUserEmailAdd = conf.getSmtpEmailaddress();
				smtpPassword = en.decrypt(conf.getSmtpPassword());
				smtpEmailAddAlias = conf.getSmtpEmailaddalias();
				smtpHost = conf.getSmtpHost();
				smtpPort = conf.getSmtpPort();
			}
			
			Properties props = System.getProperties();
			props.put("mail.smtp.starttls.enable", true); // added this line
			props.put("mail.smtp.host", smtpHost);
			props.put("mail.smtp.user", smtpUserEmailAdd);
			props.put("mail.smtp.password", smtpPassword);
			props.put("mail.smtp.port", smtpPort);
			props.put("mail.smtp.auth", true);
			Session session = Session.getInstance(props, null);
		
			Transport transport = session.getTransport("smtp");
			transport.connect(smtpHost, smtpUserEmailAdd, smtpPassword);
			if(transport.isConnected()){
				return true;
			}
		} catch (AuthenticationFailedException e) {
			System.out.println("SMTP Invalid username or password.");
			e.printStackTrace();
			return false;
		} catch (MessagingException e) {
			System.out.println("Can't connect to smtp server");
			e.printStackTrace();
			return false;
		} 
		return false;
	}
}
