/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Contas;

import java.util.Scanner;
/**
 *
 * @author 1091392413016
 */
public class TesteConta1 {
    public static void main(String[] args) {
        // criar um objeto Scanner para obter entrada a partir da janela de comando
        Scanner input = new Scanner(System.in);
        String nome;
        
        // cria um objeto Conta1 e o atribui a minhaConta
        Conta1 minhaConta = new Conta1();
        
        // exibe o valor inicial do nome null
        System.out.printf("O nome inicial é %s%n%n,", minhaConta.getName());
        
        System.out.print("Entre com o nome: ");
        nome = input.nextLine();
        minhaConta.setName(nome);
        System.out.printf("O nome inicial é %s%n%n,", minhaConta.getName());
    }
}

