package com.example.HRSystem.Controllers;

import com.example.HRSystem.Repo.DepartmentRepository;
import com.example.HRSystem.Repo.EmployeeRepository;
import com.example.HRSystem.Repo.JobRepository;
import com.example.HRSystem.models.Deparments;
import com.example.HRSystem.models.Jobs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping(path = "/job")
public class JobController {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private DepartmentRepository departmentRepository;
    @GetMapping(path = "/getAll")
    public @ResponseBody
    Iterable <Jobs> getAll(){
        return jobRepository.findAll();
    }

    @PostMapping(path = "/addOne")
    public @ResponseBody String createjob(
            @RequestParam String title,
            @RequestParam String salary
    ){
        if(salary==null ||checkInt(salary)){
            return "invalid salary";
        }
        Jobs job = new Jobs();
        job.setTitle(title);
        job.setSalary(Integer.parseInt(salary));

        jobRepository.save(job);
        return "Created";
    }

    boolean checkInt(String str){
        try {
            Integer.parseInt(str);
            return false;
        } catch (NumberFormatException e) {
            return true;
        }
    }
}
