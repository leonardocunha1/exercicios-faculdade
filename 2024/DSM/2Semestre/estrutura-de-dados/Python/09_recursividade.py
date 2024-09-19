def fatorial_iter(num):
    """
    Calcula o fatorial de um número usando um algoritmo iterativo (não recursivo)
    """
    if num < 0:
        raise Exception("Número negativo não tem fatorial")
    
    resposta = 1

    for i in range(1, num + 1):
        resposta *= i
    
    return resposta
###############################################################################

print("Fatorial de 5:", fatorial_iter(5))   
print("Fatorial de 0:", fatorial_iter(0))
print("Fatorial de 1:", fatorial_iter(1))
print("Fatorial de 10:", fatorial_iter(10))

##############################################################################

def fatorial_rec(num):
    """
    Calcula o fatorial de um número usando um algoritmo recursivo
    """
    if num < 0:
        raise Exception("Número negativo não tem fatorial")
    
    if num == 0 or num == 1:
        return 1
    
    return num * fatorial_rec(num - 1)


###############################################################################

print("Fatorial de 5:", fatorial_rec(5))
# explicando o exercício de cima passao a passo?
# fatorial_rec(5) = 5 * fatorial_rec(4)
# fatorial_rec(4) = 4 * fatorial_rec(3)
# fatorial_rec(3) = 3 * fatorial_rec(2)
# fatorial_rec(2) = 2 * fatorial_rec(1)
# fatorial_rec(1) = 1
# depois disso, o programa vai retornando os valores e fazendo as multiplicações, começando de baixo para cima, ou seja, do fatorial_rec(1) para o fatorial_rec(5)

print("Fatorial de 0:", fatorial_rec(0))
print("Fatorial de 1:", fatorial_rec(1))
print("Fatorial de 10:", fatorial_rec(10))