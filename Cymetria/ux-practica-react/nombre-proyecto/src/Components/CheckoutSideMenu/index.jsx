//componente que va a mostrar los detalles de los productos que se clickeen
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid" //importo el icono de la X
import './styles.css'
const CheckoutSideMenu = () =>{
    const context = useContext(ShoppingCartContext);//llama al contexto y lo inclusta dentro de la tarjeta para usar lo que hay en el contexto

    return (
        <aside className={`${
            context.isCheckoutSideMenuOpen ? "flex" : "hidden" //juego con las variables del contexto para seleccionar el estilo deseado
        } checkout-cart flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Carrito de Compras</h2>
                <div >
                    <XMarkIcon 
                        onClick={()=> context.closeCheckoutSideMenu()}
                        className="h-6 w-6 text-white bg-red-600 rounded-full cursor-pointer" ></XMarkIcon>
                </div>
            </div>
        </aside>
    );

}
export default CheckoutSideMenu