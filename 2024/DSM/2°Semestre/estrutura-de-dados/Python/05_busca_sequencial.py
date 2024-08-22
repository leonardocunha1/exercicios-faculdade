# essa função realiza uma busca sequencial em uma lista procurando por um valor específico. Se o valor for encontrado, a função retorna o índice do valor na lista. Caso contrário, a função retorna -1.

def busca_sequencial(lista, valor):
    for i in range(len(lista)):
        if lista[i] == valor:
            return i
    return -1

# Testando a função
minha_lista = [1, 3, 5, 7, 9]

pos5 = busca_sequencial(minha_lista, 5)
print(f"O valor 5 está na posição {pos5}")

pos6 = busca_sequencial(minha_lista, 6)
print(f"O valor 6 está na posição {pos6}")

# testes com a lista de nomes
from data.nomes_completos import nomes

# importando a função time() do módulo time
from time import time

import sys
sys.dont_write_bytecode = True # Impede a criação do cache de arquivos .pyc

hora_ini = time()
resultado1 = busca_sequencial(nomes,'EDSON FERREIRA')
hora_fim = time()
print(f"O nome EDSON FERREIRA foi encontrado na posição {resultado1}")
print(f"Tempo de execução: {(hora_fim - hora_ini)*1000}ms\n")

hora_ini = time()
resultado2 = busca_sequencial(nomes,'MARIA FERREIRA')
hora_fim = time()
print(f"O nome MARIA FERREIRA foi encontrado na posição {resultado2}")
print(f"Tempo de execução: {(hora_fim - hora_ini)*1000}ms\n")

hora_ini = time()
resultado3 = busca_sequencial(nomes,'VALDIR SILVA')
hora_fim = time()
print(f"O nome VALDIR SILVA foi encontrado na posição {resultado3}")
print(f"Tempo de execução: {(hora_fim - hora_ini)*1000}ms\n")

hora_ini = time()
resultado4 = busca_sequencial(nomes,'GILCINEIA GARCIA')
hora_fim = time()
print(f"O nome GILCINEIA GARCIA foi encontrado na posição {resultado4}")
print(f"Tempo de execução: {(hora_fim - hora_ini)*1000}ms\n")

####################################