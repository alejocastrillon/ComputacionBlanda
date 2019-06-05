/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.repositories;

import com.alejocastrillon.demo.entities.VelocidadPunto;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author alejandro
 */
@Repository
public interface VelocidadPuntoRepository extends JpaRepository<VelocidadPunto, Integer>{
    
    Optional<VelocidadPunto> findByLatitudAndLongitud(Double latitud, Double longitud);
}
