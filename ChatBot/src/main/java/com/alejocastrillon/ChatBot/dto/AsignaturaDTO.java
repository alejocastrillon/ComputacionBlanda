/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.ChatBot.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author alejandro
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
public class AsignaturaDTO {
    
    private Integer idasignatura;
    private String nombre;
    private Integer cantidadCreditos;
    private Integer semestre;
    private List<PrecedenciaDTO> asignaturasPosteriores;
    private List<PrecedenciaDTO> asignaturasPrerequisito;
    
}
