/*Faça um programa em JS que guarde em um vetor dados de 5  farmacias: código, Nome e endereço 
Não é possível crias duas farmácias com o mesmo código

Em seguida, guarde em um vetor dados de 10 remédios: código da farmácia, nome do remédio, qtde em estoque e preço
Não é possível cadastrar um remédio de uma farmácia que não exista

Ao final, efetive a compra de 5 remédios, e atualize o estoque. Considere que a farmácia ou o remédio podem não existir, e cancela a compra*/

// cadastra as farmácias
function cadastraFarmacia(vetorFarmacia){
    let objeto = {
        codigo: parseInt(prompt(`Informe o código da farmácia`)),
        nome: prompt(`Informe o nome da farmácia`),
        endereco: prompt(`Informe o endereço da farmácia`)
    }
    while (objeto.codigo < 0){
        objeto.codigo = parseInt(prompt(`Informe um valor positivo para o código da farmácia`))
    }
    while (vetorFarmacia.some( (item) => item.codigo === objeto.codigo )){
        objeto.codigo = parseInt(prompt(`Código já existente. Informe outro código`))
    }
    vetorFarmacia.push(objeto)
}

// cadastra os remédios
function cadastraRemedio(vetorFarmacia,vetorRemedio) {
    let objetoRemedio = {
        codFarmacia: Number(prompt(`Digite o código da farmácia`)),
        nomeRemedio: prompt(`Digite o nome do remédio`),
        qtdRemedio: parseInt(prompt(`Digite a quantidade do remédio`)),
        precoRemedio: parseFloat(prompt(`Digite o valor do remédio`))
    }
    
    // Garante que o código da farmácia seja válido
    while (objetoRemedio.codFarmacia < 0 || !vetorFarmacia.some(item => item.codigo === objetoRemedio.codFarmacia)) {
        objetoRemedio.codFarmacia = Number(prompt(`Informe um código de farmácia válido`));
    }   
    vetorRemedio.push(objetoRemedio);
}

// efetua a compra
function efetuaCompra(vetorRemedio) {
    let compra = {
        codigoCompra: parseInt(prompt(`Informe o código da farmácia`)),
        remedioCompra: prompt(`Informe o nome do remédio`)
    };
    let verificaRemedio = vetorRemedio.find(item => (item.codFarmacia === compra.codigoCompra && item.nomeRemedio === compra.remedioCompra));
    if (verificaRemedio) {
        let quantidadeCompra = parseInt(prompt(`Informe a quantidade que deseja comprar do remédio ${verificaRemedio.nomeRemedio}`));
        if (quantidadeCompra <= verificaRemedio.qtdRemedio) {
            verificaRemedio.qtdRemedio -= quantidadeCompra;
            alert(`Compra efetuada com sucesso. Valor total: R$ ${(quantidadeCompra * verificaRemedio.precoRemedio).toFixed(2)}.`);
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
                cadastraFarmacia(farmacias);
                break;
            case 2:
                if (farmacias.length === 0) {
                    alert("Não é possível cadastrar remédios sem nenhuma farmácia cadastrada.");
                } else {
                    cadastraRemedio(farmacias, remedios);
                }
                break;
            case 3:
                if (farmacias.length === 0) {
                    alert("Não é possível efetuar compras sem nenhuma farmácia cadastrada.");
                } else {
                    efetuaCompra(remedios);
                }
                break;
            case 0:
                alert("Programa finalizado");
                break;
            default:
                alert("Opção inválida");
        }
    } while (opcao != 0);
}


// Chama a função principal
// main();
