package com.etel.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;
import com.wavemaker.runtime.RuntimeAccess;

public class SystemUtil {

	private static Properties getProperties(String propertyFilename) {
		Properties properties = null;
		try {
			properties = new Properties();
			String dir = RuntimeAccess.getInstance().getSession().getServletContext()
					.getRealPath("/resources/properties");
			File config = new File(new File(dir), propertyFilename);
			InputStream resourceAsStream = new FileInputStream(config);
			if (resourceAsStream != null) {
				properties.load(resourceAsStream);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return properties;
	}

	public static String getPropertyValue(String propertyFilename, String propertyValue) {
		Properties prop = getProperties(propertyFilename);
		String val = prop.getProperty(propertyValue.trim());
		return val;
	}
}
