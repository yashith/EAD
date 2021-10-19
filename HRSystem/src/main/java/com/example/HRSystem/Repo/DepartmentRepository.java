package com.example.HRSystem.Repo;

import com.example.HRSystem.models.Deparments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Deparments,Integer> {
}
