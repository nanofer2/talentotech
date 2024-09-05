nombre_archivo = "notas_ejem.txt"

with open(nombre_archivo,'w',encoding='UTF-8') as archivo:
    contenido = archivo.write("Este archivo es de ejemplo\n")
    contenido = archivo.write("Agregó una línea\n")
    contenido = archivo.write("Agregó otra línea\n")

with open(nombre_archivo,'r') as archivo:
    contenido = archivo.read()

print("El archivo contiene")
print(contenido)


nombre_archivoNotas = "notas.txt"

nombre = input("Ingrese Su nombre : ")
nota1 = int(input("Ingrese la nota 1 : "))
nota2 = int(input("Ingrese la nota 2 : "))
nota3 = int(input("Ingrese la nota 3 : "))

definitiva = (nota1+nota2+nota3) / 3

with open(nombre_archivoNotas,'w',encoding='UTF-8') as archivoNotas:#si se agrega a en lugar de w agrega al final
    contenidoNotas = archivoNotas.write("************ REPORTE DE NOTAS ********************* \n")
    contenidoNotas = archivoNotas.write(f"\n")
    contenidoNotas = archivoNotas.write(f"\t Estudiante: {nombre}\n")
    contenidoNotas = archivoNotas.write(f"\t \t Nota 1: {nota1}\n")
    contenidoNotas = archivoNotas.write(f"\t \t Nota 2: {nota2}\n")
    contenidoNotas = archivoNotas.write(f"\t \t Nota 3: {nota3}\n")
    contenidoNotas = archivoNotas.write(f"\t Nota definitiva: {definitiva}\n")
    contenidoNotas = archivoNotas.write(f"\n")
    contenidoNotas = archivoNotas.write(f"**************************************************")

with open(nombre_archivoNotas,'r') as archivo:
    contenidoNotas = archivo.read()

print("El archivo contiene")
print(contenidoNotas)


saludo = input("Ingrese el encabezado: ")

nombre_archivoHTML = "encabezadoPython.html"

contenidohtml = (
    f"<html> \n"
    f"\t <head>\n"
    f"\t </head>\n"
    f"\t <body>\n"
    f"\n"
    f"\t \t </h1>\n"
    f"\t \t \t {saludo}\n"
    f"\t \t </h1>\n"
    f"\t </body>\n"
    f"</html>\n"
)



with open(nombre_archivoHTML,'w',encoding='UTF-8') as archivoHtml:
    archivoHtml.write(contenidohtml)


print(f"Se ha generado el archivo {nombre_archivoHTML}")
