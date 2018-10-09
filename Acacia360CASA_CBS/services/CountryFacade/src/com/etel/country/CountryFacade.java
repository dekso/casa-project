package com.etel.country;

import java.util.List;

import com.gldb.data.Tbcountry;
import com.etel.country.forms.AddressForm;
import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

/**
 * This is a client-facing service class.  All
 * public methods will be exposed to the client.  Their return
 * values and parameters will be passed to the client or taken
 * from the client, respectively.  This will be a singleton
 * instance, shared between all requests. 
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL, String, Exception).
 * LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log level.
 * For info on these levels, look for tomcat/log4j documentation
 */
@ExposeToClient
public class CountryFacade extends JavaServiceSuperClass {
    /* Pass in one of FATAL, ERROR, WARN,  INFO and DEBUG to modify your log level;
     *  recommend changing this to FATAL or ERROR before deploying.  For info on these levels, look for tomcat/log4j documentation
     */
    public CountryFacade() {
       super(INFO);
    }
    
    public AddressForm getAddress(String code, String stateprovince, String city) {
    	CountryService service = new CountryServiceImpl();
    	return service.getAddress(code, stateprovince, city);
    }

    public List<Tbcountry> getListOfCountry() {
    	CountryService service = new CountryServiceImpl();
    	return service.getListOfCountry();
    }
    
    public List<Tbcountry> getListOfCityByState(String stateprovince) {
    	CountryService service = new CountryServiceImpl();
    	return service.getListOfCityByState(stateprovince);
    }
    
    public List<Tbcountry> getListOfPostalCode(String stateprovince, String city) {
    	CountryService service = new CountryServiceImpl();
    	return service.getListOfPostalCode(stateprovince, city);
    }
    
    public List<Tbcountry> getListOfStateByCountry(String code) {
    	CountryService service = new CountryServiceImpl();
    	return service.getListOfStateByCountry(code);
    }
    public List<Tbcountry> getListOfAreaByRegion(String region){
    	CountryService service = new CountryServiceImpl();
    	return service.getListOfAreaByRegion(region);
    }
    
}
