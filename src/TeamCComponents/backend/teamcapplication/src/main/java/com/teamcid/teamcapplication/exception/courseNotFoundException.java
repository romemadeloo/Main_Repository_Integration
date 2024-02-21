// Source code is decompiled from a .class file using FernFlower decompiler.
package com.teamcid.teamcapplication.exception;

public class courseNotFoundException extends RuntimeException {
   public courseNotFoundException(Long course_id) {
      super("Could not found the course with id  " + String.valueOf(course_id));
   }
}
