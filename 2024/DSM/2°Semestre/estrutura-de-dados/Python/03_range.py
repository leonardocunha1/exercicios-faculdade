"""
range() é uma função da linguagem Python que gera uma sequência de números. É muito usada em laços de repetição, como o for.
"""

# range com um parâmetro - gera uma faixa numérica de 0 até o número anterior ao parâmetro. Exemplo: range(5) gera a sequência 0, 1, 2, 3, 4
for num in range(5):
    print(num)

print('-' * 30)

# range com dois parâmetros - gera uma faixa numérica do primeiro parâmetro até o número anterior ao segundo parâmetro. Exemplo: range(5, 10) gera a sequência 5, 6, 7, 8, 9
for num in range(5, 10):
    print(num)
