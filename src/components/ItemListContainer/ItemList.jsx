import Item from "./Item"

const ItemList = ( {products} ) => {
    return (
        <div className="item-list" >
            {
                products.map((product) => (
                    <Item key={product.id} product = {product} className="item" />
                ))
            }
        </div>
    )
}
export default ItemList