/*
Utilizando 1 matrizNotas e 1 vetor de objetos e um menu de opções, faça um programa em javascript que crie funções para: 
1) cadastrar em um vetor 4 carros contendo marca, modelo, ano e valor, e para cada carro, informar em uma matrizNotas a nota do carro para cada uma das 5 avaliações que ele recebe da empresa Guia Quatro Rodas da Editora Abril.
2) calcular e mostrar a média de notas de cada carro, informe junto a marca e modelo do carro  
3) calcular e mostrar o modelo do carro com menor nota em cada avaliação
4) calcule e mostre qual das cinco avaliações teve menor média
*/

//Cadastrando carros
function cadastraCarros(vetorCarros){
    for(let i=0;i<4;i++){
        let objeto = {
            marca: prompt(`Informe a marca do carro`),
            modelo: prompt(`Informe o modelo do carro`),
            ano: Number(prompt(`Informe o ano do carro`)),
            valor: Number(prompt(`Informe o valor do carro`))
        }
        vetorCarros.push(objeto);
    }
}

// Avalia os carros (ler matriz)
function avaliaCarros(vetorCarros, matrizNotas){    
    for(let i=0;i<4;i++){
        matrizNotas[i] = [];
        for(let j=0;j<5;j++){
            matrizNotas[i][j] = Number(prompt(`Informe a nota da avaliação ${j+1} do carro ${vetorCarros[i].modelo}: `));
        }
    }
}

// Calcula a média de cada carro
function mediaCarros(vetorCarros, matrizNotas){
    for(let i=0;i<4;i++){
        let soma = 0;
        for(let j=0;j<5;j++){
            soma += matrizNotas[i][j];
        }
        console.log(`A média do carro ${vetorCarros[i].modelo} é ${soma/5}`);
    }
}

// Calcula a menor nota de cada avaliação
function menorNota(vetorCarros, matrizNotas){
    for(let i=0;i<4;i++) {
        let menor = matrizNotas[i][0];
        let modelo = vetorCarros[i].modelo;
        for(let j=0;j<5;j++){
            if(matrizNotas[i][j] < menor){
                menor = matrizNotas[i][j];
                modelo = vetorCarros[i].modelo;
            }
        }
        console.log(`O modelo com menor nota na avaliação ${j + 1} é ${modelo}`);
    }
}

// Calcula a menor média das avaliações
function menorMedia(vetorCarros){
    let menor = vetorCarros[0].media;
    for(let i=0;i<4;i++){
        if(vetorCarros[i].media < menor){
            menor = vetorCarros[i].media;
        }
    }
    console.log(`A menor média das avaliações é ${menor}`);
}

function main() {
    let vetorCarros = [];
    let matrizNotas = [];
    let opcao;
    do {
        opcao = Number(
            prompt(`Digite \n1. Cadastrar carros \n2. Avaliar carros \n3. Média dos carros \n4. Menor nota de cada avaliação \n5. Menor média das avaliações \n6. Sair`)
        );
        switch (opcao) {
            case 1:
                if (vetorCarros.length === 4) {
                    alert(`Quantidade de carros cadastrados atingida`);
                } else {
                    cadastraCarros(vetorCarros);
                }
                break;
            case 2:
                if (vetorCarros.length === 0) {
                    alert(`Cadastre os carros primeiro`);
                } else {
                    avaliaCarros(vetorCarros, matrizNotas);
                }
                break;
            case 3:
                if (vetorCarros.length === 0 || matrizNotas.length === 0) {
                    alert(`Cadastre os carros primeiro e avalie-os`);
                } else {
                    mediaCarros(vetorCarros, matrizNotas);
                }
                break;
            case 4:
                if (vetorCarros.length === 0 || matrizNotas.length === 0) {
                    alert(`Cadastre os carros primeiro e avalie-os`);
                } else {
                    menorNota(vetorCarros, matrizNotas);
                }
                break;
            case 5:
                if (vetorCarros.length === 0 || matrizNotas.length === 0) {
                    alert(`Cadastre os carros primeiro e avalie-os`);
                } else {
                    menorMedia(vetorCarros, matrizNotas);
                }
                break;
            case 6:
                alert(`Programa encerrado`);
                break;
            default:
                alert(`Opção inválida`);
        }
    } while (opcao !== 6);
}

main();
