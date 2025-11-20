package com.motorpoint.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "roles")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class Rol {
    @Id
    private Integer id;

    @Column(nullable = false, unique = true)
    private String nombre; // Ej: ROLE_USER, ROLE_ADMIN
}