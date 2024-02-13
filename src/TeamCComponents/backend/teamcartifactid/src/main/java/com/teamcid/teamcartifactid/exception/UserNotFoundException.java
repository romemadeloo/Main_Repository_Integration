package com.teamcid.teamcartifactid.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not found user with ID" + id);

    }

}