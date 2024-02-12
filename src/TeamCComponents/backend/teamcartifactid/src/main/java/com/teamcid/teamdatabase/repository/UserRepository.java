package com.teamcid.teamdatabase.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamcid.teamcdatabase.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
