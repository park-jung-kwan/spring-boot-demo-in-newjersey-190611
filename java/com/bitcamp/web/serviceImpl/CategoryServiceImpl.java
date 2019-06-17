package com.bitcamp.web.serviceImpl;

import java.util.List;

import com.bitcamp.web.domain.CategoryDTO;
import com.bitcamp.web.service.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * CategoryServiceImpl
 */
@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired CategoryDTO category;
    @Override
    public void addCategory(CategoryDTO category) {
        
    }

    @Override
    public List<CategoryDTO> findCategories() {
        return null;
    }

    @Override
    public List<CategoryDTO> findCategoriesByOptioin(CategoryDTO category) {
        return null;
    }

    @Override
    public CategoryDTO findCategoryBycategoryId(String categoryId) {
        return null;
    }

    @Override
    public void updateCategory(CategoryDTO category) {

    }

    @Override
    public void deleteCategory(CategoryDTO category) {

    }

}