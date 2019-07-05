/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.ChatBot.services;

import com.alejocastrillon.ChatBot.dto.AsignaturaDTO;
import java.util.List;

/**
 *
 * @author alejandro
 */
public interface AsignaturaService {
    
    List<AsignaturaDTO> getAsignaturas();
    
    AsignaturaDTO guardarAsignatura(AsignaturaDTO asignatura);
    
    AsignaturaDTO getAsignatura(Integer idasignatura);
    
}
