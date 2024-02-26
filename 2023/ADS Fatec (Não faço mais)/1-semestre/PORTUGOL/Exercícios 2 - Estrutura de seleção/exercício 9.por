programa
{
	
	funcao inicio()
	{
	real valor, x
	inteiro codigo

	escreva("Digite o valor do produto e escolha código/tipo do seu pagamento, respectivamente \n")
	leia (valor, codigo)
		
	se (codigo == 1) 
	{
		x = valor*0.9
		escreva ("O valor a ser pago com 10% de desconto utilizando dinheiro ou cheque é ", x, " reais")
	}
	senao
	{
		se (codigo==2) 
		{
			x = valor*0.95
			escreva ("O valor a ser pago com 5% de desconto utilizando cartão de crédito é ", x, " reais")
		}
		senao 
		{
			se (codigo==3)
			{
				x = valor/2
				escreva ("O valor a ser pago não terá desconto e terá um valor de ",valor, "reais e dividido em duas vezes com uma parcela de ", x, " reais")
			}
			senao
			{
				se (codigo==4)
				{
					x = (valor*1.1)/3
					escreva ("O valor a ser pago com um juros de 10% será",(valor*1.1), "reais e dividido em três vezes com uma parcela de ", x, " reais")	
				}
				senao
				{
					escreva ("Digite um código de 1 a 4 seu boçal do carai")
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
 * @POSICAO-CURSOR = 161; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */