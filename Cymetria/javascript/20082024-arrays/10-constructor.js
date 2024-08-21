//para coonstruir objetos a medida que lo necesitemos, lo hacemos mediante una funcion constructora


function Persona (nombreParam, edadParam){
    this.nombre = nombreParam;
    this.edad = edadParam;
}

//generar una instancia

const persona1 = new Persona("Diego",39);

console.log(persona1);

const persona2 = new Persona("Paula",50);
console.log(persona2);
console.log("---------- prototype ------");
persona1.prototype.telefono="3167367815"
console.log(persona1);