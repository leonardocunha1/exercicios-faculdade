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
    /*
    Faça um programa em JavaScript que realiza o seguinte:

    1. Crie um vetor para armazenar dados de 5 farmácias, incluindo código, nome e endereço.
    2. Garanta que não é possível criar duas farmácias com o mesmo código.

    3. Em seguida, crie um vetor para armazenar dados de 10 remédios, incluindo código da farmácia, nome do remédio, quantidade em estoque e preço.
    4. Não é possível cadastrar um remédio de uma farmácia que não exista.

    5. Efetue a compra de 5 remédios e atualize o estoque. Considere que a farmácia ou o remédio podem não existir, e, nesse caso, a compra é cancelada.
    */

    // Vetor para armazenar dados das farmácias
    let vetorFarmacia = [];

    // Laço para cadastrar 5 farmácias
    for (let i = 0; i < 5; i++) {
        let objetoFarmacia = {
            codigoFarmacia: Number(prompt(`Informe o código da farmácia ${i + 1}`)),
            nomeFarmacia: prompt(`Informe o nome da farmácia ${i + 1}`).toUpperCase(),
            enderecoFarmacia: prompt(`Informe o endereço da farmácia ${i + 1}`)
        };
    
        // Garante que o código da farmácia seja positivo
        while (objetoFarmacia.codigoFarmacia < 0) {
            objetoFarmacia.codigoFarmacia = Number(prompt(`Informe um valor positivo para o código`));
        }
    
        // Garante que não existam duas farmácias com o mesmo código
        while (vetorFarmacia.some(farmacia => farmacia.codigoFarmacia === objetoFarmacia.codigoFarmacia)) {
            objetoFarmacia.codigoFarmacia = Number(prompt(`Informe um código de farmácia que não exista`));
        }
        vetorFarmacia.push(objetoFarmacia);
    }

    // Vetor para armazenar dados dos remédios
    let remedios = [];
    
    // Laço para cadastrar 10 remédios
    for (let i = 0; i < 10; i++) {
        let objetoRemedio = {
            codFarmacia: Number(prompt(`Digite o código da farmácia`)),
            nomeRemedio: prompt(`Digite o nome do remédio`),
            qtdRemedio: parseInt(prompt(`Digite a quantidade do remédio`)),
            precoRemedio: parseFloat(prompt(`Digite o valor do remédio`))
        }
        
        // Garante que o código da farmácia seja válido
        while (objetoRemedio.codFarmacia < 0 || !vetorFarmacia.some(item => item.codigoFarmacia === objetoRemedio.codFarmacia)) {
            objetoRemedio.codFarmacia = Number(prompt(`Informe um código de farmácia válido`));
        }
        
        remedios.push(objetoRemedio);
    }

    // Laço para efetuar a compra de 5 remédios
    for (let i = 0; i < 5; i++) {
        let compra = {
            codigoCompra: parseInt(prompt(`Informe o código da farmácia`)),
            remedioCompra: prompt(`Informe o nome do remédio`)
        }
        
        // Encontra o remédio desejado
        let remedio = remedios.find(item => (item.codFarmacia === compra.codigoCompra && item.nomeRemedio === compra.remedioCompra));
        
        if (remedio) {
            let quantidadeCompra = parseInt(prompt(`Informe a quantidade que deseja comprar do remédio ${remedio.nomeRemedio}`));
            
            if (quantidadeCompra <= remedio.qtdRemedio) {
                remedio.qtdRemedio -= quantidadeCompra;
                alert(`Compra efetuada com sucesso. Valor total: R$ ${(quantidadeCompra * remedio.precoRemedio).toFixed(2)}.`);
            } else {
                alert(`Não há quantidade suficiente em estoque para a compra.`);
            }
        } else {
            alert(`Farmácia ou remédio não encontrado. Compra cancelada.`);
        }
    }
}

function exercicio03() {
    /*
    Faça um programa em JS que guarde em um vetor dados de 5  partidos políticos: código, nome, sigla, presidente, nro de políticos

    Em seguida, guarde em um vetor dados de 5 políticos: código do partido, nome do político, qtde de votos na eleição atual (inicie com 0) e cargo que ocupa

    Não é possível crias dois partidos com o mesmo código

    Não é possível cadastrar um político de um partido que não exista

    Ao final, inicie uma votação, faça o cadastro de 10 votos, e atualize a qtde de votos do político. Não é possível votar em candidato que não exista, votar em um candidato de um partido errado.

    Finalmente, mostrar os dados do político que teve mais votos.
    */

    //Cadastrar os partidos
    let vetPartidoPolitico = [];
    for (let i = 0; i < 5; i++) {
        let objPartidoPolitico = {
            codigo: parseInt(prompt(`Digite o código do partido político`)),
            nome: String(prompt(`Digite o nome do partido político`)),
            sigla: String(prompt(`Digite a sigla do partido político`)),
            presidente: String(prompt(`Digite o nome do presidente do partido`)),
            numPoliticos: parseInt(prompt(`Digite o número de políticos`))
        }
        //Verifica se o número de políticos é menor do que 0
        while (objPartidoPolitico.numPoliticos < 0) {
            objPartidoPolitico.numPoliticos = parseInt(prompt(`Digite um valor válido para a quantidade de políticos`));
        }
        // Verifica se já existe um partido com o mesmo código ou se ele é menor do que 0
        while (objPartidoPolitico.codigo < 0 || vetPartidoPolitico.some(partido => partido.codigo === objPartidoPolitico.codigo)) {
           objPartidoPolitico.codigo = parseInt(prompt(`Código inválido ou já existente. Digite outro código:`));
        }
        // Verifica se já existe uma sigla igual a outra
        while (vetPartidoPolitico.some(partido => partido.sigla === objPartidoPolitico.sigla)) {
            objPartidoPolitico.sigla = prompt(`Sigla já existente. Digite outra:`);
        }

        vetPartidoPolitico.push(objPartidoPolitico);
    }
    // Cadastrar os políticos
    let vetPolitico = [];
    for (let i = 0; i < 5; i++) {
        let objPolitico = {
            codigoPartido: parseInt(prompt(`Digite o código do partido do político`)),
            nome: String(prompt(`Digite o nome do político`)),
            qtdVotos: 0,
            cargo: String(prompt(`Digite o cargo do político`))
        }
        // Verifica se o partido do político existe
        while (!vetPartidoPolitico.some(item => item.codigo === objPolitico.codigoPartido)) {
            objPolitico.codigoPartido = parseInt(prompt(`Partido não encontrado, informe um já existente`));
        }
        // Verifica se já existe um político com o mesmo nome
        while (vetPolitico.some(item => item.nome === objPolitico.nome)) {
            objPolitico.nome = String(prompt(`Nome já existente, informe outro`))
        }

        vetPolitico.push(objPolitico);
        alert(`Político ${objPolitico.nome} cadastrado com sucesso`);
    }
    // Realizando 10 votos
    for (let i = 0; i < 10; i++) {
        let votacao = {
            partido: parseInt(prompt(`Informe o código do partido`)),
            nomeCandidato: prompt(`Informe o nome do candidato`)
        }
        let candidato = vetPolitico.find(politico => politico.codigoPartido === votacao.partido && politico.nome === votacao.nomeCandidato);

        if (candidato) {
            candidato.qtdVotos++;
            alert(`Voto registrado com sucesso para ${candidato.nome}`);
        } else {
            alert(`Candidato não encontrado. Voto não registrado.`);
        }

    }
    // Político com maior quantidade de votos
    let candidatoMaisVotado = vetPolitico[0];
    for (let i = 0; i < vetPolitico.length; i++) {
        if (vetPolitico[i].qtdVotos > candidatoMaisVotado.qtdVotos) {
            candidatoMaisVotado = vetPolitico[i]
        }
    }
    console.log(candidatoMaisVotado)
}





