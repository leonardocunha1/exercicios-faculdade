programa
{
	
	funcao inicio()
	{
		inteiro mat1[3][3],mat2[3][3], i, j, mat3[3][3]
		escreva("\nLeitura da matriz 1\n")
		para(i=0;i<3;i++){
			para(j=0;j<3;j++){
				escreva("Digite um valor: ")
				leia(mat1[i][j])
			}
		}
		escreva("\nLeitura da matriz 2\n")
		para(i=0;i<3;i++){
			para(j=0;j<3;j++){
				escreva("Digite um valor: ")
				leia(mat2[i][j])
			}
		}
		escreva("\nSoma das duas matrizes\n")
		para(i=0;i<3;i++){
			para(j=0;j<3;j++){
				mat3[i][j]=mat1[i][j]+mat2[i][j]
				escreva(mat3[i][j]," ")
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
 * @POSICAO-CURSOR = 548; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */