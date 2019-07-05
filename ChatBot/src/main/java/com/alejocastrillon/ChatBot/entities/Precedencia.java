/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.ChatBot.entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author alejandro
 */
@Entity
@Table(name = "precedencia")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Precedencia implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idprecedencia")
    private Integer idprecedencia;
    @JoinColumn(name = "asignatura_padre", referencedColumnName = "idasignatura")
    @ManyToOne(optional = false)
    private Asignatura asignaturaPadre;
    @JoinColumn(name = "asignatura_hija", referencedColumnName = "idasignatura")
    @ManyToOne(optional = false)
    private Asignatura asignaturaHija;
    
}
