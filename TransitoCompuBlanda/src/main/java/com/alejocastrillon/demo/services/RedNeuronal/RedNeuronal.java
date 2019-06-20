/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.alejocastrillon.demo.services.RedNeuronal;

import java.util.Arrays;

/**
 *
 * @author utp
 */
public class RedNeuronal {
    
    public void entreno() {
         double[][] x = {{0, 0}, {0, 1}, {1, 0}, {1, 1}};
        double[][] y = {{0}, {1}, {1}, {0}};
        int m = 4;
        int nodes = 400;
        x = Np.T(x);
        y = Np.T(y);
        double[][] w1 = Np.random(nodes, 2);
        double[][] b1 = new double[nodes][m];
        
        double[][] w2 = Np.random(1, nodes);
        double[][] b2 = new double[1][m];
        
        for (int i = 0; i < 4000; i++) {
            
            double[][] z1 = Np.add(Np.dot(w1, x), b1);
            double[][] a1 = Np.sigmoid(z1);
            
            double[][] z2 = Np.add(Np.dot(w2, a1), b2);
            double[][] a2 = Np.sigmoid(z2);
            
            double cost = Np.cross_entropy(m, y, a2);
            
            double[][] dz2 = Np.subtract(a2, y);
            double[][] dw2 = Np.divide(Np.dot(dz2, Np.T(a1)), m);
            double[][] db2 = Np.divide(dz2, m);
            
            double[][] dz1 = Np.multiply(Np.dot(Np.T(w2), dz2), Np.subtract(1.0, Np.power(a1, 2)));
            double[][] dw1 = Np.divide(Np.dot(dz1, Np.T(x)), m);
            double[][] db1 = Np.divide(dz1, m);
            
            w1 = Np.subtract(w1, Np.multiply(0.01, dw1));
            b1 = Np.subtract(b1, Np.multiply(0.01, db1));
            
            w2 = Np.subtract(w2, Np.multiply(0.01, dw2));
            b2 = Np.subtract(b2, Np.multiply(0.01, db2));
            
            if (i % 400 == 0) {
                System.out.println("/*********************/");
                System.out.println("Costo = " + cost);
                System.out.println("Salidas = " + Arrays.deepToString(a2));
            }
        }
   }
}
