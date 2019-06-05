/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.services;

import com.alejocastrillon.demo.dto.VelocidadPuntoDTO;
import com.alejocastrillon.demo.entities.VelocidadPunto;
import com.alejocastrillon.demo.repositories.VelocidadPuntoRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author alejandro
 */
@Service
public class VelocidadPuntoServiceImpl implements VelocidadPuntoService{
    
    @Autowired
    private VelocidadPuntoRepository repository;
    
    private final ModelMapper mapper = new ModelMapper();

    @Override
    public VelocidadPuntoDTO saveConfiguracion(VelocidadPuntoDTO velocidad) {
        VelocidadPuntoDTO vel = null;
        if (isValidVelocidad(velocidad)) {
            vel = mapper.map(repository.save(mapper.map(velocidad, VelocidadPunto.class)), VelocidadPuntoDTO.class);
        }
        return vel;
    }
    
    private boolean isValidVelocidad(VelocidadPuntoDTO velocidad) {
        return velocidad != null && velocidad.getLatitud() != null && velocidad.getLongitud() != null 
                && velocidad.getVelocidadPrimaria() != null && velocidad.getVelocidadSecundaria() != null 
                && velocidad.getVelocidadTerciaria() != null && velocidad.getVelocidadCuarta() != null;
    }

    @Override
    public List<VelocidadPuntoDTO> getVelocidades() {
        List<VelocidadPunto> velocidades = repository.findAll();
        List<VelocidadPuntoDTO> vels = null;
        if (velocidades != null && !velocidades.isEmpty()) {
            vels = new ArrayList<>();
            for (VelocidadPunto velocidade : velocidades) {
                vels.add(mapper.map(velocidade, VelocidadPuntoDTO.class));
            }
        }
        return vels;
    }

    @Override
    public VelocidadPuntoDTO getVelocidad(Integer idvelocidad) {
        VelocidadPuntoDTO vel = null;
        if (idvelocidad != null) {
            Optional<VelocidadPunto> opVelocidad = repository.findById(idvelocidad);
            if (opVelocidad.isPresent()) {
                vel = mapper.map(opVelocidad.get(), VelocidadPuntoDTO.class);
            }
        }
        return vel;
    }

    @Override
    public VelocidadPuntoDTO getVelocidadOnPoint(Double latitud, Double longitud) {
        VelocidadPuntoDTO vel = null;
        if (latitud != null && longitud != null) {
            Optional<VelocidadPunto> opVelocidad = repository.findByLatitudAndLongitud(latitud, longitud);
            if (opVelocidad.isPresent()) {
                vel = mapper.map(opVelocidad.get(), VelocidadPuntoDTO.class);
            }
        }
        return vel;
    }
    
}
