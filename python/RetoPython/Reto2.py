def es_numero_triangular(n):
    suma = 0
    i=1
    while suma < n:
        suma += i
        i +=1
    return suma == n
    
numero = int(input())
if es_numero_triangular(numero):
    print(f"{numero} es adecuado para apilar")
else:
    print(f"{numero} no es adecuado para apilar")

