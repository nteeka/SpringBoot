package com.example.khang.khang.validator;

import com.example.khang.khang.DTO.UserDto;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PasswordMatchesValidator implements ConstraintValidator<PasswordMatches, UserDto> {
    @Override
    public boolean isValid(UserDto dto, ConstraintValidatorContext context) {
        if (dto.getPassword() == null || dto.getConfirmPassword() == null)
            return false;
        return dto.getPassword().equals(dto.getConfirmPassword());
    }
}
