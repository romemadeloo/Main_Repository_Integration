package com.teamcid.teamcapplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.teamcid.teamcapplication.repository.courseRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
    
import com.teamcid.teamcapplication.model.course;

@RestController
@CrossOrigin("http://localhost:5173/")
public class courseController {

        @Autowired
        private courseRepository courseRepository;

        @GetMapping("/course")                                                                                                                                                              
        public List<course> getChapter(){
            return courseRepository.findAll();
        }
}
