/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.controller;

import com.alejocastrillon.demo.dto.VelocidadPuntoDTO;
import com.alejocastrillon.demo.services.VelocidadPuntoService;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alejandro
 */
@RestController
@RequestMapping("${api.base.url}/velocidades")
public class VelocidadPuntoController {
    
    @Autowired
    private VelocidadPuntoService service;
    
    @PostMapping("/")
    public ResponseEntity saveVelocidad(@RequestBody VelocidadPuntoDTO velocidad) {
        VelocidadPuntoDTO vel = service.saveConfiguracion(velocidad);
        if (vel != null) {
            return new ResponseEntity<>(vel, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
    @GetMapping("/")
    public ResponseEntity getVelocidades() {
        List<VelocidadPuntoDTO> velocidades = service.getVelocidades();
        if (velocidades != null && !velocidades.isEmpty()) {
            return new ResponseEntity<>(velocidades, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
    @GetMapping("/{idvelocidad}")
    public ResponseEntity getVelocidad(@PathVariable("idvelocidad") Integer idvelocidad) {
        VelocidadPuntoDTO velocidad = service.getVelocidad(idvelocidad);
        if (velocidad != null) {
            return new ResponseEntity<>(velocidad, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
    @GetMapping("/velocidadenpunto/{latitud}/{longitud}")
    public ResponseEntity getVelocidadOnPoint(@PathVariable("latitud") Double latitud, @PathVariable("longitud") Double longitud) {
        VelocidadPuntoDTO velocidad = service.getVelocidadOnPoint(latitud, longitud);
        if (velocidad != null) {
            return new ResponseEntity<>(velocidad, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
}
