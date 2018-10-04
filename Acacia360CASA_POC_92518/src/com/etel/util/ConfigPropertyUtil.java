package com.etel.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

import com.wavemaker.runtime.RuntimeAccess;

public class ConfigPropertyUtil {

	public static String getPropertyValue(String propertyname) {
		try {
			String dir = RuntimeAccess.getInstance().getSession().getServletContext()
					.getRealPath("/resources/properties");
			File file = new File(dir);
			if (!file.exists()) {
				file.mkdirs();
			}
			File config = new File(file, "config.properties");
			Properties prop = new Properties();
			InputStream input = new FileInputStream(config);
			prop.load(input);
			return prop.getProperty(propertyname);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
