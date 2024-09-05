def selection_sort(lista):
    """
        ALGORITMO DE ORDENAÇÃO SELECTION SORT
        Isola (seleciona) o primeiro eleento da lista e , em seguida, encontra o menor valor entre os elmeentos do restante da lista.Se o valor encontrado for MENOR que o valor previamente selecionado, efetua a troca entre eles. Continuando, seleciona o segundo elemento da lista, buscando pelo menor valor nas posições subsequentes. Faz a troca entre os dois valores, se necessário. O processo se repete até que o penúltimo elemento da lista seja selecionado, comparado com o último e feita a troca entre eles, se for o caso.
    """

    # loop que vai da primeira posição até a penúltima posição da lista
    # selecionar o elemento que será comparado com os demais
    for i in range(len(lista)-1):
        # seleciona o índice do menor valor (inicialmente o índice i)
        menor = i
        # loop que vai da posição seguinte a i até a última posição da lista
        for j in range(i+1, len(lista)):
            # se o valor do índice j for menor que o valor do índice menor
            if lista[j] < lista[menor]:
                # atualiza o índice do menor valor
                menor = j
        # se o índice do menor valor for diferente do índice i
        if menor != i:
            # troca os valores de posição
            lista[i], lista[menor] = lista[menor], lista[i]
    return lista


# lista de números desordenados
nums = [9, 3, 6, 1, 8, 2, 4, 7, 5]
# chamada da função selection_sort() passando a lista de números desordenados como argumento
print(selection_sort(nums))

# testando com os nomes
from data.nomes_completos import nomes
from time import time

# recortando a lista de nomes para testes
nomes_teste = nomes[:3000]

hora_ini = time()
print(selection_sort(nomes_teste))
hora_fim = time()
print(hora_fim - hora_ini)

# def selection_sort(lista):
#     """
#     ALGORITMO DE ORDENAÇÃO SELECTION SORT
#     Isola (seleciona) o primeiro elemento da lista e, em seguida,
#     encontra o menor valor entre os elementos do restante da lista.
#     Se o valor encontrado for MENOR que o valor previamente
#     selecionado, efetua a troca entre eles. Continuando, seleciona
#     o segundo elemento da lista, buscando pelo menor valor nas
#     posições subsequentes. Faz a troca entre os dois valores, se
#     necessário. O processo se repete até que o penúltimo elemento
#     da lista seja selecionado, comparado com o último e feita a
#     troca entre eles, se for o caso.
#     """

#     # Loop que vai da primeira até a PENÚLTIMA posição para
#     # selecionar o elemento que será comparado aos demais
#     for pos_sel in range(len(lista) - 1):
#         # Inicia supondo que a posição do menor valor do resto
#         # da lista é o que está imediatamente à frente do valor
#         # selecionado
#         pos_menor = pos_sel + 1

#         # Percorre o restante da lista, da posição seguinte a
#         # pos_menor até a última posição
#         for pos in range(pos_menor + 1, len(lista)):
#             # Se o valor que estiver na posição (pos) atual for
#             # MENOR que aquele apontado por pos_menor, ajusta 
#             # pos_menor para o mesmo valor de pos
#             if lista[pos] < lista[pos_menor]: pos_menor = pos

#         # <~ CUIDADO COM A INDENTAÇÃO!
#         # Neste ponto, já terminamos de percorrer o restante da
#         # lista e sabemos a posição do menor valor que há nele.
#         # Comparamos, então, os valores das posições pos_menor e
#         # pos_sel. Se o primeiro for MENOR que o segundo, fazemos
#         # a troca entre eles
#         if lista[pos_menor] < lista[pos_sel]:
#             lista[pos_menor], lista[pos_sel] = lista[pos_sel], lista[pos_menor]

# ##################################################################

# nums = [7, 9, 5, 4, 0, 3, 8, 1, 6, 2]

# print("ANTES: ", nums)
# selection_sort(nums)
# print("DEPOIS:", nums)
# # print(f"Comparações: {comps}; trocas: {trocas}; passadas: {passd}")