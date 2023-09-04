programa
{
	
	funcao inicio()
	{
		inteiro num1,num2
		cadeia operacao
		real calculo, n2
		
		escreva ("Digite dois números e uma operação, respectivamente: \n")
		leia (num1,num2,operacao)
		
		se (operacao == "Adição" ou operacao == "adição" ou operacao == "ADIÇÃO")
		{
			calculo = num1 + num2
			escreva ("A resposta para sua escolha foi: ", calculo)	
		}
		senao 
		{
			se (operacao == "Subtração" ou operacao == "subtração" ou operacao == "SUBTRAÇÃO")
			{
				calculo = num1 - num2
				n2 = num2 - num1
				escreva ("A resposta para escolha foi: ", calculo, " ou ", n2)	
			}
			senao 
			{
				se (operacao == "Multiplicação" ou operacao == "multiplicação" ou operacao == "MULTIPLICAÇÃO") 
				{
				calculo = num1 * num2
				escreva ("A resposta para sua escolha foi: ", calculo)
				}
					senao
					{
						se (operacao == "Divisão" ou operacao == "divisão" ou operacao == "DIVISÃO")
						{
						calculo = num1 / num2
						n2 = num2 / num1
						escreva ("A resposta para escolha foi: ", calculo, " ou ", n2)	
						}
							senao 
							{
								escreva ("Resultado inválido. Digite as operações corretas (adição, subtração, multiplicação ou divisão)")
							}	
					}		
			}	
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1039; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */