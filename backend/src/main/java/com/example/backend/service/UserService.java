package com.example.backend.service;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.backend.model.User;

import com.example.backend.repository.UserRepo;

@Service
public class UserService
{
    
    @Autowired
    UserRepo repo;

    public User adduser(User o)
    {
        return repo.save(o);
    }
    public Optional<User> getbyid(String o)
    {
        return repo.findByemail(o);
    }
}
