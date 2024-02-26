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

// Função principal
function main() {
    let escolha;
    let vetorBike = [];
    do {
        
        escolha = prompt("Escolha uma opção (1-7):\n1. Inserir dados de uma bicicleta\n2. Calcular a média de preço das bicicletas\n3. Encontrar bicicletas mais antigas\n4. Encontrar bicicletas da marca Caloi\n5. Contar bicicletas com aro 29\n6. Encontrar a bicicleta com o maior quadro\n7. Sair do programa");

        switch (escolha) {
            case "1":
                vetorBike.push(criarObjetoBike(vetorBike.length + 1));
                console.log("Bike inserida com sucesso!");
                break;
            case "2":
                if (vetorBike.length === 0) {
                    console.log("Nenhuma bicicleta registrada. Registre pelo menos uma bicicleta antes de calcular a média de preço.");
                } else {
                    const mediaPrice = calcularMediaPreco(vetorBike);
                    console.log(`A média de preço das bicicletas é ${mediaPrice.toFixed(2)}`);
                }
                break;
            case "3":
                if (vetorBike.length === 0) {
                    console.log("Nenhuma bicicleta registrada. Registre pelo menos uma bicicleta antes de encontrar as bicicletas mais antigas.");
                } else {
                    const bicicletasMaisAntigas = encontrarBicicletasMaisAntigas(vetorBike);
                    console.log("As bicicletas mais antigas são:", bicicletasMaisAntigas);
                }
                break;
            case "4":
                if (vetorBike.length === 0) {
                    console.log("Nenhuma bicicleta registrada. Registre pelo menos uma bicicleta antes de encontrar bicicletas da marca Caloi.");
                } else {
                    const bikesCaloi = encontrarBicicletasCaloi(vetorBike);
                    console.log("Bicicletas da marca Caloi:", bikesCaloi);
                }
                break;
            case "5":
                if (vetorBike.length === 0) {
                    console.log("Nenhuma bicicleta registrada. Registre pelo menos uma bicicleta antes de contar bicicletas com aro 29.");
                } else {
                    const countAro29 = contarBicicletasAro29(vetorBike);
                    console.log(`O número de bicicletas com aro 29 é: ${countAro29}`);
                }
                break;
            case "6":
                if (vetorBike.length === 0) {
                    console.log("Nenhuma bicicleta registrada. Registre pelo menos uma bicicleta antes de encontrar a bicicleta com o maior quadro.");
                } else {
                    const maiorQuadro = encontrarMaiorQuadro(vetorBike);
                    console.log("A bicicleta com o maior quadro é:", maiorQuadro);
                }
                break;
            case "7":
                console.log("Encerrando o programa.");
                break;
            default:
                console.log("Opção inválida. Escolha novamente.");
                break;
        }
    } while (escolha !== "7");
}

main();
