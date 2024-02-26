programa
{
	
	funcao inicio()
	{
		inteiro case,ni
		real n, r, vendas, salario
		inteiro carros
		cadeia nome

		escreva("Escolha uma das opções abaixo: \n1 - Calcular o quadrado de um número; \n2 - Descobrir se número é par ou impar; \n3 - Escrever a palavra sonho; \n4 - Calcular salário do vendedor de carros; \n5 - Sair do programa\n")
		leia(case)
		r = 0.0
		salario = 0.0

		escolha(case){
			caso 1:
			escreva("Opção escolhida foi: \nCalcular o quadrado de um número\n")
			escreva("Dê o valor de um número qualquer: ")
			leia(n)
			r = n*n
			escreva("O valor de ", n, " ao quadrado é: ", r)
			pare
			
			caso 2:
			escreva("Opção escolhida foi: \nDescobrir se o número é par ou impar\n")
			escreva("Dê o valor de um número inteiro: ")
			leia(ni)
			se(ni % 2 == 0){
				escreva(ni, " é par!")
			}
			senao{
				escreva(ni, " é impar!")
			}
			pare

			caso 3:
			escreva("Opção escolhida foi: \nEscrever a palavra SONHO\n")
			escreva("SONHO!")
			pare

			caso 4:
			escreva("Opção escolhida foi: \nCalcular o salário do vendedor de carros\n")
			escreva("Dê o nome do vendedor: ")
			leia(nome)
			escreva("Dê a quantidade de carros vendidos e o valor total das vendas: ")
			leia(carros, vendas)
			salario = 500.0 + 50.0* carros + (0.05 * vendas)
			escreva("O salário de ", nome," foi de: R$",salario)
			pare

			caso 5:
			escreva("Opção escolhida foi: \nSair do programa")
			pare

			caso contrario:
			escreva("Opção inválida! Escolha uma opção válida!")
			pare
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 343; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */