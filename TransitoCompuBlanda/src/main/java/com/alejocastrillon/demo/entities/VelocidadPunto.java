/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author alejandro
 */
@Entity
@Table(name = "velocidad_punto")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class VelocidadPunto implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idvelocidad")
    private Integer idvelocidad;
    @Basic(optional = false)
    @NotNull
    @Column(name = "latitud")
    private Double latitud;
    @Basic(optional = false)
    @NotNull
    @Column(name = "longitud")
    private Double longitud;
    @Basic(optional = false)
    @NotNull
    @Column(name = "velocidad_primaria")
    private Integer velocidadPrimaria;
    @Basic(optional = false)
    @NotNull
    @Column(name = "velocidad_secundaria")
    private Integer velocidadSecundaria;
    @Basic(optional = false)
    @NotNull
    @Column(name = "velocidad_terciaria")
    private Integer velocidadTerciaria;
    @Basic(optional = false)
    @NotNull
    @Column(name = "velocidad_cuarta")
    private Integer velocidadCuarta;
    
}
