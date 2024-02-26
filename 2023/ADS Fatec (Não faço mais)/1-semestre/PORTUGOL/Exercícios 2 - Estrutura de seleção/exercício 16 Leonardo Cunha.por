programa
{
	
	funcao inicio()
	{

	inteiro x,y,z,w,a,c
	
	//SIM == 1 e NÃO == 2

	escreva ("O animal é mamífero?\n1-Para sim\n2-Para não\n")
	leia (x)

	escolha (x)
	{
		caso 1:
		{
			escreva ("É quadrúpede?\n1-Para sim\n2-Para não\n")
			leia (y)

			escolha (y)
			{
				caso 1:
				{
					escreva ("É carnívoro?\n1-Para sim\n2-Para não\n")
					leia (z)

					escolha (z)
					{
						caso 1:
						{
						escreva ("Este animal é o Leão!")
						pare
						}
						caso 2:
						{
							escreva ("É herbívoro?\n1-Para sim\n2-Para não\n")
							leia (w)

							se (w == 1)
							{
								escreva ("Este animal é o cavalo!")
							}
							senao
							{
								escreva ("Opção inválida! Recomece tudo novamente")
							}
						pare
						}
					}
				pare
				}
				caso 2:
				{
					escreva ("É bípede?\n1-Para sim\n2-Para não\n")
					leia (z)

					escolha (z)
					{
						caso 1:
						{
							escreva ("É onívoro?\n1-Para sim\n2-Para não\n")
							leia (w) 

							se (w == 1)
							{
								escreva ("Este animal é o homem!")
							}
							senao
							{
								escreva ("É frutívoro?\n1-Para sim\n2-Para não\n")
								leia (a)

								se (a==1)
								{
									escreva ("Este animal é o macaco!")
								}
								senao 
								{
									escreva ("Opção inválida! Recomece tudo novamente")
								}
							}
						pare
						}
						caso 2:
						{
							escreva ("É voador?\n1-Para sim\n2-Para não\n")
							leia (w)
							
								se (w == 1)
								{
									escreva ("Este animal é o morcego!")
								}
								senao
								{
									escreva ("É aquático?\n1-Para sim\n2-Para não\n")
									leia (a)

									escolha (a)
									{
										caso 1:
										escreva ("Este animal é a baleia")
										pare
										caso 2:
										escreva ("Opção inválida! Recomece tudo novamente")
										pare
									}
								}
						pare		
						}
					}
				pare	
				}		
			}	
		pare
		}
		caso 2:
		{
			escreva ("É uma ave?\n1-Para sim\n2-Para não\n")
			leia (y)

			escolha (y)
			{
				caso 1:
				{
					escreva ("É não-voadora?\n1-Para sim\n2-Para não\n")
					leia (z)
						se (z==1)
						{
							escreva ("É tropical?\n1-Para sim\n2-Para não\n")
							leia (w)

							escolha (w)
							{
								caso 1:
								{
									escreva ("Este animal é o avestruz!")
								pare	
								}
								caso 2:
								{
									escreva ("É polar?\n1-Para sim\n2-Para não\n")
									leia (a)

									se (a == 1)
									{
										escreva ("Este animal é o Pinguim!")
									}
									senao
									{
										escreva ("Opção inválida! Recomece tudo novamente")
									}
								pare	
								}
								
							}
						}
						senao
						{
							escreva ("É nadadora?\n1-Para sim\n2-Para não\n")
							leia (w)

							escolha (w)
							{
								caso 1:
								escreva ("Este animal é um Pato!")
								pare
								caso 2:
								{
								escreva ("É de rapina?\n1-Para sim\n2-Para não\n")
								leia (a)
									se (a==1)
									{
										escreva("Este animal é a Águia!")
									}
									senao
									{
										escreva ("Opção inválida! Recomece tudo novamente")
									}
								pare
								}
							}
							
						}
				pare
				}
				caso 2:
				{
					escreva ("É um réptil?\n1-Para sim\n2-Para não\n")
					leia (z)

					escolha (z)
					{
						caso 1:
						{
							escreva ("Possui casco?\n1-Para sim\n2-Para não\n")
							leia (w)

								se (w == 1)
								{
									escreva ("Este animal é uma Tartaruga!")
								}
								senao
								{
									escreva ("É carnívoro?\n1-Para sim\n2-Para não\n")
									leia (a)

									escolha (a)
									{
										caso 1:
										{
											escreva ("Este animal é um Crocodilo!")
										pare
										}
										caso 2:
										{
											escreva ("Possui patas?\n1-Para sim\n2-Para não\n")
											leia (c)

											se (c == 1)
											{
												escreva ("Este animal é uma cobra!")
											}
											senao
											{
												escreva ("Te peguei, pilantrinha! Rsrsrs")
											}
										pare	
										}
									}
								}
						pare	
						}
					caso contrario:
						escreva ("Para de trollar mano")
					}
					
				pare	
				}
			}
		pare	
		}
		caso contrario:
			escreva ("Já pedi pra parar de trollar!")	
			
	}
	

	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 55; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */