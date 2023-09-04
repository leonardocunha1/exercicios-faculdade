programa
{
	
	funcao inicio()
	{
		real frente,lado, area

		escreva ("Digite o valor em metros, respectivamente, da frente e do lado do terreno:\n")
		leia (frente, lado)

		enquanto (frente > 0 e lado > 0) {
			area = frente * lado
			escreva ("A área do terreno é de ", area, " m²")

			escreva ("\nDigite o valor em metros, respectivamente, da frente e do lado do terreno:\n")
			leia (frente, lado)
		}

		se (frente <= 0 ou lado <=0) {
			escreva ("Valor inválido, inicie novamente o programa fornecendo valores naturais com excessão do zero")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 552; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */