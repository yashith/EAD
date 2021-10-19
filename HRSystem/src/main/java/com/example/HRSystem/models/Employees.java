package com.example.HRSystem.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
public class Employees {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer eId;
    private String name;
    private String email;
    private String telno;
    @OneToOne(fetch = FetchType.LAZY)
    @JsonManagedReference
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Jobs job;
    @OneToOne
//            (fetch = FetchType.LAZY)
    @JsonManagedReference
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Deparments department;

    public Integer geteId() {
        return eId;
    }
    public String getName() {
        return name;
    }

    public String getTelno() {
        return telno;
    }
    public String getEmail() {
        return email;
    }

    public Jobs getJob() {
        return job;
    }

    public Deparments getDepartment() {
        return department;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setTelno(String telno) {
        this.telno = telno;
    }

    public void setJob(Jobs job) {
        this.job = job;
    }

    public void setDepartment(Deparments department) {
        this.department = department;
    }
    public Employees(){}
    public Employees(String name,String email,String telno,Deparments dep,Jobs job){
        this.name=name;
        this.email=email;
        this.telno=telno;
        this.department=dep;
        this.job=job;
    }
}
