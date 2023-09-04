programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		inteiro numero, un, dez, cent, final

		escreva ("Digite um número de três dígitos: ")
		leia (numero)

		cent = numero/100
		un = numero % 10
		dez = numero % 100 / 10
	
		final = un*100+dez*10+cent

		escreva ("O número ao contrário é ", final)


		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 322; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */