//map()
//nos permite iterar sobre la lista y aplicar funciones - devuelve un nuevo aray

const numeros = [2,4,6,8];
const elevarNumeros = numeros.map( (num)=> num * num );

console.log(numeros)
console.log(elevarNumeros)


//foreach

console.log("-----------")
const colores = ["rojo","azul","verde"]
const iterarcolor = colores.forEach((color)=> console.log("El color es: ")+color);
colores.forEach((color)=> console.log("El color es: ")+color);

console.log(colores)
console.log(iterarcolor)