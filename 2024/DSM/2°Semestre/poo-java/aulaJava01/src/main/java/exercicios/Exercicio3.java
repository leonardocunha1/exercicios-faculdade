/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package exercicios;

import java.util.Scanner;

/**
 *
 * @author 1091392413016
 */
public class Exercicio3 {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.print("Digite o seu peso em kg: ");
        double peso = entrada.nextDouble();
        
        // Limpar o buffer do scanner após o nextDouble
        entrada.nextLine(); 

        System.out.print("Digite sua altura em metros: ");
        String alturaStr = entrada.nextLine().replace(",", ".");

        // Converter a altura de String para double
        double altura = Double.parseDouble(alturaStr);
        
        double imc = Math.floor(peso / Math.pow(altura, 2));

        System.out.println("Peso: " + peso + " kg");
        System.out.println("Altura: " + altura + " metros");
        System.out.println("O IMC é: " + imc);
    }
}
