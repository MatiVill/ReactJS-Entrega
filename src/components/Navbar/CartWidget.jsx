import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartwidget.css"

const CartWidget = () => {
    const { carrito } = useContext(CartContext)

    return(
        <div className="cartwidget">
        <PiShoppingCartSimpleFill size={50}/>
        <p className="number">1</p>
    </div>        
    )
}
export default CartWidget