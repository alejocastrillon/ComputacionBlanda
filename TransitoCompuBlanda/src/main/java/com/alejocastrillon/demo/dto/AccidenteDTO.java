/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.dto;

import java.sql.Timestamp;
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
public class AccidenteDTO {
    
    private Integer idaccidente;
    private Double latitud;
    private Double longitud;
    private Integer nivelLluvia;
    private Integer estadoCarretera;
    private Timestamp fechaHora;
    
}
