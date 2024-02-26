programa
{
	
	funcao inicio()
	{
	inteiro num, i

	escreva ("Digite um número inteiro qualquer: ")
	leia (num)

	enquanto (num != -1)
	{
		escreva ("\n\nDigite um número: ")
		leia (num)
		
		escreva("\nUtilizando o para: ")
    		para (i=1;i<=10;i++)
    		{
    	  		escreva(num, " x ", i, " = ", num*i, ", ")		
    		}

		i=0
    		escreva("\nUtilizando o enquanto: ")
    		enquanto (i<10)
    		{
    			i=i+1
    			escreva(num, " x ", i, " = ", num*i, ", ")
    		}

    		i=0
    		escreva("\nUtilizando o faça: ")
    		faca
    		{
    			i=i+1
    			escreva(num, " x ", i, " = ", num*i, ", ")
    		} enquanto (i<10) 
	}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 111; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */