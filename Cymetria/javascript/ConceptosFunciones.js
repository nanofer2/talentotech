//Funcion Flecha: permite reducir el codigo en determinadas circuntancias

//capacidades que tienen las funciones
//1, pasar como argumento
function a(){}
function b(a){}

//retornar funciones
function a(){
    function b(){}
    return b;
}
//asignar funciones a variables - exprexión de funcion

const a = function b(){};

/** definiciones
 funcion: un bloque de codigo con una tarea definida que puede o no retornar un valor
 metodo: funcion que pertenece a un objeto
 * **/
let carro ={
    marca: "x",
    modelo: "y",
    acelerar: function acelerar(){
        console.log("el carro esta acelerando");
    }
}

//puede tener propiedades y metodos

function a(){}
const obj ={}
a.call(obj);

//anidar funciones

function a(){
    function b(){
        function c(){}
        c();
    }
    b();
}
a();


/* es posible almacenar funciones en objetos = metodos**/
let avion ={
    nombre : "f-14",
    piloto: function (){
        console.log("Maverick");
        //tiene que retornar o sale un undefined
    }
};
