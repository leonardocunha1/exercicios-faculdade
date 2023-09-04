programa
{
	
	funcao inicio()
	{
		inteiro cont, num,par
		
		real media, acm

		cont = 0
		acm = 0.0
		par = 0 
		
		enquanto (cont<10)
		{
			escreva ("Digite um número: ")
			leia (num)
			cont = cont + 1
			
			se (num % 2 == 0)
			{
				acm = acm + num
				par = par + 1 
			}		
		}
		media = (acm)/(par)
		escreva (media)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 210; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */