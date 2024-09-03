user = input("Digite el usuario : ")
passwd = input ("Digite la contraseña :")

tamanoPaswd = int(len(passwd))

if tamanoPaswd <= 8:
    print("la contraseña debe ser mayor a 8 caracteres")
elif user == "admin" and passwd =="12345678":
    print("Se ha logueado satisfactoriamente")
else:
    print("El usuario o la contraseña son incorrectos!")

print(tamanoPaswd)