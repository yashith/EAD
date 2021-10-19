package com.example.HRSystem.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Jobs {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer jId;
    private String title;
    private Integer salary;

    public Integer getjId() {
        return jId;
    }

    public Integer getSalary() {
        return salary;
    }

    public String getTitle() {
        return title;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    public void setTitle(String title) {
        this.title = title;
    }

}
