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
 * @author utp
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SugerenciaDTO {
    
    private Integer estado;
    private Integer velocidad;
}
