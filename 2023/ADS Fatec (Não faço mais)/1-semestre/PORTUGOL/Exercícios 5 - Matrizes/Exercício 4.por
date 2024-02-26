programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		inteiro mat1[5][5], i, j, x
		escreva("Matriz original\n")
		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
				mat1[i][j]=u.sorteia(1, 10)
				escreva(mat1[i][j]," ")
			}
			escreva("\n")
		}
		escreva("-----------------------\n")
		para(j=0;j<5;j++){
			x = mat1[1][j] //Tive que adicionar uma variável para guardar o valor da segunda linha da matriz antes de igualar uma linha da matriz com a outra
			mat1[1][j] = mat1[3][j]
			mat1[3][j] = x
		}
		escreva("Matriz com as linhas 2 e 4 trocadas\n")
		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
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
 * @POSICAO-CURSOR = 661; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */