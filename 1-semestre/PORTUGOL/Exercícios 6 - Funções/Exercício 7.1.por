programa
{
	
	funcao inicio()
	{
		const inteiro tamanho = 10
		inteiro i, vetor[tamanho]
		para(i=0;i<tamanho;i++){
			escreva("Digite o valor do elemento do vetor ", i+1, ": ")
			leia(vetor[i])
		}
		escreva("A soma do vetor de ", tamanho," elementos é: ",somavet (vetor,tamanho))	
	}
	funcao inteiro somavet(inteiro vet[], inteiro nelementos)
	{
		inteiro i, soma
		soma = 0
		para(i=0;i<nelementos;i++){
			soma = soma + vet[i]
		}
		retorne soma
	}	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 259; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */