/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.ChatBot.repositories;

import com.alejocastrillon.ChatBot.entities.Precedencia;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author alejandro
 */
public interface PrecedenciaRepository extends JpaRepository<Precedencia, Integer>{
    
}
