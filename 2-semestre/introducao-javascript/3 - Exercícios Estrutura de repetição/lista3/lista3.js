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
    let despesa = 200
    while (valingresso >= 1) {
        let lucro = qtd * valingresso - despesa
        console.log(`Valor do ingresso: R$${valingresso}`)
        console.log(`Quantidade de ingresso: ${qtd} unidades`)
        console.log(`Valor do lucro: ${lucro} reais`)
        
        valingresso = valingresso - 0.5
        qtd = qtd + 26 
    }
}
