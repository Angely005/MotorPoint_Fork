package com.motorpoint.backend.config;


import com.motorpoint.backend.entity.Rol;
import com.motorpoint.backend.entity.RoleName;
import com.motorpoint.backend.repository.RolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final RolRepository rolRepository;

    @Override
    public void run(String... args) {
        // Crear ROLE_USER si no existe
        if (rolRepository.findByNombre(RoleName.ROLE_USER).isEmpty()) {
            Rol userRole = new Rol();
            userRole.setNombre(RoleName.ROLE_USER);
            rolRepository.save(userRole);
        }

        // Crear ROLE_ADMIN si no existe
        if (rolRepository.findByNombre(RoleName.ROLE_ADMIN).isEmpty()) {
            Rol adminRole = new Rol();
            adminRole.setNombre(RoleName.ROLE_ADMIN);
            rolRepository.save(adminRole);
        }
    }
}