//Comandos vistos na aula: x.push(), x.lenght, x.indexOf()

function exsala1 () {
    let nota = []
    let maior
    let acmmedia = 0

    //Entrada de dados
    for (let i=1;i<=5;i++){
        nota.push(Number(prompt('Informe uma nota: ')))
    }

    //Cálculos e operações

    //Cálculo média
    for (let i = 0; i<nota.length;i++) { //o vetor começa no zero, então o i = 0 obrigatoriamente!
        acmmedia = acmmedia + nota[i]
    }

    //Cálculo maior número
    for (let i = 0; i<nota.length;i++) { //o vetor começa no zero, então o i = 0 obrigatoriamente!
        if (i == 0) {
            maior = nota[i]
        }
        else {
            if (nota[i] > maior) {
                maior = nota[i]
            }
        }
    }
    //OUTRA MANEIRA DE CALCULAR O MAIOR NÚMERO
    // maior = nota[0]
    // for (let i = 0; i<nota.length;i++) {
    //     if (nota[i] > maior) {
    //        maior = nota[i]
    //     }
    // }

    //Saída de dados
    console.log(`A média é ${acmmedia/nota.length}\nA maior nota é ${maior}`)
}

function exsala2() {
    let nota = []
    let nome = []
    let acmmedia = 0

    //Entrada de dados
    for (let i=1;i<=5;i++){
        nome.push(prompt('Digite o nome do aluno ' + i + ': '))
        nota.push(Number(prompt('Informe uma nota deste aluno: ')))
    }

    //Cálculos e operações

    //Cálculo média
    for (let i = 0; i<nota.length;i++) { //o vetor começa no zero, então o i = 0 obrigatoriamente!
        acmmedia = acmmedia + nota[i]
    }

    let maior = nota[0]
    let menor = nota[0]
    for (let i = 0; i<nota.length;i++) {
        //Cálculo maior número
        if (nota[i] > maior) {
           maior = nota[i]
        }
        //Cálculo menor número
        if (nota[i] < menor) {
            menor = nota[i]
         }
    }

    //Saída de dados
    console.log(`
    A média é ${acmmedia/nota.length}
    A maior nota foi do aluno ${nome[nota.indexOf(maior)]} com uma nota de ${maior}
    A menor nota foi do aluno ${nome[nota.indexOf(menor)]} com uma nota de ${menor}`)
}

function ex1() {
    let numero = []
    //Obtendo e armazenando os números aleatórios no vetor
    for (let i = 0 ; i < 6; i++) {
        let numaleatorio = Math.floor(Math.random()*101) //Gerando números aleatórios entre 0 e 100
        numero.push(numaleatorio) //Armazenando o número aleatório obtido em um vetor
    }
    //Cálculos e operações
    let vetpar = [] //armazendando os valores pares do vetor em um novo vetor
    let vetimpar = [] //armazendando os valores ímpares do vetor em um novo vetor
    for (let i = 0 ; i < numero.length; i++) {
        if (numero[i] % 2 == 0) {
            vetpar.push(numero[i])
        }
        else {
            vetimpar.push(numero[i])
        }
    }
    //Saída de dados
    console.log(`
    Números pares: ${vetpar}
    Quantidade de números pares: ${vetpar.length}
    Números ímpares: ${vetimpar}
    Quantidade de números ímpares: ${vetimpar.length}
    `)
}

function ex2() {
    let numero = []
    //Obtendo e armazenando os números aleatórios no vetor
    for (let i = 0 ; i < 7; i++) {
        let numaleatorio = Math.floor(Math.random()*100) + 1 //Gerando números aleatórios entre 1 e 100
        numero.push(numaleatorio) //Armazenando o número aleatório obtido em um vetor
    }
    //Cálculos e operações
    let vetmult2 = []
    let vetmult3 = []
    let vetmult2e3 = []
    for (let i = 0 ; i < numero.length; i++) {
        if (numero[i] % 2 == 0) {
            vetmult2.push(numero[i])
        }
        if (numero[i] % 3 == 0) {
            vetmult3.push(numero[i])
        }
        if (numero[i] % 2 == 0 && numero[i] % 3 == 0) {
            vetmult2e3.push(numero[i])
        }
    }
    //Saída de dados
    console.log(`
    Múltiplos de 2: ${vetmult2}
    Múltipos de 3: ${vetmult3}
    Múltipos de 2 e 3: ${vetmult2e3}
    `)
}



function ex4() {
    let numero = []
    //Obtendo e armazenando os números aleatórios no vetor
    for (let i = 0 ; i < 7; i++) {
        numero.push(Math.floor(Math.random()*6) + 25) //número aleatório entre 25 e 30
    }
    //Verificando se há valores iguais a 30 no vetor
    let iguais30 = []
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] == 30) {
            iguais30.push(i)
        }
    }
    if (iguais30.length > 0) {
        console.log(`
        A(s) posição(ões) que possui(em) valor(es) igual(is) a 30 é(são): ${iguais30}
        `) 
    }
    else {
        console.log(`Não possui valores iguais a 30 neste vetor`)
    }  
}

function ex5() {
    let logica = []
    for (let i = 0 ; i < 15; i++) {
        logica.push(Number(prompt(`Digite o número da matrícula do aluno na matéria de Lógica: `)))
    }

    let ling = []
    for (let i = 0 ; i < 10; i++) {
        ling.push(Number(prompt(`Digite o número da matrícula do aluno na matéria de Ling. Prog: `)))
    }

    let matigual = []
    for (let i = 0 ; i < logica.length; i++) {
        for (let j = 0 ; j < ling.length; j++) {
            if (logica[i] == ling[j]) {
                matigual.push(logica[i]) //também poderia ser ling[i], pois os valores são os mesmos nesta condição
            }
        }
    }
    if (matigual.length > 0) {
        console.log(`O número das matrículas que aparecem nos dois vetores são: ${matigual}`)
    }
    else {
        console.log(`Não há matrículas iguais nos dois vetores`)
    }
}

function ex6() {
    //Entrada de dados
    let nome = []
    for (let i = 0; i < 10; i++) {
        nome.push(prompt(`Digite o nome do ${i + 1}° vendedor: `))
    }

    let vendas = []
    for (let i = 0; i < nome.length; i++) {
        vendas.push(parseFloat(prompt(`Digite o total de venda do ${i + 1}° vendedor: `)))
    }

    let comissao = []
    for (let i = 0; i < nome.length; i++) {
        comissao.push(parseFloat(prompt(`Digite o percentual da comissão do ${i + 1}° vendedor: `)))
    }
    //Cálculo valor comissão de cada vendedor e o total das vendas
    let valcomissao = []
    let totalvendas = 0
    for (let i = 0; i < nome.length; i++) {
        valcomissao.push((comissao[i]/100) * vendas[i])
        totalvendas = totalvendas + vendas[i]
    }
    //Cálculo maior e menor valor de comissão a receber
    let maior = valcomissao[0]
    let menor = valcomissao[0]
    for (let i = 0; i < nome.length; i++) {
        if (valcomissao[i] > maior) {
            maior = valcomissao[i]
        }
        if (valcomissao[i] < menor) {
            menor = valcomissao[i]
        }        
    }
    //Saída de dados
    for (let i = 0; i < nome.length; i++) {
        console.log(`O Vendedor ${nome[i]} receberá R$${valcomissao[i].toFixed(2)} de comissão`)
    }
    console.log(`
    O total de vendas foi de R$${totalvendas.toFixed(2)}
    O maior valor de comissão a receber será do vendedor ${nome[valcomissao.indexOf(maior)]} no valor de R$${maior}
    O menor valor de comissão a receber será do vendedor ${nome[valcomissao.indexOf(menor)]} no valor de R$${menor}`)
}

function ex7() {
    let vetor = []
    for (let i=0;i<10;i++) {
        vetor.push(Math.random()*21 - 10) //Numero aleatório gerado entre -10 e 10
    }
    let contador = 0
    let soma = 0
    for (let i=0;i<vetor.length;i++) {
        if (vetor[i] < 0) {
            contador++
        }
        if (vetor[i] > 0) {
            soma = soma + vetor[i]
        }
    }
    console.log(`
    Há ${contador} números negativos neste vetor
    A soma dos números positivos é ${soma.toFixed(2)}`)
}

function ex8() {
    let nome = []
    for (let i=0;i<7;i++) {
        nome.push(prompt(`Digite o nome do ${i+1}° aluno: `))
    }
    let media = []
    for (let i=0;i<nome.length;i++) {
        media.push(Math.floor(Math.random()*10) + 1) //Gerando número aleatório entre 1 e 10 (incluindo 1 e 10)
    }
    let maior = media[0]
    for (let i=0;i<nome.length;i++) {
        if (media[i] > maior) {
            maior = media[i]
        }
        if (media[i] < 7 ) { //nota que o aluno 
            let restante = 7 - media[i]
            console.log(`O ${nome[i]} precisa tirar ${restante} para passar no exame`)
        }
    }
    console.log(`O ${nome[media.indexOf(maior)]} teve a maior média (${maior})`)
}
