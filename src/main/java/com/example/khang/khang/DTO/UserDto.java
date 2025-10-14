package com.example.khang.khang.DTO;

import com.example.khang.khang.validator.PasswordMatches;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@PasswordMatches
public class UserDto {

        @NotBlank(message = "Username không được để trống")
        @Size(min = 4, max = 20, message = "Username phải từ 4–20 ký tự")
        private String username;

        @NotBlank(message = "Password không được để trống")
        @Pattern(regexp = "^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,}$", message = "Password phải có ít nhất 8 ký tự, gồm 1 chữ hoa, 1 số và 1 ký tự đặc biệt")
        private String password;

        @NotBlank(message = "Vui lòng nhập lại password")
        private String confirmPassword;

        @Email(message = "Email không hợp lệ")
        @NotBlank(message = "Email không được để trống")
        private String email;

        @Min(value = 18, message = "Tuổi tối thiểu là 18")
        @Max(value = 99, message = "Tuổi tối đa là 99")
        private Integer age;

        @Pattern(regexp = "^[0-9]{10}$", message = "Số điện thoại phải có đúng 10 chữ số")
        private String phone;

        @Past(message = "Ngày sinh phải trong quá khứ")
        private java.time.LocalDate birthday;

        @AssertTrue(message = "Bạn phải đồng ý điều khoản")
        private boolean agreeTerms;
}