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
public class Soma {

    public static void main(String[] args) {
        //cria um Scanner para obter entrada a partir da janela de comando
        Scanner entrada = new Scanner(System.in);
        int n1, n2, sum;

        System.out.print("Digite o primeiro número: ");
        n1 = entrada.nextInt();

        System.out.print("Digite o segundo número: ");
        n2 = entrada.nextInt();

        sum = n1 + n2;
        
        System.out.print("A soma é: " + sum);
    }
}
