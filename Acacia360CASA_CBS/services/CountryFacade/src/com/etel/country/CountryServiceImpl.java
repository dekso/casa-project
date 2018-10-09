package com.etel.country;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.gldb.data.Tbcountry;
import com.etel.common.service.DBService;
import com.etel.common.service.DBServiceImpl;
import com.etel.country.forms.AddressForm;
import com.etel.utils.HQLUtil;

public class CountryServiceImpl implements CountryService{

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbcountry> getListOfCountry() {
		List<Tbcountry> list = new ArrayList<Tbcountry>();
		DBService dbService = new DBServiceImpl();
		try {
			list = (List<Tbcountry>) dbService.execSQLQueryTransformer("SELECT DISTINCT code, country FROM Tbcountry ORDER BY country ASC", null, Tbcountry.class, 1);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbcountry> getListOfStateByCountry(String code) {
		List<Tbcountry> list = new ArrayList<Tbcountry>();
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		try {
			if (code != null) {
				params.put("code", code);
				list = (List<Tbcountry>) dbService.execSQLQueryTransformer(
						"SELECT DISTINCT code, country, stateprovince,areacode FROM Tbcountry WHERE code=:code",
						params,Tbcountry.class, 1);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbcountry> getListOfCityByState(String stateprovince) {
		List<Tbcountry> list = new ArrayList<Tbcountry>();
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		try {
			if (stateprovince != null) {
				params.put("stateprovince", stateprovince);
				list = (List<Tbcountry>) dbService.execSQLQueryTransformer(
						"SELECT DISTINCT code, country, stateprovince, city FROM Tbcountry WHERE stateprovince=:stateprovince",
						params, Tbcountry.class, 1);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbcountry> getListOfPostalCode(String stateprovince, String city) {
		List<Tbcountry> list = new ArrayList<Tbcountry>();
		DBService dbService = new DBServiceImpl();
		Map<String, Object> params = HQLUtil.getMap();
		try {
			if (city != null && stateprovince != null) {
				params.put("city", city);
				params.put("state", stateprovince);
				list = (List<Tbcountry>) dbService.executeListHQLQuery("FROM Tbcountry WHERE stateprovince=:state AND city=:city",params);
			}
			if(!list.isEmpty()){
				for (Tbcountry row: list) {
					row.setAreacode(row.getAreadesc() + " - " + row.getPostalcode());
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public AddressForm getAddress(String code, String stateprovince, String city) {
		AddressForm form = new AddressForm();
		try {
			List<Tbcountry> listCountry = getListOfCountry();
			if (listCountry != null) {
				// set list of country
				form.setListOfCountry(listCountry);
				if (code != null) {
					List<Tbcountry> listState = getListOfStateByCountry(code);
					if (listState != null) {
						// set list of state
						form.setListOfStateByCountry(listState);
						if (stateprovince != null) {
							List<Tbcountry> listCity = getListOfCityByState(stateprovince);
							if (listCity != null) {
								// set list of city
								form.setListOfCityByState(listCity);
								if (city != null) {
									List<Tbcountry> listPostal = getListOfPostalCode(stateprovince, city);
									if (listPostal != null) {
										form.setListOfPostalCode(listPostal);
									}
								}
							}
						}
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return form;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Tbcountry> getListOfAreaByRegion(String region) {
		// TODO Auto-generated method stub
		DBService dbService = new DBServiceImpl();
		List<Tbcountry> list = new ArrayList<Tbcountry>();
		Map<String, Object> params = HQLUtil.getMap();
		try {
			params.put("region", region);
			list = (List<Tbcountry>) dbService.execSQLQueryTransformer(
					"SELECT DISTINCT areadesc  FROM Tbcountry WHERE areacode=:region", params, Tbcountry.class, 1);
		} catch (Exception e) {
			// TODO: handle exception
		}
		return list;
	}
}
