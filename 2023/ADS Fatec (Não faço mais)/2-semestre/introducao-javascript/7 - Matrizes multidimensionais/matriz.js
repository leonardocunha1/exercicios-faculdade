function lerMatriz(matriz) {
    // Matriz 3x4 (3 linhas e 4 colunas)
    for (let i = 0; i < 3; i++) {
        matriz[i] = []; //cria um vetor dentro de um vetor
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Number(prompt(`Posição [${i}][${j}]`))
        }
    }
}

function mostraMatriz(matriz) {
    console.log(matriz);
}

function principal() {
    let matriz = []
    lerMatriz(matriz)
    mostraMatriz(matriz)
}

principal();
