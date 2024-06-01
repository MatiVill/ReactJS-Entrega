import { createContext, useState } from "react";

//Creamos un contexto de React llamado CartContent
const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    

    return (
        <CartContext.Provider value={ { carrito } } >
            { children }
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }