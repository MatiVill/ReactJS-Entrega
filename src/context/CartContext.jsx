import { createContext, useState } from "react";

//Creamos un contexto de React llamado CartContent
const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarProducto = (newProduct) => {
        setCarrito([ ...carrito, newProduct ])
    }

    const cantidadTotal = () => {
        const cantidadTotalProdcutos = carrito.reduce( (total, producto) => total + producto.quantity, 0 )
        return cantidadTotalProdcutos
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }


    return (
        <CartContext.Provider value={ { carrito, agregarProducto, cantidadTotal, vaciarCarrito } } >
            { children }
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }