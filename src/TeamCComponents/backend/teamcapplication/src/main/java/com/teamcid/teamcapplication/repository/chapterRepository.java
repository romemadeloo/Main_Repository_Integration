package com.teamcid.teamcapplication.repository;

import org.springframework.data.repository.CrudRepository;
import com.teamcid.teamcapplication.model.chapter;

public interface chapterRepository extends CrudRepository<chapter, Integer> {
    chapter findById(int id); // or findById(Integer id);
}
