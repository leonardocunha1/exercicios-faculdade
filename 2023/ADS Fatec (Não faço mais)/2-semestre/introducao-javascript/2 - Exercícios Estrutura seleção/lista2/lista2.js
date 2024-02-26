function exercicio01 () {
    let nota1 = parseFloat(document.getElementById("num1").value)
    let nota2 = parseFloat(document.getElementById("num2").value)
    let nota3 = parseFloat(document.getElementById("num3").value)
    let nota4 = parseFloat(document.getElementById("num4").value)
    let media = (nota1 + nota2 + nota3 + nota4)/4
    let mensagem
    if (media >= 0 && media < 7) {
        mensagem = `Você foi reprovado com média ${media}`
    }
    else if (media >= 7 && media <= 10) {
        mensagem = `Você foi aprovado com média ${media}`
    }
    document.getElementById("resultadoex1").innerHTML = mensagem
}
function exercicio05 () {
    let escolha = parseFloat(document.getElementById("escolha").value)
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let resultado = null
    let mensagem
    switch (escolha) {
        case 1:
            resultado = (num1 + num2)/2
            mensagem = `(${num1} + ${num2})/2 = `
            break
        case 2:
            if (num1 >= num2) {
                resultado = num1 - num2
                mensagem = `${num1} - ${num2} = `
            }
            else {
                resultado = num2 - num1
                mensagem = `${num2} - ${num1} = `
            }
            break
        case 3:
            resultado = num1 * num2
            mensagem = `${num1} * ${num2} = `
            break
        case 4:
            if (num2 != 0) {
                resultado = num1/num2
                mensagem = `A divisão do ${num1} pelo ${num2} é `
            }
            else {
                mensagem = `Não existe divisão por zero!`
            }
            break
        default:
            mensagem = "Escolha inválida"
    }
    if (resultado != null) {
         document.getElementById("resultado").innerHTML = `${mensagem} ${resultado}`
    }
    else {
        document.getElementById("resultado").innerHTML = `${mensagem}`
    }

    // document.getElementById("resultado").innerHTML = `${mensagem} ${resultado}`
    
    //olhar o "select" no html para abrir a lista de seleção 
}
function exercicio15 () {
    let tipo = parseFloat(document.getElementById("tipo").value)
    let valor = parseFloat(document.getElementById("valor").value)
    let rendi = null
    
    if (tipo = 1 && valor > 0) {
        rendi = valor * 1.03
    }
    else if (tipo = 2 & valor > 0) {
        rendi = valor * 1.04
    }

    if (rendi != null) {
        document.getElementById("resultadoex15").innerHTML = `Valor corrigido após um mês de investimento: R$${rendi}`
    }
    else {
        document.getElementById("resultadoex15").innerHTML = `Você inseriu valores inválidos, refaça novamente`
    }
}
function exercicio16 () {
    let preco = parseFloat(document.getElementById("preco").value)
    let desconto = null

    if (preco > 0 && preco <= 30) {
        desconto = 0
    }
    else if (preco > 30 && preco <= 100) {
        desconto = 10
    }
    else if (preco > 100) {
        desconto = 15
    }

    let valdesconto = preco * (desconto/100)
    let novopreco = preco - valdesconto
    
    if (desconto != null && valdesconto > 0) {
        document.getElementById("resultadoex16").innerHTML = `Valor do desconto: R$${valdesconto}<br>Novo preço: R$${novopreco}`
    }
    else if (desconto != null && valdesconto == 0) {
        document.getElementById("resultadoex16").innerHTML = `Não houve descontos no seu produto`
    }
    else {
        document.getElementById("resultadoex16").innerHTML = `Preço inválido. Digite um valor positivo`
    }
}
function exercicio17 () {
    let senha = parseFloat(document.getElementById("senha").value)
    if (senha == 4531) {
        document.getElementById("resultadoex17").innerHTML = `Acesso permitido`
    }
    else {
        document.getElementById("resultadoex17").innerHTML = `Acesso negado. Senha incorreta!`
    }
}
function exercicio18 () {
    let idade = parseFloat(document.getElementById("idade").value)
    let mensagem
    if (idade <= 0) {
        mensagem = `Não existe idade negativa. Refaça com valores válidos!`
    }
    else {
        if (idade > 0 && idade < 18) {
            mensagem = `Você ainda é barriga verde`
        }
        else if (idade >= 18) {
            mensagem = `Você já pode ser preso. Rs`
        }
    }
    document.getElementById("resultadoex18").innerHTML = mensagem 
}
function exercicio19 () {
    let sexo = parseFloat(document.getElementById("sexo").value)
    let altura = parseFloat(document.getElementById("altura").value)
    let pesoideal
    if (altura > 0) {
        if (sexo == 1) {
            pesoideal = (72.7*altura) - 58
        }
        else {
            pesoideal = (62.1*altura) - 44.7
        }
        document.getElementById("resultadoex19").innerHTML = `Seu peso ideal para o seu sexo é ${pesoideal.toFixed(2)} quilos`
    }
    else {
        document.getElementById("resultadoex19").innerHTML = `Altura inválida`
    }  
}
function exercicio20 () {
    let idade = parseFloat(document.getElementById("idade").value)
    let mensagem
    if (idade <= 0) {
        mensagem = `Valor inválido. Não existe idade negativa`
    }
    else if (idade > 0 && idade < 5) {
        mensagem = `Não foi especificado a idade que precisa aparecer`
    }
    else if (idade >= 5 && idade <= 7) {
        mensagem = `Categoria Infantil`
    }
    else if (idade >= 8 && idade <= 10) {
        mensagem = `Categoria Juvenil`
    }
    else if (idade >= 11 && idade <= 15) {
        mensagem = `Categoria Adolescente`
    }
    else if (idade >= 16 && idade <= 30) {
        mensagem = `Categoria Adulto`
    }
    else {
        mensagem = `Categoria Senior`
    }
    document.getElementById("resultadoex20").innerHTML = mensagem
}
function exercicio21 () {
    let codigo = parseFloat(document.getElementById("codigo").value)
    let mensagem
    if (codigo < 0 || codigo > 30) {
        mensagem = `Código inválido`
    }
    else if (codigo == 1) {
        mensagem = `Procedência: Região Sul`
    }
    else if (codigo == 2) {
        mensagem = `Procedência: Região Norte`
    }
    else if (codigo == 3) {
        mensagem = `Procedência: Região Leste`
    }
    else if (codigo == 4) {
        mensagem = `Procedência: Região Oeste`
    }
    else if (codigo == 5 || codigo == 6) {
        mensagem = `Procedência: Região Nordeste`
    }
    else if (codigo == 7 || codigo == 8 || codigo == 9) {
        mensagem = `Procedência: Região Sudeste`
    }
    else if (codigo >= 10 && codigo <= 20) {
        mensagem = `Procedência: Região Centro-oeste`
    }
    else if (codigo >= 21 && codigo <= 30) {
        mensagem = `Procedência: Região Nordeste`
    }
    document.getElementById("resultadoex21").innerHTML = mensagem
}
function exercicio22 () {
    let peso = parseFloat(document.getElementById("peso").value)
    let idade = parseFloat(document.getElementById("idade").value)
    let grupo = null
    if (peso > 0 && peso <= 60) {
        if (idade > 0 && idade < 20) {
            grupo = 9
        }
        else if (idade >= 20 && idade <= 50) {
            grupo = 6
        }
        else if (idade > 50) {
            grupo = 3
        }
    }
    else if (peso > 60 && peso <= 90) {
        if (idade > 0 && idade < 20) {
            grupo = 8
        }
        else if (idade >= 20 && idade <= 50) {
            grupo = 5
        }
        else if (idade > 50) {
            grupo = 2
        }
    }
    else if (peso > 90) {
        if (idade > 0 && idade < 20) {
            grupo = 7
        }
        else if (idade >= 20 && idade <= 50) {
            grupo = 4
        }
        else if (idade > 50) {
            grupo = 1
        }
    }

    if (grupo != null) {
        document.getElementById("resultadoex22").innerHTML = `Você pertence ao grupo de risco ${grupo}`
    }
    else {
        document.getElementById("resultadoex22").innerHTML = `Valores inválidos, refaça com idade > 0 e peso > 0`
    }
}
function exercicio23 () {
    let codigo = parseFloat(document.getElementById("codigo").value)
    let qtd = parseFloat(document.getElementById("qtd").value)
    let precoun
    let total = null
    let desconto
    
    switch (codigo) {
        case 1: 
            precoun = 10
            break
        case 2: 
            precoun = 15
            break
        case 3: 
            precoun = 20
            break   
        case 4: 
            precoun = 30
            break               
    }

    if (qtd > 0) {
        total = precoun * qtd
    }

    if (total > 0 && total <= 250) {
        desconto = 5
    }
    else if (total > 250 && total < 500) {
        desconto = 10
    }
    else if (total >= 500) {
        desconto = 15
    }

    let valdesconto = total*((100-desconto)/100)


    if (total != null) {
        document.getElementById("resultadoex23").innerHTML = `Valor unitário: R$${precoun}<br>Preço total da nota: R$${total}<br>Preço final com desconto: R$${valdesconto}`
    }
    else {
        document.getElementById("resultadoex23").innerHTML = `Você inseriu valores inválidos, refaça novamente`
    }
}
function exercicio24 () {
    let categoria = parseFloat(document.getElementById("tipo").value)
    let situacao  = parseFloat(document.getElementById("sit").value)
    let valor = parseFloat(document.getElementById("valor").value)
    let aumento
    let imposto
    let mensagem
    if (valor <= 0) {
        document.getElementById("resultadoex24").innerHTML = `Preço inválido. Coloque valores positivos`    
    }
    else {
        if (valor > 0 && valor <= 25) {
            switch(categoria) {
                case 1:
                    aumento = 5 
                    break
                case 2:
                    aumento = 8 
                    break
                case 3:
                    aumento = 10 
                    break
            }
        }
        else if (valor > 25) {
            switch(categoria) {
                case 1:
                    aumento = 12 
                    break
                case 2:
                    aumento = 15
                    break
                case 3:
                    aumento = 18 
                    break
            }
        }
        let valaumento = valor * (aumento/100)


        if (categoria == 2 || situacao == "r") {
            imposto = 5
        }
        else {
            imposto = 8
        }
        let valimposto = valor * (imposto/100)

        
        let novovalor = valor + valaumento - valimposto
        if (novovalor <= 50) {
            mensagem = `Produto Barato`
        }
        else if (novovalor > 50 && novovalor < 120) {
            mensagem = `Produto Normal`
        }
        else if (novovalor >= 120) {
            mensagem = `Produto Caro`
        }


        document.getElementById("resultadoex24").innerHTML = `Valor do aumento: R$${valaumento.toFixed(2)}<br>Valor do imposto: R$${valimposto.toFixed(2)}<br>Novo preço: R$${novovalor.toFixed(2)}<br>Classificação: ${mensagem}` 
    }
}
function exercicio25 () {
    let extra = parseFloat(document.getElementById("extra").value)
    let ausente  = parseFloat(document.getElementById("ausente").value)
    let premio
    if (extra < 0 || ausente < 0) {
        document.getElementById("resultadoex25").innerHTML = `Valores inválidos. Refaça novamente` 
    }
    else {
        let h = extra - ((2/3)*ausente)

        if (h >= 2400) {
            premio = 500
        }
        else if (h > 1800 && h < 2400) {
            premio = 400
        }
        else if (h >= 1200 && h <= 1800) {
            premio = 300
        }
        else if (h >= 600 && h < 1200) {
            premio = 200
        }
        else if (h < 600) {
            premio = 100
        }

        document.getElementById("resultadoex25").innerHTML = `Seu prêmio foi de R$${premio}`
    } 
}