// Source code is decompiled from a .class file using FernFlower decompiler.
package com.teamcid.teamcapplication.exception;

public class chapterNotFoundException extends RuntimeException {
   public chapterNotFoundException(Long chapter_id) {
      super("Could not found the chapter with id  " + String.valueOf(chapter_id));
   }
}
