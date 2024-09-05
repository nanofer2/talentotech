#python como tal no tiene opcion de switch

def menu ():
    print("*************************")
    print("Opcion 1")
    print("Opcion 2")
    print("Opcion 3")
    print("Salir 4")
    print("************************")

def opcion1():
    print("Has Seleccionado la opcion 1 ")
def opcion2():
    print("Has Seleccionado la opcion 1 ")
def opcion3():
    print("Has Seleccionado la opcion 1 ")
def opcion4():
    print("Has Seleccionado la opcion 1 ")
    exit()

def switch_example(argument):
    switcher = {
        1:opcion1,
        2:opcion2,
        3:opcion3,
        4:opcion4,
    }

