import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CartContext) 


  return (
    <div>
        <h1>Carrito de Compras</h1>
        {
            carrito.map( (productoCarrito)=> (
                <div>
                    <img src={productoCarrito.image} alt="" />
                    <h3> {productoCarrito.name} </h3>
                    <h3> Cantidad: {productoCarrito.quantity} </h3>
                    <h3> Precio Unitario: {productoCarrito.price} </h3>
                    <h3> Precio Parcial: { productoCarrito.price * productoCarrito.quantity } </h3>
                </div>
            ))
        }
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart