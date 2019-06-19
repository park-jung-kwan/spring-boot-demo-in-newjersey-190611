package com.bitcamp.web.controller;

import java.util.HashMap;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * CustomerController
 */
@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired CustomerService customerService;
    @Autowired CustomerDTO customer;

    @PostMapping("")
    public HashMap<String,Object> join(@RequestBody CustomerDTO param){
        HashMap<String,Object> map = new HashMap<>();
       
        return map; 
    }

    @GetMapping("/count")   
    public String count() {
        System.out.println("CustomerController count() 경로로 들어옴");
        int count = customerService.countAll();
        System.out.println("고객의 총인원 : "+count);
        return count+"";
    }

    @GetMapping("/{customerId}/{password}")
    public CustomerDTO login(@PathVariable("customerId")String id,
                        @PathVariable("password")String pass){
        customer.setCustomerId(id);
        customer.setPassword(pass);
        return customerService.login(customer);
    }

   
    @GetMapping("/{customerId}")
    public CustomerDTO getCustomer() {

        return customer;
    }

    @PutMapping("/{customerId}")
    public HashMap<String,Object> updateCustomer() {
        HashMap<String,Object> map = new HashMap<>();
        
        return map;
    }

    @DeleteMapping("/{customerId}")
    public HashMap<String,Object> deleteCustomer() {
        HashMap<String, Object> map = new HashMap<>();

        return map;
    }
}
