/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.services;

import com.alejocastrillon.demo.dto.AccidenteDTO;
import com.alejocastrillon.demo.entities.Accidente;
import com.alejocastrillon.demo.repositories.AccidenteRepository;
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
public class AccidenteServiceImpl implements AccidenteService {

    @Autowired
    private AccidenteRepository repository;
    
    private final ModelMapper mapper = new ModelMapper();
    
    @Override
    public AccidenteDTO saveAccidente(AccidenteDTO accidente) {
        AccidenteDTO accidentdto = null;
        if (isValidateAccidente(accidente)) {
            accidentdto = mapper.map(repository.save(mapper.map(accidente, Accidente.class)), AccidenteDTO.class);
        }
        return accidentdto;
    }
    
    private boolean isValidateAccidente(AccidenteDTO accidente) {
        return accidente != null && accidente.getLatitud() != null && accidente.getLongitud() != null 
                && accidente.getNivelLluvia() != null && accidente.getFechaHora() != null 
                && accidente.getEstadoCarretera() != null;
    }

    @Override
    public List<AccidenteDTO> getAccidentes() {
        List<Accidente> accidentes = repository.findAll();
        List<AccidenteDTO> accidents = null;
        if (accidentes != null && !accidentes.isEmpty()) {
            accidents = new ArrayList<>();
            for (Accidente accidente : accidentes) {
                accidents.add(mapper.map(accidente, AccidenteDTO.class));
            }
        }
        return accidents;
    }

    @Override
    public List<AccidenteDTO> getAccidentesinPoint(Double latitud, Double longitud) {
        List<AccidenteDTO> accident = null;
        if (latitud != null && longitud != null) {
            List<Accidente> accidentes = repository.findByLatitudAndLongitud(latitud, longitud);
            if (accidentes != null && !accidentes.isEmpty()) {
                accident = new ArrayList<>();
                for (Accidente accidente : accidentes) {
                    accident.add(mapper.map(accidente, AccidenteDTO.class));
                }
            }
        }
        return accident;
    }

    @Override
    public AccidenteDTO getAccidente(Integer idaccidente) {
        AccidenteDTO accident = null;
        if (idaccidente != null) {
            Optional<Accidente> opAccidente = repository.findById(idaccidente);
            if (opAccidente.isPresent()) {
                accident = mapper.map(opAccidente.get(), AccidenteDTO.class);
            }
        }
        return accident;
    }
    
}
