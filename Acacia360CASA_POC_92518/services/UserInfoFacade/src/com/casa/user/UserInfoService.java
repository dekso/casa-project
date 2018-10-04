package com.casa.user;

import java.math.BigDecimal;

import com.casa.user.forms.UserDetailForm;
import com.casa.user.forms.UserInfoForm;
import com.smslai_eoddb.data.Tbunit;

public interface UserInfoService {

	UserDetailForm getUserinfo(String userid);
	BigDecimal getUnitBalance(String userid, String currency);
	Tbunit getUnitinfo();
	
}

