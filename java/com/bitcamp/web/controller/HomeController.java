package com.bitcamp.web.controller;

import com.bitcamp.web.common.util.Printer;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * HomeController
 */
@Controller
public class HomeController {
    @Autowired CustomerService customerService; 
    @Autowired Printer p;
    @RequestMapping("/")   
    public String index() {
        p.accept("람다 이후 루트 URL 경로로 들어옴 ");
        int count = customerService.countAll();
        p.accept("람다가 출력한 고객의 총인원 : "+count);
        return "index";
    }
  
}