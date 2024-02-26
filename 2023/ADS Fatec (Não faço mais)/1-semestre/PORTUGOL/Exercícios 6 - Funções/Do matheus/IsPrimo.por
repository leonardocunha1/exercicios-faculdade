programa
{
	
	funcao inicio()
	{
		inteiro a

		escreva("Digite um número inteiro qualquer: ")
		leia(a)
		primo(a)
	}

	funcao primo(inteiro x){
		inteiro i
		inteiro resultado, flag

		flag = 0
		se(x == 1 ou x == 2){
			flag = 1
		}
		para(i=2; i<x;i++){
			resultado = x % i
			se(resultado == 0){
				flag = 0
				pare
			}
			senao{
				flag = 1
			}
		}
		se(flag == 0){
			escreva("Não é primo")
		}
		senao{
			escreva("É primo!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 256; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */