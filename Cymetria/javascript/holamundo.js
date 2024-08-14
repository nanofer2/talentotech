console.log("Hola Mundo");
//strings

let string1 = 'Hola Mundo :D';
let string2 = "Hello World :D";
let string3 = `este es ${string1}`;

console.log(string1);
console.log(string2);
console.log(string3);

console.log(string1.length);//tamaño del sting
console.log(string1.toLowerCase());
console.log(string1.toLocaleUpperCase());

//tipos de datos

//primitivos
//string
let nombre = "Diego";
//number
let edad = 37;
//
let esMayorEdad=true;
//null
let nulo = null;
//undefined
let nohayvalorDefinido = undefined;
//symbol
let simboloUnico = Symbol("Unico");
//bigint
let numeroGrande = 2n;
//objeto
let carro ={
    marca : "",
    modelo : ""
}

//array
let frutas = ["",""];
//funciones
function saludar(){
    alert("Hola, Mensaje Javascript");
}

