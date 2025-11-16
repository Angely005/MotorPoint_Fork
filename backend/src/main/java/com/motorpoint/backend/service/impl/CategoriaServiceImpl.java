package com.motorpoint.backend.service.impl;

import com.motorpoint.backend.entity.Categoria;
import com.motorpoint.backend.repository.CategoriaRepository;
import com.motorpoint.backend.service.CategoriaService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoriaServiceImpl implements CategoriaService {

    private final CategoriaRepository categoriaRepository;

    public CategoriaServiceImpl(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    @Override
    public List<Categoria> listarCategorias() {
        return categoriaRepository.findAll();
    }
}