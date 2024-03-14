package com.example.authservice.db.response;

import lombok.Getter;
import org.springframework.http.ResponseEntity;

@Getter
public class SignInResponseDto {
    private String token;
    private int expirationTime;

    private SignInResponseDto(String token) {
        super();
        this.token = token;
        expirationTime = 3600;
    }

    public static ResponseEntity<SignInResponseDto> success(String token) {
        SignInResponseDto responseBody = new SignInResponseDto(token);
        return ResponseEntity.ok(responseBody);
    }
}
