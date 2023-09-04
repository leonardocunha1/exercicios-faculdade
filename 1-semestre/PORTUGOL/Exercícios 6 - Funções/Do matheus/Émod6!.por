programa
{
	
	funcao inicio()
	{
		inteiro a

		escreva("Digite um número inteiro qualquer: ")
		leia(a)
		mod6(a)
	}

	funcao mod6(inteiro x){

		se(x % 6 == 0){
			escreva(x, " | É divisivel por 6!")
		}
		senao{
			escreva(x, " | Não é divisivel por 6!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 238; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */