//iteran sobre el array
// no modifican el array original

const primerNumero = [5,10,15,20]
const mayorADiez = primerNumero.find((numero)=> numero>10)
console.log(primerNumero)
console.log (mayorADiez)//solo devuelve el primeor que encuentra

//find index
const numero2 = [6,14,27,56,40]
const numeroIdex = numero2.findIndex( (numero) => numero > 10)

console.log("----------------------")
console.log(numero2)
console.log(numeroIdex)//devuelve el indice donde encuentra la consicion
console.log(numero2[numeroIdex])