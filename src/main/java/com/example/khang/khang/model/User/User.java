package com.example.khang.khang.model.User;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    private String fullName;

    private String role;

    private Boolean isActive = true;
}
