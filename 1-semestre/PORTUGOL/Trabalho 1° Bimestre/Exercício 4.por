programa
{
	funcao inicio()
	{
	//Leonardo Henrique Oliveira Cunha
	//Victor Hugo Braga Oliveira
	// Declaração de variáveis
	inteiro num, a1, a2, a3
	
	//Leitura de dados
	escreva ("Digite um número natural qualquer: ")
	leia (num)
	limpa ()

	//Cálculos e operações
	a1 = 1
	a2 = 1
	a3 = a1 + a2

	se (num>0)
	{
		escreva ("Os elementos da sequência de Fibonacci até o número ", num, " são:\n")
		escreva ("1, 1")
		faca
		{
			se (num > 1)
			{
			escreva (", ",a3) 
			a1 = a2
			a2 = a3
			a3 = a2 + a1
			}
		} enquanto (a3 < num)
		escreva (".")
	}
	senao
	{
		escreva ("Não há sequência de Fibonacci para este número escolhido.\nEntre com um número natural diferente de zero")
	}
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 124; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */