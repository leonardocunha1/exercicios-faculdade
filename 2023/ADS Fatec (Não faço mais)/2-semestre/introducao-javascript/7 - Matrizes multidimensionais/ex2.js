// Função para preencher uma matriz com números inteiros aleatórios entre 1 e 20
function lerMatriz(matriz) {
    for (let i = 0; i < 2; i++) {
        matriz[i] = [];
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Math.floor(Math.random() * 20) + 1;
        }
    }
}

// Função para contar quantos elementos entre 12 e 20 existem em cada linha da matriz
function contandoLinhaMatriz(matriz) {
    let aux = [];
    for (let i = 0; i < 2; i++) {
        let acm = 0;
        for (let j = 0; j < 4; j++) {
            if (matriz[i][j] >= 12 && matriz[i][j] <= 20) {
                acm++;
            }
        }
        aux.push(acm);
    }
    return aux;
}

// Função para calcular a média dos elementos pares na matriz
function MediaParesMatriz(matriz) {
    let acm = 0;
    let aux = 0;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 4; j++) {
            if (matriz[i][j] % 2 === 0 && matriz[i][j] !== undefined) {
                acm++;
                aux += matriz[i][j];
            }
        }
    }
    let media = acm === 0 ? 0 : aux / acm;
    return media;
}

// Função principal que chama as funções anteriores e imprime os resultados no console
function main() {
    let matriz = [];
    lerMatriz(matriz);
    console.log(matriz);
    let linhas = contandoLinhaMatriz(matriz);
    let msg = "";
    for (let i = 0; i < 2; i++) {
        if (linhas[i] === 0) {
            msg = msg + `Não há elementos entre 12 e 20 na linha ${i + 1}`;
        } else {
            msg = msg + `Há ${linhas[i]} elementos entre 12 e 20 na linha ${i + 1}`;
        }
    }
    console.log(msg);
    let media = MediaParesMatriz(matriz);
    if (media === 0) {
        console.log("Não há elementos pares");
    } else {
        console.log(`A média dos elementos pares é ${media}`);
    }
}

// Chama a função principal para executar o programa
main();
