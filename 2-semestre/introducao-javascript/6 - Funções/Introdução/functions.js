function exercicioexplicativo() {
    function soma1(a, b) {
        console.log(`Soma é ${a+b}`);
     };
     
     function soma2(a, b) {
         return (a+b);
     };
     
     function soma3() {
         let a = parseInt(prompt(`Informe o valor de A`));
         let b = parseInt(prompt(`Informe o valor de B`));
         return a + b;
     }
     
     function alteraIdade(idade) {
         idade = idade + 10;
         console.log(`Dentro da função ${idade}`);
     }
     
     function alteraVetor(vet) {
         vet[0] += 10;
         vet[1] += 10;
         vet[2] += 10;
         vet.push(13);
         console.log(`Vetor dentro da função ${vet}`)
     }
     

    soma1 (4, 8);
    console.log(`Soma é ${soma2(6,9)}`);
    //console.log(`Soma é ${soma3()}`);
     
    /*
    Passagem de parâmetro por valor -> passa-se o valor da variável
    Qual o efeito colateral disso? A mudança do valor da variável dentro da função não altera a variável de fora da função
    Obs. vale quando se passa como parâmetro um int, float, boolean ou um char, ou seja, um tipo primitivo de dados
    */
    let idade = 18;
    alteraIdade(idade);
    console.log(`Idade fora da função ${idade} <- Passagem de parâmetro por valor`);
    /*Para arrumar a idade, uma maneira seria colocar return idade na função alteraIdade e atribuir o alteraIdade(idade) a idade, ou seja: 
    idade = alteraIdade(idade)*/

    /*
    Passagem de parâmetro por referência -> passa-se a referência da variável
    Qual o efeito colateral disso? 
    */
    let vet = [];
    vet[0] = 10; vet[1] = 11; vet[2] = 12;
    alteraVetor(vet);
    console.log(`Vetor fora da função ${vet} <- Passagem de parâmetro por referência`);
}
// exercicioexplicativo();
