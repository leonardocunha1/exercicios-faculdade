function lerMatriz(matriz) {
    // Matriz 2x4 (2 linhas e 4 colunas)
    for (let i = 0; i < 2; i++) {
        matriz[i] = []; //cria um vetor dentro de um vetor
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Math.floor(Math.random() * 20) + 1; //Sorteando os valores de 1 até 20
        }
    }
}
function contandoLinhaMatriz(matriz) {
    let acm = 0;
    let aux = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            if (matriz[i][j] >= 12 && matriz[i][j] <= 20) {
                acm ++;
            }
        }
        aux.push(acm);
        acm = 0;
    }
    return aux;
}
function MediaParesMatriz(matriz) {
    let acm = 0;
    let aux = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            if (matriz[i][j] % 2 === 0) {
                acm ++;
                aux += matriz[i][j];
            }
        }
    }
    let media = aux/acm;
    return media;
}
function main() {
    let matriz = [];
    lerMatriz(matriz);
    console.log(matriz);
    let linhas = contandoLinhaMatriz(matriz);
    let msg = ``;
    for (let i = 0; i < 2; i++) {
        if (linhas[i] === 0) {
            msg = msg + `Não há elementos entre 12 e 20 na linhas ${i+1}`;
        } else {
            msg = msg + `Há ${linhas[i]} elementos entre 12 e 20 na linha ${i+1}`;
        }
    }
    console.log(msg);
      
}