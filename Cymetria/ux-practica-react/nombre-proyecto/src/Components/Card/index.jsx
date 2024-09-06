//figure: permite agrupar contenido que se ilustra (ilustraciones) los navegadores entienden que se esta renderizando contenido
/**
  mb-2 espaciado de los articulos - margin botton
  w-full ocupa todo el ancho del contenedor padre
 relative da posisiones absolutas 
 object-cover hace que la imagen (componente) no se salga del lienzo especificado
 * **/
const Card = () =>{

    return(
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className='absolute bottom-0 left-0 bg-white/60 text-black text-xs m-2 px-3 py-0.5'>Category</span>
                <img className=' w-full h-full object-cover rounded-lg' 
                 src="https://images.pexels.com/photos/20447502/pexels-photo-20447502/free-photo-of-mujer-cafe-calle-caminando.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
                 alt="imagen" />
                <div className='absolute top-1 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>+</div>
            </figure>
            <p className=' flex justify-between'>
                <span className="text-sm font-light">Article</span>
                <span className="text-lg font-medium">Price</span>
            </p>
        </div>
    );

}

export default Card