programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		//Aluno: Leonardo Oliveira Cunha  
		caracter gab[10], resp[50][10]
		inteiro i, j, nota[50], menor, maior, soma
		cadeia nome[50]
		real media, porc, acima6, cont
		//Guardando o gabarito da prova
		escreva("ÁREA DO PROFESSOR - GABARITO DA PROVA\n")
		para (i=0;i<10;i++){
			escreva("Digite o gabarito da questão número ", i+1, ": ")
			leia(gab[i])
		}
		escreva("----------------------------------------------------------\n")
		//Lendo os nomes e as respostas dos alunos
		escreva("INFORMAÇÕES DAS RESPOSTAS DOS ALUNOS\n")
		para (i=0;i<50;i++){
			escreva ("Digite o nome do ", i+1, "° aluno: ")
			leia (nome[i]) //lendo o nome
			para(j=0;j<10;j++){
				escreva ("Digite a resposta da questão ", j+1, " deste aluno: ")
				leia(resp[i][j]) //Lendo as respostas
			}
		}
		soma = 0 //Inicializando a soma das notas
		cont = 0 //Inicializando a quantidade de alunos
		//Somando as notas dos alunos
		para (i=0;i<50;i++){
			nota[i] = 0
			cont ++
			para(j=0;j<10;j++){
				se (gab[j]==resp[i][j]){
					 nota[i] = nota[i] + 1
				}
			}
			soma = soma + nota[i]
		}
		media = soma / cont
		maior = nota[0]
		menor = nota[0]
		acima6 = 0 //Inicializando as notas >= 6
		//Verificando as situações propostas no exercício	
		para (i=0;i<50;i++){
			se (nota[i] > maior){
				maior = nota[i]
			}
			se (nota[i] < menor){
				menor = nota[i]
			}
			se (nota[i] >= 6){
				acima6 = acima6 + 1
			}
		}
		porc = (acima6/cont)*100
		//Saída de dados
		escreva("----------------------------------------------------------\n")
		escreva("SAÍDA DE DADOS\n")
		escreva("A menor nota da turma foi: ", menor)
		escreva("\nA maior nota da turma foi: ", maior)  
		escreva("\nA média das notas da turma é: ", mat.arredondar(media, 2))
		se (acima6 == 0){
			escreva("\nNenhum aluno ficou acima da média")
		}
		senao se (acima6 == 1){
			escreva("\nApenas 1 aluno ficou acima da média")
		}
		senao {
			escreva("\n", acima6, " alunos ficaram acima da média")
		}
		escreva("\nA porcentagem de alunos aprovados é: ", mat.arredondar(porc, 2) , "%")
		escreva("\n----------------------------------------------------------")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1954; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */