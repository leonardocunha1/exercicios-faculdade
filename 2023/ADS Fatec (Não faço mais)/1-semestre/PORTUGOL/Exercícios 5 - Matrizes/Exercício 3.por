programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		inteiro mat[3][4], i, j, soma, somalinha, somacoluna
		soma = 0
		somalinha = 0
		somacoluna = 0
		para (i=0;i<3;i++){
			para(j=0;j<4;j++){
				mat[i][j]=u.sorteia(1,10)
				se(mat[i][j] % 2 != 0){
					 soma = soma + mat[i][j]
				}
			}
		}
		escreva("\nMATRIZ\n----------------------\n")
		para (i=0;i<3;i++){
			para(j=0;j<4;j++){
				escreva(mat[i][j]," ")
			}
			escreva("\n")
		}
		//Cálculo da linha
		escreva("\nSOMA DE CADA LINHA\n----------------------")
		para (i=0;i<3;i++){
			para(j=0;j<4;j++){
				somalinha = somalinha +mat[i][j]
			}
			escreva("\nA soma da linha ",i+1," é: ",somalinha)
			somalinha = 0
		}
		//Cálculo dps ímpares
		escreva("\n\nSOMA NÚMEROS ÍMPARES\n----------------------")
		escreva("\nA soma dos números ímpares é: ",soma)
		//Cálculo da coluna
		escreva("\n\nSOMA DE CADA COLUNA\n----------------------")
		para (j=0;j<4;j++){
			para(i=0;i<3;i++){
				somacoluna = somacoluna +mat[i][j]
			}
			escreva("\nA soma da coluna ",j+1," é: ",somacoluna)
			somacoluna = 0
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1001; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */