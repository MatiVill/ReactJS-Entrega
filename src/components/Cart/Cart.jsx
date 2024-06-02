import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { carrito, vaciarCarrito, borrarProductoPorId, precioTotal } = useContext(CartContext) 

if(carrito.length === 0){
    return (
        <div>
            <h1>Carrito Vacío</h1>
            <Link to="/">Ver Productos</Link>
        </div>
    )
}

  return (
    <div>
        <h1>Carrito de Compras</h1>
        {
            carrito.map( (productoCarrito)=> (
                <div key={productoCarrito.id}>
                    <img src={productoCarrito.image} alt="" />
                    <h3> {productoCarrito.name} </h3>
                    <h3> Cantidad: {productoCarrito.quantity} </h3>
                    <h3> Precio Unitario: {productoCarrito.price} </h3>
                    <h3> Precio Parcial: { productoCarrito.price * productoCarrito.quantity } </h3>
                    <button onClick={ ()=> borrarProductoPorId(productoCarrito.id) }> Borrar </button>
                </div>
            ))
        }
        <h2> Total Compra: {precioTotal()} </h2>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart