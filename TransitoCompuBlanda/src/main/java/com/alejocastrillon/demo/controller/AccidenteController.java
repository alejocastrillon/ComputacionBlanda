/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.controller;

import com.alejocastrillon.demo.dto.AccidenteDTO;
import com.alejocastrillon.demo.services.AccidenteService;
import java.util.List;
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
@RequestMapping("${api.base.url}/accidentes")
public class AccidenteController {
    
    @Autowired
    private AccidenteService service;
    
    @PostMapping("/")
    public ResponseEntity saveAccidente(@RequestBody AccidenteDTO accidente) {
        AccidenteDTO accident = service.saveAccidente(accidente);
        if (accident != null) {
            return new ResponseEntity<>(accident, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
    @GetMapping("/")
    public ResponseEntity getAccidentes() {
        List<AccidenteDTO> accidentes = service.getAccidentes();
        if (accidentes != null && !accidentes.isEmpty()) {
            return new ResponseEntity<>(accidentes, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
    @GetMapping("/coordenadas/{latitud}/{longitud}")
    public ResponseEntity getAccidentesPorCoord(@PathVariable("latitud") Double latitud, @PathVariable("longitud") Double longitud) {
        List<AccidenteDTO> accidentes = service.getAccidentesinPoint(latitud, longitud);
        if (accidentes != null && !accidentes.isEmpty()) {
            return new ResponseEntity<>(accidentes, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
    @GetMapping("/{idaccidente}")
    public ResponseEntity getAccidente(@PathVariable("idaccidente") Integer idaccidente) {
        AccidenteDTO accidente = service.getAccidente(idaccidente);
        if (accidente != null) {
            return new ResponseEntity<>(accidente, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
}
