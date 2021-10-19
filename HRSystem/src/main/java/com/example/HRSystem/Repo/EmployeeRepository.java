package com.example.HRSystem.Repo;

import com.example.HRSystem.models.Employees;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import javax.persistence.Id;

public interface EmployeeRepository extends JpaRepository<Employees,Integer> {
}
