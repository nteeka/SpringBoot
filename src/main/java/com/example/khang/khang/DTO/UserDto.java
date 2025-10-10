package com.example.khang.khang.DTO;

public record UserDto(
        String username,
        String password,
        String confirmPassword,
        String email,
        String fullName) {
}