// Source code is decompiled from a .class file using FernFlower decompiler.
package com.teamcid.teamcapplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import com.teamcid.teamcapplication.exception.chapterNotFoundException;
import com.teamcid.teamcapplication.model.chapter;
import com.teamcid.teamcapplication.repository.chapterRepository;

@Service
public class chapterService {
   @Autowired
   private chapterRepository chapterRepository;

   public chapterService() {
   }

   public List<chapter> getAllChapter() {
      return this.chapterRepository.findAll();
   }

   public chapter getChapterById(Long chapter_id) {
      return (chapter)this.chapterRepository.findById(chapter_id).orElseThrow(() -> {
         return new chapterNotFoundException(chapter_id);
      });
   }

   public chapter saveChapter(chapter newChapter) {
      System.out.println(newChapter.getChapter_title());
      System.out.println(newChapter.getChapter_date_created());
      return (chapter)this.chapterRepository.save(newChapter);
   }

   public chapter updateChapter(@RequestBody chapter newChapter, @PathVariable Long chapter_id) {
      return (chapter)this.chapterRepository.findById(chapter_id).map((chapter) -> {
         chapter.setChapter_title(newChapter.getChapter_title());
         chapter.setChapter_date_created(newChapter.getChapter_date_created());
         return (chapter)this.chapterRepository.save(chapter);
      }).orElseThrow(() -> {
         return new chapterNotFoundException(chapter_id);
      });
   }

   public String deleteChapter(@PathVariable Long chapter_id) {
      if (!this.chapterRepository.existsById(chapter_id)) {
         throw new chapterNotFoundException(chapter_id);
      } else {
         this.chapterRepository.deleteById(chapter_id);
         return "Chapter with id " + String.valueOf(chapter_id) + " has been successfully deleted";
      }
   }
}
