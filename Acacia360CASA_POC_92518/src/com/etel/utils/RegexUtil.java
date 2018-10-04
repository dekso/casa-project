package com.etel.utils;

public class RegexUtil {
	/**
	 * @return  true if input matches regex  <b>^[a-zA-Z-_. ]+$</b> (Characters with dot, whitespace, underscore and dash).
	 * **/
	public static boolean name(String input){
		return input.matches("^[a-zA-Z-_. ]+$");
	}
	
	/**
	 * @return  true if input matches regex  <b>^[-0-9]+$</b> (Numbers with dash).
	 * **/
	public static boolean numbersWithDash(String input){
		return input.matches("^[-0-9]+$");
	}
	
	/**
	 * @return  true if input matches regex  <b>^[+][-0-9]+$</b> (Numbers with + beginning character).
	 * **/
	public static boolean countryCode(String input){
		return input.matches("^[+][0-9]+$");
	}
	
	/**
	 * @return  true if input matches regex  <b>^[a-zA-Z0-9-_&.,:$^”#()!*@’/%+~'`" ]+$</b> (alpha numeric).
	 * **/
	public static boolean alphaNumeric(String input){
		return input.matches("^[a-zA-Z0-9-_&.,:$^”#()!*@’/%+~'\\\\`\" ]+$");
	}
	
	/**
	 * @return  true if input matches regex  <b>^[a-zA-Z]+$</b> (Alphabet only).
	 * **/
	public static boolean aphabetOnly(String input){
		return input.matches("^[a-zA-Z]+$");
	}	
	

	/**
	 * @return  true if input matches regex  <b>^[0-9]$</b> (Numbers only).
	 * **/
	public static boolean numbersOnly(String input){
		return input.matches("^[0-9]+$");
	}	
}
