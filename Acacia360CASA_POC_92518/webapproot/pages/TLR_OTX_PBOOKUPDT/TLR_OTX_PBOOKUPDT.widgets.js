TLR_OTX_PBOOKUPDT.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"35,20,10,40","styles":{"color":"#ffffff"},"verticalAlign":"top","width":"100%"}, {}, {
			panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"fontWeight":"bolder","color":"#ffffff"},"verticalAlign":"middle","width":"100%"}, {}, {
				label1: ["wm.Label", {"caption":"Passbook Update","padding":"4","styles":{"fontSize":"12px","fontWeight":"bolder","color":"#535050"},"width":"207px"}, {}]
			}],
			panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","margin":"10,0,0,3","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				fAcctNo: ["wm.Text", {"border":"0","caption":"Account No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","width":"320px"}, {}],
				fpbookSn: ["wm.Text", {"border":"0","caption":"Passbook Serial No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","width":"320px"}, {}],
				fpbookBal: ["wm.Text", {"border":"0","caption":"Passbook Balance:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","width":"320px"}, {}],
				fpbookLineNo: ["wm.Text", {"border":"0","caption":"Passbook Line No:","captionSize":"135px","dataValue":undefined,"displayValue":"","height":"25px","width":"320px"}, {}],
				spacer1: ["wm.Spacer", {"height":"3px","width":"10px"}, {}],
				button1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Submit","desktopHeight":"28px","height":"28px","width":"80px"}, {}]
			}]
		}]
	}]
}