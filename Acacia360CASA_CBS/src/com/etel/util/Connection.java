package com.etel.util;

import java.net.HttpURLConnection;
import java.net.URL;

public class Connection {

	public static boolean connectionCheck() {
		/**
		 * 0 = offline, 1 = online
		 **/
		boolean result = false;
		try {
			System.out.println(ConfigPropertyUtil.getPropertyValue("ws_url"));
			URL siteURL = new URL(ConfigPropertyUtil.getPropertyValue("ws_url"));
			HttpURLConnection connection = (HttpURLConnection) 
					siteURL.openConnection();
			connection.setRequestMethod("GET");
			connection.setConnectTimeout(2000);
			connection.connect();
			int code = connection.getResponseCode();
			if (code == 200) {
				result = true;
			}
		} catch (Exception e) {
			result = false;
		}
		return result;
	}
}
