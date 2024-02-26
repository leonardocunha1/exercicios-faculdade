programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		cadeia nomevendedor
		inteiro ncarros,comissao,fixo
		real totalvenda,salario,valorvenda

		escreva ("Digite o nome do vendedor: ")
		leia (nomevendedor)

		escreva ("Digite o número de carros vendidos: ")
		leia (ncarros)

		escreva ("Digite o valor total das vendas: ")
		leia (totalvenda)

		comissao = 50*ncarros
		valorvenda = 0.05*totalvenda
		fixo = 500

		salario = comissao+valorvenda+fixo

		escreva ("O salário do(a) vendedor(a) ", nomevendedor, " foi de ", salario," reais")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 516; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */