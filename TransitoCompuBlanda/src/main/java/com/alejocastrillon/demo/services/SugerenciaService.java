/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.services;

import com.alejocastrillon.demo.dto.SugerenciaDTO;

/**
 *
 * @author utp
 */
public interface SugerenciaService {
    
    SugerenciaDTO sugerir(Double latitud, Double longitud, Integer estadoCarretera, Integer estadoClima);
    
}
