// modularize o programa de bike sempre passando o vetor como parâmetro
function cadastraBikes(vetor) {
    let objeto = {
        marca: prompt("Informe a marca da bike"),
        modelo: prompt("Informe o modelo da bike"),
        quadro: parseInt(prompt("Informe o tamanho do quadro da bike")),
        aro: parseInt(prompt("Informe o tamanho do aro da bike")),
        ano: parseInt(prompt("Informe o ano da bike")),
        preco: parseFloat(prompt("Informe o preço da bike"))
    }
    if (objeto.quadro < 0 || objeto.aro < 0 || objeto.ano < 0 || objeto.preco < 0) {
        console.log('Os valores do quadro, aro, ano e preço não podem ser negativos. A bike não foi cadastrada.');
    } else {
        vetor.push(objeto);
        console.log('Bike inserida com sucesso');
    }
}

// média de preço das bikes
function calculaMediaPrecos(vetor) {
    if (vetor.length === 0) {
        console.log(`Sem bikes no vetor`);
    } else {
        let soma = 0;
        for (let i = 0; i < vetor.length; i++) {
            soma = soma + vetor[i].preco;
        }
        console.log(`Média de preço das bikes ${soma / vetor.length}`);
    }
}

function calculaBikesAntigas(vetor) {
    if (vetor.length === 0) {
        console.log(`Sem bikes no vetor`);
    } else if (vetor.length < 3) {
        console.log(`Não há bikes suficientes para encontrar as mais antigas (menos de 3 bikes).`);
    } else {
        // bike(s) mais antiga(s)
        let maisAntiga = [vetor[0]];

        for (let i = 1; i < vetor.length; i++) {
            if (vetor[i].ano < maisAntiga[0].ano) {
                maisAntiga = [vetor[i]];
            } else if (vetor[i].ano === maisAntiga[0].ano) {
                maisAntiga.push(vetor[i]); // mais uma com o mesmo ano
            }
        }

        console.log(`Bike(s) mais antiga(s)`);
        console.log(maisAntiga);
    }
}

function calculaBikesCaloi(vetor) {
    if (vetor.length === 0) {
        console.log(`Sem bikes no vetor`);
    } else {
        // bikes da marca Caloi
        let caloi = [];

        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i].marca === 'CALOI') {
                caloi.push(vetor[i]);
            }
        }

        if (caloi.length === 0) {
            console.log(`Não há bikes da marca Caloi no vetor.`);
        } else {
            console.log(caloi);
        }
    }
}

function calculaBikesAro29(vetor) {
    if (vetor.length === 0) {
        console.log(`Sem bikes no vetor`);
    } else {
        // qtd de bikes aro 29
        let aro29 = 0;

        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i].aro === 29) {
                aro29++;
            }
        }

        console.log(`Quantidade de bikes aro 29 ${aro29}`);
    }
}

function calculaBikeMaiorQuadro(vetor) {
    if (vetor.length === 0) {
        console.log(`Sem bikes no vetor`);
    } else {
        // qual bike possui maior quadro, desconsidere empates
        let maiorQuadro = vetor[0];

        for (let i = 1; i < vetor.length; i++) {
            if (vetor[i].quadro > maiorQuadro.quadro) {
                maiorQuadro = vetor[i];
            }
        }

        console.log(maiorQuadro);
    }
}
function main() {
    let vetor = [];
    let opcao;

    do {
        opcao = Number(prompt("Informe a opção escolhida:  \n 1.Cadastra \n 2.Preço \n 3.Antiga \n 4.Caloi \n 5.Aro \n 6.Quadro \n 7. Sair"));
        switch (opcao) {
            case 1:
                cadastraBikes(vetor);
                break;
            case 2:
                calculaMediaPrecos(vetor);
                break;
            case 3:
                calculaBikesAntigas(vetor);
                break;
            case 4:
                calculaBikesCaloi(vetor);
                break;
            case 5:
                calculaBikesAro29(vetor);
                break;
            case 6:
                calculaBikeMaiorQuadro(vetor);
                break;
            case 7:
                alert('Programa será encerrado');
                break;
            default:
                alert('Opção inválida');
        }
    } while (opcao !== 7);

    console.log('Vetor após as operações:');
    console.log(vetor);   
}

