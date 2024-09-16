//figure: permite agrupar contenido que se ilustra (ilustraciones) los navegadores entienden que se esta renderizando contenido
/**
  mb-2 espaciado de los articulos - margin botton
  w-full ocupa todo el ancho del contenedor padre
 relative da posisiones absolutas 
 object-cover hace que la imagen (componente) no se salga del lienzo especificado
 * **/
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
const Card = (data) =>{

    const context = useContext(ShoppingCartContext);//llama al contexto y lo inclusta dentro de la tarjeta para usar lo que hay en el contexto

    return(
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg" 
            onClick={() => context.openProductDetail()}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className='absolute bottom-0 left-0 bg-white/60 text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className=' w-full h-full object-cover rounded-lg' 
                 src={data.data.images[1]}
                 alt={data.data.title} />
                <div 
                    className='absolute top-1 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={()=>  context.setCount(context.count + 1)}>
                    +
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