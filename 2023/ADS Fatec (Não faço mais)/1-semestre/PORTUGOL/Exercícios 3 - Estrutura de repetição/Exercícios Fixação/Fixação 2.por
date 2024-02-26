programa
{
	
	funcao inicio()
	{
		inteiro cont, num,par
		
		real media, soma

		cont = 0
		soma = 0.0
		par = 0 
		
		enquanto (cont>=0)
		{
			escreva ("Digite um número: ")
			leia (num)
			cont = cont + 1
			
			se (num % 2 == 0 e num !=0)
			{
				soma = soma + num
				par = par + 1 
			}
			se (num == 0)
			{
				pare
			}	
		}
		
		se (soma != 0)
		{
			media = (soma)/(par)
			escreva ("A média dos números pares é ",media)	
		}
		senao 
		{
			escreva ("Não foi digitado nenhum número par")
		}
	} 	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 317; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */