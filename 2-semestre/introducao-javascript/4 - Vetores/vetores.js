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
    for (let i = 0; i<nota.length;i++) { //o vetor começa no zero, então o j = 0 obrigatoriamente!
        acmmedia = acmmedia + nota[i]
    }

    //Cálculo maior número
    for (let i = 0; i<nota.length;i++) { //o vetor começa no zero, então o j = 0 obrigatoriamente!
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
    for (let i = 0; i<nota.length;i++) { //o vetor começa no zero, então o j = 0 obrigatoriamente!
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