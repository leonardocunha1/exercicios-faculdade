programa
{
	
	funcao inicio()
	{
		real num1, num2
		inteiro operacao

		escreva ("Digite respectivamente dois números: \n")
		leia (num1, num2)
		escreva ("Digite a operação aritmética desejada: \n1-Para adição\n2- Para subtração\n3- Para multiplicação\n4- Para divisão\n")
		leia (operacao)

		escolha (operacao)
		{
			caso 1:
			escreva (num1+num2)
			pare
			caso 2:
			escreva (num1-num2, " ou ", num2-num1)
			pare
			caso 3:
			escreva (num1*num2)
			pare
			caso 4:
			escreva ((num1/num2)," ou ", (num2/num1))
			pare
			
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 523; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */