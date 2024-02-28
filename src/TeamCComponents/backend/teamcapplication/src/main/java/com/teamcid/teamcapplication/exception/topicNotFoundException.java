  /*january 16 2024 */
  package com.teamcid.teamcapplication.exception;

  public class topicNotFoundException extends RuntimeException {
      public topicNotFoundException(Long topic_id){
          super("Could not found the topic with id  " + topic_id);
      }
  
  }
    /*january 16 2024 */
  