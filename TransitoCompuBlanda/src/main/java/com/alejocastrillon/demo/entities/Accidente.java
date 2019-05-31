/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.entities;

import java.io.Serializable;
import java.sql.Timestamp;
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
@Table(name = "accidente")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Accidente implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idaccidente")
    private Integer idaccidente;
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
    @Column(name = "nivel_lluvia")
    private Integer nivelLluvia;
    @Basic(optional = false)
    @NotNull
    @Column(name = "estado_carretera")
    private Integer estadoCarretera;
    @Basic(optional = false)
    @NotNull
    @Column(name = "fecha_hora")
    private Timestamp fechaHora;
    
}
