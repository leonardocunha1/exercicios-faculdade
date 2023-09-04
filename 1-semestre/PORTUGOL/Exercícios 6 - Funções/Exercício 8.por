programa
{
	
	funcao inicio()
	{
		const inteiro tamanho = 10
		inteiro i
		real vetor[tamanho]
		para(i=0;i<tamanho;i++){
			escreva("Digite o valor do elemento do vetor ", i+1, ": ")
			leia(vetor[i])
		}
		escreva(mediavet (vetor,tamanho))	
	}
	funcao real mediavet(real vet[], inteiro nelementos)
	{
		inteiro i
		real media, soma
		soma = 0
		para(i=0;i<nelementos;i++){
			soma = soma + vet[i]
		}
		media = soma / nelementos
		retorne media
	}	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 222; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */