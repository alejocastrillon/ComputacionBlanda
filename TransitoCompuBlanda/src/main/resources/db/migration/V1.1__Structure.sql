/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  alejandro
 * Created: 30/05/2019
 */

CREATE TABLE IF NOT EXISTS accidente (
    idaccidente INT NOT NULL AUTO_INCREMENT,
    latitud DOUBLE NOT NULL,
    longitud DOUBLE NOT NULL,
    nivel_lluvia INT NOT NULL,
    estado_carretera INT NOT NULL,
    fecha_hora TIMESTAMP NOT NULL,
    PRIMARY KEY (idaccidente))
ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS velocidad_punto (
    idvelocidad INT NOT NULL AUTO_INCREMENT,
    latitud DOUBLE NOT NULL,
    longitud DOUBLE NOT NULL,
    velocidad_primaria INT NOT NULL,
    velocidad_secundaria INT NOT NULL,
    velocidad_terciaria INT NOT NULL,
    velocidad_cuarta INT NOT NULL,
    PRIMARY KEY (idvelocidad))
ENGINE=InnoDB;