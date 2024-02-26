programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		//Leonardo Oliveira Cunha 
		inteiro numero, num1, num2, meses, numfat
		caracter alternativa
		real altura, peso, capital, somafat
		faca{
			escreva("a) Tabuada de um número\n")
	       	escreva("b) Encontrar o maior elemento entre dois números\n")
	        	escreva("c) Calcular IMC\n")
	        	escreva("d) Calcular montante com juros\n")
	        	escreva("e) Calcular fatorial de um número\n")
	        	escreva("f) Calcular somatório\n")
	        	escreva("g) Sair\n")
	        	escreva("Digite a opção desejada: ")
	        	leia(alternativa)
	        	escolha (alternativa){
	        		caso 'a':
					escreva("Digite um número entre 1 e 9: ")
					leia(numero)
					tabuada(numero)
					u.aguarde(4000)
					limpa()
	        		pare
	        		caso 'b':
					escreva("Digite dois números inteiros diferentes: ")
					leia(num1,num2)
					escreva("O maior número entre ", num1," e ", num2, " é o ",maior(num1,num2), "\n")
					u.aguarde(4000)
					limpa()
	        		pare
	        		caso 'c':
					escreva("Digite sua altura em metros: ")
					leia(altura)
					escreva("Digite seu peso em kg: ")
					leia(peso)
					escreva ("O IMC é ",imc(peso,altura),"\n")
					u.aguarde(4000)
					limpa()
	        		pare
	        		caso 'd':
					escreva("Digite o capital inicial em reais: ")
					leia(capital)
					escreva("Digite a quantidade de meses deste investimento: ")
					leia(meses)
					total(capital,meses)
					u.aguarde(4000)
					limpa()
	        		pare
	        		caso 'e':
					escreva("Digite um número: ")
					leia(numfat)
					escreva(numfat,"! = ",fatorial(numfat),"\n")
					u.aguarde(4000)
					limpa()
	        		pare
	        		caso 'f':
					escreva("Digite um número: ")
					leia(somafat)
					somatorio(somafat)
					escreva("\n")
					u.aguarde(4000)
					limpa()
	        		pare
	        		
	        	}	
		} enquanto (alternativa != 'g')
		se (alternativa == 'g'){
			escreva("Você saiu do programa!")
		}
	}
	funcao tabuada(inteiro num) 
	{//TABUADA
		inteiro i, multi
		se (num >= 1 e num <= 9){
			escreva ("TABUADA DO ", num,"\n")
			para(i=1;i<=10;i++){
				multi = num * i
				escreva(num," x ",i, " = ",multi,"\n")
			}
		}
		senao{
			escreva("ERRO! O número escolhido não está entre 1 e 9!\n")
		}
	}
	funcao inteiro maior(inteiro n1, inteiro n2)
	{//MAIOR NÚMERO
		se (n1>n2){
			retorne n1
		}
		senao{
			retorne n2
		}
	}
	funcao real imc(real peso, real altura)
	{//IMC
		real calculo
		calculo = peso / (altura*altura)
		retorne calculo
	}
	funcao total(real dinheiro, inteiro meses)
	{//INVESTIMENTO
		inteiro i
		real acm
		acm = dinheiro
		para(i=1;i<=meses;i++){
			acm = acm + (dinheiro * 0.1)
			escreva("O montante no final do mês ", i ," é R$", acm,"\n") 
		}
	}
	funcao real fatorial(inteiro numero)
	{//FATORIAL
		inteiro i, acm
		acm = 1
		para(i=numero;i>=1;i--){
			acm = acm * i
		}
		retorne acm
	}
	funcao somatorio(real numsomat)
	{
		inteiro i
		real acm1
		acm1 = 1
		escreva("1 + ")
		para(i=numsomat;i>=1;i--)
		{
			acm1 = acm1 + (1/fatorial(i))
			se (i>1){
			escreva("1/",i,"! + ")
			}
			senao{
				escreva("1/",i,"!")
			}
		}
		escreva(" = ",acm1)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1860; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */