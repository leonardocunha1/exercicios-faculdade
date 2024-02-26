programa
{
	
	funcao inicio()
	{
		cadeia nome
		real salario, aumento
		inteiro codigo

		escreva ("Digite o nome do funcionário: ")
		leia (nome)

		escreva ("Digite o valor do salário: ")
		leia (salario)

		escreva ("Digite o código do cargo: ")
		leia (codigo)

		se (codigo != 310 e codigo != 456 e codigo != 885){
			aumento = 1.15
		}
		senao se (codigo == 310) {
			aumento = 1.05
		}
		senao se (codigo == 456) {
			aumento = 1.075
		}
		senao 
			aumento = 1.1
		limpa ()
		escreva ("O nome do funcionário é ", nome)
		escreva ("\nO salário antigo do funcionário é ", salario, " reais")
		escreva ("\nO novo salário do funcionário é ", salario*aumento, " reais")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 487; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */