import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartwidget.css";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext)

    let cantidad = cantidadTotal()

    return (
        <Link to="/cart" className= {cantidad >=1 ? "cartwidget cart-black" : "cartwidget cart-grey"}>
            <PiShoppingCartSimpleFill size={50} />
            <p className="number"> { cantidad >=1 && cantidad } </p>
        </Link>
    )
}
export default CartWidget