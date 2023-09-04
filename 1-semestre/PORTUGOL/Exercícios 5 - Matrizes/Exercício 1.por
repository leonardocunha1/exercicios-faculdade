programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		inteiro mat[5][5], i, j
		para (i=0;i<5;i++){
			para(j=0;j<5;j++){
				mat[i][j]=u.sorteia(1,10)
			}
		}
		escreva("\nMatriz 5x5\n")
		para (i=0;i<5;i++){
			para(j=0;j<5;j++){
				escreva(mat[i][j]," ")
			}
			escreva("\n")
		}
		escreva("\nDiagonal principal da matriz:\n")
		para (i=0;i<5;i++){
			para(j=0;j<5;j++){
				se (i==j){
					escreva(mat[i][j]," ")
				}
			}
		}
		escreva("\nOutra maneira:\n")
		para (i=0;i<5;i++){
			escreva(mat[i][i]," ")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 473; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */