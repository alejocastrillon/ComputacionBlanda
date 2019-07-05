/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.ChatBot.services;

import com.alejocastrillon.ChatBot.dto.AsignaturaDTO;
import com.alejocastrillon.ChatBot.entities.Asignatura;
import com.alejocastrillon.ChatBot.repositories.AsignaturaRepository;
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
public class AsignaturaServiceImpl implements AsignaturaService{

    @Autowired
    private AsignaturaRepository repository;
    
    private final ModelMapper mapper = new ModelMapper();
    
    @Override
    public List<AsignaturaDTO> getAsignaturas() {
        List<Asignatura> asignaturas = repository.findAll();
        List<AsignaturaDTO> asign = null;
        if (asignaturas != null && !asignaturas.isEmpty()) {
            asign = new ArrayList<>();
            for (Asignatura asignatura : asignaturas) {
                asign.add(mapper.map(asignatura, AsignaturaDTO.class));
            }
        }
        return asign;
    }

    @Override
    public AsignaturaDTO guardarAsignatura(AsignaturaDTO asignatura) {
        AsignaturaDTO asign = null;
        if (isValidateAsignatura(asignatura)) {
            asign = mapper.map(repository.save(mapper.map(asignatura, Asignatura.class)), AsignaturaDTO.class);
        }
        return asign;
    }
    
    private boolean isValidateAsignatura(AsignaturaDTO asignatura) {
        return asignatura != null && asignatura.getNombre() != null && asignatura.getCantidadCreditos() != null && asignatura.getSemestre() != null;
    }

    @Override
    public AsignaturaDTO getAsignatura(Integer idasignatura) {
        AsignaturaDTO asignatura = null;
        if (idasignatura != null) {
            Optional<Asignatura> opAsignatura = repository.findById(idasignatura);
            if (opAsignatura.isPresent()) {
                asignatura = mapper.map(opAsignatura.get(), AsignaturaDTO.class);
            }
        }
        return asignatura;
    }
    
}
