programa
{
	
	funcao inicio()
	{
		inteiro num
		escreva("Digite um número inteiro: ")
		leia (num)
		primo(num)
	}
	funcao primo(inteiro numero)
	{
		inteiro i, divisao, acm
		acm = 0
		para (i=1;i<=numero;i++){
			divisao = numero % i
			se (divisao == 0){
				acm = acm + 1
			}
		}
		se (acm > 2){
			escreva ("O número ", numero, " não é primo")
		}
		senao {
			escreva ("O número ", numero, " é primo")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 399; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */