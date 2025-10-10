package com.example.khang.khang.service.Auth;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.khang.khang.DTO.LoginRequest;
import com.example.khang.khang.DTO.UserDto;
import com.example.khang.khang.model.User.User;
import com.example.khang.khang.repository.User.UserRepository;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String register(UserDto dto) {
        // Kiểm tra trùng username
        if (userRepository.findByUsername(dto.username()).isPresent()) {
            return "Username already exists";
        }

        // Kiểm tra trùng email
        if (userRepository.findByEmail(dto.email()).isPresent()) {
            return "Email already registered";
        }

        // Kiểm tra confirm password
        if (!dto.password().equals(dto.confirmPassword())) {
            return "Passwords do not match";
        }

        // Tạo mới user
        User user = User.builder()
                .username(dto.username())
                .email(dto.email())
                .fullName(dto.fullName())
                .password(encoder.encode(dto.password()))
                .role("USER")
                .isActive(true)
                .build();

        userRepository.save(user);
        return "Registered successfully";
    }

    public String login(LoginRequest dto) {
        // Tìm user theo username
        User user = userRepository.findByUsername(dto.username())
                .orElseThrow(() -> new RuntimeException("Tên đăng nhập hoặc mật khẩu không đúng."));

        // Kiểm tra mật khẩu
        if (!encoder.matches(dto.password(), user.getPassword())) {
            throw new RuntimeException("Tên đăng nhập hoặc mật khẩu không đúng.");
        }

        // Nếu hợp lệ
        return "Đăng nhập thành công";
    }

}
