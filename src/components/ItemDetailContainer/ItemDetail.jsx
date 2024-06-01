import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {

  const { agregarProducto } = useContext(CartContext)
  //estructuramos el nuevo producto a añadir en el carrito
  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }
  //usamos la función del context para añadir este producto al carrito
    agregarProducto(productCart)
  }

  return (
    <div className="item-detail">
      <div className="image-detail">
        <img src={product.image} />
      </div>
      <div className="content-detail">
        <p className="name-detail">{product.name}</p>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>
        <ItemCount stock={product.stock} addProduct={addProduct} />
      </div>
    </div>
  )
}
export default ItemDetail