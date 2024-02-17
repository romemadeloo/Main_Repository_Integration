package com.teamcid.teamcapplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.teamcid.teamcapplication.repository.chapterlistRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import com.teamcid.teamcapplication.model.chapterlist;

@RestController
@CrossOrigin("http://localhost:5173/")
public class chapterlistController {

        @Autowired
        private chapterlistRepository clRepository;

        @GetMapping("/chapterList")                                                                                                                                                             
        public List<chapterlist> getChapter(){
            return clRepository.findAll();
        }
}
