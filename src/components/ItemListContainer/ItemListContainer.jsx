import "./ItemListContainer.scss";
import getProducts from "../../data/data";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"


const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([])
    const { idCategory } = useParams()



    useEffect(() => {
        getProducts()
            .then((respuesta) => {
                if(idCategory){
                    const productsFilter = respuesta.filter ( (productRes)=> productRes.category === idCategory )
                    setProducts(productsFilter)
                }else{
                    setProducts(respuesta);
                }
             
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log("Finalizó la promesa");
            });
    }, [idCategory]);

    return (
        <div>
            <p className="item-list-container">{saludo}</p>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer