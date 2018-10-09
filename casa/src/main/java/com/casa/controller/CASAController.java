package com.casa.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by saoDG on 5/16/2018.
 */
@RestController
public class CASAController {

    private final Logger logger = LoggerFactory.getLogger(getClass());

    @GetMapping("/")
    public String defaultUrl() {
        return "CASA-CBS WEBSERVICE <br/><br/>" +
                "Eteligent Software Solutions Inc.";
    }

    @GetMapping("/casa")
    public String defaultUrl1() {
        return "CASA-CBS WEBSERVICE <br/><br/>" +
                "Eteligent Software Solutions Inc.";
    }
}
