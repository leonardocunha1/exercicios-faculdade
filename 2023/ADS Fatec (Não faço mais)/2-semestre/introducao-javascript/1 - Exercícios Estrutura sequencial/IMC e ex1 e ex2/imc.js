function calcular() {
    // Utilizando o recurso DOM (Document Object Model)
    // JavaScript não é tipado (não define os valores das variáveis (real,inteiro,booleano,etc))
    // JS é uma linguagem de programação interpretada (pelo navegador e também pela máquina V8, usando o Node.JS)

    // recupera o valor do peso digitado pelo usuário
    let peso = document.getElementById("peso").value
    // recupera o valor da altura digitada pelo usuário
    let altura = document.getElementById("altura").value
    // cálculo do IMC
    let imc = peso / (altura**2)
    // Mostrando os dados ao usuário
    // alert("o Seu IMC é de " + imc) maneira mais tradicional -> concatenando
    alert(`O IMC é ${imc.toFixed(2)}`) // outra maneira utilizando crases, conhecido como template string
    // retornando o imc para o html
    document.getElementById("resultado").innerHTML = `O IMC é ${imc.toFixed(2)}`
}

function sub() {
    let numero1 = document.getElementById("ex1num1").value
    let numero2 = document.getElementById("ex1num2").value
    let sub = numero1 - numero2
    
    alert(`A subtração deste números é ${sub.toFixed(2)}`)
    
    document.getElementById("subtracao").innerHTML = `A subtração deste números é ${sub.toFixed(2)}`
}

function mult() {
    let numero1 = document.getElementById("ex2num1").value
    let numero2 = document.getElementById("ex2num2").value
    let numero3 = document.getElementById("ex2num3").value
    let mult = numero1 * numero2 * numero3
    
    alert(`A subtração deste números é ${mult.toFixed(2)}`)
    
    document.getElementById("multiplicacao").innerHTML = `A multiplicação deste números é ${mult.toFixed(2)}`
}