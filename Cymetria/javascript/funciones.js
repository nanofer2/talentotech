//calcule el valor final de una prenda cuando se le aplique x porcentaje de descuento

function calcularDescuento(precio, porcentaje){
    //hallar el valor del porcentaje
    let descuento = precio * (porcentaje/100);
    //restamos el descuento al precio
    let precioConDescuento = precio - descuento;
    return precioConDescuento;
}

let precioInicial = 100
let descuento = 20;

let precioFinal = calcularDescuento(precioInicial,descuento);
console.log("Precio Original de la prenda: ", precioInicial);
console.log("Descuento de la Prenda: ",descuento);
console.log("Precio Final de la Prenda con descuento: "+precioFinal);
