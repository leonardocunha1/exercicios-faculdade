programa
{
	
	funcao inicio()
	{
		inteiro mat[3][3], linha, coluna
		escreva("Leitura da matriz\n")
		para(linha=0;linha<3;linha++){
			para(coluna=0;coluna<3;coluna++){
				escreva("Digite um valor: ")
				leia(mat[linha][coluna])
			}
		}
		escreva("\nEscrita da matriz\n")
		para(linha=0;linha<3;linha++){
			para(coluna=0;coluna<3;coluna++){
				escreva(mat[linha][coluna]," ")
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
 * @POSICAO-CURSOR = 79; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */