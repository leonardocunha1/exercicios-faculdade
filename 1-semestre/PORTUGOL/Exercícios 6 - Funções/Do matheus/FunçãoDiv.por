programa
{
	
	funcao inicio()
	{
		inteiro a, b, resultado

		leia(a)
		leia(b)
		resultado = div(a,b)
		escreva(resultado)
	}

	funcao inteiro div(inteiro x, inteiro y)
	{
		inteiro aux, cont
		cont = 0
		aux = x
		enquanto (x>=y){
			aux = aux - y
			cont ++
		}

		retorne cont
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 249; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */