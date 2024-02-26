programa
{
	inclua biblioteca Util --> u
	inclua biblioteca Matematica	--> mat
	funcao inicio()
	{
	//Leonardo Henrique Oliveira Cunha
	//Victor Hugo Braga Oliveira
	//Declaração de variáveis
	cadeia nome
	inteiro i
	real volume, preco, total, rend, kmr, leitkm1, leitkm2, kmf

	//Cálculos e operações
	i = 0

	enquanto (i<10)
	{
		i++
		escreva ("Nome do motorista: ")
		leia (nome)
		escreva ("Digite a leitura da quilometragem antes da viagem: ")
		leia (leitkm1)
		escreva ("Digite a leitura da quilometragem depois da viagem: ")
		leia (leitkm2)
		escreva ("Digite o volume consumido em litros: ")
		leia (volume)
		escreva ("Digite o preço do litro do combustível em reais por litro: ")
		leia (preco)

		limpa()
		total = volume * preco
		kmf = leitkm2 - leitkm1
		rend = kmf / volume
		kmr = total / kmf

		escreva ("Informações sobre o motorista ", nome, ":")
		escreva ("\nO total gasto com combustível foi ", total, " reais")
		escreva ("\nO rendimento do automóvel foi ", mat.arredondar(rend, 2), " Km/L")
		escreva ("\nO preço pago por quilômetro rodado foi ", mat.arredondar(kmr, 4), " R$/Km\n")
		escreva ("OBS: Os dados acima ficarão disponíveis por 10 segundos antes da solicitação das informações do novo motorista!") 
		u.aguarde(10000)
		limpa()
	}

	
	
	}

}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 100; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */