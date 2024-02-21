// Source code is decompiled from a .class file using FernFlower decompiler.
package com.teamcid.teamcapplication.services;

import com.teamcid.teamcapplication.exception.courseNotFoundException;
import com.teamcid.teamcapplication.model.course;
import com.teamcid.teamcapplication.repository.courseRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class courseService {
   @Autowired
   private courseRepository courseRepository;

   public courseService() {
   }

   public List<course> getAllCourse() {
      return this.courseRepository.findAll();
   }

   public course getCourseById(Long course_id) {
      return (course)this.courseRepository.findById(course_id).orElseThrow(() -> {
         return new courseNotFoundException(course_id);
      });
   }

   public course saveCourse(course newCourse) {
      System.out.println(newCourse.getCourse_id());
      System.out.println(newCourse.getCourse_title());
      System.out.println(newCourse.getCourse_description());
      System.out.println(newCourse.getCourse_start_date());
      System.out.println(newCourse.getCourse_end_date());
      return (course)this.courseRepository.save(newCourse);
   }

   public String deleteCourse(@PathVariable Long course_id) {
      if (!this.courseRepository.existsById(course_id)) {
         throw new TopicNotFoundException(course_id);
      } else {
         this.courseRepository.deleteById(course_id);
         return "Course with id " + String.valueOf(course_id) + " has been successfully deleted";
      }
   }

   public course updateCourse(@RequestBody course newCourse, @PathVariable Long course_id) {
      return (course)this.courseRepository.findById(course_id).map((course) -> {
         course.setCourse_title(newCourse.getCourse_title());
         course.setCourse_description(newCourse.getCourse_description());
         course.setCourse_start_date(newCourse.getCourse_start_date());
         course.setCourse_end_date(newCourse.getCourse_end_date());
         return (course)this.courseRepository.save(course);
      }).orElseThrow(() -> {
         return new courseNotFoundException(course_id);
      });
   }
}
