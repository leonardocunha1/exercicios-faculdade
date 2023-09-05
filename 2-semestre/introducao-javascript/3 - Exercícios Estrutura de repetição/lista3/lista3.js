function exe1 () {
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

function exe2 () {
    let valingresso = 5
    let qtd = 120
    const despesa = 200
    let corpo = ``
    while (valingresso >= 1) {
        let lucro = qtd * valingresso - despesa
        // console.log(`Preço: R$${valingresso.toFixed(2)} Quantidade: ${qtd.toFixed(2)} Lucro: R$${lucro.toFixed(2)}`)
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
    document.getElementById('corpo').innerHTML = corpo
}

function exe5 () {
    let resposta = ``
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let multiplicacao = i * j
            resposta = resposta + `${i} x ${j} = ${multiplicacao}<br>`
            // FAZER O EXERCÍCIO UTILIZANDO TABELA EM CASA!!!
        }
        resposta = resposta + `<br>`
    }
    document.getElementById('resultado').innerHTML = resposta
}