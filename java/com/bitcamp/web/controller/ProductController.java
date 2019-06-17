package com.bitcamp.web.controller;

import com.bitcamp.web.domain.ProductDTO;
import com.bitcamp.web.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * ProductController
 */
@RestController
public class ProductController {

    @Autowired ProductService productService;
    @Autowired ProductDTO product;

    

    
}