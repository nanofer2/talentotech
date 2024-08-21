const numeros =[1,2,3,4,5,6,7,8,9,10]

const numerosParesFiltrados = numeros.filter((numero)=> numero%2 === 0 )
const numerosImparesFiltrados = numeros.filter((numero)=> numero%2 != 0 )

console.log(numeros)
console.log(numerosParesFiltrados)
console.log(numerosImparesFiltrados)