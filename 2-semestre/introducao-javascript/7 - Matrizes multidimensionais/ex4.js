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

function mediaAluno(matriz) {
    let aux = [];
    for (let i = 0; i < 15; i++) {
        let acm = 0;
        for (let j = 0; j < 5; j++) {
            acm += matriz[i][j];
        }
        aux.push(acm / 5);
    }
    return aux;
}

function verificaAprovacao(matriz) {
    let aux = mediaAluno(matriz);
    let msg = [];
    for (let i = 0; i < 15; i++) {
        if (aux[i] >= 6) {
            msg.push(`Aprovado`);
        } else {
            msg.push(`Reprovado`);
        }
    }
    return msg;
}

function main() {
    let matriz = [];
    let nomes = [];

    lerNotasMatriz(matriz);
    console.log(matriz);

    lerNomes(nomes);
    console.log(nomes);

    let media = mediaAluno(matriz);
    let mensagem = verificaAprovacao(matriz);

    for (let i = 0; i < 15; i++) {
        console.log(`O aluno ${nomes[i]} teve média ${media[i]} e foi ${mensagem[i]}`);
    }
}

main();
