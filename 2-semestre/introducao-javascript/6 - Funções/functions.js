function exercicioexplicativo() {
    function soma1(a, b) {
        console.log(`Soma é ${a+b}`);
     };
     
     function soma2(a, b) {
         return (a+b);
     };
     
     function soma3() {
         let a = parseInt(prompt(`Informe o valor de A`));
         let b = parseInt(prompt(`Informe o valor de B`));
         return a + b;
     }
     
     function alteraIdade(idade) {
         idade = idade + 10;
         console.log(`Dentro da função ${idade}`);
     }
     
     function alteraVetor(vet) {
         vet[0] += 10;
         vet[1] += 10;
         vet[2] += 10;
         vet.push(13);
         console.log(`Vetor dentro da função ${vet}`)
     }
     

    soma1 (4, 8);
    console.log(`Soma é ${soma2(6,9)}`);
    //console.log(`Soma é ${soma3()}`);
     
    /*
    Passagem de parâmetro por valor -> passa-se o valor da variável
    Qual o efeito colateral disso? A mudança do valor da variável dentro da função não altera a variável de fora da função
    Obs. vale quando se passa como parâmetro um int, float, boolean ou um char, ou seja, um tipo primitivo de dados
    */
    let idade = 18;
    alteraIdade(idade);
    console.log(`Idade fora da função ${idade} <- Passagem de parâmetro por valor`);
    /*Para arrumar a idade, uma maneira seria colocar return idade na função alteraIdade e atribuir o alteraIdade(idade) a idade, ou seja: 
    idade = alteraIdade(idade)*/

    /*
    Passagem de parâmetro por referência -> passa-se a referência da variável
    Qual o efeito colateral disso? 
    */
    let vet = [];
    vet[0] = 10; vet[1] = 11; vet[2] = 12;
    alteraVetor(vet);
    console.log(`Vetor fora da função ${vet} <- Passagem de parâmetro por referência`);
}
// exercicioexplicativo();


//Modularize este exercício de bike feito em objetos
function bikeModularizado() {
    /*Faça um programa em JavaScript que solicite ao usuário dados de 10 bikes. Cada bike deve conter informações como marca, modelo, quadro, aro, ano e preço. Após a entrada de dados, o programa deve calcular e exibir ao usuário:

    1) a média de preço das bikes

    2) qual a bike é mais antiga, deve-se considerar empates

    3) quais as bikes são do marca Caloi

    4) quantas bikes possuem aro 29

    5) qual bike possui maior quadro, pode-se desconsiderar empates */

    function promptBike() {
        let objetoBike = {
            //Entrada de dados
            marcaBike: prompt(`Informe a marca da bike ${i+1}`).toUpperCase(),
            modeloBike: prompt(`Informe o modelo da bike ${i+1}`).toUpperCase(),
            quadroBike: parseInt(prompt(`Informe o quadro da bike ${i+1}`)),
            aroBike: Number(prompt(`Informe o aro da bike ${i+1}`)),
            yearBike: Number(prompt(`Informe o ano da bike ${i+1}`)),
            priceBike: Number(prompt(`Informe o valor da bike ${i+1}`))
}

    // let vetorBike = []
    // for (let i = 0; i < 10; i++) {
    //     let objetoBike = {
    //         //Entrada de dados
    //         marcaBike: prompt(`Informe a marca da bike ${i+1}`).toUpperCase(),
    //         modeloBike: prompt(`Informe o modelo da bike ${i+1}`).toUpperCase(),
    //         quadroBike: parseInt(prompt(`Informe o quadro da bike ${i+1}`)),
    //         aroBike: Number(prompt(`Informe o aro da bike ${i+1}`)),
    //         yearBike: Number(prompt(`Informe o ano da bike ${i+1}`)),
    //         priceBike: Number(prompt(`Informe o valor da bike ${i+1}`))
    // }

        //Validações
        while (objetoBike.quadroBike < 0) {
            objetoBike.quadroBike = Number(prompt(`Informe um valor positivo para o quadro`));
        }
        while (objetoBike.aroBike < 0) {
            objetoBike.aroBike = Number(prompt(`Informe um valor positivo para o aro`));
        }
        while (objetoBike.yearBike < 0) {
            objetoBike.yearBike = Number(prompt(`Informe um valor positivo para o ano`));
        }
        while (objetoBike.priceBike < 0) {
            objetoBike.priceBike = Number(prompt(`Informe um valor positivo para o preço`));
        }
        vetorBike.push(objetoBike);
        console.log(`Bike inserida com sucesso!`);
    }

    //Realizando a média dos preços das bicicletas
    let acumuladorPrice = 0;
    for (let i = 0; i < vetorBike.length; i++) {
        acumuladorPrice += vetorBike[i].priceBike;
    }
    let mediaPrice = acumuladorPrice / vetorBike.length;
    console.log(`O preço médio das bicicletas é ${mediaPrice}`);

    //Descobrindo a bike mais antiga
    let bikeIdade = [];
    bikeIdade[0] = vetorBike[0]; //Pegando todas as informações do objeto e não apenas o ano
    for (let i = 1; i < vetorBike.length; i++) {
        if (vetorBike[i].yearBike < bikeIdade[0].yearBike) {
            bikeIdade = []; //Zerando o vetor
            bikeIdade[0] = vetorBike[i];
        }
        else if (vetorBike[i].yearBike == bikeIdade[0].yearBike) {
            bikeIdade.push(vetorBike[i]); //Mais uma bike com o mesmo ano
        }
    }
    console.log(`As bikes mais antigas são:`, bikeIdade);
    //Explicando o que foi feito neste for: o vetor bikeIdade é zerado quando você encontra uma bicicleta mais antiga (ano menor) do que a que está armazenada nele. Isso garante que você esteja mantendo apenas as bicicletas mais antigas até aquele ponto e elimina qualquer bicicleta que seja menos antiga. Se houver um empate, todas as bicicletas empates são armazenadas em bikeIdade, garantindo que todas as bicicletas mais antigas sejam consideradas.


    //Descobrindo as bikes da marca Caloi
    let bikesCaloi = [];
    for (let i = 0; i < vetorBike.length; i++) {
        if (vetorBike[i].marcaBike == "CALOI") {
            bikesCaloi.push(vetorBike[i]);
        }
    }

    //Contabilizando as bikes aro 29
    let contBike29 = 0;
    for (let i = 0; i < vetorBike.length; i++) {
        if (vetorBike[i].aroBike == 29) {
            contBike29++;
        }
    }
    console.log(`O número de bikes com aro 29 é: ${countAro29}`);

    //Descobrindo o maior quadro da bike
    let maiorQuadro = vetorBike[0];
    for (let i = 1; i < vetorBike.length; i++) {
        if (maiorQuadro.quadroBike > vetorBike[i].quadroBike) {
            maiorQuadro = vetorBike[i];
        }
    }
    console.log(`A bike com maior quadro é: ${maiorQuadro}`);
}
