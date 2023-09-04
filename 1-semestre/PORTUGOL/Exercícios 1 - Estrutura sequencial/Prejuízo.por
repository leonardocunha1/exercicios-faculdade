programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		real prestacao,acrescimo,desconto,final,prejuizo

		escreva ("Digite o valor da prestação em atraso: ")
		leia(prestacao)

		acrescimo = prestacao*1.1
		desconto = acrescimo*0.1

		final = acrescimo - desconto
		prejuizo = prestacao - final

		escreva ("O valor final a pagar é de ", mat.arredondar(final, 2), " reais e o prejuízo foi de ", mat.arredondar(prejuizo, 2), " reais")
		

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 467; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */