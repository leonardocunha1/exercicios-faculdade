programa
{
	
	funcao inicio()
	{
	inteiro chute, numero

	escreva ("Digite o número a ser advinhado: ")
	leia (numero)

	faca 
	{
		escreva ("Informe um número: ")
		leia (chute)

		se (chute < numero)
		{
			escreva ("O seu chute foi baixo\n")
		}
		se (chute > numero)
		{
			escreva ("O seu chute foi alto\n")
		}
		se (chute == numero)
		{
			escreva ("Parabéns, vc acertou\n")
		}
	} enquanto (chute != numero)
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 197; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */