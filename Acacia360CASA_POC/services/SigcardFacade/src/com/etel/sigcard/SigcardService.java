package com.etel.sigcard;

import java.util.List;

import com.smslai_eoddb.data.Tbbatchfile;
import com.smslai_eoddb.data.Tbdepositcif;

public interface SigcardService {
	
	String saveSigcard(String filename, String acctno);
	String viewSigcard(String acctno);
	String saveBulkFile(Tbbatchfile data);
	List<Tbbatchfile> getBatchList(Integer batchstatus);
	String readBulk(Integer id);
	List<Tbdepositcif> bulkAccountCreation(String filename);
}
