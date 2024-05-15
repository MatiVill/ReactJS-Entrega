const Item = ({product}) => {
    return (
        <div >
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
        </div>
    )
}

export default Item;