programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		real peso, altura
		inteiro sexo
		 
		escreva ("Digite sua altura em metros: ")
		leia (altura)
		escreva ("Digite seu sexo, 1 para masculino e 2 para feminino \n")
		leia (sexo)

		se (sexo==1) 
		{
			peso = (72.7*altura)-58
			escreva ("Seu peso ideal é de ", mat.arredondar(peso, 2), " quilos")
		}
		senao 
		{
			se (sexo==2) 
			{
				peso = (62.1*altura)-44.7	
				escreva ("Seu peso ideal é de ",  mat.arredondar(peso, 2), " quilos")
			}
			senao
			{
				escreva ("Digite 1 ou 2 seu fdp")
			}
		}
			
		

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 594; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */