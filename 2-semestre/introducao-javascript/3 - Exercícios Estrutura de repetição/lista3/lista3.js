//SORTEAR NÚMEROS DECIMAIS ESTÁ EXPLICADO NO EXERCÍCIO 9!!!!
//NO EXERCÍCIO 10 ESTÁ EXPLICANDO O MATH.FLOOR E O MATH.RANDOM!! 
function exe1() {
    for (let i = 0; i<4; i++) {
        let a = Number(prompt("Digite o valor de A"))
        let b = Number(prompt("Digite o valor de B"))
        let c = Number(prompt("Digite o valor de C"))
        let d = Number(prompt("Digite o valor de D"))
    
        for (let i = 0; i < 2; i++) {
            if (a>b) { //troca a com b
                let aux = a
                a = b
                b = aux
            }
            if (b>c) { //troca b com c
                let aux = b
                b = c
                c = aux
            }
            if (c>d) { //troca c com d
                let aux = c
                c = d
                d = aux
            }      
        }
        console.log(`Ordem crescente ${a} ${b} ${c} ${d}`)
        console.log(`Ordem decrescente ${d} ${c} ${b} ${a}`)
    }
}
function exe2() {
    let valingresso = 5
    let qtd = 120
    const despesa = 200
    let corpo = `
    <table border="1">
        <thead>
            <tr>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Despesa</th>
                <th>Lucro</th>
            </tr>
        </thead>
        <tbody>`
    
    while (valingresso >= 1) {
        let lucro = qtd * valingresso - despesa
        corpo = corpo + `
            <tr> 
                <td>${valingresso.toFixed(2)}</td> 
                <td>${qtd}</td> 
                <td>${despesa}</td> 
                <td>${lucro.toFixed(2)}</td> 
            </tr>`
        valingresso = valingresso - 0.5
        qtd = qtd + 26 
    }
    
    corpo = corpo + `
        </tbody>
    </table>`
    
    document.getElementById('resultado').innerHTML = corpo
    
}
function exe3() {
    let acm1 = 0
    let acm2 = 0
    let acm3 = 0
    let acm4 = 0
    let acm5 = 0
    for (let i = 1; i <= 8; i++) {
        let idade = Number(prompt("Digite sua idade"))
        //Daria para usar o let idade = Math.floor(Math.random() * 101) + 1 que sortearia um número inteiro entre 1 e 100
        if (idade <= 0) {
            alert(`Valor inválido`)
        }
        else {
            if (idade <= 15) {
                acm1 = acm1 + 1
            }
            else if (idade > 15 && idade <= 30) {
                acm2 = acm2 + 1 
            }
            else if (idade > 30 && idade >= 45) {
                acm3 = acm3 + 1
            }
            else if (idade > 45 && idade <=60) {
                acm4 = acm4 + 1
            }
            else {
                acm5 = acm5 + 1
            }
        }
    }
    document.getElementById('resultado').innerHTML = `
    Há ${acm1} pessoas na 1° faixa etária<br>
    Há ${acm2} pessoas na 2° faixa etária<br>
    Há ${acm3} pessoas na 3° faixa etária<br>
    Há ${acm4} pessoas na 4° faixa etária<br>
    Há ${acm5} pessoas na 5° faixa etária<br>
    Há ${(acm1/8)*100}% de pessoas na 1° faixa etária<br>
    Há ${(acm5/8)*100}% de pessoas na 5° faixa etária`
}
function exe4() {
    let mensagem = ``
    let numero = parseFloat(document.getElementById("num").value)
    for (let i=1; i<=10;i++) {
        let multiplicacao = numero * i
        mensagem = mensagem + `${numero} x ${i} = ${multiplicacao}<br>`
    }
    document.getElementById("resultado").innerHTML = `Tabuada do ${numero}<br>${mensagem}`
}
function exe5() {
    let resposta = ``
    for (let i = 1; i <= 10; i++) {
        resposta = resposta + `
        <h1>Tabuada do ${i}</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Multiplicação</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>`
        for (let j = 1; j <= 10; j++) {
            let multiplicacao = i * j
            resposta = resposta + `
            <tr>
                <td>${i} x ${j}</td>
                <td>${multiplicacao}</td>
            </tr>`
        }
        resposta = resposta + `
            </tbody>
        </table>`
    }
    document.getElementById('resultado').innerHTML = resposta
}
function exe6() {
    // Inicializa as variáveis para armazenar os totais
    let totalavista = 0
    let totalaprazo = 0
    let totalcompras = 0

    // Loop para receber as transações
    for (let i = 1; i <= 15; i++) {
        let codigo = prompt("Digite o código da transação (V para à vista, P para a prazo) da transação " + i + ":")
        let valor = Math.random() * 10000 + 1 //Sorteando os valores de 1 até 10 mil <- facilita muito o exercício

        if (codigo == 'V' || codigo == 'v') {
            totalavista = totalavista + valor
        } 
        else if (codigo == 'P' || codigo == 'p') {
            totalaprazo = totalaprazo + valor
        }

        totalcompras = totalcompras + valor
    }

    // Calcula o valor da primeira prestação a prazo (em 3 vezes)
    let primeiraprestacao = totalaprazo / 3

    // Exibe os resultados
    let resultadoex = `Valor total das compras à vista: R$ ${totalavista.toFixed(2)}<br>`
    resultadoex = resultadoex + `Valor total das compras a prazo: R$ ${totalaprazo.toFixed(2)}<br>`
    resultadoex = resultadoex + `Valor total das compras efetuadas: R$ ${totalcompras.toFixed(2)}<br>`
    resultadoex = resultadoex + `Valor da primeira prestação das compras a prazo: R$ ${primeiraprestacao.toFixed(2)}`
    document.getElementById('resultado').innerHTML = resultadoex
}
function exe7() {
    let contidade = 0
    let cont2 = 0
    let acm = 0
    let contpeso = 0
    let mensagem = ``
    for (let i=1;i<=5;i++) {
        let altura = Number(prompt("Digite a altura da pessoa " + i + ":"))
        let idade = Math.random() * 100 + 1
        let peso = Math.random() * 200 + 1

        if (idade > 50) {
            contidade = contidade + 1
        }
        if (idade > 10 && idade < 20) {
            acm = acm + altura
            cont2 = cont2 + 1
        }
        if (peso < 40) {
            contpeso = contpeso + 1
        }
    }
    // Mensagem da quantidade de pessoas com idade superior a 50 anos
    if (contidade != 0) {
        mensagem = mensagem + `A quantidade de pessoas com idade superior a 50 anos é: ${contidade}<br>`
    }
    else {
        mensagem = mensagem + `Não há pessoas acima de 50 anos<br>`
    }

    // Cálculo da média e mensagem das alturas das pessoas com idade entre 10 e 20 anos
    if (cont2 != 0) {
        let media = acm/cont2
        mensagem = mensagem + `A média das alturas das pessoas com idade entre 10 e 20 anos é: ${media}<br>`
    }
    else {
        mensagem = mensagem + `Não há pessoas entre 10 e 20 anos<br>`
    }

    // Cálculo porcentagem de pessoas com peso inferior a 40kg 
    if (contpeso != 0) {
        mensagem = mensagem + `A porcentagem de pessoas abaixo de 40kg é ${(contpeso/5)*100}%`
    }
    else {
        mensagem = mensagem + `Não há pessoas abaixo de 40kg`
    }
    document.getElementById('resultado').innerHTML = mensagem
}
function exe8() {
    let contpessoa = 0
    let acmidade = 0
    let contidade = 0
    let conteye = 0
    let cont1 = 0
    let mensagem = ``
    for (let i=1;i<=6;i++){
        //Entrada de dados
        let idade = Math.random() * 100 + 1
        let peso = Math.random() * 90 + 1
        let altura = Number(prompt("Digite a altura da pessoa " + i + ":"))
        let coloreye = prompt("A - azul\nP - preto\nV - verde\nC - castanho\nDigite a cor dos olhos da pessoa " + i + ":")
        let colorhair = prompt("L - louro\nP - preto\nR - ruivo\nC - castanho\nDigite a cor dos olhos da pessoa " + i + ":")
        //Cálculos e operações
        if (idade > 50 && peso < 60) {
            contpessoa = contpessoa + 1
        }
        if (altura < 1.5) {
            acmidade = acmidade + idade
            contidade = contidade + 1
        }
        if (coloreye == 'A' || coloreye == 'a') {
            conteye = conteye + 1
        }
        if ((colorhair == 'R' || colorhair == 'r') && (coloreye != 'A' || coloreye != 'a')) {
            cont1 = cont1 + 1
        }
    }
    // Saída de dados
    if (contpessoa != 0) {
        mensagem = mensagem + `A quantidade de pessoas acima de 50 anos com peso menor que 60kg é: ${contpessoa}<br>`
    }
    else {
        mensagem = mensagem + `Não há pessoas acima de 50 anos com peso menor que 60kg<br>`
    }

    if (acmidade != 0) {
        mensagem = mensagem + `A média das idades das pessoas com altura inferior a 1,50 metros é: ${(acmidade/contidade).toFixed(2)}<br>`
    }
    else {
        mensagem = mensagem + `Não há pessoas com altura inferior a 1,50 metros<br>`
    }

    if (conteye != 0) {
        mensagem = mensagem + `Há ${((conteye/6)*100).toFixed(2)}% de pessoas com olhos azuis<br>`
    }
    else {
        mensagem = mensagem + `Não há pessoas de olhos azuis<br>`
    }

    if (cont1 != 0) {
        mensagem = mensagem + `Há ${cont1} ruivo(s) que não tem olhos azuis<br>`
    }
    else {
        mensagem = mensagem + `Não há ruivos que não possuem olhos azuis<br>`
    }
    document.getElementById('resultado').innerHTML = mensagem
}
function exe9() {
    let acmidade = 0
    let qtd = 0
    let acm = 0
    let acm1 = 0
    let mensagem = ``
    for(let i = 1; i <= 10; i++) {
        // Se o número for 2.9999, o Math.floor arredonda ele para 2, ou seja, o número inteiro mais baixo
        let idade = Math.floor(Math.random() * 101) + 1 //idade entre 1 e 100 anos
        let peso = Math.floor(Math.random() * 101) + 40 //gera números inteiros entre 40 e 140. Olhar explicação da fórmula no exercício 10
        let altura = Math.floor(Math.random() * 13) / 10 + 1; // gera núemro decimal com apenas uma casa depois da vírgula entre 1 e 2.2

        acmidade = acmidade + idade

        if (peso > 90 && altura < 1.5) {
            qtd = qtd + 1
        }
        if (altura > 1.9) {
            acm = acm + 1
            if (idade > 10 && idade < 30) {
                acm1 = acm1 + 1
            }
        }
    }
    mensagem = mensagem + `A média das idades é: ${(acmidade / 10).toFixed(0)} anos<br>`
    if (qtd != 0) {
        mensagem = mensagem + `A quantidade de pessoas com peso > 90 e altura < 1.5 metros é: ${qtd}<br>`
    }
    else {
        mensagem = mensagem + `Não há pessoas com peso > 90 e altura < 1.5 metros<br>`
    }
    if (acm1 != 0) {
        mensagem = mensagem + `A porcentagem de pessoas com 10 < idade < 30 entre os maiores de 1.9 metros é: ${((acm1/acm)*100).toFixed(2)}%`
    }
    else {
        mensagem = mensagem + `Não há pessoas entre 10 < idade < 30 e maiores de 1.9 metros`
    }
    document.getElementById('resultado').innerHTML = mensagem
}
function exe10() {
    let acm = 0
    let acm1 = 0
    let mensagem = ''
    
    for (let i = 1; i <= 10; i++) {
        let numero = Math.floor(Math.random() * 101) + 1 
        //O Math.floor ajusta o valor para o próximo decimal inteiro (em direção ao zero, ou seja, sempre para baixo e não para cima)
        //O Math.random() gera um número entre 0 e 1, como por exemplo 0.5254
        //O * 100 multiplica o número gerado pelo Math.random
        //Adiciona 1 ao número inteiro resultante. Isso ajusta a faixa de números para começar em 1 em vez de 0, para que o resultado final seja um número inteiro aleatório entre 1 e 100 e não 0 e 99
        let div = 0  // Inicializar div aqui

        // Acumulando os números pares
        if (numero % 2 == 0) {
            acm = acm + numero
        }

        // Acumulando os números primos
        for (let aux = 1; aux <= numero; aux++) {
            if (numero % aux == 0) {
                div = div + 1
            }
        }

        if (div == 2) { // Somando os números primos, pois se tiver mais de 2 divisores o número já não é primo 
            acm1 = acm1 + numero
        }
    }

    mensagem = mensagem + `A soma dos números pares é ${acm}<br>`
    mensagem = mensagem + `A soma dos números primos é ${acm1}`
    document.getElementById('resultado').innerHTML = mensagem
}
