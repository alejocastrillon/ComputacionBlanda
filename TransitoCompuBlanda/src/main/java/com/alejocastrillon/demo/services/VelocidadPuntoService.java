/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.services;

import com.alejocastrillon.demo.dto.VelocidadPuntoDTO;
import java.util.List;

/**
 *
 * @author alejandro
 */
public interface VelocidadPuntoService {
    
    VelocidadPuntoDTO saveConfiguracion(VelocidadPuntoDTO velocidad);
    
    List<VelocidadPuntoDTO> getVelocidades();
    
    VelocidadPuntoDTO getVelocidad(Integer idvelocidad);
    
    VelocidadPuntoDTO getVelocidadOnPoint(Double latitud, Double longitud);
}
