/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.services;

import com.alejocastrillon.demo.dto.AccidenteDTO;
import java.util.List;

/**
 *
 * @author alejandro
 */
public interface AccidenteService {
    
    AccidenteDTO saveAccidente(AccidenteDTO accidente);
    
    List<AccidenteDTO> getAccidentes();
    
    List<AccidenteDTO> getAccidentesinPoint(Double latitud, Double longitud);
    
    AccidenteDTO getAccidente(Integer idaccidente);
}
