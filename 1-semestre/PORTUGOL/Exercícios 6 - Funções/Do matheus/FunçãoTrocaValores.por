programa
{
	
	funcao inicio()
	{
		inteiro a,b

		a= 7
		b = 15
		escreva(a, " ", b, "\n")
		troca(a,b)
		escreva(a, " ", b, "\n")
	}

	funcao troca(inteiro &x, inteiro &y){ //E comercial serve para tratar o valor como referencia, ou seja, ele altera os valores do programa principal
		// sem o &, ele nao alteraria os valores do programa principal
		inteiro aux

		aux = x
		x = y
		y = aux
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 354; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */