//   useEffect permite declarar los eventos de consumo hacer peticiones a un API 
import { useState, useEffect } from "react";
import Layout from "../../Components/Navbar/Layout"
import Card from "../../Components/Navbar/Card";
function Home(){

  /*
    estados: a state llegan los request y State hace la promesa que va a devolver lo que se pide en el request.
    Contextos: 
  */
 // useState puede usar objetos useState(Obj) si no se recibe algo especifico se deja null
    const [items,setItems] = useState(null);

    useEffect(()=> {
      fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json()
      .then((data) => setItems(data))
      );
    },[]//si la peticion no retorna nada retorna un vacio  []
    )

    return (
      //<div className="bg-stone-400">Hola Home!</div>
      //{} = bloque de codigo ()=retorno de objetos
      <Layout>Home!
        {
          /** ? = si vienen items */
          //por cada item debe crear una tarjeta
          items?.map(() =>(
            <Card/>
          ))
/*          items?.map(()=>(
            
            <Card></Card>
            console.log("***************")
            console.log(items)
          )
          )*/
        }
      </Layout>
      );
}

export default Home