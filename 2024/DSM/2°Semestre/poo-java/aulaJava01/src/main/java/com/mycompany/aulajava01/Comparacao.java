/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.aulajava01;

import java.util.Scanner;

/**
 *
 * @author 1091392413016
 */
public class Comparacao {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int number1, number2;
        
        System.out.print("Digite o primeiro número: ");
        number1 = input.nextInt();
        
        System.out.print("Digite o segundo número: ");
        number2 = input.nextInt();
        
        // Comparação dos números usando if separado
        if (number1 > number2) {
            System.out.printf("%d é maior que %d%n", number1, number2);
        }
        
        if (number1 < number2) {
            System.out.printf("%d é menor que %d%n", number1, number2);
        }
        
        if (number1 == number2) {
            System.out.printf("%d é igual a %d%n", number1, number2);
        }   
        
        if (number1 != number2) {
            System.out.printf("%d é diferente a %d%n", number1, number2);
        } 
        
        if (number1 >= number2) {
            System.out.printf("%d é maior ou igual a %d%n", number1, number2);
        }  
        
        if (number1 <= number2) {
            System.out.printf("%d é menor ou igual a %d%n", number1, number2);
        }   
    }
}
