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