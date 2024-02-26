programa
{
	
	funcao inicio()
	{
		//Leonardo Oliveira Cunha
		inteiro cpf[11], i, soma, verif1,soma1, verif2, soma2
		real resto, resto1
		//Armazenando os dígitos do CPF
		para(i=0;i<11;i++){
			escreva("Digite o ", i+1, "° número do CPF: ")
			leia(cpf[i])
		}
		//Verificando o 1°dígito 
		//Multiplicação dos 9 primeiros dígitos por 10-i
		soma = 0
		para(i=0;i<9;i++){
			soma = soma + cpf[i]*(10-i)
		}
		//Verificando o resto
		resto = soma % 11
		se (resto == 1 ou resto == 0){
			 verif1 = 0
		}
		senao {
			verif1 = 11 - resto
		}
		//Verificando o 2°dígito
		//Multiplicação dos 9 primeiros números por 11-i
		soma1 = 0
		para(i=0;i<9;i++){
			soma1 = soma1 + cpf[i]*(11-i)
		}
		//Somando a multiplicação dos 9 primeiros dígitos por 11-i com a soma do 1° dígito verificador * 2 
		soma2 = soma1 + (verif1*2)
		//Verificando o resto
		resto1 = soma2 % 11
		se (resto1==1 ou resto1==0){
			verif2 = 0
		}
		senao{
			verif2 = 11 - resto1
		}
		//Por fim, verificando se os dígitos verificadores são válidos
		se (cpf[9] == verif1 e cpf[10] == verif2){
			escreva("CPF válido")
		}
		senao{
			escreva("CPF inválido")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 79; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {cpf, 7, 10, 3};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */