package com.casa.util;

import java.util.Date;
import java.util.List;

import com.casa.util.forms.BranchInfoForm;
import com.casa.util.forms.DescIdForm;
import com.casa.util.forms.ProductMatrixForm;
import com.smslai_eoddb.data.Tbdocsperproduct;
import com.smslai_eoddb.data.Tbdocuments;
import com.smslai_eoddb.data.Tbholiday;
import com.smslai_eoddb.data.Tbprodmatrix;
import com.smslai_eoddb.data.Tbrates;
import com.smslai_eoddb.data.Tbterminal;
import com.smslai_eoddb.data.Tbtransactioncode;
import com.smslai_eoddb.data.Tbunit;

public interface UtilService {
	
	List<DescIdForm> getCurrency();
	List<DescIdForm> getUserListCico();
	List<DescIdForm> genCodetable(String codename);
	List<DescIdForm> getProdtype(String prodgroup);
	Date getBusinessdt();
	String validateUser(String username, String password);
	BranchInfoForm getBrInfo();
	String updateBr(String brstat);

	String aeTerminal(Tbterminal data);
	List<Tbterminal> terminalList(String unitid, int isUnused, String userid);
	String deleteTerminal(int id);
	List<ProductMatrixForm> productList();
	String aeProduct(Tbprodmatrix input);
	Tbprodmatrix getProductDetail(int id);
	int terminalNo(String userid);
	Integer printDocSlip(String txrefno);
	Integer printPassbook(String txrefno);
	Tbrates getRates(String curr,String buysell);
	List<Tbholiday> listHolidays(Date minDate);
	Integer printCTD(String accountno);
	ProductMatrixForm checkProduct(String prodcode, String prodgroup);
	List<Tbdocuments> getListDocument();
	List<Tbdocsperproduct> getDocsperProd();
	String addOrupdateDoc(Tbdocuments doc);
	String addOrupdateDocsperProd(Tbdocsperproduct docs);
	List<Tbtransactioncode> getListTxcode(String search);
	String addOrUpdateTxcode(Tbtransactioncode code);
	List<Tbunit> getBranchList();
	
	
}
