
package com.smslai_eoddb.data;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;


/**
 *  SMSLAI_EODDB.TbglconsolidatedId
 *  09/21/2018 13:58:57
 * 
 */
public class TbglconsolidatedId
    implements Serializable
{

    private Integer id;
    private Date txdate;
    private String gllegveh;
    private String glbranch;
    private String glsl;
    private String txcurr;
    private BigDecimal debit;
    private BigDecimal credit;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof TbglconsolidatedId)) {
            return false;
        }
        TbglconsolidatedId other = ((TbglconsolidatedId) o);
        if (this.id == null) {
            if (other.id!= null) {
                return false;
            }
        } else {
            if (!this.id.equals(other.id)) {
                return false;
            }
        }
        if (this.txdate == null) {
            if (other.txdate!= null) {
                return false;
            }
        } else {
            if (!this.txdate.equals(other.txdate)) {
                return false;
            }
        }
        if (this.gllegveh == null) {
            if (other.gllegveh!= null) {
                return false;
            }
        } else {
            if (!this.gllegveh.equals(other.gllegveh)) {
                return false;
            }
        }
        if (this.glbranch == null) {
            if (other.glbranch!= null) {
                return false;
            }
        } else {
            if (!this.glbranch.equals(other.glbranch)) {
                return false;
            }
        }
        if (this.glsl == null) {
            if (other.glsl!= null) {
                return false;
            }
        } else {
            if (!this.glsl.equals(other.glsl)) {
                return false;
            }
        }
        if (this.txcurr == null) {
            if (other.txcurr!= null) {
                return false;
            }
        } else {
            if (!this.txcurr.equals(other.txcurr)) {
                return false;
            }
        }
        if (this.debit == null) {
            if (other.debit!= null) {
                return false;
            }
        } else {
            if (!this.debit.equals(other.debit)) {
                return false;
            }
        }
        if (this.credit == null) {
            if (other.credit!= null) {
                return false;
            }
        } else {
            if (!this.credit.equals(other.credit)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.id!= null) {
            rtn = (rtn + this.id.hashCode());
        }
        rtn = (rtn* 37);
        if (this.txdate!= null) {
            rtn = (rtn + this.txdate.hashCode());
        }
        rtn = (rtn* 37);
        if (this.gllegveh!= null) {
            rtn = (rtn + this.gllegveh.hashCode());
        }
        rtn = (rtn* 37);
        if (this.glbranch!= null) {
            rtn = (rtn + this.glbranch.hashCode());
        }
        rtn = (rtn* 37);
        if (this.glsl!= null) {
            rtn = (rtn + this.glsl.hashCode());
        }
        rtn = (rtn* 37);
        if (this.txcurr!= null) {
            rtn = (rtn + this.txcurr.hashCode());
        }
        rtn = (rtn* 37);
        if (this.debit!= null) {
            rtn = (rtn + this.debit.hashCode());
        }
        rtn = (rtn* 37);
        if (this.credit!= null) {
            rtn = (rtn + this.credit.hashCode());
        }
        return rtn;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getTxdate() {
        return txdate;
    }

    public void setTxdate(Date txdate) {
        this.txdate = txdate;
    }

    public String getGllegveh() {
        return gllegveh;
    }

    public void setGllegveh(String gllegveh) {
        this.gllegveh = gllegveh;
    }

    public String getGlbranch() {
        return glbranch;
    }

    public void setGlbranch(String glbranch) {
        this.glbranch = glbranch;
    }

    public String getGlsl() {
        return glsl;
    }

    public void setGlsl(String glsl) {
        this.glsl = glsl;
    }

    public String getTxcurr() {
        return txcurr;
    }

    public void setTxcurr(String txcurr) {
        this.txcurr = txcurr;
    }

    public BigDecimal getDebit() {
        return debit;
    }

    public void setDebit(BigDecimal debit) {
        this.debit = debit;
    }

    public BigDecimal getCredit() {
        return credit;
    }

    public void setCredit(BigDecimal credit) {
        this.credit = credit;
    }

}
