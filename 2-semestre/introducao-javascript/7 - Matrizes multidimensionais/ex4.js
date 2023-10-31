/*
Faça um programa que receba:
as notas de 15 alunos em cinco provas diferentes e armazene-as em uma matriz 15 x 5;
os nomes dos 15 alunos e armazene-os em um vetor de 15 posições.
*/

// Função para preencher uma matriz 15x5 com números inteiros aleatórios entre 1 e 10
function lerNotasMatriz(matriz) {
    for (let i = 0; i < 15; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }
}

function lerNomes(vetor) {
    for (let i = 0; i < 15; i++) {
        vetor[i] = prompt(`Digite o nome do aluno ${i + 1}`);
    }
}

function calcularMediaAluno(matriz) {
    let medias = [];
    for (let i = 0; i < 15; i++) {
        let acm = 0;
        for (let j = 0; j < 5; j++) {
            acm += matriz[i][j];
        }
        medias.push(acm / 5);
    }
    return medias;
}

function calcularMediaProva(matriz) {
    let acm = 0;
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 5; j++) {
            acm += matriz[i][j];
        }
    }
    let mediaProva = acm / (15 * 5);
    return mediaProva;
}

function verificarAprovacao(matriz) {
    let medias = calcularMediaAluno(matriz);
    let mensagens = [];
    for (let i = 0; i < 15; i++) {
        if (medias[i] >= 6) {
            mensagens.push(`Aprovado`);
        } else {
            mensagens.push(`Reprovado`);
        }
    }
    return mensagens;
}

function main() {
    let matriz = [];
    let nomes = [];

    lerNotasMatriz(matriz);
    console.log(matriz);

    lerNomes(nomes);
    console.log(nomes);

    let mediasAlunos = calcularMediaAluno(matriz);
    let mensagens = verificarAprovacao(matriz);

    for (let i = 0; i < 15; i++) {
        console.log(`O aluno ${nomes[i]} teve média ${mediasAlunos[i]} e foi ${mensagens[i]}`);
    }

    let mediaSala = calcularMediaProva(matriz);
    console.log(`A média da sala foi ${mediaSala.toFixed(2)}`);
}

main();
