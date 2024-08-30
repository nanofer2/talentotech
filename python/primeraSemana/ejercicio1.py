numero1 = 4
numero2 = 2
resultado = numero1+numero2
print(resultado)
print("el resultado es ",str(resultado))

cadena1 = "hoy "
cadena2 = "es "
cadena3 = "dia "
cadena4 = "de "
cadena5 = "programación"

concat = cadena1+cadena2+cadena3+cadena4+cadena5

asignacion = cadena1
asignacion += cadena2
asignacion += cadena3
asignacion += cadena4
asignacion += cadena5

print("****************** Asignación ***************")
print(asignacion)
print("****************** Concatenacion *****************")
print(concat)

mensajefind = "hola Mundo"
subMsj=mensajefind.find("Mundo")##posicion donde se encuentra la letra en esa cadena

print(subMsj)

mensajef="Hoy es un buen dia para programar"
subMsjf1=mensajef.find("un")
subMsjf2=mensajef.find("programar")

tota=subMsjf1+subMsjf2
print(tota)

##extraer
msjExtra="Hola ernesto"
extractor = msjExtra[1:8]
print(extractor)


msjExtra2="Hoy es un buen dia para programar"
extractor2 = msjExtra2[5:10]
print(extractor2)

## uso de extraccion y comparacion
## del texto dado, 'Nicolas tesla Nacio en el año 1870' 
# validar si el personaje mencionado nacio el año 
# de la independencia de Colombia
msjExtra3="Nicolas tesla Nacio en el año 1870"
extractor3 = int(msjExtra3[29:34])
anioIndependencia = 1810

print(extractor3==anioIndependencia)

#busqueda y extraccion
#extraer las palabras que encuentre al buscar en la siguiente Frase
#'Los Trabajadores cansados comieron las uvas'
# deben quedar las palabras cansados comieron
mensajeEjercicio ="Los Trabajadores cansados comieron las uvas"
pos1 = mensajeEjercicio.find("cansados")
pos2=mensajeEjercicio.find("las")
extractorMsj=mensajeEjercicio[pos1:pos2]
print(pos1,pos2)
print(extractorMsj)

##asignacion y comparacion

