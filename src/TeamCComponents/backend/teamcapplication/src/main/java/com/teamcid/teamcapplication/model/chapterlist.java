package com.teamcid.teamcapplication.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="chapterlist")
public class chapterlist {

    @Id
    @GeneratedValue

    @Column(name = "idchapterlist")     
    private int chapterlistId;

    @Column(name = "name")
    private String chapterlistName;

    public int getChapterlistId() {
        return this.chapterlistId;
    }

    public void setChapterlistId(int chapterlistId) {
        this.chapterlistId = chapterlistId;
    }

    public String getChapterlistName() {
        return this.chapterlistName;
    }

    public void setChapterlistName(String chapterlistName) {
        this.chapterlistName = chapterlistName;
    }

}
