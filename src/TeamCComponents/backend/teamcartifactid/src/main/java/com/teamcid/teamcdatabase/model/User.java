package com.teamcid.teamcdatabase.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long UserID;
    private String name;
    private String username;
    private String email;
    private Short score;
    

    public Long getUserID() {
        return this.UserID;
    }

    public void setUserID(Long UserID) {
        this.UserID = UserID;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Short getScore() {
        return this.score;
    }

    public void setScore(Short score) {
        this.score = score;
    }

    
}
