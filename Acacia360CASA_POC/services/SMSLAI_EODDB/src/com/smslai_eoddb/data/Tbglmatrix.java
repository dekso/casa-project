
package com.smslai_eoddb.data;



/**
 *  SMSLAI_EODDB.Tbglmatrix
 *  10/12/2018 12:49:06
 * 
 */
public class Tbglmatrix {

    private Integer id;
    private String prodcode;
    private Integer glline1;
    private Integer glline2;
    private String glparent;
    private String glchild;
    private String glbranchSw;
    private String glcategory;
    private String updatedBy;
    private String dateLastUpdated;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProdcode() {
        return prodcode;
    }

    public void setProdcode(String prodcode) {
        this.prodcode = prodcode;
    }

    public Integer getGlline1() {
        return glline1;
    }

    public void setGlline1(Integer glline1) {
        this.glline1 = glline1;
    }

    public Integer getGlline2() {
        return glline2;
    }

    public void setGlline2(Integer glline2) {
        this.glline2 = glline2;
    }

    public String getGlparent() {
        return glparent;
    }

    public void setGlparent(String glparent) {
        this.glparent = glparent;
    }

    public String getGlchild() {
        return glchild;
    }

    public void setGlchild(String glchild) {
        this.glchild = glchild;
    }

    public String getGlbranchSw() {
        return glbranchSw;
    }

    public void setGlbranchSw(String glbranchSw) {
        this.glbranchSw = glbranchSw;
    }

    public String getGlcategory() {
        return glcategory;
    }

    public void setGlcategory(String glcategory) {
        this.glcategory = glcategory;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public String getDateLastUpdated() {
        return dateLastUpdated;
    }

    public void setDateLastUpdated(String dateLastUpdated) {
        this.dateLastUpdated = dateLastUpdated;
    }

}
