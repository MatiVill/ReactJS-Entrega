import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./carrito.css"

const Cart = () => {
    const { carrito, vaciarCarrito, borrarProductoPorId, precioTotal } = useContext(CartContext) 

if(carrito.length === 0){
    return (
        <div className="cart-empty">
            <h1>Carrito Vacío</h1>
            <Link className="button-buy" to="/">Ver Productos</Link>
        </div>
    )
}

  return (
    <div className="cart">
        <h1>Carrito de Compras</h1>
        {
            carrito.map( (productoCarrito)=> (
                <div className="cartItem" key={productoCarrito.id}>
                    <img src={productoCarrito.image} alt="" />
                    <h3> {productoCarrito.name} </h3>
                    <h3> Cantidad: {productoCarrito.quantity} </h3>
                    <h3> Precio Unitario: {productoCarrito.price} </h3>
                    <h3> Precio Parcial: { productoCarrito.price * productoCarrito.quantity } </h3>
                    <button className="borrarProdcuto" onClick={ ()=> borrarProductoPorId(productoCarrito.id) }> Borrar </button>
                </div>
            ))
        }
        <h2> Total Compra: {precioTotal()} </h2>
        <Link className="button-buy" to="/checkout"> Continuar con la compra </Link>
        <button className="button-delete" onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart