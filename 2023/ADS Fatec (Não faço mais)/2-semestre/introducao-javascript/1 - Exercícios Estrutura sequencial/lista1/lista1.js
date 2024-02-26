// Aluno: Leonardo Cunha
// Utilizei o alert em alguns exercícios para praticar
function ex03() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let divisao = num1 / num2
    alert(`A divisão de ${num1} por ${num2} é ${divisao.toFixed(2)}`)
    document.getElementById("resultadoex3").innerHTML = `A divisão de ${num1} por ${num2} é ${divisao.toFixed(2)}`
}

function ex04() {
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    let media = ((2 * nota1) + (3 * nota2)) / 5
    alert(`A média ponderada das notas é ${media.toFixed(2)}`)
    document.getElementById("resultadoex4").innerHTML = `A média ponderada das notas é ${media.toFixed(2)}`
}

function ex05() {
    let preco = document.getElementById("preco").value
    let novopreco = 0.9 * preco
    alert(`O valor com 10% de desconto é R$${novopreco.toFixed(2)}`)
    document.getElementById("resultadoex5").innerHTML = `O valor com 10% de desconto é R$${novopreco.toFixed(2)}`
}

function ex06() {
    // É POSSÍVEL UTILIZAR O 'Number' no lugar do parseFloat
    let fixo = parseFloat(document.getElementById("fixo").value)
    let venda = parseFloat(document.getElementById("venda").value)
    let comissao = 0.04 * venda
    let salario = fixo + comissao
    alert(`A comissão do vendedor será de R$${comissao.toFixed(2)} com um salário final de R$${salario.toFixed(2)}`)
    document.getElementById("resultadoex6").innerHTML = `A comissão do vendedor será de R$${comissao.toFixed(2)} com um salário final de R$${salario.toFixed(2)}`
}

function ex07() {
    let peso = parseFloat(document.getElementById("peso").value)
    let emag = 0.8 * peso
    let engord = 1.15 * peso
    alert(`A pessoa terá ${emag.toFixed(2)}kg se emagrecer e ${engord.toFixed(2)}kg se engordar`)
    document.getElementById("resultadoex7").innerHTML =`A pessoa terá ${emag.toFixed(2)}kg se emagrecer e ${engord.toFixed(2)}kg se engordar`
}

function ex08() {
    let peso = parseFloat(document.getElementById("peso").value)
    let gramas = 1000 * peso
    alert(`O peso convertido é de ${gramas}g`)
    document.getElementById("resultadoex8").innerHTML = `O peso convertido é de ${gramas}g`
}

function ex09() {
    let b1 = parseFloat(document.getElementById("b1").value)
    let b2 = parseFloat(document.getElementById("b2").value)
    let h = parseFloat(document.getElementById("h").value)
    let area = ((b1+b2)*h)/2
    alert(`A área é do trapézio é ${area}m²`)
    document.getElementById("resultadoex9").innerHTML = `A área é do trapézio é ${area}m²`
}

function ex10() {
    let l1 = parseFloat(document.getElementById("l1").value)
    let area = l1 ** 2
    alert(`A área é do quadrado é ${area}m²`)
    document.getElementById("resultadoex10").innerHTML = `A área do quadrado é ${area}m²`
}

function ex11() {
    let diag1 = parseFloat(document.getElementById("diag1").value)
    let diag2 = parseFloat(document.getElementById("diag2").value)
    let area = diag1 * diag2 / 2
    alert(`A área é do losango é ${area}m²`)
    document.getElementById("resultadoex11").innerHTML = `A área é do losango é ${area}m²`
}

function ex12() {
    let salmin = parseFloat(document.getElementById("salmin").value)
    let sal = parseFloat(document.getElementById("sal").value)
    let vezes = sal / salmin
    alert(`O funcionário recebe ${vezes}x o salário mínimo`)
    document.getElementById("resultadoex12").innerHTML = `O funcionário recebe ${vezes}x o salário mínimo`
}

function ex13() {
    let num = parseFloat(document.getElementById("num").value)
    let tabuada = `Tabuada do ${num}:\n`
    for (let i = 1; i <= 10; i++) {
        let resultado = num * i
        tabuada = tabuada + `<br>${num} x ${i} = ${resultado}` 
        // a variável tabuada é usada para construir uma string que contém/armazena a tabuada do número inserido pelo usuário a cada repetição do for, de modo que a string final contenha todas as linhas da tabuada formatadas. É a mesma coisa que aprendi na matéria do Jorge (concatenando as mensagens)
        // Também poderia ser usado tabuada += que é a mesma coisa que tabuada = tabuada + ...
    }
    document.getElementById("resultadoex13").innerHTML = tabuada
}

function ex14() {
    let nasc = parseFloat(document.getElementById("nasc").value)
    let ano = parseFloat(document.getElementById("ano").value)
    let anos = ano - nasc
    let meses = 12 * anos
    let semanas = 48 * anos
    let dias = 365 * anos
    document.getElementById("resultadoex14").innerHTML = `a)Idade em anos: ${anos}<br>b)Idade em meses: ${meses}<br>c)Idade em dias: ${dias}<br>d)Idade em semanas: ${semanas}`
}

function ex15() {
    let sal = parseFloat(document.getElementById("sal").value)
    let conta1 = parseFloat(document.getElementById("conta1").value)
    let conta2 = parseFloat(document.getElementById("conta2").value)
    let multa = 1.02 * conta1 + 1.02 * conta2
    let saldo = sal - multa
    document.getElementById("resultadoex15").innerHTML = `Restará R$${saldo} do salário de João`
}

function ex16() {
    let cat1 = parseFloat(document.getElementById("cat1").value)
    let cat2 = parseFloat(document.getElementById("cat2").value)
    let hip = ((cat1**2)+(cat2**2))**(1/2)
    document.getElementById("resultadoex16").innerHTML = `A hipotenusa é ${hip}`
}

function ex17() {
    let raio = parseFloat(document.getElementById("raio").value)
    let comp = 2 * Math.PI * raio
    let area = Math.PI * Math.pow(raio,2)
    let vol = (3*Math.PI*Math.pow(raio,3))/4
    document.getElementById("resultadoex17").innerHTML = `Área: ${area.toFixed(2)}cm²<br>Comprimento: ${comp.toFixed(2)}cm<br>Volume: ${vol.toFixed(2)}cm³`
}

function ex18() {
    let temp = parseFloat(document.getElementById("temp").value)
    let fahr = 1.8 * temp + 32 
    document.getElementById("resultadoex18").innerHTML = `Convertendo para Fahrenheit: ${fahr.toFixed(2)}`
}

function ex19() {
    let lado1 = parseFloat(document.getElementById("lado1").value)
    let lado2 = parseFloat(document.getElementById("lado2").value)
    let area = lado1 * lado2
    let pot = 18 * area
    document.getElementById("resultadoex19").innerHTML = `Área: ${area.toFixed(2)}m²<br>Potência de iluminação necessária: ${pot.toFixed(2)}W`
}

function ex20() {
    let ang = parseFloat(document.getElementById("ang").value)
    let comp = parseFloat(document.getElementById("comp").value)
    let conversao = Math.cos((ang * Math.PI)/180) //convertendo graus para radianos e depois calculando o cosseno dele
    let medida = comp / conversao //isolando a medida da escada 
    document.getElementById("resultadoex20").innerHTML = `Medida necessária: ${medida.toFixed(2)} metros`
    //Escrevi o raciocínio no papel para conferir se o resultado está correto: https://prnt.sc/Zj7PmzdJQ-CC ... E sim, a fórmula está correta depois de verificada
}

function ex21() {
    let salmin = parseFloat(document.getElementById("salmin").value)
    let nhoras = parseFloat(document.getElementById("nhoras").value)
    let nextra = parseFloat(document.getElementById("nextra").value)
    let valhora = salmin/8 //a)
    let valextra = salmin/4 //b)
    let bruto = nhoras * valhora //c)
    let salextra = nextra * valextra //d)
    let liquido = bruto + salextra
    document.getElementById("resultadoex21").innerHTML = `O salário a receber é de R$${liquido.toFixed(2)}`
}

function ex22() {
    let nlado = parseFloat(document.getElementById("nlado").value)
    let ndiag = (nlado*(nlado-3))/2
    document.getElementById("resultadoex22").innerHTML = `O número de diagonais do polígono de ${nlado} lados é ${ndiag}`
}

function ex23() {
    let ang1 = parseFloat(document.getElementById("ang1").value)
    let ang2 = parseFloat(document.getElementById("ang2").value)
    let ang3 = 180 - ang1 - ang2
    document.getElementById("resultadoex23").innerHTML = `O valor do terceiro ângulo do triângilo é ${ang3}`
}

function ex24() {
    let din = parseFloat(document.getElementById("din").value)
    document.getElementById("resultadoex24").innerHTML = `Valor em dólar: ${(din/1.8).toFixed(2)}<br>Valor em marco alemão: ${(din/2).toFixed(2)}<br>Valor em libra esterlina: ${(din/3.57).toFixed(2)}`
}

function ex25() {
    let hora = parseFloat(document.getElementById("hora").value)
    let min = parseFloat(document.getElementById("min").value)
    let convhora = hora*60
    let totalmin = convhora + min
    let convmin = totalmin * 60 
    document.getElementById("resultadoex25").innerHTML = `Hora digitada convertida em minutos: ${convhora}<br>Total dos minutos: ${totalmin}<br>Total dos minutos convetidos em segundos: ${convmin}`
}