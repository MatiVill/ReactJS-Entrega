import { PiShoppingCartSimpleFill } from "react-icons/pi";
import "./cartwidget.css"

const CartWidget = () => {


    return(
        <div className="cartwidget">
        <PiShoppingCartSimpleFill size={50}/>
        <p className="number">1</p>
    </div>        
    )
}
export default CartWidget