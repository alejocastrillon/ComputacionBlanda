/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.services;

import com.alejocastrillon.demo.dto.SugerenciaDTO;
import net.sourceforge.jFuzzyLogic.FIS;
import net.sourceforge.jFuzzyLogic.rule.Variable;
import org.springframework.stereotype.Service;

/**
 *
 * @author utp
 */
@Service
public class SugerenciaServiceImpl implements SugerenciaService {

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
        sugerencia = new SugerenciaDTO(fis.getVariable("Riesgo").getValue(), null);
//        JFuzzyChart.get().chart(tip, tip.getDefuzzifier(), true);

        // Print ruleSet
        System.out.println(fis);
        return sugerencia;
    }
    
}
