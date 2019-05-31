/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author alejandro
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class VelocidadPuntoDTO {
    
    private Integer idvelocidad;
    private Double latitud;
    private Double longitud;
    private Integer velocidadPrimaria;
    private Integer velocidadSecundaria;
    private Integer velocidadTerciaria;
    private Integer velocidadCuarta;
    
}
