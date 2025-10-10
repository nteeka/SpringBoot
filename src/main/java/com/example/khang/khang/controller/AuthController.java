package com.example.khang.khang.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.khang.khang.DTO.LoginRequest;
import com.example.khang.khang.DTO.UserDto;
import com.example.khang.khang.service.Auth.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDto dto) {
        String message = authService.register(dto);
        if (!message.equals("Registered successfully")) {
            return ResponseEntity.badRequest().body(message);
        }
        return ResponseEntity.ok(message);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest dto) {
        try {
            String result = authService.login(dto);
            return ResponseEntity.ok(result);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
