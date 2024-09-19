# NOTAS DA AULA
# O def é uma palavra reservada que indica que estamos criando uma função
# o 'f' antes da string é uma formatação de string que permite a interpolação de variáveis.

# Função que calcula o IMC
def imc(altura,peso):
    resultado = peso /altura ** 2
    return resultado

# print(f'O IMC de uma pessoa com 1,74 e 84kg é', imc(1.74,84))

# Função que calcula a área de uma forma geométrica plana, dadas as medidas da base, da altura e o tipo de forma
from math import pi

def calc_area(base,altura,tipo):
    if tipo == 'T': # Triângulo
        return base * altura / 2
    elif tipo == 'R': # Retângulo
        return base * altura
    elif tipo == 'E' : # Elipse
        return (base / 2) * (altura / 2) * pi

    else: # Forma não reconhecida
        return None

print(f"A área de um triângulo de base 6m e altura 9m é {calc_area(6,9,'T')}m²")
print(f"A área de um retângulo de base 6m e altura 9m é {calc_area(6,9,'R')}m²")
print(f"A área de uma elipse de base 6m e altura 9m é {calc_area(6,9,'E')}m²")
print(f"A área de uma forma desconhecida de base 6m e altura 9m é {calc_area(6,9,'X')}")