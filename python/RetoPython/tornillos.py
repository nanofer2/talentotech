tornillo = float(input())
if tornillo >= 1 and tornillo <3:
    print ("El tornillo es pequeno.")
elif tornillo >=3 and tornillo <5:
    print ("El tornillo es mediano.")
elif tornillo >=5 and tornillo <6.5:
  print("El tornillo es grande.")
elif tornillo >=6.5 and tornillo <=8.5:
  print("El tornillo es muy grande.")
elif tornillo >= 8.5: 
  print("El tornillo es gigante.")
else:
  print("El tamano ingresado no es valido.")

