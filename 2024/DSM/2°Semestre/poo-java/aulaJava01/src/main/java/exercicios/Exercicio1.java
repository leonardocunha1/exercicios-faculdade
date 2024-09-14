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
public class Exercicio1 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        
        System.out.print("Digite a temperatura em F°: ");
        double fahrenheit = entrada.nextDouble();
        
        double celsius = (fahrenheit - 32) * 5/9;
        System.out.printf("A temperatura %.2f°F equivale a %.2f°C", fahrenheit, celsius);
        
    }
}
