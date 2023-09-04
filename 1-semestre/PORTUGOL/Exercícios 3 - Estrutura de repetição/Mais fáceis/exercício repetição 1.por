programa
{
	
	funcao inicio()
	{
	real media, acm, mediaturma
	inteiro cont

		cont = 0
		acm = 0.0
		enquanto (cont<5)
		{
			escreva ("Digite a média do ", cont+1, "° aluno")
			leia (media)
			acm = acm + media
			cont = cont + 1
		}
		mediaturma = acm/5
		escreva ("Média da turma = ", mediaturma)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 169; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */