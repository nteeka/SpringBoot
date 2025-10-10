package com.example.khang.khang.repository.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.khang.khang.model.User.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);
}
