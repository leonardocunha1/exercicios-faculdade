programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
	//Leonardo Henrique Oliveira Cunha
	//Victor Hugo Braga Oliveira
	//Declaração de variáveis
	real A,B,C,per, area, vol, diag

	//Leitura de dados
	//lINK DO PARELEPÍPEDO: https://prnt.sc/j9QiW_Uil6u_
	escreva ("Digite o valor do lado A do paralelepípedo em centímetros: ")
	leia (A)
	escreva ("Digite o valor do lado B do paralelepípedo em centímetros: ")
	leia (B)
	escreva ("Digite o valor do lado C do paralelepípedo em centímetros: ")
	leia (C)
	
	limpa()

	//Cálculos e operações
	per = (4*A)+(4*B)+(4*C)
	area = (2*A*B)+(2*A*C)+(2*C*B)
	vol = A*B*C
	diag = mat.raiz((A*A)+(B*B)+(C*C),2)

	//Saída de dados
	se (A <= 0 ou B <= 0 ou C <= 0) 
	{
		escreva ("Digite valores válidos para resolução deste exercício")
	}
	senao 
	{
		escreva ("As medidas deste parelepípedo são ", A,"x",B, "x", C, "cm\n")
		escreva ("O perímetro deste parelepípedo é ", per, "cm\n")
		escreva ("A área deste parelepípedo é ", area, "cm²\n")
		escreva ("O volume deste parelepípedo é ", vol, "cm³\n")
		escreva ("A diagonal deste parelepípedo é ", mat.arredondar(diag,2), "cm\n")	
	}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 195; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */