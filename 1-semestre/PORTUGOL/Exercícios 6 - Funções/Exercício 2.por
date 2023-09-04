programa
{
	
	funcao inicio()
	{
		inteiro num
		escreva("Digite um número inteiro: ")
		leia (num)
		mod(num)
	}
	funcao mod(inteiro numero)
	{
		se(numero % 6 == 0){
			escreva("O número ", numero, " é divisível por 6") 
		}
		senao{
			escreva("O número ", numero, " não é divisível por 6")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 128; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */