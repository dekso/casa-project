dojo.declare("SYS_EOD", wm.Page, {
    start: function() {
        this.svGetBusinessDate.update();
        this.svGetListofBranches.update();
    },
    "preferredDevice": "desktop",

	svFindAllLogsResult: function(inSender, inDeprecated) {
//        console.log(inSender.getData());
		if(inSender.getData()!=null){
		    this.btnRollDown.setDisabled(inSender.getData().eodForm.rolldown>0?true:false);
            this.btnPCHC.setDisabled(inSender.getData().eodForm.pchcClearing>0?true:false);
            this.btnBatch.setDisabled(inSender.getData().eodForm.batchProcessing>0?true:false);
            this.btnEOD.setDisabled(inSender.getData().eodForm.eod>0?true:false);
        }
	},
	btnClick: function(inSender) {
		if(inSender.name=="btnRollDown"){
            this.svRunEOD.input.setValue("module",0);
            this.dlgListOfBranches.show();            
		}else{
            if(inSender.name=="btnPCHC"){
                this.svRunEOD.input.setValue("module",1);
            }else if(inSender.name=="btnBatch"){
                this.svRunEOD.input.setValue("module",2);
            }else if(inSender.name=="btnEOD"){
                this.svRunEOD.input.setValue("module",3);
            }
            app.confirm("Are you sure you want to run " + inSender.caption + "?"
            , false, function(){wm.Page.getPage("SYS_EOD").svRunEOD.update();});
        }
	},
	btnDoneClick: function(inSender) {
        var branchcodes = "";
        if(!this.gridBranches.emptySelection){
		    this.gridBranches.selectedItem.getData().forEach((el, index) => 
            {
                branchcodes = branchcodes + "'" + el.brid + String(index+1==this.gridBranches.selectedItem.getCount()?"'":"',");
            });
        }
        this.svRunEOD.input.setValue("branchcodes",branchcodes);
        app.confirm("Are you sure you want to run Roll Down?"
            , false, function(){wm.Page.getPage("SYS_EOD").dlgListOfBranches.hide();wm.Page.getPage("SYS_EOD").svRunEOD.update();});
	},
	gridBranchesSelect: function(inSender) {
        var branchnames = "";
        if(!this.gridBranches.emptySelection){
    	    this.gridBranches.selectedItem.getData().forEach((el, index) => 
            {
                branchnames = branchnames + el.brname + String(index+1==this.gridBranches.selectedItem.getCount()?"":",");
            });
        }
        this.lblSelectedItems.setCaption("<b>Selected Items : </b><i>" + branchnames);
	},
	svRunEODResult: function(inSender, inDeprecated) {
		if(inSender.getData()!=null || inSender.getData!=0){
		    app.toastSuccess("Process Completed.");
        }else{
            app.toastError("Process Failed.");
        }
        this.svFindAllLogs.update();
	},
	_end: 0
});