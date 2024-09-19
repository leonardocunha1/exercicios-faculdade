/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package exercicios;

/**
 *
 * @author 1091392413016
 */
public class Pessoa {
    private double altura;
    private double peso;
    private String sexo;

    // Construtor
    public Pessoa(double altura, double peso, String sexo) {
        this.altura = altura;
        this.peso = peso;
        this.sexo = sexo;
    }

    // Getters e Setters
    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
}
