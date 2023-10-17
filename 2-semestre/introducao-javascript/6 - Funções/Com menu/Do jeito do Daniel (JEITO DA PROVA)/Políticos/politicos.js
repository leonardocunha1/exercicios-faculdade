/*Faça um programa em JS que guarde em um vetor dados de 5  partidos políticos: código, nome, sigla, presidente, nro de políticos

Em seguida, guarde em um vetor dados de 5 políticos: código do partido, nome do político, qtde de votos na eleição atual (inicie com 0) e cargo que ocupa

 Não é possível crias dois partidos com o mesmo código

 Não é possível cadastrar um político de um partido que não exista

Ao final, inicie uma votação, faça o cadastro de 10 votos, e atualize a qtde de votos do político. Não é possível votar em candidato que não exista, votar em um candidato de um partido errado.

Finalmente, mostrar os dados do político que teve mais votos. */


function cadastraPartido(vetPartidoPolitico) {
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
    alert('Partido cadastrado com sucesso')
}

function cadastraPolitico(vetPolitico, vetPartidoPolitico) {
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

function realizandoVotos(vetPolitico) {
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

function maisVotado(vetPolitico) {
    let maisVotos = vetPolitico[0];
    for (let i = 1; i < vetPolitico.length; i++) {
        if (vetPolitico[i].qtdVotos > maisVotos.qtdVotos) {
            maisVotos = vetPolitico[i];
        }
    }
    console.log(maisVotos);
}

function main() {
    let vetPartidoPolitico = [];
    let vetPolitico = [];
    let opcao;
    
    do {
        opcao = parseInt(prompt(`Digite a opção desejada:\n1. Cadastrar partido político\n2. Cadastrar político\n3. Realizar votação\n4. Mostrar candidato mais votado\n0. Sair`));
        
        switch (opcao) {
            case 1:
                cadastraPartido(vetPartidoPolitico);
                break;
            case 2:
                cadastraPolitico(vetPolitico, vetPartidoPolitico);
                break;
            case 3:
                if (vetPartidoPolitico.length === 0 || vetPolitico.length === 0) {
                    alert(`Você precisa cadastrar partidos políticos e políticos antes de realizar a votação.`);
                } else {
                    realizandoVotos(vetPolitico, vetPartidoPolitico);
                }
                break;
            case 4:
                if (vetPartidoPolitico.length === 0 || vetPolitico.length === 0) {
                    alert(`Você precisa cadastrar partidos políticos e políticos antes de verificar o candidato mais votado.`);
                } else {
                    maisVotado(vetPolitico);
                }
                break;
            case 0:
                alert(`Programa encerrado`);
                break;
            default:
                alert(`Opção inválida`);
        }
    } while (opcao !== 0);
}

