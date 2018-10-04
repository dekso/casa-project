package com.casa.controller;

import com.casa.form.fin.FinancialGenericForm;
import com.casa.form.fin.TransactForm;
import com.casa.model.Tbmanagerscheck;
import com.casa.model.Tbmctxjrnl;
import com.casa.services.FinancialTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

/**
 * Created by saoDG on 5/8/2018.
 */
@RestController
//@RequestMapping("/fin")
@RequestMapping("/casa/fin")
public class CASAFinController {


    @Autowired
    private FinancialTransactionService finTxService;

    @PutMapping("/override")
    public ResponseEntity overrideTransaction(@RequestBody HashMap<String, Object> data) {
        HttpHeaders responseHeader = new HttpHeaders();
        Integer result = finTxService.overrideTransaction(data.get("txrefno").toString(), data.get("userid").toString());
        if (result == null || result == 0) {
            responseHeader.set("Override Transaction : ", "Rejected");
            return new ResponseEntity("Error in Routine", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Override Transaction : ", "Accepted");
            return new ResponseEntity("Success", responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PutMapping("/override-cancel")
    public ResponseEntity cancelOverrideTransaction(@RequestBody HashMap<String, Object> data) {
        HttpHeaders responseHeader = new HttpHeaders();
        Integer result = finTxService.cancelOverrideTransaction(data.get("txref").toString());
        if (result == null || result == 0) {
            responseHeader.set("Cancel Transaction : ", "Error in Routine");
            return new ResponseEntity("Error in Routine", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Cancel Transaction : ", "Cancelled");
            return new ResponseEntity("Success", responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PostMapping("/transact")
    public ResponseEntity financialTransaction(@RequestBody TransactForm transactForm) {
        HttpHeaders responseHeader = new HttpHeaders();
        System.out.println("DATA : " +transactForm);
        FinancialGenericForm form = finTxService.financialTransaction(transactForm);
        System.out.println("FIN RES " + form.getResult());
        if (form == null) {
            responseHeader.set("Transaction Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            System.out.println("HERE >>>> ");
            responseHeader.set("Transaction Request : ", "Accepted");
            return new ResponseEntity(form, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PutMapping("/error-correct/{txref}")
    public ResponseEntity errorCorrect(@PathVariable String txref) {
        HttpHeaders responseHeader = new HttpHeaders();
        Integer result = finTxService.errorCorrect(txref);
        System.out.println("ERROR CORRECT >>> TRANSACTION REF : "+txref);
        if (result == null || result == 0) {
            responseHeader.set("Error Correct : ", "Error in Routine");
            return new ResponseEntity("Error in Routine", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Error Correct : ", "Success");
            return new ResponseEntity("Success", responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PutMapping("/remote-override/{txref}")
    public ResponseEntity remoteOverride(@PathVariable String txref) {
        HttpHeaders responseHeader = new HttpHeaders();
        Integer result = finTxService.remoteOverride(txref);
        System.out.println("REMOTE >>> TRANSACTION REF : "+txref);
        if (result == null || result == 0) {
            responseHeader.set("Remote Override Request : ", "Error in Routine");
            return new ResponseEntity("Error in Routine", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Remote Override Request : ", "Success");
            return new ResponseEntity("Success", responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PostMapping("/request-mc")
    public ResponseEntity requestMc(@RequestBody Tbmanagerscheck data) {
        HttpHeaders responseHeader = new HttpHeaders();
        Integer result = finTxService.requestManagersCheck(data);
        if (result == null ) {
            responseHeader.set("Managers Check Request : ", "Error in Routine");
            return new ResponseEntity("Error in Routine", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        }else {
            responseHeader.set("Managers Check Request : ", "Success");
            return new ResponseEntity("Success", responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PostMapping("/deposit-mc")
    public ResponseEntity depositMc(@RequestBody Tbmctxjrnl data) {
        HttpHeaders responseHeader = new HttpHeaders();
        Integer result = finTxService.depositMc(data);
        if (result == null ) {
            responseHeader.set("MC Deposit Request : ", "Error in Routine");
            return new ResponseEntity("Error in Routine", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        }else {
            responseHeader.set("MC Deposit Request  : ", "Success");
            return new ResponseEntity("Success", responseHeader, HttpStatus.ACCEPTED);
        }
    }

}
