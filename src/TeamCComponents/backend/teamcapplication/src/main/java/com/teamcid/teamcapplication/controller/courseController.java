// Source code is decompiled from a .class file using FernFlower decompiler.
package com.teamcid.teamcapplication.controller;

import com.teamcid.teamcapplication.services.courseService;
import com.teamcid.teamcapplication.model.course;
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
@RequestMapping({"/api/courses"})
@CrossOrigin({"http://localhost:5173"})
public class courseController {
   @Autowired
   private courseService courseService;

   public courseController() {
   }

   @PostMapping
   course newCourse(@RequestBody course newCourse) {
      return this.courseService.saveCourse(newCourse);
   }

   @GetMapping
   List<course> getAllCourse() {
      return this.courseService.getAllCourse();
   }

   @GetMapping({"/{course_id}"})
   course getCourseById(@PathVariable Long course_id) {
      return this.courseService.getCourseById(course_id);
   }

   @PutMapping({"/{course_id}"})
   course updateCourse(@RequestBody course newCourse, @PathVariable Long course_id) {
      return this.courseService.updateCourse(newCourse, course_id);
   }

   @DeleteMapping({"/{course_id}"})
   String deleteCourse(@PathVariable Long course_id) {
      return this.courseService.deleteCourse(course_id);
   }
}
