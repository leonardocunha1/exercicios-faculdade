programa
{
	inclua biblioteca Tipos --> tp
	inclua biblioteca Texto --> tx

	funcao inicio()
	{
		inteiro vetor[11], i
		caracter texto
		cadeia cpf
		
		escreva("Digite o número do CPF, sem pontuação: ")
		leia(cpf)
		para(i = 0; i<11; i++){
			texto = tx.obter_caracter(cpf, i)
			vetor[i] = tp.caracter_para_inteiro(texto)
		}

		para(i=0;i<11;i++){
			escreva(vetor[i], "\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 348; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */