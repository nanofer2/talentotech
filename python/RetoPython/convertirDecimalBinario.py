def decimal_a_binario(n):
    if n == 0:
        return "0"
    binario = ""
    while n > 0:
        binario = str(n % 2) + binario
        n = n // 2
    return binario

numeroDecimal = int(input())
print(decimal_a_binario(numeroDecimal))