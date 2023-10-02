function prova(){
    /*
    let nomes = []
    let estoque = []
    let classificacao = []
    // entrada de dados
    for(let i=0;i<3;i++){
        nomes.push(prompt(`Informe o nome do computador ${i+1}`))
        let auxEstoque
        do {
            auxEstoque = Number(prompt(`Informe o estoque do computador ${i+1}`))
        }
        while (auxEstoque < 0)
        estoque.push(auxEstoque)
        
        let auxCla
        do {
            auxCla = prompt(`Informe a classificação do computador ${i+1}`).toUpperCase()
        }
        while (auxCla != "GAMER" && auxCla != "NOTEBOOK" && auxCla != "DESKTOP")
        classificacao.push(auxCla)
    }
    */
   //Fazendo a entrada de dados da prova utilizando objetos
    let vetor = []
    for (let i=0;i<3;i++) {
        let objeto = {
            nome: prompt(`Informe o nome do computador ${i+1}`),
            estoque: Number(prompt(`Informe o estoque do computador ${i+1}`)),
            classificacao: prompt(`Informe a classificação do computador ${i+1}`).toUpperCase()
        }
        while (objeto.estoque < 0) {
            objeto.estoque = Number(prompt(`Informe estoque positivo do computador`))
        }
        while (objeto.classificacao != "GAMER" && objeto.classificacao != "NOTEBOOK" && objeto.classificacao != "DESKTOP") {
            objeto.classificacao = prompt(`Informe a classificação do computador corretamente`).toUpperCase()
        }
        vetor.push(objeto)
    }


    /*
    let nomeCompra
    let qtdCompra
    let clasCompra 
    for(let i=0;i<4;i++){
        nomeCompra = prompt(`Informe o nome do computador que deseja comprar`)
        qtdCompra = Number(prompt(`Informe a quantidade que deseja comprar`))
        clasCompra = prompt(`Informe a classificação do computador que deseja comprar`).toUpperCase()
        // verifica se o produto existe
        let achou = false
        for(let j=0;j<3;j++){ // para percorrer os vetores dos produtos
            console.log(nomeCompra, nomes[j], clasCompra, classificacao[j])
            if (nomeCompra == nomes[j] && clasCompra == classificacao[j]){
                achou = true
                // verifica se tem estoque
                if (qtdCompra <= estoque[j]){
                    console.log(`Venda realizada com sucesso`)
                    estoque[j] = estoque[j] - qtdCompra
                }
                else {
                    console.log(`Não tem estoque suficiente`)
                }
            }
        }
        if (!achou){
            console.log(`Produto não existe`)
        }
    }
    */
    //Fazendo a compra de outra maneira
    for(let i=0;i<4;i++) {
        let objetoCompra = {
            nomeCompra: prompt(`Informe o nome do computador que deseja comprar`),
            qtdCompra: Number(prompt(`Informe a quantidade que deseja comprar`)),
            clasCompra: prompt(`Informe a classificação do computador que deseja comprar`).toUpperCase()
        }
        let achou = false
        //Percorrendo os vetores dos produtos
        for(let j=0;j<3;j++) {
            if (objetoCompra.nomeCompra == vetor[j].nome && objetoCompra.clasCompra == vetor[j].classificacao) {
                achou = true
                //Verifica se tem em estoque
                if (objetoCompra.qtdCompra <= vetor[j].estoque) {
                    console.log(`Venda realizada com sucesso!`)
                    vetor[j].estoque = vetor[j].estoque - objetoCompra.qtdCompra
                }
                else {
                    console.log(`Quantidade de estoque insuficiente`)
                }
            }
        }
        if (!achou) {
            console.log(`Produto informado não existe`)
        }
    }


    let maiorEstoque = 0
    let posicaoMaiorEstoque = 0
    let menorEstoque = Infinity
    let posicaoMenorEstoque = 0
    let achou = false
    for(let i=1;i<3;i++){
        if (vetor[i].classificacao == "NOTEBOOK"){
            achou = true
            if (vetor[i].estoque > maiorEstoque){
                maiorEstoque = vetor[i].estoque
                posicaoMaiorEstoque = i
            }
            if (vetor[i].estoque > menorEstoque){
                menorEstoque = vetor[i].estoque
                posicaoMenorEstoque = i
            }
        }
    }
    if (achou){
        console.log(vetor[posicaoMaiorEstoque].nome)
        console.log(vetor[posicaoMenorEstoque].nome)
    }
}