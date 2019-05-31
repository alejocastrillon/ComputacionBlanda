/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.repositories;

import com.alejocastrillon.demo.entities.Accidente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author alejandro
 */
@Repository
public interface AccidenteRepository extends JpaRepository<Accidente, Integer>{
    
}
