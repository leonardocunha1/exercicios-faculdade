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
public class ProdutoNumeros {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n1, n2, n3, produto;
        
        System.out.print("Digite o primeiro número: ");
        n1 = input.nextInt();
        
        System.out.print("Digite o segundo número: ");
        n2 = input.nextInt();
        
        System.out.print("Digite o terceiro número: ");
        n3 = input.nextInt();
        
        produto = n1 * n2 * n3;
        
        System.out.printf("%d * %d * %d = %d%n",n1,n2,n3,produto);
                
    }
}
