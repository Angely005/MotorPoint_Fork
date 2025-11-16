package com.motorpoint.backend.service.impl;

import com.motorpoint.backend.entity.Producto;
import com.motorpoint.backend.repository.ProductoRepository;
import com.motorpoint.backend.service.ProductoService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductoServiceImpl implements ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoServiceImpl(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    @Override
    public List<Producto> listarProductos() {
        return productoRepository.findAll();
    }
}
