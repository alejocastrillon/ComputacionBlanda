/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.ChatBot.entities;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author alejandro
 */
@Entity
@Table(name = "asignatura")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Asignatura implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idasignatura")
    private Integer idasignatura;
    @Basic(optional = false)
    @NotNull
    @Size(min = 2, max = 50)
    @Column(name = "nombre")
    private String nombre;
    @Basic(optional = false)
    @NotNull
    @Column(name = "cantidad_creditos")
    private Integer cantidadCreditos;
    @Basic(optional = false)
    @NotNull
    @Column(name = "semestre")
    private Integer semestre;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "asignaturaPadre")
    private List<Precedencia> asignaturasPosteriores;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "asignaturaHija")
    private List<Precedencia> asignaturasPrerequisito;
    
}
