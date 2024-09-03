#funcion
def evaluar(nota):
    mensaje = "no Paso"
    if(nota == 5):
        mensaje = "Paso la materia"
    return mensaje

print(evaluar(3))
print(evaluar(5))