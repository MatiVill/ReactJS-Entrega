const ItemDetail = ( { product } ) => {
    return (
        <div>
            <h1>Item Detail Container</h1>
            <img src={product.image} />
            <p>{product.name}</p>
            <p>Precio:${product.price}</p>
        </div>
    )
}
export default ItemDetail