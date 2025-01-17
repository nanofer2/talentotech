//figure: permite agrupar contenido que se ilustra (ilustraciones) los navegadores entienden que se esta renderizando contenido
/**
  mb-2 espaciado de los articulos - margin botton
  w-full ocupa todo el ancho del contenedor padre
 relative da posisiones absolutas 
 object-cover hace que la imagen (componente) no se salga del lienzo especificado
 * **/
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";
const Card = (data) =>{

    const context = useContext(ShoppingCartContext);//llama al contexto y lo inclusta dentro de la tarjeta para usar lo que hay en el contexto

    const showProductDetail = (ProductDetail) => {
        context.openProductDetail();
        context.setProductToShow(ProductDetail);
    };

    const addProductTocart = (event,productData) => {
        event.stopPropagation();
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, productData]);
        console.log("Información de Articulo en Carrito",context.cartProducts )
        context.openCheckoutSideMenu();
        context.closeProductDetail();
    };

    return(
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg" 
            onClick={() => showProductDetail(data.data) }
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className='absolute bottom-0 left-0 bg-white/60 text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className=' w-full h-full object-cover rounded-lg' 
                 src={data.data.images[1]}
                 alt={data.data.title} />
                <div>
                    <PlusIcon
                        className='absolute top-1 right-0 flex justify-center items-center  text-white bg-green-600 w-6 h-6 rounded-full m-2 p-1'
                        onClick={(event)=> addProductTocart(event,data.data)}
                    ></PlusIcon>
                </div>
            </figure>
            <p className=' flex justify-between'>
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">{data.data.price}</span>
            </p>
        </div>
    );

}

export default Card