programa
{
	
	funcao inicio()
	{
		inteiro a

		escreva("Digite um número qualquer: ")
		leia(a)
		escreva(calcFatorial(a))
	}

	funcao inteiro calcFatorial(inteiro x){
		inteiro fatorial, i, aux
		fatorial = 0
		aux = 1
		para(i=2; i<=x; i ++){
			aux = aux *i	
		}
		
		retorne aux
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 275; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */