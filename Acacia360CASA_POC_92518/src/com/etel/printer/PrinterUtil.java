package com.etel.printer;

import java.awt.print.PrinterJob;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import javax.print.PrintService;
import javax.print.attribute.HashPrintRequestAttributeSet;
import javax.print.attribute.standard.MediaPrintableArea;

import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.print.PageFormat;
import java.awt.print.Printable;
import java.awt.print.PrinterException;

public class PrinterUtil implements Printable {

	private static Integer printtype;
	// private static Integer startLine = 1, endLine = 30;
	private static List<String> dataToprin = new ArrayList<String>();
	private static List<String[]> passbook = new ArrayList<String[]>();

	public static Integer printerUtil(List<String> data, Integer printype) {
		// Save printer name in database to be parameterized
		Integer result = 0;
		printtype = printype;
		dataToprin = data;
		try {
			if (dataToprin.isEmpty()) {
				System.out.println("Data cannot be null, exiting of printing module");
			} else {
				PrintService servHand = null;
				String printerName = "Olivetti PR2";
				PrinterJob printerjob = PrinterJob.getPrinterJob();
				printerjob.setJobName("myJobName");
				printerjob.setPrintable(new PrinterUtil());
				for (PrintService printService : PrinterJob.lookupPrintServices()) {
					System.out.println("Checking printer service available : " + printService);
					if (printerName.equals(printService.getName())) {
						servHand = printService;
						break;
					}
				}
				if (servHand == null) {
					System.out.println("Designated printer not found!, exiting of printing module");
				} else {
					System.out.println("Designated printer found!..Starting to print..");
					printerjob.setPrintService(servHand);
					printerjob.print(setAttrib(printtype));
					result = 1;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public static HashPrintRequestAttributeSet setAttrib(int attribtype) {
		HashPrintRequestAttributeSet attrib = new HashPrintRequestAttributeSet();
		/**
		 * 1 = docval, 2 = passbok issuance, 3 = passbook print
		 **/
		System.out.println(attribtype  + " asdsasd");
		if (attribtype == 1) {
			attrib.add(new MediaPrintableArea(0f, 2.3f, 4f, 2f, MediaPrintableArea.INCH));
		} else if (attribtype == 2) {
			attrib.add(new MediaPrintableArea(1.3f, 1.3f, 4f, 2f, MediaPrintableArea.INCH));
		} else if (attribtype == 3) {
			attrib.add(new MediaPrintableArea(0.1f, 0.72f, 5.2f, 6.8f, MediaPrintableArea.INCH));// Final for passbook
																									// printing
			// attrib.add(new MediaPrintableArea(3f, 18.4f, 132.08f, 172.72f,
			// MediaPrintableArea.MM));
		} else if (attribtype == 4) {
			attrib.add(new MediaPrintableArea(0f, 0f, 7.4f, 6.3f, MediaPrintableArea.INCH));
		}
		return attrib;
	}

	public int print(Graphics g, PageFormat pf, int pageIndex) throws PrinterException {
		// TODO Auto-generated method stub
		if (pageIndex > 0)
			return NO_SUCH_PAGE;
		Graphics2D g2d = (Graphics2D) g;
		pf.setOrientation(PageFormat.PORTRAIT);
		g2d.translate(pf.getImageableX(), pf.getImageableY());
		Font font = new Font(Font.MONOSPACED, Font.PLAIN, 9);
		g2d.setFont(font);
		if (printtype == 1) {
			return printDocVal(g2d, pf, pageIndex);
		} else if (printtype == 2 || printtype == 3) {
			font = new Font(Font.SERIF, Font.PLAIN, 9);
			g2d.setFont(font);
			return printPbookIssuance(g2d, pf, pageIndex);
		} else if (printtype == 4) {
			return printCTD(g2d, pf, pageIndex);
		} else {
			return NO_SUCH_PAGE;
		}

	}

	public int printDocVal(Graphics2D g2d, PageFormat pf, int pageIndex) throws PrinterException {
		/**
		 * DOCUMENT VALIDATION ROUTINE
		 ***/
		int x = 0, y = 20;
		for (String line : dataToprin) {
			System.out.println("Line: " + line);
			if (line.length() > 40) {
				int iter = 40;
				int previter = 0;
				for (int i = 0; i < (int) Math.ceil(line.length() / 40); i++) {
					previter = iter;
					if (i == 0) {
						g2d.drawString(line.substring(0, 40), x, y += g2d.getFontMetrics().getHeight());
					}
					if (line.substring(40, line.length()).length() > 40) {
						previter = iter;
						iter = iter + 40;
						g2d.drawString(line.substring(previter, iter > line.length() ? line.length() : iter), x,
								y += g2d.getFontMetrics().getHeight());
					} else {
						g2d.drawString(line.substring(iter, line.length()), x, y += g2d.getFontMetrics().getHeight());
					}
				}
			} else {
				g2d.drawString(line, x, y += g2d.getFontMetrics().getHeight());
			}
		}
		return PAGE_EXISTS;
	}

	public int printCTD(Graphics2D g2d, PageFormat pf, int pageIndex) throws PrinterException {
		/**
		 * CTD ROUTINE
		 ***/
		int x = 0, y = 0;
		for (String line : dataToprin) {
			System.out.println("Line: " + line);
//			if (line.length() > 40) {
//				int iter = 40;
//				int previter = 0;
//				for (int i = 0; i < (int) Math.ceil(line.length() / 40); i++) {
//					previter = iter;
//					if (i == 0) {
						g2d.drawString(line, x, y += g2d.getFontMetrics().getHeight());
//					}
//					if (line.substring(40, line.length()).length() > 40) {
//						previter = iter;
//						iter = iter + 40;
//						g2d.drawString(line.substring(previter, iter > line.length() ? line.length() : iter), x,
//								y += g2d.getFontMetrics().getHeight());
//					} else {
//						g2d.drawString(line.substring(iter, line.length()), x, y += g2d.getFontMetrics().getHeight());
//					}
//				}
//			} else {
//				g2d.drawString(line, x, y += g2d.getFontMetrics().getHeight());
//			}
		}
		return PAGE_EXISTS;
	}
	public int printPbookIssuance(Graphics2D g2d, PageFormat pf, int pageIndex) throws PrinterException {
		int x = 0, y = 0;
		// for (String line : dataToprin ) {
		// g2d.drawString(line, x, y += g2d.getFontMetrics().getHeight());
		// }
		int iter = 40;
		int previter = 0;
		List<String> toPrin = new ArrayList<String>();
		toPrin.add(dataToprin.get(0));
		toPrin.add("");
		toPrin.add("");
		float tempfloat = dataToprin.get(3).length();
		float floatval = tempfloat / 40;
		String line = dataToprin.get(3);
		int last = dataToprin.size() - 1;
		String lastline = dataToprin.get(last);
		int cntr = (int) Math.ceil(floatval);
		for (int i = 0; i < cntr; i++) {
			previter = iter;
			if ((line.length() > 40 || line.length() < 40) && i == 0) {
				toPrin.add(line.substring(0, line.length() > 40 ? 40 : line.length()));
			} else {
				if (line.substring(previter, line.length()).length() > 40) {
					previter = iter;
					iter = iter + 40;
					toPrin.add(line.substring(previter, iter > line.length() ? line.length() : iter));
				} else {
					toPrin.add(line.substring(previter, line.length()));
				}
			}
		}
		if (cntr < 5) {
			for (int i = cntr; i < 5; i++) {
				toPrin.add(" ");
			}
		}
		toPrin.add(" ");
		toPrin.add(lastline);
		for (String data : toPrin) {
			System.out.println(data);
			g2d.drawString(data, x, y += g2d.getFontMetrics().getHeight());
		}
		return PAGE_EXISTS;
	}

	public static String formatData(String data, Integer formattype) {
		String result = "";
		String str = "";
		// Integer inputLength = data.length();
		Integer nos = 0;
		// Date format
		if (formattype == 0) {
			nos = 10;

		} // Withdrawal & Deposit Passbook
		else if (formattype == 1) {
			nos = 25;
			DecimalFormat formatter = new DecimalFormat("###,###.00");
			Double i = Double.parseDouble(data);
			result = String.format("%" + nos + "s", formatter.format(i));
		}
		else if (formattype == 2) {
			DecimalFormat formatter = new DecimalFormat("###,###.00");
			Double i = Double.parseDouble(data);
			result = formatter.format(i);
		}
		return result;
	}

}
