package com.bitcamp.web.serviceImpl;

import java.util.List;

import com.bitcamp.web.domain.ProductDTO;
import com.bitcamp.web.service.ProductService;

import org.springframework.stereotype.Service;

/**
 * ProductServicelmpl
 */
@Service
public class ProductServiceImpl implements ProductService {

    @Override
    public void addProduct(ProductDTO product) {

    }

    @Override
    public List<ProductDTO> findProducts() {
        return null;
    }

    @Override
    public List<ProductDTO> findProductsByOption(ProductDTO option) {
        return null;
    }

    @Override
    public ProductDTO findProductByProductId(String productId) {
        return null;
    }

    @Override
    public void updateProduct(ProductDTO product) {

    }

    @Override
    public void deleteProduct(ProductDTO product) {

    }

   
    
}