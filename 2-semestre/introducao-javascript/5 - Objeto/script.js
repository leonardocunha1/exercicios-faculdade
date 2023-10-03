function exemplo(){
    // variáveis simples
   // let nome = prompt("Informe o nome")
   // let estoque = prompt("Informe o estoque")
   // let classificacao = prompt("Informe a classificao")
    // objeto
    let objeto = {
        nome: prompt("Informe o nome"),
        estoque: Number(prompt("Informe o estoque")),
        classificacao: prompt("Informe a classificao")
    }
    console.log(objeto)
    console.log(objeto.nome)
    console.log(objeto.estoque)
    console.log(objeto.classificacao)

    // outra forma
    let objeto2 = new Object()
    objeto2.nome =  prompt("Informe o nome"),
    objeto2.estoque = Number(prompt("Informe o estoque")),
    objeto2.classificacao = prompt("Informe a classificao")
}


function exercicio01() {
    /*Faça um programa em JavaScript que solicite ao usuário dados de 10 bikes. Cada bike deve conter informações como marca, modelo, quadro, aro, ano e preço. Após a entrada de dados, o programa deve calcular e exibir ao usuário:

    1) a média de preço das bikes

    2) qual a bike é mais antiga, deve-se considerar empates

    3) quais as bikes são do marca Caloi

    4) quantas bikes possuem aro 29

    5) qual bike possui maior quadro, pode-se desconsiderar empates */

    let vetorBike = []
    for (let i = 0; i < 10; i++) {
        let objetoBike = {
            //Entrada de dados
            marcaBike: prompt(`Informe a marca da bike ${i+1}`).toUpperCase(),
            modeloBike: prompt(`Informe o modelo da bike ${i+1}`).toUpperCase(),
            quadroBike: parseInt(prompt(`Informe o quadro da bike ${i+1}`)),
            aroBike: Number(prompt(`Informe o aro da bike ${i+1}`)),
            yearBike: Number(prompt(`Informe o ano da bike ${i+1}`)),
            priceBike: Number(prompt(`Informe o valor da bike ${i+1}`))
        }

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

    function exercicio02() {
        /*Faça um programa em JS que guarde em um vetor dados de 5 farmacias: código, Nome e endereço 
        Obs* Não é possível crias duas farmácias com o mesmo código

        Em seguida, guarde em um vetor dados de 10 remédios: código da farmácia, nome do remédio, qtde em estoque e preço
        Não é possível cadastrar um remédio de uma farmácia que não exista

        Ao final, efetive a compra de 5 remédios, e atualize o estoque. Considere que a farmácia ou o remédio podem não existir, e cancela a compra*/
        let vetorFarmacia = [];

        for (let i = 0; i < 5; i++) {
            let objetoFarmacia = {
                //Entrada de dados
                codigoFarmacia: Number(prompt(`Informe o código da farmácia ${i + 1}`)),
                nomeFarmacia: prompt(`Informe o nome da farmácia ${i + 1}`).toUpperCase(),
                enderecoFarmacia: prompt(`Informe o endereço da farmácia ${i + 1}`)
            };
        
            // Validações
            while (objetoFarmacia.codigoFarmacia < 0) {
                objetoFarmacia.codigoFarmacia = Number(prompt(`Informe um valor positivo para o código`));
            }
        
            // Verificar se o código da farmácia já existe no vetor
           
            /*
            let codigoExistente = vetorFarmacia.some(farmacia => farmacia.codigoFarmacia == objetoFarmacia.codigoFarmacia);
        
            if (codigoExistente) {
                console.log("Esta farmácia já existe");
                i--; // Reverta o incremento para que a mesma posição seja solicitada novamente
            } else {
                // Se o código não existe, adicione o objeto ao vetor
                vetorFarmacia.push(objetoFarmacia);
            }*/
            
            while (vetorFarmacia.some(farmacia => farmacia.codigoFarmacia === objetoFarmacia.codigoFarmacia)) {
                objetoFarmacia.codigoFarmacia = Number(prompt(`Informe um código de farmácia que não exista`));
            }
            vetorFarmacia.push(objetoFarmacia);
            
        }
        
    }


