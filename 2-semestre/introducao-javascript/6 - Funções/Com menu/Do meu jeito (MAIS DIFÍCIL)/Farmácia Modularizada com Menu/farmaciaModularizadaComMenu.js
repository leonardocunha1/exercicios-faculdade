function criarFarmacia(numero,vetor) {
    let farmacia = {
        codigoFarmacia: Number(prompt(`Informe o código da farmácia ${numero}`)),
        nomeFarmacia: prompt(`Informe o nome da farmácia ${numero}`).toUpperCase(),
        enderecoFarmacia: prompt(`Informe o endereço da farmácia ${numero}`).toUpperCase()
    };
    while (farmacia.codigoFarmacia < 0) {
        farmacia.codigoFarmacia = Number(prompt("Informe um valor positivo para o código"));
    }
    while (vetor.some(f => f.codigoFarmacia === farmacia.codigoFarmacia)) {
        farmacia.codigoFarmacia = Number(prompt("Informe um código de farmácia que não exista"));
    };
    return farmacia;
}

function criarRemedio(farmacias) {
    let remedio = {
        codFarmacia: Number(prompt("Digite o código da farmácia")),
        nomeRemedio: prompt("Digite o nome do remédio"),
        qtdRemedio: parseInt(prompt("Digite a quantidade do remédio")),
        precoRemedio: parseFloat(prompt("Digite o valor do remédio"))
    };
    while (remedio.codFarmacia < 0 || !farmacias.some(f => f.codigoFarmacia === remedio.codFarmacia)) {
        remedio.codFarmacia = Number(prompt("Informe um código de farmácia válido"));
    }
    return remedio;
}

function cadastrarRemedios(farmacias) {
    let remedio = criarRemedio(farmacias);
    return remedio;
}

function efetuarCompra(remedios) {
    let compra = {
        codigoCompra: parseInt(prompt("Informe o código da farmácia")),
        remedioCompra: prompt("Informe o nome do remédio")
    };

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
        alert("Farmácia ou remédio não encontrado. Compra cancelada.");
    }
}
function main() {
    let opcao;
    let farmacias = [];
    let remedios = [];
    do {
        opcao = parseInt(prompt("Digite o número da opção desejada\n1. Cadastrar Farmácias\n2. Cadastrar Remédios\n3. Efetuar Compra\n0. Sair"));

        switch (opcao) {
            case 1:
                farmacias.push(criarFarmacia(farmacias.length + 1, farmacias));
                console.log(`Farmácia cadastrada com sucesso!`);
                break;
            case 2:
                if (farmacias.length > 0) {
                    remedios.push(cadastrarRemedios(farmacias));
                } else {
                    console.log("É necessário cadastrar pelo menos uma farmácia antes de adicionar remédios.");
                }
                break;
            case 3:
                if (farmacias.length > 0) {
                    efetuarCompra(remedios);
                } else {
                    console.log("É necessário cadastrar pelo menos uma farmácia antes de efetuar uma compra.");
                }
                break;
            case 0:
                console.log("Saindo do programa.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 0);
    console.log(farmacias);
}