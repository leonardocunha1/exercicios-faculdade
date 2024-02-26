/*
Elabore um programa que preencha uma matriz M de ordem 4 x 6 e uma segunda matriz N de ordem 6 x 4, calcule e imprima a soma das linhas de M com as colunas de N.
*/


// Função para preencher uma matriz 4x6 com números inteiros aleatórios entre 1 e 10
// function preencherMatriz1(matriz1) {
//     for (let i = 0; i < 4; i++) {
//         matriz1[i] = [];
//         for (let j = 0; j < 6; j++) {
//             matriz1[i][j] = Math.floor(Math.random() * 10) + 1;
//         }
//     }
// }
// function preencherMatriz2(matriz2) {
//     for (let i = 0; i < 6; i++) {
//         matriz2[i] = [];
//         for (let j = 0; j < 4; j++) {
//             matriz2[i][j] = Math.floor(Math.random() * 10) + 1;
//         }
//     }
// }
// function somaLinhasColunas(matriz1, matriz2) {
//     let soma = 0;
//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 6; j++) {
//             soma += matriz1[i][j] + matriz2[j][i];
//         }
//     }
//     return soma;
// }
// function main() {
//     let matriz1 = [];
//     let matriz2 = [];
//     preencherMatriz1(matriz1);
//     preencherMatriz2(matriz2);
//     console.log("Matriz 1:");
//     console.log(matriz1);
//     console.log("Matriz 2:");
//     console.log(matriz2);
//     let soma = somaLinhasColunas(matriz1, matriz2);
//     console.log(`A soma das linhas da matriz M com as colunas da matriz N é ${soma}`);
// }


function preencherMatriz1(matriz1) {
    for (let i = 0; i < 4; i++) {
        matriz1[i] = [];
        for (let j = 0; j < 6; j++) {
            matriz1[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }
}
function preencherMatriz2(matriz2) {
    for (let i = 0; i < 6; i++) {
        matriz2[i] = [];
        for (let j = 0; j < 4; j++) {
            matriz2[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }
}
function somaLinhasColunas(matriz1, matriz2) {
    let aux = [];
    for (let i = 0; i < 4; i++) {
        let soma = 0;
        for (let j = 0; j < 6; j++) {
            soma += matriz1[i][j] + matriz2[j][i];
        }
        aux.push(soma);
    }
    return aux;
}
function main() {
    let matriz1 = [];
    let matriz2 = [];
    preencherMatriz1(matriz1);
    preencherMatriz2(matriz2);
    console.log("Matriz 1:");
    console.log(matriz1);
    console.log("Matriz 2:");
    console.log(matriz2);
    let soma = somaLinhasColunas(matriz1, matriz2);
    for (let i = 0; i < 4; i++) {
        console.log(`A soma da linha ${i + 1} da matriz M com a coluna ${i + 1} da matriz N é ${soma[i]}`);
    }
}
main();