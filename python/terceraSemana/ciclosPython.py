n = 5
while n > 0:
    print(n)
    n = n-1
print ("Despegue!!")


n2=0
while n2 <= 100:
    print(n2)
    n2 = n2+1

esPar=0
num =0
while num < 100:
    if num % 2 == 0:
        esPar = esPar+1
        print(num)
    num +=1
print(f" del 1 al 100 hay {esPar} numeros pares")

#valida que el usuario escribe un texto

#while True:
#    nombre = input("Indique su nombre")
#    if nombre:
#        break

frutas = ['Pera','Manzana','Limon','Durazno']
for fruta in frutas:
    print (f"Me gusta la {fruta}")
print ("Eso es todo")

contador =0
for contador in range(0,10) :
    print(contador)
