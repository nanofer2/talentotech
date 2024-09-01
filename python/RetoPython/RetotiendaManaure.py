#En la tienda Manaure, se tiene la tradición de exhibir las latas de mermelada de manera apilada en forma triangular. Este peculiar arreglo sigue un patrón específico: en la punta del triángulo se coloca 1 lata, en el siguiente nivel se colocan 2 latas, en el siguiente 3 latas, y así sucesivamente. Este diseño atractivo es parte de la presentación única de la tienda.
#Descripción del Problema: La tienda Manaure enfrenta desafíos al momento de realizar pedidos de latas, ya que no todos los números de latas pueden ser apilados en forma triangular. Se busca desarrollar un programa en Python que, al recibir como entrada un número natural proporcionado por el usuario, determine si dicho número es adecuado o no para ser apilado de acuerdo con el patrón triangular mencionado.

#Condiciones de Apilado Triangular: Dado un número natural n, se puede apilar de manera triangular si existe un nivel tal que la suma total de latas hasta ese nivel sea igual a n.

#Por ejemplo

#Entrada: 6

#Salida: 6 es adecuado para apilar.

#Entrada	El programa solicitará al usuario ingresar un número entero que seria la cantidad de latas de mermelada a apilar.
#Salida	Después de recibir la entrada del usuario, el programa imprimirá en la pantalla si el número proporcionado es adecuado o no para ser apilado de acuerdo con el patrón triangular.


#Casos de prueba:

#Entrada	Salida Esperada
#6	6 es adecuado para apilar.
#8	8 no es adecuado para apilar.
#10	10 es adecuado para apilar.



numero = int(input())
nivel = 1
suma = 0
isValid = False

while suma < numero:
    suma += nivel
    if suma == numero:
        isValid = True
    nivel+=1#aumenta el nivel de la piramide

if isValid:
    print(f"{numero} es adecuado para apilar.")
else:
    print(f"{numero} no es adecuado para apilar.")