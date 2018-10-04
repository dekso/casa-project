package com.casa.controller;

import com.casa.form.csr.AccountMaintenanceForm;
import com.casa.form.util.*;
import com.casa.model.Tbcheckbook;
import com.casa.model.Tbdeposit;
import com.casa.model.Tblogs;
import com.casa.repository.CASAUtilRepository;
import com.casa.services.UtilService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * Created by saoDG on 5/16/2018.
 */
@RestController
//@RequestMapping("/util")
@RequestMapping("/casa/util")
public class CASAUtilController {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private UtilService utilService;
    @Autowired
    private CASAUtilRepository casaUtilRepository;
    @GetMapping("/acctinq/{acctno}")
    public AccountInquiryForm inquire(@PathVariable String acctno) {
        logger.info("Account Inquiry -> Account No.: " + acctno);
        AccountInquiryForm form = utilService.inquiryForm(acctno);
        return form;
    }

    @GetMapping("/checkacct/{acctno}")
    public AccountCheckForm checkAcct(@PathVariable String acctno) {
        logger.info("Check Account -> Account No.: " + acctno);
        AccountCheckForm form = utilService.checkAcct(acctno);
//        System.out.println(form.getUnit() + " ez");
        return form;
    }

    @GetMapping("/checkacct-fundtrans/{acctnoto}/{acctnofrom}")
    public AccountCheckForm checkAcctFundTrans(@PathVariable String acctnoto, @PathVariable String acctnofrom) {
        AccountCheckForm form = utilService.checkAcctFundTrans(acctnoto, acctnofrom);
        return form;
    }

    @PutMapping("/acctalert/off")
    public ResponseEntity acctAlertOff(@RequestBody String accountno) {
        HttpHeaders responseHeader = new HttpHeaders();
        accountno = accountno.replace("\"","");
        Integer result = utilService.acctAlertOff(accountno);
        if (result == null) {
            responseHeader.set("Off Alert Request : ", "Rejected");
            return new ResponseEntity(0, responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Off Alert Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }


    @PostMapping("/bulk/upload")
    public ResponseEntity uploadBulkFile(@RequestBody BulkForm form) {
        HttpHeaders responseHeader = new HttpHeaders();
        Integer result = utilService.uploadBulk(form);
        if (result == null) {
            responseHeader.set("Bulk Upload Request : ", "Rejected");
            return new ResponseEntity(0, responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Bulk Upload Request : ", "Accepted");
            return new ResponseEntity(0, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    // 9 = all, 0 = pending, 1 = processed
    @GetMapping("/bulk/get/{batchstatus}")
    public ResponseEntity getBulkList(@PathVariable Integer batchstatus) {
        HttpHeaders responseHeader = new HttpHeaders();
        BatchFileListHandler result = utilService.getBatchList(batchstatus);
        if (result==null) {
            responseHeader.set("Bulk List Request : ", "Rejected");
            return new ResponseEntity(0, responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Bulk List Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PostMapping("/bulk/read")
    public ResponseEntity readBatch(@RequestBody Integer id) {
        HttpHeaders responseHeader = new HttpHeaders();
        Integer result = utilService.readBulk(id);
        if (result == null) {
            responseHeader.set("Bulk Read Request : ", "Rejected");
            return new ResponseEntity(0, responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Bulk Read Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/test/{accountno}")
    public Tbdeposit getTest(@PathVariable String accountno) {
        return utilService.test(accountno);
    }

    @GetMapping("/sequence")
    public String generateSequence() {
        return casaUtilRepository.generateSequence();
    }

    @GetMapping("/eodlogs/{currentdate}")
    public List<Tblogs> findAllByCurrentdate(@PathVariable String currentdate) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-dd-yyyy");
        Date date = Date.from(LocalDate.parse(currentdate,formatter).atStartOfDay(ZoneId.systemDefault()).toInstant());
        return utilService.findAllByCurrentdate(date);
    }

}
