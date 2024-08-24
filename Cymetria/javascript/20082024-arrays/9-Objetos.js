/*

objetos = {
atributos: valor,
}
*/
const persona ={
    nombre: "diego",
    edad: 24,
    direcion:{
        calle: "calle 12",
        av:"Avenida NQS",
        ciudad:"Bogotá"
    },

    saludar(){
        console.log("hola, mi nombre es: "+this.nombre);
    },
}

console.log(persona)
persona.saludar();

//agregar una propiedad
persona.telefono ="3202154215"

console.log(persona);

persona.despedir = ()=>{
    console.log("Adiós!!")
}

console.log(persona);
persona.despedir();

delete persona.telefono
delete persona.despedir

console.log(persona)