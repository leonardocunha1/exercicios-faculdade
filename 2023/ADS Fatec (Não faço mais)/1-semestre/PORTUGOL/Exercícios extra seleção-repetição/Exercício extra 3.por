programa
{
	
	funcao inicio()
	{
		caracter sexo
		cadeia resp, totals, totaln
		real i, m, f, sm, nm, sf, nf

		m = 0
		f = 0
		sm = 0 
		nm = 0
		nf = 0
		sf = 0
		
		para (i = 1; i<=3; i=i+1) 
		{
			escreva ("Digite o sexo, M para masculino e F para feminino: ")
			leia (sexo)
	
			escreva ("Digite sim ou não: ")
			leia (resp)

			limpa ()
			se (sexo == 'M')
			{
				m = m + 1
			
				se (resp == "sim") 
				{
					sm = sm + 1
				}
				senao se (resp == "não")
				{
					nm = nm + 1
				}
				senao 
				{
					escreva ("\nDigite sim ou não: ")
				}
			}
			senao se (sexo == 'F')
			{
				f = f + 1 

				se (resp == "sim") 
				{
					sf = sf + 1
				}
				senao se (resp == "não")
				{
					nf = nf + 1
				}
				senao 
				{
					escreva ("\nDigite sim ou não: ")
				}
			}
			senao
			{
				escreva ("Digite M ou F")
			}		
		}
		escreva ("\nO número de pessoas que responderam sim foi ", sm + sf)
		escreva ("\nO número de pessoas que responderam não foi ", nm + nf)
		escreva ("\nA porcentagem de muheres que responderam sim ", (sf/f)*100, "%")
		escreva ("\nA porcentagem de homens que responderam não ", (nm/m)*100, "%")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 475; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */