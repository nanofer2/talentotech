import { NavLink } from "react-router-dom";
const Navbar = () =>{
    return(
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-8">
            <ul className="flex items-center gap-3 " >
                <li>
                    <NavLink to="/" 
                    className="font-semibold"
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/clothes"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                    >Clothes</NavLink>
                </li>
                <li>
                    <NavLink to="/electronics"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                    
                    >Electronics</NavLink>
                </li>                       
            </ul>
            <ul className="flex items-center gap-3 ">
                <li>
                    <NavLink to="/my-acount"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                    >Mi cuenta</NavLink>
                </li>
                <li>
                    <NavLink to="/my-orders"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                    >Mis Ordenes</NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in"
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                    >Registrarse</NavLink>
                </li>                       
            </ul>        
        </nav>

    );

}

export default Navbar