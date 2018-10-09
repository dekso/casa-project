/**
 * 
 */
package com.etel.util.forms;

import java.util.List;

import com.etel.security.forms.TBRoleForm;
import com.gldb.data.Tbuser;

public class UserForm {

	private Tbuser useraccount;
	
	private List<TBRoleForm> roles;

	public Tbuser getUseraccount() {
		return useraccount;
	}

	public void setUseraccount(Tbuser useraccount) {
		this.useraccount = useraccount;
	}

	public List<TBRoleForm> getRoles() {
		return roles;
	}

	public void setRoles(List<TBRoleForm> roles) {
		this.roles = roles;
	}
	
}
