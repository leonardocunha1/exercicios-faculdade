def busca_binaria(lista, valor):
    """
    Realiza uma busca binária em uma lista ordenada procurando por um valor específico. Se o valor for encontrado, a função retorna o índice do valor na lista. Caso contrário, a função retorna -1.
    
    Divide a lista em duas metades e verifica se o valor está na metade esquerda ou direita, se não estiver, repete o processo até encontrar o valor. Se não encontrar, retorna -1.
    """
    ini = 0
    fim = len(lista) - 1
    while ini <= fim:
        meio = (ini + fim) // 2 # o // é a divisão inteira. Por exemplo: 5//2 = 2. O resultado é um número inteiro.
        if lista[meio] == valor:
            return meio
        elif lista[meio] < valor:
            ini = meio + 1
        else:
            fim = meio - 1

    return -1

############################################
# testes com a lista de nomes
from data.nomes_completos import nomes

# importando a função time() do módulo time
from time import time

import sys
sys.dont_write_bytecode = True # Impede a criação do cache de arquivos .pyc

hora_ini = time()
resultado1 = busca_binaria(nomes,'EDSON FERREIRA')
hora_fim = time()
print(f"O nome EDSON FERREIRA foi encontrado na posição {resultado1}")
print(f"Tempo de execução: {(hora_fim - hora_ini)*1000}ms\n")

hora_ini = time()
resultado2 = busca_binaria(nomes,'MARIA FERREIRA')
hora_fim = time()
print(f"O nome MARIA FERREIRA foi encontrado na posição {resultado2}")
print(f"Tempo de execução: {(hora_fim - hora_ini)*1000}ms\n")

hora_ini = time()
resultado3 = busca_binaria(nomes,'VALDIR SILVA')
hora_fim = time()
print(f"O nome VALDIR SILVA foi encontrado na posição {resultado3}")
print(f"Tempo de execução: {(hora_fim - hora_ini)*1000}ms\n")

hora_ini = time()
resultado4 = busca_binaria(nomes,'GILCINEIA GARCIA')
hora_fim = time()
print(f"O nome GILCINEIA GARCIA foi encontrado na posição {resultado4}")
print(f"Tempo de execução: {(hora_fim - hora_ini)*1000}ms\n")
