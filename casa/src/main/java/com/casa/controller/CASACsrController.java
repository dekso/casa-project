package com.casa.controller;

import com.casa.form.csr.*;
import com.casa.model.Tbcheckbook;
import com.casa.model.Tbdeposit;
import com.casa.model.Tbfreezeaccount;
import com.casa.model.Tbholdamtcheck;
import com.casa.services.CustomerRelationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

/**
 * Created by saoDG on 5/27/2018.
 */
@RestController
//@RequestMapping("/csr")
@RequestMapping("/casa/csr")
public class CASACsrController {

    @Autowired
    private CustomerRelationService customerRelationService;

    @PostMapping("/create-account")
    public ResponseEntity createAccount(@RequestBody AccountCreationForm accountCreationForm) {
        System.out.println("Entered");
        HttpHeaders responseHeader = new HttpHeaders();
        AccountGenericForm form = customerRelationService.createAccount(accountCreationForm);
        if (form == null) {
            responseHeader.set("Account Creation Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Account Creation Request : ", "Accepted");
            return new ResponseEntity(form, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/matured-account/{accountno}")
    public ResponseEntity getMaturedAccountList(@PathVariable String accountno) {
        HttpHeaders responseHeader = new HttpHeaders();
        MaturedAccountHandler handler = customerRelationService.maturedAccountList(accountno);
        if (handler == null) {
            responseHeader.set("Matured Account List Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Matured Account List Request : ", "Accepted");
            return new ResponseEntity(handler, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PostMapping("/rollover-account")
    public ResponseEntity rolloverAccount(@RequestBody Tbdeposit tbdeposit) {
        HttpHeaders responseHeader = new HttpHeaders();
        AccountGenericForm form = customerRelationService.rolloverAccount(tbdeposit);
        if (form == null) {
            responseHeader.set("Rollover Account Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Rollover Account Request : ", "Accepted");
            return new ResponseEntity(form, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PostMapping("/sigcard/upload")
    public ResponseEntity uploadSigCard(@RequestBody SigcardUploadForm form) {
        HttpHeaders responseHeader = new HttpHeaders();
        String result = customerRelationService.uploadSigcard(form);
        if (result == null) {
            responseHeader.set("Upload Sigcard Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Upload Sigcard Request : ", "Accepted");
            return new ResponseEntity("Upload Successful", responseHeader, HttpStatus.OK);
        }
    }

    @GetMapping("/sigcard/view/{accountno}")
    public ResponseEntity viewSigcard(@PathVariable String accountno) {
        HttpHeaders responseHeader = new HttpHeaders();
        SigcardUploadForm result = customerRelationService.viewSigcard(accountno);
        if (result == null) {
            responseHeader.set("View Sigcard Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("View Sigcard Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.OK);
        }
    }

    @PostMapping("/placehold-amount")
    public ResponseEntity placeholdAmount(@RequestBody Tbholdamtcheck data) {
        HttpHeaders responseHeader = new HttpHeaders();
        AccountGenericForm result = customerRelationService.placeholdAmount(data);
        if (result == null) {
            responseHeader.set("Placehold Amount Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Placehold Amount Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/holdamount/{accountno}/{type}")
    public ResponseEntity getHoldAmountList(@PathVariable String accountno, @PathVariable Integer type) {
        HttpHeaders responseHeader = new HttpHeaders();
        PlaceHoldFormHandler handler = customerRelationService.holdAmountList(accountno, type);
        if (handler == null) {
            responseHeader.set("Hold Amount List Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Hold Amount List Request : ", "Accepted");
            return new ResponseEntity(handler, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PutMapping("/lift-holdamount")
    public ResponseEntity liftHoldAmount(@RequestBody HashMap<String, Object> data) {
        HttpHeaders responseHeader = new HttpHeaders();
        AccountGenericForm result = customerRelationService.listHoldAmount(data);
        if (result == null) {
            responseHeader.set("Lift Hold Amount Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Lift Hold Amount Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PostMapping("/place-spo")
    public ResponseEntity placeSPO(@RequestBody Tbholdamtcheck tbholdamtcheck) {
        HttpHeaders responseHeader = new HttpHeaders();
        AccountGenericForm result = customerRelationService.placeSPO(tbholdamtcheck);
        if (result == null) {
            responseHeader.set("Place SPO Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Place SPO Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/spo-list/{accountno}")
    public ResponseEntity getSPOList(@PathVariable String accountno) {
        HttpHeaders responseHeader = new HttpHeaders();
        StopPaymentOrderHandler handler = customerRelationService.spoList(accountno);
        if (handler == null) {
            responseHeader.set("SPO List Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("SPO List Request : ", "Accepted");
            return new ResponseEntity(handler, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PutMapping("/lift-spo")
    public ResponseEntity liftSPO(@RequestBody HashMap<String, Object> data) {
        HttpHeaders responseHeader = new HttpHeaders();
        AccountGenericForm result = customerRelationService.liftSPO(data);
        if (result == null) {
            responseHeader.set("Lift SPO Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Lift SPO Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/account-maintenance/detail/{accountno}")
    public ResponseEntity accountMaintenanceDetail(@PathVariable String accountno) {
        HttpHeaders responseHeader = new HttpHeaders();
        AccountMaintenanceForm result = customerRelationService.getAccountMaintenanceDetail(accountno);
        if (result == null) {
            responseHeader.set("Account Maintenance Detail Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Account Maintenance Detail Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PutMapping("/account-maintenance/update")
    public ResponseEntity accountMaintenanceUpdate(@RequestBody HashMap<String, Object> data) {
        HttpHeaders responseHeader = new HttpHeaders();
        AccountGenericForm result = customerRelationService.accountMaintenanceUpdate(data);
        if (result == null) {
            responseHeader.set("Account Maintenance Update Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Account Maintenance Update Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/account-close/view/{accountno}")
    public ResponseEntity closeAccountDetail(@PathVariable String accountno) {
        HttpHeaders responseHeader = new HttpHeaders();
        responseHeader.set("View Close Account Detail Request : ", "Accepted");
        AccountClosureForm result = customerRelationService.closeAccountDetail(accountno);
        return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
    }

    @PutMapping("/account-close/close")
    public ResponseEntity closeAccount(@RequestBody HashMap<String, Object> data) {
        HttpHeaders responseHeader = new HttpHeaders();
        responseHeader.set("Close Account Request : ", "Accepted");
        AccountGenericForm result = customerRelationService.closeAccount(String.valueOf(data.get("accountno")));
        return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
    }

    @PostMapping("/checkbook-issuance/release")
    public ResponseEntity checkbookIssuance(@RequestBody Tbcheckbook tbcheckbook) {
        HttpHeaders responseHeader = new HttpHeaders();
        responseHeader.set("Checkbook Issuance Request : ", "Accepted");
        Integer result = customerRelationService.checkbookIssuance(tbcheckbook);
        return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
    }

    @GetMapping("/tdc_print_detail/{accountno}")
    public ResponseEntity getTDC(@PathVariable String accountno) {
        HttpHeaders responseHeader = new HttpHeaders();
        String result = customerRelationService.tdcDetail(accountno);
        if (result == null) {
            responseHeader.set("Print TDC Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Print TDC Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/tdc_list/{accountno}")
    public ResponseEntity getTDCList(@PathVariable String accountno) {
        HttpHeaders responseHeader = new HttpHeaders();
        TimeDepositCertFormHandler result = customerRelationService.getTDCList(accountno);
        if (result == null) {
            responseHeader.set("TDC List Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("TDC List Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PostMapping("/freeze-account")
    public ResponseEntity freezeAccount(@RequestBody Tbfreezeaccount data) {
        HttpHeaders responseHeader = new HttpHeaders();
        Integer result = customerRelationService.freezeAccount(data);
        if (result == null) {
            responseHeader.set("Freeze Account Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Freeze Account Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/freeze-info/{accountno}")
    public ResponseEntity getFreezeInfo(@PathVariable String accountno) {
        HttpHeaders responseHeader = new HttpHeaders();
        Tbfreezeaccount result = customerRelationService.liftFreezeInfo(accountno);
        if (result == null) {
            responseHeader.set("Freeze Account Info Request : ", "Rejected");
            return new ResponseEntity("Request Rejected", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Freeze Account Info Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }
    }

    @PutMapping("/freeze-lift/{accountno}")
    public ResponseEntity liftFreeze(@PathVariable String accountno) {
        HttpHeaders responseHeader = new HttpHeaders();
        Integer result = customerRelationService.liftFreeze(accountno);
        if (result == null) {
            responseHeader.set("Lift Freeze Account Request : ", "Rejected");
            return new ResponseEntity("Lift Freeze Account ", responseHeader, HttpStatus.NOT_ACCEPTABLE);
        } else {
            responseHeader.set("Lift Freeze Account Request : ", "Accepted");
            return new ResponseEntity(result, responseHeader, HttpStatus.ACCEPTED);
        }

    }
}
