/** Se va a plicar a todos los demas componentes**/

/**
  flex-col secciona en columnas
  items-center lo que haya dentro de ese componente se va a centrar
  mt-20 margen
  children, ver sesion 21 OJO
 * **/
const Layout = ({children})=>{
    return(
        <div className="flex flex-col items-center mt-20">
            {children}
        </div>
    );
}

export default Layout