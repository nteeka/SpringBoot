package com.example.khang.khang.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AccountController {
    @GetMapping("/register")
    public String registerPage() {
        return "Account/Register";
    }

    @GetMapping("/login")
    public String loginPage() {
        return "Account/login";
    }
}