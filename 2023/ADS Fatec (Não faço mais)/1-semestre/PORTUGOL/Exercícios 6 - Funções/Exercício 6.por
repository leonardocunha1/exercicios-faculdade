programa
{
	
	funcao inicio()
	{
		caracter letra
		inteiro r
		escreva("Digite um caractere (tanto maiúsculo quanto minúsculo): ")
		leia(letra)
		r = retorno(letra)
		escreva(r)
	}
	funcao inteiro retorno(caracter let)
	{
		inteiro ret
		se (let == 'a' ou let == 'e'ou let == 'i' ou let == 'o' ou let == 'u'){
			ret = 1
		}
		senao se (let == 'A' ou let == 'E'ou let == 'I' ou let == 'O' ou let == 'U'){
			ret = 2
		}
		senao{
			ret = 0
		}
		retorne ret
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 447; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */