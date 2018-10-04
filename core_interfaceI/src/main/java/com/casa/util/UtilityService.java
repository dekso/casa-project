package com.casa.util;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by saoDG on 5/16/2018.
 */
public class UtilityService {

    private static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
    private static SimpleDateFormat tformat = new SimpleDateFormat("HH:mm:ss");
    private static SimpleDateFormat ttformat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public static Date fixDate(Date date){
        try {
            String strtime = tformat.format(new Date());
            date = ttformat.parse(format.format(date)+" "+strtime);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return date;
    }

    public Date fixStrDate(String strdate){
        Date date = null;
        try {
            date = tformat.parse(strdate);
            String strtime = tformat.format(new Date());
            date = ttformat.parse(format.format(date)+" "+strtime);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return date;
    }

    public Date objectToDate(Object objdate) {
        try {
            Date date = ttformat.parse(String.valueOf(objdate));
            return date;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
