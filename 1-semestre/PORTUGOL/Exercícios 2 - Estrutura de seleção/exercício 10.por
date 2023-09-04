programa
{
	
	funcao inicio()
	{
	inteiro horas
	real valorhora, salario, extra
	
	escreva ("Digite a quantidade de horas tabalhadas no mês: ")
	leia (horas)
	
	escreva ("Digite o valor do salário por hora: ")
	leia (valorhora)
		
	se ((horas <= 160) e (horas > 0))
	{
		salario = valorhora * horas	
		escreva ("Seu salário total foi de ", salario, " reais") 
	}
	senao
	{
		se (horas > 160)
		{
			extra = valorhora * 1.5 * (horas - 160)
			salario = (valorhora * 160) + extra
			escreva ("Seu salário total foi de ", salario, " reais") 
		}
		senao
		{
			escreva ("Ação inválida. Digite uma quantidade de horas trabalhadas maior do que zero")
		}
	}
		


	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 266; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */