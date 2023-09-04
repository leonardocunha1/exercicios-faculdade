programa
{
	inclua biblioteca Util--> u
	
	funcao inicio()
	{
		inteiro i, matriz[6][6], j, r
		para(i=0;i<6;i++){
			para(j=0;j<6;j++){
				matriz[i][j]=u.sorteia(-10, 10)
			}
		}
		escreva("MATRIZ ORIGINAL!!!\n")
		para(i=0;i<6;i++){
			para(j=0;j<6;j++){
				escreva(matriz[i][j], " ")
			}
			escreva("\n")
		}
		escreva("-------------------------------\n")
		zero(matriz)
		escreva("MATRIZ MODIFICADA\n")
		para(i=0;i<6;i++){
			para(j=0;j<6;j++){
				escreva(matriz[i][j], " ")
			}
			escreva("\n")
		}					
	}
	funcao zero(inteiro mat[][]){
		inteiro i, j
		para(i=0;i<6;i++){
			para(j=0;j<6;j++){
				se (j!=i e i!=5-j e mat[i][j]<0){
					mat[i][j]=0
				}	
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 564; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */