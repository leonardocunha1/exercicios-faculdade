programa
{
	
	funcao inicio()
	{
		inteiro a,b,c
		escreva ("Digite três números: \n")
		leia (a,b,c)

		se (a<b+c e b<a+c e c<a+b) 
		{
			se (a==b e b==c) 
			{
				escreva ("Triângulo equilátero")
			}
			senao 
			{
				se (a==b ou b==c ou a==c) 
				{
					escreva ("Triângulo isósceles") 	
				}	
				senao 
				{
					escreva ("Triângulo escaleno")
				}
				
			}
		}	
		senao 
		{
			escreva ("Estes valores não formam um triângulo")	
		}
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 455; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */