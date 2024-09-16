//   useEffect permite declarar los eventos de consumo hacer peticiones a un API 
import { useState, useEffect } from "react";
import Layout from "../../Components/Layout"
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
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
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          /** ? = si vienen items */
          //por cada item debe crear una tarjeta
          
          items?.map((item) =>(
            <Card key={item.id} data={item}/>
          ))
/*          items?.map(()=>(
            
            <Card></Card>
            console.log("***************")
            console.log(items)
          )
          )*/
        }
        </div>
        <ProductDetail></ProductDetail>
      </Layout>
      );
}

export default Home