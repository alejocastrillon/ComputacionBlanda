/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.ChatBot.dto;

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
public class PrecedenciaDTO {
    
    private Integer idprecedencia;
    private AsignaturaDTO asignaturaPadre;
    private AsignaturaDTO asignaturaHija;
    
}
