package com.example.HRSystem.Controllers;

import com.example.HRSystem.Repo.DepartmentRepository;
import com.example.HRSystem.Repo.EmployeeRepository;
import com.example.HRSystem.Repo.JobRepository;
import com.example.HRSystem.models.Deparments;
import com.example.HRSystem.models.Employees;
import com.example.HRSystem.models.Jobs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping(path = "/emp")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private DepartmentRepository departmentRepository;
    @GetMapping(path = "/getAll")
    public @ResponseBody Iterable <Employees> getAll(){
        return employeeRepository.findAll();
    }

    @PostMapping(path = "/addOne")
    public @ResponseBody String createEmp(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String telno,
            @RequestParam String dId,
            @RequestParam String jId

    ){
        Deparments dep = departmentRepository.getById(Integer.parseInt(dId));
        Jobs job = jobRepository.getById(Integer.parseInt(jId));
        Employees emp =new Employees(name,email,telno,dep,job);
        employeeRepository.save(emp);
        return "Created";
    }
    @DeleteMapping(path = "/delOne")
    public @ResponseBody String delEmp(
            @RequestParam String id
    )
    {
        employeeRepository.deleteById(Integer.parseInt(id));
        return "deleted";
    }
    @PutMapping(path="/updateOne")
    public @ResponseBody String updateEmp(
            @RequestParam String id,
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String telno,
            @RequestParam String dId,
            @RequestParam String jId
    ){
        try {
            Employees emp = employeeRepository.getById(Integer.parseInt(id));
            emp.setName(name);
            emp.setEmail(email);
            emp.setTelno(telno);
            emp.setDepartment(departmentRepository.getById(Integer.parseInt(dId)));
            emp.setJob(jobRepository.getById(Integer.parseInt(jId)));
            employeeRepository.save(emp);
            return "updated";
        }
        catch (Error err){
            return "error";
        }
    }

}
