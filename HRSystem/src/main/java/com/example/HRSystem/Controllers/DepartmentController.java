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
@RequestMapping(path = "/dep")
public class DepartmentController {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private DepartmentRepository departmentRepository;

    @GetMapping(path = "/getAll")
    public @ResponseBody
    Iterable <Deparments> getAll(){
        return departmentRepository.findAll();
    }


    @PostMapping(path = "/addOne")
    public @ResponseBody String createEmp(
            @RequestParam String name,
            @RequestParam(required = false) String mId
    ){
        if(mId!=null&&checkInt(mId)){
            return "invalid miD";
        }
        else if(mId==null){
            Deparments dep = new Deparments();
            dep.setDname(name);
            departmentRepository.save(dep);
            return "Created";
        }
        else {
            Deparments dep = new Deparments();
            dep.setDname(name);
            dep.setManager(employeeRepository.getById(Integer.parseInt(mId)));
            departmentRepository.save(dep);
            return "Created";
        }
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
