package com.teamcid.teamcartifactid.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamcid.teamcartifactid.model.User;

public interface UserRepository extends JpaRepository <User , Long>{
}

