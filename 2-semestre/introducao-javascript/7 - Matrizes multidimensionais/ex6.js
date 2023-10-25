/*
Faça um programa que preencha uma matriz 20 x 10 com números inteiros, e some cada uma das colunas, armazenando o resultado das somas em um vetor. A seguir, o programa deverá multiplicar cada elemento da matriz pela soma da coluna e mostrar a matriz resultante.
*/
// Função para preencher uma matriz 20x10 com números inteiros aleatórios entre 1 e 10
function preencherMatriz(matriz) {
    for (let i = 0; i < 20; i++) {
        matriz[i] = [];
        for (let j = 0; j < 10; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }
}

// Função para somar as colunas da matriz e armazenar os resultados em um vetor
function somaColunas(matriz) {
    let somaColuna = [];
    for (let j = 0; j < 10; j++) {
        let soma = 0;
        for (let i = 0; i < 20; i++) {
            soma += matriz[i][j];
        }
        somaColuna.push(soma);
    }
    return somaColuna;
}

// Função para multiplicar cada elemento da matriz pelo valor correspondente no vetor
function multiplicarMatriz(matriz, vetor) {
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 20; i++) {
            matriz[i][j] *= vetor[j];
        }
    }
}

function main() {
    let matriz = [];
    preencherMatriz(matriz);
    console.log("Matriz original:");
    console.log(matriz); //DÚVIDA AQUI: A MATRIZ IMPRESSA NÃO É A ORIGINAL E SIM A MATRIZ RESULTANTE. POR QUE?

    let vetorSomaColunas = somaColunas(matriz);

    multiplicarMatriz(matriz, vetorSomaColunas);
    
    console.log("Matriz resultante:");
    console.log(matriz);
}

main();

