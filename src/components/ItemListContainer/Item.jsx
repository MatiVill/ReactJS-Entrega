import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <Link to={"/detail/" + product.id} className="item">
            <img src={product.image} />
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
        </Link>

    )
}

export default Item;