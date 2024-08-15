#  Lista é uma estrutura de dados que permite armazenar vários valores em uma única variável.

# Lista de strings
legumes = ['batata', 'cenoura', 'abobrinha', 'beringela', 'pimentão']

# Lista de números
# nums = [3, 10, -7, 0, 1, 22, 4]

# Lista com valores de vários tipos (não é muito comum)
misturado = ['Joaquim', 3, 10, -7, 0, 1, 22.43, True]

# OPERAÇÕES COM LISTAS
# append(item): Adiciona um item ao final da lista.
# insert(pos, item): Adiciona um item em uma posição específica.
# remove(item): Remove um item da lista.
# pop(pos): Remove um item de uma posição específica.
# index(item): Retorna a posição de um item na lista.
# count(item): Retorna a quantidade de vezes que um item aparece na lista.
# sort(): Ordena a lista.
# sorted(lista): Retorna uma lista ordenada sem alterar a original.
# copy(): Retorna uma cópia da lista.
# reverse(): Inverte a ordem dos itens da lista.
# len(lista): Retorna o tamanho da lista.
# list(range(inicio, fim, passo)): Cria uma lista de números.
# list(string): Converte uma string em uma lista de caracteres.
# list(): Cria uma lista vazia.

# Exemplo de uso de listas

# Adicionando um item ao final da lista
legumes.append('alface')

# Adicionando um item em uma posição específica
legumes.insert(2, 'rabanete')

# Removendo um item da lista
legumes.remove('abobrinha')

# Removendo um item de uma posição específica
legumes.pop(0)

# Encontrando a posição de um item na lista
pos = legumes.index('beringela')

# Contando a quantidade de vezes que um item aparece na lista
qtd = legumes.count('cenoura')

# Ordenando a lista
legumes.sort()

# Invertendo a ordem dos itens da lista
legumes.reverse()

# Tamanho da lista
tam = len(legumes)

# Criando uma lista de números
nums = list(range(1, 11, 2))
# nums = [1, 3, 5, 7, 9]. porque o 11 não entra? porque o range vai até o número anterior ao fim.

# Fazendo iteração
for legume in legumes:
    print(legume)

# Fazendo iteração e dobrando os valores
for i in nums:
    print(i * 2)
    
# nesse print abaixo, o que está entre aspas é o separador dos itens da lista. Isso só é possível no Python.
print('-' * 30)

# acessando valores, infomrando a respectiva posição
print('Elemento da QUINTA posição:', legumes[4])
print('Elemento da ÚLTIMA posição:', legumes[-1])
print('Elemento da PENÚLTIMA posição:', legumes[-2])

# substituindo valores
legumes[2] = 'couve'
legumes[0] = 'almeirão'
legumes[-1] = 'alface' # substitui o último elemento

# medindo o tamanho da lista
print('Tamanho da lista de legume:', len(legumes))
print('Tamanho da lista de números:', len(nums))

# removendo o último elemento da lista
removido = legumes.pop()
print('Elemento removido:', removido)

#removendo um elemento na posição 2
removido = legumes.pop(2)
print('Elemento removido:', removido)

# removendo um elemento pelo seu valor
legumes.remove('beringela')
print(legumes)

# aumentando uma lista com elementos de outra lista
mais_legumes = ['espinafre', 'rucula', 'agrião']
legumes.extend(mais_legumes)
print(legumes)

# fatiando uma lista - fatiar significa pegar uma parte da lista
print(legumes[1:4]) # pega do elemento 1 até o 4, sem incluir o 4

# cria uma sublista que contém os elementos desde o início áte o elemento 6
sublista_inicio_6 = legumes[:7]
print(sublista_inicio_6)

# cria uma sublista que contém os elementos desde o elemento 3 até o final
sublista_3_fim = legumes[3:]
print(sublista_3_fim)