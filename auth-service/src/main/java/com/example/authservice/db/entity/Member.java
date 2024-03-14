package com.example.authservice.db.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@ToString
@Getter @Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Member {
    @Id
    private Integer memberId;
    private String email;
    private String name;
    private String nickname;
    private String gender;
    private String age;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Integer updatedBy;
    private Provider type;
    private Role role;
}
