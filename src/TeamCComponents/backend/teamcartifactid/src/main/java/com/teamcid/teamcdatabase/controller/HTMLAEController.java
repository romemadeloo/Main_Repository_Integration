package com.teamcid.teamcdatabase.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.teamcid.teamcdatabase.exception.UserNotFoundException;
import com.teamcid.teamcdatabase.model.User;
import com.teamcid.teamdatabase.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:5173/")
public class HTMLAEController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/users")
    User newUser (@NonNull @RequestBody User newUser){
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }
    @GetMapping("/users/{userID}")
    User getUserbyID(@NonNull @PathVariable Long id){
        return userRepository.findById(id)
        .orElseThrow(() -> new UserNotFoundException(id));
    }
    //edit data
    @PutMapping ("/users/{userID}")
    User updateUser(@RequestBody User newUser, @NonNull @PathVariable Long id){
        return userRepository.findById(id)
        .map(user->{
            user.setUsername(newUser.getUsername());
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            user.setScore(newUser.getScore());
            return userRepository.save(user);
        }).orElseThrow(()-> new UserNotFoundException(id));
    }
    
}



