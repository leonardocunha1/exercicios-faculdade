programa
{
	
	funcao inicio()
	{
		real litros, valor
		cadeia tipo

		escreva ("Digite a quantidade de litros que foram vendidas: ")
		leia (litros)

		escreva ("Digite o tipo de combustível, A para álcool e G para gasolina: \n")
		leia (tipo)

		se (tipo == "A" ou tipo == "a")
		{
			se ((litros <= 20) e (litros > 0))
			{
				valor = 2.1*litros*0.097
				escreva ("O valor a ser pago é de ", valor, " reais")
			}
			senao 
			{
				valor = 2.1*litros*0.095
				escreva ("O valor a ser pago é de ", valor, " reais")
			}
		}
		se (tipo == "G" ou tipo == "g")
		{
			se ((litros <= 20) e (litros > 0))
			{
				valor = 3.3*litros*0.096
				escreva ("O valor a ser pago é de ", valor, " reais")
			}
			senao 
			{
				valor = 3.3*litros*0.094
				escreva ("O valor a ser pago é de ", valor, " reais")
			}
			
		}
		senao
		{
			escreva ("Digite A ou G seu merda")
		}
	}	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 566; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */