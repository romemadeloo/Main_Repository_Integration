// Source code is decompiled from a .class file using FernFlower decompiler.
package com.teamcid.teamcapplication.controller;

import com.teamcid.teamcapplication.services.chapterService;
import com.teamcid.teamcapplication.model.chapter;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/api/chapters"})
@CrossOrigin({"http://localhost:5173"})
public class chapterController {
   @Autowired
   private chapterService chapterService;

   public chapterController() {
   }

   @PostMapping
   chapter newChapter(@RequestBody chapter newChapter) {
      return this.chapterService.saveChapter(newChapter);
   }

   @GetMapping
   List<chapter> getAllChapter() {
      return this.chapterService.getAllChapter();
   }

   @GetMapping({"/{chapter_id}"})
   chapter getChapterById(@PathVariable Long chapter_id) {
      return this.chapterService.getChapterById(chapter_id);
   }

   @PutMapping({"/{chapter_id}"})
   chapter updateChapter(@RequestBody chapter newChapter, @PathVariable Long chapter_id) {
      return this.chapterService.updateChapter(newChapter, chapter_id);
   }

   @DeleteMapping({"/{chapter_id}"})
   String deleteChapter(@PathVariable Long chapter_id) {
      return this.chapterService.deleteChapter(chapter_id);
   }
}
