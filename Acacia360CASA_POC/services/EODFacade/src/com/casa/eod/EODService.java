/**
 * 
 */
package com.casa.eod;

import java.util.Date;

import com.casa.forms.LogsAndModulesForm;
import com.smslai_eoddb.data.Tbunit;

/**
 * @author ETEL-COMP05
 *
 */
public interface EODService {

	Tbunit getMainBranch();
	
	LogsAndModulesForm findAllLogsFortheDay(Date currentbusinessdate);

	int runEOD(int module, String branchcodes);

}
