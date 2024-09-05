def merge_sort(lista):
    """
    ALGORITMO DE ORDENAÇÃO MERGE SORT
    No processo de ordenação, este algoritmo 'demonta' a lista original, contendo N elementos, até obter N listas com apenas um elemento cada uma. Em seguida, usando a técnica de mesclagem (merging), "remonta" a lita, desta vez, com os elementos ordenados.
    """
    # PARTE 1: DIVISÃO DA LISTA ORIGINAL EM LISTAS MENORES

    # Para que possa haver divisão da lista, é necessário que ela tenha mais de um elemento. Caso contrário, a função retorna a própria lista
    if len(lista) <= 1:
        return lista
    
    # Encontra a posição do meio da lista, para dividí-la em duas partes
    meio = len(lista) // 2

    # Tira uma cópia da primeira metade da lista
    lista_esq = lista[:meio]
    # Tira uma cópia da segunda metade da lista
    lista_dir = lista[meio:]

    # Chama a função merge_sort() recursivamente para dividir as listas em partes menores
    lista_esq = merge_sort(lista_esq)
    lista_dir = merge_sort(lista_dir)

    # PARTE 2: REMONTAGEM DA LISTA ORIGINAL, COM OS ELEMENTOS ORDENADOS

    # Cria variáveis para controlar as posições dos elementos das listas a serem mescladas
    pos_esq = pos_dir = 0 

    # Cria uma lista vazia para receber os elementos ordenados
    lista_ord = []

    # Enquanto houver elementos nas listas a serem mescladas (lista_esq e lista_dir)
    while pos_esq < len(lista_esq) and pos_dir < len(lista_dir):
        # O menor elemento é da lista da esquerda
        if lista_esq[pos_esq] < lista_dir[pos_dir]:
            # copia o elemento da lista da esquerda para a lista ordenada
            lista_ord.append(lista_esq[pos_esq])
            pos_esq += 1 # avança o ponteiro da lista da esquerda
        # O menor elemento é da lista da direita
        else:
            # copia o elemento da lista da direita para a lista ordenada
            lista_ord.append(lista_dir[pos_dir])
            pos_dir += 1 # avança o ponteiro da lista da direita
    
    # CUIDADO COM A INDENTAÇÃO!
    
    # Quando uma das listas chegar ao fim, a outra ainda terá elementos a serem copiados
    sobra = []

    # Sobra elementos na lista da esquerda
    if pos_esq < len(lista_esq):
        sobra = lista_esq[pos_esq:]
    # Sobra elementos na lista da direita
    else:
        sobra = lista_dir[pos_dir:]

    # O resultado final é a junção (concatenação) da lista ordenada com os elementos que sobraram
    return lista_ord + sobra

############################################################################

# lista de números desordenados
nums = [9, 3, 6, 1, 8, 2, 4, 7, 5]

# chamada da função merge_sort() passando a lista de números desordenados como argumento
print(merge_sort(nums))
