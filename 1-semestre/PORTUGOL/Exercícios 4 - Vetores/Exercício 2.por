programa
{
	
	funcao inicio()
	{
		inteiro Vetor1[50]
		inteiro Vetor2[50]
		inteiro i
		para (i=0;i<5;i++){
			escreva("Digite o ",i+1,"° valor do vetor 1: ")
			leia(Vetor1[i])
		}
		para (i=0;i<5;i++){
			escreva("Digite o ",i+1,"° valor do vetor 2: ")
			leia(Vetor2[i])	
		}
		para (i=0;i<5;i++){
			escreva(Vetor1[i]+Vetor2[i],"\n")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 342; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */