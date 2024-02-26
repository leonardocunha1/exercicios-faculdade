programa
{
	
	funcao inicio()
	{
		inteiro vetor[20], vetorpar[20], vetorimpar[20]
		inteiro i,par,impar
		par = 0
		impar = 0
		para(i=0;i<20;i++){
			escreva("Digite o ",i+1,"° vetor: ")
			leia(vetor[i])
		}
		para(i=0;i<20;i++){
			se (vetor[i] % 2 == 0){
				vetorpar[par]=vetor[i]
				par ++	
			}
			senao {
				vetorimpar[impar]=vetor[i]
				impar++		
			}
		}
		escreva("Vetor dos números pares: ")
		para(i=0;i<par;i++){
				escreva(vetorpar[i]," ")
		}
		escreva("\nVetor dos números ímpares: ")
		para(i=0;i<impar;i++){
				escreva(vetorimpar[i]," ")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 569; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */