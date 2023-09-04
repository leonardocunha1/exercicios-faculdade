programa
{
	
	funcao inicio()
	{
		inteiro vetor[20]
		inteiro i, menor, maior
		para(i=0;i<20;i++){
			escreva("Digite o ",i+1,"° número: ")
			leia (vetor[i])
		}
		maior = vetor[0]
		menor = vetor[0]
		para(i=0;i<20;i++){
			se (vetor[i]>maior){
				maior = vetor[i]
			}
			se (vetor[i]<menor){
				menor = vetor[i]
			}
		}
		escreva(maior," ",menor)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 169; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */