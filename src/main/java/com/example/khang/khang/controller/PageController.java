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

    @GetMapping("/home")
    public String homePage() {
        return "Page/Product/home";
    }

    @GetMapping("/list")
    public String listPage() {
        return "Page/Product/list";
    }

    @GetMapping("/product")
    public String productPage() {
        return "Page/Product/product";
    }

    @GetMapping("/category")
    public String categoryPage() {
        return "Page/Product/category";
    }
}