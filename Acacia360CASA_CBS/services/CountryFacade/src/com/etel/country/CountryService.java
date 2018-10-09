package com.etel.country;

import java.util.List;

import com.gldb.data.Tbcountry;
import com.etel.country.forms.AddressForm;

public interface CountryService {
	
	List<Tbcountry> getListOfCountry();
	
	List<Tbcountry> getListOfStateByCountry(String code);
	
	List<Tbcountry> getListOfCityByState(String stateprovince);
	
	List<Tbcountry> getListOfPostalCode(String stateprovince, String city);
	
	AddressForm getAddress(String code, String stateprovince, String city);

	List<Tbcountry> getListOfAreaByRegion(String region);
}
