/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.controller;

import com.alejocastrillon.demo.dto.SugerenciaDTO;
import com.alejocastrillon.demo.services.SugerenciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author utp
 */
@RestController
@RequestMapping("${api.base.url}/sugerencias")
public class SugerenciaController {
    
    @Autowired
    private SugerenciaService service;
    
    @GetMapping("/{latitud}/{longitud}/{estadoCarretera}/{estadoClima}")
    public ResponseEntity getSugerencia(@PathVariable("latitud") Double latitud, @PathVariable("longitud") Double longitud,
            @PathVariable("estadoCarretera") Integer estadoCarretera, @PathVariable("estadoClima") Integer estadoClima) {
        SugerenciaDTO sugerencia = service.sugerir(latitud, longitud, estadoCarretera, estadoClima);
        if (sugerencia != null) {
            return new ResponseEntity<>(sugerencia, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
}
