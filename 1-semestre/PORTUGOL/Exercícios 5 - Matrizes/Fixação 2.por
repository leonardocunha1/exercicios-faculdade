programa
{
	
	funcao inicio()
	{
		inteiro mat[3][3], linha, coluna
		real soma
		soma = 0
		escreva("\nLeitura da matriz\n")
		para(linha=0;linha<3;linha++){
			para(coluna=0;coluna<3;coluna++){
				escreva("Digite um valor: ")
				leia(mat[linha][coluna])
				//soma = soma + mat[linha][coluna]  poderia estar aqui também e apagar o para debaixo
			}
		}
		para(linha=0;linha<3;linha++){
			para(coluna=0;coluna<3;coluna++){
				soma = soma + mat[linha][coluna]//Pode ser utilizado apenas 1 para e colocar a soma nele
			}
		}
		escreva(soma)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 549; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */