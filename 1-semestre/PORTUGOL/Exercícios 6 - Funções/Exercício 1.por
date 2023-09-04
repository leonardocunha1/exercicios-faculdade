programa
{
	funcao inicio()
	{
		inteiro num1, num2, r
		escreva("Digite o dividendo: ")
		leia(num1)
		escreva("Digite o divisor: ")
		leia(num2)
		r = div(num1, num2)
		escreva("O quociente inteiro da divisão entre ", num1, " e ", num2, " é ", r)
	}
	funcao inteiro div(inteiro dividendo, inteiro divisor)
	{
		inteiro quociente
		quociente = 0
		enquanto (dividendo >= divisor){
			//Foi retirando do dividendo o divisor e, ao mesmo tempo, foi somado a cada repetição desta o cont++ enquanto dividendo >= divisor. Com isso, é possível saber o valor quociente inteiro desta divisão
			//Por exemplo: se este enquanto foi repetido 4 vezes, o quociente inteiro desta divisão é 4
			dividendo = dividendo - divisor
			quociente ++
		}
		retorne quociente
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 267; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */