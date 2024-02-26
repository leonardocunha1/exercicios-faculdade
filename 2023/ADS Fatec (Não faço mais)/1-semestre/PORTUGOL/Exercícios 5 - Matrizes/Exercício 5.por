programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		const inteiro TAM = 10
		inteiro mat1[TAM][TAM],i,j,vet1[TAM], vet2[TAM],cont, cont1
		cont = 0
		cont1 = 0
		//Dados da matriz
		para(i=0;i<TAM;i++){
			para(j=0;j<TAM;j++){
				mat1[i][j]=u.sorteia(1, 100)
			}
		}
		//Escrevendo a matriz
		escreva("    Matriz 10x10\n--------------------\n")
		para(i=0;i<TAM;i++){
			para(j=0;j<TAM;j++){
				escreva(mat1[i][j]," ")
			}
			escreva("\n")
		}
		//Pegando o maior elemento de cada linha
		escreva("\nMaiores elementos das linhas\n--------------------------\n")
		para(i=0;i<TAM;i++){
			para(j=0;j<TAM;j++){
				se (cont == 0){
					vet1[i] = mat1[i][j]
					cont++
				}
				senao se (mat1[i][j]>=vet1[i])
				{
					vet1[i] = mat1[i][j]
				}
			}
			cont = 0
			escreva("O maior elemento da linha ", i+1, " é: ",vet1[i]," ")
			escreva("\n")
		}
		//Pegando o menor elemento de cada coluna
		escreva("\nMenores elementos das colunas\n--------------------------\n")
		para(j=0;j<TAM;j++){
			para(i=0;i<TAM;i++){
				se (cont1 == 0){
					vet2[j] = mat1[i][j]
					cont1++
				}
				senao se (mat1[i][j]<=vet2[j])
				{
					vet2[j] = mat1[i][j]
				}
			}
			cont1 = 0
			escreva("O menor elemento da coluna ", j+1, " é: ",vet2[j]," ")
			escreva("\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 176; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */