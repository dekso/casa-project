package com.etel.utils;

//--- UTILITIES
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

//--- Logger
import org.apache.log4j.Logger;
//--- Payment cycle
//import com.eteligent.common.enums.PaymentCycle;

/**
 * Use this class for date time manipulation
 * 
 * @author Jowel Poquiz
 */
public final class DateTimeUtil {

	// ============================== STATIC =================================

	/** logger */
	private static final Logger logger = Logger.getLogger(DateTimeUtil.class);

	/** YYYYMMDD DateFormat */
	public static final String DATE_FORMAT_YYYYMMDD = "yyyyMMdd";

	/** YYYY-MM-DD DateFormat */
	public static final String DATE_FORMAT_YYYY_MM_DD = "yyyy-MM-dd";

	/** YYYY-MM-DD DateFormat */
	public static final String DATE_FORMAT_MM_DD_YYYY = "MM-dd-yyyy";

	/** YYYYMM DateFormat */
	public static final String DATE_FORMAT_YYYYMM = "yyyyMM";

	/** YYYY-MM DateFormat */
	public static final String DATE_FORMAT_YYYY_MM = "yyyy-MM";

	/** DAYS_PER_YEAR */
	public static final int DAYS_PER_YEAR = 365;

	// ============================== METHODS =================================

	/**
	 * Returns the passed date as string based on the format YYYYDD
	 * 
	 * @param date
	 * @return string date
	 */
	public static String getDateYYYYMM(Date date) {
		String yymm = "";
		if (date != null) {
			DateFormat df = new SimpleDateFormat(DATE_FORMAT_YYYYMM);
			yymm = df.format(date);
		}
		return yymm;
	}

	/**
	 * Add days to the passed date
	 * 
	 * @param date
	 *            Date object where days will be added
	 * @param days
	 *            number of days, should be > 0
	 * @return Date object
	 */
	public static Date addDays(Date date, int days) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);

		/*
		 * Adds or subtracts the specified amount of time to the given calendar
		 * field, based on the calendar's rules. For example, to subtract 5 days
		 * from the current time of the calendar, you can achieve it by calling:
		 * add(Calendar.DAY_OF_MONTH, -5).
		 * 
		 * - description of .add method
		 */
		cal.add(Calendar.DAY_OF_MONTH, days);
		return cal.getTime();
	}

	/**
	 * Converts date to default YYYYMMDD format
	 * 
	 * @param date
	 * @return
	 */
	public static String convertDateToString(Date date, String pattern) {
		if (pattern == null || pattern.trim().length() < 1) {
			pattern = DATE_FORMAT_YYYYMMDD;
		}

		String strDate = "";
		if (date != null) {
			SimpleDateFormat sdf = new SimpleDateFormat(pattern);
			strDate = sdf.format(date);
		}
		return strDate;
	}

	/**
	 * Converts a string date based on passed pattern
	 * 
	 * @param strDate
	 *            String date
	 * @param pattern
	 *            DateTime format
	 * @return Date object
	 */
	public static Date convertToDate(String strDate, String pattern) {
		SimpleDateFormat formatter = new SimpleDateFormat(pattern);
		formatter.setLenient(false);
		Date parseDate = null;
		try {
			parseDate = formatter.parse(strDate);
		} catch (ParseException e) {
			logger.warn("Failed converting string date [" + strDate
					+ "] to date object", e);
			e.printStackTrace(System.out);
			// Do your catch here
		}

		return parseDate;
	}

	/**
	 * Check if date is greater than anotherDate. Returns 0 if both date are
	 * equals, less than zero if strDate is before strAnotherDate, 1 if strDate
	 * is after strAnotherDate
	 * 
	 * @param strDate
	 *            String date
	 * @param strAnotherDate
	 *            String anotherDate
	 */
	public static int compareDate(String strDate, String strAnotherDate) {

		Date date = convertToDate(strDate, DATE_FORMAT_YYYYMM);
		Date anotherDate = convertToDate(strAnotherDate, DATE_FORMAT_YYYYMM);

		return date.compareTo(anotherDate);

	}
	
	/**
	 * Check if date is greater than anotherDate. Returns 0 if both date are
	 * equals, less than zero if strDate is before strAnotherDate, 1 if strDate
	 * is after strAnotherDate
	 * 
	 * @param strDate
	 *            String date
	 * @param strAnotherDate
	 *            String anotherDate
	 */
	public static int compareDateYYYYMMDD(String strDate, String strAnotherDate) {

		Date date = convertToDate(strDate, DATE_FORMAT_YYYYMMDD);
		Date anotherDate = convertToDate(strAnotherDate, DATE_FORMAT_YYYYMMDD);

		return date.compareTo(anotherDate);

	}

	public static int daysdiff(Date startDate, Date asOfDate) {

//		Integer wrkdays = 0;
//
//		Calendar c1 = Calendar.getInstance();
//		Calendar c2 = Calendar.getInstance();
//
//		c1.setTime(startDate);
//		c2.setTime(asOfDate);
//
//		wrkdays = c1.get(Calendar.DAY_OF_YEAR) - c2.get(Calendar.DAY_OF_YEAR);
//
//		return wrkdays;
		
		// replaced with the following code to support comparison of dates with different year
		
		Integer wrkdays = 0;

		Calendar c1 = Calendar.getInstance();
		Calendar c2 = Calendar.getInstance();

//		Calendar lastday1 = Calendar.getInstance();
		
		c2.setTime(startDate);
		c1.setTime(asOfDate);

		if(c1.get(Calendar.YEAR) != c2.get(Calendar.YEAR)) {
			if(DateTimeUtil.isLeapYear(startDate) == true) {
				wrkdays = c2.get(Calendar.DAY_OF_YEAR) - c1.get(Calendar.DAY_OF_YEAR) + 365;
			} else {
				wrkdays = c2.get(Calendar.DAY_OF_YEAR) - c1.get(Calendar.DAY_OF_YEAR) + 365;				
			}
			
		} else {
		
		wrkdays = c2.get(Calendar.DAY_OF_YEAR) - c1.get(Calendar.DAY_OF_YEAR);
		} 
	
		logger.info("Wrkdays is " + wrkdays);
		return wrkdays;
		
	}

	// ==========================================================

	/**
	 * Returns the number of dates from startDate to "As of date"
	 * 
	 * @param date1
	 * @param date2
	 * @return Returns the number of dates between FDD to "As of date"
	 */
	public static int monthsBetween(Date startDate, Date asOfDate) {

		int monthsBetween = 0;

		if (startDate != null && asOfDate != null) {
			GregorianCalendar date1 = (GregorianCalendar) GregorianCalendar
					.getInstance();
			date1.setTime(startDate);

			GregorianCalendar date2 = (GregorianCalendar) GregorianCalendar
					.getInstance();
			date2.setTime(asOfDate);

			// difference in month for years
			monthsBetween = (date1.get(Calendar.YEAR) - date2
					.get(Calendar.YEAR)) * 12;
			// difference in month for months
			monthsBetween += date1.get(Calendar.MONTH)
					- date2.get(Calendar.MONTH);
			// difference in month for days
			if (date1.get(Calendar.DAY_OF_MONTH) != date1
					.getActualMaximum(Calendar.DAY_OF_MONTH)
					&& date1.get(Calendar.DAY_OF_MONTH) != date1
							.getActualMaximum(Calendar.DAY_OF_MONTH)) {
				monthsBetween += ((date1.get(Calendar.DAY_OF_MONTH) - date2
						.get(Calendar.DAY_OF_MONTH)) / 31d);
			}
		}

		return Math.abs(monthsBetween);
	}

	public static boolean isWithinDateRange(Date dateInput, Date startDate,
			Date endDate) {
		return !(dateInput.before(startDate) || dateInput.after(endDate));
	}

	public static boolean isLeapYear(Date date) {
		boolean leapYear = false;
		int year = Integer.parseInt((DateTimeUtil.getDateYYYYMM(date))
				.substring(0, 4));

		if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
			leapYear = true;
			System.out.println("Year " + year + " is a leap year");
		} else {
			leapYear = false;
			System.out.println("Year " + year + " is not a leap year");
		}

		return leapYear;
	}

	/**
	 * Returns the day of the month in String format from the date
	 * 
	 * @param asOfDate
	 *            Date object
	 * @return day of the month in String format
	 */
	public static String getDayOfMonthStr(Date asOfDate) {
		String dayOfMonthStr = "";
		if (asOfDate != null) {
			dayOfMonthStr = String.valueOf(getDayOfMonth(asOfDate));
		}
		return dayOfMonthStr;
	}

	/**
	 * Returns the day of the month in int format from the date
	 * 
	 * @param asOfDate
	 *            Date object
	 * @return day of the month in int format
	 */
	public static int getDayOfMonth(Date asOfDate) {
		int dayOfMonth = 0;

		if (asOfDate != null) {
			Calendar cal = Calendar.getInstance();
			cal.setTime(asOfDate);
			dayOfMonth = cal.get(Calendar.DAY_OF_MONTH);
		}

		return dayOfMonth;
	}

	// /**
	// * Converts date to default YYYYMMDD format
	// *
	// * @param date
	// * @return
	// */
	// public static String convertDateToString( Date date )
	// {
	// String strDate = "";
	// if ( date != null )
	// {
	// SimpleDateFormat sdf = new SimpleDateFormat( DATE_FORMAT_YYYYMMDD );
	// strDate = sdf.format( date );
	// }
	// return strDate;
	// }

	// /**
	// * Converts string date to a YYYYMMDD format.
	// *
	// * @param strDate string date
	// * @return Date object
	// */
	// public static Date convertToDate( String strDate )
	// {
	// SimpleDateFormat formatter = new SimpleDateFormat( DATE_FORMAT_YYYYMMDD
	// );
	// formatter.setLenient( false );
	// Date parseDate = null;
	// try
	// {
	// parseDate = formatter.parse( strDate );
	// }
	// catch ( ParseException e )
	// {
	// logger.warn( "Failed converting string date [" + strDate +
	// "] to date object", e );
	// e.printStackTrace( System.out );
	// // Do your catch here
	// }
	//
	// return parseDate;
	// }

	/*
	 * @author corais
	 */
	public static boolean isEndOfMonth(Date date) {
		// --- Calendar
		// Calendar cal = Calendar.getInstance();
		// cal.setTime( date );
		// int dayOfMonth = cal.getActualMaximum(Calendar.DAY_OF_MONTH);
		// int month = cal.getActualMaximum( Calendar.MONTH );

		// --- Date: YYYYMMDD
		String strDate = DateTimeUtil.convertDateToString(date,
				DATE_FORMAT_YYYYMMDD);

		int dayOfMonth = Integer.parseInt(strDate.substring(6, 8));
		int month = Integer.parseInt(strDate.substring(4, 6));
		boolean endOfMonth = false;

		switch (month) {
		case 1: // --- January
		case 3: // --- March
		case 5: // --- May
		case 7: // --- July
		case 8: // --- August
		case 10: // --- October
		case 12: // --- December
			if (dayOfMonth == 31) {
				endOfMonth = true;
			} else {
				endOfMonth = false;
			}
			break;

		// --------------------------------
		case 4: // --- April
		case 6: // --- June
		case 9: // --- September
		case 11: // --- November
			if (dayOfMonth == 30) {
				endOfMonth = true;
			} else {
				endOfMonth = false;
			}
			break;

		// --------------------------------
		case 2: // --- February
			;
			if (isLeapYear(date)) {
				if (dayOfMonth == 29) {
					endOfMonth = true;
				} else {
					endOfMonth = false;
				}
			} else {
				if (dayOfMonth == 28) {
					endOfMonth = true;
				} else {
					endOfMonth = false;
				}
			}
			break;

		// --------------------------------
		default:
			endOfMonth = false;
			break;
		}

		return endOfMonth;
	}

	/*
	 * @author corais 2013-07-11
	 */
	public static boolean isEndOfTheYear(Date date) {
		// --- Calendar
		// Calendar cal = Calendar.getInstance();
		// cal.setTime( date );
		// int dayOfMonth = cal.getActualMaximum(Calendar.DAY_OF_MONTH);
		// int month = cal.getActualMaximum( Calendar.MONTH );

		// --- Date: YYYYMMDD
		String strDate = DateTimeUtil.convertDateToString(date,
				DATE_FORMAT_YYYYMMDD);

		int dayOfMonth = Integer.parseInt(strDate.substring(6, 8));
		int month = Integer.parseInt(strDate.substring(4, 6));
		boolean isEndOfTheYear = false;

		switch (month) {
		case 1: // --- January
		case 2: // --- February
		case 3: // --- March
		case 4: // --- April
		case 5: // --- May
		case 6: // --- June
		case 7: // --- July
		case 8: // --- August
		case 9: // --- September
		case 10: // --- October
		case 11: // --- November
			isEndOfTheYear = false;
			break;

		// --------------------------------
		case 12: // --- December
			if (dayOfMonth == 31) {
				isEndOfTheYear = true;
			} else {
				isEndOfTheYear = false;
			}
			break;

		// --------------------------------
		default: 
			isEndOfTheYear = false;
			break;
		}

		return isEndOfTheYear;
	}
	
	/*
	 * ADDED METHODS - SAO
	 * 
	 * */
	
	public static Date getTat(int tat, Date date){
		Calendar cal = Calendar.getInstance(); 
	    cal.setTime(date); 
	    cal.add(Calendar.HOUR_OF_DAY, tat); 
	    Date nDate = cal.getTime();
		return nDate;
	}
	
	public static String yearCheck(){
		Date date = new Date();
		Calendar cal = Calendar.getInstance(); 
	    cal.setTime(date); 
		String year = String.valueOf(cal.get(Calendar.YEAR));
		String tempYear = year.substring(2);
	    return tempYear;
	}
	
	public static int getAge(Date date){
		
		Calendar dob = Calendar.getInstance();  
		if(date!=null){
			dob.setTime(date); 
		}else{
			dob.setTime(new Date());
		}
		Calendar today = Calendar.getInstance();  
		int age = today.get(Calendar.YEAR) - dob.get(Calendar.YEAR);  
		if (today.get(Calendar.MONTH) < dob.get(Calendar.MONTH)) {
		  age--;  
		} else if (today.get(Calendar.MONTH) == dob.get(Calendar.MONTH)
		    && today.get(Calendar.DAY_OF_MONTH) < dob.get(Calendar.DAY_OF_MONTH)) {
		  age--;  
		}
		return age;
	}
	
	/*
	 * Added Method - Kevin /Pong
	 * 
	 * */

	public static boolean compareDateTimeByMinutes(Date startDate, Integer minutes){
		Calendar previous = Calendar.getInstance();
		previous.setTime(startDate);
		Calendar now = Calendar.getInstance();
		long diff = now.getTimeInMillis() - previous.getTimeInMillis();
		if(diff >= minutes * 60 * 1000){
			return true;
		}
		return false;
	}
	
	public static boolean compareDateTimeByHours(Date startDate, Integer hours){
		Calendar previous = Calendar.getInstance();
		previous.setTime(startDate);
		Calendar now = Calendar.getInstance();
		long diff = now.getTimeInMillis() - previous.getTimeInMillis();
		if(diff >= hours * 60 * 60 * 1000){
			return true;
			
		}
		return false;
	}
	
	public static Integer yearsDiff(Date datefrom, Date dateto){
		Calendar d1 = Calendar.getInstance();  
		if (datefrom != null) {
			d1.setTime(datefrom);
		} else {
			d1.setTime(new Date());
		}
		Calendar d2 = Calendar.getInstance();
		if (dateto != null) {
			d2.setTime(dateto);
		} else {
			d2.setTime(new Date());
		}
		int yrdiff = d2.get(Calendar.YEAR) - d1.get(Calendar.YEAR);
		if (d2.get(Calendar.MONTH) < d1.get(Calendar.MONTH)) {
			yrdiff--;
		} else if (d2.get(Calendar.MONTH) == d1.get(Calendar.MONTH)
				&& d2.get(Calendar.DAY_OF_MONTH) < d1.get(Calendar.DAY_OF_MONTH)) {
			yrdiff--;
		}
		return yrdiff;
	}
	
	public static Integer monthsDiff(Date datefrom, Date dateto){
		Calendar startCalendar = new GregorianCalendar();
		if (datefrom != null) {
			startCalendar.setTime(datefrom);
		} else {
			startCalendar.setTime(new Date());
		}
		Calendar endCalendar = new GregorianCalendar();
		
		if (dateto != null) {
			endCalendar.setTime(dateto);
		} else {
			endCalendar.setTime(new Date());
		}
		
		endCalendar.setTime(dateto);
		Integer diffYear = endCalendar.get(Calendar.YEAR) - startCalendar.get(Calendar.YEAR);
		Integer diffMonth = (diffYear * 12) + endCalendar.get(Calendar.MONTH ) - startCalendar.get(Calendar.MONTH);
		int months = diffMonth - ((diffMonth / 12) * 12);
		
		Integer diff = months ;
		return diff;
	}
	
}
