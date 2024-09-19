/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Contas;

/**
 *
 * @author 1091392413016
 */

// cria o contrustutor de Conta2 para inicalizar a instância name no momento em que cada objeto Conta2 é criado
public class TesteConta2 {
    public static void main(String[] args) {
      // cria dois objetos Conta2 
      Conta2 minhaConta1 = new Conta2("Alexandre");
      Conta2 minhaConta2 = new Conta2("Gomes");
      
      System.out.printf("Os nomes dos objetos são: %s %s", minhaConta1.getName(), minhaConta2.getName());
    }
}
