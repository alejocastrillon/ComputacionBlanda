/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.ChatBot.controller;

import com.alejocastrillon.ChatBot.dto.AsignaturaDTO;
import com.alejocastrillon.ChatBot.services.AsignaturaService;
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
@RequestMapping("${api.base.url}/asignaturas")
public class AsignaturaController {
    
    @Autowired
    private AsignaturaService service;
    
    @GetMapping("/")
    public ResponseEntity getAsignaturas() {
        List<AsignaturaDTO> asignaturas = service.getAsignaturas();
        if (asignaturas != null && !asignaturas.isEmpty()) {
            return new ResponseEntity<>(asignaturas, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
    @PostMapping("/")
    public ResponseEntity saveAsignatura(@RequestBody AsignaturaDTO asignatura) {
        AsignaturaDTO asignaturaSave = service.guardarAsignatura(asignatura);
        if (asignaturaSave != null) {
            return new ResponseEntity<>(asignaturaSave, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity getAsignatura(@PathVariable("id") Integer idasignatura) {
        AsignaturaDTO asignatura = service.getAsignatura(idasignatura);
        if (asignatura != null) {
            return new ResponseEntity<>(asignatura, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
    
}
