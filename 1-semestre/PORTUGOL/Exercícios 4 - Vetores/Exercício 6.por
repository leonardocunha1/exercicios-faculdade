programa
{
	
	funcao inicio()
	{
		inteiro vetor1[30]
		inteiro i
		para(i=0;i<30;i++){
			escreva("Digite o ",i+1,"° número: ")
			leia(vetor1[i]) 
		}
		para(i=0;i<30;i++){
			se(i%2==0){
				vetor1[i]=vetor1[i]*2
			}
			senao{
				vetor1[i]=vetor1[i]*3
			}
		escreva (vetor1[i],"\n")	
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 305; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */