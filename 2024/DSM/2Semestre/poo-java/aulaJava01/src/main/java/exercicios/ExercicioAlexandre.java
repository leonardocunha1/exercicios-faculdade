/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package exercicios;

/**
 *
 * @author 1091392413016
 */
import java.util.Scanner;

public class ExercicioAlexandre {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Cria um array de objetos Pessoa com o tamanho especificado
        Pessoa[] pessoas = new Pessoa[5];

        // Solicita os dados para cada pessoa
        for (int i = 0; i < pessoas.length; i++) {
            System.out.println("Pessoa " + (i + 1) + ":");

            // Solicita altura
            System.out.print("Digite a altura (em metros): ");
            double altura = scanner.nextDouble();

            // Solicita peso
            System.out.print("Digite o peso (em kg): ");
            double peso = scanner.nextDouble();
            scanner.nextLine(); // Consome a nova linha deixada pelo nextDouble()

            // Solicita sexo
            System.out.print("Digite o sexo (M/F): ");
            String sexo = scanner.nextLine();

            // Cria um novo objeto Pessoa e armazena no array
            pessoas[i] = new Pessoa(altura, peso, sexo);
        }

        // Fecha o scanner
        scanner.close();
        
        // Inicializa variáveis para cálculos
        double menorAltura = pessoas[0].getAltura();
        double maiorAltura = pessoas[0].getAltura();
        double somaAlturaHomens = 0;
        int numeroHomens = 0;
        int numeroMulheres = 0;

        // Processa os dados das pessoas
        for (int i = 0; i < pessoas.length; i++) {
            if (pessoas[i].getSexo().equalsIgnoreCase("f")) {
                numeroMulheres++;
            } else if (pessoas[i].getSexo().equalsIgnoreCase("m")) {
                somaAlturaHomens += pessoas[i].getAltura();
                numeroHomens++;
            }

            if (menorAltura > pessoas[i].getAltura()) {
                menorAltura = pessoas[i].getAltura();
            }
            if (maiorAltura < pessoas[i].getAltura()) {
                maiorAltura = pessoas[i].getAltura();
            }
        }

        // Calcula a média de altura dos homens
        double mediaAlturaHomens = numeroHomens > 0 ? somaAlturaHomens / numeroHomens : 0;

        // Imprime os resultados
        System.out.println("\nInformações das pessoas:");
        System.out.println("Menor altura: " + menorAltura + " metros");
        System.out.println("Maior altura: " + maiorAltura + " metros");
        System.out.println("Número de mulheres: " + numeroMulheres);
        System.out.println("Média de altura dos homens: " + mediaAlturaHomens + " metros");
    }
}
