package com.example.HRSystem.Repo;

import com.example.HRSystem.models.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Jobs,Integer> {
}
