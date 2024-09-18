import { useRoutes,BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context"; //contexto que va a englobarse en toda la app 
import Home from "../Home";
import MyAcount from "../MyAcount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenus from "../../Components/CheckoutSideMenu";
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([ //se crea objeto routes, que usa el objeto que importamos (useRoutes)
    //path: ruta que queremos que tenga
    //element: elemento o etiqueta del componente
    { path :"/",element: <Home />},
    { path :"/my-acount",element: <MyAcount />},
    { path :"/my-order",element: <MyOrder />},
    { path :"/my-orders",element: <MyOrders />},
    { path :"/*",element: <NotFound />},
    { path :"/sign-in",element: <SignIn />}, 
  ]);

  return routes;
};

const  App=()=> {//se deja en una constante para poder usarla en otros lados (se usa la funcion fecha)

  //la etiqueta <AppRoutes /> gestiona las rutas esta etiqueta puede ser nombrada de esta manera <AppRoutes /> debido a que es una funcion. 
  // <BrowserRouter> da el espacio de trabajo para trabajar las rutas
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
      <CheckoutSideMenus />
    </ShoppingCartProvider>
  )
}

export default App
