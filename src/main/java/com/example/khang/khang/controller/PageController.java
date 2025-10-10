package com.example.khang.khang.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
    @GetMapping("/register")
    public String registerPage() {
        return "Page/Register";
    }

    @GetMapping("/login")
    public String loginPage() {
        return "Page/login";
    }
}