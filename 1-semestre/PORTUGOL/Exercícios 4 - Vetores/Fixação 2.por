programa
{
	
	funcao inicio()
	{
		real VClasse[10]
		inteiro i, notaacima
		real soma, media
		soma = 0
		notaacima = 0
		para (i=0;i<10;i++){
			escreva("Digite a ", i+1, "° nota: ")
			leia(VClasse[i])
			soma = soma + VClasse[i]
		}
		media = soma / 10
		para (i=0;i<10;i++){
			se (VClasse[i]>media){
				notaacima = notaacima + 1
			}
		}
		escreva("Média: ", media,"\n")
		escreva("Quantidade: ", notaacima)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 419; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */