/*
Elabore um programa que preenca uma matriz 12 x 4 com os valores das vendas de uma loja, em que cada linha represente um mês do ano e cada coluna representa uma semana do mes. Calcule e mostre:
o total vendido em cada mês do ano, mostrando o nome do mês por extenso (Janeiro, Fevereiro, etc.);
o total vendido em cada semana durante todo o ano;
o total vendido no ano.
*/

// Função para preencher uma matriz 12x4 com números inteiros aleatórios entre 100 e 1000
function lerValoresMatriz(matriz) {
    for (let i = 0; i < 12; i++) {
        matriz[i] = [];
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Math.floor(Math.random() * 901) + 100;
        }
    }
}
function totalMes(matriz) {
    let aux = [];
    for (let i = 0; i < 12; i++) {
        let acm = 0;
        for (let j = 0; j < 4; j++) {
            acm += matriz[i][j];
        }
        aux.push(acm);
    }
    return aux;
}
function totalSemana(matriz) {
    let aux = [];
    for (let i = 0; i < 4; i++) {
        let acm = 0;
        for (let j = 0; j < 12; j++) {
            acm += matriz[j][i];
        }
        aux.push(acm);
    }
    return aux;
}
function totalAno(matriz) {
    let aux = totalMes(matriz);
    let acm = 0
    for (let i = 0; i < 12; i++) {
        acm = acm + aux[i];
    }
    return acm
}
function nomeDoMes() {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses;
}
function main() {
    let matriz = [];
    lerValoresMatriz(matriz);
    let totalmes = totalMes(matriz);
    let totalsemana = totalSemana(matriz);
    let totalano = totalAno(matriz);
    let mes = nomeDoMes();
    for (let i = 0; i < 12; i++) {
        console.log(`O total de vendas no mês de ${mes[i]} foi de ${totalmes[i]}`);
    }
    for (let i = 0; i < 4; i++) {
        console.log(`O total de vendas na semana ${i + 1} foi de ${totalsemana[i]}`);
    }
    console.log(`O total de vendas no ano foi de ${totalano}`);
}

main();
