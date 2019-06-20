/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.services;

import com.alejocastrillon.demo.dto.SugerenciaDTO;
import com.alejocastrillon.demo.entities.VelocidadPunto;
import com.alejocastrillon.demo.repositories.VelocidadPuntoRepository;
import com.alejocastrillon.demo.services.RedNeuronal.RedNeuronal;
import java.util.Optional;
import net.sourceforge.jFuzzyLogic.FIS;
import net.sourceforge.jFuzzyLogic.rule.Variable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author utp
 */
@Service
public class SugerenciaServiceImpl implements SugerenciaService {

    @Autowired
    private VelocidadPuntoRepository repository;
    
    @Override
    public SugerenciaDTO sugerir(Double latitud, Double longitud, Integer estadoCarretera, Integer estadoClima) {
        SugerenciaDTO sugerencia = null;
        String fileName = "fcl/tipper.fcl";
        FIS fis = FIS.load(fileName,true);

        // Error while loading?
        if( fis == null ) { 
            System.err.println("Can't load file: '" + fileName + "'");
            return null;
        }

        // Show 
//        JFuzzyChart.get().chart(fis);

        // Set inputs
        fis.setVariable("Estado_Carretera", estadoCarretera);
        fis.setVariable("Estado_Tiempo", estadoClima);

        // Evaluate
        fis.evaluate();

        // Show output variable's chart
        Variable tip = fis.getVariable("Riesgo");
        System.out.println(Math.round(tip.getValue()));
        Integer nivel = null;
        Double porcentaje = (tip.getValue() / 25) * 100;
        if (porcentaje >= 0 && porcentaje <= 25) {
            nivel = 1;
        } else if (porcentaje > 25 && porcentaje <= 50) {
            nivel = 2;
        } else if (porcentaje > 50 && porcentaje <= 75) {
            nivel = 3;
        } else if (porcentaje > 75) {
            nivel = 4;
        }
        Optional<VelocidadPunto> opVelocidad = repository.findByLatitudAndLongitud(latitud, longitud);
        if (opVelocidad.isPresent()) {
            VelocidadPunto velocidad = opVelocidad.get();
            if (null != nivel) switch (nivel) {
                case 1:
                    sugerencia = new SugerenciaDTO(nivel, velocidad.getVelocidadPrimaria());
                    break;
                case 2:
                    sugerencia = new SugerenciaDTO(nivel, velocidad.getVelocidadSecundaria());
                    break;
                case 3:
                    sugerencia = new SugerenciaDTO(nivel, velocidad.getVelocidadTerciaria());
                    break;
                case 4:
                    sugerencia = new SugerenciaDTO(nivel, velocidad.getVelocidadCuarta());
                    break;
            }
        }
//        JFuzzyChart.get().chart(tip, tip.getDefuzzifier(), true);

        // Print ruleSet
        
        
        System.out.println(fis);
        return sugerencia;
    }
    
}
