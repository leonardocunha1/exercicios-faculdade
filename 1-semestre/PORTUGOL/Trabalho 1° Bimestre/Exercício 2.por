programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
	//Leonardo Henrique Oliveira Cunha
	//Victor Hugo Braga Oliveira
	//Declaração de variáveis
	real A,B,C, maior, menor1, menor2

	//Leitura de dados
	escreva ("Digite o valor do lado A do triângulo em centímetros: ")
	leia (A)
	escreva ("Digite o valor do lado B do triângulo em centímetros: ")
	leia (B)
	escreva ("Digite o valor do lado C do triângulo em centímetros: ")
	leia (C)
	limpa()

	//Cálculos e operações
	//Descobrindo o maior lado
	se (A<=0 ou B<=0 ou C<=0)
	{
		escreva ("Digite valores válidos para a resolução deste exercício")
	}
	senao
	{
		se (A>B e A>C)
		{
			maior = A
			menor1 = B
			menor2 = C
		}
		senao se (B>A e B>C)
		{
			maior = B
			menor1 = A
			menor2 = C
		}
		senao
		{
			maior = C
			menor1 = A
			menor2 = B
		}
		
	//Analisando o tipo de triângulo formado e saída de dados
		se (maior >= (menor1 + menor2))
		{
			escreva ("Nenhum triângulo é formado")
		}
		senao se ((maior*maior) == ((menor1*menor1) + (menor2*menor2)))
		{
			escreva ("Um triângulo retângulo é formado")
		}
		senao se ((maior*maior) > ((menor1*menor1) + (menor2*menor2)))
		{
			escreva ("Um triângulo obtusângulo é formado")	
		}
		senao
		{
			escreva ("Um triângulo acutângulo é formado")
		}		
	}
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 451; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */