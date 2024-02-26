programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		const inteiro tam = 5
		inteiro mat1[tam][tam],i,j,x,y,w
		para(i=0;i<tam;i++){
			para(j=0;j<tam;j++){
				mat1[i][j]=u.sorteia(1, 100)	
			}
		}
		//Escrevendo a matriz
		escreva("    Matriz 5x5\n--------------------\n")
		para(i=0;i<tam;i++){
			para(j=0;j<tam;j++){
				escreva(mat1[i][j]," ")
			}
			escreva("\n")
		}
		//Trocando a segunda e quinta linha
		para(j=0;j<tam;j++){
			x = mat1[1][j]
			mat1[1][j] = mat1[4][j]
			mat1[4][j] = x			
		}
		//Trocando a primeira e a quarta coluna
		para(i=0;i<tam;i++){
			y = mat1[i][0]
			mat1[i][0] = mat1[i][3]
			mat1[i][3] = y
		}
		//Trocando a diagonal principal com a secundária
		para(i=0;i<tam;i++){
			w = mat1[i][i]
			mat1[i][i] = mat1[i][4-i] //Basicamente foi uma adaptação do exercício 1 com o exercício 2
			mat1[i][4-i] = w
		}
		escreva("\nMatriz 5x5 ALTERADA\n--------------------\n")
		para(i=0;i<tam;i++){
			para(j=0;j<tam;j++){
				escreva(mat1[i][j]," ")
			}
			escreva("\n")
		}		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 655; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */