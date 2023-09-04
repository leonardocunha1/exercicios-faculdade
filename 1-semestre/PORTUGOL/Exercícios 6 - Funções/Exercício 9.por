programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		inteiro i, j, matriz[20][20], num, r
		//Definindo a matriz
		para (i=0;i<20;i++){
			para(j=0;j<20;j++){
				matriz[i][j]=u.sorteia(1, 1000)
			}
		}
		escreva("DADOS DA TABELA 20x20\n")
		para (i=0;i<20;i++){
			para(j=0;j<20;j++){
				escreva(matriz[i][j], " ")
			}
			escreva ("\n")
		}
		escreva("\n----------------------------------------\n")		
		//Armazenando as entradas do usuário 
		para(i=0;i<5;i++){
			escreva("Digite um número: ")
			leia(num)
			r = ret(matriz,num)
			se (r != -1){
				escreva("O valor ", num, " está na linha ", r+1, "\n")
			}
			senao{
				escreva("O valor ", num, " não foi encontrando nesta matriz\n")
			}
		}
	}
	funcao inteiro ret(inteiro mat[][], inteiro valor)
	{
		inteiro i, j
		para(i=0;i<20;i++){
			para(j=0;j<20;j++){
				se (valor==mat[i][j]){
					retorne i
				}
			}
		}
		retorne -1
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 65; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */