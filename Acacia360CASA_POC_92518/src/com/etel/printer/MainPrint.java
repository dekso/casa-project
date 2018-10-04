package com.etel.printer;

import java.awt.Color;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.print.PageFormat;
import java.awt.print.Printable;
import java.awt.print.PrinterException;

public class MainPrint implements Printable {

	private String dataValue;
	public int print(Graphics g, PageFormat pf, int pageIndex) throws PrinterException {
		if (pageIndex > 0)
			return NO_SUCH_PAGE;
		Graphics2D g2d = (Graphics2D) g;
		pf.setOrientation(PageFormat.PORTRAIT);
		g2d.translate(pf.getImageableX(), pf.getImageableY());
		Font font = new Font(Font.MONOSPACED, Font.PLAIN, 10);
		g2d.setFont(font);
		g2d.setPaint(Color.black);
		FontMetrics metrics = g2d.getFontMetrics(font);
		int lineHeight = metrics.getHeight();
		int x = 0, y = 20;
		String text = "DEPOSIT SAVINGS ACCOUNT\nAccount No: 08754645151";
		for (String line : text.split("\n")) {
			g2d.drawString(line, x, y += g.getFontMetrics().getHeight());
		}
		return PAGE_EXISTS;
	}

}