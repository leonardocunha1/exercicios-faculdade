programa
{
	
	funcao inicio()
	{
	
	inteiro num, i

	num = 5
		
	escreva ("A tabuada do 5 utilizando o para: \n")
	para (i=1;i<=10;i++)	
	{
		escreva (num, " x ", i, " = ", i*num, "\n")	
	}

	escreva ("A tabuada do 5 utilizando o enquanto: \n")
	i = 0
	enquanto (i<10)
	{
		i=i+1
		escreva (num, " x ", i, " = ", i*num, "\n")
	}

	escreva ("A tabuada do 5 utilizando o faça: \n")
	i = 0
	faca
	{
		i = i+1
		escreva (num, " x ", i, " = ", i*num, "\n")	
	} enquanto (i<10)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 476; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */