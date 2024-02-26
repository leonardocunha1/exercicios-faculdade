programa
{
	
	funcao inicio()
	{
		real vetor[50]
		real media, soma
		inteiro i, cont, cont1, cont2
		soma = 0
		cont = 0
		cont1 = 0
		cont2 = 0
		para(i=0;i<30;i++){
			escreva("Digite a ",i+1,"° nota: ")
			leia(vetor[i])
			soma = soma + vetor[i]
			cont = cont + 1
		}
		media = soma/cont
		para(i=0;i<30;i++){
			se(vetor[i]>(1.1*media)){
				cont1 = cont1+1
			}
			se(vetor[i]<(0.9*media)){
				cont2 = cont2+1
			}	
		}
		escreva("Quantidade de notas acima de 10% da média: ",cont1,"\n")
		escreva("Quantidade de notas abaixo de 10% da média: ",cont2)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 502; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */