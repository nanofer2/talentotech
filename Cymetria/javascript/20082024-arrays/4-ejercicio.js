//convertir grados farenheit a celcius

const temperaturasF = [32, 43, 53, 98, 102];

const temperaturasC = temperaturasF.map((t) => (5 / 9) * t - 32);

console.log(temperaturasF);
console.log(temperaturasC);

//sumar elementos de una lista

const numeros = [1, 2, 3, 4, 5];
let suma = 0;

numeros.forEach((num) => {
  //suma = suma + mum;
  suma += num;
});
console.log(numeros);
console.log("El valor de la suma de los numeros del arreglo es : " + suma);

//reduce:

const result = numeros.reduce((acc, numero) => acc + numero);
console.log("---------- REDUCE --------");
console.log(result);
