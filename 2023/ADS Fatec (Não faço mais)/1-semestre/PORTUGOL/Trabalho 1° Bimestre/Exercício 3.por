programa
{
	funcao inicio()
	{
	//Leonardo Henrique Oliveira Cunha
	//Victor Hugo Braga Oliveira
	//Declaração de variaveis 	
	inteiro n, cont, acm, maior

	//Leitura de dados
	//Cálculos e operações
	acm= 0
	cont= 0
	maior= -999999999
	
	escreva ("Digite um número (0 para sair): ")
	leia (n)
	
	enquanto (n != 0)
	{	
		se (n > 10 e n < 50)
		{
			acm=acm+n
		}	
		se (n % 3 == 0)
		{
			cont = cont+1
		}	
		se (n > maior)
		{
			maior = n
		}
		escreva ("Digite um numero (0 para sair): ")
		leia (n)
	}
	
	limpa()

	//Saída de dados
	se (maior != -999999999)
	{
	escreva ("A soma dos números maiores que 10 e menores que 50 é ", acm, "\n")
	escreva ("Dos numeros digitados, ", cont, " são divisiveis por 3\n")
	escreva ("O maior número digitado foi ", maior, "\n")
	}
	senao 
	{
		escreva ("Você digitou zero logo de cara")
	}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 781; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */