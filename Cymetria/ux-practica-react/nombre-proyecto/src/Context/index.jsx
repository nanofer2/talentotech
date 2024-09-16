import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{
    
    const [count,setCount] = useState(null);//el valor dentro de parentesis es el valor inicial de las variables (null) en este caso es null

    const [IsProductDetailOpen,setIsProductDetailOpen] = useState(false);//el valor dentro de parentesis es el valor inicial de las variables (false) en este caso es false
    const openProductDetail = () =>setIsProductDetailOpen(true);
    const closeProductDetail = () =>setIsProductDetailOpen(false);

    //vamos a ser proveedores del contexto al ser llamado desde cualquier lado se puede ir agregando a este componente
    return(
        //en el value envio el valor del contador (atraves de directivas)
        <ShoppingCartContext.Provider value ={{
            count,
            setCount,
            IsProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail}}> 
            {children}
        </ShoppingCartContext.Provider>
    );
};