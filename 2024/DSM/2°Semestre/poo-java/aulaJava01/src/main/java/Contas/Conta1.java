/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Contas;

/**
 *
 * @author 1091392413016
 */

// classe conta1 que conta uma variável de instância e métodos para configurar e obter seu valor
public class Conta1 {
    private String name; // variável de instância
    
    // método para definir o nome no objeto
    public void setName(String newName){
        this.name = newName; // armazena o nome
    }
    
    // método para recuperar o nome do objeto
    public String getName() {
        return name; // retorna valor do nome para o chamador
    }
}
