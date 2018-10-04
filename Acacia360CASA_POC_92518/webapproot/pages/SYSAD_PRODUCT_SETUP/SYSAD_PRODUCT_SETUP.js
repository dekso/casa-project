dojo.declare("SYSAD_PRODUCT_SETUP", wm.Page, {
	start: function() {
        this.svProductList.update();
        this.svProdGroup.update();
        this.svCurrency.update();
        this.svBalCompBas.update();
        this.svBalType.update();
        this.svFreqCycle.update();
        this.svPeriod.update();
        this.svPostTx.update();
        this.svIntType.update();
        this.codeIntPlan.update();
	},
	"preferredDevice": "desktop",
	svSaveResult: function(inSender, inDeprecated) {
		if(inSender.getData().dataValue=="0"){
            app.alert("Error in Routine!");    
		}else if(inSender.getData().dataValue=="1"){
            app.alert("Already Existing!");    
    	}else if(inSender.getData().dataValue=="2" && this.svSave.input.getValue("input.id")==null){            
            app.alert("Creating New Product Successful!");
            this.panelData.clearData();
            this.dlgProduct.hide();
            this.svProductList.update();
    	}else if(inSender.getData().dataValue=="2" && this.svSave.input.getValue("input.id")!=null){            
            app.alert("Updating Product Successful!");
            this.panelData.clearData();
            this.svSave.input.clearData();
            this.dlgProduct.hide();
            this.svProductList.update();
        }
	},
	gridProductGridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
		if(fieldName=="btnedit"){
            this.svProdDetail.input.setValue("id", rowData.id);
            this.svProdDetail.update();
            this.dlgProduct.setValue("title", "Edit Product Detail");
            this.svSave.input.setValue("input.id", rowData.id);            
		}
	},
	svProdDetailResult: function(inSender, inDeprecated) {
        this.dlgProduct.show();
        //console.log(inSender.getData());
	},
	btnCloseClick: function(inSender) {
		this.svSave.input.setValue("id", null);
        this.dlgProduct.hide();
	},
	btnAddClick: function(inSender) {
		this.dlgProduct.show();
	},
	dlgProductClose: function(inSender, inWhy) {
		this.gridProduct.deselectAll();
        this.panelData.clearData();
	},
	gridProduct1GridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
	  this.gridProductGridButtonClick(inSender, fieldName, rowData, rowIndex);
	},
  btnAdd1Click: function(inSender) {
	  this.btnAddClick(inSender);
	},
  gridProduct2GridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
	  this.gridProduct1GridButtonClick(inSender, fieldName, rowData, rowIndex);
	},
  btnAdd2Click: function(inSender) {
	  this.btnAdd1Click(inSender);
	},
  gridProduct3GridButtonClick: function(inSender, fieldName, rowData, rowIndex) {
	  this.gridProduct2GridButtonClick(inSender, fieldName, rowData, rowIndex);
	},
  btnAdd3Click: function(inSender) {
	  this.btnAdd2Click(inSender);
	},
  _end: 0
});