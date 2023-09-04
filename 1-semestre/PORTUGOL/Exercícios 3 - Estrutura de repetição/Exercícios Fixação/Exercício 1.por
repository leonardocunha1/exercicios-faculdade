programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		cadeia vinho
		real nT,nB,nR,ntotal
		
	nT=0.0
	nB=0.0
	nR=0.0

	escreva ("Digite o tipo de vinho, sendo:\nT- para tinto\nB- para branco\nR- para rosê\nOu F para finalizar\n")
	leia (vinho)
	
	enquanto (vinho != "F")
	{
		se (vinho == "T")
		{
			nT=nT+1	
		}
		se (vinho == "B")
		{
			nB=nB+1
		}
		se (vinho == "R")
		{
			nR=nR+1
		}
	escreva ("Digite o tipo de vinho, sendo:\nT- para tinto\nB- para branco\nR- para rosê\nOu F para finalizar\n")
	leia (vinho)
	}

	ntotal = nT + nB + nR

	se (ntotal>0)
	{
		escreva ("O total de vinhos é de ",ntotal," unidades")
		escreva ("\nA porcentagem de vinho branco no estoque é de ", mat.arredondar((nB/ntotal)*100, 2),"%")
		escreva ("\nA porcentagem de vinho tinto no estoque é de ", mat.arredondar((nT/ntotal)*100, 2),"%")
		escreva ("\nA porcentagem de vinho rosê no estoque é de ", mat.arredondar((nR/ntotal)*100, 2),"%")
	}
	senao
		escreva ("O estoque não possui garrafas")	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 140; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */