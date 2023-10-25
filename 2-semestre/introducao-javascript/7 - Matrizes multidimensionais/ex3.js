/*
Elabore um programa que preencha uma matriz 6 x 3, calcule e mostre:
o maior elemento da matriz e sua respectiva posição, ou seja, linha e coluna;
o menor elemento da matriz e sua respectiva posição, ou seja, linha e coluna;
*/

// Função para preencher uma matriz com números inteiros aleatórios entre 1 e 20
function lerMatriz(matriz) {
    for (let i = 0; i < 6; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 20) + 1;
        }
    }
}

function maiorElemento(matriz) {
    let maior = matriz[0][0];
    let linha = 0;
    let coluna = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
                linha = i;
                coluna = j;
            }
        }
    }
    return { valor: maior, linha: linha, coluna: coluna };
}

function menorElemento(matriz) {
    let menor = matriz[0][0];
    let linha = 0;
    let coluna = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            if (matriz[i][j] < menor) {
                menor = matriz[i][j];
                linha = i;
                coluna = j;
            }
        }
    }
    return { valor: menor, linha: linha, coluna: coluna };
}

function main() {
    let matriz = [];
    lerMatriz(matriz);
    console.log(matriz);
    let maior = maiorElemento(matriz);
    console.log(`O maior elemento da matriz é ${maior.valor} e sua posição é [${maior.linha}, ${maior.coluna}]`);
    let menor = menorElemento(matriz);
    console.log(`O menor elemento da matriz é ${menor.valor} e sua posição é [${menor.linha}, ${menor.coluna}]`);
}

main();

