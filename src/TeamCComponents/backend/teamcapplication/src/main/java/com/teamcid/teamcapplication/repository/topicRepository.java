//january 17 2024
package com.teamcid.teamcapplication.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.teamcid.teamcapplication.model.topic;

public interface topicRepository extends JpaRepository<topic, Long> {

   List<topic> findAll();

   Optional<topic> findById(Long topic_id);

   // @Query("Select t FROM Topic t WHERE t.chapter.chapter_id = :chapter_id")
   // List<topic> findByChapter_id(@Param("chapter_id") Long chapter_id);

   
}
// january 13 2024