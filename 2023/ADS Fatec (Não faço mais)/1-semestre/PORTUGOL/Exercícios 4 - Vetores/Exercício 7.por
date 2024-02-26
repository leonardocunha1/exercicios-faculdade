programa
{
	
	funcao inicio()
	{
		inteiro vetor[30],vetor2[30]
		inteiro i
		para(i=0;i<30;i++){
			escreva("Digite o ",i+1,"° número: ")
			leia(vetor[i])
		}
		para(i=0;i<30;i++){
			vetor2[i]= vetor[29-i]
			escreva(vetor2[i],"\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 239; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */