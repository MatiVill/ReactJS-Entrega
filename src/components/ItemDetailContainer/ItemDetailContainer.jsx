import { useEffect, useState } from "react"
import getProducts from "../../data/data"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
const [product, setProduct] = useState({})

useEffect (() => {
    getProducts()
    .then((respuesta) => {
        const productFind = respuesta.find((productRes) => productRes.id === "kimono1");
        setProduct(productFind);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Finalizó la promesa");
    });
}, []);


    return (
    <ItemDetail product={product}/>
    );
}
export default ItemDetailContainer