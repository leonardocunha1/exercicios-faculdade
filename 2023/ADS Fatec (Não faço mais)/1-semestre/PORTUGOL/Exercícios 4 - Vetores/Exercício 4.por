programa
{
	
	funcao inicio()
	{
		inteiro vetor[30]
		inteiro i
		vetor[0]=1
		vetor[1]=1
		para(i=2;i<30;i++){
			vetor[i]=vetor[i-1]+vetor[i-2]
		}
		para(i=0;i<30;i++){
			escreva(vetor[i],"\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 214; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */