programa
{
	
	funcao inicio()
	{
		inteiro hinicio,minicio,hfinal,minfinal, r
		escreva ("Digite o momento de início do jogo (apenas a hora): ")
		leia(hinicio)
		escreva ("Digite o momento de início do jogo (apenas os minutos): ")
		leia(minicio)
		escreva ("Digite o momento de término do jogo (apenas a hora): ")
		leia(hfinal)
		escreva ("Digite o momento de término do jogo (apenas os minutos): ")
		leia(minfinal)
		r = duracao (hinicio,minicio,hfinal,minfinal)
		escreva("A duração do jogo foi de ",r," minutos.")
	}
	funcao inteiro duracao(inteiro horai, inteiro minutoi, inteiro horaf, inteiro minutof)
	{
		inteiro totali, totalf, minutagem
		totali = horai * 60 + minutoi
		totalf = horaf * 60 + minutof
		se(totali>=totalf){ //Se o momento de início for maior ou igual ao momento final, quer dizer que a partida acaba no dia seguinte
			minutagem = (1440 - totali) + totalf //(1440 - totali) é a duração do jogo naquele dia e depois foi somado ao tempo do jogo no dia seguinte
		}
		senao {
			minutagem = totalf - totali
		}
		retorne minutagem
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 523; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */