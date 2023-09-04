programa
{
	
	funcao inicio()
	{
		inteiro atual, max, min
		real media

		escreva ("Digite, respectivamente, a quantidade atual, máxima e mínima do estoque de um produto: \n")
		leia (atual, max, min)

		media = (max+min)/2

		se (atual >= media)
		{
			 escreva ("Não efetuar compra")
		}
		senao
		{
			escreva("Efetuar compra")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 328; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */