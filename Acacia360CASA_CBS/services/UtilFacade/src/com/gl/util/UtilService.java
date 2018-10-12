package com.gl.util;

import java.util.List;

import com.etel.util.forms.DescIdForm;
import com.gl.util.forms.CodetableForm;
import com.gldb.data.Tbcodetable;
import com.gldb.data.Tbfeesandcharges;
import com.gldb.data.Tbholiday;
import com.gldb.data.Tbmerchant;
import com.gldb.data.Tbterminal;
import com.gldb.data.Tbtransactioncode;
import com.gldb.data.Tbunit;

public interface UtilService {
	
	List<DescIdForm> genCodetable(String codename);
	List<Tbcodetable> listCodetable(String codename);
	String addCodetable(Tbcodetable record);
	List<String> getCodename();
	List<Tbunit> getBranchList();
	List<DescIdForm> getPsStatSelect();
	List<Tbholiday> getListHoliday(String search);
	String addOrupdateHoliday(Tbholiday hol,String type);
	String addBranch(Tbunit unit);
	List<CodetableForm> getListofCodesPerCodename(String codename);
	List<Tbtransactioncode> getListTxcode(String search);
	String addOrUpdateTxcode(Tbtransactioncode code);
	List<Tbunit> getAllBranch();
	List<Tbmerchant> getListMerchant();
	String addOrupdateMerchant(Tbmerchant merchant);
	List<Tbfeesandcharges> getListFeesandCharges();
	String addOrupdateFees(Tbfeesandcharges fees);
	List<Tbterminal> terminalList(String unitid, int isUnused);
}
