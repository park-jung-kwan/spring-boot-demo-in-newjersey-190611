package com.bitcamp.web.mapper;

import java.util.List;

import com.bitcamp.web.domain.EmployeeDTO;

import org.springframework.stereotype.Repository;

/**
 * EmployeeMapper
 */
@Repository
public interface EmployeeMapper {
    public void insertEmployee(EmployeeDTO employee);
    public List<EmployeeDTO> insertEmployees();
    public List<EmployeeDTO> insertEmployeesByOption(EmployeeDTO option);
    public EmployeeDTO findEmployeeByemployeeId(String employeeId);
    public void updateEmployee(EmployeeDTO employee);
    public void deleteEmployee(EmployeeDTO employee);
    
}