
package com.gldb.data;



/**
 *  GLDB.Tbsegment
 *  08/31/2018 11:52:37
 * 
 */
public class Tbsegment {

    private Integer id;
    private Integer segno;
    private String segcode;
    private String segname;
    private String maingl;
    private String parentseg;
    private Integer parentsegno;
    private String bstype;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getSegno() {
        return segno;
    }

    public void setSegno(Integer segno) {
        this.segno = segno;
    }

    public String getSegcode() {
        return segcode;
    }

    public void setSegcode(String segcode) {
        this.segcode = segcode;
    }

    public String getSegname() {
        return segname;
    }

    public void setSegname(String segname) {
        this.segname = segname;
    }

    public String getMaingl() {
        return maingl;
    }

    public void setMaingl(String maingl) {
        this.maingl = maingl;
    }

    public String getParentseg() {
        return parentseg;
    }

    public void setParentseg(String parentseg) {
        this.parentseg = parentseg;
    }

    public Integer getParentsegno() {
        return parentsegno;
    }

    public void setParentsegno(Integer parentsegno) {
        this.parentsegno = parentsegno;
    }

    public String getBstype() {
        return bstype;
    }

    public void setBstype(String bstype) {
        this.bstype = bstype;
    }

}
