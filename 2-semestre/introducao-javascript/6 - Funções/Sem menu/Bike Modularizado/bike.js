//Modularize este exercício de bike feito em objetos
/*Faça um programa em JavaScript que solicite ao usuário dados de 10 bikes. Cada bike deve conter informações como marca, modelo, quadro, aro, ano e preço. Após a entrada de dados, o programa deve calcular e exibir ao usuário:

1) a média de preço das bikes
2) qual a bike é mais antiga, deve-se considerar empates
3) quais as bikes são do marca Caloi
4) quantas bikes possuem aro 29
5) qual bike possui maior quadro, pode-se desconsiderar empates */

// Função para obter um valor positivo de entrada
function obterValorPositivo(mensagem) {
    let valor = Number(prompt(mensagem));
    while (valor < 0) {
        valor = Number(prompt("Informe um valor positivo:"));
    }
    return valor;
}

// Função para criar um objeto de bicicleta
function criarObjetoBike(numeroBike) {
    let objeto = {
        marcaBike: prompt(`Informe a marca da bike ${numeroBike}`).toUpperCase(),
        modeloBike: prompt(`Informe o modelo da bike ${numeroBike}`).toUpperCase(),
        quadro: obterValorPositivo(`Informe o quadro da bike ${numeroBike}`),
        aroBike: obterValorPositivo(`Informe o aro da bike ${numeroBike}`),
        yearBike: obterValorPositivo(`Informe o ano da bike ${numeroBike}`),
        priceBike: obterValorPositivo(`Informe o valor da bike ${numeroBike}`)
    };
    return objeto;
}

// Função para preencher o vetor de bicicletas
function preencherVetorBike() {
    let vetorBike = [];
    for (let i = 0; i < 3; i++) {
        let objeto = criarObjetoBike(i + 1);
        vetorBike.push(objeto);
        console.log(`Bike inserida com sucesso!`);
    }
    return vetorBike;
}

// Função para calcular a média dos preços das bicicletas
function calcularMediaPreco(vetorBike) {
    let acumuladorPrice = 0;
    for (let i = 0; i < vetorBike.length; i++) {
        acumuladorPrice += vetorBike[i].priceBike;
    }
    let mediaPrice = acumuladorPrice / vetorBike.length;
    return mediaPrice;
}

// Função para encontrar as bicicletas mais antigas
function encontrarBicicletasMaisAntigas(vetorBike) {
    let bicicletasMaisAntigas = [vetorBike[0]];
    for (let i = 1; i < vetorBike.length; i++) {
        if (vetorBike[i].yearBike < bicicletasMaisAntigas[0].yearBike) { //1990 < 2000 -> true. É o que está acontecendo neste if
            bicicletasMaisAntigas = [vetorBike[i]];
        } else if (vetorBike[i].yearBike == bicicletasMaisAntigas[0].yearBike) {
            bicicletasMaisAntigas.push(vetorBike[i]);
        }
    }
    return bicicletasMaisAntigas;
}

/*
// Função para encontrar as bicicletas da marca Caloi
function encontrarBicicletasCaloi(vetorBike) {
    let bikesCaloi = [];
    for (let i = 0; i < vetorBike.length; i++) {
        if (vetorBike[i].marcaBike == "CALOI") {
            bikesCaloi.push(vetorBike[i]);
        }
    }
    return bikesCaloi;
}
FIZ UTILIZANDO O FILTER, MUITO MELHOR E MAIS LEGÍVEL!*/
// Função para encontrar as bicicletas da marca Caloi usando .filter()
function encontrarBicicletasCaloi(vetorBike) {
    return vetorBike.filter(bike => bike.marcaBike === "CALOI");
}

// Função para contar as bicicletas com aro 29
function contarBicicletasAro29(vetorBike) {
    let countAro29 = 0;
    for (let i = 0; i < vetorBike.length; i++) {
        if (vetorBike[i].aroBike === 29) {
            countAro29++;
        }
    }
    return countAro29;
}

// Função para encontrar a bicicleta com o maior quadro
function encontrarMaiorQuadro(vetorBike) {
    let maiorQuadro = vetorBike[0];
    for (let i = 1; i < vetorBike.length; i++) {
        if (maiorQuadro.quadro < vetorBike[i].quadro) {
            maiorQuadro = vetorBike[i];
        }
    }
    return maiorQuadro;
}

// Chame a função para preencher o vetor de bicicletas
let vetorBike = preencherVetorBike();

// Chamar as funções e imprimir os resultados
let mediaPrice = calcularMediaPreco(vetorBike);
console.log(`O preço médio das bicicletas é ${mediaPrice}`);

let bikeIdade = encontrarBicicletasMaisAntigas(vetorBike);
console.log(`As bikes mais antigas são:`, bikeIdade);

// Chamar a função para encontrar bicicletas da marca Caloi
let bikesCaloi = encontrarBicicletasCaloi(vetorBike);
console.log("Bicicletas da marca Caloi:", bikesCaloi);

let countAro29 = contarBicicletasAro29(vetorBike);
console.log(`O número de bikes com aro 29 é: ${countAro29}`);

let maiorQuadro = encontrarMaiorQuadro(vetorBike);
console.log(`A bike com maior quadro é:`, maiorQuadro);

// Chame a função principal para executar o programa
//bikeModularizado();
