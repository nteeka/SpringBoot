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

    @GetMapping("/cart")
    public String cartPage() {
        return "Page/Product/cart";
    }

    @GetMapping("/listOrder")
    public String listOrderPage() {
        return "Page/Product/listOrder";
    }

    @GetMapping("/detailOrder")
    public String detailOrderPage() {
        return "Page/Product/detailOrder";
    }

    @GetMapping("/checkout")
    public String checkoutPage() {
        return "Page/Product/checkout";
    }

    @GetMapping("/dashboard")
    public String adminDashboard() {
        return "Page/Admin/dashboard";
    }

    @GetMapping("/orderAdmin")
    public String orderManager() {
        return "Page/Admin/orders";
    }

    @GetMapping("/storageManager")
    public String storageManager() {
        return "Page/Admin/storageManager";
    }

}
