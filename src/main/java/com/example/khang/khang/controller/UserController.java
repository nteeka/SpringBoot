package com.example.khang.khang.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.khang.khang.repository.User.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;
import com.example.khang.khang.model.User.User;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping
    public List<User> getAll() {
        return userRepository.findAll();
    }

}
