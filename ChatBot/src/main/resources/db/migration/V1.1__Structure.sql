/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Author:  alejandro
 * Created: 4/07/2019
 */

CREATE TABLE IF NOT EXISTS asignatura (
    idasignatura INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    cantidad_creditos INT NOT NULL,
    semestre INT NOT NULL,
    PRIMARY KEY(idasignatura))
ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS precedencia (
    idprecedencia INT NOT NULL AUTO_INCREMENT,
    asignatura_padre INT NOT NULL,
    asignatura_hija INT NOT NULL,
    PRIMARY KEY(idprecedencia),
    CONSTRAINT fk_asignatura_padre
        FOREIGN KEY (asignatura_padre)
        REFERENCES asignatura(idasignatura)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT fk_asignatura_hija
        FOREIGN KEY (asignatura_hija)
        REFERENCES asignatura(idasignatura)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE=InnoDB;

INSERT INTO asignatura (nombre, cantidad_creditos, semestre) VALUES ('HUMANIDADES I', 2, 1);
INSERT INTO asignatura (nombre, cantidad_creditos, semestre) VALUES ('MATEMATICAS I', 5, 1);
INSERT INTO asignatura (nombre, cantidad_creditos, semestre) VALUES ('DESARROLLO DE PENSAMIENTO LÓGICO', 2, 1);
INSERT INTO asignatura (nombre, cantidad_creditos, semestre) VALUES ('PROGRAMACIÓN I', 2, 1);
INSERT INTO asignatura (nombre, cantidad_creditos, semestre) VALUES ('INTRODUCCIÓN A LA INFORMATICA I', 3, 1);
INSERT INTO asignatura (nombre, cantidad_creditos, semestre) VALUES ('DEPORTES I', 1, 1);