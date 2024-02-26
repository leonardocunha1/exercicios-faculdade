function lerMatriz(matriz) {
    // Matriz 3x5 (3 linhas e 5 colunas)
    for (let i = 0; i < 3; i++) {
        matriz[i] = []; //cria um vetor dentro de um vetor
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Math.floor(Math.random() * 20) + 1; //Sorteando os valores de 1 até 20
        }
    }
}

function elementosUmAQuinze(matriz) {
    let acm = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            if (matriz[i][j] >= 15 && matriz[i][j] <= 20) {
                acm ++;
            }
        }
    }
    return acm;
}
function saidaDadosMatriz(matriz) {
    console.log(matriz);
    let aux = elementosUmAQuinze(matriz);
    if (aux === 0) {
        console.log(`Não há elementos entre 15 a 20 nesta matriz`);
    } else {
        console.log(`Há ${aux} elementos entre 15 a 20`);
    }
}

function main() {
    let matriz = [];
    lerMatriz(matriz);
    saidaDadosMatriz(matriz);
}

main();