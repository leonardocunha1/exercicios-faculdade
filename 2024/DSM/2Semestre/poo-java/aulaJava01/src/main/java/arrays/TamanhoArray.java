/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package arrays;

/**
 *
 * @author 1091392413016
 */
public class TamanhoArray {
    public static void main(String[] args) {
        int[] arrayUm = {12,3,5,7,5,8,5,34,234};
        
        int[] arrayDois = {43,32,6,5,3};
        
        if (arrayDois.length >= 5) {
            System.out.println("Tamanho do array dois é maior ou igual a 5");
        } else {
            System.out.println("Tamanho do array dois é menor que 5");
        }
        
        System.out.println("Tamanho do array um é: " + arrayUm.length);
    }
}
