package com.example.khang.khang.repository.User;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.khang.khang.model.User.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
