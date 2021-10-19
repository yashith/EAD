package com.example.HRSystem.models;

import javax.persistence.*;

@Entity
public class Deparments {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer dId;
    private String dname;
    @OneToOne
    private Employees manager;

    public Integer getdId() {
        return dId;
    }

    public String getDname() {
        return dname;
    }

    public Employees getManager() {
        return manager;
    }

    public void setDname(String dname) {
        this.dname = dname;
    }

    public void setManager(Employees manager) {
        this.manager = manager;
    }
}
