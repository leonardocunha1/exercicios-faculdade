programa
{
	
	funcao inicio()
	{
		inteiro r, num
		escreva("Digite um número: ")
		leia(num)
		r = fatorial(num)
		escreva("O fatorial do número ", num, " é: ", r)
	}
	funcao inteiro fatorial(inteiro numero){
		inteiro i, acm
		acm = 1
		para(i=numero;i>=1;i--){
			acm = acm * i
		}
		retorne acm
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 242; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */