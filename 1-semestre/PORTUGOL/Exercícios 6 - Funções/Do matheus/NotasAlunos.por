programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		inteiro i,j, matriz[50][10], gabarito[10], maiorNota, menorNota, alunoAcima, notaAluno, notasAlunos[50], controleNotaMenor, controleNotaMaior
		real media, alunosAprovados

		para(i=0;i<50;i++){
			para(j=0;j<10;j++){
				matriz[i][j] = u.sorteia(1,5)//Gera uma matriz de números aleatorios entre 0 e 4, onde cada número equivale a resposta dada na prova, por exemplo, 0 = A, 1 = B...
			}
		}
		
		escreva("Digite o gabarito da prova: \nO gabarito deve ser fornecido no formato:  \n1 --> A, 2 --> B... 5 --> E\n") //Recebe um gabarito 
		para(i=0; i<10; i++){
			escreva("Questão ", i+1,": ")
			leia(gabarito[i])
		}

		notaAluno = 0
		para(i=0;i<50;i++){ //Armazena as notas dos Alunos
			para(j=0;j<10;j++){
				se(matriz[i][j] == gabarito[j]){
					notaAluno++
				}
			}
			notasAlunos[i] = notaAluno
		}

		controleNotaMenor = 0
		controleNotaMaior = 0
		
		para(i=0;i<50;i++){
			se (controleNotaMenor == 0){
				
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 990; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {gabarito, 7, 31, 8};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */