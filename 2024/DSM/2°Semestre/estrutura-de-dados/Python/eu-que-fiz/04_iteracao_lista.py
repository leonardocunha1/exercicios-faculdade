frutas = ['banana', 'maçã', 'uva', 'morango', 'abacaxi']

for fruta in frutas:
    print(fruta)

print('-' * 30)

#percorredo uma lista em ordem inversa
for fruta in reversed(frutas):
    print(fruta)

print('-' * 30)

# exibindo o índice e o valor de cada elemento da lista
for indice, fruta in enumerate(frutas):
    print(f'{indice}: {fruta}')

print('-' * 30)

# exibindo o índice e o valor de cada elemento da lista, maneira 2. Usando a função range() para gerar os índices
for indice in range(len(frutas)):
    print(f'{indice}: {frutas[indice]}')

print('-' * 30)

# exibindo a lista de trás para frente, acessando as posições da lista
for indice in range(len(frutas) - 1, -1, -1):
    print(f'{indice}: {frutas[indice]}')

print('-' * 30)
