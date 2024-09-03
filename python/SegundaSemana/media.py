def calcluar_media(numero1,numero2,numero3):
    media = (numero1+numero2+numero3) / 3
    return media



numero1 = int(input("Digite el numero 1 : "))
numero2 = int(input("Digite el numero 2 : "))
numero3 = int(input("Digite el numero 3 : "))

media = calcluar_media(numero1,numero2,numero3)

print(f"La media de los numeros es: {media}")