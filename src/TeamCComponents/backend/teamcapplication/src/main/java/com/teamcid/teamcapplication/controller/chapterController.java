package com.teamcid.teamcapplication.controller;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.teamcid.teamcapplication.model.chapter;
import com.teamcid.teamcapplication.repository.chapterRepository;

@RestController
@CrossOrigin("http://localhost:5173/")
public class chapterController {

    @Autowired
    private chapterRepository ChapterRepository;

    @GetMapping("/chapter")
    public List<chapter> getChapter() {
        Iterable<chapter> chaptersIterable = ChapterRepository.findAll();
        return StreamSupport.stream(chaptersIterable.spliterator(), false)
                .collect(Collectors.toList());
    }

    @GetMapping("/chapter/{id}")    
    public chapter getChapterById(@PathVariable Integer id) {
        return ChapterRepository.findById(id).orElse(null);
    }
}
