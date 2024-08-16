package com.example.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.backend.model.User;
import com.example.backend.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    UserService service;
    
    @PostMapping("/adduser")
        public User postMethodName(@RequestBody User o) {
            return service.adduser(o);
        }

    @GetMapping("/users")
    public Optional<User> getbymail(@RequestParam String email)
    {
        return service.getbyid(email);
    }
}