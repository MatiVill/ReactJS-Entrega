import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartwidget.css";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext)

    return (
        <Link to="/cart" className="cartwidget">
            <PiShoppingCartSimpleFill size={50} />
            <p className="number"> {cantidadTotal()} </p>
        </Link>
    )
}
export default CartWidget