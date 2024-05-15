import "./ItemListContainer.scss";
import getProducts from "../../data/data";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {
    const [ products, setProducts ] = useState([])

useEffect( ()=>{
    getProducts()
    .then((respuesta) => {
        setProducts(respuesta)
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Finalizó la promesa");
    });
}, [] );

    return (
        <div>
        <p className="item-list-container">{saludo}</p>
        <ItemList products = {products}/>
        </div>
    )
}
export default ItemListContainer