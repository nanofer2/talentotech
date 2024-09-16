//componente que va a mostrar los detalles de los productos que se clickeen
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid" //importo el icono de la X
import './styles.css'
const ProductDetail = () =>{
    const context = useContext(ShoppingCartContext);//llama al contexto y lo inclusta dentro de la tarjeta para usar lo que hay en el contexto
    return (
        <aside className={`${
            context.isProductDetailOpen ? "flex" : "hidden" //juego con las variables del contexto para seleccionar el estilo deseado
        } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detalle</h2>
                <div >
                    <XMarkIcon 
                        onClick={()=> context.closeProductDetail()}
                        className="h-6 w-6 text-white bg-red-600 rounded-full cursor-pointer" ></XMarkIcon>
                </div>
            </div>
        </aside>
    );

}
export default ProductDetail